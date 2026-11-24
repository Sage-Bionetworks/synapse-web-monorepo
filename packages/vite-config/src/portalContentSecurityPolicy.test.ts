import { describe, expect, it } from 'vitest'
import { serializeContentSecurityPolicy } from './contentSecurityPolicy.js'
import {
  PORTAL_ALLOWED_SOURCES,
  getPortalAllowedSources,
  getPortalContentSecurityPolicy,
} from './portalContentSecurityPolicy.js'
import { parseContentSecurityPolicy as parse } from './testUtils/parseContentSecurityPolicy.js'

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

describe('getPortalContentSecurityPolicy', () => {
  it.each(portalKeys)(
    "reports portal %s's violations to the production web client, which its connect-src allows",
    portalKey => {
      const { allowedSources, reportUrl } =
        getPortalContentSecurityPolicy(portalKey)
      expect(reportUrl).toBe('https://www.synapse.org/Portal/csp-report')
      expect(
        parse(serializeContentSecurityPolicy(allowedSources)).get(
          'connect-src',
        ),
      ).toContain('https://www.synapse.org')
    },
  )
})
