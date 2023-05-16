import { Box } from '@mui/material'
import * as React from 'react'
import Map from 'synapse-react-client/dist/containers/GoogleMap/GoogleMap'
import { useGetEntityChallenge } from 'synapse-react-client/dist/utils/hooks/SynapseAPI/entity/useGetEntityChallenge'

const ChallengeParticipantGoogleMap = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const entityId = urlSearchParams.get('id') ?? ''
  const {data: challenge } = useGetEntityChallenge(entityId)
  if (challenge && challenge.participantTeamId) {
    return <Box sx={{height: '500px'}}><Map teamId={challenge.participantTeamId}/></Box>
  } else {
    return <></>
  }
  
}

export default ChallengeParticipantGoogleMap
