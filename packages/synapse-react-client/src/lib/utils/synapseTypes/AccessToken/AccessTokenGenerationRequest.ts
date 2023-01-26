// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/AccessTokenGenerationRequest.html
export type AccessTokenGenerationRequest = {
  scope: string[]
  userInfoClaims?: object
  name?: string
}
