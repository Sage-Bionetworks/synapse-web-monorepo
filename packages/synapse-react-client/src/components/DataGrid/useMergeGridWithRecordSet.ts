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

      console.log('request:', gridExportRequest)

      // Start the async export job
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

      // Poll for the async job
      const asyncJobResponse = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          {
            jobId: asyncJobId.token!,
          },
        ),
      )

      console.log('asyncJobResponse', asyncJobResponse)
      console.log(
        'asyncJobResponse.responseBody',
        asyncJobResponse?.responseBody,
      )
      console.log('asyncJobResponse.requestBody', asyncJobResponse?.requestBody)

      // const asyncJobResponse = await waitForAsyncResult(() =>
      //   synapseClient.gridServicesClient.getRepoV1GridExportRecordsetAsyncGetAsyncToken(
      //     {
      //       asyncToken: asyncJobId.token!,
      //     },
      //   ),
      // )

      // if (!asyncJobResponse) {
      //   throw new Error('Async job response is undefined.')
      // }

      return asyncJobResponse.responseBody as GridRecordSetExportResponse

      // return response as GridRecordSetExportResponse
    },
  })
}

// // refactor
// import { useSynapseContext } from '@/utils'
// import {
//   GridRecordSetExportRequest,
//   GridRecordSetExportResponse,
//   SynapseClientError,
//   waitForAsyncResult,
// } from '@sage-bionetworks/synapse-client'
// import { useMutation, UseMutationOptions } from '@tanstack/react-query'

// export type MergeGridWithRecordSetInput = {
//   gridSessionId: string
// }

// //

// /**
//  * Query mutation hook for exporting a grid session back into a RecordSet.
//  */
// export default function useMergeGridWithRecordSet(
//   options?: Omit<
//     UseMutationOptions<
//       GridRecordSetExportResponse,
//       SynapseClientError,
//       MergeGridWithRecordSetInput
//     >,
//     'mutationFn'
//   >,
// ) {
//   const { synapseClient } = useSynapseContext()

//   return useMutation<
//     GridRecordSetExportResponse,
//     SynapseClientError,
//     MergeGridWithRecordSetInput
//   >({
//     ...options,
//     mutationFn: async ({ gridSessionId }) => {
//       console.log('sessionid', gridSessionId)

//       const gridExportRequest: GridRecordSetExportRequest = {
//         sessionId: gridSessionId,
//         concreteType:
//           'org.sagebionetworks.repo.model.grid.GridRecordSetExportRequest',
//       }

//       console.log('request:', gridExportRequest)

//       // Start the async export job
//       const asyncJobId =
//         await synapseClient.gridServicesClient.postRepoV1GridExportRecordsetAsyncStart(
//           { gridRecordSetExportRequest: gridExportRequest },
//         )

//       // const asyncJobId =
//       //   await synapseClient.gridServicesClient.postRepoV1GridDownloadCsvAsyncStart(
//       //     {
//       //       downloadFromGridRequest,
//       //     },
//       //   )

//       console.log('token', asyncJobId.token)

//       // Poll for the async job
//       const asyncJobResponse = await waitForAsyncResult(() =>
//         synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
//           {
//             jobId: asyncJobId.token!,
//           },
//         ),
//       )

//       console.log('asyncJobResponse', asyncJobResponse)
//       console.log(
//         'asyncJobResponse.responseBody',
//         asyncJobResponse?.responseBody,
//       )
//       console.log('asyncJobResponse.requestBody', asyncJobResponse?.requestBody)

//       // const asyncJobResponse = await waitForAsyncResult(() =>
//       //   synapseClient.gridServicesClient.getRepoV1GridExportRecordsetAsyncGetAsyncToken(
//       //     {
//       //       asyncToken: asyncJobId.token!,
//       //     },
//       //   ),
//       // )

//       // if (!asyncJobResponse) {
//       //   throw new Error('Async job response is undefined.')
//       // }

//       return asyncJobResponse.responseBody as GridRecordSetExportResponse

//       // return response as GridRecordSetExportResponse
//     },
//   })
// }
