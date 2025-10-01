import { useSynapseContext } from '@/utils/index'
import {
  ColumnModel,
  CsvTableDescriptor,
  SynapseClientError,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

// TODO: Pull from synapse-client
type GridCsvImportRequest = {
  concreteType: 'org.sagebionetworks.repo.model.grid.GridCsvImportRequest'
  sessionId: string
  fileHandleId: string
  csvDescriptor: CsvTableDescriptor
  schema: ColumnModel[]
}
type GridCsvImportResult = {
  sessionId: string
  totalCount: number
  createdCount: number
  updatedCount: number
}

export function useImportCsvIntoGrid(
  options?: Partial<
    UseMutationOptions<
      GridCsvImportResult,
      SynapseClientError,
      GridCsvImportRequest
    >
  >,
) {
  const { synapseClient } = useSynapseContext()

  return useMutation<
    GridCsvImportResult,
    SynapseClientError,
    GridCsvImportRequest
  >({
    ...options,
    mutationFn: async request => {
      const asyncJobId = { token: 'mock' }
      // await synapseClient.gridServicesClient.postRepoV1GridImportCsvAsyncStart(
      //   {
      //     gridImportCsvRequest: request,
      //   },
      // )

      const asyncJobResponse = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          {
            jobId: asyncJobId.token,
          },
        ),
      )
      return asyncJobResponse.responseBody as unknown as GridCsvImportResult
    },
  })
}
