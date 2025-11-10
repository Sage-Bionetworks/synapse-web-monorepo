import { EntityType } from '@sage-bionetworks/synapse-client'
import { AppUtils, ChallengeSubmission } from 'synapse-react-client'

export type ChallengeSubmissionWrapperProps = {
  entityType?: typeof EntityType.dockerrepo | typeof EntityType.file
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
