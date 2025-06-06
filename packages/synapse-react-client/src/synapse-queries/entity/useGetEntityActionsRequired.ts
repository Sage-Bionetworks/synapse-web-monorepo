import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { ActionRequiredList } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useGetEntityActionsRequired(
  entityId: string,
  options?: Partial<UseQueryOptions<ActionRequiredList, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityActionsRequiredQueryKey(entityId),
    queryFn: () =>
      SynapseClient.getEntityDownloadActionsRequired(entityId, accessToken),
  })
}
