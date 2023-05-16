// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/LoginResponse.html
export type LoginResponse = {
  accessToken: string // A token that authorizes subsequent requests
  acceptsTermsOfUse: boolean // BOOLEAN	Does the user accept the terms of use?
  authenticationReceipt: string // STRING	A valid receipt allows the user to skip extra security checks.
}
