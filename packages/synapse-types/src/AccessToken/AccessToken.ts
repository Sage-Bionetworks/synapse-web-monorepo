// Subset of fields found in https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/oauth/OAuthClient.html

export type AccessToken = {
  accessToken: string // An access token of the user that is agreeing to the ToS.
  termsOfServiceVersion: string // The semantic version of the ToS that the user read and agreed to.
}
