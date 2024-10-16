import { Box } from '@mui/material'
import * as React from 'react'
import { SynapseQueries, Map } from 'synapse-react-client'

type ChallengeParticipantGoogleMapProps = {
  projectId: string
}
function ChallengeParticipantGoogleMap(
  props: ChallengeParticipantGoogleMapProps,
) {
  const { projectId } = props

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
