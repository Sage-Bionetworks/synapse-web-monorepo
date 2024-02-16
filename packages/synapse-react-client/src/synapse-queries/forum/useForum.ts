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
import { useSynapseContext } from '../../utils'
import {
  DiscussionFilter,
  DiscussionThreadBundle,
  DiscussionThreadOrder,
  Forum,
  PaginatedIds,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'

export function useGetModerators(
  forumId: string,
  options?: Partial<UseQueryOptions<PaginatedIds, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getForumModeratorsQueryKey(forumId),
    queryFn: () => SynapseClient.getModerators(accessToken, forumId),
  })
}

export function useGetForumMetadata(
  forumId: string,
  options?: Partial<UseQueryOptions<Forum, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getForumMetadataQueryKey(forumId),
    queryFn: () => SynapseClient.getForumMetadata(accessToken, forumId),
  })
}

export function useGetForumInfinite<
  TData = InfiniteData<PaginatedResults<DiscussionThreadBundle>>,
>(
  forumId: string,
  limit: number,
  sort: DiscussionThreadOrder,
  ascending: boolean,
  filter?: DiscussionFilter,
  options?: Partial<
    UseInfiniteQueryOptions<
      PaginatedResults<DiscussionThreadBundle>,
      SynapseClientError,
      TData,
      PaginatedResults<DiscussionThreadBundle>,
      QueryKey,
      number | undefined
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    PaginatedResults<DiscussionThreadBundle>,
    SynapseClientError,
    TData,
    QueryKey,
    number | undefined
  >({
    ...options,
    queryKey: keyFactory.getForumThreadsQueryKey(
      forumId,
      limit,
      sort,
      ascending,
      filter,
    ),
    queryFn: async context => {
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
    initialPageParam: undefined,
    getNextPageParam: (lastPage, pages) => {
      const numberOfFetchedResults = pages.flatMap(page => page.results).length
      if (lastPage.totalNumberOfResults! > numberOfFetchedResults) {
        return numberOfFetchedResults
      } else {
        return undefined
      }
    },
  })
}
