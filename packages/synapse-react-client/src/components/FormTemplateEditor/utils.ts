import { RJSFSchema } from '@rjsf/utils'

/** Move an item in an array by `direction`. Returns a new array. */
export function moveItem<T>(arr: T[], idx: number, direction: -1 | 1): T[] {
  const newIdx = idx + direction
  if (newIdx < 0 || newIdx >= arr.length) return arr
  const next = [...arr]
  const [item] = next.splice(idx, 1)
  next.splice(newIdx, 0, item)
  return next
}

/** Normalize a JSON pointer (ensure leading slash). */
export function normalizePointer(p: string): string {
  if (!p) return p
  return p.startsWith('/') ? p : `/${p}`
}

export type SchemaPropertyOption = {
  propertyName: string
  title?: string
  type?: string
  format?: string
}

/**
 * List the leaf properties of an object JSON Schema in a form suitable for
 * binding to a FormTemplateField. Only inspects top-level properties — nested
 * objects are out of scope per the design's non-goals.
 */
export function listSchemaProperties(
  schema: RJSFSchema,
): SchemaPropertyOption[] {
  const props = schema.properties ?? {}
  return Object.entries(props).map(([propertyName, raw]) => {
    const sub = (typeof raw === 'object' ? (raw as RJSFSchema) : {}) ?? {}
    return {
      propertyName,
      title: sub.title,
      type: sub.type as string | undefined,
      format: sub.format,
    }
  })
}
