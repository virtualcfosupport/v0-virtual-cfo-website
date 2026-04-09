import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'hello@virtualcfosupport.com',
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 1. Email to the team (Notification)
    await transporter.sendMail({
      from: '"VirtualCFOSupport Website" <hello@virtualcfosupport.com>',
      to: 'hello@virtualcfosupport.com',
      replyTo: email,
      subject: `New Newsletter Subscriber: ${email}`,
      text: `We have a new newsletter subscriber!\n\nEmail: ${email}`,
      html: `<p>We have a new newsletter subscriber!</p><p><strong>Email:</strong> ${email}</p>`,
    });

    // 2. Email to the user (Confirmation)
    await transporter.sendMail({
      from: '"VirtualCFOSupport" <hello@virtualcfosupport.com>',
      to: email,
      subject: `Welcome to the VirtualCFOSupport Newsletter`,
      text: `
Hi there,

Thank you for subscribing to our newsletter! We're thrilled to have you on board.
You'll receive updates, benchmarks, and insights right in your inbox.

Best regards,
The VirtualCFOSupport Team
https://virtualcfosupport.com
      `,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <p>Hi there,</p>
          <p>Thank you for subscribing to our newsletter! We're thrilled to have you on board.</p>
          <p>You'll receive updates, benchmarks, and insights right in your inbox.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The VirtualCFOSupport Team</strong></p>
          <p><a href="https://virtualcfosupport.com" style="color: #C9A84C;">virtualcfosupport.com</a></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'An error occurred while subscribing' },
      { status: 500 }
    );
  }
}
