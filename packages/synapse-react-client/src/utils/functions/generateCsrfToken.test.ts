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

  it.skipIf(!window.crypto || !('getRandomValues' in window.crypto))(
    'should generate 64-character tokens when crypto is available',
    () => {
      const token = generateCsrfToken()
      expect(token).toHaveLength(64)
    },
  )

  it.skipIf(window.crypto && 'getRandomValues' in window.crypto)(
    'should generate valid tokens when crypto is not available',
    () => {
      const token = generateCsrfToken()
      expect(token).toBeDefined()
      expect(typeof token).toBe('string')
      expect(token.length).toBeGreaterThan(0)
    },
  )
})
