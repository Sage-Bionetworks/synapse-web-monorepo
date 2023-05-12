/**
 * Removes fields with value 'undefined' from an object (not recursive).
 *
 * Use the `inPlace` parameter to modify the object (using `delete`), rather than creating a new object.
 *
 * See https://stackoverflow.com/questions/25421233
 */
export function removeUndefined(obj: Record<string, unknown>, inPlace = false) {
  if (inPlace) {
    Object.keys(obj).forEach(key =>
      obj[key] === undefined ? delete obj[key] : {},
    )
    return obj
  } else {
    return Object.keys(obj).reduce((acc, key) => {
      const _acc = acc
      if (obj[key] !== undefined) _acc[key] = obj[key]
      return _acc
    }, {})
  }
}
