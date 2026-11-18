import { useGetTwoFactorEnrollmentStatus } from '@/synapse-queries/auth/useTwoFactorEnrollment'
import { AccessRequirementActionCard } from './AccessRequirementActionCard'

export type EnableTwoFaRequirementCardProps = {
  accessRequirementId: number
  count?: number
}
export const REQUIRES_2FA_CARD_TITLE = 'Requires Two-Factor Authentication'

export function EnableTwoFaRequirementCard(
  props: EnableTwoFaRequirementCardProps,
) {
  const { data: twoFactorAuthStatus } = useGetTwoFactorEnrollmentStatus()

  return (
    <AccessRequirementActionCard
      {...props}
      title={REQUIRES_2FA_CARD_TITLE}
      isComplete={twoFactorAuthStatus?.status === 'ENABLED'}
    />
  )
}
