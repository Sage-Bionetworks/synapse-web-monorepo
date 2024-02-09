import {
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

export function useGetOAuthClientInfinite(
  options?: UseInfiniteQueryOptions<OAuthClientList, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<OAuthClientList, SynapseClientError>(
    keyFactory.getMyOAuthClientsQueryKey(),
    async context =>
      await SynapseClient.getOAuth2(accessToken!, context.pageParam),
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}

export function useDeleteOAuthClient(
  options?: UseMutationOptions<void, SynapseClientError, string>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>(
    (clientId: string) =>
      SynapseClient.deleteOAuthClient(clientId, accessToken!),
    {
      ...options,
      onSuccess: async (updatedClient, clientId, ctx) => {
        await queryClient.invalidateQueries(
          keyFactory.getMyOAuthClientsQueryKey(),
        )
        if (options?.onSuccess) {
          await options.onSuccess(updatedClient, clientId, ctx)
        }
      },
    },
  )
}

export function useUpdateOAuthClient(
  options?: UseMutationOptions<OAuthClient, SynapseClientError, OAuthClient>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<OAuthClient, SynapseClientError, OAuthClient>(
    (client: OAuthClient) =>
      SynapseClient.updateOAuthClient(client, accessToken!),
    {
      ...options,
      onSuccess: async (updatedClient, client, ctx) => {
        await queryClient.invalidateQueries(
          keyFactory.getMyOAuthClientsQueryKey(),
        )
        if (options?.onSuccess) {
          await options.onSuccess(updatedClient, client, ctx)
        }
      },
    },
  )
}

export function useCreateOAuthClient(
  options?: UseMutationOptions<OAuthClient, SynapseClientError, OAuthClient>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<OAuthClient, SynapseClientError, OAuthClient>(
    (client: OAuthClient) =>
      SynapseClient.createOAuthClient(client, accessToken!),
    {
      ...options,
      onSuccess: async (updatedClient, client, ctx) => {
        await queryClient.invalidateQueries(
          keyFactory.getMyOAuthClientsQueryKey(),
        )
        if (options?.onSuccess) {
          await options.onSuccess(updatedClient, client, ctx)
        }
      },
    },
  )
}
