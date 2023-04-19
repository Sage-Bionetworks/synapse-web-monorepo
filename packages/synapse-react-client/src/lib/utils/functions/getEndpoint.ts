export enum BackendDestinationEnum {
  REPO_ENDPOINT,
  PORTAL_ENDPOINT,
}

// Encodes the portal and repo service destinations
export type EndpointObject = {
  REPO: string
  PORTAL: string
}

const KNOWN_SYNAPSE_ORG_URLS = [
  'www.synapse.org',
  'staging.synapse.org',
  'tst.synapse.org',
  'portal-dev.dev.sagebase.org',
  '127.0.0.1',
]

export const getSynapsePortalEndpoint = (hostname: string): string => {
  return KNOWN_SYNAPSE_ORG_URLS.includes(hostname.toLowerCase())
    ? '/'
    : 'https://www.synapse.org/'
}
const DEFAULT_SYNAPSE_PORTAL = getSynapsePortalEndpoint(
  window.location.hostname,
)

export const PRODUCTION_ENDPOINT_CONFIG: EndpointObject = {
  REPO: 'https://repo-prod.prod.sagebase.org',
  PORTAL: DEFAULT_SYNAPSE_PORTAL,
}

// Given an endpoint will return the specific stack object
export const getEndpoint = (endpoint: BackendDestinationEnum): string => {
  let endpoint_config = PRODUCTION_ENDPOINT_CONFIG
  // @ts-ignore if overriding endpoint config
  if (window.SRC && window.SRC.OVERRIDE_ENDPOINT_CONFIG) {
    // @ts-ignore
    endpoint_config = window.SRC && window.SRC.OVERRIDE_ENDPOINT_CONFIG
  }
  const { PORTAL, REPO } = endpoint_config
  if (!PORTAL || !REPO) {
    throw Error('Error failed to specify endpoints, cannot make call')
  }
  if (endpoint === BackendDestinationEnum.PORTAL_ENDPOINT) {
    return PORTAL
  }
  return REPO
}

export type SynapseStack = 'production' | 'staging' | 'development' | 'mock'

export const MOCK_REPO_ORIGIN =
  'https://mock-repo.sagebase.org' satisfies string
const MOCK_PORTAL_ORIGIN =
  'https://portal-dev.dev.sagebase.org/' satisfies string

export const STACK_MAP: Record<SynapseStack, EndpointObject> = {
  production: {
    REPO: 'https://repo-prod.prod.sagebase.org',
    PORTAL: 'https://www.synapse.org/',
  },
  staging: {
    REPO: 'https://repo-staging.prod.sagebase.org',
    PORTAL: 'https://staging.synapse.org/',
  },
  development: {
    REPO: 'https://repo-dev.dev.sagebase.org',
    PORTAL: 'https://portal-dev.dev.sagebase.org/',
  },
  mock: {
    REPO: MOCK_REPO_ORIGIN,
    PORTAL: MOCK_PORTAL_ORIGIN,
  },
}
