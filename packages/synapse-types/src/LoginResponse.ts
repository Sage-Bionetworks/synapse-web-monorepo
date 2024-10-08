// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/LoginResponse.html
export type LoginResponse = {
  sessionToken?: string // (deprecated) A token that identifies the user
  accessToken: string // A token that authorizes subsequent requests
  acceptsTermsOfUse: boolean // When false, the user has not agreed to the currently required version of the ToS
  lastAgreementDate?: string | null // The date/time when the user last agreed to the ToS
  lastAgreementVersion?: string | null // The version of ToS that the user last agreed to
  authenticationReceipt?: string // A valid receipt allows the user to skip extra security checks
}
