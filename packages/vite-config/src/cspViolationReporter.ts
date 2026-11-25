/** Most reports one page load sends; a page that keeps violating the policy says nothing new after this. */
export const MAX_REPORTS_PER_PAGE = 10

/**
 * Returns the text of an inline script that sends the page's Content Security Policy violations to `reportUrl`.
 * Browsers send no reports for a `<meta>` policy, but they fire `securitypolicyviolation` for it, so the page reports
 * its own violations. The script must run before any other script or resource so it sees every violation.
 *
 * Each report is one `application/reports+json` entry of type `csp-violation`, the format that SWC's
 * CSPReportServlet accepts. A page sends each distinct violation once, up to {@link MAX_REPORTS_PER_PAGE}.
 */
export function getViolationReporterScript(reportUrl: string): string {
  // Runs unbundled in every browser the apps support, so it stays plain ES2017 with no imports. Violations caused by
  // browser extensions are dropped: they say nothing about the app's policy.
  return `(() => {
  const reportUrl = ${JSON.stringify(reportUrl)}
  const reported = new Set()
  addEventListener('securitypolicyviolation', event => {
    const key = event.effectiveDirective + ' ' + event.blockedURI
    if (
      /-extension:/.test(event.sourceFile + ' ' + event.blockedURI) ||
      reported.has(key) ||
      reported.size >= ${MAX_REPORTS_PER_PAGE}
    ) {
      return
    }
    reported.add(key)
    fetch(reportUrl, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      keepalive: true,
      headers: { 'Content-Type': 'application/reports+json' },
      body: JSON.stringify([
        {
          type: 'csp-violation',
          age: 0,
          url: location.href,
          body: {
            documentURL: event.documentURI,
            referrer: event.referrer,
            blockedURL: event.blockedURI,
            effectiveDirective: event.effectiveDirective,
            disposition: event.disposition,
            sourceFile: event.sourceFile,
            lineNumber: event.lineNumber,
            columnNumber: event.columnNumber,
            statusCode: event.statusCode,
          },
        },
      ]),
    }).catch(() => {})
  })
})()`
}
