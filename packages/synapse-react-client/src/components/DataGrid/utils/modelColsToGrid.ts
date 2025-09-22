import { Column } from 'react-datasheet-grid'
import { GridModelSnapshot } from '../DataGridTypes'
import { createColumn } from './columnFactory'

export function modelColsToGrid(
  modelSnapshot: GridModelSnapshot,
  schemaPropertiesInfo: Record<string, any>,
): Column[] {
  if (!modelSnapshot) return []

  const { columnNames, columnOrder } = modelSnapshot

  return columnOrder.map((index: number) => {
    const columnName = columnNames[index]
    const propertyInfo = schemaPropertiesInfo[columnName]
    console.log('propertyInfo', propertyInfo)
    console.log('proparray', propertyInfo?.type?.isArray)

    return createColumn({
      columnName,
      typeInfo: propertyInfo?.type || null,
      enumeratedValues: propertyInfo?.enumeratedValues || [],
      isRequired: propertyInfo?.isRequired || false,
    })
  })
}
