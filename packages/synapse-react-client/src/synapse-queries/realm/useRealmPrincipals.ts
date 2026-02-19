import { useApplicationSessionContext, useSynapseContext } from '@/utils'
import { Realm, SynapseClientError } from '@sage-bionetworks/synapse-client'
import { RealmPrincipal } from '@sage-bionetworks/synapse-client/generated/models/RealmPrincipal'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export type RealmPrincipalIds = {
  /** The principal ID representing all authenticated users */
  authenticatedUsersId: string | undefined
  /** The principal ID representing all users (authenticated and anonymous) */
  publicGroupId: string | undefined
  /** The principal ID representing the anonymous user */
  anonymousUserId: string | undefined
}

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
