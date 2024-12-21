import { Reference } from '@sage-bionetworks/synapse-types'
import { normalizeSynPrefix } from './EntityTypeUtils'

// doi regex here - https://www.crossref.org/blog/dois-and-matching-regular-expressions/
// note - had to add an escape character for the second and third forward slash in the regex above
export const DOI_REGEX = /^10.\d{4,9}\/[-._;()/:a-z0-9]+$/i

export function convertDoiToLink(doi: string) {
  doi = doi.trim()
  if (DOI_REGEX.test(doi)) {
    return `https://dx.doi.org/${doi}`
  }
  return ''
}

/**
 * Checks for a Synapse ID, with or without a version number.
 * Captures the synId and version number into capture groups.
 *
 * Usage examples:
 * > const result = 'syn123.9'.match(SYNAPSE_ENTITY_ID_REGEX)
 * > result[0]
 * 'syn123.9'
 * > result[1]
 * 'syn123'
 * > result[2]
 * '9'
 */
export const SYNAPSE_ENTITY_ID_REGEX = /^(syn\d+)(?:\.(\d+))?$/i

/**
 * Given a Synapse Entity ID of the form `syn123` or `syn123.4`, returns the
 * Reference object containing the entity ID and optional version number.
 * If the ID is not a valid Synapse Entity ID, returns null.
 * @param synId
 */
export function parseSynId(synId: string): Reference | null {
  const synIdMatch = SYNAPSE_ENTITY_ID_REGEX.exec(synId)
  if (synIdMatch) {
    return {
      targetId: normalizeSynPrefix(synIdMatch[1]),
      targetVersionNumber: synIdMatch[2] ? parseInt(synIdMatch[2]) : undefined,
    }
  } else {
    return synIdMatch
  }
}
