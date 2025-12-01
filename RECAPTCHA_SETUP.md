# reCAPTCHA Setup Guide

This application uses Google reCAPTCHA v2 to protect forms from spam and bots. All forms on the website are protected with invisible reCAPTCHA that doesn't disturb the user interface.

## Protected Forms

1. **Contact Form** (`/contact`) - Main contact form with name, email, company, and message fields
2. **Newsletter Subscription** (`/resources`) - Email subscription form

## Setup Instructions

### 1. Get reCAPTCHA Keys

1. Visit [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Click "Create" to add a new site
3. Fill in the form:
   - **Label**: Your site name (e.g., "PraKMas Website")
   - **reCAPTCHA type**: Choose "reCAPTCHA v2"
   - **Sub type**: Select "Invisible reCAPTCHA badge" for seamless UX
   - **Domains**: Add your domains (localhost, your-domain.com, etc.)
   - Accept the terms of service
4. Click "Submit"
5. Copy your **Site Key** and **Secret Key**

### 2. Configure Environment Variables

Add the following to your `.env.local` file:

```bash
# Google reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Important Notes:**
- The `NEXT_PUBLIC_` prefix is required for the site key to be available on the client-side
- Never expose the secret key on the client-side
- The site key is safe to be public as it's used for client-side verification only

### 3. Domain Configuration

Make sure to add all your domains to the reCAPTCHA configuration:
- `localhost` (for development)
- Your production domain(s)
- Any staging/preview domains

## How It Works

### Client-Side Protection
- Forms include an invisible reCAPTCHA component that doesn't affect the UI
- When users submit a form, reCAPTCHA automatically verifies they're human
- A token is generated and sent to the server with the form data

### Server-Side Verification
- API routes (`/api/contact`, `/api/newsletter`) verify the reCAPTCHA token
- Google's verification API confirms the token is valid
- Forms are only processed if verification succeeds

## Development Mode

In development, if reCAPTCHA keys are not configured:
- Forms will still work but without protection
- Console warnings will indicate missing configuration
- This allows development to continue while setting up reCAPTCHA

## Testing

To test reCAPTCHA integration:

1. **With Valid Keys**: Forms should work normally with invisible verification
2. **Without Keys**: Forms should show user-friendly error messages
3. **Invalid Tokens**: Server should reject submissions with appropriate errors

## Security Features

- **Double Verification**: Both client and server-side validation
- **Token Expiry**: Tokens have limited lifespan for security
- **Score Threshold**: Additional security checks (for v3 compatibility)
- **Rate Limiting**: Natural protection against automated submissions

## Troubleshooting

### Common Issues

1. **"reCAPTCHA verification failed"**
   - Check if RECAPTCHA_SECRET_KEY is set correctly
   - Verify domain is added to reCAPTCHA console
   - Ensure site key matches the one in environment variables

2. **reCAPTCHA not loading**
   - Check if NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set
   - Verify internet connection (reCAPTCHA requires external API access)
   - Check browser console for JavaScript errors

3. **Development vs Production**
   - Different environments may need different keys
   - Ensure domains are properly configured for each environment

### Testing Commands

```bash
# Test with curl (replace with actual token)
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test","recaptchaToken":"test-token"}'
```

## Security Best Practices

1. **Environment Variables**: Never commit real keys to version control
2. **Domain Restrictions**: Only add necessary domains to reCAPTCHA
3. **Regular Key Rotation**: Consider rotating keys periodically
4. **Monitor Usage**: Check reCAPTCHA admin console for unusual activity
5. **Backup Verification**: Server-side validation is the primary security layer

## Migration Notes

This implementation uses:
- `react-google-recaptcha` package for React integration
- Invisible reCAPTCHA for better UX
- Custom hook (`useReCaptcha`) for reusable logic
- Server-side verification utility (`lib/recaptcha.ts`)

The implementation is designed to be:
- **Non-intrusive**: No visible reCAPTCHA widgets
- **Reusable**: Easy to add to new forms
- **Reliable**: Proper error handling and fallbacks
- **Secure**: Both client and server-side protection