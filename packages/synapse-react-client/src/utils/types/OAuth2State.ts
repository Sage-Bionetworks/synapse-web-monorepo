/**
 * Type that represents the data that is encoded and sent to/returned from OAuth2 providers
 */
export type OAuth2State = {
  /* If provided, the user is registering for a new account with this username */
  registrationUsername?: string
  /* If present, the user has signed in to attempt resetting 2FA on their account. This is the encoded signed token that
   is required to disable 2FA, in conjunction with a twoFaToken returned by the authentication request. */
  twoFaResetToken?: string
  /* Random token generated before initiating SSO to protect the OAuth flow against CSRF */
  csrfToken?: string
}
