import { useCallback } from 'react'
import { atom, useAtom } from 'jotai'
import UniversalCookies from 'universal-cookie'

const cookies = new UniversalCookies()

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

export const getCurrentCookiePreferences = () => {
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
export const COOKIES_AGREEMENT_COOKIE_KEY =
  'org.sagebionetworks.security.cookies.portal.preference'

const cookiePreferencesAtom = atom<CookiePreference>(
  getCurrentCookiePreferences(),
)

export const useCookiePreferences = (): [
  CookiePreference,
  (pref: CookiePreference) => void,
] => {
  const [cookiePreferences, setCookiePreferencesAtomValue] = useAtom(
    cookiePreferencesAtom,
  )
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
