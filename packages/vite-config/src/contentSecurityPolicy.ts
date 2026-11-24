/**
 * Shared building blocks for the Content Security Policies of the web apps in this repository: the documented lists of
 * origins that may supply script, frames, and other content to an app (NIST SP 800-53 SC-18, SWC-8037).
 *
 * Each allowed source records which directives it appears in, why the app needs it, and who operates it. Directives
 * with no allowed source are set to `'none'`, and `default-src 'none'` blocks every fetch type not listed in
 * {@link CSP_DIRECTIVES}.
 */

export const CSP_DIRECTIVES = [
  'default-src',
  'script-src',
  'style-src',
  'font-src',
  'img-src',
  'media-src',
  'connect-src',
  'frame-src',
  'worker-src',
  'object-src',
  'base-uri',
  'form-action',
] as const

export type CspDirective = (typeof CSP_DIRECTIVES)[number]

export type AllowedSource = {
  /** A CSP source expression: an origin, a scheme such as `https:`, or a keyword such as `'self'` */
  source: string
  directives: CspDirective[]
  /** The feature that needs the source */
  purpose: string
  /** The organization that operates the origin, or the dependency that requires the keyword */
  owner: string
}

/** A build's Content Security Policy. */
export type ContentSecurityPolicyConfig = {
  allowedSources: AllowedSource[]
  /** Endpoint that receives the build's violation reports. `connect-src` must allow its origin. */
  reportUrl: string
}

export const SAGE = 'Sage Bionetworks'
const GOOGLE_ANALYTICS =
  'Google (Sage GTM container GTM-KPW4KS62 / GA4 property G-CEKFPZDZX7)'
const GOOGLE_ADS =
  'Google (Google Ads accounts linked to GA4 property G-CEKFPZDZX7)'

/** MUI styling, Bootstrap 3, and Google Fonts, used by every app. */
export const STYLE_AND_FONT_SOURCES: AllowedSource[] = [
  {
    source: "'unsafe-inline'",
    directives: ['style-src'],
    purpose:
      'MUI/Emotion insert <style> elements at runtime and in prerendered HTML; React renders style attributes',
    owner: 'MUI / Emotion (synapse-react-client dependency)',
  },
  {
    source: 'data:',
    directives: ['font-src'],
    purpose: 'Fonts inlined into CSS by the build (e.g. KaTeX)',
    owner: SAGE,
  },
  {
    source: 'https://maxcdn.bootstrapcdn.com',
    directives: ['style-src', 'font-src'],
    purpose:
      'Bootstrap 3.3.7 stylesheet (loaded with Subresource Integrity) and its glyphicon fonts',
    owner: 'BootstrapCDN',
  },
  {
    source: 'https://fonts.googleapis.com',
    directives: ['style-src'],
    purpose: 'Google Fonts stylesheets (DM Sans, Merriweather, Lato)',
    owner: 'Google',
  },
  {
    source: 'https://fonts.gstatic.com',
    directives: ['font-src'],
    purpose: 'Google Fonts font files',
    owner: 'Google',
  },
]

/** Google Tag Manager and the tags in the Sage container, loaded once the user allows analytics cookies. */
export const GOOGLE_ANALYTICS_SOURCES: AllowedSource[] = [
  {
    source: 'https://www.googletagmanager.com',
    directives: ['script-src', 'connect-src', 'img-src', 'frame-src'],
    purpose:
      'Google Tag Manager and gtag.js, loaded after the user allows analytics cookies; its measurement pixel; the <noscript> GTM frame',
    owner: GOOGLE_ANALYTICS,
  },
  {
    source: 'https://analytics.google.com',
    directives: ['connect-src'],
    purpose: 'Google Analytics 4 measurement requests',
    owner: GOOGLE_ANALYTICS,
  },
  {
    source: 'https://*.analytics.google.com',
    directives: ['connect-src'],
    purpose:
      'Google Analytics 4 regional measurement hosts (e.g. region1.analytics.google.com)',
    owner: GOOGLE_ANALYTICS,
  },
  {
    source: 'https://*.google-analytics.com',
    directives: ['connect-src'],
    purpose:
      'Google Analytics 4 regional measurement hosts (e.g. region1.google-analytics.com)',
    owner: GOOGLE_ANALYTICS,
  },
  {
    source: 'https://*.g.doubleclick.net',
    directives: ['connect-src', 'img-src'],
    purpose:
      'Google Analytics 4 and Google Ads measurement requests and pixels (e.g. stats.g.doubleclick.net), per Google’s CSP guide for Google tag',
    owner: GOOGLE_ANALYTICS,
  },
  {
    source: 'https://googleads.g.doubleclick.net',
    directives: ['script-src'],
    purpose:
      'Google Ads conversion script that gtag.js loads for the linked Google Ads accounts',
    owner: GOOGLE_ADS,
  },
  {
    source: 'https://www.google.com',
    directives: ['connect-src', 'img-src'],
    purpose:
      'Google Ads conversion and remarketing measurement requests and pixels',
    owner: GOOGLE_ADS,
  },
  {
    source: 'https://ad.doubleclick.net',
    directives: ['connect-src'],
    purpose: 'Google Ads conversion measurement requests',
    owner: GOOGLE_ADS,
  },
]

/** The Synapse stack an app talks to. */
export type SynapseEndpoints = {
  /** Repository services, e.g. an account app's `VITE_SYNAPSE_REPO_ENDPOINT` */
  repo: string
  /** Synapse web client, e.g. an account app's `VITE_SYNAPSE_PORTAL_ENDPOINT` */
  portal: string
}

/** The production stack, which the portals use on every host. */
export const PRODUCTION_SYNAPSE_ENDPOINTS: SynapseEndpoints = {
  repo: 'https://repo-prod.prod.sagebase.org',
  portal: 'https://www.synapse.org',
}

/** The staging stack, e.g. an account app's staging build, or a portal pointed at staging for testing. */
export const STAGING_SYNAPSE_ENDPOINTS: SynapseEndpoints = {
  repo: 'https://repo-staging.prod.sagebase.org',
  portal: 'https://staging.synapse.org',
}

/** The Synapse web client's CSP violation report endpoint (CSPReportServlet), which logs reports to CloudWatch. */
export function getCspReportUrl(endpoints: SynapseEndpoints): string {
  return new URL('/Portal/csp-report', endpoints.portal).href
}

// Host of the presigned URLs that each stack's repo returns for Synapse-managed files. Stacks not listed (e.g. a
// local repo) get no file download host.
const FILE_DOWNLOAD_ORIGIN_BY_REPO_ORIGIN: Record<string, string> = {
  'https://repo-prod.prod.sagebase.org': 'https://data.prod.sagebase.org',
  'https://repo-staging.prod.sagebase.org': 'https://data.prod.sagebase.org',
  'https://repo-dev.dev.sagebase.org': 'https://data.dev.sagebase.org',
}

/** The Synapse REST API, web client servlets, and file download host of a stack. */
export function getSynapseSources(
  endpoints: SynapseEndpoints,
): AllowedSource[] {
  const repo = new URL(endpoints.repo).origin
  const portal = new URL(endpoints.portal).origin
  const fileDownloads = FILE_DOWNLOAD_ORIGIN_BY_REPO_ORIGIN[repo]
  return [
    {
      source: repo,
      directives: ['connect-src'],
      purpose: 'Synapse REST API (repo, auth, file services)',
      owner: SAGE,
    },
    {
      source: portal,
      directives: ['connect-src'],
      purpose:
        'Synapse web client servlets: session cookie, feature flags, file handle downloads',
      owner: SAGE,
    },
    ...(fileDownloads
      ? [
          {
            source: fileDownloads,
            directives: ['connect-src', 'img-src'],
            purpose:
              'Presigned URLs for Synapse-managed files (CloudFront): images, avatars, logos, downloads',
            owner: SAGE,
          } satisfies AllowedSource,
        ]
      : []),
  ]
}

/**
 * Serializes a policy from its allowed sources.
 *
 * @param extraScriptSources additional `script-src` sources, such as hashes of a page's inline scripts
 */
export function serializeContentSecurityPolicy(
  sources: AllowedSource[],
  extraScriptSources: string[] = [],
): string {
  return CSP_DIRECTIVES.map(directive => {
    const values = sources
      .filter(allowed => allowed.directives.includes(directive))
      .map(allowed => allowed.source)
    if (directive === 'script-src') {
      values.push(...extraScriptSources)
    }
    // An HTTPS origin adds nothing to a directive that already allows every HTTPS URL
    const allowsAllHttps = values.includes('https:')
    const unique = [...new Set(values)].filter(
      value => !(allowsAllHttps && value.startsWith('https://')),
    )
    return `${directive} ${unique.length > 0 ? unique.join(' ') : "'none'"}`
  }).join('; ')
}
