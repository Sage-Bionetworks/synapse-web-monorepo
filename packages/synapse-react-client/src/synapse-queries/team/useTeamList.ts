import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  ChallengeTeam,
  ListWrapper,
  Team,
} from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

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
