import { Column } from '@sage-bionetworks/react-datasheet-grid'
import { createColumn } from './columnFactory'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'

export function modelColsToGrid(
  columnNames: string[],
  columnOrder: number[],
  schemaPropertiesInfo: SchemaPropertiesMap,
  columnWidths: Record<string, number> = {},
): Column[] {
  return columnOrder.map((index: number) => {
    const columnName = columnNames[index]
    const propertyInfo = schemaPropertiesInfo[columnName]

    return createColumn({
      columnName,
      typeInfo: propertyInfo?.type || null,
      enumeratedValues: propertyInfo?.enumeratedValues || [],
      isRequired: propertyInfo?.isRequired || false,
      disabled: propertyInfo?.type?.readOnly,
      customWidth: columnWidths[columnName],
    })
  })
}
