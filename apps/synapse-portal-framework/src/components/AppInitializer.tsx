import * as SynapseClient from 'synapse-react-client/synapse-client/SynapseClient'
import { PropsWithChildren, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
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

const COOKIE_CONFIG_KEY = 'org.sagebionetworks.security.cookies.portal.config'

function AppInitializer(props: PropsWithChildren<Record<never, never>>) {
  const [cookiePreferences] = useCookiePreferences()
  const [cookies, setCookie] = useCookies([COOKIE_CONFIG_KEY])
  const [redirectUrl, setRedirectUrl] = useState<string | undefined>(undefined)

  const isFramed = useFramebuster()
  useGoogleAnalytics()
  const oneSageURL = useOneSageURL()
  useEffect(() => {
    /**
     * If this is an anchor with the SRC-SIGN-IN-CLASS CSS class, then go to One Sage to sign in.
     * In addition...
     * PORTALS-490: Set Synapse callback cookie if the user allowed the creation of functional cookies
     * Will attempt to set a .synapse.org domain cookie that has enough information to lead the user
     * back to this portal after visiting www.synapse.org.
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
      if (!cookies || !cookiePreferences.functionalAllowed) {
        return
      }
      let isInvokingDownloadTable: boolean = false
      if (ev.target instanceof HTMLAnchorElement) {
        const anchorElement = ev.target
        isInvokingDownloadTable =
          anchorElement.text === SynapseConstants.DOWNLOAD_FILES_MENU_TEXT
        if (anchorElement.href) {
          const { hostname } = new URL(anchorElement.href)
          if (
            KNOWN_SYNAPSE_ORG_URLS.includes(hostname.toLowerCase()) ||
            redirectInstructionsMap[anchorElement.href]
          ) {
            // && anchorElement.target !== '_blank') {  // should we skip the dialog if opening in a new window?
            ev.preventDefault()
            if (!redirectUrl) {
              setRedirectUrl(anchorElement.href)
            }
          }
        }
      }

      let name = ''
      let icon = ''
      const logoImgElement = document.querySelector('#header-logo-image')
      if (logoImgElement) {
        let imageSrc: string | null = logoImgElement.getAttribute('src')
        if (imageSrc) {
          if (!imageSrc.toLowerCase().startsWith('http')) {
            imageSrc = SynapseClient.getRootURL() + imageSrc.substring(1)
          }
          icon = imageSrc
        }
      }
      const footerLinkElement = document.querySelector('#footer-logo-link')
      if (footerLinkElement && footerLinkElement.textContent) {
        name = footerLinkElement.textContent
      }
      const cookieValue = {
        isInvokingDownloadTable,
        callbackUrl: window.location.href,
        logoUrl: icon,
        portalName: name,
      }
      // expire after 10 seconds
      const domainValue = window.location.hostname
        .toLowerCase()
        .endsWith('.synapse.org')
        ? '.synapse.org'
        : undefined
      // Cookies provider exists above AppInitializer so the cookies prop will exist
      setCookie(COOKIE_CONFIG_KEY, JSON.stringify(cookieValue), {
        path: '/',
        domain: domainValue,
        maxAge: 20,
      })
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
      downloadCartPageUrl={'/DownloadCart'}
      appId={import.meta.env.VITE_PORTAL_KEY}
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
