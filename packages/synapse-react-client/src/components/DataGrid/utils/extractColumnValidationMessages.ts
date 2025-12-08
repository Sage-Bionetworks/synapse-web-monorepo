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
      let columnName = match[1]?.trim() ?? '_row'
      const message = match[2].trim()
      if (columnName === '_row') {
        const requiredKeyMatch = message.match(
          /^required key \[([^\]]+)\] not found$/i,
        )
        if (requiredKeyMatch) {
          columnName = requiredKeyMatch[1]
        }
      }

      if (!columnMap.has(columnName)) {
        columnMap.set(columnName, [])
      }
      columnMap.get(columnName)!.push(message)
    }
  }

  return columnMap
}
