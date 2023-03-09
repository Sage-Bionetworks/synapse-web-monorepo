/** 
 Metadata for a list page OAuth 2.0 clients
https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/oauth/OAuthClientList.html
*/

export interface OAuthClientList {
  results: OAuthClient[]
  nextPageToken?: string
}

/**
 OAuth 2.0 Client metadata described in OpenID Connect Core 1.0 Client Metadata
 https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/oauth/OAuthClient.html 
 */

export interface OAuthClient {
  client_id?: string
  client_name: string
  verified?: boolean
  redirect_uris: string[]
  client_uri?: string
  policy_uri?: string
  tos_uri?: string
  sector_identifier_uri: string
  sector_identifier?: string
  userinfo_signed_response_alg?: OIDCSigningAlgorithm
  createdOn?: string
  modifiedOn?: string
  createdBy?: string
  etag?: string
}

/**
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/oauth/OAuthClientVerificationPrecheckResult.html
 * (used in https://rest-docs.synapse.org/rest/PUT/oauth2/client/id/verificationPrecheck.html)
 */
export interface OAuthClientVerificationPrecheckResult {
  reverificationRequired: boolean
}

/**
 OAuth 2.0 Client ID and secret, generated when a new client is created
https://docs.synapse.org/rest/org/sagebionetworks/repo/model/oauth/OAuthClientIdAndSecret.html
*/
export interface OAuthClientIdAndSecret {
  client_id: string
  client_secret: string
}

export enum OIDCSigningAlgorithm {
  RS256 = 'RS256',
}
