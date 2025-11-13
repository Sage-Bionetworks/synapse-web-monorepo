import { PropsWithChildren } from 'react'
import { AridhiaContextProvider } from 'synapse-react-client/utils/context/AridhiaContext'

export type AridhiaIntegrationProps = PropsWithChildren<{
  /**
   * Base URL for the Aridhia Workspaces API
   * @default 'https://workspaces.westus2.c-path-dev.aridhia.io'
   */
  workspacesApiBasePath?: string
}>

/**
 * Wrapper component that adds Aridhia context to a portal application.
 *
 * This will automatically exchange Synapse access tokens for Aridhia DAP tokens
 * that can be used to access Aridhia APIs.
 * ```
 */
export function AridhiaIntegration(props: AridhiaIntegrationProps) {
  const { children, workspacesApiBasePath } = props

  return (
    <AridhiaContextProvider workspacesApiBasePath={workspacesApiBasePath}>
      {children}
    </AridhiaContextProvider>
  )
}
