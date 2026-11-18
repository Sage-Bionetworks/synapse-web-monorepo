import { describe, expect, it } from 'vitest'
import {
  ACCOUNT_APPS,
  type SynapseEndpoints,
  getAccountAppAllowedSources,
  getAccountAppSecurityHeaders,
  getSynapseEndpointsFromEnv,
} from './accountAppsContentSecurityPolicy.js'
import { serializeContentSecurityPolicy } from './contentSecurityPolicy.js'
import {
  CLOUDFRONT_MAX_HEADER_VALUE_LENGTH,
  parseContentSecurityPolicy as parse,
} from './testUtils/parseContentSecurityPolicy.js'

// The endpoints in the apps' .env.<mode> files
const STACKS: Record<string, SynapseEndpoints> = {
  production: {
    repo: 'https://repo-prod.prod.sagebase.org',
    portal: 'https://www.synapse.org',
  },
  staging: {
    repo: 'https://repo-staging.prod.sagebase.org',
    portal: 'https://staging.synapse.org',
  },
  development: {
    repo: 'https://repo-dev.dev.sagebase.org',
    portal: 'https://dev.synapse.org',
  },
}

const appsOnStacks = ACCOUNT_APPS.flatMap(app =>
  Object.entries(STACKS).map(([stack, endpoints]) => ({
    app,
    stack,
    endpoints,
  })),
)

function getPolicy(...args: Parameters<typeof getAccountAppAllowedSources>) {
  return parse(
    serializeContentSecurityPolicy(getAccountAppAllowedSources(...args)),
  )
}

describe('getAccountAppAllowedSources', () => {
  it.each(appsOnStacks)(
    'allows no eval, inline, or wildcard scripts for $app on $stack',
    ({ app, endpoints }) => {
      const policy = getPolicy(app, endpoints)
      expect(policy.get('script-src')).toContain("'self'")
      for (const source of policy.get('script-src')!) {
        expect(source).not.toMatch(/^'unsafe-|^(https?:|\*|data:|blob:)$|\*/)
      }
      expect(policy.get('default-src')).toEqual(["'none'"])
      expect(policy.get('object-src')).toEqual(["'none'"])
      expect(policy.get('frame-src')).toEqual([
        'https://www.googletagmanager.com',
      ])
    },
  )

  it.each(ACCOUNT_APPS)(
    'connects only to the Synapse stack the %s build is configured for',
    app => {
      const production = getPolicy(app, STACKS.production).get('connect-src')!
      expect(production).toEqual(
        expect.arrayContaining([
          'https://repo-prod.prod.sagebase.org',
          'https://www.synapse.org',
          'https://data.prod.sagebase.org',
        ]),
      )
      expect(production.join(' ')).not.toMatch(/staging|dev\.|localhost/)

      const development = getPolicy(app, STACKS.development).get('connect-src')!
      expect(development).toEqual(
        expect.arrayContaining([
          'https://repo-dev.dev.sagebase.org',
          'https://dev.synapse.org',
          'https://data.dev.sagebase.org',
        ]),
      )
      expect(development).not.toContain('https://repo-prod.prod.sagebase.org')
    },
  )

  it('allows endpoints by origin, so a repo path still matches', () => {
    const connectSrc = getPolicy('SageAccountWeb', {
      repo: 'http://localhost:8080/services-repository-develop-SNAPSHOT',
      portal: 'http://localhost:8888/',
    }).get('connect-src')
    expect(connectSrc).toEqual(
      expect.arrayContaining([
        'http://localhost:8080',
        'http://localhost:8888',
      ]),
    )
  })

  it('adds upload, ROR, and Terms of Service sources only to SageAccountWeb', () => {
    const extra = [
      'https://s3.amazonaws.com',
      'https://api.ror.org',
      'https://cdn.jsdelivr.net',
    ]
    expect(
      getPolicy('SageAccountWeb', STACKS.production).get('connect-src'),
    ).toEqual(expect.arrayContaining(extra))
    const signin = getPolicy('synapse-oauth-signin', STACKS.production).get(
      'connect-src',
    )!
    for (const source of extra) {
      expect(signin).not.toContain(source)
    }
  })
})

describe('getSynapseEndpointsFromEnv', () => {
  it('reads the endpoints the app is built with, and refuses a build without them', () => {
    expect(
      getSynapseEndpointsFromEnv({
        VITE_SYNAPSE_REPO_ENDPOINT: STACKS.staging.repo,
        VITE_SYNAPSE_PORTAL_ENDPOINT: STACKS.staging.portal,
      }),
    ).toEqual(STACKS.staging)
    expect(() =>
      getSynapseEndpointsFromEnv({
        VITE_SYNAPSE_REPO_ENDPOINT: STACKS.staging.repo,
      }),
    ).toThrow(/VITE_SYNAPSE_PORTAL_ENDPOINT/)
  })
})

describe('getAccountAppSecurityHeaders', () => {
  it.each(Object.entries(STACKS))(
    'reports every source either app allows on %s',
    (_stack, endpoints) => {
      const reportOnly = parse(
        getAccountAppSecurityHeaders(endpoints)[
          'Content-Security-Policy-Report-Only'
        ],
      )
      for (const app of ACCOUNT_APPS) {
        for (const [directive, sources] of getPolicy(app, endpoints)) {
          expect(reportOnly.get(directive)).toEqual(
            expect.arrayContaining(sources.filter(s => s !== "'none'")),
          )
        }
      }
    },
  )

  it.each(Object.entries(STACKS))(
    'fits within CloudFront response headers policy value limits on %s',
    (_stack, endpoints) => {
      for (const value of Object.values(
        getAccountAppSecurityHeaders(endpoints),
      )) {
        expect(value.length).toBeLessThanOrEqual(
          CLOUDFRONT_MAX_HEADER_VALUE_LENGTH,
        )
      }
    },
  )
})
