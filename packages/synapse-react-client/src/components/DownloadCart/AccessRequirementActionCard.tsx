import WideButton from '@/components/styled/WideButton'
import { useGetAccessRequirements } from '@/synapse-queries'
import { EASY_DIFFICULTY } from '@/utils/SynapseConstants'
import { useState } from 'react'
import AccessRequirementList from '../AccessRequirementList/AccessRequirementList'
import { ActionRequiredCard } from './ActionRequiredCard/ActionRequiredCard'
import { getFirstSubject } from './AccessRequirementSubjectUtils'

export type AccessRequirementActionCardProps = {
  accessRequirementId: number
  title: string
  count?: number
  /* When true, the action is shown as complete and cannot be started */
  isComplete?: boolean
}

/**
 * A download-cart action card for an action tied to an access requirement. Starting the action opens the access
 * requirement in a modal.
 */
export function AccessRequirementActionCard(
  props: AccessRequirementActionCardProps,
) {
  const { accessRequirementId, title, count, isComplete = false } = props
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
        title={title}
        iconType={EASY_DIFFICULTY}
        description={ar?.name ?? ''}
        count={count}
        actionNode={
          <WideButton
            variant="contained"
            onClick={() => setIsShowingAccessRequirement(true)}
            disabled={isComplete}
          >
            {isComplete ? 'Complete' : 'Start'}
          </WideButton>
        }
      />
      {isShowingAccessRequirement && ar && (
        <AccessRequirementList
          {...getFirstSubject(ar)}
          accessRequirementFromProps={[ar]}
          renderAsModal={true}
          numberOfFilesAffected={count}
          onHide={() => setIsShowingAccessRequirement(false)}
        />
      )}
    </>
  )
}
