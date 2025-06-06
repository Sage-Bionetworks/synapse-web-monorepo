/*
 * Hooks to access Project Storage in Synapse
 */
import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { ProjectStorageUsage } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

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
