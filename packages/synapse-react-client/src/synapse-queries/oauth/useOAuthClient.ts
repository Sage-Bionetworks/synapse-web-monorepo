import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { OAuthClient } from '@sage-bionetworks/synapse-client/generated/models/OAuthClient'
import { OAuthClientList } from '@sage-bionetworks/synapse-client/generated/models/OAuthClientList'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'

export function useGetOAuthClientInfinite<
  TData = InfiniteData<OAuthClientList>,
>(
  options?: Partial<
    UseInfiniteQueryOptions<
      OAuthClientList,
      SynapseClientError,
      TData,
      QueryKey,
      OAuthClientList['nextPageToken']
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    OAuthClientList,
    SynapseClientError,
    TData,
    QueryKey,
    OAuthClientList['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getMyOAuthClientsQueryKey(),
    queryFn: async context =>
      await synapseClient.openIDConnectServicesClient.getAuthV1Oauth2Client({
        nextPageToken: context.pageParam,
      }),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}

export function useDeleteOAuthClient(
  options?: Partial<UseMutationOptions<void, SynapseClientError, string>>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>({
    ...options,
    mutationFn: (clientId: string) =>
      SynapseClient.deleteOAuthClient(clientId, accessToken!),
    onSuccess: async (updatedClient, clientId, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getMyOAuthClientsQueryKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(updatedClient, clientId, ctx)
      }
    },
  })
}

export function useUpdateOAuthClient(
  options?: Partial<
    UseMutationOptions<OAuthClient, SynapseClientError, OAuthClient>
  >,
) {
  const queryClient = useQueryClient()
  const { synapseClient, keyFactory } = useSynapseContext()

  return useMutation<OAuthClient, SynapseClientError, OAuthClient>({
    ...options,
    mutationFn: (client: OAuthClient) =>
      synapseClient.openIDConnectServicesClient.putAuthV1Oauth2ClientId({
        id: client.client_id!,
        oAuthClient: client,
      }),
    onSuccess: async (updatedClient, client, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getMyOAuthClientsQueryKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(updatedClient, client, ctx)
      }
    },
  })
}

export function useCreateOAuthClient(
  options?: Partial<
    UseMutationOptions<OAuthClient, SynapseClientError, OAuthClient>
  >,
) {
  const queryClient = useQueryClient()
  const { synapseClient, keyFactory } = useSynapseContext()

  return useMutation<OAuthClient, SynapseClientError, OAuthClient>({
    ...options,
    mutationFn: (client: OAuthClient) =>
      synapseClient.openIDConnectServicesClient.postAuthV1Oauth2Client({
        oAuthClient: client,
      }),
    onSuccess: async (updatedClient, client, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getMyOAuthClientsQueryKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(updatedClient, client, ctx)
      }
    },
  })
}
