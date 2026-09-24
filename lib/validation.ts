export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Loosely matches international dial patterns: optional leading +,
// digits/spaces/dashes/dots/parentheses, 7-15 digits total.
export const PHONE_PATTERN = /^\+?[0-9()\-.\s]{7,20}$/;

export function getEmailError(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "Work email is required.";
  if (!EMAIL_PATTERN.test(trimmed)) return "Enter a valid email address.";
  return "";
}

export function getPhoneError(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return ""; // phone is optional
  const digitCount = trimmed.replace(/\D/g, "").length;
  if (!PHONE_PATTERN.test(trimmed) || digitCount < 7 || digitCount > 15) {
    return "Enter a valid phone number.";
  }
  return "";
}

export function getRequiredError(
  label: string,
  value: string,
  opts: { min?: number; max?: number } = {}
) {
  const trimmed = value.trim();
  const min = opts.min ?? 1;
  if (!trimmed) return `${label} is required.`;
  if (trimmed.length < min) return `${label} must be at least ${min} characters.`;
  if (opts.max && trimmed.length > opts.max) {
    return `${label} must be ${opts.max} characters or fewer.`;
  }
  return "";
}
