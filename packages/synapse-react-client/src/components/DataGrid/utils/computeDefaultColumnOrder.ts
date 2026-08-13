import { JSONSchema7 } from 'json-schema'

/**
 * Computes the "default" column display order: the order properties are defined in the JSON schema,
 * with any columns not present in the schema appended afterward in their identity-index order.
 */
export function computeDefaultColumnOrder(
  columnNames: string[],
  jsonSchema: JSONSchema7 | undefined,
): number[] {
  const schemaPropertyNames = jsonSchema?.properties
    ? Object.keys(jsonSchema.properties)
    : []
  const orderedIndices: number[] = []
  const seen = new Set<number>()

  schemaPropertyNames.forEach(name => {
    const index = columnNames.indexOf(name)
    if (index !== -1 && !seen.has(index)) {
      orderedIndices.push(index)
      seen.add(index)
    }
  })

  columnNames.forEach((_, index) => {
    if (!seen.has(index)) {
      orderedIndices.push(index)
    }
  })

  return orderedIndices
}
