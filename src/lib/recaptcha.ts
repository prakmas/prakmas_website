/**
 * Verifies a reCAPTCHA token with Google's reCAPTCHA API
 * @param token - The reCAPTCHA token to verify
 * @returns Promise<boolean> - True if verification succeeds, false otherwise
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY environment variable is not set - skipping verification');
    return true; // Allow requests to proceed in development/testing
  }

  if (!token) {
    console.error('No reCAPTCHA token provided');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('reCAPTCHA verification request failed:', response.status, data);
      return false;
    }

    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data['error-codes']);
      return false;
    }

    // Additional security check: verify the score is high enough (for reCAPTCHA v3)
    // For reCAPTCHA v2, data.score will be undefined, so this check will pass
    if (data.score !== undefined && data.score < 0.5) {
      console.error('reCAPTCHA score too low:', data.score);
      return false;
    }

    console.log('reCAPTCHA verification successful');
    return true;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}

export default verifyRecaptcha;