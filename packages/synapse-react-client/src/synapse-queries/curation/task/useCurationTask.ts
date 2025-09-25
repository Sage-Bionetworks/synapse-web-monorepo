import { useSynapseContext } from '@/utils/index'
import {
  ListCurationTaskResponse,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'

export function useGetCurationTasksByProjectInfinite<
  TData = InfiniteData<ListCurationTaskResponse>,
>(
  projectId: string,
  options?: Partial<
    UseInfiniteQueryOptions<
      ListCurationTaskResponse,
      SynapseClientError,
      TData,
      QueryKey,
      ListCurationTaskResponse['nextPageToken']
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()

  return useInfiniteQuery<
    ListCurationTaskResponse,
    SynapseClientError,
    TData,
    QueryKey,
    ListCurationTaskResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getCurationTaskListKey(projectId),
    queryFn: context =>
      synapseClient.curationTaskServicesClient.postRepoV1CurationTaskList({
        listCurationTaskRequest: {
          projectId,
          nextPageToken: context.pageParam,
        },
      }),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
