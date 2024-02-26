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
  Challenge,
  ChallengeWithProjectHeaderPagedResults,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'

export function useGetUserChallenges(
  userId: string,
  limit?: number,
  options?: Partial<
    UseQueryOptions<PaginatedResults<Challenge>, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getUserChallengesQueryKey(userId),
    queryFn: () =>
      SynapseClient.getUserChallenges(accessToken, userId, 0, limit ?? 10),
  })
}

export function useGetUserChallengesInfinite<
  TData = InfiniteData<ChallengeWithProjectHeaderPagedResults>,
>(
  userId: string,
  options?: Partial<
    UseInfiniteQueryOptions<
      ChallengeWithProjectHeaderPagedResults,
      SynapseClientError,
      TData,
      ChallengeWithProjectHeaderPagedResults,
      QueryKey,
      number | undefined
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    ChallengeWithProjectHeaderPagedResults,
    SynapseClientError,
    TData,
    QueryKey,
    number | undefined
  >({
    ...options,
    initialPageParam: undefined,
    queryKey: keyFactory.getUserChallengesQueryKey(userId),
    queryFn: async context => {
      const challenges = await SynapseClient.getUserChallenges(
        accessToken,
        userId,
        context.pageParam, // pass the context.pageParam for the new offset
        10, // limit
      )
      // also look up the challenge project names (if there are challenges)
      if (challenges.results.length > 0) {
        const challengeProjectIds = Array.from(
          challenges.results,
          challenge => challenge.projectId,
        )
        const challengeProjects = await SynapseClient.getEntityHeadersByIds(
          challengeProjectIds,
        )
        const challengeWithProjectHeaderPagedResults: ChallengeWithProjectHeaderPagedResults =
          {
            results: Array.from(challenges.results, (challenge, index) => {
              return {
                challenge,
                projectHeader: challengeProjects.results[index],
              }
            }),
            totalNumberOfResults: challenges.totalNumberOfResults,
          }
        return challengeWithProjectHeaderPagedResults
      }
      return {
        results: [],
        totalNumberOfResults: challenges.totalNumberOfResults,
      }
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.results.length > 0)
        return pages.length * 10 //set the new offset to (page * limit)
      else return undefined
    },
  })
}
