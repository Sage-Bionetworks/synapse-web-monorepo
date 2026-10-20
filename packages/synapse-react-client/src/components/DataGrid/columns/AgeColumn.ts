import { Column } from '@sage-bionetworks/react-datasheet-grid'
import { autocompleteColumn } from './AutocompleteColumn'

// Decimal notation only, so exponent, hex, and binary forms (e.g. "0x2B") are
// left as text for the validator to reject rather than stored as a different age.
const DECIMAL_NUMBER_PATTERN = /^-?\d+(\.\d+)?$/

/**
 * Converts text entered into a masked-age cell to the type its schema expects:
 * a sentinel stays a string, a decimal number becomes a number, and anything
 * else is kept as trimmed text. The value is never rounded or range-checked;
 * the backend validator decides whether it is an acceptable age.
 */
export function parseAgeInput(
  text: string,
  sentinels: readonly string[],
): string | number {
  const trimmed = text.trim()
  if (sentinels.includes(trimmed)) {
    return trimmed
  }
  return DECIMAL_NUMBER_PATTERN.test(trimmed) ? Number(trimmed) : trimmed
}

export type AgeColumnProps = {
  sentinels: string[]
  clearValue: undefined | null
}

/**
 * A column for a masked age property that offers the sentinels as options and
 * stores typed or pasted numbers as numbers.
 */
export function ageColumn({
  sentinels,
  clearValue,
}: AgeColumnProps): Partial<Column> {
  return autocompleteColumn({
    choices: sentinels,
    parseFreeText: text => parseAgeInput(text, sentinels),
    clearValue,
  })
}
