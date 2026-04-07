import { NextRequest } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

/**
 * Resolve the originating client IP from request headers.
 * Falls back to the first `x-forwarded-for` entry, then `x-real-ip`.
 */
const getClientIp = (req: NextRequest): string => {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const first = forwardedFor.split(',')[0]?.trim();
    if (first) return first;
  }
  return req.headers.get('x-real-ip') ?? 'unknown';
};

/**
 * Server-side handler that records a site visit by looking up IP
 * geolocation and forwarding the data to an EmailJS template.
 * Returns 200 on success and a 500 on any failure so the browser
 * can log it without blocking rendering.
 */
export async function POST(req: NextRequest) {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_IP_LOG_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    return Response.json(
      { ok: false, error: 'missing_emailjs_config' },
      { status: 500 },
    );
  }

  const ip = getClientIp(req);

  try {
    const geoResponse = await fetch(`https://ipinfo.io/${ip}/json`, {
      cache: 'no-store',
    });
    const geoData = geoResponse.ok ? await geoResponse.json() : { ip };

    const emailResponse = await fetch(EMAILJS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: geoData,
      }),
    });

    if (!emailResponse.ok) {
      const text = await emailResponse.text();
      console.error('[log-visit] EmailJS rejected request:', text);
      return Response.json(
        { ok: false, error: text },
        { status: emailResponse.status },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('[log-visit] failed to record visit:', error);
    return Response.json(
      { ok: false, error: (error as Error).message },
      { status: 500 },
    );
  }
}
