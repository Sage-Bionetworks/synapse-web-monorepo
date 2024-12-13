import { Box } from '@mui/material'
import { useGetEntityChallenge } from 'synapse-react-client/synapse-queries/entity/useGetEntityChallenge'
import Map from 'synapse-react-client/components/GoogleMap/GoogleMap'

type ChallengeParticipantGoogleMapProps = {
  projectId: string
}
function ChallengeParticipantGoogleMap(
  props: ChallengeParticipantGoogleMapProps,
) {
  const { projectId } = props

  const { data: challenge } = useGetEntityChallenge(projectId)
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
