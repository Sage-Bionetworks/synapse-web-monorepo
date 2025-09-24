import {
  Column,
  keyColumn,
  checkboxColumn,
  floatColumn,
  createTextColumn,
} from 'react-datasheet-grid'
import { autocompleteColumn } from '../columns/AutocompleteColumn'
import { autocompleteMultipleEnumColumn } from '../columns/AutocompleteMultipleEnumColumn'
import { TypeInfo } from '@/utils/jsonschema/getType'

type ColumnConfig = {
  columnName: string
  typeInfo: TypeInfo | null
  enumeratedValues: string[]
  isRequired: boolean
}

function getHeaderClassName(isRequired: boolean): string {
  return isRequired ? 'header-cell-required' : 'header-cell'
}

const COLUMN_FACTORIES = {
  multipleEnum: (config: ColumnConfig) => ({
    ...keyColumn(
      config.columnName,
      autocompleteMultipleEnumColumn({
        choices: config.enumeratedValues,
        colType: config.typeInfo?.type || null,
        limitTags: 3,
      }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
  }),

  boolean: (config: ColumnConfig) => ({
    ...keyColumn(config.columnName, checkboxColumn),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
  }),

  number: (config: ColumnConfig) => ({
    ...keyColumn(config.columnName, floatColumn),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
  }),

  enumerated: (config: ColumnConfig) => ({
    ...keyColumn(
      config.columnName,
      autocompleteColumn({
        choices: config.enumeratedValues,
        colType: config.typeInfo?.type || null,
      }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
  }),

  text: (config: ColumnConfig) => ({
    ...keyColumn(
      config.columnName,
      createTextColumn({ continuousUpdates: false }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
  }),
}

function calculateColumnWidth(columnName: string): number {
  return Math.max(175, columnName.length * 10)
}

function getColumnType(
  typeInfo: TypeInfo | null,
  enumeratedValues?: string[],
): keyof typeof COLUMN_FACTORIES {
  if (!typeInfo) {
    return enumeratedValues && enumeratedValues.length > 0
      ? 'enumerated'
      : 'text'
  }

  // Handle arrays - check if it's an array of enums
  if (typeInfo.type === 'array') {
    return 'multipleEnum'
  }

  if (typeInfo.type === 'boolean') {
    return 'boolean'
  }

  if (typeInfo.type === 'number' || typeInfo.type === 'integer') {
    return 'number'
  }

  if (enumeratedValues && enumeratedValues.length > 0) {
    return 'enumerated'
  }

  return 'text'
}

export function createColumn(config: ColumnConfig): Column {
  const columnType = getColumnType(config.typeInfo, config.enumeratedValues)
  return COLUMN_FACTORIES[columnType](config)
}
