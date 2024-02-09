import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  ChallengeTeam,
  ListWrapper,
  Team,
} from '@sage-bionetworks/synapse-types'

export function useGetTeamList(
  teamIds: string[] | number[],
  options?: UseQueryOptions<ListWrapper<Team>, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<ListWrapper<Team>, SynapseClientError>(
    keyFactory.getTeamListQueryKey(teamIds.sort().join()),
    () => SynapseClient.getTeamList(teamIds, accessToken),
    options,
  )
}

export function useGetChallengeTeamList(
  challengeId: string,
  options?: UseQueryOptions<ChallengeTeam[], SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<ChallengeTeam[], SynapseClientError>(
    keyFactory.getChallengeTeamListQueryKey(challengeId),
    () => SynapseClient.getAllChallengeTeams(accessToken, challengeId),
    options,
  )
}
