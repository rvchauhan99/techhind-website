const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidRecipientEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

export function parseRecipientEmails(value: string): string[] {
  const seen = new Set<string>();
  const recipients: string[] = [];

  for (const part of value.split(/[;,]/)) {
    const email = part.trim();
    if (!email || !isValidRecipientEmail(email)) continue;

    const normalized = email.toLowerCase();
    if (seen.has(normalized)) continue;

    seen.add(normalized);
    recipients.push(email);
  }

  return recipients;
}

export function normalizeRecipientList(to: string | string[]): string[] {
  const rawValue = Array.isArray(to) ? to.join(",") : to;
  return parseRecipientEmails(rawValue);
}
