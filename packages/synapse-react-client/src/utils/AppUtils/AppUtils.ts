import { useHistory } from 'react-router-dom'
import { LAST_PLACE_LOCALSTORAGE_KEY } from '../SynapseConstants'
import { useEffect, useState } from 'react'
import UniversalCookies from 'universal-cookie'

export function storeLastPlace() {
  // save current route (so that we can go back here after SSO)
  localStorage.setItem(LAST_PLACE_LOCALSTORAGE_KEY, window.location.href)
}
const cookies = new UniversalCookies()
export const ONE_SAGE_REDIRECT_COOKIE_KEY =
  'org.sagebionetworks.cookies.redirect-after-login'

export function storeRedirectURLForOneSageLogin() {
  // save current URL in a cookie that One Sage will use to send you back to the correct page
  const domainValue = window.location.hostname
    .toLowerCase()
    .endsWith('.synapse.org')
    ? '.synapse.org'
    : undefined

  const twoHoursFromNow = new Date()
  twoHoursFromNow.setTime(twoHoursFromNow.getTime() + 60 * 60 * 1000)

  cookies.set(ONE_SAGE_REDIRECT_COOKIE_KEY, window.location.href, {
    path: '/',
    domain: domainValue,
    expires: twoHoursFromNow,
  })
}

export function processRedirectURLInOneSage() {
  if (cookies.get(ONE_SAGE_REDIRECT_COOKIE_KEY)) {
    const href = cookies.get(ONE_SAGE_REDIRECT_COOKIE_KEY)
    cookies.remove(ONE_SAGE_REDIRECT_COOKIE_KEY)
    window.location.assign(href)
    return true
  }
  //else
  return false
}

export function restoreLastPlace(
  history?: ReturnType<typeof useHistory>,
  fallbackRedirectUrl?: string,
) {
  // go back to original route after successful SSO login
  const originalUrl = localStorage.getItem(LAST_PLACE_LOCALSTORAGE_KEY)
  localStorage.removeItem(LAST_PLACE_LOCALSTORAGE_KEY)
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
