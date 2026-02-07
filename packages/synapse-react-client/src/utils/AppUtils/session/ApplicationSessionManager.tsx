import SynapseClient from '@/synapse-client'
import { useTermsOfServiceStatus } from '@/synapse-queries/termsOfService/useTermsOfService'
import { useGetTwoFactorEnrollmentStatusWithAccessToken } from '@/synapse-queries/auth/useTwoFactorEnrollment'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import dayjs from 'dayjs'
import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { SynapseContextProvider, SynapseContextType } from '../../context'
import useDetectSSOCode from '../../hooks/useDetectSSOCode'
import { restoreLastPlace } from '../AppUtils'
import { ApplicationSessionContextProvider } from './ApplicationSessionContext'
import { AuthenticationGuard } from './AuthenticationGuard'

export type ApplicationSessionManagerProps = PropsWithChildren<{
  downloadCartPageUrl?: string
  /* If defined, specifies the allowable elapsed time in seconds since the last time the End-User was actively authenticated. If the elapsed time is greater than this value, the session will be cleared and the user will have to re-authenticate. */
  maxAge?: number
  /* Called when the session is reset, i.e. the user has signed out.*/
  onResetSessionComplete?: () => void
  onNoAccessTokenFound?: () => void
  /*
   * Callback invoked after the user has successfully signed in through SSO when the purpose of signing in is to disable 2FA on the account.
   * The twoFactorAuthSSOError and twoFaResetToken are passed in the callback and can be used to complete the 2FA reset process.
   * This only needs to be implemented if the app implements the workflow to disable 2FA (i.e. only if the app supports account management).
   */
  onTwoFactorAuthResetThroughSSO?: (
    twoFactorAuthSSOError: TwoFactorAuthErrorResponse,
    twoFaResetToken: string,
  ) => void
  appId?: SynapseContextType['appId']
  /* If true, redirects unauthenticated users to OneSage login after session initialization */
  requireAuthentication?: boolean
}>

/**
 * The ApplicationSessionManager will manage Synapse user session in an app. The goal is that any custom app should
 * just be able to add this component near the top of its component tree and have the full Synapse login lifecycle managed
 * while exposing minimal complexity to the app itself.
 *
 * Custom per-app behavior should be customized with generalizable props to this component.
 *
 * The session data can be accessed with useApplicationSessionContext.
 *
 * This component must be called within a react-router Router. ApplicationSessionManager also wraps all of its children
 * in a SynapseContextProvider.
 * @param props
 * @constructor
 */
export function ApplicationSessionManager(
  props: ApplicationSessionManagerProps,
) {
  const {
    children,
    downloadCartPageUrl,
    onResetSessionComplete,
    maxAge,
    onNoAccessTokenFound,
    onTwoFactorAuthResetThroughSSO,
    appId,
    requireAuthentication,
  } = props
  const navigate = useNavigate()

  const [token, setToken] = useState<string | undefined>()
  const [hasInitializedSession, setHasInitializedSession] = useState(false)
  const [twoFactorAuthSSOError, setTwoFactorAuthSSOError] = useState<
    TwoFactorAuthErrorResponse | undefined
  >()
  const initAnonymousUserState = useCallback(() => {
    if (onNoAccessTokenFound) {
      onNoAccessTokenFound()
    }
    SynapseClient.signOut().then(() => {
      // reset token
      setToken(undefined)
      setHasInitializedSession(true)
    })
  }, [onNoAccessTokenFound])
  const { data: tosStatus } = useTermsOfServiceStatus(token, {
    enabled: !!token,
  })
  const { data: twoFactorStatus } =
    useGetTwoFactorEnrollmentStatusWithAccessToken(token, {
      enabled: !!token,
    })

  const refreshSession = useCallback(async () => {
    setTwoFactorAuthSSOError(undefined)
    let token
    try {
      token = await SynapseClient.getAccessTokenFromCookie()
      if (!token) {
        initAnonymousUserState()
        return
      }
    } catch (e) {
      console.error('Unable to get the access token: ', e)
      initAnonymousUserState()
      return
    }
    if (maxAge !== undefined && !!token) {
      // SWC-5597: if max_age is defined, then return if the user last authenticated more than max_age seconds ago
      const authenticatedOnResponse = await SynapseClient.getAuthenticatedOn(
        token,
      )
      const lastAuthenticatedOn = dayjs.utc(
        authenticatedOnResponse.authenticatedOn,
      )
      const now = dayjs.utc()
      if (now.diff(lastAuthenticatedOn, 'seconds') > maxAge) {
        // Invalidate the token (if present) so the user must re-authenticate to use this app
        initAnonymousUserState()
        return
      }
    }
    setToken(token)
    setHasInitializedSession(true)
    try {
      // get the user terms of service status
      await SynapseClient.getTermsOfServiceStatus(token)
    } catch (e) {
      console.error('Error on refreshSession: ', e)
      // if status number field is present, then
      //if 400 level, then clear
      if ('status' in e && typeof e['status'] === 'number') {
        const status = e['status']
        if (status >= 400 && status < 500) {
          // intentionally calling sign out because the token could be stale so we want
          // the stored session to be cleared out.
          SynapseClient.signOut().then(() => {
            // PORTALS-2293: if the token was invalid (caused an error), reload the app to ensure all children
            // are loading as the anonymous user
            window.location.reload()
          })
        }
      }
    }
  }, [initAnonymousUserState, maxAge])

  const clearSession = useCallback(async () => {
    await SynapseClient.signOut()
    await refreshSession()
    if (onResetSessionComplete) {
      onResetSessionComplete()
    }
    //in all cases when the session is cleared we should refresh the page to ensure private data is not being shown
    navigate(0)
  }, [refreshSession, onResetSessionComplete])

  /** Call refreshSession on mount */
  useEffect(() => {
    refreshSession()
    // PORTALS-3249: Set up an interval to call refreshSession every 60 seconds (60000 milliseconds)
    const intervalId = setInterval(() => {
      refreshSession()
    }, 60000)

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { isLoading: isLoadingSSO } = useDetectSSOCode({
    onSignInComplete: () => {
      restoreLastPlace(navigate)
      refreshSession()
    },
    onTwoFactorAuthRequired: twoFactorAuthError => {
      setTwoFactorAuthSSOError(twoFactorAuthError)
    },
    onTwoFactorAuthResetTokenPresent: (twoFactorAuthError, twoFaResetToken) => {
      setTwoFactorAuthSSOError(twoFactorAuthError)
      if (onTwoFactorAuthResetThroughSSO) {
        onTwoFactorAuthResetThroughSSO(twoFactorAuthError, twoFaResetToken)
      }
    },
    onError: (err: unknown) => {
      // Throw the error so it propagates to an error boundary
      throw err
    },
    isInitializingSession: !hasInitializedSession,
    token,
  })

  return (
    <ApplicationSessionContextProvider
      context={{
        token,
        termsOfServiceStatus: tosStatus,
        refreshSession,
        clearSession,
        isLoadingSSO,
        twoFactorAuthSSOErrorResponse: twoFactorAuthSSOError,
        hasInitializedSession,
        twoFactorStatus,
      }}
    >
      <SynapseContextProvider
        synapseContext={{
          accessToken: token,
          isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
          utcTime: SynapseClient.getUseUtcTimeFromCookie(),
          downloadCartPageUrl,
          appId: appId,
        }}
      >
        {requireAuthentication ? (
          <AuthenticationGuard>{children}</AuthenticationGuard>
        ) : (
          children
        )}
      </SynapseContextProvider>
    </ApplicationSessionContextProvider>
  )
}

export default ApplicationSessionManager
