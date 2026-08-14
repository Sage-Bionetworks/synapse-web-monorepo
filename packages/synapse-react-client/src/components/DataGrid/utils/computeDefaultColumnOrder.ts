import { JSONSchema7 } from 'json-schema'

/**
 * Computes the "default" column display order: upsert key columns first (in the order given),
 * then the order properties are defined in the JSON schema, with any remaining columns appended
 * afterward in their identity-index order.
 */
export function computeDefaultColumnOrder(
  columnNames: string[],
  jsonSchema: JSONSchema7 | undefined,
  upsertKeyColumnNames?: string[],
): number[] {
  const schemaPropertyNames = jsonSchema?.properties
    ? Object.keys(jsonSchema.properties)
    : []
  const orderedIndices: number[] = []
  const seen = new Set<number>()

  const addColumnByName = (name: string) => {
    const index = columnNames.indexOf(name)
    if (index !== -1 && !seen.has(index)) {
      orderedIndices.push(index)
      seen.add(index)
    }
  }

  upsertKeyColumnNames?.forEach(addColumnByName)
  schemaPropertyNames.forEach(addColumnByName)

  columnNames.forEach((_, index) => {
    if (!seen.has(index)) {
      orderedIndices.push(index)
    }
  })

  return orderedIndices
}
