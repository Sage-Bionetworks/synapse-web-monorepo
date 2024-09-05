/**
 * Allows to disable two-factor authentication for the user account
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/TwoFactorAuthDisableRequest.html
 */
export type TwoFactorAuthDisableRequest = {
  /* Signed token containing the information necessary to reset 2fa for a user. */
  twoFaResetToken: TwoFactorAuthResetToken
  /* The current user password that can be used in place of the twoFaToken (e.g. when authenticating with user/password or during a change password workflow). */
  password?: string
  /* The token that was included in the error response when authenticating. */
  twoFaToken?: string
}

/**
 * Signed token containing the information necessary to reset 2fa for a user.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/TwoFactorAuthResetToken.html
 */
export type TwoFactorAuthResetToken = {
  concreteType: 'org.sagebionetworks.repo.model.auth.TwoFactorAuthResetToken'
  /* The hash message authentication code for the message. */
  hmac: string
  /* The version of the key used to generate the HMAC. */
  version: number
  /* The date-time when this token expires. */
  expiresOn: string
  /* The date-time the token was generated. */
  createdOn: string
  /* The id of the user. */
  userId: number
}
