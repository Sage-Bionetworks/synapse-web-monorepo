import { useHistory } from 'react-router-dom'
import { POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY } from '../SynapseConstants'
import { useEffect, useState } from 'react'

export function preparePostSSORedirect() {
  // save current route (so that we can go back here after SSO)
  localStorage.setItem(
    POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY,
    window.location.href,
  )
}

export function redirectAfterSSO(
  history?: ReturnType<typeof useHistory>,
  fallbackRedirectUrl?: string,
) {
  // go back to original route after successful SSO login
  const originalUrl = localStorage.getItem(
    POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY,
  )
  localStorage.removeItem(POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY)
  const redirectUrl = originalUrl ?? fallbackRedirectUrl
  if (redirectUrl) {
    if (history) {
      if (redirectUrl.startsWith(window.location.origin)) {
        history.replace(redirectUrl.substring(window.location.origin.length))
      } else {
        history.replace(redirectUrl)
      }
    } else {
      window.location.replace(redirectUrl)
    }
  }
}

/**
 * Hook to detect if the current page is framed (i.e. in an iframe). If so, it will attempt to break out of the frame.
 * See SWC-6294
 * @returns true if the page is framed and not sandboxed
 */
export function useFramebuster(): boolean {
  const [isFramed, setIsFramed] = useState(false)
  useEffect(() => {
    // SWC-6294: on mount, detect and attempt a client-side framebuster (mitigation only, easily bypassed by attacker)
    if (window.top && window.top !== window) {
      // If not sandboxed, make sure not to show any portal content (in case they block window unload via onbeforeunload)
      setIsFramed(true)
      // If sandboxed, this call will cause an uncaught js exception and portal will not load.
      window.top.location = window.location
    }
  }, [])
  return isFramed
}
