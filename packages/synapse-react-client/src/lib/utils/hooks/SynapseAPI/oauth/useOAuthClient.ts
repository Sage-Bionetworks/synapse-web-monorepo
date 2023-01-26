import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { OAuthClient, OAuthClientList } from '../../../synapseTypes/OAuthClient'

const oAuthQueryKeys = {
  all: (accessToken: string) => ['oAuthClient', accessToken],
}

export function useGetOAuthClientInfinite(
  options?: UseInfiniteQueryOptions<OAuthClientList, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useInfiniteQuery<OAuthClientList, SynapseClientError>(
    oAuthQueryKeys.all(accessToken!),
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
  const { accessToken } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>(
    (clientId: string) =>
      SynapseClient.deleteOAuthClient(clientId, accessToken!),
    {
      ...options,
      onSuccess: async (updatedClient, clientId, ctx) => {
        await queryClient.invalidateQueries(oAuthQueryKeys.all(accessToken!))
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
  const { accessToken } = useSynapseContext()

  return useMutation<OAuthClient, SynapseClientError, OAuthClient>(
    (client: OAuthClient) =>
      SynapseClient.updateOAuthClient(client, accessToken!),
    {
      ...options,
      onSuccess: async (updatedClient, client, ctx) => {
        await queryClient.invalidateQueries(oAuthQueryKeys.all(accessToken!))
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
  const { accessToken } = useSynapseContext()

  return useMutation<OAuthClient, SynapseClientError, OAuthClient>(
    (client: OAuthClient) =>
      SynapseClient.createOAuthClient(client, accessToken!),
    {
      ...options,
      onSuccess: async (updatedClient, client, ctx) => {
        await queryClient.invalidateQueries(oAuthQueryKeys.all(accessToken!))
        if (options?.onSuccess) {
          await options.onSuccess(updatedClient, client, ctx)
        }
      },
    },
  )
}
