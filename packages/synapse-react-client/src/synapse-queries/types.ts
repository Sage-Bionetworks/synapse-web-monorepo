import type { SynapseClient } from '@sage-bionetworks/synapse-client'
import type { KeyFactory } from './KeyFactory'
import { QueryClient } from '@tanstack/react-query'

/**
 * Dependencies required to make Synapse API calls using TanStack Query.
 */
export type SynapseQueriesContext = {
  queryClient: QueryClient
  keyFactory: KeyFactory
  synapseClient: SynapseClient
  accessToken: string | undefined
}
