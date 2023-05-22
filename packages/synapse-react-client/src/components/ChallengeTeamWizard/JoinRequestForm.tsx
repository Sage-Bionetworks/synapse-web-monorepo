import React, { ChangeEvent, useState } from 'react'
import { Box, TextField } from '@mui/material'
import { Team } from '../../utils/synapseTypes/Team'

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

  const handleMesageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setMessage(value)
    joinMessageChange(value)
  }

  return (
    <>
      <Box>
        The following message will be sent to the Team Manager(s) of the{' '}
        <strong>{team.name}</strong> team.
      </Box>
      <Box>
        <strong>Your Mesage to Team Managers(s)</strong>
      </Box>
      <Box>
        <TextField
          id="membershipRequestMessage"
          value={message}
          fullWidth
          multiline
          rows={4}
          autoFocus
          onChange={handleMesageChange}
        />
      </Box>
    </>
  )
}
