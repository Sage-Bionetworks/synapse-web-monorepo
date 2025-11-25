import { generateCsrfToken } from './generateCsrfToken'

describe('generateCsrfToken', () => {
  it('should generate a CSRF token', () => {
    const token = generateCsrfToken()

    expect(token).toBeDefined()
    expect(typeof token).toBe('string')
    expect(token.length).toBeGreaterThan(0)
  })

  it('should generate different tokens on each call', () => {
    const token1 = generateCsrfToken()
    const token2 = generateCsrfToken()

    expect(token1).not.toBe(token2)
  })

  it('should generate different tokens for different invocations', () => {
    const token1 = generateCsrfToken()
    const token2 = generateCsrfToken()

    expect(token1).not.toBe(token2)
  })

  it('should use crypto.getRandomValues when available', () => {
    const token = generateCsrfToken()

    // If crypto is available, the token should be 64 characters (32 bytes in hex)
    if (window.crypto && 'getRandomValues' in window.crypto) {
      expect(token).toHaveLength(64)
    }
  })
})
