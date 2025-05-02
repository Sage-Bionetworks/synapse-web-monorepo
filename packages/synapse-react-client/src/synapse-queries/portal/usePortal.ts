import { useSynapseContext } from '@/utils/index'
import {
  Portal,
  SynapseClientError,
  type UserPortalPermissions,
} from '@sage-bionetworks/synapse-client'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useGetPortal(
  portalId: string,
  options?: Partial<UseQueryOptions<Portal, SynapseClientError>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery<Portal, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getPortalKey(portalId),
    queryFn: () =>
      synapseClient.portalsServicesClient.getRepoV1PortalPortalId({
        portalId,
      }),
  })
}

export function useGetUserPortalPermissions<TData = UserPortalPermissions>(
  portalId: string,
  options?: Partial<
    UseQueryOptions<UserPortalPermissions, SynapseClientError, TData>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getPortalPermissionsKey(portalId),

    queryFn: () =>
      synapseClient.portalsServicesClient.getRepoV1PortalPortalIdPermissions({
        portalId,
      }),
  })
}
