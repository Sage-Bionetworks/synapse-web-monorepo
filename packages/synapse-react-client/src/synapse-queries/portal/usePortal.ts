import { useSynapseContext } from '@/utils/index'
import {
  AccessControlList,
  Portal,
  SynapseClientError,
  type UserPortalPermissions,
} from '@sage-bionetworks/synapse-client'
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'

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

export function useGetPortalACL(
  portalId: string,
  options?: Partial<
    UseQueryOptions<AccessControlList | null, SynapseClientError>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getPortalAclQueryKey(portalId),
    queryFn: () =>
      synapseClient.portalsServicesClient.getRepoV1PortalPortalIdAcl({
        portalId,
      }),
  })
}

export function useUpdatePortalACL(
  options?: UseMutationOptions<
    AccessControlList,
    SynapseClientError,
    AccessControlList
  >,
) {
  const queryClient = useQueryClient()
  const { synapseClient, keyFactory } = useSynapseContext()
  return useMutation<AccessControlList, SynapseClientError, AccessControlList>({
    ...options,
    mutationFn: acl =>
      synapseClient.portalsServicesClient.putRepoV1PortalPortalIdAcl({
        portalId: acl.id!,
        accessControlList: acl,
      }),
    onSuccess: async (newAcl, acl, ctx) => {
      const portalAclQueryKey = keyFactory.getPortalAclQueryKey(newAcl.id!)
      queryClient.setQueryData(portalAclQueryKey, newAcl)

      if (options?.onSuccess) {
        return await options.onSuccess(newAcl, acl, ctx)
      }
      return
    },
  })
}
