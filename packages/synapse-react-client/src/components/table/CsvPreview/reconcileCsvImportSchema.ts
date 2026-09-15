import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { ColumnModel, ColumnType } from '@sage-bionetworks/synapse-client'

// Text types that hold more than a STRING can and carry no maximumSize of their own. A STRING
// without an explicit maximumSize defaults to 50 characters and cannot exceed 1000, so coercing
// these would reject or truncate the CSV's own content. They already store free-form text, which is
// what a schema-declared string column needs, so leave them as suggested.
const WIDE_TEXT_COLUMN_TYPES: ReadonlySet<string> = new Set([
  ColumnType.MEDIUMTEXT,
  ColumnType.LARGETEXT,
])

function isDeclaredStringProperty(
  schemaPropertiesInfo: SchemaPropertiesMap,
  columnName: string,
): boolean {
  const propertyInfo = schemaPropertiesInfo[columnName]
  return (
    propertyInfo?.type?.type === 'string' &&
    !propertyInfo.type.isArray &&
    propertyInfo.type.format !== 'date-time'
  )
}

/**
 * The CSV preview step infers each column's type from the uploaded file's content alone, so a
 * column of syn-id-shaped values (e.g. "syn12345") is suggested as ENTITYID even when the column
 * already exists with a different type. For columns already known about, restore the known type
 * rather than trusting the content-based guess, in order of precedence:
 *  - If the column already exists with a known, exact ColumnType (e.g. a real Synapse Table's
 *    column), that exact type wins.
 *  - Otherwise, if the column is declared in a custom schema as a string, that declaration wins.
 *  - Otherwise, if the column already exists (e.g. a RecordSet system/metadata column like
 *    `entityId`, `id`, `path`, or `color`, which are not part of the custom schema), it's presumed
 *    to be a string, since it would otherwise render as plain text (columns absent from a schema
 *    default to a text cell).
 * A column that is not already known by any of the above is a brand-new column, so the CSV-inferred
 * type is used as-is. The string presumptions also leave wide text suggestions (MEDIUMTEXT,
 * LARGETEXT) as-is, since those are already string types that hold more than a STRING can.
 */
export function reconcileCsvImportSchema(
  suggestedColumns: ColumnModel[],
  schemaPropertiesInfo: SchemaPropertiesMap,
  existingColumnNames: readonly string[],
  existingColumnTypesByName: Readonly<Record<string, ColumnType>> = {},
): ColumnModel[] {
  const existingColumnNameSet = new Set(existingColumnNames)
  return suggestedColumns.map(column => {
    if (!column.name) {
      return column
    }

    const exactExistingType = existingColumnTypesByName[column.name]
    if (exactExistingType) {
      return exactExistingType === column.columnType
        ? column
        : { ...column, columnType: exactExistingType }
    }

    const isKnownStringColumn = schemaPropertiesInfo[column.name]
      ? isDeclaredStringProperty(schemaPropertiesInfo, column.name)
      : existingColumnNameSet.has(column.name)

    if (
      isKnownStringColumn &&
      column.columnType !== ColumnType.STRING &&
      !WIDE_TEXT_COLUMN_TYPES.has(column.columnType ?? '')
    ) {
      return { ...column, columnType: ColumnType.STRING }
    }
    return column
  })
}
