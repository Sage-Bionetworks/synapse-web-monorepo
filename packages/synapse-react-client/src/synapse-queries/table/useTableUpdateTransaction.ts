import { invalidateAllQueriesForEntity } from '@/synapse-queries/index'
import { useSynapseContext } from '@/utils/index'
import {
  SynapseClientError,
  TableUpdateTransactionRequest,
  TableUpdateTransactionResponse,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'

export function useTableUpdateTransaction(
  options?: Partial<
    UseMutationOptions<
      TableUpdateTransactionResponse,
      SynapseClientError,
      TableUpdateTransactionRequest
    >
  >,
) {
  const { keyFactory, synapseClient } = useSynapseContext()
  const queryClient = useQueryClient()

  return useMutation<
    TableUpdateTransactionResponse,
    SynapseClientError,
    TableUpdateTransactionRequest
  >({
    ...options,
    mutationFn: async tableUpdateTransactionRequest => {
      const asyncJobId =
        await synapseClient.tableServicesClient.postRepoV1EntityIdTableTransactionAsyncStart(
          {
            id: tableUpdateTransactionRequest.entityId!,
            tableUpdateTransactionRequest,
          },
        )

      const response = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          {
            jobId: asyncJobId.token!,
          },
        ),
      )

      return response.responseBody as TableUpdateTransactionResponse
    },
    onSuccess: async (response, variables, ctx) => {
      // NOTE: awaiting invalidation means that this will wait until the table to is rebuilt, which might take longer than expected
      await invalidateAllQueriesForEntity(
        queryClient,
        keyFactory,
        variables.entityId!,
      )

      if (options?.onSuccess) {
        await options.onSuccess(response, variables, ctx)
      }
    },
  })
}
