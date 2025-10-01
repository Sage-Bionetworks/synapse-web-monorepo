import { useSynapseContext } from '@/utils'
import {
  GridRecordSetExportRequest,
  GridRecordSetExportResponse,
  SynapseClientError,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export type MergeGridWithRecordSetInput = {
  gridSessionId: string
}

/**
 * Query mutation hook for exporting a grid session back into a RecordSet.
 */
export default function useMergeGridWithRecordSet(
  options?: Omit<
    UseMutationOptions<
      GridRecordSetExportResponse,
      SynapseClientError,
      MergeGridWithRecordSetInput
    >,
    'mutationFn'
  >,
) {
  const { synapseClient } = useSynapseContext()

  return useMutation<
    GridRecordSetExportResponse,
    SynapseClientError,
    MergeGridWithRecordSetInput
  >({
    ...options,
    mutationFn: async ({ gridSessionId }) => {
      console.log('sessionid', gridSessionId)

      const gridExportRequest: GridRecordSetExportRequest = {
        sessionId: gridSessionId,
        concreteType:
          'org.sagebionetworks.repo.model.grid.GridRecordSetExportRequest',
      }

      // Start the async export job
      const asyncJobId =
        await synapseClient.gridServicesClient.postRepoV1GridExportRecordsetAsyncStart(
          { gridRecordSetExportRequest: gridExportRequest },
        )

      // Poll for the async job
      const asyncJobResponse = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          {
            jobId: asyncJobId.token!,
          },
        ),
      )

      return asyncJobResponse.responseBody as GridRecordSetExportResponse
    },
  })
}
