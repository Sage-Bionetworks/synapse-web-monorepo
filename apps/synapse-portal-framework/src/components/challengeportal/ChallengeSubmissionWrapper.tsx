import { EntityType } from '@sage-bionetworks/synapse-types'
import { AppUtils, ChallengeSubmission } from 'synapse-react-client'

export type ChallengeSubmissionWrapperProps = {
  entityType?: EntityType.DOCKER_REPO | EntityType.FILE
}

const ChallengeSubmissionWrapper = (props: ChallengeSubmissionWrapperProps) => {
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
