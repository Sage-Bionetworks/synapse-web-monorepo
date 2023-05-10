export enum ErrorResponseCode {
  /* The user's password must be reset via email. */
  PASSWORD_RESET_VIA_EMAIL_REQUIRED = 'PASSWORD_RESET_VIA_EMAIL_REQUIRED',
  /* The user has not passed the certification process. */
  USER_CERTIFICATION_REQUIRED = 'USER_CERTIFICATION_REQUIRED',
  /* At least one of the columns listed in a FacetColumnRequest is not facet-able according to the table's schema. */
  INVALID_TABLE_QUERY_FACET_COLUMN_REQUEST = 'INVALID_TABLE_QUERY_FACET_COLUMN_REQUEST',
  /* The OAuth Client is not verified. */
  OAUTH_CLIENT_NOT_VERIFIED = 'OAUTH_CLIENT_NOT_VERIFIED',
  /* Two-factor authentication is required. */
  TWO_FA_REQUIRED = 'TWO_FA_REQUIRED',
}

/**
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/ErrorResponse.html
 */
export type ErrorResponse = {
  concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
  reason: string
  errorCode?: ErrorResponseCode
}

export type TwoFactorAuthErrorResponse = {
  concreteType: 'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse'
  /* The id of the user that attempted to authenticate.*/
  userId: number
  /* Token included when two-factor authentication is required. If present the client will need to include this token as part of the TwoFactorAuthLoginRequest.*/
  twoFaToken: string
  /* The reason for the error*/
  reason: string
  /* A code to be used by clients to handle the error.*/
  errorCode: ErrorResponseCode.TWO_FA_REQUIRED
}
