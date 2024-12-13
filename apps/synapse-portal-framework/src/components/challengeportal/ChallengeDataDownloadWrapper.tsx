import { Alert } from '@mui/material'
import {
  ChallengeDataDownload,
  ChallengeDataDownloadProps,
} from 'synapse-react-client/components/ChallengeDataDownload/index'
import { useGetEntityChallenge } from 'synapse-react-client/synapse-queries/entity/useGetEntityChallenge'
import { useGetIsUserMemberOfTeam } from 'synapse-react-client/synapse-queries/team/useTeamMembers'
import { useGetCurrentUserProfile } from 'synapse-react-client/synapse-queries/user/useUserBundle'
import { useQuerySearchParam } from 'synapse-react-client/utils/hooks/useQuerySearchParam'

function ChallengeSubmissionWrapper(props: ChallengeDataDownloadProps) {
  const { parentContainerId } = props
  const projectId = useQuerySearchParam('id')
  const { data: challenge } = useGetEntityChallenge(projectId!, {
    enabled: !!projectId,
  })
  const { data: userProfile } = useGetCurrentUserProfile()
  const { data: teamMembership } = useGetIsUserMemberOfTeam(
    challenge?.participantTeamId!,
    userProfile?.ownerId!,
    {
      enabled: !!challenge && !!userProfile,
    },
  )
  const isMember = Boolean(teamMembership)
  if (isMember) {
    if (parentContainerId) {
      return <ChallengeDataDownload parentContainerId={parentContainerId} />
    } else {
      return <Alert severity="error">Data has not yet been defined.</Alert>
    }
  } else
    return (
      <Alert severity="info">
        Please register for the Challenge to download data.
      </Alert>
    )
}

export default ChallengeSubmissionWrapper
