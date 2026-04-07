import { emailPattern, phoneNumberPattern } from './regexPatterns';

/** Raw/sanitized shape of the contact form payload. */
export type ContactFormInput = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

/** Per-field validation error messages. */
export type ContactFormErrors = Partial<Record<keyof ContactFormInput, string>>;

/** Discriminated result of `validateContactForm`. */
export type ContactFormValidationResult =
  | { ok: true; data: ContactFormInput }
  | { ok: false; errors: ContactFormErrors };

export const NAME_MIN = 2;
export const NAME_MAX = 100;
export const EMAIL_MAX = 254;
export const MESSAGE_MIN = 10;
export const MESSAGE_MAX = 2000;

const trimString = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : '';

/**
 * Validate and sanitize a raw contact form payload.
 *
 * Trims every string field, enforces length + format rules, and returns
 * either the sanitized data or a per-field errors map. Imported by both
 * the client submit handler (pre-flight UX) and the `/api/send-message`
 * route (authoritative) so the rules stay in lockstep.
 *
 * @param raw - Unknown payload from a form submission or JSON body.
 * @returns `{ ok: true, data }` on success, `{ ok: false, errors }` otherwise.
 */
export const validateContactForm = (
  raw: unknown,
): ContactFormValidationResult => {
  if (typeof raw !== 'object' || raw === null) {
    return { ok: false, errors: { name: 'Invalid payload.' } };
  }

  const input = raw as Record<string, unknown>;
  const name = trimString(input.name);
  const email = trimString(input.email);
  const phoneNumber = trimString(input.phoneNumber);
  const message = trimString(input.message);

  const errors: ContactFormErrors = {};

  if (name.length < NAME_MIN) {
    errors.name = `Name must be at least ${NAME_MIN} characters.`;
  } else if (name.length > NAME_MAX) {
    errors.name = `Name must be at most ${NAME_MAX} characters.`;
  }

  if (!email) {
    errors.email = 'Email is required.';
  } else if (email.length > EMAIL_MAX) {
    errors.email = `Email must be at most ${EMAIL_MAX} characters.`;
  } else if (!emailPattern.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (phoneNumber && !phoneNumberPattern.test(phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid phone number (9–11 digits).';
  }

  if (message.length < MESSAGE_MIN) {
    errors.message = `Message must be at least ${MESSAGE_MIN} characters.`;
  } else if (message.length > MESSAGE_MAX) {
    errors.message = `Message must be at most ${MESSAGE_MAX} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { name, email, phoneNumber, message },
  };
};
