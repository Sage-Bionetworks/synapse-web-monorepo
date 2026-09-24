import useMergeGridWithTable from './useMergeGridWithTable'
import {
  EntityType,
  GridSession,
  SynchronizeGridResponse,
  SyncType,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynchronizeGridSession } from '@/synapse-queries/grid/useGridSession'
import { invalidateAllQueriesForEntity } from '@/synapse-queries/QueryFilterUtils'
import { useSynapseContext } from '@/utils/context/SynapseContext'

export type MergeGridWithSource = {
  /** The ID of the grid session to merge with the source entity. */
  gridSessionId: string
  /** The ID of the source entity to merge with. This is only used for client-side logic. */
  sourceEntityId?: string
  /** The type of the source entity. This is only used for client-side logic. */
  sourceEntityType?: EntityType
  /** The type of synchronization to perform. Only valid for types supported by the Synchronize service. */
  syncType?: SyncType
}

export type MergeGridResult =
  | { type: 'synchronize'; data: SynchronizeGridResponse }
  | {
      type: 'tableUpdateTransaction'
      data: TableUpdateTransactionResponse
    }

/**
 * Single entrypoint to handle merging grid edits with source Synapse data.
 * Calls the appropriate mutation based on entity type:
 * - EntityView/RecordSet -> useSynchronizeGridSession
 * - TableEntity -> useMergeGridWithTable
 *
 * Returns a query mutation that handles synchronization. Data cached for the grid session and
 * the source entity is refetched before the mutation resolves.
 */
export default function useMergeGridWithSource(
  options?: Omit<
    UseMutationOptions<
      MergeGridResult,
      SynapseClientError,
      MergeGridWithSource
    >,
    'mutationFn'
  >,
) {
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()

  // SynchronizeGridSession is the best option, but not all types are supported.
  // As support for other types is added, the other hooks should be replaced.
  const syncGridWithSource = useSynchronizeGridSession()
  const mergeGridWithTable = useMergeGridWithTable()

  return useMutation<MergeGridResult, SynapseClientError, MergeGridWithSource>({
    ...options,
    mutationFn: async variables => {
      const { gridSessionId, sourceEntityId, sourceEntityType, syncType } =
        variables
      const isEntityView = sourceEntityType === EntityType.entityview
      const isRecordSet = sourceEntityType === EntityType.recordset

      if (isEntityView || isRecordSet) {
        const data = await syncGridWithSource.mutateAsync({
          gridSessionId,
          syncType,
        })
        return { type: 'synchronize', data }
      } else {
        const data = await mergeGridWithTable.mutateAsync({
          gridSessionId,
          sourceEntityId: sourceEntityId!,
        })
        return { type: 'tableUpdateTransaction', data }
      }
    },
    onSuccess: async (data, variables, context) => {
      // A merge advances the session's references to the source entity version and JSON
      // Schema, and pushing changes creates a new version of the source entity. Refetch both
      // before resolving so that callers re-evaluate the sync state against current data.
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getGridSessionKey(variables.gridSessionId),
        }),
        variables.sourceEntityId
          ? invalidateAllQueriesForEntity(
              queryClient,
              keyFactory,
              variables.sourceEntityId,
            )
          : undefined,
      ])

      if (options?.onSuccess) {
        await options.onSuccess(data, variables, context)
      }
    },
  })
}

/**
 * Builds the variables passed to the merge grid mutation for the given grid session,
 * source entity type, and whether the user should PULL before PULL_PUSH.
 */
export function buildMergeGridVariables(
  gridSession: GridSession,
  sourceEntityType: EntityType | undefined,
  shouldPull: boolean,
): MergeGridWithSource {
  return {
    gridSessionId: gridSession.sessionId!,
    sourceEntityId: gridSession.sourceEntityId!,
    sourceEntityType,
    syncType: shouldPull ? 'PULL' : 'PULL_PUSH',
  }
}
