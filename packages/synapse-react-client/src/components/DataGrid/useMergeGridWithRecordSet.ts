import { useSynapseContext } from '@/utils'
import {
  GridRecordSetExportRequest,
  GridRecordSetExportResponse,
  SynapseClientError,
  GridRecordSetExportRequestConcreteTypeEnum,
  waitForAsyncResult,
  EntityType,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

export type MergeGridWithRecordSetInput = {
  gridSessionId: string
}

/** Export a RecordSet grid */
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

      console.log('GridRecordSetExportRequest payload:', gridExportRequest)

      const asyncJobId =
        await synapseClient.gridServicesClient.postRepoV1GridExportRecordsetAsyncStart(
          { gridRecordSetExportRequest: gridExportRequest },
        )

      // const asyncJobId =
      //   await synapseClient.gridServicesClient.postRepoV1GridDownloadCsvAsyncStart(
      //     {
      //       downloadFromGridRequest,
      //     },
      //   )

      console.log('token', asyncJobId.token)

      //  The session is not a RecordSet grid session.
      // Or, the grid session expired.
      // Or, you are using a session created from a normal TableEntity.

      // const asyncJobResponse = await waitForAsyncResult(() =>
      //   synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
      //     {
      //       jobId: asyncJobId.token!,
      //     },
      //   ),
      // )

      // Poll:
      let asyncJobResponse
      try {
        console.log('asyncJobId.token!', asyncJobId.token)
        asyncJobResponse = await waitForAsyncResult(() =>
          synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
            {
              jobId: asyncJobId.token!,
            },
          ),
        )
      } catch (e) {
        console.error('[RecordSetExport] waitForAsyncResult failed', e)
        console.log(
          '[RecordSetExport] error message:',
          e?.message,
          'status:',
          e?.status,
          'responseBody:',
          e?.responseBody,
        )
      }
      console.log('asyncJobResponse', asyncJobResponse)
      console.log('asyncJobResponseBody', asyncJobResponse?.responseBody)
      console.log('asyncJobRequest', asyncJobResponse?.requestBody)

      // Poll:
      // const asyncJobResponse = await waitForAsyncResult(() =>
      //   synapseClient.gridServicesClient.getRepoV1GridExportRecordsetAsyncGetAsyncToken(
      //     {
      //       asyncToken: asyncJobId.token!,
      //     },
      //   ),
      // )

      if (!asyncJobResponse) {
        throw new Error('Async job response is undefined.')
      }

      return asyncJobResponse.responseBody as GridRecordSetExportResponse

      // return response as GridRecordSetExportResponse
    },
  })
}
