import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { Team } from '@sage-bionetworks/synapse-types'

export function useGetTeam(
  teamId: string,
  options?: Partial<UseQueryOptions<Team, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getTeamQueryKey(teamId),
    queryFn: () => SynapseClient.getTeam(teamId, accessToken),
  })
}
