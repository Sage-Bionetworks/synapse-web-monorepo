import React, { useEffect, useState } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { Box } from '@mui/system'
import SpinnerButton from '../widgets/SpinnerButton'
import { useSynapseContext } from '../../utils'
import {
  useGetCurrentUserProfile,
  useGetEntityChallenge,
  useGetUserSubmissionTeamsInfinite,
} from '../../synapse-queries'
import { Challenge, PaginatedIds } from '@sage-bionetworks/synapse-types'
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
  const [challenge, setChallenge] = useState<Challenge>()
  const { data: userProfile } = useGetCurrentUserProfile()
  const [isRegistered, setIsRegistered] = useState<boolean>(false)
  const [hasSubmissionTeam, setHasSubmissionTeam] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [requestError, setRequestError] = useState<SynapseClientError>()

  useEffect(() => {
    if (requestError && onChallengeError) onChallengeError(requestError)
  }, [requestError, onChallengeError])

  useGetEntityChallenge(projectId, {
    enabled: !!accessToken && !challenge,
    onSettled: (data, error) => {
      if (data) {
        setChallenge(data)
      }
      if (error) {
        setLoading(false)
        setRequestError(error)
      }
    },
  })

  // Verify that user is a member of the participant team
  useGetIsUserMemberOfTeam(
    challenge?.participantTeamId ?? EMPTY_ID,
    userProfile?.ownerId ?? EMPTY_ID,
    {
      enabled: !!challenge && !!userProfile,
      onSettled: (data, error) => {
        if (data === null) {
          // User is not a member of the participant team
          setIsRegistered(false)
          setLoading(false)
        }
        if (data !== null) {
          // User is a member of the participant team, continue
          setIsRegistered(true)
        }
        if (error) {
          // Could not determine if user is a member of the participant team
          setLoading(false)
          setRequestError(error)
        }
      },
    },
  )

  useGetUserSubmissionTeamsInfinite(challenge?.id ?? '0', 20, {
    enabled: !!challenge && !!accessToken,
    onSettled: (data: PaginatedIds | undefined, error) => {
      if (data) {
        setHasSubmissionTeam(data.results.length > 0)
      }
      if (error) {
        setRequestError(error)
      }
      setLoading(false)
    },
  })

  if (loading) {
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
