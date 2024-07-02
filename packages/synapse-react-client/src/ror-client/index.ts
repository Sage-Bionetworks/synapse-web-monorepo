import { ROROrganization, RORSearchResult } from './types/ROROrganization'
import { fetchWithExponentialTimeout } from '../synapse-client/HttpClient'

export async function searchRegistry(query: string): Promise<RORSearchResult> {
  return fetchWithExponentialTimeout(
    `https://api.ror.org/v2/organizations?query=${query}`,
    { headers: { ['Content-Type']: 'application/json' } },
  )
}

export async function getOrganization(rorId: string): Promise<ROROrganization> {
  return fetchWithExponentialTimeout(
    `https://api.ror.org/v2/organizations/${rorId}`,
    { headers: { ['Content-Type']: 'application/json' } },
  )
}
