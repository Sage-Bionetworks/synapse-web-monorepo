import isArray from 'lodash-es/isArray'
import isObject from 'lodash-es/isObject'
import { JSONSchema7 } from 'json-schema'

/**
 * Returns a de-duplicated list of required attribute names from a JSON Schema.
 * Traverses nested combinators (allOf, anyOf, oneOf).
 * For:
 *  - allOf: union of required fields
 */
export default function getRequiredAttributes(
  jsonSchema: JSONSchema7 | Record<string, unknown> | undefined | null,
): string[] {
  if (!jsonSchema || !isObject(jsonSchema)) return []

  const collected = new Set<string>()
  const visited = new Set<object>()

  function visit(
    schema: JSONSchema7 | Record<string, unknown> | undefined | null,
  ) {
    if (!isObject(schema) || visited.has(schema)) return
    visited.add(schema)

    if (isArray(schema.required)) {
      for (const r of schema.required) {
        if (typeof r === 'string') collected.add(r)
      }
    }

    ;['allOf'].forEach(key => {
      const group = (schema as any)[key]
      if (isArray(group)) {
        group.forEach(sub => visit(sub))
      }
    })
  }

  visit(jsonSchema)
  return Array.from(collected)
}
