// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/oauth/OIDCAuthorizationRequestDescription.html

export type OIDCAuthorizationRequestDescription = {
  client_id: string
  redirect_uri: string
  scope: string[]
}
