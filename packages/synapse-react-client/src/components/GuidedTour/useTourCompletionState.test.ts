import {
  allowAll,
  allowNone,
  COOKIES_AGREEMENT_COOKIE_KEY,
  CookiePreference,
} from '@/utils/hooks/useCookiePreferences'
import { act, renderHook } from '@testing-library/react'
import {
  getGuidedTourStorageKey,
  useTourCompletionState,
} from './useTourCompletionState'

function setCookiePreferences(preference: CookiePreference) {
  document.cookie = `${COOKIES_AGREEMENT_COOKIE_KEY}=${encodeURIComponent(
    JSON.stringify(preference),
  )}`
}

const STORAGE_KEY = getGuidedTourStorageKey('nf', 'nf-welcome', 1)

describe('useTourCompletionState', () => {
  afterEach(() => {
    localStorage.clear()
    document.cookie = `${COOKIES_AGREEMENT_COOKIE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
  })

  it('builds a storage key from portal key, tour id, and version', () => {
    expect(STORAGE_KEY).toBe('nf-guided-tour-nf-welcome-v1')
  })

  it('reads an existing completion record', () => {
    localStorage.setItem(STORAGE_KEY, 'completed')

    const { result } = renderHook(() => useTourCompletionState(STORAGE_KEY))

    expect(result.current[0]).toBe('completed')
  })

  it('persists to localStorage when functional cookies are allowed', () => {
    setCookiePreferences(allowAll)
    const { result } = renderHook(() => useTourCompletionState(STORAGE_KEY))

    act(() => {
      result.current[1]('dismissed')
    })

    expect(result.current[0]).toBe('dismissed')
    expect(localStorage.getItem(STORAGE_KEY)).toBe('dismissed')
  })

  it('does not write to localStorage without functional cookie consent', () => {
    setCookiePreferences(allowNone)
    const { result } = renderHook(() => useTourCompletionState(STORAGE_KEY))

    act(() => {
      result.current[1]('completed')
    })

    expect(result.current[0]).toBe('completed')
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
  })
})
