import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { Activity } from '@sage-bionetworks/synapse-types'

export function useGetActivityForEntity(
  entityId: string,
  versionNumber: number,
  options?: UseQueryOptions<Activity, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<Activity, SynapseClientError>(
    keyFactory.getEntityActivityQueryKey(entityId, versionNumber),
    () =>
      SynapseClient.getActivityForEntity(entityId, versionNumber, accessToken),
    options,
  )
}
