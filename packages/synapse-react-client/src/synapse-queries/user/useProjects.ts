import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { ProjectHeaderList } from '@sage-bionetworks/synapse-types'
import { GetProjectsParameters } from '@sage-bionetworks/synapse-types'

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
