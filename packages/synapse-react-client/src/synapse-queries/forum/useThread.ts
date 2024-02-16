import { useCallback } from 'react'
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import {
  CreateDiscussionThread,
  DiscussionThreadBundle,
  UpdateThreadMessageRequest,
  UpdateThreadTitleRequest,
} from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'

export function useGetThread(threadId: string) {
  const { data: threadData, isLoading: isLoadingBundle } =
    useGetThreadBundle(threadId)
  const { data: threadBody, isLoading: isLoadingBody } = useGetThreadBody(
    threadData,
    { enabled: !!threadData },
  )
  const { mutate: pinThread } = usePinThread()
  const { mutate: unPinThread } = useUnPinThread()

  const togglePin = useCallback(() => {
    if (threadData) {
      if (threadData?.isPinned) {
        unPinThread(threadData)
      } else {
        pinThread(threadData)
      }
    }
  }, [unPinThread, pinThread, threadData])

  const isLoading = isLoadingBody || isLoadingBundle
  return { threadData, threadBody, togglePin, isLoading }
}

export function useGetThreadBundle(
  threadId: string,
  options?: Partial<
    UseQueryOptions<DiscussionThreadBundle, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getThreadQueryKey(threadId),
    queryFn: () => SynapseClient.getThread(threadId, accessToken),
  })
}

export function useGetThreadBody(
  threadData?: DiscussionThreadBundle,
  options?: Partial<UseQueryOptions<string, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  const queryFn = async () => {
    const messageUrl = await SynapseClient.getThreadMessageUrl(
      threadData?.messageKey!,
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
    queryKey: keyFactory.getThreadBodyQueryKey(
      threadData?.id!,
      threadData?.messageKey!,
    ),
    queryFn,
  })
}

export function useUpdateThreadTitle(
  options?: UseMutationOptions<
    DiscussionThreadBundle,
    SynapseClientError,
    UpdateThreadTitleRequest
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()
  return useMutation<
    DiscussionThreadBundle,
    SynapseClientError,
    UpdateThreadTitleRequest
  >({
    ...options,
    mutationFn: (request: UpdateThreadTitleRequest) =>
      SynapseClient.putThreadTitle(accessToken, request),
    onSuccess: async (newThread, variables, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllForumThreadsQueryKey(newThread.forumId),
      })
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getThreadQueryKey(variables.threadId),
      })
      if (options?.onSuccess) {
        await options.onSuccess(newThread, variables, ctx)
      }
    },
  })
}

export function useUpdateThreadMessage(
  options?: UseMutationOptions<
    DiscussionThreadBundle,
    SynapseClientError,
    UpdateThreadMessageRequest
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    DiscussionThreadBundle,
    SynapseClientError,
    UpdateThreadMessageRequest
  >({
    ...options,
    mutationFn: (request: UpdateThreadMessageRequest) =>
      SynapseClient.putThreadMessage(accessToken, request),
    onSuccess: async (newThread, variables, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getThreadQueryKey(variables.threadId),
      })
      if (options?.onSuccess) {
        await options.onSuccess(newThread, variables, ctx)
      }
    },
  })
}

export function useCreateThread(
  options?: UseMutationOptions<
    DiscussionThreadBundle,
    SynapseClientError,
    CreateDiscussionThread
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    DiscussionThreadBundle,
    SynapseClientError,
    CreateDiscussionThread
  >({
    ...options,
    mutationFn: (newThread: CreateDiscussionThread) =>
      SynapseClient.postThread(accessToken, newThread),
    onSuccess: async (threadBundle, newThreadRequest, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllForumThreadsQueryKey(threadBundle.forumId),
      })
      if (options?.onSuccess) {
        await options.onSuccess(threadBundle, newThreadRequest, ctx)
      }
    },
  })
}

export function useDeleteThread(
  options?: UseMutationOptions<
    void,
    SynapseClientError,
    DiscussionThreadBundle
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, DiscussionThreadBundle>({
    ...options,
    mutationFn: (threadBundle: DiscussionThreadBundle) =>
      SynapseClient.deleteThread(accessToken, threadBundle.id),
    onSuccess: async (updatedThread, threadBundle, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllForumThreadsQueryKey(threadBundle.forumId),
      })
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getThreadQueryKey(threadBundle.id),
      })
      if (options?.onSuccess) {
        await options.onSuccess(updatedThread, threadBundle, ctx)
      }
    },
  })
}

export function useRestoreThread(
  options?: UseMutationOptions<
    void,
    SynapseClientError,
    DiscussionThreadBundle
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, DiscussionThreadBundle>({
    ...options,
    mutationFn: (threadBundle: DiscussionThreadBundle) =>
      SynapseClient.restoreThread(accessToken, threadBundle.id),
    onSuccess: async (updatedThread, threadBundle, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllForumThreadsQueryKey(threadBundle.forumId),
      })
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getThreadQueryKey(threadBundle.id),
      })
      if (options?.onSuccess) {
        await options.onSuccess(updatedThread, threadBundle, ctx)
      }
    },
  })
}

export function usePinThread(
  options?: UseMutationOptions<
    void,
    SynapseClientError,
    DiscussionThreadBundle
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, DiscussionThreadBundle>({
    ...options,
    mutationFn: (threadBundle: DiscussionThreadBundle) =>
      SynapseClient.pinThread(accessToken, threadBundle.id),
    onSuccess: async (updatedThread, threadBundle, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllForumThreadsQueryKey(threadBundle.forumId),
      })
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getThreadQueryKey(threadBundle.id),
      })
      if (options?.onSuccess) {
        await options.onSuccess(updatedThread, threadBundle, ctx)
      }
    },
  })
}

export function useUnPinThread(
  options?: UseMutationOptions<
    void,
    SynapseClientError,
    DiscussionThreadBundle
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, DiscussionThreadBundle>({
    ...options,
    mutationFn: (threadBundle: DiscussionThreadBundle) =>
      SynapseClient.unPinThread(accessToken, threadBundle.id),
    onSuccess: async (updatedThread, threadBundle, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllForumThreadsQueryKey(threadBundle.forumId),
      })
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getThreadQueryKey(threadBundle.id),
      })
      if (options?.onSuccess) {
        await options.onSuccess(updatedThread, threadBundle, ctx)
      }
    },
  })
}
