import { useTermsOfServiceStatus } from '@/synapse-queries/termsOfService/useTermsOfService'
import { useGetTwoFactorEnrollmentStatusWithAccessToken } from '@/synapse-queries/auth/useTwoFactorEnrollment'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import { useNavigate } from 'react-router'
import useDetectSSOCode from '../../hooks/useDetectSSOCode'
import { restoreLastPlace } from '../AppUtils'
import { ApplicationSessionContextType } from './ApplicationSessionContext'
import { SynapseSessionManager } from './SynapseSessionManager'

export type UseApplicationSessionOptions = {
  /** The realm that an unauthenticated user should be signed in to. Defaults to "0", the public Synapse realm */
  defaultRealm?: string
  /* If defined, specifies the allowable elapsed time in seconds since the last time the End-User was actively authenticated. If the elapsed time is greater than this value, the session will be cleared and the user will have to re-authenticate. */
  maxAge?: number
  /** Called if the user is not authenticated when the session is initialized. Can be used to trigger an error if authentication is expected. */
  onMissingExpectedAuthentication?: () => void
  /*
   * Callback invoked after the user has successfully signed in through SSO when the purpose of signing in is to disable 2FA on the account.
   * The twoFactorAuthSSOError and twoFaResetToken are passed in the callback and can be used to complete the 2FA reset process.
   * This only needs to be implemented if the app implements the workflow to disable 2FA (i.e. only if the app supports account management).
   */
  onTwoFactorAuthResetThroughSSO?: (
    twoFactorAuthSSOError: TwoFactorAuthErrorResponse,
    twoFaResetToken: string,
  ) => void
}

export type UseApplicationSessionReturn = {
  sessionContext: ApplicationSessionContextType
  token: string | undefined
}

/**
 * Hook that manages the Synapse user session lifecycle.
 *
 * Handles token acquisition, validation, SSO detection, and provides
 * all values needed for the ApplicationSessionContext and SynapseContext.
 *
 * This is a React wrapper around {@link SynapseSessionManager}, which contains
 * the framework-agnostic session logic. Session state is synchronized via
 * `useSyncExternalStore`.
 *
 * Must be called within a react-router Router and a react-query QueryClientProvider.
 */
export function useApplicationSession(
  options: UseApplicationSessionOptions = {},
): UseApplicationSessionReturn {
  const {
    defaultRealm = '0',
    maxAge,
    onMissingExpectedAuthentication,
    onTwoFactorAuthResetThroughSSO,
  } = options

  const navigate = useNavigate()

  const [twoFactorAuthSSOError, setTwoFactorAuthSSOError] = useState<
    TwoFactorAuthErrorResponse | undefined
  >()

  // Store latest callback refs so the manager doesn't need to be recreated when callbacks change
  const onMissingExpectedAuthenticationRef = useRef(
    onMissingExpectedAuthentication,
  )
  onMissingExpectedAuthenticationRef.current = onMissingExpectedAuthentication

  const [manager] = useState(
    () =>
      new SynapseSessionManager({
        defaultRealm,
        maxAge,
        onMissingExpectedAuthentication: () => {
          onMissingExpectedAuthenticationRef.current?.()
        },
      }),
  )

  // Keep mutable options in sync with props
  useEffect(() => {
    manager.setOptions({ defaultRealm, maxAge })
  }, [manager, defaultRealm, maxAge])

  const sessionState = useSyncExternalStore(
    manager.subscribe,
    manager.getSnapshot,
  )

  useEffect(() => {
    manager.start()
    return () => manager.dispose()
  }, [manager])

  const { data: tosStatus } = useTermsOfServiceStatus(sessionState.token, {
    enabled: sessionState.isAuthenticated,
  })
  const { data: twoFactorStatus } =
    useGetTwoFactorEnrollmentStatusWithAccessToken(sessionState.token, {
      enabled: sessionState.isAuthenticated,
    })

  const refreshSession = useCallback(async () => {
    setTwoFactorAuthSSOError(undefined)
    await manager.refreshSession()
  }, [manager])

  const clearSession = useCallback(
    async (onBeforeReload?: () => void) => {
      await manager.clearSession()
      if (onBeforeReload) {
        onBeforeReload()
      }
      // In all cases when the session is cleared we should refresh the page to ensure private data is not being shown
      navigate(0)
    },
    [navigate, manager],
  )

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
    isInitializingSession: !sessionState.hasInitializedSession,
    isAuthenticated: sessionState.isAuthenticated,
  })

  const sessionContext: ApplicationSessionContextType = {
    token: sessionState.token,
    userId: sessionState.userId,
    realmId: sessionState.realmId,
    isAuthenticated: sessionState.isAuthenticated,
    termsOfServiceStatus: tosStatus,
    refreshSession,
    clearSession,
    isLoadingSSO,
    twoFactorAuthSSOErrorResponse: twoFactorAuthSSOError,
    hasInitializedSession: sessionState.hasInitializedSession,
    twoFactorStatus,
  }

  return { sessionContext, token: sessionState.token }
}
