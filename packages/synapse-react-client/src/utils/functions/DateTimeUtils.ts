/**
 * Returns true iff the given string is a valid ISO timestamp.
 *
 * See https://stackoverflow.com/a/52869830
 * @param maybeISOTimestamp
 */
export function isISOTimestamp(maybeISOTimestamp: string): boolean {
  // Must match the ISO Timestamp format
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(maybeISOTimestamp))
    return false
  const d = new Date(maybeISOTimestamp)
  return (
    d instanceof Date &&
    // Verify that the date is valid
    !isNaN(d.getTime()) &&
    d.toISOString() === maybeISOTimestamp
  )
}
