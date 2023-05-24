import React, { useState } from 'react'
import { Box } from '@mui/material'
import TextField from '../TextField'

type CreateChallengeTeamProps = {
  onChangeTeamInfo: (update: CreateTeamRequest) => void
}

export type CreateTeamRequest = {
  name: string
  description: string
  message: string
  invitees: string
}

export const CreateChallengeTeam = ({
  onChangeTeamInfo,
}: CreateChallengeTeamProps) => {
  const [team, setTeam] = useState<CreateTeamRequest>({
    name: '',
    description: '',
    message: '',
    invitees: '',
  })

  const handleTeamUpdate = (update: Record<string, string>) => {
    const updatedTeam: CreateTeamRequest = { ...team, ...update }
    setTeam(updatedTeam)
    onChangeTeamInfo(updatedTeam)
  }

  return (
    <Box>
      <Box>Create a new team for this Challenge!</Box>
      <TextField
        id="name"
        label="Team Name"
        value={team.name}
        fullWidth
        autoFocus
        required
        onChange={event => handleTeamUpdate({ name: event.target.value })}
      />
      <Box display="flex">
        <TextField
          id="description"
          label={
            <Box display="flex" gap={2}>
              <Box>Team Description</Box>
            </Box>
          }
          value={team.description}
          fullWidth
          multiline
          rows={4}
          onChange={event =>
            handleTeamUpdate({ description: event.target.value })
          }
        />
      </Box>
      <Box display="flex">
        <TextField
          id="message"
          label={
            <Box display="flex" gap={2}>
              <Box>Recruitment Message</Box>
            </Box>
          }
          value={team.message}
          fullWidth
          multiline
          rows={4}
          onChange={event => handleTeamUpdate({ message: event.target.value })}
        />
      </Box>
      <TextField
        id="invitees"
        label="Emails of Additional Members to Invite"
        placeholder="Enter emails separated by comma"
        value={team.invitees}
        fullWidth
        onChange={event => handleTeamUpdate({ invitees: event.target.value })}
      />
    </Box>
  )
}
