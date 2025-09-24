import { getGridSessionsQuery } from '@/synapse-queries/grid/useGridSession'
import { SynapseContextType } from '@/utils/index'
import { GridSession } from '@sage-bionetworks/synapse-client'
import { QueryClient } from '@tanstack/react-query'
import isEmpty from 'lodash-es/isEmpty'

/**
 * Get the latest grid session for the given source. If no grid session exists, return null.
 */
export async function getLatestGridSessionForSource(
  sourceId: string,
  context: { queryClient: QueryClient; synapseContext: SynapseContextType },
): Promise<GridSession | null> {
  const { queryClient } = context
  const { keyFactory, synapseClient } = context.synapseContext
  const sessions = await queryClient.fetchQuery(
    getGridSessionsQuery({ sourceId }, { keyFactory, synapseClient }),
  )
  if (isEmpty(sessions.page)) {
    return null
  }
  return sessions.page![0]
}
