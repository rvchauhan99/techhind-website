import { NextRequest, NextResponse } from "next/server";
import { getEmailCredentials } from "@/app/config/emailCredentials";
import { sendEmail } from "@/app/services/email.service";
import {
  buildContactFormEmailHtml,
  buildContactFormEmailText,
  buildContactFormSubject,
} from "@/app/utils/contactFormEmail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;
    const trimmedPhone =
      typeof phone === "string" && phone.trim().length > 0 ? phone.trim() : null;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Get email credentials
    const credentials = getEmailCredentials();

    const contactFormPayload = {
      name,
      email,
      phone: trimmedPhone,
      message,
    };

    // Email content
    const emailContent = {
      from: credentials.fromEmail,
      to: credentials.toEmails,
      subject: buildContactFormSubject(name),
      html: buildContactFormEmailHtml(contactFormPayload),
      text: buildContactFormEmailText(contactFormPayload),
    };

    if (credentials.service !== "brevo") {
      return NextResponse.json(
        { error: "Unsupported email service. Set EMAIL_SERVICE=brevo." },
        { status: 500 }
      );
    }

    if (
      !credentials.brevoUser ||
      !credentials.brevoMasterKey ||
      !credentials.fromEmail ||
      credentials.toEmails.length === 0
    ) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Set BREVO_USER, BREVO_MASTER_KEY, BREVO_FROM and BREVO_TO in .env.local.",
        },
        { status: 503 }
      );
    }

    await sendEmail(
      emailContent.to,
      emailContent.subject,
      emailContent.text,
      emailContent.html,
      {
        from: credentials.fromEmail,
        brevoUser: credentials.brevoUser,
        brevoMasterKey: credentials.brevoMasterKey,
        priority: "high",
      }
    );

    return NextResponse.json(
      { success: true, message: "Email sent successfully! We'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

