import { EntityType } from '@sage-bionetworks/synapse-types'
import { ChallengeSubmission } from 'synapse-react-client/components/ChallengeSubmission/index'
import { useQuerySearchParam } from 'synapse-react-client/utils/hooks/useQuerySearchParam'

export type ChallengeSubmissionWrapperProps = {
  entityType?: EntityType.DOCKER_REPO | EntityType.FILE
}

const ChallengeSubmissionWrapper = (props: ChallengeSubmissionWrapperProps) => {
  const projectId = useQuerySearchParam('id')
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
