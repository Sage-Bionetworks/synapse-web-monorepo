import { renderHook } from '@testing-library/react'
import { useCsrfToken } from './useCsrfToken'

describe('useCsrfToken', () => {
  it('should generate a CSRF token', () => {
    const { result } = renderHook(() => useCsrfToken())

    expect(result.current).toBeDefined()
    expect(typeof result.current).toBe('string')
    expect(result.current.length).toBeGreaterThan(0)
  })

  it('should return the same token across re-renders', () => {
    const { result, rerender } = renderHook(() => useCsrfToken())

    const firstToken = result.current
    rerender()

    expect(result.current).toBe(firstToken)
  })

  it('should generate different tokens for different hook instances', () => {
    const { result: result1 } = renderHook(() => useCsrfToken())
    const { result: result2 } = renderHook(() => useCsrfToken())

    expect(result1.current).not.toBe(result2.current)
  })

  it('should use crypto.getRandomValues when available', () => {
    const { result } = renderHook(() => useCsrfToken())

    // If crypto is available, the token should be 64 characters (32 bytes in hex)
    if (window.crypto && 'getRandomValues' in window.crypto) {
      expect(result.current).toHaveLength(64)
    }
  })
})
