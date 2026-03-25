import React from 'react'
import { Alert } from '@mui/material'
import * as AppUtils from 'synapse-react-client/utils/AppUtils/index'
import { ChallengeDataDownload } from 'synapse-react-client/components/ChallengeDataDownload/ChallengeDataDownload'
import type { ChallengeDataDownloadProps } from 'synapse-react-client/components/ChallengeDataDownload/ChallengeDataDownload'
import * as SynapseQueries from 'synapse-react-client/synapse-queries/index'

const ChallengeSubmissionWrapper = (
  props: ChallengeDataDownloadProps,
): React.ReactNode => {
  const { parentContainerId } = props
  const projectId = AppUtils.useQuerySearchParam('id')
  const { data: challenge } = SynapseQueries.useGetEntityChallenge(projectId, {
    enabled: !!projectId,
  })
  const { data: userProfile } = SynapseQueries.useGetCurrentUserProfile()
  const { data: teamMembership } = SynapseQueries.useGetIsUserMemberOfTeam(
    challenge?.participantTeamId,
    userProfile?.ownerId,
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
