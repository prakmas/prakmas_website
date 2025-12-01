import { useRef, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export interface UseReCaptchaReturn {
  recaptchaRef: React.RefObject<ReCAPTCHA | null>;
  executeRecaptcha: () => Promise<string | null>;
  resetRecaptcha: () => void;
}

export const useReCaptcha = (): UseReCaptchaReturn => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const executeRecaptcha = useCallback(async (): Promise<string | null> => {
    // If reCAPTCHA is not configured, return a dummy token
    if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      console.log('reCAPTCHA not configured - using development mode');
      return 'development-token';
    }

    if (!recaptchaRef.current) {
      console.error('reCAPTCHA ref is not available');
      return null;
    }

    try {
      // Execute reCAPTCHA and get token
      const token = await recaptchaRef.current.executeAsync();
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  }, []);

  const resetRecaptcha = useCallback(() => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, []);

  return {
    recaptchaRef,
    executeRecaptcha,
    resetRecaptcha,
  };
};

export default useReCaptcha;