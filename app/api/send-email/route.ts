import { NextRequest, NextResponse } from "next/server";
import { getEmailCredentials } from "@/app/config/emailCredentials";
import { sendEmail } from "@/app/services/email.service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get email credentials
    const credentials = getEmailCredentials();

    // Email content
    const emailContent = {
      from: credentials.fromEmail,
      to: credentials.toEmails,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        New Contact Form Submission
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
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
      emailContent.html
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

