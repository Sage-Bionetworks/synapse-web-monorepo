import { Alert } from '@mui/material'
import * as React from 'react'
import {
  AppUtils,
  ChallengeDataDownload,
  ChallengeDataDownloadProps,
  SynapseQueries,
} from 'synapse-react-client'

const ChallengeSubmissionWrapper = (props: ChallengeDataDownloadProps) => {
  const { parentContainerId } = props
  const projectId = AppUtils.useQuerySearchParam('id')
  const { data: challenge } = SynapseQueries.useGetEntityChallenge(projectId!, {
    enabled: !!projectId,
  })
  const { data: userProfile } = SynapseQueries.useGetCurrentUserProfile()
  const { data: teamMembership } = SynapseQueries.useGetIsUserMemberOfTeam(
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
