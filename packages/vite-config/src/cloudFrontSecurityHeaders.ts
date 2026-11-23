/**
 * Specification of the response headers that the apps' CloudFront distributions send (IT-5554). The build does not
 * apply these: S3 cannot send custom headers, so they are configured in CloudFront response headers policies from the
 * values these functions produce. See CONTENT_SECURITY_POLICY.md for how to print them.
 */
import {
  type AllowedSource,
  serializeContentSecurityPolicy,
} from './contentSecurityPolicy.js'

/** The Synapse web client endpoint that logs CSP violation reports (SWC CSPReportServlet). */
export const CSP_REPORT_URL = 'https://www.synapse.org/Portal/csp-report'
export const CSP_REPORTING_ENDPOINT_NAME = 'csp-endpoint'

/**
 * Response headers for an app's CloudFront distribution. Browsers ignore `frame-ancestors`, `report-to`, and
 * `report-uri` in the `<meta>` policy added at build time, so these must be set as headers.
 *
 * @param reportOnlySources sources of the report-only policy. A violation of the enforced `<meta>` policy is reported
 * unless these sources allow it. The policy cannot list per-page inline script hashes, so it allows inline scripts;
 * the `<meta>` policy still enforces the hashes. Its sources are written without the `https://` scheme to fit
 * CloudFront's limit on a header value.
 */
export function getSecurityHeaders(
  reportOnlySources: AllowedSource[],
): Record<string, string> {
  const reporting = `report-to ${CSP_REPORTING_ENDPOINT_NAME}; report-uri ${CSP_REPORT_URL}`
  const reportOnlyPolicy = serializeContentSecurityPolicy(
    reportOnlySources,
    ["'unsafe-inline'"],
    { omitHttpsScheme: true },
  )
  return {
    'Content-Security-Policy': `frame-ancestors 'none'; ${reporting}`,
    'Content-Security-Policy-Report-Only': `${reportOnlyPolicy}; ${reporting}`,
    'Reporting-Endpoints': `${CSP_REPORTING_ENDPOINT_NAME}="${CSP_REPORT_URL}"`,
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  }
}
