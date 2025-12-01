# PraKMas Website Setup Guide

This is a Next.js website for PraKMas Global Innovations, built with TypeScript, Tailwind CSS, and modern web technologies.

## Prerequisites

- Node.js >= 20.9.0
- npm >= 9.6.0

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables Setup

### Required Services

You need to set up the following services and get API keys:

#### 1. SendGrid (Email Service)
- **Purpose**: Send contact form submissions and newsletter signups to info@prakmas.com
- **Setup**: 
  - Go to [SendGrid](https://sendgrid.com/) and create an account
  - Navigate to Settings > API Keys
  - Create a new API key with "Mail Send" permissions
  - **Important**: Verify the sender email `noreply@prakmas.com` in SendGrid:
    - Go to Settings > Sender Authentication
    - Complete Single Sender Verification for `noreply@prakmas.com`
    - Or set up Domain Authentication for prakmas.com

#### 2. Google reCAPTCHA v2 (Invisible)
- **Purpose**: Protect forms from spam and bots
- **Setup**:
  - Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
  - Click "+" to register a new site
  - Select reCAPTCHA v2 > Invisible reCAPTCHA badge
  - Add your domains (localhost for development, prakmas.com for production)
  - Get both Site Key and Secret Key

### Create .env.local File

Copy the example file and fill in your keys:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your actual keys:

```env
# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@prakmas.com

# Google reCAPTCHA v2 (Invisible)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here
```

## Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Email Configuration

All emails are sent to: **info@prakmas.com**

This includes:
- Contact form submissions
- Newsletter signups
- All user inquiries

Make sure this email address is actively monitored.

## Features

- ✅ Modern Next.js 16 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Dark/Light theme support
- ✅ reCAPTCHA spam protection
- ✅ SendGrid email integration
- ✅ Responsive design
- ✅ SEO optimized

## Important Notes

1. **Never commit `.env.local`** - It's already in .gitignore
2. **Verify SendGrid sender email** - SendGrid requires email verification before sending
3. **Test forms locally** - You can skip reCAPTCHA in development if keys aren't set
4. **Production deployment** - Make sure to set environment variables in your hosting platform (Netlify, Vercel, etc.)

## Troubleshooting

### Contact form not working?
1. Check that SENDGRID_API_KEY is set correctly
2. Verify that noreply@prakmas.com is verified in SendGrid
3. Check browser console for errors
4. Verify reCAPTCHA keys if using them

### reCAPTCHA not showing?
- It's invisible by design! It works in the background
- Users only see it if suspicious activity is detected

## Support

For questions or issues, contact: info@prakmas.com
