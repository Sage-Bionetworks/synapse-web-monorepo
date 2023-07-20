export type JSONPrimitiveType = string | number | boolean | null

/**
 * returns true iff the value is a primitive that could have been parsed from JSON
 * i.e. is null, string, number, or boolean
 *
 * This is false for objects and arrays, as well as JavaScript types that are not valid JSON, like
 * undefined, NaN, Infinity, Symbol, and functions
 * @param value
 */
export function isJSONPrimitive(value: unknown): value is JSONPrimitiveType {
  if (value === null) {
    return true
  }
  if (typeof value === 'number') {
    return !Number.isNaN(value) && Number.isFinite(value)
  }
  return ['string', 'boolean'].includes(typeof value)
}

export function isJSONObjectAllPrimitiveKeys(
  value: object,
): value is Record<string, JSONPrimitiveType> {
  return Object.values(value).every(v => isJSONPrimitive(v))
}
