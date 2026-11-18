/**
 * Content Security Policy for the data portals: the documented list of origins that may supply script, frames, and
 * other content to a portal (NIST SP 800-53 SC-18, SWC-8037).
 */
import {
  type AllowedSource,
  GOOGLE_ANALYTICS_SOURCES,
  SAGE,
  STYLE_AND_FONT_SOURCES,
  getSecurityHeaders,
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
  {
    source: 'https://repo-prod.prod.sagebase.org',
    directives: ['connect-src'],
    purpose: 'Synapse REST API (repo, auth, file services)',
    owner: SAGE,
  },
  {
    source: 'https://www.synapse.org',
    directives: ['connect-src'],
    purpose:
      'Synapse web client servlets: session cookie, feature flags, file handle association downloads',
    owner: SAGE,
  },
  {
    source: 'https://data.prod.sagebase.org',
    directives: ['connect-src'],
    purpose: 'Presigned URLs for Synapse-managed file storage (CloudFront)',
    owner: SAGE,
  },
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
  ampals: [newsFeed('https://salsportalnews.wpenginepowered.com')],
  cancercomplexity: [
    newsFeed('https://news.cancercomplexity.synapse.org'),
    ...jiraServiceDeskWidget,
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
 * Response headers for every portal's CloudFront distribution. The headers are the same for every portal, so one
 * response headers policy serves them all: the report-only policy allows every source that any portal allows, so a
 * violation of a portal's enforced policy is reported unless another portal allows that source.
 */
export function getPortalSecurityHeaders(): Record<string, string> {
  return getSecurityHeaders([
    ...SHARED_ALLOWED_SOURCES,
    ...Object.values(PORTAL_ALLOWED_SOURCES).flat(),
  ])
}
