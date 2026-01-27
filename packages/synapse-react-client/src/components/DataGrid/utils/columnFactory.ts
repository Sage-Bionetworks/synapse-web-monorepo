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
import { calculateDefaultColumnWidth } from './calculateColumnWidth'

type ColumnConfig = {
  columnName: string
  disabled?: boolean
  typeInfo: FlatTypeInfo | null
  enumeratedValues: EnumeratedValue[] | string[] | null
  isRequired: boolean
  customWidth?: number
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

function createBaseColumn(config: ColumnConfig, columnImpl: any) {
  const width =
    config.customWidth ?? calculateDefaultColumnWidth(config.columnName)

  return {
    ...keyColumn(config.columnName, columnImpl),
    title: config.columnName,
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: width,
    basis: width,
    grow: 0,
    shrink: 0,
    disabled: config.disabled,
    deleteValue: createDeleteValue(config.columnName, config.isRequired),
  }
}

const COLUMN_FACTORIES = {
  multipleEnum: (config: ColumnConfig) => {
    return createBaseColumn(
      config,
      autocompleteMultipleEnumColumn({
        choices: config.enumeratedValues ?? [],
        colType: config.typeInfo?.type || null,
        limitTags: 3,
        clearValue: config.isRequired ? null : undefined,
      }),
    )
  },

  boolean: (config: ColumnConfig) => {
    return createBaseColumn(
      config,
      autocompleteColumn({
        choices: [true, false],
        colType: 'boolean',
        clearValue: config.isRequired ? null : undefined,
      }),
    )
  },

  number: (config: ColumnConfig) => {
    return createBaseColumn(config, floatColumn)
  },

  enumerated: (config: ColumnConfig) => {
    return createBaseColumn(
      config,
      autocompleteColumn({
        choices: config.enumeratedValues ?? [],
        colType: config.typeInfo?.type || null,
        clearValue: config.isRequired ? null : undefined,
      }),
    )
  },

  'date-time': (config: ColumnConfig) => {
    const columnImpl = dateTimeColumn({
      colType: config.typeInfo?.type || null,
    })

    // Date-time needs special width calculation
    const width =
      config.customWidth ??
      calculateDefaultColumnWidth(config.columnName, {
        type: config.typeInfo ?? undefined,
        isRequired: config.isRequired,
        enumeratedValues: null,
      })

    return {
      ...createBaseColumn(config, columnImpl),
      minWidth: width,
      basis: width,
    }
  },

  text: (config: ColumnConfig) => {
    const columnImpl = createTextColumn({
      continuousUpdates: false,
      deletedValue: undefined,
      parseUserInput: createParseUserInput(config.isRequired),
    })

    return {
      ...createBaseColumn(config, columnImpl),
      cellClassName: 'MuiInputBase-input',
    }
  },
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
