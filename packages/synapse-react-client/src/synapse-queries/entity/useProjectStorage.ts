/*
 * Hooks to access Project Storage in Synapse
 */
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { ProjectStorageUsage } from '@sage-bionetworks/synapse-types'

export function useProjectStorageUsage(
  projectId: string,
  options?: Partial<UseQueryOptions<ProjectStorageUsage, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getProjectStorageUsageKey(projectId),
    queryFn: () => SynapseClient.getProjectStorageUsage(projectId, accessToken),
  })
}
