import { useCallback } from 'react'
import { atom, useAtom } from 'jotai'

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
  const prefs = localStorage.getItem(COOKIES_AGREEMENT_LOCALSTORAGE_KEY)
  let cookiePreference = allowNone
  try {
    if (prefs != null) {
      cookiePreference = JSON.parse(prefs) as CookiePreference
    }
  } catch (err) {
    console.error(
      `Failed to parse CookiePreference from value, falling back to allow none. value=${prefs}`,
    )
  }

  return cookiePreference
}
export const COOKIES_AGREEMENT_LOCALSTORAGE_KEY =
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
