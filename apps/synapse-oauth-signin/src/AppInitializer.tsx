import moment from 'moment'
import { OAuthClientError } from './OAuthClientError'
import React, { useCallback, useEffect, useState } from 'react'
import { SynapseClient } from 'synapse-react-client'
import {
  defaultQueryClientConfig,
  SynapseContextProvider,
} from 'synapse-react-client/dist/utils/SynapseContext'
import { AuthenticatedOn } from 'synapse-react-client/dist/utils/synapseTypes/AuthenticatedOn'
import { handleErrorRedirect } from './URLUtils'
import { QueryClient } from 'react-query'
import useDetectSSOCode from 'synapse-react-client/dist/utils/hooks/useDetectSSOCode'
import { TwoFactorAuthErrorResponse } from 'synapse-react-client/dist/utils/synapseTypes/ErrorResponse'
import { OAuthAppContext } from './OAuthAppContext'
import themeOptions from './style/theme'

const queryClient = new QueryClient(defaultQueryClientConfig)

function AppInitializer(
  props: React.PropsWithChildren<Record<string, unknown>>,
) {
  const [accessToken, _setAccessToken] = useState<string | undefined>(undefined)
  const setAccessToken = useCallback((token: string | undefined) => {
    _setAccessToken(token)
    queryClient.clear()
  }, [])
  const [isFramed, setIsFramed] = useState(false)
  const [twoFactorAuthErrorResponse, setTwoFactorAuthErrorResponse] =
    useState<TwoFactorAuthErrorResponse>()

  useEffect(() => {
    // can override endpoints as https://repo-staging.prod.sagebase.org/ and https://staging.synapse.org for staging

    const isStaging: boolean = window.location.hostname.includes('staging')
    const isDev: boolean = window.location.hostname.includes('dev')

    const stagingConfig = {
      REPO: 'https://repo-staging.prod.sagebase.org/',
      PORTAL: 'https://staging.synapse.org/',
    }

    const devConfig = {
      REPO: 'https://repo-dev.dev.sagebase.org/',
      PORTAL: 'https://portal-dev.dev.sagebase.org/',
    }

    if (isStaging || isDev) {
      if (!(window as any).SRC) {
        ;(window as any).SRC = {}
      }

      ;(window as any).SRC.OVERRIDE_ENDPOINT_CONFIG = isStaging
        ? stagingConfig
        : devConfig
    }
  }, [])

  useDetectSSOCode({
    onSignInComplete: () => {
      const originalUrl = localStorage.getItem('after-sso-login-url')
      localStorage.removeItem('after-sso-login-url')
      if (originalUrl) {
        window.location.replace(originalUrl)
      }
    },
    onTwoFactorAuthRequired: twoFactorAuthError => {
      setTwoFactorAuthErrorResponse(twoFactorAuthError)
    },
    onError: error => {
      throw error
    },
  })

  useEffect(() => {
    // is prompt=login?  if so, then clear the cookie
    const urlSearchParams = new URLSearchParams(window.location.search)
    const prompt = urlSearchParams.get('prompt')
    if (prompt === 'login') {
      SynapseClient.setAccessTokenCookie(undefined).then(() => {
        urlSearchParams.set('prompt', '')
        // replace query params and refresh
        window.location.replace(
          `${window.location.href.slice(
            0,
            window.location.href.indexOf('?'),
          )}?${urlSearchParams.toString()}`,
        )
      })
    } else {
      SynapseClient.getAccessTokenFromCookie()
        .then((accessToken: string | null) => {
          if (accessToken) {
            // check max age when re-establishing the session, not to auto-consent.
            const maxAgeURLParam = urlSearchParams.get('max_age')
            // SWC-5597: if max_age is defined, then return if the user last authenticated more than max_age seconds ago
            if (maxAgeURLParam && parseInt(maxAgeURLParam)) {
              SynapseClient.getAuthenticatedOn(accessToken).then(
                (authenticatedOnResponse: AuthenticatedOn) => {
                  const lastAuthenticatedOn = moment.utc(
                    authenticatedOnResponse.authenticatedOn,
                  )
                  const now = moment.utc()
                  if (
                    now.diff(lastAuthenticatedOn, 'seconds') <=
                    parseInt(maxAgeURLParam)
                  )
                    setAccessToken(accessToken)
                },
              )
            } else {
              // no max age param, use the token
              setAccessToken(accessToken)
            }
          }
        })
        .catch(_err => {
          console.log('no token from cookie could be fetched ', _err)
          if (prompt === 'none') {
            // not logged in, and prompt is "none".
            handleErrorRedirect(
              new OAuthClientError(
                'login_required',
                'User is not logged in, and prompt was set to none',
              ),
            )
          }
        })
    }
  }, [setAccessToken])

  // TODO: move this effect (and the corresponding useState hook) into one custom hook in a separate file
  useEffect(() => {
    // SWC-6294: on mount, detect and attempt a client-side framebuster (mitigation only, easily bypassed by attacker)
    if (window.top && window.top !== window) {
      // If not sandboxed, make sure not to show any portal content (in case they block window unload via onbeforeunload)
      setIsFramed(true)
      // If sandboxed, this call will cause an uncaught js exception and portal will not load.
      window.top.location = window.location
    }
  }, [])

  return (
    <OAuthAppContext.Provider
      value={{ accessToken, setAccessToken, twoFactorAuthErrorResponse }}
    >
      <SynapseContextProvider
        synapseContext={{
          accessToken: accessToken,
          isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
          utcTime: SynapseClient.getUseUtcTimeFromCookie(),
          downloadCartPageUrl: '',
        }}
        theme={themeOptions}
        queryClient={queryClient}
      >
        {!isFramed && props.children}
      </SynapseContextProvider>
    </OAuthAppContext.Provider>
  )
}

export default AppInitializer
