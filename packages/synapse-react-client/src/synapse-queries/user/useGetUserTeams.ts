import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { PaginatedIds, PaginatedResults } from '@sage-bionetworks/synapse-types'
import { Team } from '@sage-bionetworks/synapse-types'

export function useGetUserSubmissionTeamsInfinite(
  challengeId: string,
  limit?: number,
  options?: UseQueryOptions<PaginatedIds, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<PaginatedIds, SynapseClientError>(
    keyFactory.getSubmissionTeamsQueryKey(challengeId),
    async context => {
      return SynapseClient.getSubmissionTeams(
        accessToken,
        challengeId,
        context.pageParam, // pass the context.pageParam for the new offset,
        limit ?? 10,
      )
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length > 0) return pages.length * (limit ?? 10)
        //set the new offset to (page * limit)
        else return undefined
      },
    },
  )
}

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
