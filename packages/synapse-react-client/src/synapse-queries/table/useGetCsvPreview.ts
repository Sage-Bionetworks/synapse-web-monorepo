import { useSynapseContext } from '@/utils/index'
import {
  UploadToTablePreviewRequest,
  UploadToTablePreviewResult,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { skipToken, useQuery } from '@tanstack/react-query'

export function useGetCsvPreview(request: UploadToTablePreviewRequest) {
  const { synapseClient, keyFactory } = useSynapseContext()

  return useQuery({
    queryKey: keyFactory.getCsvPreviewQueryKey(request),
    queryFn: request?.uploadFileHandleId
      ? async () => {
          const asyncJobId =
            await synapseClient.tableServicesClient.postRepoV1TableUploadCsvPreviewAsyncStart(
              { uploadToTablePreviewRequest: request },
            )

          const asyncJobResponse = await waitForAsyncResult(() =>
            synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
              {
                jobId: asyncJobId.token!,
              },
            ),
          )
          return asyncJobResponse.responseBody as UploadToTablePreviewResult
        }
      : skipToken,
    // This request is deterministic and the response will never change.
    staleTime: Infinity,
    gcTime: Infinity,
  })
}
