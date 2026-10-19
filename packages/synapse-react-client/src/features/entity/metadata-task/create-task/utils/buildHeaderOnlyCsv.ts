import { CsvTableDescriptor } from '@sage-bionetworks/synapse-client'

/**
 * Builds a single-line, header-only CSV using the same quoting/escaping rules as the CSVWriter
 * Synapse uses server-side to write CSVs described by a `CsvTableDescriptor` (`au.com.bytecode.opencsv.CSVWriter`):
 * every field is always wrapped in `quoteCharacter`, and only fields containing the `quoteCharacter`
 * or `escapeCharacter` are processed character-by-character, doubling each occurrence of either.
 * The separator is never escaped, since every field is unconditionally quoted.
 */
export function buildHeaderOnlyCsv(
  headers: string[],
  descriptor: CsvTableDescriptor,
): string {
  const separator = descriptor.separator ?? ','
  const quoteChar = descriptor.quoteCharacter ?? '"'
  const escapeChar = descriptor.escapeCharacter ?? '\\'
  const lineEnd = descriptor.lineEnd ?? '\n'

  const row = headers
    .map(
      field =>
        `${quoteChar}${escapeField(field, quoteChar, escapeChar)}${quoteChar}`,
    )
    .join(separator)

  return row + lineEnd
}

function escapeField(
  field: string,
  quoteChar: string,
  escapeChar: string,
): string {
  if (!field.includes(quoteChar) && !field.includes(escapeChar)) {
    return field
  }

  let result = ''
  for (const char of field) {
    if (char === quoteChar || char === escapeChar) {
      result += char + char
    } else {
      result += char
    }
  }
  return result
}
