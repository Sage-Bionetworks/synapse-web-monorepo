import { BlockingLoader } from '@/components/LoadingScreen/LoadingScreen'
import { PropsWithChildren, useEffect, useState } from 'react'
import { useSynapseContext } from '../../context'
import { storeRedirectURLForOneSageLoginAndGotoURL } from '../AppUtils'
import { useOneSageURL } from '../../hooks/useOneSageURL'
import { useApplicationSessionContext } from './ApplicationSessionContext'

/**
 * AuthenticationGuard redirects unauthenticated users to OneSage login
 * after session initialization is complete. This component displays a loading
 * screen while checking authentication status and handles the redirect flow.
 *
 * @example
 * ```tsx
 * <AuthenticationGuard>
 *   <ProtectedContent />
 * </AuthenticationGuard>
 * ```
 */
export function AuthenticationGuard({ children }: PropsWithChildren) {
  const { isAuthenticated } = useSynapseContext()
  const { hasInitializedSession } = useApplicationSessionContext()
  const oneSageURL = useOneSageURL()
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false)

  useEffect(() => {
    if (hasInitializedSession && !hasCheckedAuth) {
      setHasCheckedAuth(true)
      if (!isAuthenticated) {
        storeRedirectURLForOneSageLoginAndGotoURL(oneSageURL.toString())
      }
    }
  }, [hasInitializedSession, isAuthenticated, hasCheckedAuth, oneSageURL])

  // Show loading screen while checking authentication
  if (!hasCheckedAuth) {
    return <BlockingLoader show={true} hintText="Checking authentication..." />
  }

  // If authenticated, show children
  // If not authenticated, the redirect has been triggered above, show loading
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <BlockingLoader show={true} hintText="Redirecting to sign in..." />
  )
}
