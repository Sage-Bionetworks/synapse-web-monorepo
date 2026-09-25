import useMergeGridWithTable from './useMergeGridWithTable'
import {
  Entity,
  EntityType,
  GridSession,
  JsonSchemaObjectBinding,
  SynchronizeGridResponse,
  SyncType,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import {
  QueryClient,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { shouldPullBeforePush } from '@/components/DataGrid/hooks/useGridSourceSyncStatus'
import { useSynchronizeGridSession } from '@/synapse-queries/grid/useGridSession'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
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
      const isSynchronizeSupported =
        sourceEntityType === EntityType.entityview ||
        sourceEntityType === EntityType.recordset

      if (isSynchronizeSupported) {
        if (syncType !== 'PULL') {
          assertSourceHasNoUnimportedUpdates(
            queryClient,
            keyFactory,
            gridSessionId,
            sourceEntityId,
          )
        }
        const data = await syncGridWithSource.mutateAsync({
          gridSessionId,
          syncType,
        })
        return { type: 'synchronize', data }
      }

      // The table service can only push. Falling through to it for a PULL -- or for a source whose
      // type has not resolved -- would turn a request to import changes into a submit.
      if (syncType === 'PULL') {
        throw new Error(
          `Importing changes is not supported for a source of type "${sourceEntityType ?? 'unknown'}".`,
        )
      }
      if (!sourceEntityType || !sourceEntityId) {
        throw new Error(
          'Cannot apply changes because the source entity is not known yet. Please try again.',
        )
      }

      const data = await mergeGridWithTable.mutateAsync({
        gridSessionId,
        sourceEntityId,
      })
      return { type: 'tableUpdateTransaction', data }
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

export const SOURCE_HAS_UNIMPORTED_UPDATES_MESSAGE =
  'The source has been updated. Import those changes before applying yours.'

/**
 * Refuses a push while the source is known to have updates that this session has not imported.
 *
 * A PULL_PUSH applies the user's changes and imports the source's in one step, so pushing a
 * session that is behind its source would merge the user's edits on top of data they were never
 * shown. The UI prompts for the import first, but enforcing it here as well means no caller can
 * reach the push without that prompt having been answered.
 *
 * Decided from cached reads, which the grid keeps current while a session is open. When the cache
 * cannot answer, the push is allowed -- callers that gate on this are expected to have re-read the
 * source themselves first.
 */
function assertSourceHasNoUnimportedUpdates(
  queryClient: QueryClient,
  keyFactory: KeyFactory,
  gridSessionId: string,
  sourceEntityId: string | undefined,
) {
  if (!sourceEntityId) {
    return
  }

  const gridSession = queryClient.getQueryData<GridSession>(
    keyFactory.getGridSessionKey(gridSessionId),
  )
  const sourceEntity = queryClient.getQueryData<Entity>(
    keyFactory.getEntityQueryKey(sourceEntityId),
  )
  const schemaBinding =
    queryClient.getQueryData<JsonSchemaObjectBinding | null>(
      keyFactory.getEntityBoundJsonSchemaQueryKey(sourceEntityId),
    )

  const canDecide =
    gridSession != null && sourceEntity != null && schemaBinding !== undefined
  if (
    canDecide &&
    shouldPullBeforePush(gridSession, sourceEntity, schemaBinding)
  ) {
    throw new Error(SOURCE_HAS_UNIMPORTED_UPDATES_MESSAGE)
  }
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
