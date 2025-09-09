/**
 * Extracts the column (property) names from validation message strings of the form:
 * "#/platform: null is not a valid enum value"
 * Returns every parsed value (no de-duplication).
 *
 * Example:
 *  extractValidationFieldNames(["#/platform: null is not a valid enum value"])
 *  -> ["platform"]
 */
export function extractValidationFieldNames(messages: string[]): string[] {
  const results: string[] = []
  const regex = /^#\/([^:]+):/

  for (const raw of messages) {
    if (typeof raw !== 'string') continue
    const str = raw.trimStart()
    const match = str.match(regex)
    if (match) {
      results.push(match[1].trim())
    }
  }
  return results
}

/**
 * Same as extractValidationFieldNames but returns unique names (order of first appearance).
 */
export function extractUniqueValidationFieldNames(
  messages: string[],
): string[] {
  const seen = new Set<string>()
  const ordered: string[] = []
  for (const name of extractValidationFieldNames(messages)) {
    if (!seen.has(name)) {
      seen.add(name)
      ordered.push(name)
    }
  }
  return ordered
}
