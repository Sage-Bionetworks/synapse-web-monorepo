import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ChallengeTeamTable from './ChallengeTeamTable'
import { Stack } from '@mui/system'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'

const PARTICIPATION_CRITERIA =
  'To participate in a challenge, you need to create a new Team or join an existing one. \
  By default, the participant who creates a team is the "Team Captain" and has the ability to invite and remove members. \
  All team members will need a Synapse account so that they can login and accept the team invitation.'

type SelectChallengeTeamProps = {
  challengeId: string
  onCreateTeam: () => void
  selectedTeamId?: string
  onSelectTeam: (teamId?: string) => void
}

export const SelectChallengeTeam = ({
  challengeId,
  onCreateTeam,
  selectedTeamId,
  onSelectTeam,
}: SelectChallengeTeamProps) => {
  return (
    <Stack spacing={2}>
      <Typography variant="body1" sx={{ lineHeight: '20px' }}>
        {PARTICIPATION_CRITERIA}
      </Typography>
      <Box sx={{ height: 270 }}>
        <ChallengeTeamTable
          challengeId={challengeId}
          selectedTeamId={selectedTeamId}
          onSelectTeam={onSelectTeam}
        />
      </Box>
      <Box>
        <Button
          color="primary"
          variant="contained"
          onClick={onCreateTeam}
          startIcon={<AddCircleTwoToneIcon />}
        >
          Create New Team
        </Button>
      </Box>
    </Stack>
  )
}
