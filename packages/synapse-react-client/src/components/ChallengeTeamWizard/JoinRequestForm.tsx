import React, { ChangeEvent, useState } from 'react'
import { Alert, Box, TextField, Typography } from '@mui/material'
import { useGetTeam } from '../../synapse-queries'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

type JoinRequestFormProps = {
  teamId: string | undefined
  joinMessageChange: (msg: string) => void
}

export const JoinRequestForm = ({
  teamId,
  joinMessageChange,
}: JoinRequestFormProps) => {
  const [message, setMessage] = useState<string>('')
  const {
    data: team,
    status,
    error,
  } = useGetTeam(teamId!, { enabled: !!teamId })
  if (!teamId) return null

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setMessage(value)
    joinMessageChange(value)
  }

  if (status === 'pending') {
    return (
      <Box display="flex" flexDirection="column" gap={1}>
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
        The following message will be sent to the Team Manager(s) of the{' '}
        <strong>{team.name}</strong> team.
      </Typography>
      <Box>
        <strong>Your Message to Team Managers(s)</strong>
      </Box>
      <Box>
        <TextField
          id="membershipRequestMessage"
          value={message}
          fullWidth
          multiline
          rows={4}
          autoFocus
          onChange={handleMessageChange}
        />
      </Box>
    </>
  )
}
