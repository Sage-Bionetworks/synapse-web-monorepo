import React from 'react'
import { useGetTeam } from '@/synapse-queries'
import { Alert, Box, Typography } from '@mui/material'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

type RegistrationSuccessfulProps = {
  createdNewTeam: boolean
  teamId: string | undefined
}

export const RegistrationSuccessful = ({
  createdNewTeam,
  teamId,
}: RegistrationSuccessfulProps): React.ReactNode => {
  const {
    data: team,
    status,
    error,
  } = useGetTeam(teamId!, { enabled: !!teamId })

  if (!teamId) return null

  if (status === 'pending') {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <SynapseSpinner />
      </Box>
    )
  }

  if (status === 'error') {
    return <Alert severity={'error'}>{error.message}</Alert>
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
