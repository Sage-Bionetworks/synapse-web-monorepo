export const TOTP_GUIDANCE_TEXT =
  'Enter the 6-digit, time-based verification code provided by your authenticator app.'

export const RECOVERY_CODE_GUIDANCE_TEXT_SHORT =
  'Enter a one-time backup code. Your backup code is a 16 digit code, with groups of 4 letters or numbers separated by hyphens.'

export const TOTP_CLOCK_SKEW_ERROR_APPENDAGE =
  'Please ensure automatic date and time is enabled in your device settings and try again.'

export const NUMERIC_CODE_HTML_INPUT_PROPS = {
  inputMode: 'numeric',
  pattern: '[0-9]*',
} as const satisfies React.InputHTMLAttributes<HTMLInputElement>
