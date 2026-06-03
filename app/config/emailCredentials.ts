// Email configuration is loaded only from environment variables.

export interface EmailCredentials {
  fromEmail: string;
  toEmail: string;
  toEmails: string[];
  brevoUser: string;
  brevoMasterKey: string;
  service: string;
}

function parseRecipientList(value: string): string[] {
  return value
    .split(/[;,]/)
    .map((email) => email.trim())
    .filter(Boolean);
}

export function getEmailCredentials(): EmailCredentials {
  const fromEmail = process.env.BREVO_FROM || "";
  const toEmailRaw = process.env.BREVO_TO || "";
  const toEmails = parseRecipientList(toEmailRaw);
  const toEmail = toEmails.join(", ");
  const service = process.env.EMAIL_SERVICE;
  const brevoUser = process.env.BREVO_USER || "";
  const brevoMasterKey = process.env.BREVO_MASTER_KEY || "";

  return {
    fromEmail,
    toEmail,
    toEmails,
    brevoUser,
    brevoMasterKey,
    service: service || "",
  };
}
