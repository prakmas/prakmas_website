import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyRecaptcha } from '@/lib/recaptcha';

export async function POST(request: NextRequest) {
  console.log('=== Newsletter API Route Hit ===');
  try {
    const body = await request.json();
    console.log('Received newsletter subscription:', body);
    const { email, recaptchaToken } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
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

    // Prepare email content for internal notification
    const emailContent = {
      to: 'info@prakmas.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@prakmas.com',
      subject: `New Newsletter Subscription`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #555; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #ddd; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #888; }
              .highlight { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">📧 New Newsletter Subscription</h2>
              </div>
              <div class="content">
                <div class="highlight">
                  <h3 style="margin: 0;">New subscriber added to PraKMas Newsletter!</h3>
                </div>
                
                <div class="field">
                  <div class="label">Email Address:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Subscription Source:</div>
                  <div class="value">PraKMas Resources Page</div>
                </div>
                
                <div class="field">
                  <div class="label">Next Steps:</div>
                  <div class="value">
                    • Add to your email marketing platform<br>
                    • Send welcome email<br>
                    • Include in future newsletter campaigns
                  </div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from the PraKMas newsletter subscription form</p>
                  <p>Subscribed on: ${new Date().toLocaleString('en-US', { 
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
New Newsletter Subscription

Email: ${email}
Source: PraKMas Resources Page

Next Steps:
- Add to your email marketing platform
- Send welcome email  
- Include in future newsletter campaigns

---
Subscribed on: ${new Date().toLocaleString()}
      `
    };

    // Check if SendGrid API key is configured
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    console.log('SendGrid API Key configured:', !!sendgridApiKey);
    
    if (!sendgridApiKey) {
      console.error('SENDGRID_API_KEY is not configured');
      // For development/testing, log the email instead
      console.log('===== NEWSLETTER SUBSCRIPTION EMAIL WOULD BE SENT =====');
      console.log(JSON.stringify(emailContent, null, 2));
      console.log('========================================================');
      
      return NextResponse.json({
        success: true,
        message: 'Newsletter subscription recorded (SendGrid not configured)',
        data: { email }
      });
    }

    // Send notification email using SendGrid API
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
          name: 'PraKMas Newsletter'
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
      
      // Return user-friendly error message
      return NextResponse.json(
        { 
          error: "We're experiencing temporary technical issues. Please try again in a few minutes."
        },
        { status: 503 }
      );
    }

    // SendGrid returns 202 with no body on success
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { 
        error: 'Something went wrong. Please try again shortly.'
      },
      { status: 500 }
    );
  }
}