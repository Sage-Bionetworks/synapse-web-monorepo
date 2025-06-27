import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  GetProjectsParameters,
  ProjectHeaderList,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'

export function useGetUserProjectsInfinite<
  TData = InfiniteData<ProjectHeaderList>,
>(
  userId: string,
  projectParams: GetProjectsParameters,
  options?: Partial<
    UseInfiniteQueryOptions<
      ProjectHeaderList,
      SynapseClientError,
      TData,
      QueryKey,
      ProjectHeaderList['nextPageToken']
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    ProjectHeaderList,
    SynapseClientError,
    TData,
    QueryKey,
    ProjectHeaderList['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getUserProjectsQueryKey(userId, projectParams),
    queryFn: async context => {
      return SynapseClient.getUserProjects(
        userId,
        { ...projectParams, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
