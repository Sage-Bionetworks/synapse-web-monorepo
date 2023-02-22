import { isEmpty } from 'lodash-es'
import { removeUndefined } from './ObjectUtils'

/**
 * Removes trailing undefined elements from an array. Also removes trailing objects that are empty or only keys with
 * undefined values are present.
 */
export function removeTrailingUndefinedElements(params: any[]): any[] {
  const result = [...params]
  let lastElement = result[result.length - 1]
  while (
    result.length > 0 &&
    (lastElement === undefined ||
      // Also remove empty objects or objects where only keys with undefined values are present
      (typeof lastElement === 'object' &&
        isEmpty(removeUndefined(lastElement))))
  ) {
    result.pop()
    lastElement = result[result.length - 1]
  }
  return result
}
