import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const { 
      fullName, 
      email, 
      companyName, 
      phone, 
      serviceInterest, 
      invoiceVolume, 
      message, 
      consent 
    } = data;

    // Validate required fields
    if (!fullName || !email || !serviceInterest || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
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

    const companyStr = companyName ? `Company: ${companyName}` : '';
    const phoneStr = phone ? `Phone: ${phone}` : '';
    const volumeStr = invoiceVolume ? `Invoice Volume: ${invoiceVolume}` : '';

    // 1. Email to the team (Notification)
    await transporter.sendMail({
      from: '"VirtualCFOSupport Website" <hello@virtualcfosupport.com>',
      to: 'hello@virtualcfosupport.com', // Receive at the same address
      replyTo: email,
      subject: `New Lead: ${fullName} - ${serviceInterest}`,
      text: `
New Contact Form Submission:

Name: ${fullName}
Email: ${email}
${companyStr}
${phoneStr}
Service Interest: ${serviceInterest}
${volumeStr}
Consent given: ${consent ? 'Yes' : 'No'}

Message:
${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Service Interest:</strong> ${serviceInterest}</p>
        ${invoiceVolume ? `<p><strong>Invoice Volume:</strong> ${invoiceVolume}</p>` : ''}
        <p><strong>Consent given:</strong> ${consent ? 'Yes' : 'No'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    // 2. Email to the user (Confirmation)
    await transporter.sendMail({
      from: '"VirtualCFOSupport" <hello@virtualcfosupport.com>',
      to: email,
      subject: `Thank you for reaching out to VirtualCFOSupport`,
      text: `
Hi ${fullName},

Thank you for contacting us! We have received your inquiry regarding ${serviceInterest}.
A member of our team will review your message and get back to you within 24 hours.

If you have any urgent questions, feel free to reply directly to this email.

Best regards,
The VirtualCFOSupport Team
https://virtualcfosupport.com
      `,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <p>Hi ${fullName},</p>
          <p>Thank you for contacting us! We have received your inquiry regarding <strong>${serviceInterest}</strong>.</p>
          <p>A member of our team will review your message and get back to you within 24 hours.</p>
          <p>If you have any urgent questions, feel free to reply directly to this email.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The VirtualCFOSupport Team</strong></p>
          <p><a href="https://virtualcfosupport.com" style="color: #C9A84C;">virtualcfosupport.com</a></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending the email' },
      { status: 500 }
    );
  }
}
