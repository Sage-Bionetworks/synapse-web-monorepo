// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/oauth/OIDCAuthorizationRequest.html

export type OIDCAuthorizationRequest = {
  clientId: string
  scope: string
  claims?: {
    id_token?: {
      [key: string]: {
        essential: boolean
        value: string
        values: string[]
      }
    }
    userinfo?: {
      [key: string]: {
        essential?: boolean
        value?: string
        values?: string[]
      }
    }
  }
  responseType: string
  redirectUri: string
  nonce?: string
  userId?: string
  authenticatedAt?: string
  authorizedAt?: string
}
