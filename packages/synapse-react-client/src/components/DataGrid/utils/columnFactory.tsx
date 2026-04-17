import { dateTimeColumn } from '@/components/DataGrid/columns/DateTimeColumn'
import { EnumeratedValue } from '@/utils/jsonschema/getEnumeratedValues'
import { FlatTypeInfo } from '@/utils/jsonschema/getType'
import {
  CellComponent,
  CellProps,
  Column,
  createTextColumn,
  floatColumn,
  keyColumn,
} from '@sage-bionetworks/react-datasheet-grid'
import { autocompleteColumn } from '../columns/AutocompleteColumn'
import { autocompleteMultipleEnumColumn } from '../columns/AutocompleteMultipleEnumColumn'
import {
  calculateDefaultColumnWidth,
  HeaderOptions,
} from './calculateColumnWidth'
import { ColumnHeaderWithTooltip } from '../components/ColumnHeaderWithTooltip'
import { Tooltip } from '@mui/material'
import { SmartToyTwoTone } from '@mui/icons-material'
import type { DataGridRow } from '../DataGridTypes'

/**
 * Wraps a column cell component to overlay change-attribution indicators:
 * - Non-agent changes: invisible 7×7px tooltip trigger over the CSS triangle (top-right).
 * - Agent changes: robot icon (1em, vertically centered on the right) with no triangle.
 */
function withChangeIndicatorTooltip<T, C>(
  OriginalComponent: CellComponent<T, C>,
  colName: string,
): CellComponent<T, C> {
  function CellWithTooltip(props: CellProps<T, C>) {
    const changeInfo = (props.rowData as DataGridRow).__cellChangeInfo?.[
      colName
    ]
    const isAgent =
      changeInfo?.category === 'own-agent' ||
      changeInfo?.category === 'other-agent'
    return (
      <>
        <OriginalComponent {...props} />
        {changeInfo && !isAgent && (
          <Tooltip title={changeInfo.tooltipText} placement="top-end">
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 7,
                height: 7,
                zIndex: 21,
                pointerEvents: 'auto',
              }}
            />
          </Tooltip>
        )}
        {isAgent && !props.focus && (
          <Tooltip title={changeInfo.tooltipText} placement="left">
            <SmartToyTwoTone
              sx={{
                fontSize: '1em',
                alignSelf: 'center',
                flexShrink: 0,
                mr: 0.5,
                zIndex: 21,
                pointerEvents: 'auto',
                backgroundColor: 'transparent',
              }}
            />
          </Tooltip>
        )}
      </>
    )
  }
  CellWithTooltip.displayName = `CellWithTooltip(${colName})`
  return CellWithTooltip
}

type ColumnConfig = {
  columnName: string
  description?: string
  disabled?: boolean
  typeInfo: FlatTypeInfo | null
  enumeratedValues: EnumeratedValue[] | string[] | null
  isRequired: boolean
  customWidth?: number
  showPinIcon?: boolean
  isPinned?: boolean
  onTogglePin?: () => void
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
  const headerOptions: HeaderOptions = {
    showPinIcon: config.showPinIcon,
    hasDescription: !!config.description,
  }

  const width =
    config.customWidth ??
    calculateDefaultColumnWidth(
      config.columnName,
      undefined, // propertyInfo is not available here, passed from higher level
      headerOptions,
    )

  const keyed = keyColumn(config.columnName, columnImpl)
  return {
    ...keyed,
    component: withChangeIndicatorTooltip(keyed.component!, config.columnName),
    title: (
      <ColumnHeaderWithTooltip
        name={config.columnName}
        description={config.description}
        showPinIcon={config.showPinIcon}
        isPinned={config.isPinned}
        onTogglePin={config.onTogglePin}
      />
    ),
    headerClassName: getHeaderClassName(config.isRequired),
    minWidth: width,
    basis: width,
    grow: 0,
    shrink: 0,
    disabled: config.disabled,
    deleteValue: createDeleteValue(config.columnName, config.isRequired),
    stickyLeft: config.isPinned,
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
    const headerOptions: HeaderOptions = {
      showPinIcon: config.showPinIcon,
      hasDescription: !!config.description,
    }

    const width =
      config.customWidth ??
      calculateDefaultColumnWidth(
        config.columnName,
        {
          type: config.typeInfo ?? undefined,
          isRequired: config.isRequired,
          enumeratedValues: null,
        },
        headerOptions,
      )

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
