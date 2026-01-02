import { AuthenticationApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import {
  AuthenticationRequest,
  AuthenticationResponse,
} from '@sage-bionetworks/aridhia-client/generated/models'
import { Configuration } from '@sage-bionetworks/aridhia-client/generated/runtime'

/**
 * Exchanges a Synapse access token for an Aridhia access token.
 * Note: Aridhia tokens can only be used once, so a fresh token should be obtained for each API call.
 *
 * @param synapseAccessToken - The Synapse access token to exchange
 * @param apiBasePath - Base URL for the Aridhia Gateway API
 * @param authenticationRequest - Authentication request parameters (excluding subject_token)
 * @returns The authentication response containing the Aridhia access token
 * @throws Error if the token exchange fails or no access token is returned
 */
export async function exchangeSynapseTokenForAridhia(
  synapseAccessToken: string,
  apiBasePath: string,
  authenticationRequest: Omit<AuthenticationRequest, 'subject_token'>,
): Promise<AuthenticationResponse> {
  const authApi = new AuthenticationApi(
    new Configuration({
      basePath: apiBasePath,
    }),
  )

  const authResponse = await authApi.authenticatePost({
    authenticationRequest: {
      ...authenticationRequest,
      subject_token: synapseAccessToken,
    },
  })

  if (!authResponse.access_token) {
    throw new Error('Failed to obtain Aridhia access token')
  }

  return authResponse
}

/**
 * Creates an Aridhia API Configuration object with a freshly exchanged access token.
 * This is a convenience function for creating API instances.
 *
 * @param synapseAccessToken - The Synapse access token to exchange
 * @param gatewayBasePath - Base URL for the Aridhia Gateway API (for authentication)
 * @param apiBasePath - Base URL for the Aridhia API being called
 * @param authenticationRequest - Authentication request parameters (excluding subject_token)
 * @returns A Configuration object ready to use with Aridhia API clients
 */
export async function createAridhiaApiConfiguration(
  synapseAccessToken: string,
  gatewayBasePath: string,
  apiBasePath: string,
  authenticationRequest: Omit<AuthenticationRequest, 'subject_token'>,
): Promise<Configuration> {
  const authResponse = await exchangeSynapseTokenForAridhia(
    synapseAccessToken,
    gatewayBasePath,
    authenticationRequest,
  )

  return new Configuration({
    basePath: apiBasePath,
    accessToken: authResponse.access_token,
  })
}
