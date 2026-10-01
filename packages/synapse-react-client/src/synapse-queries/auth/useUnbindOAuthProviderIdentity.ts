import { SynapseClientError, useSynapseContext } from '@/utils'
import { OAuthProvider } from '@sage-bionetworks/synapse-client'
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'
import { CURRENT_USER_ID } from '../KeyFactory'

/**
 * Removes the link between the current user's account and an OAuth identity provider.
 *
 * Unlike unbinding by alias, this does not require knowing the user's alias with the provider, so
 * it can be used for providers whose alias is not exposed in the user bundle (e.g. NIH RAS).
 */
export function useUnbindOAuthProviderIdentity(
  options?: Partial<
    UseMutationOptions<void, SynapseClientError, OAuthProvider>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  return useMutation<void, SynapseClientError, OAuthProvider>({
    ...options,
    mutationFn: provider =>
      synapseClient.authenticationServicesClient.deleteAuthV1Oauth2Identity({
        provider,
      }),
    onSuccess: async (data, provider, ctx) => {
      // The bundle reports which providers are linked, so every mask of it is now stale
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllUserBundleQueryKey(CURRENT_USER_ID),
      })

      if (options?.onSuccess) {
        await options.onSuccess(data, provider, ctx)
      }
    },
  })
}
