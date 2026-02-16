import { useSynapseContext } from '@/utils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { RealmPrincipal } from '@sage-bionetworks/synapse-client/generated/models/RealmPrincipal'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

/**
 * Get the realm principals for the current user's realm.
 * If the user is authenticated, uses getRepoV1RealmPrincipals() which determines the realm from the access token.
 * If the user is not authenticated, uses getRepoV1RealmIdPrincipals() with realm ID '0' (the default realm).
 *
 * @param options - Query options
 * @returns The realm principals containing authenticatedUsers, publicGroup, and anonymousUser IDs
 */
export function useGetRealmPrincipals(
  options?: Partial<UseQueryOptions<RealmPrincipal, SynapseClientError>>,
) {
  const { synapseClient, keyFactory, isAuthenticated } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getRealmPrincipalsQueryKey(),
    queryFn: async () => {
      if (isAuthenticated) {
        // Use authenticated endpoint which determines realm from access token
        return await synapseClient.realmServicesClient.getRepoV1RealmPrincipals()
      } else {
        // Use unauthenticated endpoint with default realm
        return await synapseClient.realmServicesClient.getRepoV1RealmIdPrincipals(
          { id: '0' },
        )
      }
    },
  })
}
