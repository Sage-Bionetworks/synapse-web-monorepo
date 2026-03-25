import { useApplicationSessionContext, useSynapseContext } from '@/utils'
import { Realm, SynapseClientError } from '@sage-bionetworks/synapse-client'
import { RealmPrincipal } from '@sage-bionetworks/synapse-client/generated/models/RealmPrincipal'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { KeyFactory } from '../KeyFactory'
import { SynapseClient } from '@sage-bionetworks/synapse-client/SynapseClient'

/**
 * Get query options for fetching a realm by ID.
 * This can be used with useQuery, useQueries, or useSuspenseQuery.
 *
 * @param realmId - The realm ID to fetch
 * @param keyFactory - The key factory instance
 * @param synapseClient - The Synapse client instance
 * @returns Query options for fetching the realm
 */
export const getRealmByIdQueryOptions = (
  realmId: string,
  keyFactory: KeyFactory,
  synapseClient: InstanceType<typeof SynapseClient>,
) => ({
  queryKey: keyFactory.getRealmByIdQueryKey(realmId),
  queryFn: () =>
    synapseClient.realmServicesClient.getRepoV1RealmId({
      id: realmId,
    }),
})

/**
 * Get the current realm for the logged in user.
 *
 * @param options - Query options
 * @returns The realm ID for the current user
 */
export function useGetCurrentRealm<TData = Realm>(
  options?: Partial<UseQueryOptions<Realm, SynapseClientError, TData>>,
) {
  const { realmId } = useApplicationSessionContext()
  const { synapseClient, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getCurrentRealmQueryKey(),
    queryFn: () =>
      synapseClient.realmServicesClient.getRepoV1RealmId({ id: realmId! }),
  })
}

/**
 * Get a realm by its ID.
 *
 * @param realmId - The realm ID to fetch
 * @param options - Query options
 * @returns The realm object
 */
export function useGetRealm<TData = Realm>(
  realmId: string,
  options?: Partial<UseQueryOptions<Realm, SynapseClientError, TData>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    ...getRealmByIdQueryOptions(realmId, keyFactory, synapseClient),
  })
}

/**
 * Get the realm principals for the current user's realm.
 *
 * @param options - Query options
 * @returns The realm principal IDs as strings (authenticatedUsersId, publicGroupId, anonymousUserId), along with loading and error states
 */
export function useGetRealmPrincipals<TData = RealmPrincipal>(
  options?: Partial<UseQueryOptions<RealmPrincipal, SynapseClientError, TData>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getRealmPrincipalsQueryKey(),
    queryFn: () => synapseClient.realmServicesClient.getRepoV1RealmPrincipals(),
  })
}
