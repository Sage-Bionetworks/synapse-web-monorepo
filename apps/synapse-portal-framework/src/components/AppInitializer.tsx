import { PropsWithChildren, useEffect, useState } from 'react'
import useGoogleAnalytics from 'synapse-react-client/utils/analytics/useGoogleAnalytics'
import ApplicationSessionManager from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionManager'
import RedirectDialog, { redirectInstructionsMap } from './RedirectDialog'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { useCookiePreferences } from 'synapse-react-client/utils/hooks/useCookiePreferences'
import {
  storeRedirectURLForOneSageLoginAndGotoURL,
  useFramebuster,
} from 'synapse-react-client/utils/AppUtils/index'
import { useOneSageURL } from 'synapse-react-client/utils/hooks/useOneSageURL'
import { KNOWN_SYNAPSE_ORG_URLS } from 'synapse-react-client/utils/functions/getEndpoint'
import { usePortalContext } from './PortalContext'

export type AppInitializerProps = PropsWithChildren<{
  /** The default realm ID to use for the application. Anonymous users will use this realm. */
  defaultRealmId?: string
  requireAuthentication?: boolean
}>

function AppInitializer(props: AppInitializerProps) {
  const { requireAuthentication, defaultRealmId } = props
  const { portalKey } = usePortalContext()
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
      const target = ev.target as Element

      // Use closest() so that clicks on child elements (e.g. SVG icons inside a
      // button) still trigger sign-in when the button carries SRC_SIGN_IN_CLASS.
      if (target.closest?.(`.${SynapseConstants.SRC_SIGN_IN_CLASS}`)) {
        storeRedirectURLForOneSageLoginAndGotoURL(oneSageURL.toString())
      }

      const anchorElement = target.closest?.('a')
      if (anchorElement && anchorElement.href) {
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
      appId={portalKey}
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
