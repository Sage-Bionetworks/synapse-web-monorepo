// Subset of fields found in https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/oauth/OAuthClient.html

export type OAuthClientPublic = {
  client_id: string
  client_name: string
  verified: boolean
  client_uri: string
  policy_uri: string
  tos_uri: string
}
