import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { IsExternalLink } from './IsExternalLink'

describe('IsExternalLink tests', () => {
  const originalLocation = new URL('https://internal-link.com/page')

  beforeAll(() => {
    // Override window.location with a mock and compare links against this base
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...window.location,
        origin: 'https://internal-link.com',
        href: 'https://internal-link.com/page',
      },
    })
  })

  // Restore the original window.location after all tests run
  afterAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: originalLocation,
    })
  })

  it('returns false for internal relative link', () => {
    expect(IsExternalLink('/about')).toBe(false)
  })

  it('returns false for internal absolute link', () => {
    expect(IsExternalLink('https://internal-link.com/contact')).toBe(false)
  })

  it('returns true for external http link', () => {
    expect(IsExternalLink('http://external-link.com')).toBe(true)
  })

  it('returns true for external https link', () => {
    expect(IsExternalLink('https://external-link.com')).toBe(true)
  })

  it('returns false for anchor link', () => {
    expect(IsExternalLink('#section')).toBe(false)
  })

  it('returns false for empty string', () => {
    expect(IsExternalLink('')).toBe(false)
  })
})
