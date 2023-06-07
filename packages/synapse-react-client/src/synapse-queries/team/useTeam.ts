import { useQuery, UseQueryOptions } from 'react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { Team } from '@sage-bionetworks/synapse-types'

export function useGetTeam(
  teamId: string | number,
  options?: UseQueryOptions<Team, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<Team, SynapseClientError>(
    keyFactory.getTeamQueryKey(teamId.toString()),
    () => SynapseClient.getTeam(teamId, accessToken),
    options,
  )
}
