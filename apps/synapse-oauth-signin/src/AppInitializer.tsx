import { OAuthClientError } from './OAuthClientError'
import React, { useCallback, useEffect, useState } from 'react'
import { SynapseClient } from 'synapse-react-client'
import { handleErrorRedirect } from './URLUtils'
import ApplicationSessionManager from 'synapse-react-client/dist/utils/apputils/session/ApplicationSessionManager'

function AppInitializer(
  props: React.PropsWithChildren<Record<string, unknown>>,
) {
  const [maxAge, setMaxAge] = useState<number | undefined>(undefined)
  const [isFramed, setIsFramed] = useState(false)

  const urlSearchParams = new URLSearchParams(window.location.search)
  const prompt = urlSearchParams.get('prompt')

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

  useEffect(() => {
    // is prompt=login?  if so, then clear the cookie
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
    }
  }, [])

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    SynapseClient.getAccessTokenFromCookie().then(
      (accessToken: string | null) => {
        if (accessToken) {
          // check max age when re-establishing the session, not to auto-consent.
          const maxAgeURLParam = urlSearchParams.get('max_age')
          // SWC-5597: if max_age is defined, then return if the user last authenticated more than max_age seconds ago
          if (maxAgeURLParam && parseInt(maxAgeURLParam)) {
            setMaxAge(parseInt(maxAgeURLParam))
          }
        }
      },
    )
  }, [])

  const onSignInError = useCallback(() => {
    if (prompt === 'none') {
      // not logged in, and prompt is "none".
      handleErrorRedirect(
        new OAuthClientError(
          'login_required',
          'User is not logged in, and prompt was set to none',
        ),
      )
    }
  }, [prompt])

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
    <ApplicationSessionManager maxAge={maxAge} onError={onSignInError}>
      {!isFramed && props.children}
    </ApplicationSessionManager>
  )
}

export default AppInitializer
