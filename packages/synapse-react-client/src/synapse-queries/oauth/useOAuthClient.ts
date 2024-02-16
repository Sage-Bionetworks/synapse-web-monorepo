import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { OAuthClient, OAuthClientList } from '@sage-bionetworks/synapse-types'

export function useGetOAuthClientInfinite<
  TData = InfiniteData<OAuthClientList>,
>(
  options?: Partial<
    UseInfiniteQueryOptions<
      OAuthClientList,
      SynapseClientError,
      TData,
      OAuthClientList,
      QueryKey,
      OAuthClientList['nextPageToken']
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
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
      await SynapseClient.getOAuth2(accessToken!, context.pageParam),
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
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<OAuthClient, SynapseClientError, OAuthClient>({
    ...options,
    mutationFn: (client: OAuthClient) =>
      SynapseClient.updateOAuthClient(client, accessToken!),
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
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<OAuthClient, SynapseClientError, OAuthClient>({
    ...options,
    mutationFn: (client: OAuthClient) =>
      SynapseClient.createOAuthClient(client, accessToken!),
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
