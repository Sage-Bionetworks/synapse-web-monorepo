import {
  BackendDestinationEnum,
  PRODUCTION_ENDPOINT_CONFIG,
} from '../functions/getEndpoint'
import { LoginResponse } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../SynapseClientError'
import {
  bindOAuthProviderToAccount,
  getRootURL,
  oAuthRegisterAccountStep2,
  oAuthSessionRequest,
  setAccessTokenCookie,
} from '../../synapse-client/SynapseClient'
import { useEffect, useState } from 'react'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-types'

import { OAUTH2_PROVIDERS } from '../SynapseConstants'
import { useSynapseContext } from '../context'

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

  const redirectURL = getRootURL()
  // 'code' handling (from SSO) should be preformed on the root page, and then redirect to original route.
  const fullUrl: URL = new URL(window.location.href)
  // in test environment the searchParams isn't defined
  const { searchParams } = fullUrl
  const code = searchParams?.get('code')
  const provider = searchParams?.get('provider')
  // state is used during OAuth based Synapse account creation (it's the username)
  const state = searchParams?.get('state')

  const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(!!(code && provider))

  useEffect(() => {
    if (code && provider) {
      const redirectUrl = `${redirectURL}?provider=${provider}`

      //If user is already logged in, and the provider is ORCID, then try to bind this OAuth provider to the account.
      if (OAUTH2_PROVIDERS.ORCID == provider && accessToken !== undefined) {
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
        OAUTH2_PROVIDERS.ORCID == provider
      ) {
        const onSuccess = (
          response: LoginResponse | TwoFactorAuthErrorResponse | null,
        ) => {
          if (response) {
            if ('accessToken' in response) {
              setAccessTokenCookie(response.accessToken).then(onSignInComplete)
            } else {
              // The app will redirect or open a modal to handle 2FA
              if (onTwoFactorAuthRequired) {
                onTwoFactorAuthRequired(response)
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

        if (OAUTH2_PROVIDERS.GOOGLE == provider && state) {
          oAuthRegisterAccountStep2(
            state,
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
    // Intentionally have an empty dep array -- this should only run once per mount since it's checking for params that come from a redirect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading }
}
