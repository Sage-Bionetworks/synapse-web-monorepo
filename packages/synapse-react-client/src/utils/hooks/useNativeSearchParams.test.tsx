import { renderHook, act } from '@testing-library/react'
import { useNativeSearchParams } from './useNativeSearchParams'

describe('useNativeSearchParams tests', () => {
  const paramKey = 'testParam'

  beforeEach(() => {
    const url = new URL(window.location.href)
    url.search = ''
    window.history.replaceState({}, '', url.toString())
  })

  it('returns the param value if present in URL', () => {
    const url = new URL(window.location.href)
    url.searchParams.set(paramKey, '123')
    window.history.replaceState({}, '', url.toString())

    const { result } = renderHook(() => useNativeSearchParams(paramKey))
    const [value] = result.current
    expect(value).toBe('123')
  })

  it('returns null if param is not in URL', () => {
    const { result } = renderHook(() => useNativeSearchParams(paramKey))
    const [value] = result.current
    expect(value).toBeNull()
  })

  it('updates state on popstate event', () => {
    const { result } = renderHook(() => useNativeSearchParams(paramKey))

    act(() => {
      const url = new URL(window.location.href)
      url.searchParams.set(paramKey, 'popstate-value')
      window.history.replaceState({}, '', url.toString())
      window.dispatchEvent(new PopStateEvent('popstate'))
    })

    const [value] = result.current
    expect(value).toBe('popstate-value')
  })

  it('updates state on pushstate event', () => {
    const { result } = renderHook(() => useNativeSearchParams(paramKey))

    act(() => {
      const url = new URL(window.location.href)
      url.searchParams.set(paramKey, 'pushstate-value')
      window.history.pushState({}, '', url.toString())
      window.dispatchEvent(new Event('pushstate'))
    })

    const [value] = result.current
    expect(value).toBe('pushstate-value')
  })

  it('updates state on replacestate event', () => {
    const { result } = renderHook(() => useNativeSearchParams(paramKey))

    act(() => {
      const url = new URL(window.location.href)
      url.searchParams.set(paramKey, 'replacestate-value')
      window.history.replaceState({}, '', url.toString())
      window.dispatchEvent(new Event('replacestate'))
    })

    const [value] = result.current
    expect(value).toBe('replacestate-value')
  })

  it('removes param from URL and state when set to null', () => {
    const { result } = renderHook(() => useNativeSearchParams(paramKey))
    act(() => {
      const [, setParam] = result.current
      setParam('remove-me')
    })
    act(() => {
      const [, setParam] = result.current
      setParam(null)
    })
    const [value] = result.current
    expect(value).toBeNull()
    const urlParams = new URLSearchParams(window.location.search)
    expect(urlParams.has(paramKey)).toBe(false)
  })
})
