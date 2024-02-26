import { Box } from '@mui/material'
import React from 'react'
import { useGetUserBundle } from '../../synapse-queries/user/useUserBundle'
import { SynapseConstants } from '../../utils'
import { AccountLevelBadge } from '../AccountLevelBadge/AccountLevelBadge'
import { ErrorBanner } from '../error/ErrorBanner'

export type AccountLevelBadgesProps = {
  userId: string
}

const CERTIFICATION_AND_VERIFICATION_BUNDLE_MASK =
  SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
  SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED

export const AccountLevelBadges: React.FunctionComponent<
  AccountLevelBadgesProps
> = ({ userId }: AccountLevelBadgesProps) => {
  const {
    data: userBundle,
    isLoading,
    error,
  } = useGetUserBundle(userId, CERTIFICATION_AND_VERIFICATION_BUNDLE_MASK)

  const hasBadges = userBundle?.isCertified || userBundle?.isVerified

  if (isLoading) {
    return <></>
  }
  if (error) {
    return <ErrorBanner error={error} />
  }

  return (
    <>
      {hasBadges && (
        <Box display="flex" gap="10px">
          {userBundle?.isCertified && (
            <AccountLevelBadge badgeType="certified" />
          )}
          {userBundle?.isVerified && (
            <AccountLevelBadge badgeType="validated" />
          )}
        </Box>
      )}
    </>
  )
}
