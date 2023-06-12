import React, { ChangeEvent, useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { Team } from '@sage-bionetworks/synapse-types'

type JoinRequestFormProps = {
  team: Team | undefined
  joinMessageChange: (msg: string) => void
}

export const JoinRequestForm = ({
  team,
  joinMessageChange,
}: JoinRequestFormProps) => {
  const [message, setMessage] = useState<string>('')
  if (!team) return null

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setMessage(value)
    joinMessageChange(value)
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
