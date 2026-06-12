import { useCallback, useMemo } from 'react'
import { useCookieValue } from '@react-hookz/web/useCookieValue/index.js'
import Cookies from 'js-cookie'

export type CookiePreference = {
  functionalAllowed: boolean
  analyticsAllowed: boolean
}

export const allowAll: CookiePreference = {
  functionalAllowed: true,
  analyticsAllowed: true,
}
export const allowNone: CookiePreference = {
  functionalAllowed: false,
  analyticsAllowed: false,
}

export const COOKIES_AGREEMENT_COOKIE_KEY =
  'org.sagebionetworks.security.cookies.portal.preference'

/**
 * Read the current cookie preferences from the browser cookie jar.
 * This must only be called in a browser environment (not during SSR).
 */
export const getCurrentCookiePreferences = (): CookiePreference => {
  const prefs = Cookies.get(COOKIES_AGREEMENT_COOKIE_KEY)
  let cookiePreference = allowNone
  try {
    if (prefs != undefined) {
      cookiePreference = JSON.parse(prefs) as CookiePreference
    }
  } catch (err) {
    console.error(
      `Failed to parse CookiePreference from value, falling back to allow none. value=${prefs}`,
    )
  }
  return cookiePreference
}

export const useCookiePreferences = (): [
  CookiePreference,
  (pref: CookiePreference) => void,
] => {
  const [cookieValue, setCookie, removeCookie] = useCookieValue(
    COOKIES_AGREEMENT_COOKIE_KEY,
    {
      path: '/',
      expires: 365,
      domain:
        typeof window !== 'undefined' &&
        window.location.hostname.toLowerCase().endsWith('.synapse.org')
          ? 'synapse.org'
          : undefined,
    },
  )

  const cookiePreferences = useMemo(() => {
    if (cookieValue) {
      try {
        return JSON.parse(cookieValue) as CookiePreference
      } catch (err) {
        console.error(
          `Failed to parse CookiePreference from cookie value, falling back to allow none and deleting the cookie. value=${cookieValue}`,
        )
        removeCookie()
        return allowNone
      }
    } else {
      return allowNone
    }
  }, [cookieValue, removeCookie])

  const setCookiePreferences = useCallback(
    (prefs: CookiePreference) => {
      if (!prefs.functionalAllowed) {
        localStorage.clear()
        sessionStorage.clear()
      }

      setCookie(JSON.stringify(prefs))
    },
    [setCookie],
  )
  return [cookiePreferences, setCookiePreferences]
}
