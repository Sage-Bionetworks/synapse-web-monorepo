import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import ChallengeTeamTable from './ChallengeTeamTable'
import { Stack } from '@mui/system'
import { Team } from '@sage-bionetworks/synapse-types'

type SelectChallengeTeamProps = {
  challengeId: string
  onCreateTeam: () => void
  onSelectTeam: (team: Team) => void
}

export const SelectChallengeTeam = ({
  challengeId,
  onCreateTeam,
  onSelectTeam,
}: SelectChallengeTeamProps) => {
  const PARTICIPATION_CRITERIA =
    'To participate in a challenge, you need to create a new Team or join an existing one. \
    By default, the participant who creates a team is the "Team Captain" and has the ability to invite and remove members. \
    All team members will need a Synapse account so that they can login and accept the team invitation.'
  return (
    <Stack spacing={1}>
      <Typography variant="body1" sx={{ lineHeight: '20px' }}>
        {PARTICIPATION_CRITERIA}
      </Typography>
      <Box sx={{ height: 270 }}>
        <ChallengeTeamTable
          challengeId={challengeId}
          onSelectTeam={onSelectTeam}
        />
      </Box>
      <Box>
        <Button
          color="primary"
          variant="contained"
          onClick={onCreateTeam}
          startIcon={<ControlPointIcon />}
          // sx={{ marginTop: '50px', padding: '6px 18px' }}
        >
          Create New Team
        </Button>
      </Box>
    </Stack>
  )
}
