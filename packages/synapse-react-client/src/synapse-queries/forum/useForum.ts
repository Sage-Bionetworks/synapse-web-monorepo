import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import {
  DiscussionSearchRequest,
  DiscussionSearchResponse,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  DiscussionFilter,
  DiscussionThreadBundle,
  DiscussionThreadOrder,
  Forum,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import { getNextPageParamForPaginatedResults } from '../InfiniteQueryUtils'

export function useGetModerators(
  forumId: string,
  options?: Partial<UseQueryOptions<string[], SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getForumModeratorsQueryKey(forumId),
    queryFn: () => SynapseClient.getAllModerators(accessToken, forumId),
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

export function useGetForumThreadsInfinite<
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
      return SynapseClient.getForumThreads(
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
    getNextPageParam: getNextPageParamForPaginatedResults,
  })
}

export function useSearchForumInfinite<
  TData = InfiniteData<DiscussionSearchResponse>,
>(
  forumId: string,
  discussionSearchRequest: Omit<DiscussionSearchRequest, 'nextPageToken'>,
  options?: Partial<
    UseInfiniteQueryOptions<
      DiscussionSearchResponse,
      SynapseClientError,
      TData,
      QueryKey,
      DiscussionSearchRequest['nextPageToken']
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    DiscussionSearchResponse,
    SynapseClientError,
    TData,
    QueryKey,
    DiscussionSearchRequest['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getForumSearchQueryKey(
      forumId,
      discussionSearchRequest,
    ),
    queryFn: context =>
      synapseClient.discussionServicesClient.postRepoV1ForumForumIdSearch({
        forumId,
        discussionSearchRequest: {
          ...discussionSearchRequest,
          nextPageToken: context.pageParam,
        },
      }),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
