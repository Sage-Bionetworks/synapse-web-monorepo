import {
  BackendDestinationEnum,
  PRODUCTION_ENDPOINT_CONFIG,
} from '../functions/getEndpoint'
import { LoginResponse } from '../synapseTypes'
import { SynapseClientError } from '../SynapseClientError'
import {
  bindOAuthProviderToAccount,
  getRootURL,
  oAuthRegisterAccountStep2,
  oAuthSessionRequest,
  setAccessTokenCookie,
} from '../SynapseClient'
import { useEffect, useState } from 'react'
import { TwoFactorAuthErrorResponse } from '../synapseTypes/ErrorResponse'
import { PROVIDERS } from '../../containers/auth/AuthenticationMethodSelection'

export type UseDetectSSOCodeReturnType = {
  /* true iff SSO login has occurred and the completion of the OAuth flow in Synapse is pending */
  isLoading: boolean
}

export type UseDetectSSOCodeOptions = {
  onSignInComplete?: () => void
  registerAccountUrl?: string
  onError?: (err: unknown) => void
  onTwoFactorAuthRequired?: (resp: TwoFactorAuthErrorResponse) => void
}

/*
 * During SSO login, the authorization provider (Google) will send the user back to the portal with an authorization code,
 * which can be exchanged for a Synapse user session. This function should be called whenever the root App is initialized
 * (to look for this code parameter and complete the round-trip). If state is included, then we assume that this is being
 * used for account creation, where we pass the username through the process.
 */
export default function useDetectSSOCode(
  opts: UseDetectSSOCodeOptions = {},
): UseDetectSSOCodeReturnType {
  const {
    onSignInComplete,
    registerAccountUrl = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!RegisterAccount:0`,
    onError,
    onTwoFactorAuthRequired,
  } = opts

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const redirectURL = getRootURL()
    // 'code' handling (from SSO) should be preformed on the root page, and then redirect to original route.
    const fullUrl: URL = new URL(window.location.href)
    // in test environment the searchParams isn't defined
    const { searchParams } = fullUrl
    if (!searchParams) {
      return
    }
    const code = searchParams.get('code')
    const provider = searchParams.get('provider')
    const state = searchParams.get('state')
    // state is used during OAuth based Synapse account creation (it's the username)
    if (code && provider) {
      const redirectUrl = `${redirectURL}?provider=${provider}`

      if (PROVIDERS.GOOGLE == provider) {
        setIsLoading(true)
        const onSuccess = (
          response: LoginResponse | TwoFactorAuthErrorResponse,
        ) => {
          setIsLoading(false)
          if ('accessToken' in response) {
            setAccessTokenCookie(response.accessToken).then(onSignInComplete)
          } else {
            // The app will redirect or open a modal to handle 2FA
            if (onTwoFactorAuthRequired) {
              onTwoFactorAuthRequired(response)
            }
          }
        }
        const onFailure = (err: SynapseClientError) => {
          setIsLoading(false)
          if (err.status === 404) {
            // Synapse account not found, send to registration page
            window.location.replace(registerAccountUrl)
          }
          console.error('Error with Google account association: ', err)
          if (onError) {
            onError(err.reason)
          }
        }

        if (state) {
          oAuthRegisterAccountStep2(
            state,
            provider,
            code,
            redirectUrl,
            BackendDestinationEnum.REPO_ENDPOINT,
          )
            .then(onSuccess)
            .catch(onFailure)
        } else {
          oAuthSessionRequest(
            provider,
            code,
            redirectUrl,
            BackendDestinationEnum.REPO_ENDPOINT,
          )
            .then(onSuccess)
            .catch(onFailure)
        }
      } else if (PROVIDERS.ORCID == provider) {
        setIsLoading(true)
        // now bind this to the user account
        const onFailure = (err: SynapseClientError) => {
          setIsLoading(false)
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
      }
    }
    // Intentionally have an empty dep array -- this should only run once per mount since it's checking for params that come from a redirect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading }
}
