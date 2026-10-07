import { useQueryClient } from '@tanstack/react-query'
import { PropsWithChildren, useEffect } from 'react'
import { AridhiaContextProvider } from 'synapse-react-client/utils/context/AridhiaContext'
import { useAridhiaEndpoints } from './useAridhiaEndpoints'

export type AridhiaIntegrationProps = PropsWithChildren<{
  /**
   * Base URL for the Aridhia Gateway API.
   * All API calls, including FAIR API calls, should go through the gateway.
   */
  apiBasePath?: string
  /** `idp-id` registered with the target C-Path hub, sent as `subject_token_issuer`. */
  subjectTokenIssuer?: string
}>

/**
 * Wrapper component that adds Aridhia context to a portal application.
 *
 * This will automatically exchange Synapse access tokens for Aridhia DAP tokens
 * that can be used to access Aridhia APIs.
 * ```
 */
export function AridhiaIntegration(props: AridhiaIntegrationProps) {
  const {
    children,
    apiBasePath,
    subjectTokenIssuer = 'sage-prod', // idp-id provided by C-Path
  } = props

  return (
    <AridhiaContextProvider
      apiBasePath={apiBasePath}
      authenticationRequest={{
        //Note: PLFM-9439 would enable us to switch this to an id_token (type 'jwt') rather than passing an access_token
        subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
        subject_token_issuer: subjectTokenIssuer,
      }}
    >
      {children}
    </AridhiaContextProvider>
  )
}

/**
 * {@link AridhiaIntegration} configured from the portal's `aridhiaConfig`, using the C-Path dev hub
 * endpoints when the `AMPALS_RDCA_DAP_FORM_ENABLED` feature flag is enabled.
 */
export function PortalAridhiaIntegration(props: PropsWithChildren) {
  const { apiBasePath, subjectTokenIssuer } = useAridhiaEndpoints()
  const queryClient = useQueryClient()

  // Aridhia query keys do not include the gateway URL. The feature flag resolves after the first
  // render, so discard anything fetched from a different hub than the one now configured.
  useEffect(() => {
    queryClient.cancelQueries({ queryKey: ['aridhia'] })
    queryClient.removeQueries({ queryKey: ['aridhia'] })
  }, [apiBasePath, queryClient])

  return (
    <AridhiaIntegration
      apiBasePath={apiBasePath}
      subjectTokenIssuer={subjectTokenIssuer}
    >
      {props.children}
    </AridhiaIntegration>
  )
}
