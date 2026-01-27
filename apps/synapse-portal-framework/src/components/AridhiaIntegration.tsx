import { PropsWithChildren } from 'react'
import { AridhiaContextProvider } from 'synapse-react-client/utils/context/AridhiaContext'

export type AridhiaIntegrationProps = PropsWithChildren<{
  /**
   * Base URL for the Aridhia Gateway API.
   * All API calls, including FAIR API calls, should go through the gateway.
   */
  apiBasePath?: string
}>

/**
 * Wrapper component that adds Aridhia context to a portal application.
 *
 * This will automatically exchange Synapse access tokens for Aridhia DAP tokens
 * that can be used to access Aridhia APIs.
 * ```
 */
export function AridhiaIntegration(props: AridhiaIntegrationProps) {
  const { children, apiBasePath } = props

  return (
    <AridhiaContextProvider
      apiBasePath={apiBasePath}
      authenticationRequest={{
        subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
        subject_token_issuer: 'sage-dev', //idp-id provided by C-Path
      }}
    >
      {children}
    </AridhiaContextProvider>
  )
}
