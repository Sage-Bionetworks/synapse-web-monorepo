/**
 * A positive whole number, e.g. "1", "42". Does not allow leading zeros, decimals, or negative numbers.
 */
const POSITIVE_INTEGER_PATTERN = /^[1-9][0-9]*$/

/**
 * Returns true if `value` is a positive integer (a valid Synapse task ID). If `allowEmpty` is true, an
 * empty/whitespace-only string is also considered valid (useful for not-yet-required fields).
 */
export function isValidTaskIdInput(
  value: string,
  options: { allowEmpty?: boolean } = {},
): boolean {
  const trimmed = value.trim()
  if (trimmed === '') {
    return options.allowEmpty ?? false
  }
  return POSITIVE_INTEGER_PATTERN.test(trimmed)
}

/** Parses a task ID input string into a number, or undefined if it is not a valid positive integer. */
export function parseTaskIdInput(value: string): number | undefined {
  if (!isValidTaskIdInput(value)) {
    return undefined
  }
  return Number(value.trim())
}
