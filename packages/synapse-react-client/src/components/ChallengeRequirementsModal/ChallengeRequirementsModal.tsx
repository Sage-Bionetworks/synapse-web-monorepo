import React, { useCallback } from 'react'
import {
  useGetAccessRequirementsForTeam,
  useGetAccessRequirementStatuses,
  useGetCurrentUserProfile,
  useGetEntity,
  useGetEntityChallenge,
} from '../../synapse-queries'
import {
  useAddMemberToTeam,
  useGetMembershipStatus,
} from '../../synapse-queries/team/useTeamMembers'
import { SynapseClientError, useSynapseContext } from '../../utils'
import AccessRequirementList from '../AccessRequirementList/AccessRequirementList'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { Alert, Button, Typography } from '@mui/material'
import { isEmpty } from 'lodash-es'

export type ChallengeRequirementsModalProps = {
  open: boolean
  projectId: string
  onCancel: () => void
  onRegisterComplete: () => void
}

/**
 * The challenge requirements modal will
 *  1. Display the access requirements that must be accepted to join a participant team. The component will guide the user through meeting the requirements.
 *  2. If the user has accepted the requirements, the user can click 'Register' to join the team
 *     If the user has not accepted the requirements, the user cannot register for the challenge.
 */
export default function ChallengeRequirementsModal(
  props: ChallengeRequirementsModalProps,
) {
  const { open, projectId, onRegisterComplete, onCancel } = props
  const { data: project, error: getEntityError } = useGetEntity(projectId)

  const { accessToken } = useSynapseContext()

  const { data: challenge, error: getChallengeError } =
    useGetEntityChallenge(projectId)
  const isLoggedIn = !!accessToken
  const { data: userProfile, error: getProfileError } =
    useGetCurrentUserProfile({
      enabled: isLoggedIn,
    })

  const participantTeamId = challenge?.participantTeamId
  const userId = userProfile?.ownerId

  const { data: teamMembershipStatus, error: getMembershipStatusError } =
    useGetMembershipStatus(participantTeamId!, userId!, {
      enabled: Boolean(participantTeamId && userId),
    })

  const {
    mutateAsync: addTeamMember,
    isPending: registrationIsPending,
    error: registrationError,
  } = useAddMemberToTeam()

  const {
    data: fetchedRequirementsForTeam,
    isSuccess: hasFetchedRequirements,
    error: getAccessRequirementsError,
  } = useGetAccessRequirementsForTeam(challenge?.participantTeamId!, {
    enabled: Boolean(challenge?.participantTeamId),
  })

  const requirementStatusesQueryResults = useGetAccessRequirementStatuses(
    fetchedRequirementsForTeam?.map(ar => String(ar.id)) ?? [],
  )

  const meetsAllRequirements =
    hasFetchedRequirements &&
    requirementStatusesQueryResults.every(queryResult => {
      return queryResult.status === 'success' && queryResult.data.isApproved
    })

  const registerForChallenge = useCallback(async () => {
    if (participantTeamId && userId && !teamMembershipStatus?.isMember) {
      await addTeamMember({
        teamId: participantTeamId,
        userId,
      })
    }
    onRegisterComplete()
  }, [
    addTeamMember,
    onRegisterComplete,
    participantTeamId,
    teamMembershipStatus?.isMember,
    userId,
  ])

  const errors = [
    getEntityError,
    getChallengeError,
    getProfileError,
    getMembershipStatusError,
    getAccessRequirementsError,
    registrationError,
  ].filter((e): e is SynapseClientError => Boolean(e))

  // It's possible that the user joined the team, but requirements on the team changed since they became a member
  // They do not need to re-join the team, but they should still be prompted to accept the requirements
  let registerButtonText = teamMembershipStatus?.isMember
    ? 'Continue'
    : 'Register'
  if (registrationIsPending) {
    registerButtonText = 'Registering...'
  }

  if (!isEmpty(errors)) {
    return (
      <Alert severity="error">
        {errors.map((e, index) => (
          <Typography variant={'body1'} key={index}>
            {e.reason}
          </Typography>
        ))}
      </Alert>
    )
  }

  if (!participantTeamId || !open) {
    return <></>
  }

  return (
    <AccessRequirementList
      dialogTitle={`Challenge Terms and Conditions`}
      subjectId={participantTeamId}
      subjectType={RestrictableObjectType.TEAM}
      teamId={challenge?.participantTeamId}
      renderAsModal={true}
      requestObjectName={project?.name}
      onHide={() => {
        onCancel()
      }}
      customDialogActions={
        <>
          <Button variant={'outlined'} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant={'contained'}
            onClick={() => {
              registerForChallenge()
            }}
            startIcon={registrationIsPending ? <SynapseSpinner /> : undefined}
            disabled={!meetsAllRequirements || registrationIsPending}
          >
            {registerButtonText}
          </Button>
        </>
      }
    />
  )
}
