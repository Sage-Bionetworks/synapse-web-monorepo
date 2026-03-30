import { SynapseClient } from '@sage-bionetworks/synapse-client'

/**
 * Creates an anonymous SynapseClient instance (no access token).
 *
 * This is used by server-side utilities (SSR loaders, sitemap generation,
 * metadata fetching) that only need to read publicly accessible Synapse data.
 */
export function createAnonymousSynapseClient(): SynapseClient {
  return new SynapseClient({
    basePath: 'https://repo-prod.prod.sagebase.org',
  })
}
