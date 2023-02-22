import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  UseQueryOptions,
  useQuery,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { PaginatedResults } from '../../../synapseTypes'
import {
  DiscussionFilter,
  DiscussionThreadBundle,
  DiscussionThreadOrder,
} from '../../../synapseTypes/DiscussionBundle'
import { PaginatedIds } from '../../../synapseTypes/PaginatedIds'

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
