import { Column } from 'react-datasheet-grid'
import { GridModelSnapshot } from '../DataGridTypes'
import { createColumn } from './columnFactory'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'

export function modelColsToGrid(
  modelSnapshot: GridModelSnapshot,
  schemaPropertiesInfo: SchemaPropertiesMap,
): Column[] {
  if (!modelSnapshot) return []

  const { columnNames, columnOrder } = modelSnapshot

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
