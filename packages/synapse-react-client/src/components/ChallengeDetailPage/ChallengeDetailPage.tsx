import React, { useState } from 'react'
import ChallengeRegisterButton from '../ChallengeRegisterButton'
import ChallengeTeamWizard from '../ChallengeTeamWizard'
import AccessRequirementList from '../AccessRequirementList/AccessRequirementList'
import { useGetEntityChallenge } from '../../synapse-queries'
import { Challenge } from '@sage-bionetworks/synapse-types'
import ConfirmationDialog from '../ConfirmationDialog'
import { ANONYMOUS_PRINCIPAL_ID } from '../../utils/SynapseConstants'
import { SynapseQueries } from '../..'

export type ChallengeDetailPageProps = {
  projectId: string
}

const ChallengeDetailPage = ({ projectId }: ChallengeDetailPageProps) => {
  const [showWizard, setShowWizard] = useState<boolean>(false)
  const [showRequirements, setShowRequirements] = useState<boolean>(false)
  const [challenge, setChallenge] = useState<Challenge>()
  const [showLeaveConfirm, setShowLeaveConfirm] = useState<boolean>(false)
  const [showRegister] = useState<boolean>(true)
  const { data: userProfile } = SynapseQueries.useGetCurrentUserProfile()

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
    if (
      challenge &&
      userProfile &&
      userProfile?.ownerId !== ANONYMOUS_PRINCIPAL_ID.toString()
    ) {
      /**
       * What does it mean to leave a challenge?
       * Simply leaving the participant team may not be enough...
       * the user may also belong to one or more challenge team(s).
       * Should they be removed from those?
       * What if the team belongs to more than one challenge?
       * Should the team be removed from the challenge instead?
       * Only a team admin can request this however.
       */
      /*
      deleteMemberFromTeam(
        challenge.participantTeamId,
        userProfile.ownerId,
        accessToken,
      )
      */
    }
  }

  const handleRequirementsHide = () => {
    console.log('handleRequirementsHide')
    setShowRequirements(false)
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

  const getModal = () => {
    if (showRequirements)
      return (
        <AccessRequirementList
          entityId={projectId}
          teamId={challenge?.participantTeamId}
          onHide={handleRequirementsHide}
          renderAsModal={true}
        />
      )
    if (showWizard)
      return (
        <ChallengeTeamWizard
          projectId={projectId}
          onClose={() => {
            toggleShowWizard(false)
          }}
          isShowingModal={true}
        />
      )
    if (showLeaveConfirm) {
      return (
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
      )
    }
    return null
  }

  return (
    <>
      {showRegister && (
        <ChallengeRegisterButton
          projectId={projectId}
          onJoinClick={onJoinClick}
          onLeaveClick={onLeaveClick}
        />
      )}
      {getModal()}
    </>
  )
}

export default ChallengeDetailPage
