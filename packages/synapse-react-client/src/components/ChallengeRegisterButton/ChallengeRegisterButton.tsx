import {
  useGetCurrentUserProfile,
  useGetEntityChallenge,
  useGetIsUserMemberOfTeam,
  useGetUserSubmissionTeams,
} from '@/synapse-queries'
import React from 'react'
import { SynapseClientError, useSynapseContext } from '@/utils'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import PendingActionsIcon from '@mui/icons-material/PendingActions'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import SpinnerButton from '../SpinnerButton/SpinnerButton'

export interface ChallengeRegisterButtonProps {
  projectId: string
  onError?: (error: SynapseClientError) => void
  onJoinClick?: () => void
  onLeaveClick?: () => void
}

const ChallengeRegisterButton = ({
  projectId,
  onError,
  onJoinClick,
  onLeaveClick,
}: ChallengeRegisterButtonProps): React.ReactNode => {
  const { isAuthenticated } = useSynapseContext()
  const { data: userProfile } = useGetCurrentUserProfile({
    enabled: isAuthenticated,
  })

  const {
    data: challenge,
    isLoading: isLoadingChallenge,
    error: getChallengeError,
  } = useGetEntityChallenge(projectId, {
    enabled: isAuthenticated,
  })

  // Verify that user is a member of the participant team
  const {
    data: teamMembership,
    isLoading: isLoadingTeamMembership,
    error: getTeamMembershipError,
  } = useGetIsUserMemberOfTeam(
    challenge?.participantTeamId!,
    userProfile?.ownerId!,
    {
      enabled: !!challenge && !!userProfile,
    },
  )

  const isRegistered = Boolean(teamMembership)

  const {
    data: userSubmissionTeams,
    error: getSubmissionTeamsError,
    isLoading: isLoadingSubmissionTeams,
  } = useGetUserSubmissionTeams(challenge?.id!, 20, 0, {
    enabled: !!challenge && isAuthenticated,
  })

  const hasSubmissionTeam =
    userSubmissionTeams && userSubmissionTeams.results.length > 0
  const isMemberOfBothParticipantAndSubmissionTeams =
    isRegistered && hasSubmissionTeam
  const isMemberOfParticipantTeamOnly = isRegistered && !hasSubmissionTeam

  const error =
    getChallengeError || getTeamMembershipError || getSubmissionTeamsError

  useEffect(() => {
    if (error && onError) onError(error)
  }, [error, onError])

  const isLoading =
    isLoadingChallenge || isLoadingTeamMembership || isLoadingSubmissionTeams

  if (isLoading) {
    return <SpinnerButton showSpinner>Loading...</SpinnerButton>
  }

  return (
    <Box>
      {!isMemberOfBothParticipantAndSubmissionTeams &&
        !isMemberOfParticipantTeamOnly && (
          <SpinnerButton
            disableElevation={true}
            variant="contained"
            onClick={() =>
              isAuthenticated && onJoinClick ? onJoinClick() : undefined
            }
            sx={{
              color: 'white',
              backgroundColor: '#109488',
              fontSize: '1.12em',
              textTransform: 'none',
              padding: '4px 18px',
              fontWeight: 400,
              ':hover': { color: 'white', backgroundColor: '#109488' },
              ':active': { color: 'white', backgroundColor: '#109488' },
              ':visited': { color: 'white', backgroundColor: '#109488' },
            }}
          >
            Register for this Challenge
          </SpinnerButton>
        )}
      {isMemberOfParticipantTeamOnly && (
        <SpinnerButton
          disableElevation={true}
          variant="contained"
          endIcon={<PendingActionsIcon />}
          onClick={() =>
            isAuthenticated && onJoinClick ? onJoinClick() : undefined
          }
          sx={{
            color: '#4A2E1B',
            backgroundColor: '#FFD486',
            fontSize: '1.12em',
            textTransform: 'none',
            padding: '4px 18px',
            fontWeight: 400,
            ':hover': { color: '#4A2E1B', backgroundColor: '#FFD486' },
            ':active': { color: '#4A2E1B', backgroundColor: '#FFD486' },
            ':visited': { color: '#4A2E1B', backgroundColor: '#FFD486' },
          }}
        >
          Complete Registration
        </SpinnerButton>
      )}
      {isMemberOfBothParticipantAndSubmissionTeams && (
        <SpinnerButton
          disableElevation={true}
          variant="outlined"
          endIcon={<ExitToAppIcon />}
          onClick={() => (onLeaveClick ? onLeaveClick() : undefined)}
          sx={{
            borderColor: 'white',
            color: 'white',
            fontSize: '1.12em',
            textTransform: 'none',
            padding: '4px 18px',
            fontWeight: 400,
            ':hover': {
              color: '#172430',
              borderColor: '#172430',
            },
          }}
        >
          Leave Challenge
        </SpinnerButton>
      )}
    </Box>
  )
}

export default ChallengeRegisterButton
