import { NextRequest } from 'next/server';
import { CONTACT } from '../../utils/constants';
import { validateContactForm } from '../../utils/validateContactForm';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';
const RECAPTCHA_VERIFY_ENDPOINT =
  'https://www.google.com/recaptcha/api/siteverify';
const RECAPTCHA_MIN_SCORE = 0.5;
const RECAPTCHA_EXPECTED_ACTION = 'contact';

type RecaptchaResult = { ok: true } | { ok: false; reason: string };

/**
 * Verify a reCAPTCHA v3 token with Google's siteverify endpoint.
 * Enforces: `success === true`, `score >= RECAPTCHA_MIN_SCORE`, and
 * `action === RECAPTCHA_EXPECTED_ACTION` to prevent token replay from
 * other pages on the same site.
 */
const verifyRecaptcha = async (
  token: string,
  secret: string,
): Promise<RecaptchaResult> => {
  const res = await fetch(RECAPTCHA_VERIFY_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }),
  });
  if (!res.ok) return { ok: false, reason: 'recaptcha_network' };
  const data = (await res.json()) as {
    success: boolean;
    score?: number;
    action?: string;
    'error-codes'?: string[];
  };
  if (!data.success) return { ok: false, reason: 'recaptcha_failed' };
  if (typeof data.score !== 'number' || data.score < RECAPTCHA_MIN_SCORE) {
    return { ok: false, reason: 'recaptcha_low_score' };
  }
  if (data.action !== RECAPTCHA_EXPECTED_ACTION) {
    return { ok: false, reason: 'recaptcha_action_mismatch' };
  }
  return { ok: true };
};

/**
 * Server-side handler for the Contact form. Forwards the validated
 * payload to EmailJS via the REST API so the public key, service ID,
 * and template ID never ship to the browser bundle.
 */
export async function POST(req: NextRequest) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_CONTACT_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    return Response.json(
      { ok: false, error: 'missing_emailjs_config' },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null) {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const { website, recaptchaToken, ...formFields } = body as Record<
    string,
    unknown
  >;

  // Honeypot: silently succeed so bots think they won and don't retry.
  if (typeof website === 'string' && website.length > 0) {
    console.warn('[send-message] honeypot triggered, silently discarding');
    return Response.json({ ok: true });
  }

  // reCAPTCHA v3: only enforce if a secret is configured (dev-friendly).
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (recaptchaSecret) {
    if (typeof recaptchaToken !== 'string' || !recaptchaToken) {
      return Response.json(
        { ok: false, error: 'recaptcha_missing' },
        { status: 403 },
      );
    }
    const verification = await verifyRecaptcha(recaptchaToken, recaptchaSecret);
    if (!verification.ok) {
      console.error('[send-message] reCAPTCHA failed:', verification.reason);
      return Response.json(
        { ok: false, error: verification.reason },
        { status: 403 },
      );
    }
  }

  const result = validateContactForm(formFields);
  if (!result.ok) {
    return Response.json({ ok: false, errors: result.errors }, { status: 400 });
  }
  const payload = result.data;

  try {
    const emailResponse = await fetch(EMAILJS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          from_name: payload.name,
          from_email: payload.email,
          from_phone_number: payload.phoneNumber,
          message: payload.message,
          to_name: CONTACT.myName,
          to_email: CONTACT.myEmail,
        },
      }),
    });

    if (!emailResponse.ok) {
      const text = await emailResponse.text();
      console.error('[send-message] EmailJS rejected request:', text);
      return Response.json(
        { ok: false, error: text },
        { status: emailResponse.status },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('[send-message] failed to send message:', error);
    return Response.json(
      { ok: false, error: (error as Error).message },
      { status: 500 },
    );
  }
}
