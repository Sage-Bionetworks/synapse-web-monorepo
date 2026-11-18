import { describe, expect, it } from 'vitest'
import {
  CSP_DIRECTIVES,
  serializeContentSecurityPolicy,
} from './contentSecurityPolicy.js'
import {
  PORTAL_ALLOWED_SOURCES,
  getPortalAllowedSources,
  getPortalSecurityHeaders,
} from './portalContentSecurityPolicy.js'
import {
  CLOUDFRONT_MAX_HEADER_VALUE_LENGTH,
  parseContentSecurityPolicy as parse,
} from './testUtils/parseContentSecurityPolicy.js'

const portalKeys = [undefined, ...Object.keys(PORTAL_ALLOWED_SOURCES)]

function getPortalPolicy(portalKey?: string) {
  return parse(
    serializeContentSecurityPolicy(getPortalAllowedSources(portalKey)),
  )
}

describe('getPortalAllowedSources', () => {
  it.each(portalKeys)(
    'only allows acceptable script sources for portal %s',
    portalKey => {
      const scriptSrc = getPortalPolicy(portalKey).get('script-src')!
      expect(scriptSrc).toContain("'self'")
      for (const source of scriptSrc) {
        expect(source).not.toBe("'unsafe-inline'")
        expect(source).not.toMatch(/^(https?:|\*|data:|blob:)$/)
        expect(source).not.toMatch(/s3[.-]|amazonaws|localhost|127\.0\.0\.1/)
        expect(source).not.toContain('*')
      }
    },
  )

  it.each(portalKeys)('blocks plugins and workers for portal %s', portalKey => {
    const policy = getPortalPolicy(portalKey)
    expect(policy.get('default-src')).toEqual(["'none'"])
    expect(policy.get('object-src')).toEqual(["'none'"])
    expect(policy.get('worker-src')).toEqual(["'none'"])
  })

  it("adds a portal's own sources only to that portal", () => {
    expect(getPortalPolicy('challenges').get('script-src')).toContain(
      'https://maps.googleapis.com',
    )
    expect(getPortalPolicy('nf').get('script-src')).not.toContain(
      'https://maps.googleapis.com',
    )
  })
})

describe('getPortalSecurityHeaders', () => {
  it("reports exactly the sources some portal's build-time policy allows, plus inline scripts", () => {
    const reportOnly = parse(
      getPortalSecurityHeaders()['Content-Security-Policy-Report-Only'],
    )
    const enforcedPolicies = portalKeys.map(getPortalPolicy)
    for (const directive of CSP_DIRECTIVES) {
      const allowedByAnyPortal = new Set(
        enforcedPolicies.flatMap(policy => policy.get(directive)!),
      )
      if (directive === 'script-src') {
        allowedByAnyPortal.add("'unsafe-inline'")
      }
      expect(new Set(reportOnly.get(directive))).toEqual(allowedByAnyPortal)
    }
  })

  it('fits within CloudFront response headers policy value limits', () => {
    for (const value of Object.values(getPortalSecurityHeaders())) {
      expect(value.length).toBeLessThanOrEqual(
        CLOUDFRONT_MAX_HEADER_VALUE_LENGTH,
      )
    }
  })
})
