/**
 * Contact form validation shared by the browser form and the API.
 * Browser-safe: no Node.js APIs. The API never trusts the browser and re-runs these checks.
 */

export const CONTACT_LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  subject: { min: 3, max: 150 },
  message: { min: 20, max: 5000 },
  /** Submissions faster than this after the form loaded are treated as automated. */
  minFillMs: 3000,
} as const;

export type ContactField = 'name' | 'email' | 'subject' | 'message';

export interface ContactInput {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; data: ContactMessage }
  | { ok: false; errors: Partial<Record<ContactField, string>> };

// Pragmatic address check: one @, no spaces, a dot in the domain, sane label characters.
const EMAIL_PATTERN = /^[^\s@<>()[\]\\,;:"]+@[a-z\d](?:[a-z\d-]*[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]*[a-z\d])?)+$/i;
// C0 control characters except tab and line feed, plus DEL.
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

/** Single-line fields: strip control characters and collapse any line breaks (prevents header injection). */
export function cleanLine(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(CONTROL_CHARS, '').replace(/[\r\n\u2028\u2029]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
}

/** Multi-line text: normalise line endings, strip control characters, cap blank lines. */
export function cleanText(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/\r\n?/g, '\n')
    .replace(CONTROL_CHARS, '')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim();
}

export function isValidEmail(value: string): boolean {
  return value.length <= CONTACT_LIMITS.email.max && EMAIL_PATTERN.test(value);
}

export function validateContact(input: ContactInput): ValidationResult {
  const data: ContactMessage = {
    name: cleanLine(input.name),
    email: cleanLine(input.email).toLowerCase(),
    subject: cleanLine(input.subject),
    message: cleanText(input.message),
  };
  const errors: Partial<Record<ContactField, string>> = {};
  const { name, subject, message } = CONTACT_LIMITS;

  if (!data.name) errors.name = 'Please enter your name.';
  else if (data.name.length < name.min) errors.name = `Your name should be at least ${name.min} characters.`;
  else if (data.name.length > name.max) errors.name = `Please keep your name under ${name.max} characters.`;

  if (!data.email) errors.email = 'Please enter your email address.';
  else if (!isValidEmail(data.email)) errors.email = 'Please enter a valid email address, like name@example.com.';

  if (!data.subject) errors.subject = 'Please add a subject.';
  else if (data.subject.length < subject.min) errors.subject = `The subject should be at least ${subject.min} characters.`;
  else if (data.subject.length > subject.max) errors.subject = `Please keep the subject under ${subject.max} characters.`;

  if (!data.message) errors.message = 'Please write a message.';
  else if (data.message.length < message.min) errors.message = `Please write at least ${message.min} characters so I can help.`;
  else if (data.message.length > message.max) errors.message = `Please keep your message under ${message.max} characters.`;

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
