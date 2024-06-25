import { useCallback } from 'react'
import { atom, useAtomValue, useSetAtom } from 'jotai'

export const getCurrentCookiePreferences = () => {
  const prefs = localStorage.getItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY)
  const allowNone: CookiePreference = {
    functionalAllowed: false,
    analyticsAllowed: false,
  }
  return prefs != null ? (JSON.parse(prefs) as CookiePreference) : allowNone
}
export const COOKIES_AGREEMENT_LOCALSTORAGE_KEY =
  'org.sagebionetworks.security.cookies.portal.preference'

export type CookiePreference = {
  functionalAllowed: boolean
  analyticsAllowed: boolean
}

const cookiePreferencesAtom = atom<CookiePreference>(
  getCurrentCookiePreferences(),
)

export const useCookiePreferences = (): [
  CookiePreference,
  (pref: CookiePreference) => void,
] => {
  const cookiePreferences = useAtomValue(cookiePreferencesAtom)
  const setCookiePreferencesAtomValue = useSetAtom(cookiePreferencesAtom)
  const setCookiePreferences = useCallback(
    (prefs: CookiePreference) => {
      if (!prefs.functionalAllowed) {
        localStorage.clear()
        sessionStorage.clear()
      }
      localStorage.setItem(
        COOKIES_AGREEMENT_LOCALSTORAGE_KEY,
        JSON.stringify(prefs),
      )
      setCookiePreferencesAtomValue(prefs)
    },
    [setCookiePreferencesAtomValue],
  )
  return [cookiePreferences, setCookiePreferences]
}
