import { Box } from '@mui/material'
import * as React from 'react'
import { AppUtils, SynapseQueries, Map } from 'synapse-react-client'

const ChallengeParticipantGoogleMap = () => {
  const projectId = AppUtils.useQuerySearchParam('id') ?? ''
  const { data: challenge } = SynapseQueries.useGetEntityChallenge(projectId)
  if (challenge && challenge.participantTeamId) {
    return (
      <Box sx={{ height: '500px' }}>
        <Map teamId={challenge.participantTeamId} />
      </Box>
    )
  } else {
    return <></>
  }
}

export default ChallengeParticipantGoogleMap
