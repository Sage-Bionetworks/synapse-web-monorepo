/**
 * Utilities for parsing and working with Synapse IDs (synIds)
 */

export type ParsedSynId = {
  entityId: string
  versionNumber?: number
}

/**
 * Parses a Synapse ID from a URL string or hash fragment.
 * Supports formats like:
 * - /Synapse:syn123456
 * - /Synapse:syn123456.7
 * - https://example.com/path#syn123456
 * - syn123456.7
 *
 * @param input - URL string, hash fragment, or any string containing a synId
 * @returns Object with entityId and optional versionNumber, or null if no synId found
 *
 * @example
 * parseSynId('/Synapse:syn123456') // { entityId: 'syn123456' }
 * parseSynId('/Synapse:syn123456.7') // { entityId: 'syn123456', versionNumber: 7 }
 * parseSynId('https://example.com#syn123456.3') // { entityId: 'syn123456', versionNumber: 3 }
 */
export function parseSynId(input: string | undefined): ParsedSynId | null {
  if (!input) return null

  // Match patterns like:
  // - Synapse:syn123456
  // - Synapse:syn123456.7
  // - syn123456
  // - syn123456.7
  const regex = /(?:Synapse:)?(syn\d+)(?:\.(\d+))?/i
  const matches = regex.exec(input)

  if (!matches) {
    return null
  }

  return {
    entityId: matches[1],
    versionNumber: matches[2] ? parseInt(matches[2]) : undefined,
  }
}

/**
 * Extracts the first Synapse ID found in the current browser URL.
 * Searches in both pathname and hash.
 *
 * @returns Object with entityId and optional versionNumber, or null if no synId found
 *
 * @example
 * // URL: https://example.com/Synapse:syn123456
 * extractSynIdFromCurrentUrl() // { entityId: 'syn123456' }
 *
 * // URL: https://example.com/path#syn123456.7
 * extractSynIdFromCurrentUrl() // { entityId: 'syn123456', versionNumber: 7 }
 */
export function extractSynIdFromCurrentUrl(): ParsedSynId | null {
  if (typeof window === 'undefined') return null

  const fullUrl = `${window.location.pathname}${window.location.hash}`
  return parseSynId(fullUrl)
}
