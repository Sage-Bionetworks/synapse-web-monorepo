import isEmpty from 'lodash-es/isEmpty'
import isEqual from 'lodash-es/isEqual'
import xorWith from 'lodash-es/xorWith'
import { removeUndefined } from './ObjectUtils'

/**
 * Removes trailing undefined elements from an array. Also removes trailing objects that are empty or only keys with
 * undefined values are present.
 */
export function removeTrailingUndefinedElements(params: unknown[]): unknown[] {
  const result = [...params]
  let lastElement = result[result.length - 1]
  while (
    result.length > 0 &&
    (lastElement === undefined ||
      // Also remove empty objects or objects where only keys with undefined values are present
      (typeof lastElement === 'object' &&
        isEmpty(removeUndefined(lastElement as Record<string, unknown>))))
  ) {
    result.pop()
    lastElement = result[result.length - 1]
  }
  return result
}

/**
 *  Returns true if an item exists in one array that does not exist in another, using deep comparison by default.
 */
export function hasDifference(
  x: Array<unknown>,
  y: Array<unknown>,
  comparator = isEqual,
): boolean {
  return xorWith(x, y, comparator).length > 0
}

/** Move the item at `idx` by `direction` (-1 or 1). Returns the same array reference if the move
 * would go out of bounds; otherwise a new array with the item relocated. */
export function moveItem<T>(arr: T[], idx: number, direction: -1 | 1): T[] {
  const newIdx = idx + direction
  if (newIdx < 0 || newIdx >= arr.length) return arr
  const next = [...arr]
  const [item] = next.splice(idx, 1)
  next.splice(newIdx, 0, item)
  return next
}
