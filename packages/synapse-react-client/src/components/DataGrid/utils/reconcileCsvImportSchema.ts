import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { ColumnModel, ColumnType } from '@sage-bionetworks/synapse-client'

/**
 * The CSV preview step infers each column's type from the uploaded file's content alone, so a
 * column of syn-id-shaped values (e.g. "syn12345") is suggested as ENTITYID even when the grid's
 * schema already declares that column a plain string. For columns the grid already knows about,
 * the schema is authoritative, so restore the declared STRING type rather than trusting the
 * content-based guess.
 */
export function reconcileCsvImportSchema(
  suggestedColumns: ColumnModel[],
  schemaPropertiesInfo: SchemaPropertiesMap,
): ColumnModel[] {
  return suggestedColumns.map(column => {
    const propertyInfo = column.name
      ? schemaPropertiesInfo[column.name]
      : undefined
    const isKnownStringColumn =
      propertyInfo?.type?.type === 'string' &&
      !propertyInfo.type.isArray &&
      propertyInfo.type.format !== 'date-time'

    if (isKnownStringColumn && column.columnType !== ColumnType.STRING) {
      return { ...column, columnType: ColumnType.STRING }
    }
    return column
  })
}
