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

  it('should generate a token', () => {
    const token = generateCsrfToken()

    // Token should always be generated
    expect(token).toBeTruthy()
    expect(token.length).toBeGreaterThan(0)
  })
})
