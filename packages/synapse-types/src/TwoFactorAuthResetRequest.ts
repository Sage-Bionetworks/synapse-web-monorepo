/**
 * Used to request a two fa reset token to be sent by email, can be requested with a twoFaToken returned by an authentication attempt.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/TwoFactorAuthResetRequest.html
 */
export type TwoFactorAuthResetRequest = {
  /* The id of the user that attempted to authenticate. */
  userId: number
  /* The token that was included in the error response when authenticating. */
  twoFaToken: string
  /* The portal endpoint used as reset link prefix, must be a domain owned by sage. */
  twoFaResetEndpoint: string
}
