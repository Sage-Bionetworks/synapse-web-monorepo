import React, { useState } from 'react'
import ChallengeRegisterButton from '../ChallengeRegisterButton'
import ChallengeTeamWizard from '../ChallengeTeamWizard'
import {
  useGetEntityChallenge,
  useGetUserSubmissionTeams,
} from '../../synapse-queries'
import ConfirmationDialog from '../ConfirmationDialog'
import { displayToast, SynapseQueries, useSynapseContext } from '../..'
import { useDeleteTeamMembership } from '../../synapse-queries/team/useTeamMembers'
import ChallengeRequirementsModal from '../ChallengeRequirementsModal/ChallengeRequirementsModal'

export type ChallengeDetailPageProps = {
  projectId: string
}

export function ChallengeDetailPage({ projectId }: ChallengeDetailPageProps) {
  const { accessToken } = useSynapseContext()
  const isLoggedIn = !!accessToken
  const [showSubmissionTeamWizard, setShowSubmissionTeamWizard] =
    useState<boolean>(false)
  const [showRegistrationModal, setShowRegistrationModal] =
    useState<boolean>(false)
  const [showLeaveConfirm, setShowLeaveConfirm] = useState<boolean>(false)
  const { data: userProfile } = SynapseQueries.useGetCurrentUserProfile()

  const toggleShowWizard = (b: boolean) => {
    setShowSubmissionTeamWizard(b)
  }
  const onJoinClick = () => {
    setShowRegistrationModal(true)
  }
  const onLeaveClick = () => {
    setShowLeaveConfirm(true)
  }

  const { data: challenge } = useGetEntityChallenge(projectId)

  // Determine whether the given user belongs to any submission teams
  // If so, we should not show them the ChallengeTeamWizard once they have registered.
  const { data: userSubmissionTeams } = useGetUserSubmissionTeams(
    challenge?.id!,
    1,
    0,
    {
      enabled: Boolean(isLoggedIn && challenge),
    },
  )
  const isMemberOfSubmissionTeam =
    userSubmissionTeams && userSubmissionTeams.results.length > 0

  const { mutate: leaveChallenge } = useDeleteTeamMembership({
    onSuccess: () => {
      displayToast('You are no longer registered for this challenge', 'info')
    },
    onError: error => {
      displayToast(error.reason, 'danger')
    },
  })

  const doLeaveChallenge = () => {
    if (isLoggedIn && challenge && userProfile) {
      /**
       * What does it mean to leave a challenge?
       * Simply leaving the participant team may not be enough...
       * the user may also belong to one or more challenge submission team(s).
       * Should they be removed from those?
       * What if the team belongs to more than one challenge?
       * Should the team be removed from the challenge instead?
       * Only a team admin can request this, however.
       */

      leaveChallenge({
        teamId: challenge.participantTeamId,
        userId: userProfile.ownerId,
      })
    }
  }

  const handleRequirementsHide = () => {
    setShowRegistrationModal(false)
  }
  const handleRegistrationComplete = () => {
    setShowRegistrationModal(false)
    // Only guide the user to join/create a submission team if they are not already part of one.
    setShowSubmissionTeamWizard(!isMemberOfSubmissionTeam)
  }

  return (
    <>
      <ChallengeRegisterButton
        projectId={projectId}
        onJoinClick={onJoinClick}
        onLeaveClick={onLeaveClick}
      />
      <ChallengeRequirementsModal
        open={showRegistrationModal}
        projectId={projectId}
        onRegisterComplete={handleRegistrationComplete}
        onCancel={handleRequirementsHide}
      />
      <ChallengeTeamWizard
        projectId={projectId}
        onClose={() => {
          toggleShowWizard(false)
        }}
        isShowingModal={showSubmissionTeamWizard}
      />
      <ConfirmationDialog
        open={showLeaveConfirm}
        title={'Leave this Challenge?'}
        content={'Are you sure you want to leave this Challenge?'}
        onCancel={() => setShowLeaveConfirm(false)}
        onConfirm={() => {
          doLeaveChallenge()
          setShowLeaveConfirm(false)
        }}
      />
    </>
  )
}
