import React, { useState } from 'react'
import { useGetAccessRequirements } from '../../synapse-queries/dataaccess/useAccessRequirements'
import {
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  SelfSignAccessRequirement,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import {
  EASY_DIFFICULTY,
  MEDIUM_DIFFICULTY,
  VARIABLE_DIFFICULTY,
} from '../../utils/SynapseConstants'
import AccessRequirementList from '../AccessRequirementList/AccessRequirementList'
import { ActionRequiredCard } from './ActionRequiredCard/ActionRequiredCard'
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
    { throwOnError: true },
  )
  const [isShowingAccessRequirement, setIsShowingAccessRequirement] =
    useState<boolean>(false)
  let title: string | undefined = undefined
  let iconType = ''
  let description = ''

  if (!isLoading && ar) {
    switch (ar.concreteType) {
      case TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
        title = TERMS_OF_USE_TITLE
        iconType = EASY_DIFFICULTY
        description = ar.name ?? ''
        break
      case SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE: {
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
      case MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      case ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
        title = ACT_TITLE
        iconType = VARIABLE_DIFFICULTY
        description = ar.name ?? ''
        break
      case LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
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
          subjectId={ar.subjectIds[0].id}
          subjectType={ar.subjectIds[0].type}
          accessRequirementFromProps={[ar]}
          renderAsModal={true}
          numberOfFilesAffected={count}
          onHide={() => setIsShowingAccessRequirement(false)}
        />
      )}
    </>
  )
}
