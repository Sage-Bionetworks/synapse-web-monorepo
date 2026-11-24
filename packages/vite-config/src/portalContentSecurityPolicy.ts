/**
 * Content Security Policy for the data portals: the documented list of origins that may supply script, frames, and
 * other content to a portal (NIST SP 800-53 SC-18, SWC-8037).
 */
import {
  type AllowedSource,
  type ContentSecurityPolicyConfig,
  GOOGLE_ANALYTICS_SOURCES,
  PRODUCTION_SYNAPSE_ENDPOINTS,
  SAGE,
  STAGING_SYNAPSE_ENDPOINTS,
  STYLE_AND_FONT_SOURCES,
  getCspReportUrl,
  getSynapseSources,
} from './contentSecurityPolicy.js'

/** Sources every portal needs. */
export const SHARED_ALLOWED_SOURCES: AllowedSource[] = [
  {
    source: "'self'",
    directives: [
      'script-src',
      'style-src',
      'font-src',
      'img-src',
      'media-src',
      'connect-src',
      'base-uri',
      'form-action',
    ],
    purpose:
      'The portal build: JavaScript and CSS bundles, fonts, images, header videos, deploy date and React Router data requests',
    owner: SAGE,
  },
  {
    source: "'unsafe-eval'",
    directives: ['script-src'],
    purpose:
      '@rjsf/validator-ajv8 compiles JSON schemas into functions at runtime (table Export dialog, data access request forms, DynamicForm). Remove when RJSF forms use a validator that does not generate code',
    owner: 'ajv (synapse-react-client dependency)',
  },
  {
    source: "'sha256-LzqK46qqX2MczBUDxYikB3KB+vC59oHr/pgueXg5jqk='",
    directives: ['script-src'],
    purpose:
      "Height reporter that synapse-react-client's HtmlPreview writes into its sandboxed srcdoc frame, which inherits the portal policy. HtmlPreview's tests fail if the script no longer matches this hash",
    owner: SAGE,
  },
  {
    source: 'data:',
    directives: ['img-src'],
    purpose:
      'Images inlined by the build, SVG data URIs in stylesheets, data:image URLs in wiki markdown',
    owner: SAGE,
  },
  {
    source: 'blob:',
    directives: ['img-src', 'media-src', 'frame-src'],
    purpose:
      'Synapse files fetched into object URLs: images, avatars, PDF and data use certificate previews',
    owner: SAGE,
  },
  {
    source: 'https:',
    directives: ['img-src', 'media-src'],
    purpose:
      'Wiki markdown may show images, video, and audio from any HTTPS host. Display-only content; script-src is not affected',
    owner: 'Wiki authors',
  },
  ...getSynapseSources(PRODUCTION_SYNAPSE_ENDPOINTS),
  // Lets a developer test a portal build against the staging stack by setting SRC_OVERRIDE_ENDPOINT_CONFIG
  ...getSynapseSources(STAGING_SYNAPSE_ENDPOINTS),
  {
    source: 'https://s3.amazonaws.com',
    directives: ['connect-src'],
    purpose:
      'Path-style presigned URLs for Synapse-managed S3 buckets, e.g. uploads and the geoloc.sagebase.org map data',
    owner: 'Amazon Web Services (Sage-owned buckets)',
  },
  {
    source: 'https://*.s3.amazonaws.com',
    directives: ['connect-src'],
    purpose:
      'Presigned URLs for files in external S3 storage locations, which are named per bucket',
    owner: 'Amazon Web Services (bucket owners registered in Synapse)',
  },
  {
    source: 'https://storage.googleapis.com',
    directives: ['connect-src'],
    purpose: 'Presigned URLs for files in Google Cloud storage locations',
    owner: 'Google Cloud (bucket owners registered in Synapse)',
  },
  {
    source: 'https://citation.doi.org',
    directives: ['connect-src'],
    purpose: 'Formatted citations for DOIs (CitationPopover)',
    owner: 'DOI Foundation',
  },
  {
    source: 'https://www.youtube.com',
    directives: ['frame-src'],
    purpose: 'YouTube video widget in wiki markdown',
    owner: 'Google',
  },
  {
    source: 'https://player.vimeo.com',
    directives: ['frame-src'],
    purpose: 'Vimeo video widget in wiki markdown',
    owner: 'Vimeo',
  },
  ...STYLE_AND_FONT_SOURCES,
  ...GOOGLE_ANALYTICS_SOURCES,
]

const jiraServiceDeskWidget: AllowedSource[] = [
  {
    source: 'https://jsd-widget.atlassian.com',
    directives: ['script-src', 'connect-src', 'base-uri'],
    purpose:
      'Jira Service Management help widget: embed.js, its API, and the <base> element in its frame',
    owner: 'Atlassian',
  },
  {
    source: 'https://sagebionetworks.jira.com',
    directives: ['base-uri'],
    purpose:
      'Jira Service Management help widget sets <base> to the Sage help center in its frame',
    owner: 'Atlassian (Sage Jira site)',
  },
  {
    source: 'https://api-private.atlassian.com',
    directives: ['connect-src'],
    purpose: 'Jira Service Management help widget API',
    owner: 'Atlassian',
  },
  {
    source: 'https://as.atlassian.com',
    directives: ['connect-src'],
    purpose: 'Jira Service Management help widget analytics',
    owner: 'Atlassian',
  },
  {
    source: 'https://o55978.ingest.sentry.io',
    directives: ['connect-src'],
    purpose: 'Jira Service Management help widget error reporting',
    owner: 'Atlassian (Sentry)',
  },
]

function newsFeed(origin: string): AllowedSource {
  return {
    source: origin,
    directives: ['connect-src'],
    purpose: 'Portal news and events feed (WordPress REST API / RSS)',
    owner: SAGE,
  }
}

const shortLinks: AllowedSource = {
  source: 'https://api.short.io',
  directives: ['connect-src'],
  purpose: 'Short links for the Share this page button (useCreateShortUrl)',
  owner: 'Short.io (Sage account)',
}

/** Sources needed by one portal, keyed by the portal's `VITE_PORTAL_KEY`. */
export const PORTAL_ALLOWED_SOURCES: Record<string, AllowedSource[]> = {
  adknowledgeportal: [
    newsFeed('https://news.adknowledgeportal.org'),
    {
      source: 'https://sagebase.us7.list-manage.com',
      directives: ['script-src'],
      purpose:
        'Mailchimp newsletter sign-up, which submits by JSONP (react-mailchimp-subscribe)',
      owner: 'Mailchimp (Sage account)',
    },
  ],
  ampals: [
    newsFeed('https://salsportalnews.wpenginepowered.com'),
    // The gateways are the portal's VITE_ARIDHIA_GATEWAY_URL and VITE_ARIDHIA_DEV_GATEWAY_URL
    {
      source: 'https://gateway.westeurope.dap.c-path.org',
      directives: ['connect-src'],
      purpose:
        'RDCA-DAP (Aridhia) gateway: token exchange, data access status and requests',
      owner: 'Critical Path Institute (Aridhia)',
    },
    {
      source: 'https://gateway.westus2.c-path-dev.aridhia.io',
      directives: ['connect-src'],
      purpose:
        'RDCA-DAP (Aridhia) development gateway, used on staging.ampals.synapse.org',
      owner: 'Critical Path Institute (Aridhia)',
    },
  ],
  cancercomplexity: [
    newsFeed('https://news.cancercomplexity.synapse.org'),
    ...jiraServiceDeskWidget,
    shortLinks,
  ],
  challenges: [
    {
      source: 'https://maps.googleapis.com',
      directives: ['script-src', 'connect-src'],
      purpose: 'Google Maps JavaScript API for the challenge participant map',
      owner: 'Google',
    },
  ],
  classic: [newsFeed('https://sclasportnews.wpenginepowered.com')],
  eliteportal: [newsFeed('https://news.eliteportal.org')],
  namhub: [newsFeed('https://nhdcc.wpenginepowered.com')],
  nf: [
    newsFeed('https://news.nf.synapse.org'),
    shortLinks,
    {
      source: 'https://raw.githubusercontent.com',
      directives: ['connect-src'],
      purpose:
        'JSON schemas for the research tool submission forms (nf-osi/nf-research-tools-schema)',
      owner: 'GitHub (nf-osi organization)',
    },
    {
      source: 'https://submit-form.com',
      directives: ['connect-src'],
      purpose: 'Research tool submission form endpoint',
      owner: 'Formspark',
    },
  ],
}

/**
 * Sources of a portal's build-time policy.
 *
 * @param portalKey the portal's `VITE_PORTAL_KEY`; omitted or unknown keys get only the shared sources
 */
export function getPortalAllowedSources(portalKey?: string): AllowedSource[] {
  return [
    ...SHARED_ALLOWED_SOURCES,
    ...((portalKey ? PORTAL_ALLOWED_SOURCES[portalKey] : undefined) ?? []),
  ]
}

/**
 * A portal's build-time policy. Every portal uses the production Synapse stack, so its violations are reported to the
 * production web client.
 *
 * @param portalKey the portal's `VITE_PORTAL_KEY`; omitted or unknown keys get only the shared sources
 */
export function getPortalContentSecurityPolicy(
  portalKey?: string,
): ContentSecurityPolicyConfig {
  return {
    allowedSources: getPortalAllowedSources(portalKey),
    reportUrl: getCspReportUrl(PRODUCTION_SYNAPSE_ENDPOINTS),
  }
}
