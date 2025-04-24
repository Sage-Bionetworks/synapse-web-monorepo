import { useSynapseContext } from '@/utils/index'
import {
  AccessControlList,
  Portal,
  SynapseClientError,
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
export function useGetPortalAcl(
  portalId: string,
  options?: Partial<UseQueryOptions<AccessControlList, SynapseClientError>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery<AccessControlList, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getPortalAclKey(portalId),

    queryFn: () =>
      synapseClient.portalsServicesClient.getRepoV1PortalPortalIdAcl({
        portalId,
      }),
  })
}
