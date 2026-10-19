// Validation message format: "#/columnName: message"
// or for array items: "#/columnName/0: message"
// or for object (row) level: "#: message"
const VALIDATION_MESSAGE_PATTERN = /^#(?:\/([^/:]+)(?:\/\d+)?)?:\s*(.*)$/

// Object-level messages that are about a single property, capturing the property name
const PROPERTY_KEY_MESSAGE_PATTERNS = [
  /^required key \[([^\]]+)\] not found$/i,
  /^extraneous key \[([^\]]+)\] is not permitted$/i,
]

// Key that groups messages which are not about a single column
const ROW_LEVEL_KEY = '_row'

export type ParsedValidationMessage = {
  /** The column the message is about, or `undefined` for a row-level message. */
  columnName?: string
  message: string
}

function getPropertyKeyFromMessage(message: string): string | undefined {
  for (const pattern of PROPERTY_KEY_MESSAGE_PATTERNS) {
    const match = message.match(pattern)
    if (match) {
      return match[1]
    }
  }
  return undefined
}

// JSON Pointer tokens escape '~' as '~0' and '/' as '~1' (RFC 6901), so decode '~1' first
function decodeJsonPointerToken(token: string): string {
  return token.replaceAll('~1', '/').replaceAll('~0', '~')
}

/**
 * Parses a single validation message into the column it is about and the message text.
 * Returns `undefined` if the message is not in the expected format.
 *
 * Example:
 *  parseValidationMessage("#/a~1b: expected type: String, found: Null")
 *  -> { columnName: "a/b", message: "expected type: String, found: Null" }
 *
 *  parseValidationMessage("#: only 1 subschema matches out of 2")
 *  -> { columnName: undefined, message: "only 1 subschema matches out of 2" }
 */
export function parseValidationMessage(
  raw: string,
): ParsedValidationMessage | undefined {
  if (typeof raw !== 'string') return undefined
  const match = raw.trimStart().match(VALIDATION_MESSAGE_PATTERN)
  if (!match) return undefined

  const message = match[2].trim()
  const pointerToken = match[1]?.trim()
  return {
    columnName:
      pointerToken === undefined
        ? getPropertyKeyFromMessage(message)
        : decodeJsonPointerToken(pointerToken),
    message,
  }
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
 *  extractColumnValidationMessages(["#/a~1b: some error"])
 *  -> Map { "a/b" => ["some error"] }
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

  for (const raw of messages) {
    const parsed = parseValidationMessage(raw)
    if (!parsed) continue
    const columnName = parsed.columnName ?? ROW_LEVEL_KEY

    if (!columnMap.has(columnName)) {
      columnMap.set(columnName, [])
    }
    columnMap.get(columnName)!.push(parsed.message)
  }

  return columnMap
}
