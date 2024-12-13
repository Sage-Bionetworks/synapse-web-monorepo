import { useState } from 'react'
import { EASY_DIFFICULTY } from '../../utils/SynapseConstants'
import AccessRequirementList from '../AccessRequirementList/AccessRequirementList'
import { ActionRequiredCard } from './ActionRequiredCard/ActionRequiredCard'
import WideButton from '../../components/styled/WideButton'
import { useGetAccessRequirements } from '../../synapse-queries'
import { useGetTwoFactorEnrollmentStatus } from '../../synapse-queries/auth/useTwoFactorEnrollment'

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
  const { data: twoFactorAuthStatus } = useGetTwoFactorEnrollmentStatus()
  const isEnrolledIn2Fa = twoFactorAuthStatus?.status === 'ENABLED'

  const [isShowingAccessRequirement, setIsShowingAccessRequirement] =
    useState<boolean>(false)
  const hasSubjectId = ar?.subjectIds && ar?.subjectIds.length > 0
  const subjectId = hasSubjectId ? ar?.subjectIds[0].id : undefined
  const subjectType = hasSubjectId ? ar?.subjectIds[0].type : undefined

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
            disabled={isEnrolledIn2Fa}
          >
            {isEnrolledIn2Fa ? 'Complete' : 'Start'}
          </WideButton>
        }
      />
      {isShowingAccessRequirement && ar && (
        <AccessRequirementList
          subjectId={subjectId}
          subjectType={subjectType}
          accessRequirementFromProps={[ar]}
          renderAsModal={true}
          numberOfFilesAffected={count}
          onHide={() => setIsShowingAccessRequirement(false)}
        />
      )}
    </>
  )
}
