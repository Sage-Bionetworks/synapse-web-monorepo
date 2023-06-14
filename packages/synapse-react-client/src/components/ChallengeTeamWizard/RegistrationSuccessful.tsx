import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

type RegistrationSuccessfulProps = {
  createdNewTeam: boolean
  teamName: string | undefined
}

export const RegistrationSuccessful = ({
  createdNewTeam,
  teamName,
}: RegistrationSuccessfulProps) => {
  if (!teamName) return null

  return (
    <>
      <Typography variant="body1" sx={{ lineHeight: '20px' }}>
        You have successfully {createdNewTeam ? 'created' : 'joined'} team{' '}
        <b>{teamName}</b> and have been added to this challenge.
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
