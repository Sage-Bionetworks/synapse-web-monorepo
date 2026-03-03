import { Column } from '@sage-bionetworks/react-datasheet-grid'
import { createColumn } from './columnFactory'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'

export function modelColsToGrid(
  columnNames: string[],
  columnOrder: number[],
  schemaPropertiesInfo: SchemaPropertiesMap,
  columnWidths: Record<string, number> = {},
  pinnedColumns: Set<number> = new Set(),
  onTogglePin?: (columnIndex: number) => void,
): Column[] {
  return columnOrder.map((index: number, arrayIndex: number) => {
    const columnName = columnNames[index]
    const propertyInfo = schemaPropertiesInfo[columnName]

    // Only show pin functionality for the first column
    const showPinIcon = arrayIndex === 0
    const isPinned = pinnedColumns.has(arrayIndex)

    return createColumn({
      columnName,
      description: propertyInfo?.description,
      typeInfo: propertyInfo?.type || null,
      enumeratedValues: propertyInfo?.enumeratedValues || [],
      isRequired: propertyInfo?.isRequired || false,
      disabled: propertyInfo?.type?.readOnly,
      customWidth: columnWidths[columnName],
      showPinIcon,
      isPinned,
      onTogglePin: () => onTogglePin?.(arrayIndex),
    })
  })
}
