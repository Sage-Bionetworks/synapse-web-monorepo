import SynapseClient from '@/synapse-client'
import { useTermsOfServiceStatus } from '@/synapse-queries/termsOfService/useTermsOfService'
import { useGetTwoFactorEnrollmentStatusWithAccessToken } from '@/synapse-queries/auth/useTwoFactorEnrollment'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import useDetectSSOCode from '../../hooks/useDetectSSOCode'
import { restoreLastPlace } from '../AppUtils'
import { ApplicationSessionContextType } from './ApplicationSessionContext'
import {
  OAuthTokenIntrospectionResponse,
  RealmPrincipal,
  SynapseClient as SynapseOpenApiClient,
} from '@sage-bionetworks/synapse-client'

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

/**
 * Attempt to get the stored access token from the browser cookie.
 * Returns the token string, or undefined if not found or on error.
 */
async function getStoredToken(): Promise<string | undefined> {
  try {
    return await SynapseClient.getAccessTokenFromCookie()
  } catch (e) {
    console.error('Unable to get the access token: ', e)
    return undefined
  }
}

/**
 * Validate the token by calling the token introspection service.
 * @return the current token or null if the token is invalid
 */
async function validateToken(
  accessToken: string,
  maxAge?: number,
): Promise<OAuthTokenIntrospectionResponse | null> {
  const synapseClient = new SynapseOpenApiClient({ accessToken: accessToken })
  try {
    const response =
      await synapseClient.openIDConnectServicesClient.postAuthV1Oauth2Introspect(
        {
          oAuthTokenIntrospectionRequest: {
            token: accessToken,
            max_age: maxAge,
          },
        },
      )
    if (!response.active) {
      throw new Error('Token is not active.')
    }
    return response
  } catch (e) {
    console.error(
      'Error validating the access token. Clearing session. Error: ',
      (e as Error).message,
    )
  }

  return null
}

async function getCurrentRealmPrincipals(
  accessToken: string,
): Promise<RealmPrincipal> {
  const synapseClient = new SynapseOpenApiClient({ accessToken })
  return synapseClient.realmServicesClient.getRepoV1RealmPrincipals()
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

  const [token, setToken] = useState<string | undefined>()
  const [realmId, setRealmId] = useState<string | undefined>()
  const [userId, setUserId] = useState<string | undefined>()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [hasInitializedSession, setHasInitializedSession] = useState(false)
  const [twoFactorAuthSSOError, setTwoFactorAuthSSOError] = useState<
    TwoFactorAuthErrorResponse | undefined
  >()

  /**
   * Initialize the session and token for an anonymous user.
   * If onMissingExpectedAuthentication is defined, it will be called to allow the app to handle this case (e.g. by showing an error if the user was expected to be authenticated).
   * @return the new token.
   */
  const initAnonymousUserState = useCallback(async () => {
    if (onMissingExpectedAuthentication) {
      onMissingExpectedAuthentication()
    }
    const newToken = await SynapseClient.signOut(defaultRealm)
    return newToken
  }, [defaultRealm, onMissingExpectedAuthentication])

  const { data: tosStatus } = useTermsOfServiceStatus(token, {
    enabled: isAuthenticated,
  })
  const { data: twoFactorStatus } =
    useGetTwoFactorEnrollmentStatusWithAccessToken(token, {
      enabled: isAuthenticated,
    })

  const refreshSession = useCallback(async () => {
    setTwoFactorAuthSSOError(undefined)

    let token = await getStoredToken()

    if (!token) {
      token = await initAnonymousUserState()
    }

    // Verify that the token is valid. If not, `validateToken` will clear the session and reload the page.
    const introspectionResponse = await validateToken(token, maxAge)
    if (introspectionResponse === null) {
      // Token was invalid. We may be in this state because the token expired. Clear the token from browser storage.
      await SynapseClient.signOut()
      // Refresh the page to clear any potentially stale data from the previous session
      window.location.reload()
      return
    }
    const currentUserId = introspectionResponse.sub

    // Get the realm's principals to see if the user is anonymous.
    const realmPrincipals = await getCurrentRealmPrincipals(token)

    setToken(token)
    setHasInitializedSession(true)
    setRealmId(realmPrincipals.realmId)
    setUserId(currentUserId)
    setIsAuthenticated(currentUserId !== realmPrincipals.anonymousUser!)
  }, [initAnonymousUserState, maxAge])

  const clearSession = useCallback(async () => {
    await initAnonymousUserState()
    // In all cases when the session is cleared we should refresh the page to ensure private data is not being shown
    navigate(0)
  }, [navigate, initAnonymousUserState])

  /** Call refreshSession on mount and set up periodic refresh */
  useEffect(() => {
    refreshSession()
    // PORTALS-3249: Set up an interval to call refreshSession every 60 seconds
    const intervalId = setInterval(() => {
      refreshSession()
    }, 60000)

    return () => clearInterval(intervalId)
  }, [refreshSession])

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

  const sessionContext: ApplicationSessionContextType = {
    token,
    userId,
    realmId,
    isAuthenticated,
    termsOfServiceStatus: tosStatus,
    refreshSession,
    clearSession,
    isLoadingSSO,
    twoFactorAuthSSOErrorResponse: twoFactorAuthSSOError,
    hasInitializedSession,
    twoFactorStatus,
  }

  return { sessionContext, token }
}
