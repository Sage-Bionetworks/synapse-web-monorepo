import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  DownloadFromGridRequest,
  DownloadFromGridResult,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export function useExportGridAsCsv(
  options?: Partial<
    UseMutationOptions<
      DownloadFromGridResult,
      SynapseClientError,
      DownloadFromGridRequest
    >
  >,
) {
  const { synapseClient } = useSynapseContext()

  return useMutation<
    DownloadFromGridResult,
    SynapseClientError,
    DownloadFromGridRequest
  >({
    ...options,
    mutationFn: async downloadFromGridRequest => {
      const asyncJobId =
        await synapseClient.gridServicesClient.postRepoV1GridDownloadCsvAsyncStart(
          {
            downloadFromGridRequest,
          },
        )

      const asyncJobResponse = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          {
            jobId: asyncJobId.token!,
          },
        ),
      )
      return asyncJobResponse.responseBody as DownloadFromGridResult
    },
  })
}
