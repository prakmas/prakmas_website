import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyRecaptcha } from '@/lib/recaptcha';

export async function POST(request: NextRequest) {
  console.log('=== Contact API Route Hit ===');
  try {
    const body = await request.json();
    console.log('Received form data:', body);
    const { name, email, company, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token if reCAPTCHA is configured
    if (process.env.RECAPTCHA_SECRET_KEY) {
      const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
      if (!isRecaptchaValid) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
    } else {
      console.log('reCAPTCHA verification skipped - RECAPTCHA_SECRET_KEY not configured');
    }

    // Prepare email content
    const emailContent = {
      to: 'info@prakmas.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@prakmas.com',
      subject: `New Contact Form Submission from ${name} - PraKMas`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #d14b1e 0%, #ff5a1f 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #555; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #ddd; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #888; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
                <p style="margin: 5px 0 0 0; font-size: 14px;">PraKMas Global Innovations</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                ${company ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from the PraKMas Global Innovations contact form</p>
                  <p>Submitted on: ${new Date().toLocaleString('en-US', { 
                    dateStyle: 'full', 
                    timeStyle: 'long' 
                  })}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission - PraKMas Global Innovations

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

Message:
${message}

---
Submitted on: ${new Date().toLocaleString()}
      `
    };

    // Check if SendGrid API key is configured
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    console.log('SendGrid API Key configured:', !!sendgridApiKey);
    
    if (!sendgridApiKey) {
      console.error('SENDGRID_API_KEY is not configured');
      // For development/testing, log the email instead
      console.log('===== EMAIL WOULD BE SENT =====');
      console.log(JSON.stringify(emailContent, null, 2));
      console.log('================================');
      
      return NextResponse.json({
        success: true,
        message: 'Email logged (SendGrid not configured)',
        data: { name, email, company, message }
      });
    }

    // Send email using SendGrid API
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendgridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: emailContent.to }],
            subject: emailContent.subject,
          }
        ],
        from: {
          email: emailContent.from,
          name: 'PraKMas Contact Form'
        },
        reply_to: {
          email: email,
          name: name
        },
        content: [
          {
            type: 'text/plain',
            value: emailContent.text
          },
          {
            type: 'text/html',
            value: emailContent.html
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText };
      }
      console.error('SendGrid API error:', errorData);
      
      // Map SendGrid errors to user-friendly messages
      const errorMessage = errorData.errors?.[0]?.message || errorData.message || 'Failed to send email';
      
      // Return user-friendly error message
      return NextResponse.json(
        { 
          error: "We're experiencing temporary technical issues. Please email us directly at info@prakmas.com or try again in a few minutes."
        },
        { status: 503 }
      );
    }

    // SendGrid returns 202 with no body on success
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Something went wrong. Please email us directly at info@prakmas.com or try again shortly.'
      },
      { status: 500 }
    );
  }
}
