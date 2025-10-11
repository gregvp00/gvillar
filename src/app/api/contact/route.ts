// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const serverSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
  interests: z.array(z.string()).optional(),
  captcha: z.string().nonempty(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = serverSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", issues: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message, interests, captcha } = parsed.data;

    // --- Turnstile verification always ---
    const secret = process.env.TURNSTILE_SECRET;
    if (!secret) {
      console.error("TURNSTILE_SECRET missing");
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", captcha);

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      }
    );

    const data = await verifyRes.json();

    if (!data.success) {
      console.warn("Turnstile verification failed:", data);
      return NextResponse.json(
        {
          error: "Captcha verification failed",
          details: data["error-codes"] || data,
        },
        { status: 400 }
      );
    }

    if (data.action && data.action !== "submit-form") {
      return NextResponse.json(
        { error: "Invalid captcha action" },
        { status: 400 }
      );
    }

    // ---------- Send email via SendGrid REST API ----------
    const sendgridKey = process.env.SENDGRID_API_KEY;
    const senderEmail = process.env.SENDER_EMAIL ?? process.env.SMTP_FROM;
    const contactTo = process.env.CONTACT_TO;

    if (!sendgridKey || !senderEmail || !contactTo) {
      console.error("SendGrid env vars missing");
      return NextResponse.json(
        { error: "Email not configured on server" },
        { status: 500 }
      );
    }

    const mailText = `
You have a new contact form submission:

Name: ${name}
Email: ${email}
Interests: ${interests?.join(", ") ?? "None"}

Message:
${message}
`.trim();

    const mailHtml = `
      <p>You have a new contact form submission:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Interests:</strong> ${interests?.join(", ") ?? "None"}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    const payload = {
      personalizations: [
        {
          to: [{ email: contactTo }],
          subject: `New contact from ${name}`,
        },
      ],
      from: { email: senderEmail, name: "Website Contact" },
      reply_to: { email, name },
      content: [
        { type: "text/plain", value: mailText },
        { type: "text/html", value: mailHtml },
      ],
    };

    const sgRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sendgridKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!sgRes.ok) {
      const errText = await sgRes.text().catch(() => "");
      console.error("SendGrid API error:", sgRes.status, errText);
      return NextResponse.json(
        { error: "Mail provider error" },
        { status: 502 }
      );
    }

    console.log("Contact validated and email sent via SendGrid:", {
      name,
      email,
      interests,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error en /api/contact:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
