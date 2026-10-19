// Object-level messages that are about a single property, capturing the property name
const PROPERTY_KEY_MESSAGE_PATTERNS = [
  /^required key \[([^\]]+)\] not found$/i,
  /^extraneous key \[([^\]]+)\] is not permitted$/i,
]

function getPropertyKeyFromMessage(message: string): string | undefined {
  for (const pattern of PROPERTY_KEY_MESSAGE_PATTERNS) {
    const match = message.match(pattern)
    if (match) {
      return match[1]
    }
  }
  return undefined
}

/**
 * Extracts column name and validation message from validation message strings.
 *
 * Example:
 *  extractColumnValidationMessages(["#/platform: null is not a valid enum value"])
 *  -> Map { "platform" => ["null is not a valid enum value"] }
 *
 *  extractColumnValidationMessages(["#/requiredNumberArrayColumn/0: some error"])
 *  -> Map { "requiredNumberArrayColumn" => ["some error"] }
 *
 *  extractColumnValidationMessages(["#: row-level error"])
 *  -> Map { "_row" => ["row-level error"] }
 *
 *  extractColumnValidationMessages(["#: required key [missingColumn] not found"])
 *  -> Map { "missingColumn" => ["required key [missingColumn] not found"] }
 *
 *  extractColumnValidationMessages(["#: extraneous key [extraColumn] is not permitted"])
 *  -> Map { "extraColumn" => ["extraneous key [extraColumn] is not permitted"] }
 */
export function extractColumnValidationMessages(
  messages: string[],
): Map<string, string[]> {
  const columnMap = new Map<string, string[]>()
  // Validation message format: "#/columnName: message"
  // or for array items: "#/columnName/0: message"
  // or for object (row) level: "#: message"
  const regex = /^#(?:\/([^/:]+)(?:\/\d+)?)?:\s*(.*)$/

  for (const raw of messages) {
    if (typeof raw !== 'string') continue
    const str = raw.trimStart()
    const match = str.match(regex)
    if (match) {
      const message = match[2].trim()
      const columnName =
        match[1]?.trim() ?? getPropertyKeyFromMessage(message) ?? '_row'

      if (!columnMap.has(columnName)) {
        columnMap.set(columnName, [])
      }
      columnMap.get(columnName)!.push(message)
    }
  }

  return columnMap
}
