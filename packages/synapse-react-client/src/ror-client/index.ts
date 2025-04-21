import { fetchWithExponentialTimeout } from '@sage-bionetworks/synapse-client/util/fetchWithExponentialTimeout'
import { ROROrganization, RORSearchResult } from './types/ROROrganization'

export async function searchRegistry(query: string): Promise<RORSearchResult> {
  return fetchWithExponentialTimeout(
    `https://api.ror.org/v2/organizations?query=${encodeURIComponent(query)}`,
    { headers: { ['Content-Type']: 'application/json' } },
  )
}

export async function getOrganization(rorId: string): Promise<ROROrganization> {
  return fetchWithExponentialTimeout(
    `https://api.ror.org/v2/organizations/${rorId}`,
    { headers: { ['Content-Type']: 'application/json' } },
  )
}
