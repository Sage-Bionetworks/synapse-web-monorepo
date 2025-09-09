import isArray from 'lodash-es/isArray'
import isObject from 'lodash-es/isObject'

/**
 * Returns a de-duplicated list of required attribute names from a JSON Schema.
 * Traverses nested combinators (allOf, anyOf, oneOf).
 * For:
 *  - allOf: union of required fields
 *  - anyOf / oneOf: union (pragmatic; intersection could be too restrictive for most UI uses)
 */
export default function getRequiredAttributes(
  jsonSchema: Record<string, unknown> | undefined | null,
): string[] {
  if (!jsonSchema || !isObject(jsonSchema)) return []

  const collected = new Set<string>()
  const visited = new Set<object>()

  function visit(schema: any) {
    if (!isObject(schema) || visited.has(schema)) return
    visited.add(schema)

    if (isArray(schema.required)) {
      for (const r of schema.required) {
        if (typeof r === 'string') collected.add(r)
      }
    }

    ;['allOf', 'anyOf', 'oneOf'].forEach(key => {
      const group = schema[key]
      if (isArray(group)) {
        group.forEach(sub => visit(sub))
      }
    })
  }

  visit(jsonSchema)
  return Array.from(collected)
}
