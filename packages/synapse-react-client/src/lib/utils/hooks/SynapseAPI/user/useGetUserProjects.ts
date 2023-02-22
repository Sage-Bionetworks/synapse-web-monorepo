import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { ProjectHeaderList } from '../../../synapseTypes'
import { GetProjectsParameters } from '../../../synapseTypes/GetProjectsParams'

export function useGetUserProjectsInfinite(
  userId: string,
  projectParams: GetProjectsParameters,
  options?: UseInfiniteQueryOptions<
    ProjectHeaderList,
    SynapseClientError,
    ProjectHeaderList
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<ProjectHeaderList, SynapseClientError>(
    keyFactory.getUserProjectsQueryKey(userId, projectParams),
    async context => {
      return SynapseClient.getUserProjects(
        userId,
        { ...projectParams, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
