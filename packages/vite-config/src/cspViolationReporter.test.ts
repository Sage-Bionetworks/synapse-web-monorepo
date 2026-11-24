import { runInNewContext } from 'node:vm'
import { describe, expect, it, vi } from 'vitest'
import {
  MAX_REPORTS_PER_PAGE,
  getViolationReporterScript,
} from './cspViolationReporter.js'

const REPORT_URL = 'https://www.synapse.org/Portal/csp-report'
const PAGE_URL = 'https://nf.synapse.org/Explore/Tools?toolId=1'

// The SecurityPolicyViolationEvent properties the reporter reads
type Violation = Record<string, string | number>

const violation: Violation = {
  documentURI: PAGE_URL,
  referrer: '',
  blockedURI: 'https://evil.example/x.js',
  effectiveDirective: 'script-src-elem',
  disposition: 'enforce',
  sourceFile: 'https://nf.synapse.org/assets/index.js',
  lineNumber: 3,
  columnNumber: 7,
  statusCode: 200,
}

/** Runs the exact script text the build inlines, with stand-ins for the browser globals it uses. */
function runReporter() {
  const listeners: ((event: Violation) => void)[] = []
  const fetch = vi.fn((_url: string, _init: RequestInit) => Promise.resolve())
  runInNewContext(getViolationReporterScript(REPORT_URL), {
    addEventListener: (type: string, listener: (event: Violation) => void) => {
      if (type === 'securitypolicyviolation') {
        listeners.push(listener)
      }
    },
    fetch,
    location: { href: PAGE_URL },
  })
  return {
    fetch,
    report: (event: Violation) =>
      listeners.forEach(listener => listener(event)),
  }
}

describe('getViolationReporterScript', () => {
  it("sends a violation as one report in CSPReportServlet's report-to format, without credentials", () => {
    const { fetch, report } = runReporter()
    report(violation)

    expect(fetch).toHaveBeenCalledTimes(1)
    const [url, init] = fetch.mock.calls[0]
    expect(url).toBe(REPORT_URL)
    expect(init).toMatchObject({
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      keepalive: true,
      headers: { 'Content-Type': 'application/reports+json' },
    })
    expect(JSON.parse(init.body as string)).toEqual([
      {
        type: 'csp-violation',
        age: 0,
        url: PAGE_URL,
        body: {
          documentURL: PAGE_URL,
          referrer: '',
          blockedURL: 'https://evil.example/x.js',
          effectiveDirective: 'script-src-elem',
          disposition: 'enforce',
          sourceFile: 'https://nf.synapse.org/assets/index.js',
          lineNumber: 3,
          columnNumber: 7,
          statusCode: 200,
        },
      },
    ])
  })

  it('sends each distinct violation once, and stops at the per-page limit', () => {
    const { fetch, report } = runReporter()
    report(violation)
    report(violation)
    expect(fetch).toHaveBeenCalledTimes(1)

    for (let i = 0; i < MAX_REPORTS_PER_PAGE * 2; i++) {
      report({ ...violation, blockedURI: `https://evil.example/${i}.js` })
    }
    expect(fetch).toHaveBeenCalledTimes(MAX_REPORTS_PER_PAGE)
  })

  it('ignores violations caused by browser extensions', () => {
    const { fetch, report } = runReporter()
    report({ ...violation, sourceFile: 'chrome-extension://abc/content.js' })
    report({ ...violation, blockedURI: 'moz-extension://abc/inject.js' })
    expect(fetch).not.toHaveBeenCalled()
  })
})
