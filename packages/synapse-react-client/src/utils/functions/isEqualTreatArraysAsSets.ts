import { cloneDeep, isArray, isEqualWith } from 'lodash-es'

/**
 * Compares two objects for equality, ignoring the order of elements in arrays.
 * @param a
 * @param b
 */
export default function isEqualTreatArraysAsSets(a: unknown, b: unknown) {
  a = cloneDeep(a)
  b = cloneDeep(b)
  return isEqualWith(a, b, (a: unknown, b: unknown): boolean | undefined => {
    if (isArray(a) && isArray(b)) {
      return (
        a.length === b.length &&
        a.every(aItem =>
          b.some(bItem => isEqualTreatArraysAsSets(aItem, bItem)),
        )
      )
    }
    // Fall back to default comparison
    return undefined
  })
}
