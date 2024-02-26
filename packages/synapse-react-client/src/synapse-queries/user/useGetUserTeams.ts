import {
  InfiniteData,
  QueryKey,
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
  options?: Partial<UseQueryOptions<PaginatedIds, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getSubmissionTeamsQueryKey(challengeId),
    queryFn: () => {
      return SynapseClient.getSubmissionTeams(
        accessToken,
        challengeId,
        offset,
        limit,
      )
    },
  })
}

export function useGetUserTeamsInfinite<
  TData = InfiniteData<PaginatedResults<Team>>,
>(
  userId: string,
  options?: Partial<
    UseInfiniteQueryOptions<
      PaginatedResults<Team>,
      SynapseClientError,
      TData,
      PaginatedResults<Team>,
      QueryKey,
      number | undefined
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const LIMIT = 10
  return useInfiniteQuery<
    PaginatedResults<Team>,
    SynapseClientError,
    TData,
    QueryKey,
    number | undefined
  >({
    ...options,
    queryKey: keyFactory.getUserTeamsQueryKey(userId),
    queryFn: async context => {
      return SynapseClient.getUserTeamList(
        accessToken,
        userId,
        context.pageParam, // pass the context.pageParam for the new offset
        LIMIT, // limit
      )
    },
    initialPageParam: undefined,
    getNextPageParam: getNextPageParamForPaginatedResults,
  })
}
