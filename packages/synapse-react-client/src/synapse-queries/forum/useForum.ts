import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  UseQueryOptions,
  useQuery,
} from 'react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils'
import { Forum, PaginatedResults } from '@sage-bionetworks/synapse-types'
import {
  DiscussionFilter,
  DiscussionThreadBundle,
  DiscussionThreadOrder,
} from '@sage-bionetworks/synapse-types'
import { PaginatedIds } from '@sage-bionetworks/synapse-types'

export function useGetModerators(
  forumId: string,
  options?: UseQueryOptions<PaginatedIds, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<PaginatedIds, SynapseClientError>(
    keyFactory.getForumModeratorsQueryKey(forumId),
    () => SynapseClient.getModerators(accessToken, forumId),
    options,
  )
}

export function useGetForumMetadata(
  forumId: string,
  options?: UseQueryOptions<Forum, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<Forum, SynapseClientError>(
    keyFactory.getForumMetadataQueryKey(forumId),
    () => SynapseClient.getForumMetadata(accessToken, forumId),
    options,
  )
}

export function useGetForumInfinite(
  forumId: string,
  limit: number,
  sort: DiscussionThreadOrder,
  ascending: boolean,
  filter?: DiscussionFilter,
  options?: UseInfiniteQueryOptions<
    PaginatedResults<DiscussionThreadBundle>,
    SynapseClientError
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    PaginatedResults<DiscussionThreadBundle>,
    SynapseClientError
  >(
    keyFactory.getForumThreadsQueryKey(forumId, limit, sort, ascending, filter),
    async context => {
      return SynapseClient.getForumThread(
        accessToken,
        forumId,
        context.pageParam,
        limit,
        sort,
        ascending,
        filter,
      )
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        const numberOfFetchedResults = pages.flatMap(
          page => page.results,
        ).length
        if (lastPage.totalNumberOfResults! > numberOfFetchedResults) {
          return numberOfFetchedResults
        } else {
          return undefined
        }
      },
    },
  )
}
