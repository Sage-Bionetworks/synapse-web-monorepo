import RedirectDialog, {
  redirectInstructionsMap,
} from './portal-components/RedirectDialog'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import {
  ApplicationSessionManager,
  SynapseClient,
  SynapseConstants,
  useFramebuster,
} from 'synapse-react-client'
import { useLogInDialogContext } from './LogInDialogContext'

const COOKIE_CONFIG_KEY = 'org.sagebionetworks.security.cookies.portal.config'

/** On mount, update the document title and meta description using data from the portal config */
function useSetDocumentMetadataFromConfig() {
  useEffect(() => {
    if (document.title !== import.meta.env.VITE_PORTAL_NAME) {
      document.title = import.meta.env.VITE_PORTAL_NAME
    }
    document
      .querySelector('meta[name="description"]')!
      .setAttribute('content', import.meta.env.VITE_PORTAL_DESCRIPTION)
  }, [])
}

function AppInitializer(props: React.PropsWithChildren<Record<never, never>>) {
  const [cookies, setCookie] = useCookies([COOKIE_CONFIG_KEY])
  const [redirectUrl, setRedirectUrl] = useState<string | undefined>(undefined)
  const { showLoginDialog, setShowLoginDialog } = useLogInDialogContext()

  const isFramed = useFramebuster()

  useSetDocumentMetadataFromConfig()

  useEffect(() => {
    /**
     * PORTALS-490: Set Synapse callback cookie
     * Will attempt to set a .synapse.org domain cookie that has enough information to lead the user
     * back to this portal after visiting www.synapse.org.
     */
    function updateSynapseCallbackCookie(ev: MouseEvent) {
      if (!cookies) {
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
            hostname.toLowerCase() === 'www.synapse.org' ||
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
      if (
        ev.target instanceof HTMLButtonElement ||
        ev.target instanceof HTMLAnchorElement
      ) {
        const el = ev.target as HTMLElement
        if (el.classList.contains(SynapseConstants.SRC_SIGN_IN_CLASS)) {
          if (!showLoginDialog) {
            setShowLoginDialog(true)
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

    window.addEventListener('click', updateSynapseCallbackCookie)

    // Clean up the global listener on component unmount.
    return () => {
      window.removeEventListener('click', updateSynapseCallbackCookie)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run only on mount
  }, [])

  return (
    <ApplicationSessionManager
      downloadCartPageUrl={'/DownloadCart'}
      onResetSessionComplete={() => {
        setShowLoginDialog(false)
      }}
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
