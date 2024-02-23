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
  options?: Partial<UseQueryOptions<ListWrapper<Team>, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getTeamListQueryKey(teamIds.sort().join()),
    queryFn: () => SynapseClient.getTeamList(teamIds, accessToken),
  })
}

export function useGetChallengeTeamList(
  challengeId: string,
  options?: Partial<UseQueryOptions<ChallengeTeam[], SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,

    queryKey: keyFactory.getChallengeTeamListQueryKey(challengeId),
    queryFn: () => SynapseClient.getAllChallengeTeams(accessToken, challengeId),
  })
}
