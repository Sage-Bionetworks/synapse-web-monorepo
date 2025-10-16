import {
  SYNAPSE_BACKEND_DEV_URL,
  SYNAPSE_BACKEND_PRODUCTION_URL,
  SYNAPSE_BACKEND_STAGING_URL,
} from '../SynapseConstants'

export enum BackendDestinationEnum {
  REPO_ENDPOINT,
  PORTAL_ENDPOINT,
}

// Encodes the portal and repo service destinations
export type EndpointObject = {
  REPO: string
  PORTAL: string
}

export const KNOWN_SYNAPSE_ORG_URLS = [
  'www.synapse.org',
  'staging.synapse.org',
  'tst.synapse.org',
  'dev.synapse.org',
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
  REPO: SYNAPSE_BACKEND_PRODUCTION_URL,
  PORTAL: DEFAULT_SYNAPSE_PORTAL,
}

// Given an endpoint will return the specific stack object
export const getEndpoint = (endpoint: BackendDestinationEnum): string => {
  let endpoint_config = PRODUCTION_ENDPOINT_CONFIG
  // @ts-expect-error if overriding endpoint config
  if (window.SRC_OVERRIDE_ENDPOINT_CONFIG) {
    // @ts-expect-error
    endpoint_config = window.SRC_OVERRIDE_ENDPOINT_CONFIG
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

export type SynapseStack =
  | 'production'
  | 'staging'
  | 'development'
  | 'mock'
  | 'local'

export const MOCK_REPO_ORIGIN =
  'https://mock-repo.sagebase.org' satisfies string
const MOCK_PORTAL_ORIGIN = 'https://mock-portal.sagebase.org/' satisfies string

export const STACK_MAP: Record<SynapseStack, EndpointObject> = {
  production: {
    REPO: SYNAPSE_BACKEND_PRODUCTION_URL,
    PORTAL: 'https://www.synapse.org/',
  },
  staging: {
    REPO: SYNAPSE_BACKEND_STAGING_URL,
    PORTAL: 'https://staging.synapse.org/',
  },
  development: {
    REPO: SYNAPSE_BACKEND_DEV_URL,
    PORTAL: 'https://dev.synapse.org/',
  },
  mock: {
    REPO: MOCK_REPO_ORIGIN,
    PORTAL: MOCK_PORTAL_ORIGIN,
  },
  local: {
    REPO: 'http://localhost:8080/services-repository-develop-SNAPSHOT',
    PORTAL: 'http://localhost:8888/',
  },
}
