import {
  useCreateTeam,
  useInviteUserToTeam,
  useRegisterTeamForChallenge,
} from '../../synapse-queries'
import { useCallback, useMemo } from 'react'
import {
  ChallengeTeam,
  CreateTeamRequest,
  MembershipInvitation,
  Team,
} from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../../utils'

/**
 * Hook that in one call will
 *  - Create a team
 *  - Register that team for a challenge
 *  - Send invitations to join the team to a defined list of email addresses
 */
export default function useCreateAndRegisterChallengeTeam() {
  const {
    mutateAsync: createTeam,
    isPending: createTeamIsPending,
    error: createTeamError,
  } = useCreateTeam()
  const {
    mutateAsync: inviteUserToTeam,
    isPending: invitationIsPending,
    error: invitationError,
  } = useInviteUserToTeam()
  const {
    mutateAsync: registerTeamForChallenge,
    isPending: challengeRegistrationIsPending,
    error: challengeRegistrationError,
  } = useRegisterTeamForChallenge()

  // Invite the list of emails to join the team
  const handleInviteTeamMembers = useCallback(
    async (
      teamId: string,
      inviteeEmails: string[],
      invitationMessage: string,
    ) => {
      const results: MembershipInvitation[] = []
      // Send the invitations sequentially
      for (const inviteeEmail of inviteeEmails) {
        const membershipInvitation = await inviteUserToTeam({
          teamId: teamId,
          inviteeEmail: inviteeEmail.trim(),
          message: invitationMessage,
        })
        results.push(membershipInvitation)
      }
      return results
    },
    [inviteUserToTeam],
  )

  const createAndRegisterTeam = useCallback(
    async (
      teamToCreate: CreateTeamRequest,
      challengeId: string,
      invitees: string[],
      invitationMessage: string,
    ): Promise<[Team, ChallengeTeam, MembershipInvitation[]]> => {
      // Create the team
      const newTeam = await createTeam(teamToCreate)

      // Register for the challenge and invite the team members--we can do these simultaneously
      const registerPromise = registerTeamForChallenge({
        teamId: newTeam.id,
        challengeId,
      })
      const sendInvitationsPromise = handleInviteTeamMembers(
        newTeam.id,
        invitees,
        invitationMessage,
      )

      return Promise.all([
        Promise.resolve(newTeam),
        registerPromise,
        sendInvitationsPromise,
      ])
    },
    [createTeam, handleInviteTeamMembers, registerTeamForChallenge],
  )

  const errors = useMemo(() => {
    const hasError =
      createTeamError || invitationError || challengeRegistrationError
    const errors = hasError
      ? [createTeamError, invitationError, challengeRegistrationError].filter(
          (e): e is SynapseClientError => e != null,
        )
      : undefined

    return errors
  }, [challengeRegistrationError, createTeamError, invitationError])

  return {
    createAndRegisterTeam,
    isPending:
      createTeamIsPending ||
      invitationIsPending ||
      challengeRegistrationIsPending,
    errors,
  }
}
