import { useCallback, useEffect, useRef } from 'react'
import { atom, useAtom } from 'jotai'
import UniversalCookies from 'universal-cookie'

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
  const cookies = new UniversalCookies()
  const prefs = cookies.get(COOKIES_AGREEMENT_COOKIE_KEY, {
    doNotParse: true,
  }) as string | undefined
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

// Initialize with allowNone so the atom is SSR-safe. The actual cookie value
// is synced on the client via useEffect inside useCookiePreferences.
const cookiePreferencesAtom = atom<CookiePreference>(allowNone)

export const useCookiePreferences = (): [
  CookiePreference,
  (pref: CookiePreference) => void,
] => {
  const [cookiePreferences, setCookiePreferencesAtomValue] = useAtom(
    cookiePreferencesAtom,
  )

  // On first client mount, sync the atom with the actual cookie value.
  const hasSyncedRef = useRef(false)
  useEffect(() => {
    if (!hasSyncedRef.current) {
      hasSyncedRef.current = true
      const current = getCurrentCookiePreferences()
      setCookiePreferencesAtomValue(current)
    }
  }, [setCookiePreferencesAtomValue])

  const setCookiePreferences = useCallback(
    (prefs: CookiePreference) => {
      if (!prefs.functionalAllowed) {
        localStorage.clear()
        sessionStorage.clear()
      }

      const current = new Date()
      const nextYear = new Date()
      nextYear.setFullYear(current.getFullYear() + 1)
      const hostname = window.location.hostname.toLowerCase()
      const cookies = new UniversalCookies()
      cookies.set(COOKIES_AGREEMENT_COOKIE_KEY, prefs, {
        path: '/',
        expires: nextYear,
        domain: hostname.endsWith('.synapse.org') ? 'synapse.org' : undefined,
      })

      setCookiePreferencesAtomValue(prefs)
    },
    [setCookiePreferencesAtomValue],
  )
  return [cookiePreferences, setCookiePreferences]
}
