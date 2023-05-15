import React, { useState } from 'react'
import { useGetAccessRequirements } from '../../utils/hooks/SynapseAPI/dataaccess/useAccessRequirements'
import { SelfSignAccessRequirement } from '../../utils/synapseTypes'
import {
  EASY_DIFFICULTY,
  MEDIUM_DIFFICULTY,
  VARIABLE_DIFFICULTY,
} from '../../utils/SynapseConstants'
import AccessRequirementList from '../AccessRequirementList/AccessRequirementList'
import { ActionRequiredCard } from './ActionRequiredCard'
import WideButton from '../../components/styled/WideButton'

export type MeetAccessRequirementCardProps = {
  accessRequirementId: number
  count?: number
}
export const TERMS_OF_USE_TITLE =
  'Requires Acceptance of Data-Specific Terms of Use'
export const SELF_SIGN_TITLE =
  'Requires Acceptance of Data-Specific Terms of Use'
export const ACT_TITLE =
  'Requires Approval of Data-Specific Access Requirements'
export const LOCK_TITLE = 'Access Restricted'

export const MeetAccessRequirementCard: React.FunctionComponent<
  MeetAccessRequirementCardProps
> = ({ accessRequirementId, count }: MeetAccessRequirementCardProps) => {
  const { data: ar, isLoading } = useGetAccessRequirements(
    accessRequirementId,
    { useErrorBoundary: true },
  )
  const [isShowingAccessRequirement, setIsShowingAccessRequirement] =
    useState<boolean>(false)
  let title: string | undefined = undefined
  let iconType = ''
  let description = ''

  if (!isLoading && ar) {
    switch (ar.concreteType) {
      case 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement':
        title = TERMS_OF_USE_TITLE
        iconType = EASY_DIFFICULTY
        description = ar.name ?? ''
        break
      case 'org.sagebionetworks.repo.model.SelfSignAccessRequirement': {
        title = SELF_SIGN_TITLE
        const selfSignAR: SelfSignAccessRequirement = ar
        if (selfSignAR.isValidatedProfileRequired) {
          iconType = VARIABLE_DIFFICULTY
        } else if (selfSignAR.isCertifiedUserRequired) {
          iconType = MEDIUM_DIFFICULTY
        } else {
          iconType = EASY_DIFFICULTY
        }
        description = ar.name ?? ''
        break
      }
      case 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement':
      case 'org.sagebionetworks.repo.model.ACTAccessRequirement':
        title = ACT_TITLE
        iconType = VARIABLE_DIFFICULTY
        description = ar.name ?? ''
        break
      case 'org.sagebionetworks.repo.model.LockAccessRequirement':
        title = LOCK_TITLE
        iconType = VARIABLE_DIFFICULTY
        description =
          'Access restricted pending review by Synapse Access and Compliance Team.'
        break
    }
  }

  return (
    <>
      <ActionRequiredCard
        isLoading={isLoading}
        title={title}
        description={description}
        iconType={iconType}
        count={count}
        actionNode={
          <WideButton
            variant="contained"
            onClick={() => setIsShowingAccessRequirement(true)}
          >
            Start
          </WideButton>
        }
      />
      {isShowingAccessRequirement && ar && (
        <AccessRequirementList
          entityId={ar.subjectIds[0].id}
          accessRequirementFromProps={[ar]}
          renderAsModal={true}
          numberOfFilesAffected={count}
          onHide={() => setIsShowingAccessRequirement(false)}
        />
      )}
    </>
  )
}
