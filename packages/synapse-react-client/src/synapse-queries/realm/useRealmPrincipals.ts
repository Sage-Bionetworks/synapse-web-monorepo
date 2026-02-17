import { useSynapseContext } from '@/utils'
import { SYNAPSE_REALM } from '@/utils/SynapseConstants'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { RealmPrincipal } from '@sage-bionetworks/synapse-client/generated/models/RealmPrincipal'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

/**
 * Get the current realm ID for the logged in user.
 * If authenticated, fetches the realm ID from the API using the access token.
 * If not authenticated, returns the default Synapse realm ID.
 *
 * @param options - Query options
 * @returns The realm ID for the current user
 */
export function useGetCurrentRealm(
  options?: Partial<UseQueryOptions<string, SynapseClientError>>,
) {
  const { synapseClient, keyFactory, isAuthenticated } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getCurrentRealmQueryKey(),
    queryFn: async () => {
      if (isAuthenticated) {
        // Fetch realm principals which includes the realmId
        const realmPrincipal =
          await synapseClient.realmServicesClient.getRepoV1RealmPrincipals()
        return realmPrincipal.realmId ?? SYNAPSE_REALM
      } else {
        // Return the default Synapse realm ID for unauthenticated users
        return SYNAPSE_REALM
      }
    },
  })
}

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
        // Use unauthenticated endpoint with default Synapse realm
        return await synapseClient.realmServicesClient.getRepoV1RealmIdPrincipals(
          { id: SYNAPSE_REALM },
        )
      }
    },
  })
}
