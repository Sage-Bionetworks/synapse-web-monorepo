import { describe, expect, it } from 'vitest'
import {
  CSP_REPORTING_ENDPOINT_NAME,
  getSecurityHeaders,
} from './cloudFrontSecurityHeaders.js'
import type { AllowedSource } from './contentSecurityPolicy.js'
import { parseContentSecurityPolicy as parse } from './testUtils/parseContentSecurityPolicy.js'

function allowed(
  source: string,
  ...directives: AllowedSource['directives']
): AllowedSource {
  return { source, directives, purpose: 'test', owner: 'test' }
}

describe('getSecurityHeaders', () => {
  const headers = getSecurityHeaders([
    allowed("'self'", 'script-src'),
    allowed('https://a.example', 'connect-src'),
  ])

  it('reports violations to the endpoint declared in Reporting-Endpoints', () => {
    // Browsers silently send no reports when the report-to name has no matching endpoint
    expect(headers['Reporting-Endpoints']).toMatch(
      new RegExp(`^${CSP_REPORTING_ENDPOINT_NAME}="https://`),
    )
    for (const name of [
      'Content-Security-Policy',
      'Content-Security-Policy-Report-Only',
    ]) {
      expect(parse(headers[name]).get('report-to')).toEqual([
        CSP_REPORTING_ENDPOINT_NAME,
      ])
    }
  })

  it('enforces only frame-ancestors, and reports the given policy with inline scripts allowed', () => {
    expect([...parse(headers['Content-Security-Policy']).keys()]).toEqual([
      'frame-ancestors',
      'report-to',
      'report-uri',
    ])
    expect(
      parse(headers['Content-Security-Policy']).get('frame-ancestors'),
    ).toEqual(["'none'"])
    const reportOnly = parse(headers['Content-Security-Policy-Report-Only'])
    expect(reportOnly.get('script-src')).toEqual(["'self'", "'unsafe-inline'"])
    expect(reportOnly.get('connect-src')).toEqual(['a.example'])
  })
})
