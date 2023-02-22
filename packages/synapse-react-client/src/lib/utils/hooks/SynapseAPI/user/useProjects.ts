import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { ProjectHeaderList } from '../../../synapseTypes'
import { GetProjectsParameters } from '../../../synapseTypes/GetProjectsParams'

export function useGetProjects(
  params?: GetProjectsParameters,
  options?: UseQueryOptions<
    ProjectHeaderList,
    SynapseClientError,
    ProjectHeaderList
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<ProjectHeaderList, SynapseClientError>(
    keyFactory.getMyProjectsQueryKey(params),
    () => SynapseClient.getMyProjects(accessToken!, params),
    options,
  )
}

export function useGetProjectsInfinite(
  params: GetProjectsParameters,
  options?: UseInfiniteQueryOptions<
    ProjectHeaderList,
    SynapseClientError,
    ProjectHeaderList
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<ProjectHeaderList, SynapseClientError>(
    keyFactory.getMyProjectsQueryKey(params),
    async context => {
      return await SynapseClient.getMyProjects(accessToken!, {
        ...params,
        nextPageToken: context.pageParam,
      })
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
