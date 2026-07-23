import useMergeGridWithTable from './useMergeGridWithTable'
import {
  EntityType,
  GridRecordSetExportResponse,
  SynchronizeGridResponse,
  SyncType,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynchronizeGridSession } from '@/synapse-queries/grid/useGridSession'
import useUnsafeLegacyExportAndOverwriteRecordSet from './useMergeGridWithRecordSet'
import { useGetFeatureFlag } from '@/synapse-queries/featureflags'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'

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
      /** @deprecated */
      type: 'recordset_overwrite'
      data: GridRecordSetExportResponse
    }
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
 * Returns a query mutation that handles synchronization.
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
  // SynchronizeGridSession is the best option, but not all types are supported.
  // As support for other types is added, the other hooks should be replaced.
  const syncGridWithSource = useSynchronizeGridSession()
  const mergeGridWithTable = useMergeGridWithTable()
  const unsafeLegacyOverwriteRecordset =
    useUnsafeLegacyExportAndOverwriteRecordSet()

  const enableRecordSetSync = useGetFeatureFlag(
    FeatureFlagEnum.ENABLE_RECORDSET_SYNCHRONIZATION,
  )

  return useMutation<MergeGridResult, SynapseClientError, MergeGridWithSource>({
    ...options,
    mutationFn: async variables => {
      const { gridSessionId, sourceEntityId, sourceEntityType, syncType } =
        variables
      const isEntityView = sourceEntityType === EntityType.entityview
      const isRecordSet = sourceEntityType === EntityType.recordset

      if (isEntityView || (isRecordSet && enableRecordSetSync)) {
        const data = await syncGridWithSource.mutateAsync({
          gridSessionId,
          syncType,
        })
        return { type: 'synchronize', data }
      } else if (isRecordSet) {
        // Deprecated/legacy path: this will overwrite the RecordSet with the grid session data instead of merging/synchronizing, which is prone to data loss.
        // Remove once we have confidence in the synch service for RecordSets.
        const data = await unsafeLegacyOverwriteRecordset.mutateAsync({
          gridSessionId,
        })
        return { type: 'recordset_overwrite', data }
      } else {
        const data = await mergeGridWithTable.mutateAsync({
          gridSessionId,
          sourceEntityId: sourceEntityId!,
        })
        return { type: 'tableUpdateTransaction', data }
      }
    },
  })
}
