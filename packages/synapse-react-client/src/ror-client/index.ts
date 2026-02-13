import { fetchWithExponentialTimeout } from '@sage-bionetworks/synapse-client'
import { ROROrganization, RORSearchResult } from './types/ROROrganization'

export async function searchRegistry(query: string): Promise<RORSearchResult> {
  const response = await fetchWithExponentialTimeout(
    `https://api.ror.org/v2/organizations?query=${encodeURIComponent(query)}`,
    { headers: { ['Content-Type']: 'application/json' } },
  )
  return response.json()
}

export async function getOrganization(rorId: string): Promise<ROROrganization> {
  const response = await fetchWithExponentialTimeout(
    `https://api.ror.org/v2/organizations/${rorId}`,
    { headers: { ['Content-Type']: 'application/json' } },
  )
  return response.json()
}
