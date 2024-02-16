import React, { useEffect } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { Box } from '@mui/system'
import SpinnerButton from '../SpinnerButton/SpinnerButton'
import { useSynapseContext } from '../../utils'
import {
  useGetCurrentUserProfile,
  useGetEntityChallenge,
  useGetUserSubmissionTeams,
} from '../../synapse-queries'
import { useGetIsUserMemberOfTeam } from '../../synapse-queries/team/useTeamMembers'
import { SynapseClientError } from '../../utils/SynapseClientError'

export interface ChallengeRegisterButtonProps {
  projectId: string
  onChallengeError?: (error: SynapseClientError) => void
  onJoinClick?: () => void
  onLeaveClick?: () => void
}

const EMPTY_ID = ''

const ChallengeRegisterButton = ({
  projectId,
  onChallengeError,
  onJoinClick,
  onLeaveClick,
}: ChallengeRegisterButtonProps) => {
  const { accessToken } = useSynapseContext()
  const { data: userProfile } = useGetCurrentUserProfile()

  const {
    data: challenge,
    isLoading: isLoadingChallenge,
    error: getChallengeError,
  } = useGetEntityChallenge(projectId, {
    enabled: !!accessToken,
  })

  // Verify that user is a member of the participant team
  const {
    data: teamMembership,
    isLoading: isLoadingTeamMembership,
    error: getTeamMembershipError,
  } = useGetIsUserMemberOfTeam(
    challenge?.participantTeamId ?? EMPTY_ID,
    userProfile?.ownerId ?? EMPTY_ID,
    {
      enabled: !!challenge && !!userProfile,
    },
  )

  const isRegistered = Boolean(teamMembership)

  const {
    data: userSubmissionTeams,
    error: getSubmissionTeamsError,
    isLoading: isLoadingSubmissionTeams,
  } = useGetUserSubmissionTeams(challenge?.id ?? '0', 20, 0, {
    enabled: !!challenge && !!accessToken,
  })

  const hasSubmissionTeam =
    userSubmissionTeams && userSubmissionTeams.results.length > 0

  const error =
    getChallengeError || getTeamMembershipError || getSubmissionTeamsError

  useEffect(() => {
    if (error && onChallengeError) onChallengeError(error)
  }, [error, onChallengeError])

  if (
    isLoadingChallenge ||
    isLoadingTeamMembership ||
    isLoadingSubmissionTeams
  ) {
    return <SpinnerButton showSpinner>Loading...</SpinnerButton>
  }

  return (
    <Box>
      {(!isRegistered || !hasSubmissionTeam) && (
        <SpinnerButton
          disableElevation={true}
          variant="contained"
          onClick={() =>
            accessToken && onJoinClick ? onJoinClick() : undefined
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
      {isRegistered && hasSubmissionTeam && (
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
