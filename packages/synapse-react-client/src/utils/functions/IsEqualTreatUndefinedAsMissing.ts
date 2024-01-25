/* eslint-disable @typescript-eslint/no-explicit-any */
// `any` is safe for these comparison functions
import { isArray, isObject, includes, isEqualWith, omitBy } from 'lodash-es'

const comparisonFunc = (a: any, b: any): boolean | undefined => {
  if (isArray(a) || isArray(b)) return
  if (!isObject(a) || !isObject(b)) return

  if (!includes<any>(a, undefined) && !includes<any>(b, undefined)) return

  // Call recursively, after filtering all undefined properties
  return isEqualWith(
    omitBy(a, value => value === undefined),
    omitBy(b, value => value === undefined),
    comparisonFunc,
  )
}

/**
 * A version of lodash's isEqual that treats undefined and missing as equal.
 *
 * Note: `null` and missing/undefined are not considered equal in this implementation
 */
export function isEqualTreatUndefinedAsMissing(a: any, b: any): boolean {
  /* implementation lifted from https://stackoverflow.com/a/57894104 */
  return isEqualWith(a, b, comparisonFunc)
}
