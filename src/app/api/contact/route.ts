// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const serverSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
  interests: z.array(z.string()).optional(),
  captcha: z.string().min(1),
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

    const secret = process.env.TURNSTILE_SECRET;
    if (!secret) {
      console.error("TURNSTILE_SECRET missing");
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // Verificar token con Turnstile
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
      console.warn("Turnstile failed:", data);
      return NextResponse.json(
        { error: "Captcha verification failed", details: data["error-codes"] },
        { status: 400 }
      );
    }

    // Opcional: comprobar action y hostname si quieres más seguridad
    if (data.action && data.action !== "submit-form") {
      return NextResponse.json(
        { error: "Invalid captcha action" },
        { status: 400 }
      );
    }
    // if (data.hostname && !String(data.hostname).endsWith("tudominio.com")) { ... }

    // ---------- CAPTCHA verificado: ahora enviar el correo ----------
    // Configurar transporter con env vars
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
    const contactTo = process.env.CONTACT_TO; // email receptor

    if (!smtpHost || !smtpUser || !smtpPass || !contactTo) {
      console.error("SMTP env vars missing");
      return NextResponse.json(
        { error: "Email not configured on server" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true para 465, false para 587/other
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailText = `
You have a new contact form submission:

Name: ${name}
Email: ${email}
Interests: ${interests?.join(", ") ?? "None"}

Message:
${message}
`;

    await transporter.sendMail({
      from: `"Website Contact" <${smtpFrom}>`,
      to: contactTo,
      subject: `New contact from ${name}`,
      text: mailText,
    });

    // No devolver ni loguear tokens secretos
    console.log("Contact validated and email sent:", {
      name,
      email,
      interests,
    });

    return NextResponse.json({ ok: true, message: "Form received" });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
