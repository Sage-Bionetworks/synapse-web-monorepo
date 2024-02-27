import { Box } from '@mui/material'
import React from 'react'
import { useGetUserBundle } from '../../synapse-queries/user/useUserBundle'
import { SynapseConstants } from '../../utils'
import {
  AccountLevelBadge,
  AccountLevelBadgeType,
} from '../AccountLevelBadge/AccountLevelBadge'
import { ErrorBanner } from '../error/ErrorBanner'

export type AccountLevelBadgesProps = {
  userId: string
}

const CERTIFICATION_VERIFICATION_AND_USERPROFILE_BUNDLE_MASK =
  SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
  SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED |
  SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE

export const AccountLevelBadges: React.FunctionComponent<
  AccountLevelBadgesProps
> = ({ userId }: AccountLevelBadgesProps) => {
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

  if (isLoading) {
    return <></>
  }
  if (error) {
    return <ErrorBanner error={error} />
  }

  return (
    <>
      {hasBadges && (
        <Box
          display="flex"
          gap="10px"
          justifyContent="flex-start"
          flexWrap="wrap"
        >
          {Object.entries(badgeStatuses).map(([key, value]) => {
            const badgeType = key as AccountLevelBadgeType
            return (
              value && (
                <AccountLevelBadge key={badgeType} badgeType={badgeType} />
              )
            )
          })}
        </Box>
      )}
    </>
  )
}
