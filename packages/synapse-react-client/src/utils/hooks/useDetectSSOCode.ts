import {
  bindOAuthProviderToAccount,
  getRootURL,
  oAuthRegisterAccountStep2,
  oAuthSessionRequest,
  setAccessTokenCookie,
} from '@/synapse-client'
import { OAuth2State } from '@/utils/types'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { LoginResponse } from '@sage-bionetworks/synapse-types'
import { useEffect, useMemo, useState } from 'react'
import { BackendDestinationEnum } from '../functions'
import { OAUTH2_PROVIDERS } from '../SynapseConstants'
import { useOneSageURL } from './useOneSageURL'

export const CSRF_TOKEN_STORAGE_KEY = 'oauth2_csrf_token'

function safeLocalStorageGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch (err) {
    console.warn(`Unable to read from localStorage: ${key}`, err)
    return null
  }
}

function safeLocalStorageRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch (err) {
    console.warn(`Unable to remove from localStorage: ${key}`, err)
  }
}

export type UseDetectSSOCodeReturnType = {
  /* true iff SSO login has occurred and the completion of the OAuth flow in Synapse is pending */
  isLoading: boolean
}

export type UseDetectSSOCodeOptions = {
  onSignInComplete?: () => void
  registerAccountUrl?: string
  onError?: (err: unknown) => void
  onTwoFactorAuthRequired?: (resp: TwoFactorAuthErrorResponse) => void
  onTwoFactorAuthResetTokenPresent?: (
    resp: TwoFactorAuthErrorResponse,
    encodedTwoFaResetToken: string,
  ) => void
  isInitializingSession: boolean
  token?: string
}

/*
 * During SSO login, the authorization provider (Google, ORCiD, ArcusBio Okta, ...) will send the user back to the portal with an authorization code,
 * which can be exchanged for a Synapse user session. This function should be called whenever the root App is initialized
 * (to look for this code parameter and complete the round-trip). If state is included, then we assume that this is being
 * used for account creation, where we pass the username through the process.
 */
export default function useDetectSSOCode(
  opts: UseDetectSSOCodeOptions = { isInitializingSession: true },
): UseDetectSSOCodeReturnType {
  const defaultRegisterAccountURL = useOneSageURL('/register1')

  const {
    onSignInComplete,
    registerAccountUrl = defaultRegisterAccountURL.toString(),
    onError,
    onTwoFactorAuthRequired,
    onTwoFactorAuthResetTokenPresent,
    isInitializingSession,
    token,
  } = opts
  const redirectURL = getRootURL()
  // 'code' handling (from SSO) should be preformed on the root page, and then redirect to original route.
  const fullUrl: URL = new URL(window.location.href)
  // in test environment the searchParams isn't defined
  const { searchParams } = fullUrl
  const code = searchParams?.get('code')
  const provider = searchParams?.get('provider')

  // If the URL contains a client_id and redirect_uri, then we are acting as an identity provider for an external OAuth client
  const isHandlingSynapseOAuthSignIn = Boolean(
    searchParams?.get('client_id') && searchParams?.get('redirect_uri'),
  )

  // If the Synapse user signed in with an external IdP, we may have passed data in the 'state' param
  // Parse it (if appropriate)
  const state: OAuth2State | null = useMemo(() => {
    // If we are acting as an OIDC identity provider, then we should not parse the state param -- it was sent to us, and we should return it untouched
    if (!isHandlingSynapseOAuthSignIn) {
      const encodedState = searchParams?.get('state')
      try {
        return encodedState
          ? (JSON.parse(decodeURIComponent(encodedState)) as OAuth2State)
          : null
      } catch (e) {
        console.error(
          'Error parsing state param:\n',
          e,
          '\nEncoded value:\n',
          encodedState,
        )
      }
    }
    return null
  }, [isHandlingSynapseOAuthSignIn, searchParams])

  const [isLoading, setIsLoading] = useState(!!(code && provider))

  useEffect(() => {
    if (!isInitializingSession) {
      if (code && provider) {
        if (!isHandlingSynapseOAuthSignIn) {
          const storedCsrfToken = safeLocalStorageGetItem(
            CSRF_TOKEN_STORAGE_KEY,
          )

          const expectedCsrfToken = state?.csrfToken ?? null
          const tokensMatch =
            typeof expectedCsrfToken === 'string' &&
            typeof storedCsrfToken === 'string' &&
            expectedCsrfToken === storedCsrfToken

          if (!tokensMatch) {
            safeLocalStorageRemoveItem(CSRF_TOKEN_STORAGE_KEY)
            console.error(
              'Invalid or missing OAuth CSRF token detected. Aborting OAuth flow.',
            )
            if (onError) {
              onError('Invalid OAuth state. Please try signing in again.')
            }
            setIsLoading(false)
            return
          }

          safeLocalStorageRemoveItem(CSRF_TOKEN_STORAGE_KEY)
        }

        const redirectUrl = `${redirectURL}?provider=${provider}`

        //If user is already logged in, and the provider is ORCID, then try to bind this OAuth provider to the account.
        if (OAUTH2_PROVIDERS.ORCID == provider && token !== undefined) {
          // now bind this to the user account
          const onFailure = (err: SynapseClientError) => {
            console.error('Error binding ORCiD to account: ', err)
            if (onError) {
              onError(err.reason)
            }
          }
          bindOAuthProviderToAccount(
            provider,
            code,
            redirectUrl,
            BackendDestinationEnum.REPO_ENDPOINT,
          )
            .then(onSignInComplete)
            .catch(onFailure)
            .finally(() => setIsLoading(false))
        } else if (
          OAUTH2_PROVIDERS.GOOGLE == provider ||
          OAUTH2_PROVIDERS.ORCID == provider ||
          OAUTH2_PROVIDERS.ARCUS == provider ||
          OAUTH2_PROVIDERS.SAGE_BIONETWORKS == provider
        ) {
          const onSuccess = (
            response: LoginResponse | TwoFactorAuthErrorResponse | null,
          ) => {
            if (response) {
              if ('accessToken' in response) {
                setAccessTokenCookie(response.accessToken).then(
                  onSignInComplete,
                )
              } else {
                // The app will redirect or open a modal to handle a standard 2FA sign in
                if (onTwoFactorAuthRequired) {
                  onTwoFactorAuthRequired(response)
                }
                if (
                  // The user logged in with OAuth while attempting to disable 2FA using an emailed signed token
                  state &&
                  state.twoFaResetToken &&
                  onTwoFactorAuthResetTokenPresent
                ) {
                  // Let the app handle redirecting to the 2FA reset page
                  onTwoFactorAuthResetTokenPresent(
                    response,
                    state.twoFaResetToken,
                  )
                }
              }
            }
          }
          const onFailure = (err: SynapseClientError) => {
            if (err.status === 404) {
              // Synapse account not found, send to registration page
              window.location.replace(registerAccountUrl)
            }
            console.error('Error with account login: ', err)
            if (onError) {
              onError(err.reason)
            }
          }

          if (
            (OAUTH2_PROVIDERS.GOOGLE == provider ||
              OAUTH2_PROVIDERS.ARCUS == provider ||
              OAUTH2_PROVIDERS.SAGE_BIONETWORKS == provider) &&
            state?.registrationUsername
          ) {
            oAuthRegisterAccountStep2(
              state.registrationUsername,
              provider,
              code,
              redirectUrl,
              BackendDestinationEnum.REPO_ENDPOINT,
            )
              .then(onSuccess)
              .catch(onFailure)
              .finally(() => setIsLoading(false))
          } else {
            oAuthSessionRequest(
              provider,
              code,
              redirectUrl,
              BackendDestinationEnum.REPO_ENDPOINT,
            )
              .then(onSuccess)
              .catch(onFailure)
              .finally(() => setIsLoading(false))
          }
        } else {
          console.warn('Unknown SSO Provider: ', provider)
          setIsLoading(false)
        }
      }
    }
    // Intentionally only monitoring initialization of the session -- only running on mount after the session detection has completed since this uses URL params that come from a redirect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitializingSession])

  return { isLoading }
}
