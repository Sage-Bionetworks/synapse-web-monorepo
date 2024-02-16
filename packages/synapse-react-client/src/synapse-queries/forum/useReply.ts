import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import {
  CreateDiscussionReply,
  DiscussionFilter,
  DiscussionReplyBundle,
  DiscussionReplyOrder,
  Match,
  PaginatedResults,
  UpdateDiscussionReply,
} from '@sage-bionetworks/synapse-types'
import { getNextPageParamForPaginatedResults } from '../InfiniteQueryUtils'

export function useGetRepliesInfinite<
  TData = InfiniteData<PaginatedResults<DiscussionReplyBundle>>,
>(
  threadId: string,
  ascending: boolean,
  limit: number,
  sort?: DiscussionReplyOrder,
  filter?: DiscussionFilter,
  options?: Partial<
    UseInfiniteQueryOptions<
      PaginatedResults<DiscussionReplyBundle>,
      SynapseClientError,
      TData,
      PaginatedResults<DiscussionReplyBundle>,
      QueryKey,
      number | undefined
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    PaginatedResults<DiscussionReplyBundle>,
    SynapseClientError,
    TData,
    QueryKey,
    number | undefined
  >({
    ...options,
    queryKey: keyFactory.getRepliesQueryKey(
      threadId,
      ascending,
      limit,
      sort,
      filter,
    ),
    queryFn: async context => {
      return SynapseClient.getReplies(
        accessToken,
        threadId,
        limit,
        context.pageParam,
        sort,
        ascending,
        filter,
      )
    },
    initialPageParam: undefined,
    getNextPageParam: getNextPageParamForPaginatedResults,
  })
}

export function useGetReply(
  reply: DiscussionReplyBundle,
  options?: Partial<UseQueryOptions<string, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryFn = async () => {
    const messageUrl = await SynapseClient.getReplyMessageUrl(
      reply.messageKey,
      accessToken,
    )
    const data = await fetch(messageUrl.messageUrl, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Access-Control-Request-Headers': 'authorization',
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })
    return data.text()
  }
  return useQuery<string, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getReplyQueryKey(
      reply.threadId,
      reply.id,
      reply.messageKey,
    ),
    queryFn,
  })
}

export function usePostReply(
  options?: UseMutationOptions<
    DiscussionReplyBundle,
    SynapseClientError,
    CreateDiscussionReply
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()
  return useMutation<
    DiscussionReplyBundle,
    SynapseClientError,
    CreateDiscussionReply
  >({
    ...options,
    mutationFn: (request: CreateDiscussionReply) =>
      SynapseClient.postReply(request, accessToken),
    onSuccess: async (newReply, variables, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllRepliesQueryKey(newReply.threadId),
      })
      if (options?.onSuccess) {
        await options.onSuccess(newReply, variables, ctx)
      }
    },
  })
}

export function usePutReply(
  options?: UseMutationOptions<
    DiscussionReplyBundle,
    SynapseClientError,
    UpdateDiscussionReply
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    DiscussionReplyBundle,
    SynapseClientError,
    UpdateDiscussionReply
  >({
    ...options,
    mutationFn: (request: UpdateDiscussionReply) =>
      SynapseClient.putReply(request, accessToken),
    onSuccess: async (newReply, variables, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllRepliesQueryKey(newReply.threadId),
      })

      if (options?.onSuccess) {
        await options.onSuccess(newReply, variables, ctx)
      }
    },
  })
}

export function useDeleteReply(
  options?: Partial<UseMutationOptions<void, SynapseClientError, Match>>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, Match>({
    ...options,
    mutationFn: (match: Match) =>
      SynapseClient.deleteReply(accessToken, match.replyId),
    onSuccess: async (updatedReply, variables, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllRepliesQueryKey(variables.threadId),
      })

      if (options?.onSuccess) {
        await options.onSuccess(updatedReply, variables, ctx)
      }
    },
  })
}
