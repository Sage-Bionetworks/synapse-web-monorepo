import { useGetUserBundle } from '@/synapse-queries/user/useUserBundle'
import { SynapseConstants } from '@/utils'
import { Box } from '@mui/material'
import {
  AccountLevelBadge,
  AccountLevelBadgeType,
} from '../AccountLevelBadge/AccountLevelBadge'
import { ConfirmationDialog } from '../ConfirmationDialog'
import { ErrorBanner } from '../error/ErrorBanner'
import useRevokeCertificationUI from './useRevokeCertificationUI'

export type AccountLevelBadgesProps = {
  userId: string
}

const CERTIFICATION_VERIFICATION_AND_USERPROFILE_BUNDLE_MASK =
  SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
  SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED |
  SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE

export function AccountLevelBadges({ userId }: AccountLevelBadgesProps) {
  const {
    data: userBundle,
    isLoading,
    error,
  } = useGetUserBundle(
    userId,
    CERTIFICATION_VERIFICATION_AND_USERPROFILE_BUNDLE_MASK,
  )

  const badgeStatuses: Record<AccountLevelBadgeType, boolean> = {
    certified: userBundle?.isCertified || false,
    validated: userBundle?.isVerified || false,
    enabledMFA: userBundle?.userProfile?.twoFactorAuthEnabled || false,
  }
  const hasBadges = Object.values(badgeStatuses).some(value => value)

  const {
    showButton: showRevokeCertificationButton,
    buttonProps: revokeCertificationButtonProps,
    confirmationDialogProps: revokeCertificationConfirmationDialogProps,
  } = useRevokeCertificationUI({
    userId,
    buttonProps: {
      variant: 'outlined',
    },
  })

  if (isLoading) {
    return <></>
  }
  if (error) {
    return <ErrorBanner error={error} />
  }

  return (
    <>
      <ConfirmationDialog {...revokeCertificationConfirmationDialogProps} />
      {hasBadges && (
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {Object.entries(badgeStatuses).map(([key, value]) => {
            const badgeType = key as AccountLevelBadgeType
            const buttonProps =
              badgeType === 'certified' && showRevokeCertificationButton
                ? revokeCertificationButtonProps
                : undefined
            return (
              value && (
                <AccountLevelBadge
                  key={badgeType}
                  badgeType={badgeType}
                  buttonProps={buttonProps}
                />
              )
            )
          })}
        </Box>
      )}
    </>
  )
}

export default AccountLevelBadges
