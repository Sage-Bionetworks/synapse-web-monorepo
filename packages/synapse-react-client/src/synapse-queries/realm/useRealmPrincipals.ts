import { useSynapseContext } from '@/utils'
import {
  SynapseClient,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { RealmPrincipal } from '@sage-bionetworks/synapse-client/generated/models/RealmPrincipal'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { KeyFactory } from '../KeyFactory'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'

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
export function useGetCurrentRealm<TData = RealmPrincipal>(
  options?: Partial<UseQueryOptions<RealmPrincipal, SynapseClientError, TData>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getCurrentRealmQueryKey(),
    queryFn: () => synapseClient.realmServicesClient.getRepoV1RealmPrincipals(),
  })
}

function useGetRealmPrincipalsInternal<TData = RealmPrincipal>(
  synapseClient: SynapseClient,
  keyFactory: KeyFactory,
  options?: Partial<UseQueryOptions<RealmPrincipal, SynapseClientError, TData>>,
) {
  return useQuery({
    ...options,
    queryKey: keyFactory.getRealmPrincipalsQueryKey(),
    queryFn: () => synapseClient.realmServicesClient.getRepoV1RealmPrincipals(),
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

  return useGetRealmPrincipalsInternal(synapseClient, keyFactory, options)
}

/**
 * Get the realm principals for the current user's realm, using a provided access token instead of the using SynapseContext.
 *
 * @param accessToken - The access token to use for the query
 * @param options - Query options
 * @returns The realm principal IDs as strings (authenticatedUsersId, publicGroupId, anonymousUserId), along with loading and error states
 */
export function useGetRealmPrincipalsWithToken<TData = RealmPrincipal>(
  accessToken: string,
  options?: Partial<UseQueryOptions<RealmPrincipal, SynapseClientError, TData>>,
) {
  const keyFactory = new KeyFactory(accessToken)
  const synapseClient = new SynapseClient({
    basePath: getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  })

  return useGetRealmPrincipalsInternal(synapseClient, keyFactory, options)
}
