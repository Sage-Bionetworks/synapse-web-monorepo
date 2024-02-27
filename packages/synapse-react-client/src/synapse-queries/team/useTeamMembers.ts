import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient, { deleteMemberFromTeam } from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  CreateMembershipInvitationRequest,
  MembershipInvitation,
  PaginatedResults,
  TeamMember,
  TeamMembershipStatus,
} from '@sage-bionetworks/synapse-types'

export function useGetTeamMembers(
  teamId: string | number,
  options?: Partial<
    UseQueryOptions<PaginatedResults<TeamMember>, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getTeamMembersQueryKey(String(teamId)),
    queryFn: () => SynapseClient.getTeamMembers(accessToken, teamId, '', 50, 0),
  })
}

export function useGetIsUserMemberOfTeam(
  teamId: string,
  userId: string,
  options?: Partial<UseQueryOptions<TeamMember | null, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getIsUserMemberOfTeamQueryKey(teamId, userId),
    queryFn: () =>
      SynapseClient.getIsUserMemberOfTeam(teamId, userId, accessToken),
  })
}

export function useGetMembershipStatus(
  teamId: string,
  userId: string,
  options?: Partial<UseQueryOptions<TeamMembershipStatus, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getMembershipStatusQueryKey(teamId, userId),
    queryFn: () =>
      SynapseClient.getMembershipStatus(teamId, userId, accessToken),
  })
}

export function useInviteUserToTeam(
  options?: Partial<
    UseMutationOptions<
      MembershipInvitation,
      SynapseClientError,
      CreateMembershipInvitationRequest
    >
  >,
) {
  const { accessToken } = useSynapseContext()

  return useMutation<
    MembershipInvitation,
    SynapseClientError,
    CreateMembershipInvitationRequest
  >({
    ...options,
    mutationFn: invitation =>
      SynapseClient.createMembershipInvitation(invitation, accessToken!),
  })
}

export function useAddMemberToTeam() {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    void,
    SynapseClientError,
    { teamId: string; userId: string }
  >({
    mutationFn: ({ teamId, userId }) =>
      SynapseClient.addTeamMemberAsAuthenticatedUserOrAdmin(
        teamId,
        userId,
        accessToken!,
      ),
    onSuccess: async (data, variables, ctx) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getMembershipStatusQueryKey(
            variables.teamId,
            variables.userId,
          ),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getIsUserMemberOfTeamQueryKey(
            variables.teamId,
            variables.userId,
          ),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getTeamMembersQueryKey(variables.teamId),
        }),
      ])
    },
  })
}

export type TeamMembershipParam = {
  teamId: string
  userId: string
}

export function useDeleteTeamMembership(
  options?: Partial<
    UseMutationOptions<void, SynapseClientError, TeamMembershipParam>
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, TeamMembershipParam>({
    ...options,
    mutationFn: variables =>
      deleteMemberFromTeam(variables.teamId, variables.userId, accessToken),
    onSuccess: async (data, variables, ctx) => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getIsUserMemberOfTeamQueryKey(
            variables.teamId,
            variables.userId,
          ),
        }),
        queryClient.invalidateQueries({
          queryKey: keyFactory.getMembershipStatusQueryKey(
            variables.teamId,
            variables.userId,
          ),
        }),
      ])
      if (options?.onSuccess) {
        await options.onSuccess(data, variables, ctx)
      }
    },
  })
}
