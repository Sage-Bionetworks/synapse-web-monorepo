import usePathBefore2FARedirect from '@/hooks/usePathBefore2FARedirect'
import { useSkipMfaPrompt } from '@/hooks/useSkipMfaPrompt'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/featureflags/useGetFeatureFlag'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'

export default function useMaybeForceEnable2FA() {
  // Detect if two factor authentication is enabled
  const { twoFactorStatus } = useApplicationSessionContext()
  const isFeatureFlagEnabled = useGetFeatureFlag(FeatureFlagEnum.MFA_REQUIRED)
  const navigate = useNavigate()
  const location = useLocation()
  const { hasSkippedRecently } = useSkipMfaPrompt()

  const { set: setPathBefore2faRedirect } = usePathBefore2FARedirect()

  // true until we confirm we will not force enable 2FA
  const [mayForceEnable2FA, setMayForceEnable2FA] = useState(true)

  useEffect(() => {
    if (twoFactorStatus !== undefined) {
      const isTwoFactorEnabled = twoFactorStatus?.status === 'ENABLED'
      // if user is already on the 2FA pages, do not redirect (and maintain mayForceEnable2FA as true)
      if (
        location.pathname.startsWith('/authenticated/2fa') || // 2faRequired, 2fa/enroll, 2fa/generatecodes, etc.
        location.pathname === '/authenticated/signTermsOfUse' || // user should sign the ToS before enabling 2FA
        location.pathname === '/authenticated/signUpdatedTermsOfUse'
      ) {
        return
      }
      // redirect to 2FA enrollment if not enabled
      if (
        !isTwoFactorEnabled &&
        (isFeatureFlagEnabled || !hasSkippedRecently)
      ) {
        // Store the current path before redirecting to 2FA required page, we will redirect back to this path after 2FA
        // enrollment is complete.
        const currentPath = location.pathname + location.search + location.hash
        setPathBefore2faRedirect(currentPath)

        navigate('/authenticated/2faRequired')
      } else {
        setMayForceEnable2FA(false)
      }
    }
  }, [
    twoFactorStatus,
    location.pathname,
    navigate,
    isFeatureFlagEnabled,
    hasSkippedRecently,
    location.search,
    location.hash,
    setPathBefore2faRedirect,
  ])

  return { mayForceEnable2FA }
}
