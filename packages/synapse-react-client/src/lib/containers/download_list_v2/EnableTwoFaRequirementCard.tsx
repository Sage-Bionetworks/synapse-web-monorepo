import React, { useState } from 'react'
import { useGetAccessRequirements } from '../../utils/hooks/SynapseAPI'
import { EASY_DIFFICULTY } from '../../utils/SynapseConstants'
import AccessRequirementList from '../AccessRequirementList/AccessRequirementList'
import { ActionRequiredCard } from './ActionRequiredCard'
import WideButton from '../../components/styled/WideButton'

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
      useErrorBoundary: true,
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
