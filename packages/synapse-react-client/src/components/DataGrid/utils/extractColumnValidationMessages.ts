/**
 * Extracts column name and validation message from validation message strings.
 *
 * Example:
 *  extractColumnValidationMessages(["#/platform: null is not a valid enum value"])
 *  -> Map { "platform" => ["null is not a valid enum value"] }
 *
 *  extractColumnValidationMessages(["#/requiredNumberArrayColumn/0: some error"])
 *  -> Map { "requiredNumberArrayColumn" => ["some error"] }
 */
export function extractColumnValidationMessages(
  messages: string[],
): Map<string, string[]> {
  const columnMap = new Map<string, string[]>()
  // Validation message format: "#/columnName: message"
  // or for array items: "#/columnName/0: message"
  const regex = /^#\/([^/:]+)(?:\/\d+)?:\s*(.*)$/

  for (const raw of messages) {
    if (typeof raw !== 'string') continue
    const str = raw.trimStart()
    const match = str.match(regex)
    if (match) {
      const columnName = match[1].trim()
      const message = match[2].trim()

      if (!columnMap.has(columnName)) {
        columnMap.set(columnName, [])
      }
      columnMap.get(columnName)!.push(message)
    }
  }

  return columnMap
}
