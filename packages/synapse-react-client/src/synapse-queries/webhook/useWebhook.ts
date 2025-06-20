import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  CreateOrUpdateWebhookRequest,
  ListUserWebhooksResponse,
  PostRepoV1WebhookWebhookIdVerifyRequest,
  PutRepoV1WebhookWebhookIdRequest,
  SynapseClientError,
  VerifyWebhookResponse,
  Webhook,
} from '@sage-bionetworks/synapse-client'
import {
  InfiniteData,
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'

export function useGetWebhooksInfinite<
  TData = InfiniteData<ListUserWebhooksResponse>,
>(
  options?: Partial<
    UseInfiniteQueryOptions<
      ListUserWebhooksResponse,
      SynapseClientError,
      TData,
      QueryKey,
      ListUserWebhooksResponse['nextPageToken']
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    ListUserWebhooksResponse,
    SynapseClientError,
    TData,
    QueryKey,
    ListUserWebhooksResponse['nextPageToken']
  >({
    ...options,
    initialPageParam: undefined,
    queryKey: keyFactory.getWebhooksQueryKey(),
    queryFn: async (
      context: QueryFunctionContext<QueryKey, string | undefined>,
    ) =>
      synapseClient.webhookServicesClient.postRepoV1WebhookList({
        listUserWebhooksRequest: {
          nextPageToken: context.pageParam,
        },
      }),
    getNextPageParam: page => page.nextPageToken,
  })
}

export function useCreateWebhook(
  options?: Partial<
    UseMutationOptions<
      Webhook,
      SynapseClientError,
      CreateOrUpdateWebhookRequest
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<Webhook, SynapseClientError, CreateOrUpdateWebhookRequest>(
    {
      ...options,
      mutationFn: createWebhookRequest =>
        synapseClient.webhookServicesClient.postRepoV1Webhook({
          createOrUpdateWebhookRequest: createWebhookRequest,
        }),
      onSuccess: (...args) => {
        void queryClient.invalidateQueries({
          queryKey: keyFactory.getWebhooksQueryKey(),
        })
        if (options?.onSuccess) {
          options.onSuccess(...args)
        }
      },
    },
  )
}

export function useUpdateWebhook(
  options?: Partial<
    UseMutationOptions<
      Webhook,
      SynapseClientError,
      PutRepoV1WebhookWebhookIdRequest
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<
    Webhook,
    SynapseClientError,
    PutRepoV1WebhookWebhookIdRequest
  >({
    ...options,
    mutationFn: updateWebhookRequest =>
      synapseClient.webhookServicesClient.putRepoV1WebhookWebhookId(
        updateWebhookRequest,
      ),
    onSuccess: (...args) => {
      void queryClient.invalidateQueries({
        queryKey: keyFactory.getWebhooksQueryKey(),
      })
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
    },
  })
}

export function useDeleteWebhook(
  options?: Partial<UseMutationOptions<void, SynapseClientError, string>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<void, SynapseClientError, string>({
    ...options,
    mutationFn: webhookId =>
      synapseClient.webhookServicesClient.deleteRepoV1WebhookWebhookId({
        webhookId,
      }),
    onSuccess: (...args) => {
      void queryClient.invalidateQueries({
        queryKey: keyFactory.getWebhooksQueryKey(),
      })
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
    },
  })
}

export function useVerifyWebhook(
  options?: Partial<
    UseMutationOptions<
      VerifyWebhookResponse,
      SynapseClientError,
      PostRepoV1WebhookWebhookIdVerifyRequest
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<
    VerifyWebhookResponse,
    SynapseClientError,
    PostRepoV1WebhookWebhookIdVerifyRequest
  >({
    ...options,
    mutationFn: verifyRequest =>
      synapseClient.webhookServicesClient.postRepoV1WebhookWebhookIdVerify(
        verifyRequest,
      ),
    onSuccess: (...args) => {
      void queryClient.invalidateQueries({
        queryKey: keyFactory.getWebhooksQueryKey(),
      })
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
    },
  })
}

export function useResendVerificationCode(
  options?: Partial<UseMutationOptions<Webhook, SynapseClientError, string>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation<Webhook, SynapseClientError, string>({
    ...options,
    mutationFn: webhookId =>
      synapseClient.webhookServicesClient.putRepoV1WebhookWebhookIdVerificationCode(
        { webhookId },
      ),
    onSuccess: (...args) => {
      void queryClient.invalidateQueries({
        queryKey: keyFactory.getWebhooksQueryKey(),
      })
      if (options?.onSuccess) {
        options.onSuccess(...args)
      }
    },
  })
}
