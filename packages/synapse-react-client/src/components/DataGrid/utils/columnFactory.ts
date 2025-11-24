import { dateTimeColumn } from '@/components/DataGrid/columns/DateTimeColumn'
import { EnumeratedValue } from '@/utils/jsonschema/getEnumeratedValues'
import { FlatTypeInfo } from '@/utils/jsonschema/getType'
import {
  Column,
  createTextColumn,
  floatColumn,
  keyColumn,
} from 'react-datasheet-grid'
import { autocompleteColumn } from '../columns/AutocompleteColumn'
import { autocompleteMultipleEnumColumn } from '../columns/AutocompleteMultipleEnumColumn'

type ColumnConfig = {
  columnName: string
  typeInfo: FlatTypeInfo | null
  enumeratedValues: EnumeratedValue[] | string[] | null
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
        choices: config.enumeratedValues ?? [],
        colType: config.typeInfo?.type || null,
        limitTags: 3,
      }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
  }),

  boolean: (config: ColumnConfig) => ({
    ...keyColumn(
      config.columnName,
      autocompleteColumn({
        choices: [true, false],
        colType: 'boolean',
      }),
    ),
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
        choices: config.enumeratedValues ?? [],
        colType: config.typeInfo?.type || null,
      }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
  }),

  'date-time': (config: ColumnConfig) => ({
    ...keyColumn(
      config.columnName,
      dateTimeColumn({
        colType: config.typeInfo?.type || null,
      }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: Math.max(calculateColumnWidth(config.columnName), 215),
  }),

  text: (config: ColumnConfig) => ({
    ...keyColumn(
      config.columnName,
      createTextColumn({ continuousUpdates: false }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
    cellClassName: 'MuiInputBase-input',
  }),
}

function calculateColumnWidth(columnName: string): number {
  return Math.max(175, columnName.length * 10)
}

function getColumnType(
  typeInfo: FlatTypeInfo | null,
  enumeratedValues?: EnumeratedValue[] | string[] | null,
): keyof typeof COLUMN_FACTORIES {
  if (!typeInfo) {
    return enumeratedValues && enumeratedValues.length > 0
      ? 'enumerated'
      : 'text'
  }

  if (typeInfo.format === 'date-time') {
    return 'date-time'
  }

  // Handle arrays - check if it's an array of enums
  if (typeInfo.isArray) {
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
