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
  disabled?: boolean
  typeInfo: FlatTypeInfo | null
  enumeratedValues: EnumeratedValue[] | string[] | null
  isRequired: boolean
}

function getHeaderClassName(isRequired: boolean): string {
  return isRequired ? 'header-cell-required' : 'header-cell'
}

function createDeleteValue(columnName: string, isRequired?: boolean) {
  return ({ rowData }: { rowData: Record<string, unknown> }) => ({
    ...rowData,
    [columnName]: isRequired ? null : undefined,
  })
}

function createParseUserInput(isRequired?: boolean) {
  return (value: string) => {
    const trimmedValue = value.trim()
    if (trimmedValue === '') {
      return isRequired ? null : undefined
    }
    return trimmedValue
  }
}

const COLUMN_FACTORIES = {
  multipleEnum: (config: ColumnConfig) => ({
    ...keyColumn(
      config.columnName,
      autocompleteMultipleEnumColumn({
        choices: config.enumeratedValues ?? [],
        colType: config.typeInfo?.type || null,
        limitTags: 3,
        clearValue: config.isRequired ? null : undefined,
      }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
    disabled: config.disabled,
    deleteValue: createDeleteValue(config.columnName, config.isRequired),
  }),

  boolean: (config: ColumnConfig) => ({
    ...keyColumn(
      config.columnName,
      autocompleteColumn({
        choices: [true, false],
        colType: 'boolean',
        clearValue: config.isRequired ? null : undefined,
      }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
    disabled: config.disabled,
    deleteValue: createDeleteValue(config.columnName, config.isRequired),
  }),

  number: (config: ColumnConfig) => ({
    ...keyColumn(config.columnName, floatColumn),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
    disabled: config.disabled,
    deleteValue: createDeleteValue(config.columnName, config.isRequired),
  }),

  enumerated: (config: ColumnConfig) => ({
    ...keyColumn(
      config.columnName,
      autocompleteColumn({
        choices: config.enumeratedValues ?? [],
        colType: config.typeInfo?.type || null,
        clearValue: config.isRequired ? null : undefined,
      }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
    disabled: config.disabled,
    deleteValue: createDeleteValue(config.columnName, config.isRequired),
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
    disabled: config.disabled,
    deleteValue: createDeleteValue(config.columnName, config.isRequired),
  }),

  text: (config: ColumnConfig) => ({
    ...keyColumn(
      config.columnName,
      createTextColumn({
        continuousUpdates: false,
        deletedValue: undefined,
        parseUserInput: createParseUserInput(config.isRequired),
      }),
    ),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: calculateColumnWidth(config.columnName),
    cellClassName: 'MuiInputBase-input',
    disabled: config.disabled,
    deleteValue: createDeleteValue(config.columnName, config.isRequired),
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
