import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  QueryKey,
} from '@tanstack/react-query'
import { ListGridSessionsResponse } from '@sage-bionetworks/synapse-client/generated/models/ListGridSessionsResponse'

export function useDeleteGridSession(
  options?: Partial<UseMutationOptions<void, SynapseClientError, string>>,
) {
  const queryClient = useQueryClient()
  const { keyFactory, synapseClient } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>({
    ...options,
    mutationFn: (sessionId: string) =>
      synapseClient.gridServicesClient.deleteRepoV1GridSessionSessionId({
        sessionId,
      }),
    onSuccess: async (updatedClient, sessionId, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getGridSessionListKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(updatedClient, sessionId, ctx)
      }
    },
  })
}

export function useGetGridSessionsInfinite<
  TData = InfiniteData<ListGridSessionsResponse>,
>(
  options?: Partial<
    UseInfiniteQueryOptions<
      ListGridSessionsResponse,
      SynapseClientError,
      TData,
      QueryKey,
      ListGridSessionsResponse['nextPageToken']
    >
  >,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useInfiniteQuery<
    ListGridSessionsResponse,
    SynapseClientError,
    TData,
    QueryKey,
    ListGridSessionsResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getGridSessionListKey(),
    queryFn: async context =>
      await synapseClient.gridServicesClient.postRepoV1GridSessionList({
        listGridSessionsRequest: { nextPageToken: context.pageParam },
      }),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
