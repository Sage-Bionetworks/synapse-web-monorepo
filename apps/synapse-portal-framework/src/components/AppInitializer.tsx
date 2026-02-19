import { PropsWithChildren, useEffect, useState } from 'react'
import useGoogleAnalytics from 'synapse-react-client/utils/analytics/useGoogleAnalytics'
import ApplicationSessionManager from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionManager'
import RedirectDialog, { redirectInstructionsMap } from './RedirectDialog'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { useCookiePreferences } from 'synapse-react-client/utils/hooks/useCookiePreferences'
import {
  storeRedirectURLForOneSageLoginAndGotoURL,
  useFramebuster,
} from 'synapse-react-client/utils/AppUtils'
import { useOneSageURL } from 'synapse-react-client/utils/hooks/useOneSageURL'
import { KNOWN_SYNAPSE_ORG_URLS } from 'synapse-react-client/utils/functions/getEndpoint'

export type AppInitializerProps = PropsWithChildren<{
  /** The default realm ID to use for the application. Anonymous users will use this realm. */
  defaultRealmId?: string
  requireAuthentication?: boolean
}>

function AppInitializer(props: AppInitializerProps) {
  const { requireAuthentication, defaultRealmId } = props
  const [cookiePreferences] = useCookiePreferences()
  const [redirectUrl, setRedirectUrl] = useState<string | undefined>(undefined)

  const isFramed = useFramebuster()
  useGoogleAnalytics()
  const oneSageURL = useOneSageURL()
  useEffect(() => {
    /**
     * If this is an anchor with the SRC-SIGN-IN-CLASS CSS class, then go to One Sage to sign in.
     */
    function globalClickHandler(ev: MouseEvent) {
      if (
        ev.target instanceof HTMLButtonElement ||
        ev.target instanceof HTMLAnchorElement
      ) {
        const el = ev.target as HTMLElement
        if (el.classList.contains(SynapseConstants.SRC_SIGN_IN_CLASS)) {
          storeRedirectURLForOneSageLoginAndGotoURL(oneSageURL.toString())
        }
      }

      if (ev.target instanceof HTMLAnchorElement) {
        const anchorElement = ev.target
        if (anchorElement.href) {
          const { hostname } = new URL(anchorElement.href)
          if (
            KNOWN_SYNAPSE_ORG_URLS.includes(hostname.toLowerCase()) ||
            redirectInstructionsMap[anchorElement.href] ||
            redirectInstructionsMap[hostname]
          ) {
            // && anchorElement.target !== '_blank') {  // should we skip the dialog if opening in a new window?
            ev.preventDefault()
            if (!redirectUrl) {
              setRedirectUrl(anchorElement.href)
            }
          }
        }
      }
    }
    window.addEventListener('click', globalClickHandler)

    // Clean up the global listener on component unmount.
    return () => {
      window.removeEventListener('click', globalClickHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run only on mount
  }, [cookiePreferences])

  return (
    <ApplicationSessionManager
      defaultRealmId={defaultRealmId}
      downloadCartPageUrl={'/DownloadCart'}
      appId={import.meta.env.VITE_PORTAL_KEY}
      requireAuthentication={requireAuthentication}
    >
      {!isFramed && props.children}
      <RedirectDialog
        onCancelRedirect={() => {
          setRedirectUrl(undefined)
        }}
        redirectUrl={redirectUrl}
      />
    </ApplicationSessionManager>
  )
}

export default AppInitializer
