import { pointerToPropertyKey } from '@/utils/jsonschema/submissionContext'

// Validation message formats, where the first token of the JSON Pointer is the column:
//   "#/columnName: message"
//   "#/columnName/0: message" for an array item (or any other value nested in the column)
//   "#: message" for the row as a whole
const ROW_POINTER_PREFIX = '#:'
const COLUMN_POINTER_PREFIX = '#/'

// Row-level messages that are about a single property, capturing the property name. The name is matched up to
// the fixed suffix because property names may contain ']'.
const PROPERTY_KEY_MESSAGE_PATTERNS = [
  /^required key \[(.+)\] not found$/i,
  /^extraneous key \[(.+)\] is not permitted$/i,
]

/** Key that groups messages which are not about a single column */
export const ROW_LEVEL_KEY = '_row'

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

function decodeColumnToken(token: string): string | undefined {
  return pointerToPropertyKey(`/${token.trim()}`) ?? undefined
}

/**
 * Returns the index in `pointerAndMessage` where the pointer's column token ends.
 *
 * JSON Pointer escapes '/' within a token but not ':', so a column name containing ':' cannot be told apart from
 * the separator before the message by syntax alone. The longest token that names a known column wins; otherwise
 * the token ends at the first ':' or '/'.
 */
function findColumnTokenEnd(
  pointerAndMessage: string,
  columnNames: ReadonlySet<string>,
): number | undefined {
  let firstDelimiterIndex: number | undefined
  let knownColumnTokenEnd: number | undefined
  for (let index = 0; index < pointerAndMessage.length; index++) {
    const char = pointerAndMessage[index]
    if (char !== ':' && char !== '/') continue

    firstDelimiterIndex ??= index
    const candidate = decodeColumnToken(pointerAndMessage.slice(0, index))
    if (candidate !== undefined && columnNames.has(candidate)) {
      knownColumnTokenEnd = index
    }
    if (char === '/') break
  }
  return knownColumnTokenEnd ?? firstDelimiterIndex
}

function parseColumnMessage(
  pointerAndMessage: string,
  columnNames: ReadonlySet<string>,
): ParsedValidationMessage | undefined {
  const tokenEnd = findColumnTokenEnd(pointerAndMessage, columnNames)
  if (tokenEnd === undefined) return undefined

  const columnName = decodeColumnToken(pointerAndMessage.slice(0, tokenEnd))
  const separatorIndex = pointerAndMessage.indexOf(':', tokenEnd)
  if (columnName === undefined || separatorIndex === -1) return undefined

  return {
    columnName,
    message: pointerAndMessage.slice(separatorIndex + 1).trim(),
  }
}

/**
 * Parses a single validation message into the column it is about and the message text. A message in an unexpected
 * format is returned whole as a row-level message, so that it is still shown. Returns `undefined` for a non-string or
 * blank value.
 *
 * Example:
 *  parseValidationMessage("#/a~1b: expected type: String, found: Null")
 *  -> { columnName: "a/b", message: "expected type: String, found: Null" }
 *
 *  parseValidationMessage("#/time:utc: expected type: String, found: Null", new Set(["time:utc"]))
 *  -> { columnName: "time:utc", message: "expected type: String, found: Null" }
 *
 *  parseValidationMessage("#: only 1 subschema matches out of 2")
 *  -> { columnName: undefined, message: "only 1 subschema matches out of 2" }
 *
 *  parseValidationMessage("#: extraneous key [extraColumn] is not permitted")
 *  -> { columnName: "extraColumn", message: "extraneous key [extraColumn] is not permitted" }
 *
 * @param columnNames every column name in the grid, used to recognize column names that contain ':'
 */
export function parseValidationMessage(
  raw: string,
  columnNames: ReadonlySet<string> = new Set(),
): ParsedValidationMessage | undefined {
  if (typeof raw !== 'string') return undefined
  const trimmed = raw.trim()
  if (!trimmed) return undefined

  if (trimmed.startsWith(ROW_POINTER_PREFIX)) {
    const message = trimmed.slice(ROW_POINTER_PREFIX.length).trim()
    return { columnName: getPropertyKeyFromMessage(message), message }
  }

  const columnMessage = trimmed.startsWith(COLUMN_POINTER_PREFIX)
    ? parseColumnMessage(
        trimmed.slice(COLUMN_POINTER_PREFIX.length),
        columnNames,
      )
    : undefined
  return columnMessage ?? { columnName: undefined, message: trimmed }
}

/**
 * Groups parsed validation messages by the column they are about, in message order. Row-level messages are grouped
 * under {@link ROW_LEVEL_KEY}.
 *
 * Example:
 *  groupValidationMessagesByColumn([
 *    { columnName: "platform", message: "null is not a valid enum value" },
 *    { columnName: undefined, message: "only 1 subschema matches out of 2" },
 *  ])
 *  -> Map { "platform" => ["null is not a valid enum value"], "_row" => ["only 1 subschema matches out of 2"] }
 */
export function groupValidationMessagesByColumn(
  messages: ParsedValidationMessage[],
): Map<string, string[]> {
  const columnMap = new Map<string, string[]>()

  for (const { columnName = ROW_LEVEL_KEY, message } of messages) {
    if (!columnMap.has(columnName)) {
      columnMap.set(columnName, [])
    }
    columnMap.get(columnName)!.push(message)
  }

  return columnMap
}
