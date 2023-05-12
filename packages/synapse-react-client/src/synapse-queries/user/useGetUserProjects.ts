import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/SynapseContext'
import { ProjectHeaderList } from '@sage-bionetworks/synapse-types'
import { GetProjectsParameters } from '@sage-bionetworks/synapse-types'

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
