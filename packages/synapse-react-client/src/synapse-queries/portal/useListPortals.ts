import { useSynapseContext } from '@/utils/index'
import {
  ListPortalsRequest,
  ListPortalsResponse,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import {
  InfiniteData,
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'

export function useListPortalsInfinite<
  TData = InfiniteData<ListPortalsResponse>,
>(
  options?: Partial<
    UseInfiniteQueryOptions<
      ListPortalsResponse,
      SynapseClientError,
      TData,
      QueryKey,
      ListPortalsResponse['nextPageToken']
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()

  return useInfiniteQuery<
    ListPortalsResponse,
    SynapseClientError,
    TData,
    QueryKey,
    ListPortalsResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getListPortalsQueryKey(),
    queryFn: async (
      context: QueryFunctionContext<
        QueryKey,
        ListPortalsResponse['nextPageToken']
      >,
    ) => {
      const request: ListPortalsRequest = {
        nextPageToken: context.pageParam,
      }
      return await synapseClient.portalsServicesClient.postRepoV1PortalList({
        listPortalsRequest: request,
      })
    },
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
