import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  PaginatedIds,
  PaginatedResults,
  Team,
} from '@sage-bionetworks/synapse-types'
import { getNextPageParamForPaginatedResults } from '../InfiniteQueryUtils'

export function useGetUserSubmissionTeams(
  challengeId: string,
  limit: number = 10,
  offset?: number,
  options?: UseQueryOptions<PaginatedIds, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<PaginatedIds, SynapseClientError>(
    keyFactory.getSubmissionTeamsQueryKey(challengeId, limit, offset),
    async () => {
      return SynapseClient.getSubmissionTeams(
        accessToken,
        challengeId,
        offset,
        limit,
      )
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length > 0) return pages.length * limit
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
  const LIMIT = 10
  return useInfiniteQuery<PaginatedResults<Team>, SynapseClientError>(
    keyFactory.getUserTeamsQueryKey(userId),
    async context => {
      return SynapseClient.getUserTeamList(
        accessToken,
        userId,
        context.pageParam, // pass the context.pageParam for the new offset
        LIMIT, // limit
      )
    },
    {
      ...options,
      getNextPageParam: getNextPageParamForPaginatedResults,
    },
  )
}
