import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/SynapseContext'
import { PaginatedResults } from '@sage-bionetworks/synapse-types'
import { Team } from '@sage-bionetworks/synapse-types'

export function useGetUserTeamsInfinite(
  userId: string,
  options?: UseInfiniteQueryOptions<
    PaginatedResults<Team>,
    SynapseClientError,
    PaginatedResults<Team>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<PaginatedResults<Team>, SynapseClientError>(
    keyFactory.getUserTeamsQueryKey(userId),
    async context => {
      return SynapseClient.getUserTeamList(
        accessToken,
        userId,
        context.pageParam, // pass the context.pageParam for the new offset
        10, // limit
      )
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length > 0)
          return pages.length * 10 //set the new offset to (page * limit)
        else return undefined
      },
    },
  )
}
