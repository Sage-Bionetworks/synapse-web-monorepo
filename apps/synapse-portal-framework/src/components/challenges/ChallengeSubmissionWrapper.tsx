import React from 'react'
import { EntityType } from '@sage-bionetworks/synapse-client'
import * as AppUtils from 'synapse-react-client/utils/AppUtils/index'
import { ChallengeSubmission } from 'synapse-react-client/components/ChallengeSubmission/ChallengeSubmission'

export type ChallengeSubmissionWrapperProps = {
  entityType?: typeof EntityType.dockerrepo | typeof EntityType.file
}

const ChallengeSubmissionWrapper = (
  props: ChallengeSubmissionWrapperProps,
): React.ReactNode => {
  const projectId = AppUtils.useQuerySearchParam('id')
  if (projectId) {
    return (
      <ChallengeSubmission
        projectId={projectId}
        entityType={props.entityType!}
        pageSize={10}
      />
    )
  } else return <></>
}

export default ChallengeSubmissionWrapper
