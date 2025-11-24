import { useSynapseContext } from '@/utils/index'
import {
  GridCsvImportRequest,
  GridCsvImportResponse,
  SynapseClientError,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export function useImportCsvIntoGrid(
  options?: Partial<
    UseMutationOptions<
      GridCsvImportResponse,
      SynapseClientError,
      GridCsvImportRequest
    >
  >,
) {
  const { synapseClient } = useSynapseContext()

  return useMutation<
    GridCsvImportResponse,
    SynapseClientError,
    GridCsvImportRequest
  >({
    ...options,
    mutationFn: async request => {
      const asyncJobId =
        await synapseClient.gridServicesClient.postRepoV1GridImportCsvAsyncStart(
          {
            gridCsvImportRequest: request,
          },
        )

      const asyncJobResponse = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          {
            jobId: asyncJobId.token!,
          },
        ),
      )
      return asyncJobResponse.responseBody as unknown as GridCsvImportResponse
    },
  })
}
