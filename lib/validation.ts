export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function getEmailError(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "Work email is required.";
  if (!EMAIL_PATTERN.test(trimmed)) return "Enter a valid email address.";
  return "";
}

export function getPhoneError(value: string) {
  const trimmed = value.trim();
  // The contact API accepts an optional phone string in any format.
  if (trimmed.length > 40) {
    return "Phone must be 40 characters or fewer.";
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
