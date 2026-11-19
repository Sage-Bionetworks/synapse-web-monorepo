/**
 * Content Security Policy for the account apps, SageAccountWeb (accounts.synapse.org) and synapse-oauth-signin
 * (signin.synapse.org): the documented list of origins that may supply script, frames, and other content to them
 * (NIST SP 800-53 SC-18, SWC-8037).
 *
 * Unlike the portals, these apps are built once per Synapse stack, so the Synapse origins come from each build's
 * `VITE_SYNAPSE_REPO_ENDPOINT` and `VITE_SYNAPSE_PORTAL_ENDPOINT`. A production build allows no staging or development
 * hosts.
 */
import {
  type AllowedSource,
  GOOGLE_ANALYTICS_SOURCES,
  SAGE,
  STYLE_AND_FONT_SOURCES,
  type SynapseEndpoints,
  getSecurityHeaders,
  getSynapseSources,
} from './contentSecurityPolicy.js'

export const ACCOUNT_APPS = ['SageAccountWeb', 'synapse-oauth-signin'] as const
export type AccountApp = (typeof ACCOUNT_APPS)[number]

const SHARED_ACCOUNT_APP_SOURCES: AllowedSource[] = [
  {
    source: "'self'",
    directives: [
      'script-src',
      'style-src',
      'font-src',
      'img-src',
      'connect-src',
      'base-uri',
      'form-action',
    ],
    purpose: 'The app build: JavaScript and CSS bundles, fonts, images',
    owner: SAGE,
  },
  {
    source: 'data:',
    directives: ['img-src'],
    purpose:
      'Images inlined by the build; profile pictures read from a local file while they are cropped',
    owner: SAGE,
  },
  {
    source: 'blob:',
    directives: ['img-src'],
    purpose: 'Synapse files fetched into object URLs: avatars and app logos',
    owner: SAGE,
  },
  {
    // A path-scoped source: images from this one bucket, not from any S3 bucket
    source: 'https://s3.amazonaws.com/static.synapse.org/',
    directives: ['img-src'],
    purpose:
      'Background images, spinner and illustrations in the static.synapse.org bucket',
    owner: 'Amazon Web Services (Sage-owned bucket)',
  },
  ...STYLE_AND_FONT_SOURCES,
  ...GOOGLE_ANALYTICS_SOURCES,
]

const APP_ALLOWED_SOURCES: Record<AccountApp, AllowedSource[]> = {
  SageAccountWeb: [
    {
      source: 'https://s3.amazonaws.com',
      directives: ['connect-src'],
      purpose:
        'Path-style presigned upload URLs for Synapse-managed S3 buckets: profile pictures and identity attestation documents',
      owner: 'Amazon Web Services (Sage-owned buckets)',
    },
    {
      source: 'https://api.ror.org',
      directives: ['connect-src'],
      purpose: 'Institution search in profile and account settings forms',
      owner: 'Research Organization Registry',
    },
    {
      source: 'https://cdn.jsdelivr.net',
      directives: ['connect-src'],
      purpose:
        'Terms of Service text from Sage-Bionetworks/Sage-Governance-Documents on GitHub',
      owner: 'jsDelivr (Sage GitHub repository)',
    },
  ],
  'synapse-oauth-signin': [],
}

export function getAccountAppAllowedSources(
  app: AccountApp,
  endpoints: SynapseEndpoints,
): AllowedSource[] {
  return [
    ...SHARED_ACCOUNT_APP_SOURCES,
    ...getSynapseSources(endpoints),
    ...APP_ALLOWED_SOURCES[app],
  ]
}

/**
 * Reads the Synapse endpoints from an account app build's environment.
 *
 * @throws if either endpoint variable is missing
 */
export function getSynapseEndpointsFromEnv(
  env: Record<string, string | undefined>,
): SynapseEndpoints {
  const repo = env.VITE_SYNAPSE_REPO_ENDPOINT
  const portal = env.VITE_SYNAPSE_PORTAL_ENDPOINT
  if (!repo || !portal) {
    throw new Error(
      'VITE_SYNAPSE_REPO_ENDPOINT and VITE_SYNAPSE_PORTAL_ENDPOINT are required for the Content-Security-Policy',
    )
  }
  return { repo, portal }
}

/**
 * Response headers for the account apps' CloudFront distributions on one Synapse stack. Both apps get the same
 * headers, so one response headers policy per stack serves them both: the report-only policy allows every source that
 * either app allows on that stack.
 */
export function getAccountAppSecurityHeaders(
  endpoints: SynapseEndpoints,
): Record<string, string> {
  return getSecurityHeaders(
    ACCOUNT_APPS.flatMap(app => getAccountAppAllowedSources(app, endpoints)),
  )
}
