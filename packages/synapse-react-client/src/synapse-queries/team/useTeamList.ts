import { useQuery, UseQueryOptions } from 'react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  ChallengeTeam,
  ListWrapper,
  PaginatedResults,
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
  offset?: number,
  limit?: number,
  options?: UseQueryOptions<
    PaginatedResults<ChallengeTeam>,
    SynapseClientError
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<PaginatedResults<ChallengeTeam>, SynapseClientError>(
    keyFactory.getChallengeTeamListQueryKey(challengeId),
    () =>
      SynapseClient.getChallengeTeams(accessToken, challengeId, offset, limit),
    options,
  )
}
