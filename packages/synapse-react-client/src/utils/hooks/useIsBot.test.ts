import { renderHook } from '@testing-library/react'
import { useIsBot } from './useIsBot'

describe('useIsBot', () => {
  const originalNavigator = global.navigator

  afterEach(() => {
    // Restore original navigator after each test
    Object.defineProperty(global, 'navigator', {
      value: originalNavigator,
      configurable: true,
      writable: true,
    })
  })

  it('returns false for regular browser user agents', () => {
    Object.defineProperty(global, 'navigator', {
      value: {
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
      configurable: true,
      writable: true,
    })

    const { result } = renderHook(() => useIsBot())
    expect(result.current).toBe(false)
  })

  it('returns true for Googlebot', () => {
    Object.defineProperty(global, 'navigator', {
      value: {
        userAgent:
          'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      },
      configurable: true,
      writable: true,
    })

    const { result } = renderHook(() => useIsBot())
    expect(result.current).toBe(true)
  })

  it('returns true for Bingbot', () => {
    Object.defineProperty(global, 'navigator', {
      value: {
        userAgent:
          'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
      },
      configurable: true,
      writable: true,
    })

    const { result } = renderHook(() => useIsBot())
    expect(result.current).toBe(true)
  })

  it('returns true for user agents containing "crawler"', () => {
    Object.defineProperty(global, 'navigator', {
      value: {
        userAgent: 'SomeCrawler/1.0',
      },
      configurable: true,
      writable: true,
    })

    const { result } = renderHook(() => useIsBot())
    expect(result.current).toBe(true)
  })

  it('returns true for user agents containing "spider"', () => {
    Object.defineProperty(global, 'navigator', {
      value: {
        userAgent: 'Spider Bot 2.0',
      },
      configurable: true,
      writable: true,
    })

    const { result } = renderHook(() => useIsBot())
    expect(result.current).toBe(true)
  })

  it('returns false when navigator is undefined', () => {
    Object.defineProperty(global, 'navigator', {
      value: undefined,
      configurable: true,
      writable: true,
    })

    const { result } = renderHook(() => useIsBot())
    expect(result.current).toBe(false)
  })

  it('returns false when userAgent is empty', () => {
    Object.defineProperty(global, 'navigator', {
      value: {
        userAgent: '',
      },
      configurable: true,
      writable: true,
    })

    const { result } = renderHook(() => useIsBot())
    expect(result.current).toBe(false)
  })
})
