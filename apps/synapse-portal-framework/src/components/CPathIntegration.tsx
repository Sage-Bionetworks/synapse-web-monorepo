import { PropsWithChildren } from 'react'
import { CPathContextProvider } from 'synapse-react-client/utils/context/CPathContext'

export type CPathIntegrationProps = PropsWithChildren<{
  /**
   * Base URL for the C-Path Workspaces API
   * @default 'https://workspaces.westus2.c-path-dev.aridhia.io'
   */
  workspacesApiBasePath?: string
}>

/**
 * Wrapper component that adds C-Path context to a portal application.
 *
 * This will automatically exchange Synapse access tokens for C-Path DAP tokens
 * that can be used to access C-Path APIs.
 * ```
 */
export function CPathIntegration(props: CPathIntegrationProps) {
  const { children, workspacesApiBasePath } = props

  return (
    <CPathContextProvider workspacesApiBasePath={workspacesApiBasePath}>
      {children}
    </CPathContextProvider>
  )
}
