import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { Activity } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useGetActivityForEntity(
  entityId: string,
  versionNumber: number,
  options?: Partial<UseQueryOptions<Activity, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityActivityQueryKey(entityId, versionNumber),
    queryFn: () =>
      SynapseClient.getActivityForEntity(entityId, versionNumber, accessToken),
  })
}
