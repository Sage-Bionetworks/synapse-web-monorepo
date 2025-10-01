import useMergeGridWithEntityView from './useMergeGridWithEntityView'
import useMergeGridWithRecordSet from './useMergeGridWithRecordSet'
import {
  EntityType,
  GridRecordSetExportResponse,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'

export type MergeGridWithSource = {
  gridSessionId: string
  sourceEntityId?: string
  sourceEntityType?: EntityType
}

export type MergeGridResult = {
  type: 'recordset' | 'table'
  data: GridRecordSetExportResponse | TableUpdateTransactionResponse
}

/**
 * Single source of truth for merging grid edits.
 * Calls the appropriate mutation based on entity type:
 * - TableEntity/View -> useMergeGridWithEntityView
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
  const mergeGridWithEntityView = useMergeGridWithEntityView()
  const mergeGridWithRecordSet = useMergeGridWithRecordSet()

  return useMutation<MergeGridResult, SynapseClientError, MergeGridWithSource>({
    ...options,
    mutationFn: async ({ gridSessionId, sourceEntityId, sourceEntityType }) => {
      const isRecordSet = sourceEntityType === EntityType.recordset

      if (isRecordSet) {
        const data = await mergeGridWithRecordSet.mutateAsync({ gridSessionId })
        return { type: 'recordset', data }
      } else {
        const data = await mergeGridWithEntityView.mutateAsync({
          gridSessionId,
          sourceEntityId: sourceEntityId!,
        })
        return { type: 'table', data }
      }
    },
  })
}
