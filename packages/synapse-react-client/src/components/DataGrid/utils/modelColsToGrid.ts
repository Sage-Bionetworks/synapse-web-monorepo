import { Column } from 'react-datasheet-grid'
import { createColumn } from './columnFactory'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'

export function modelColsToGrid(
  columnNames: string[],
  columnOrder: number[],
  schemaPropertiesInfo: SchemaPropertiesMap,
): Column[] {
  return columnOrder.map((index: number) => {
    const columnName = columnNames[index]
    const propertyInfo = schemaPropertiesInfo[columnName]

    return createColumn({
      columnName,
      typeInfo: propertyInfo?.type || null,
      enumeratedValues: propertyInfo?.enumeratedValues || [],
      isRequired: propertyInfo?.isRequired || false,
    })
  })
}
