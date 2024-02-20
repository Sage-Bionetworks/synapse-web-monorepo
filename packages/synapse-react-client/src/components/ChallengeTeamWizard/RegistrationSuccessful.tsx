import { Alert, Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useGetTeam } from '../../synapse-queries/team/useTeam'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

type RegistrationSuccessfulProps = {
  createdNewTeam: boolean
  teamId: string | undefined
}

export const RegistrationSuccessful = ({
  createdNewTeam,
  teamId,
}: RegistrationSuccessfulProps) => {
  const {
    data: team,
    status,
    error,
  } = useGetTeam(teamId!, { enabled: Boolean(teamId) })

  if (status === 'pending') {
    return <SynapseSpinner size={40} />
  }

  if (status === 'error') {
    return <Alert severity="error">{error.reason}</Alert>
  }

  return (
    <>
      <Typography variant="body1" sx={{ lineHeight: '20px' }}>
        You have successfully {createdNewTeam ? 'created' : 'joined'} team{' '}
        <b>{team.name}</b> and have been added to this challenge.
      </Typography>
      {createdNewTeam && (
        <Box>
          Invited team members will be automatically registered for the
          challenge as soon as they accept the team member invitation.
        </Box>
      )}
    </>
  )
}
