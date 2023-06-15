import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query'
import SynapseClient, { deleteMemberFromTeam } from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  PaginatedResults,
  TeamMembershipStatus,
} from '@sage-bionetworks/synapse-types'
import { TeamMember } from '@sage-bionetworks/synapse-types'

export function useGetTeamMembers(
  teamId: string | number,
  options?: UseQueryOptions<PaginatedResults<TeamMember>, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<PaginatedResults<TeamMember>, SynapseClientError>(
    keyFactory.getTeamMembersQueryKey(String(teamId)),
    () => SynapseClient.getTeamMembers(accessToken, teamId, '', 50, 0),
    options,
  )
}

export function useGetIsUserMemberOfTeam(
  teamId: string,
  userId: string,
  options?: UseQueryOptions<TeamMember | null, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<TeamMember | null, SynapseClientError>(
    keyFactory.getIsUserMemberOfTeamQueryKey(teamId, userId),
    () => SynapseClient.getIsUserMemberOfTeam(teamId, userId, accessToken),
    options,
  )
}

export function useGetMembershipStatus(
  teamId: string | number,
  userId: string | number,
  options?: UseQueryOptions<TeamMembershipStatus, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<TeamMembershipStatus, SynapseClientError>(
    keyFactory.getMembershipStatusQueryKey(
      teamId.toString(),
      userId.toString(),
    ),
    () => SynapseClient.getMembershipStatus(teamId, userId, accessToken),
    options,
  )
}

export type TeamMembershipParam = {
  teamId: string
  userId: string
}

export function useDeleteTeamMembership(
  options?: UseMutationOptions<void, SynapseClientError, TeamMembershipParam>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, TeamMembershipParam>(
    variables =>
      deleteMemberFromTeam(variables.teamId, variables.userId, accessToken),
    {
      ...options,
      onSuccess: async (data, variables, ctx) => {
        await queryClient.invalidateQueries(
          keyFactory.getIsUserMemberOfTeamQueryKey(
            variables.teamId,
            variables.userId,
          ),
        )
        if (options?.onSuccess) {
          await options.onSuccess(data, variables, ctx)
        }
      },
    },
  )
}
