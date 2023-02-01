import SynapseRedirectDialog from 'portal-components/SynapseRedirectDialog'
import React, {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useCookies } from 'react-cookie'
import { SynapseClient, SynapseConstants } from 'synapse-react-client'
import { DOWNLOAD_FILES_MENU_TEXT } from 'synapse-react-client/dist/containers/table/SynapseTableConstants'
import { SynapseContextProvider } from 'synapse-react-client/dist/utils/SynapseContext'
import { UserProfile } from 'synapse-react-client/dist/utils/synapseTypes'
import useAnalytics from 'useAnalytics'
import docTitleConfig from './config/docTitleConfig.json'
import palette from './config/paletteConfig'

export type AppInitializerState = {
  token?: string
  showLoginDialog: boolean
  synapseRedirectUrl?: string
  userProfile: UserProfile | undefined
  // delay render until get session is called, o.w. theres an uneccessary refresh right
  // after page load
  hasCalledGetSession: boolean
}

export type SignInProps = {
  userProfile: UserProfile | undefined
  resetSession: Function
  getSession: Function
  showLoginDialog: boolean
  onSignIn: Function
  handleCloseLoginDialog: Function
}

const COOKIE_CONFIG_KEY = 'org.sagebionetworks.security.cookies.portal.config'

/** On mount, update the document title and meta description using data from the portal config */
function useSetDocumentMetadataFromConfig() {
  useEffect(() => {
    if (document.title !== docTitleConfig.name) {
      document.title = docTitleConfig.name
    }
    document
      .querySelector('meta[name="description"]')!
      .setAttribute('content', docTitleConfig.description)
  }, [])
}

/**
 * State and helpers for managing a user session in the portal
 * @param setShowLoginDialog
 * @returns
 */
function useSession(
  setShowLoginDialog: React.Dispatch<SetStateAction<boolean>>,
) {
  const [token, setToken] = useState<string | undefined>(undefined)
  const [hasCalledGetSession, setHasCalledGetSession] = useState(false)
  const [userProfile, setUserProfile] = useState<UserProfile | undefined>(
    undefined,
  )

  const initAnonymousUserState = useCallback(() => {
    SynapseClient.signOut(() => {
      // reset token and user profile
      setToken(undefined)
      setUserProfile(undefined)
      setHasCalledGetSession(true)
    })
  }, [])

  const getSession = useCallback(async () => {
    let token
    try {
      token = await SynapseClient.getAccessTokenFromCookie()
      if (!token) {
        initAnonymousUserState()
        return
      }
    } catch (e) {
      console.error('Unable to get the access token: ', e)
      initAnonymousUserState()
      return
    }
    try {
      setToken(token)
      setHasCalledGetSession(true)
      // get user profile
      const userProfile = await SynapseClient.getUserProfile(token)
      if (userProfile.profilePicureFileHandleId) {
        userProfile.clientPreSignedURL = `https://www.synapse.org/Portal/filehandleassociation?associatedObjectId=${userProfile.ownerId}&associatedObjectType=UserProfileAttachment&fileHandleId=${userProfile.profilePicureFileHandleId}`
      }
      setUserProfile(userProfile)
    } catch (e) {
      console.error('Error on getSession: ', e)
      // intentionally calling sign out because there token could be stale so we want
      // the stored session to be cleared out.
      SynapseClient.signOut(() => {
        // PORTALS-2293: if the token was invalid (caused an error), reload the app to ensure all children
        // are loading as the anonymous user
        window.location.reload()
      })
    }
  }, [initAnonymousUserState])

  const resetSession = useCallback(() => {
    SynapseClient.signOut(getSession)
    setShowLoginDialog(false)
  }, [getSession, setShowLoginDialog])

  return {
    token,
    userProfile,
    hasCalledGetSession,
    getSession,
    resetSession,
  }
}

function AppInitializer(props: { children?: React.ReactNode }) {
  const [cookies, setCookie] = useCookies([COOKIE_CONFIG_KEY])
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [synapseRedirectUrl, setSynapseRedirectUrl] = useState<
    string | undefined
  >(undefined)
  const [isFramed, setIsFramed] = useState(false)

  const { token, userProfile, getSession, hasCalledGetSession, resetSession } =
    useSession(setShowLoginDialog)

  useEffect(() => {
    // SWC-6294: on mount, detect and attempt a client-side framebuster (mitigation only, easily bypassed by attacker)
    if (window.top && window.top !== window) {
      // If not sandboxed, make sure not to show any portal content (in case they block window unload via onbeforeunload)
      setIsFramed(true)
      // If sandboxed, this call will cause an uncaught js exception and portal will not load.
      window.top.location = window.location
    }
  }, [])
  
  /** Call getSession on mount */
  useEffect(() => {
    getSession()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useSetDocumentMetadataFromConfig()

  useAnalytics()

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
        const anchorElement = ev.target as HTMLAnchorElement
        isInvokingDownloadTable =
          anchorElement.text === DOWNLOAD_FILES_MENU_TEXT
        if (anchorElement.href) {
          const { hostname } = new URL(anchorElement.href)
          if (hostname.toLowerCase() === 'www.synapse.org') {
            // && anchorElement.target !== '_blank') {  // should we skip the dialog if opening in a new window?
            ev.preventDefault()
            if (!synapseRedirectUrl) {
              setSynapseRedirectUrl(anchorElement.href)
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
        let imageSrc = logoImgElement.getAttribute('src')
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

    // Technically, the AppInitializer is only mounted once during the portal app lifecycle.
    // But it's best practice to clean up the global listener on component unmount.

    return () => {
      window.removeEventListener('click', updateSynapseCallbackCookie)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run only on mount
  }, [])

  useEffect(() => {
    // on first time, also check for the SSO code
    SynapseClient.detectSSOCode()
  }, [])

  const onSignInClicked = useCallback(() => {
    setShowLoginDialog(true)
  }, [])

  const handleCloseLoginDialog = React.useCallback(() => {
    setShowLoginDialog(false)
  }, [])

  const clonedChildren = useMemo(
    () =>
      React.Children.map(props.children, (child: any) => {
        if (!child) {
          return false
        } else {
          const props: SignInProps = {
            showLoginDialog: showLoginDialog,
            getSession: getSession,
            onSignIn: onSignInClicked,
            userProfile: userProfile,
            resetSession: resetSession,
            handleCloseLoginDialog: handleCloseLoginDialog,
          }
          return React.cloneElement(child, props)
        }
      }),
    [
      getSession,
      handleCloseLoginDialog,
      onSignInClicked,
      props.children,
      resetSession,
      showLoginDialog,
      userProfile,
    ],
  )

  if (!hasCalledGetSession) {
    // Don't render anything until the session has been established
    // Otherwise we may end up reloading components and making duplicate requests
    return <></>
  }
  return (
    <SynapseContextProvider
      synapseContext={{
        accessToken: token,
        isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
        utcTime: SynapseClient.getUseUtcTimeFromCookie(),
        downloadCartPageUrl: '/DownloadCart'
      }}
      theme={{
        palette
      }}
    >
      {!isFramed && clonedChildren}
      <SynapseRedirectDialog
        onCancelRedirect={() => {
          setSynapseRedirectUrl(undefined)
        }}
        synapseRedirectUrl={synapseRedirectUrl}
      />
    </SynapseContextProvider>
  )
}

export default AppInitializer
