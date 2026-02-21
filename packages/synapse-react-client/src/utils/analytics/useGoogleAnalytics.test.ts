import { CookiePreference } from '../hooks'
import { shouldEnableGoogleAnalytics } from './useGoogleAnalytics'

describe('shouldEnableGoogleAnalytics', () => {
  const allowedCookiePreferences: CookiePreference = {
    analyticsAllowed: true,
    functionalAllowed: true,
  }
  const disallowedCookiePreferences: CookiePreference = {
    analyticsAllowed: false,
    functionalAllowed: true,
  }
  test.each([
    'www.synapse.org',
    'synapse.org',
    'someportal.synapse.org',
    'signin.synapse.org',
    'accounts.synapse.org',
  ])('allowed domains: %s', domain => {
    expect(shouldEnableGoogleAnalytics(domain, allowedCookiePreferences)).toBe(
      true,
    )
  })

  test.each([
    'localhost',
    '127.0.0.1',
    'staging.synapse.org',
    'dev.synapse.org',
    'staging.someportal.synapse.org',
  ])('disallowed domains: %s', domain => {
    expect(shouldEnableGoogleAnalytics(domain, allowedCookiePreferences)).toBe(
      false,
    )
  })

  test('disallowed by cookie preferences', () => {
    expect(
      shouldEnableGoogleAnalytics(
        'www.synapse.org',
        disallowedCookiePreferences,
      ),
    ).toBe(false)
  })
})
