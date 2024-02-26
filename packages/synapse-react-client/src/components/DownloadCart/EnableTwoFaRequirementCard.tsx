import React, { useState } from 'react'
import { EASY_DIFFICULTY } from '../../utils/SynapseConstants'
import AccessRequirementList from '../AccessRequirementList/AccessRequirementList'
import { ActionRequiredCard } from './ActionRequiredCard/ActionRequiredCard'
import WideButton from '../../components/styled/WideButton'
import { useGetAccessRequirements } from '../../synapse-queries'

export type EnableTwoFaRequirementCardProps = {
  accessRequirementId: number
  count?: number
}
export const REQUIRES_2FA_CARD_TITLE = 'Requires Two-Factor Authentication'

export function EnableTwoFaRequirementCard(
  props: EnableTwoFaRequirementCardProps,
) {
  const { accessRequirementId, count } = props
  const { data: ar, isLoading } = useGetAccessRequirements(
    accessRequirementId,
    {
      throwOnError: true,
    },
  )

  const [isShowingAccessRequirement, setIsShowingAccessRequirement] =
    useState<boolean>(false)

  return (
    <>
      <ActionRequiredCard
        isLoading={isLoading}
        title={REQUIRES_2FA_CARD_TITLE}
        iconType={EASY_DIFFICULTY}
        description={ar?.name ?? ''}
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
