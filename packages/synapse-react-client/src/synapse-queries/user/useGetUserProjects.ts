import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { ProjectHeaderList } from '@sage-bionetworks/synapse-types'
import { GetProjectsParameters } from '@sage-bionetworks/synapse-types'

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
      ProjectHeaderList,
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
