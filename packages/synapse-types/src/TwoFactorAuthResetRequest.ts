/**
 * Used to request a two fa reset token to be sent by email, can be requested with a twoFaToken returned by an authentication attempt.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/TwoFactorAuthResetRequest.html
 */
export type TwoFactorAuthResetRequest = {
  /* The id of the user that attempted to authenticate. */
  userId: number
  /* The current user password that can be used in place of the twoFaToken (e.g. when authenticating with user/password or during a change password workflow). */
  password?: string
  /* The token that was included in the error response when authenticating. */
  twoFaToken?: string
  /* The portal endpoint used as reset link prefix, must be a domain owned by sage. */
  twoFaResetEndpoint: string
}
