import useMergeGridWithTable from './useMergeGridWithTable'
import useMergeGridWithRecordSet from './useMergeGridWithRecordSet'
import {
  EntityType,
  GridRecordSetExportResponse,
  SynchronizeGridResponse,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynchronizeGridSession } from '@/synapse-queries/grid/useGridSession'

export type MergeGridWithSource = {
  gridSessionId: string
  sourceEntityId?: string
  sourceEntityType?: EntityType
}

export type MergeGridResult =
  | { type: 'entityview'; data: SynchronizeGridResponse }
  | {
      type: 'recordset'
      data: GridRecordSetExportResponse
    }
  | {
      type: 'table'
      data: TableUpdateTransactionResponse
    }

/**
 * Single entrypoint to handle merging grid edits with source Synapse data.
 * Calls the appropriate mutation based on entity type:
 * - EntityView -> useSynchronizeGridSession
 * - TableEntity -> useMergeGridWithTable
 * - RecordSet -> useMergeGridWithRecordSet
 *
 * Returns a query mutation that handles merging for tables or recordsets.
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
  // SynchronizeGridSession is the best option, but currently only supports EntityViews.
  // As support for other types is added, the other hooks should be replaced.
  const mergeGridWithEntityView = useSynchronizeGridSession()
  const mergeGridWithTable = useMergeGridWithTable()
  const mergeGridWithRecordSet = useMergeGridWithRecordSet()

  return useMutation<MergeGridResult, SynapseClientError, MergeGridWithSource>({
    ...options,
    mutationFn: async ({ gridSessionId, sourceEntityId, sourceEntityType }) => {
      const isEntityView = sourceEntityType === EntityType.entityview
      const isRecordSet = sourceEntityType === EntityType.recordset

      if (isEntityView) {
        const data = await mergeGridWithEntityView.mutateAsync({
          gridSessionId,
        })
        return { type: 'entityview', data }
      } else if (isRecordSet) {
        const data = await mergeGridWithRecordSet.mutateAsync({ gridSessionId })
        return { type: 'recordset', data }
      } else {
        const data = await mergeGridWithTable.mutateAsync({
          gridSessionId,
          sourceEntityId: sourceEntityId!,
        })
        return { type: 'table', data }
      }
    },
  })
}
