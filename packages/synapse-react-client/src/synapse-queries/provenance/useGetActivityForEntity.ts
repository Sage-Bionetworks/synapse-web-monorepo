import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { Activity } from '@sage-bionetworks/synapse-types'

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
