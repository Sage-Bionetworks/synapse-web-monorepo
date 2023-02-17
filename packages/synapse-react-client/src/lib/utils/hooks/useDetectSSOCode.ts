import {
  BackendDestinationEnum,
  PRODUCTION_ENDPOINT_CONFIG,
} from '../functions/getEndpoint'
import { PROVIDERS } from '../../containers/auth/Login'
import { LoginResponse } from '../synapseTypes'
import { SynapseClientError } from '../SynapseClientError'
import {
  bindOAuthProviderToAccount,
  getRootURL,
  oAuthRegisterAccountStep2,
  oAuthSessionRequest,
  setAccessTokenCookie,
} from '../SynapseClient'
import { useEffect } from 'react'
import { TwoFactorAuthErrorResponse } from '../synapseTypes/ErrorResponse'

/*
 * During SSO login, the authorization provider (Google) will send the user back to the portal with an authorization code,
 * which can be exchanged for a Synapse user session. This function should be called whenever the root App is initialized
 * (to look for this code parameter and complete the round-trip). If state is included, then we assume that this is being
 * used for account creation, where we pass the username through the process.
 */
export default function useDetectSSOCode(
  registerAccountUrl = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!RegisterAccount:0`,
  onError?: (err: unknown) => void,
): void {
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
      const redirectAfterSuccess = () => {
        // go back to original route after successful SSO login
        const originalUrl = localStorage.getItem('after-sso-login-url')
        localStorage.removeItem('after-sso-login-url')
        if (originalUrl) {
          window.location.replace(originalUrl)
        }
      }
      if (PROVIDERS.GOOGLE == provider) {
        const onSuccess = (
          response: LoginResponse | TwoFactorAuthErrorResponse,
        ) => {
          setAccessTokenCookie((response as LoginResponse).accessToken).then(
            redirectAfterSuccess,
          )
        }
        const onFailure = (err: SynapseClientError) => {
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
          .then(redirectAfterSuccess)
          .catch(onFailure)
      }
    }
    // Intentionally have an empty dep array -- this should only run once per mount since it's checking for params that come from a redirect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
