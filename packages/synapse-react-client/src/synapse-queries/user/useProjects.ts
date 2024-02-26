import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import {
  GetProjectsParameters,
  ProjectHeaderList,
} from '@sage-bionetworks/synapse-types'

export function useGetProjects(
  params?: GetProjectsParameters,
  options?: Partial<
    UseQueryOptions<ProjectHeaderList, SynapseClientError, ProjectHeaderList>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getMyProjectsQueryKey(params),
    queryFn: () => SynapseClient.getMyProjects(accessToken!, params),
  })
}

export function useGetProjectsInfinite<TData = InfiniteData<ProjectHeaderList>>(
  params: GetProjectsParameters,
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
    initialPageParam: undefined,
    queryKey: keyFactory.getMyProjectsQueryKey(params),
    queryFn: async context => {
      return await SynapseClient.getMyProjects(accessToken!, {
        ...params,
        nextPageToken: context.pageParam,
      })
    },
    getNextPageParam: page => page.nextPageToken,
  })
}
