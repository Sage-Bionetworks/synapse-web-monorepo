import { useHistory } from 'react-router-dom'
import {
  ACCOUNT_SITE_PROMPTED_FOR_LOGIN_COOKIE_KEY,
  LAST_PLACE_LOCALSTORAGE_KEY,
} from '../SynapseConstants'
import { useEffect, useState } from 'react'
import UniversalCookies from 'universal-cookie'

export function storeLastPlace() {
  // save current route (so that we can go back here after SSO)
  localStorage.setItem(LAST_PLACE_LOCALSTORAGE_KEY, window.location.href)
}
const cookies = new UniversalCookies()
export const ONE_SAGE_REDIRECT_COOKIE_KEY =
  'org.sagebionetworks.cookies.redirect-after-login'

const getCookieDomain = () => {
  return window.location.hostname.toLowerCase().endsWith('.synapse.org')
    ? '.synapse.org'
    : undefined
}

export function storeRedirectURLForOneSageLoginAndGotoURL(href: string) {
  // save current URL in a cookie that One Sage will use to send you back to the correct page
  const twoHoursFromNow = new Date()
  twoHoursFromNow.setTime(twoHoursFromNow.getTime() + 60 * 60 * 1000)

  cookies.set(ONE_SAGE_REDIRECT_COOKIE_KEY, window.location.href, {
    path: '/',
    domain: getCookieDomain(),
    expires: twoHoursFromNow,
  })
  setTimeout(() => {
    window.location.assign(href)
  }, 10)
}

export function processRedirectURLInOneSage() {
  // PORTALS-3299 : Indicate that we have completed the login workflow (cookie expires in a minute) to break out of a cycle
  const expireDate = new Date()
  expireDate.setMinutes(expireDate.getMinutes() + 1)
  cookies.set(ACCOUNT_SITE_PROMPTED_FOR_LOGIN_COOKIE_KEY, 'true', {
    path: '/',
    expires: expireDate,
    domain: getCookieDomain(),
  })

  if (cookies.get(ONE_SAGE_REDIRECT_COOKIE_KEY)) {
    const href = cookies.get(ONE_SAGE_REDIRECT_COOKIE_KEY)
    // instead of removing, set the expiration to 10 seconds to avoid race condition with SageAccountWeb LoggedInRedirector
    const tenSecondsFromNow = new Date()
    tenSecondsFromNow.setTime(tenSecondsFromNow.getTime() + 10 * 1000)
    cookies.set(ONE_SAGE_REDIRECT_COOKIE_KEY, href, {
      path: '/',
      domain: getCookieDomain(),
      expires: tenSecondsFromNow,
    })

    window.location.replace(href)
    return true
  }
  //else
  return false
}

/**
 * Returns to the route in localStorage saved when `storeLastPlace` was called,
 * typically before jumping from an app to OneSage for authentication, or before
 * jumping from OneSage to an external IdP (e.g. Google) for authentication.
 *
 * @return boolean indicating if a redirect occurred
 */
export function restoreLastPlace(
  history?: ReturnType<typeof useHistory>,
  fallbackRedirectUrl?: string,
): boolean {
  // go back to original route after successful SSO login
  const originalUrl = localStorage.getItem(LAST_PLACE_LOCALSTORAGE_KEY)
  localStorage.removeItem(LAST_PLACE_LOCALSTORAGE_KEY)
  const redirectUrl = originalUrl ?? fallbackRedirectUrl
  if (
    redirectUrl &&
    window.location.href != redirectUrl &&
    window.location.href.substring(window.location.origin.length) != redirectUrl
  ) {
    if (history) {
      if (redirectUrl.startsWith(window.location.origin)) {
        history.replace(redirectUrl.substring(window.location.origin.length))
      } else {
        history.replace(redirectUrl)
      }
    } else {
      window.location.replace(redirectUrl)
    }
    return true
  }
  return false
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
