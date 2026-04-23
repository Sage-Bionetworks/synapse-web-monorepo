import SynapseClient, { deleteMemberFromTeam } from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import { Count } from '@sage-bionetworks/synapse-client'
import {
  CreateMembershipInvitationRequest,
  CreateMembershipRequestRequest,
  MembershipInvitation,
  MembershipRequest,
  PaginatedResults,
  TeamMember,
  TeamMembershipStatus,
} from '@sage-bionetworks/synapse-types'
import {
  queryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import { SynapseQueriesContext } from '../types'
import { getUserGroupHeaderQuery } from '../user'

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

export function useGetTeamMemberCount(
  teamId: string,
  options?: Partial<UseQueryOptions<Count, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getTeamMemberCountQueryKey(String(teamId)),
    queryFn: () =>
      synapseClient.teamServicesClient.getRepoV1TeamMembersCountId({
        id: teamId,
      }),
  })
}

export function getIsUserMemberOfTeamQuery(
  teamId: string,
  userId: string,
  context: SynapseQueriesContext,
) {
  const { accessToken, keyFactory } = context
  return queryOptions<TeamMember | null, SynapseClientError>({
    queryKey: keyFactory.getIsUserMemberOfTeamQueryKey(teamId, userId),
    queryFn: () =>
      SynapseClient.getIsUserMemberOfTeam(teamId, userId, accessToken),
  })
}

export function useGetIsUserMemberOfTeam(
  teamId: string,
  userId: string,
  options?: Partial<UseQueryOptions<TeamMember | null, SynapseClientError>>,
) {
  const synapseContext = useSynapseContext()
  const queryClient = useQueryClient()

  return useQuery({
    ...options,
    ...getIsUserMemberOfTeamQuery(teamId, userId, {
      ...synapseContext,
      queryClient,
    }),
  })
}

/**
 * Checks if the passed principalId is either the userId or a team that the userId is a member of.
 *
 * @param userId the userId of the current user
 * @param principalId the principalId of the share (either a userId or a teamId)
 * @param context context required to issue the request(s)
 * @returns true if the principalId is either the userId or a team that the userId is a member of. Returns false otherwise.
 */
export function getIsPrincipalIdUserOrMemberOfTeamQuery(
  userId: string,
  principalId: string,
  context: SynapseQueriesContext,
) {
  const { keyFactory, queryClient } = context
  return queryOptions<boolean, SynapseClientError>({
    queryKey: keyFactory.getIsPrincipalIdSelfOrTeamMemberQueryKey(
      principalId,
      userId,
    ),
    queryFn: async () => {
      // Is the principalId the userId?
      if (principalId.trim() === userId.trim()) {
        return true
      }
      // Is the principalId a team ID?
      const principalUserGroupResult = await queryClient.fetchQuery(
        getUserGroupHeaderQuery(principalId, context),
      )
      if (
        !principalUserGroupResult ||
        principalUserGroupResult?.isIndividual === true
      ) {
        return false
      }

      // Is the user a member of the team?
      const teamMembership = await queryClient.fetchQuery(
        getIsUserMemberOfTeamQuery(principalId, userId, context),
      )
      return teamMembership !== null
    },
  })
}

/**
 * Checks if the passed principalId is either the userId or a team that the userId is a member of.
 *
 * @param userId the userId of the current user
 * @param principalId the principalId of the share (either a userId or a teamId)
 * @param options react-query options
 * @returns true if the principalId is either the userId or a team that the userId is a member of. Returns false otherwise.
 */
export function useGetIsPrincipalIdUserOrMemberOfTeam(
  userId: string,
  principalId: string,
  options?: Partial<UseQueryOptions<boolean, SynapseClientError>>,
) {
  const synapseContext = useSynapseContext()
  const queryClient = useQueryClient()

  return useQuery({
    ...options,
    ...getIsPrincipalIdUserOrMemberOfTeamQuery(userId, principalId, {
      ...synapseContext,
      queryClient,
    }),
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

export function useGetAllOpenMembershipInvitations(
  userId: string,
  options?: Partial<
    UseQueryOptions<MembershipInvitation[], SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getAllOpenMembershipInvitationsForUserQueryKey(userId),
    queryFn: () =>
      SynapseClient.getAllOpenMembershipInvitationsForUser(
        userId,
        accessToken!,
      ),
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
      SynapseClient.createMembershipInvitation(invitation, accessToken),
  })
}

export function useAddMemberToTeam(
  options?: Partial<
    UseMutationOptions<
      void,
      SynapseClientError,
      { teamId: string; userId: string }
    >
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    void,
    SynapseClientError,
    { teamId: string; userId: string }
  >({
    ...options,
    mutationFn: ({ teamId, userId }) =>
      SynapseClient.addTeamMemberAsAuthenticatedUserOrAdmin(
        teamId,
        userId,
        accessToken!,
      ),
    onSuccess: async (data, variables, ctx) => {
      if (options?.onSuccess) {
        options.onSuccess(data, variables, ctx)
      }
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: keyFactory.getAllOpenMembershipInvitationsQueryKey(),
        }),
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
        queryClient.invalidateQueries({
          queryKey: keyFactory.getAllSubmissionTeamsQueryKeys(),
        }),
      ])
    },
  })
}

export function useRequestToJoinTeam(
  options: Partial<
    UseMutationOptions<
      MembershipRequest,
      SynapseClientError,
      CreateMembershipRequestRequest
    >
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    MembershipRequest,
    SynapseClientError,
    CreateMembershipRequestRequest
  >({
    ...options,
    mutationFn: request =>
      SynapseClient.createMembershipRequest(request, accessToken),
    onSuccess: async (data, variables, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getMembershipStatusQueryKey(
          variables.teamId,
          variables.userId,
        ),
      })
      if (options.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
      return
    },
  })
}

/**
 * Delete an invitation.
 * Note: The client must be an administrator of the Team referenced by the invitation or the invitee to make this request.
 *
 * @see https://rest-docs.synapse.org/rest/DELETE/membershipInvitation/id.html
 */
export function useDeleteMembershipInvitation(
  options?: Partial<
    UseMutationOptions<void, SynapseClientError, { invitationId: string }>
  >,
) {
  const queryClient = useQueryClient()
  const { keyFactory, synapseClient } = useSynapseContext()

  return useMutation<
    void,
    SynapseClientError,
    {
      invitationId: string
    }
  >({
    ...options,
    mutationFn: ({ invitationId }) =>
      synapseClient.membershipInvitationServicesClient.deleteRepoV1MembershipInvitationId(
        { id: invitationId },
      ),
    onSuccess: async (data, variables, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getAllOpenMembershipInvitationsQueryKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(data, variables, ctx)
      }
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
