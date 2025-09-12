import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'

/**
 * Constructs a URL to the Synapse entity page.
 *
 * @param entityId - The Synapse ID (e.g., "syn12345678")
 * @param version - Optional version number
 * @returns The full Synapse URL (e.g., "https://www.synapse.org/#!Synapse:syn12345678.2")
 */
export function getSynapseEntityUrl(
  entityId: string,
  version?: number,
): string {
  const baseUrl = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${entityId}`
  return version ? `${baseUrl}.${version}` : baseUrl
}
