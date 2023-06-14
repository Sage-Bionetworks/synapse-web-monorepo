import React, { useState } from 'react'
import ChallengeRegisterButton from '../ChallengeRegisterButton'
import ChallengeTeamWizard from '../ChallengeTeamWizard'
import AccessRequirementList from '../AccessRequirementList/AccessRequirementList'
import { useGetEntity, useGetEntityChallenge } from '../../synapse-queries'
import { Challenge } from '@sage-bionetworks/synapse-types'
import ConfirmationDialog from '../ConfirmationDialog'
import { SynapseQueries, useSynapseContext } from '../..'
import { deleteMemberFromTeam } from '../../synapse-client'

export type ChallengeDetailPageProps = {
  projectId: string
}

export function ChallengeDetailPage({ projectId }: ChallengeDetailPageProps) {
  const { accessToken } = useSynapseContext()
  const [showWizard, setShowWizard] = useState<boolean>(false)
  const [showRequirements, setShowRequirements] = useState<boolean>(false)
  const [challenge, setChallenge] = useState<Challenge>()
  const [showLeaveConfirm, setShowLeaveConfirm] = useState<boolean>(false)
  const { data: userProfile } = SynapseQueries.useGetCurrentUserProfile()
  const { data: project } = useGetEntity(projectId)

  const toggleShowWizard = (b: boolean) => {
    setShowWizard(b)
  }
  const onJoinClick = () => {
    setShowRequirements(true)
  }
  const onLeaveClick = () => {
    setShowLeaveConfirm(true)
  }

  const doLeaveChallenge = () => {
    if (accessToken && challenge && userProfile) {
      /**
       * What does it mean to leave a challenge?
       * Simply leaving the participant team may not be enough...
       * the user may also belong to one or more challenge team(s).
       * Should they be removed from those?
       * What if the team belongs to more than one challenge?
       * Should the team be removed from the challenge instead?
       * Only a team admin can request this however.
       */

      deleteMemberFromTeam(
        challenge.participantTeamId,
        userProfile.ownerId,
        accessToken,
      )
    }
  }

  const handleRequirementsHide = () => {
    setShowRequirements(false)
    if (accessToken) {
      setShowWizard(true)
    }
  }

  useGetEntityChallenge(projectId, {
    enabled: !challenge,
    onSettled: (data, error) => {
      // console.log('settled', { data }, { error })
      if (data) {
        setChallenge(data)
      }
      if (error) {
        console.warn(error)
      }
    },
  })

  return (
    <>
      <ChallengeRegisterButton
        projectId={projectId}
        onJoinClick={onJoinClick}
        onLeaveClick={onLeaveClick}
      />
      {showRequirements && (
        <AccessRequirementList
          entityId={projectId}
          teamId={challenge?.participantTeamId}
          onHide={handleRequirementsHide}
          renderAsModal={true}
          requestObjectName={project?.name}
          dialogTitle="Challenge Terms and Conditions"
        />
      )}
      {showWizard && (
        <ChallengeTeamWizard
          projectId={projectId}
          onClose={() => {
            toggleShowWizard(false)
          }}
          isShowingModal={true}
        />
      )}
      {showLeaveConfirm && (
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
      )}
    </>
  )
}
