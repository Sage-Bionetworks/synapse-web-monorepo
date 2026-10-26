import { EnumeratedValue } from '@/utils/jsonschema/getEnumeratedValues'
import { Column } from '@sage-bionetworks/react-datasheet-grid'
import { autocompleteColumn } from './AutocompleteColumn'

// Decimal notation only, so exponent, hex, and binary forms (e.g. "0x2B") are
// left as text for the validator to reject rather than stored as a different number.
const DECIMAL_NUMBER_PATTERN = /^-?\d+(\.\d+)?$/

/**
 * Converts text entered into a number-or-enum cell to the type its schema
 * expects: one of the allowed strings stays a string, a decimal number becomes
 * a number, and anything else is kept as trimmed text. The value is never
 * rounded or range-checked; the backend validator decides whether it is valid.
 */
export function parseNumberOrEnumInput(
  text: string,
  enumValues: readonly EnumeratedValue[],
): string | number {
  const trimmed = text.trim()
  if (enumValues.includes(trimmed)) {
    return trimmed
  }
  return DECIMAL_NUMBER_PATTERN.test(trimmed) ? Number(trimmed) : trimmed
}

export type NumberOrEnumColumnProps = {
  enumValues: EnumeratedValue[]
  clearValue: undefined | null
}

/**
 * A column for a property that is either a number or one of a closed set of
 * strings. It offers the strings as options and stores typed or pasted numbers
 * as numbers.
 */
export function numberOrEnumColumn({
  enumValues,
  clearValue,
}: NumberOrEnumColumnProps): Partial<Column> {
  return autocompleteColumn({
    choices: enumValues,
    parseFreeText: text => parseNumberOrEnumInput(text, enumValues),
    clearValue,
  })
}
