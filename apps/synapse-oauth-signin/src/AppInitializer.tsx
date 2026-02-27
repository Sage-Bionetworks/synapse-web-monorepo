import { PropsWithChildren, useCallback } from 'react'
import { useSearchParams } from 'react-router'
import { ApplicationSessionManager } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionManager'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { useFramebuster } from 'synapse-react-client/utils/AppUtils/AppUtils'
import UniversalCookies from 'universal-cookie'
import { OAuthClientError } from './OAuthClientError'
import { handleErrorRedirect } from './URLUtils'
import useGoogleAnalytics from 'synapse-react-client/utils/analytics/useGoogleAnalytics'

function AppInitializer(props: PropsWithChildren<Record<string, unknown>>) {
  useGoogleAnalytics()
  const [searchParams] = useSearchParams()
  const cookies = new UniversalCookies()
  const accountSitePrompted =
    cookies.get(SynapseConstants.ACCOUNT_SITE_PROMPTED_FOR_LOGIN_COOKIE_KEY) ==
    'true' // short-lived cookie
  const prompt = accountSitePrompted ? 'none' : searchParams.get('prompt')

  let maxAge = undefined
  // check max age when re-establishing the session, not to auto-consent.
  const maxAgeURLParam = searchParams.get('max_age')
  // SWC-5597: if max_age is defined, then return if the user last authenticated more than max_age seconds ago
  if (!accountSitePrompted && maxAgeURLParam && parseInt(maxAgeURLParam)) {
    maxAge = parseInt(maxAgeURLParam)
  }
  const clientId = searchParams.get('client_id') ?? undefined
  const onMissingAuthentication = useCallback(() => {
    if (prompt === 'none') {
      // not logged in, and prompt is "none".
      handleErrorRedirect(
        searchParams,
        new OAuthClientError(
          'login_required',
          'User is not logged in, and prompt was set to none',
        ),
      )
    }
  }, [searchParams, prompt])

  const isFramed = useFramebuster()
  if (prompt === 'login') {
    maxAge = 0
  }
  return (
    <ApplicationSessionManager
      maxAge={maxAge}
      onMissingExpectedAuthentication={onMissingAuthentication}
      appId={clientId}
    >
      {!isFramed && props.children}
    </ApplicationSessionManager>
  )
}

export default AppInitializer
