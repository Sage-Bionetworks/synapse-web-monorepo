import DateTimePicker from '@/components/DateTimePicker/DateTimePicker'
import { Box, SxProps, Theme, Tooltip } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { JSONSchema7Type } from 'json-schema'
import isNil from 'lodash-es/isNil'
import {
  CellComponent,
  CellProps,
  Column,
} from '@sage-bionetworks/react-datasheet-grid'
import { castCellValueToString } from './AutocompleteColumn'

const UNPARSEABLE_VALUE_SX: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  px: '14px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}

export type DateTimeCellProps = CellProps & {
  colType?: JSONSchema7Type
}

export type DateTimeCellValue =
  | { kind: 'empty' }
  | { kind: 'date'; date: Dayjs }
  | { kind: 'unparseable'; text: string }

// dayjs coerces values it has no business accepting — dayjs(true) yields epoch
// 1ms — so restrict parsing to types that can legitimately carry a date.
function isDateLike(value: unknown): boolean {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    value instanceof Date ||
    dayjs.isDayjs(value)
  )
}

/**
 * Classify a stored cell value as empty, a usable date, or something the picker
 * cannot represent.
 *
 * Numeric schema types store epoch milliseconds, but an imported value can
 * arrive as a numeric string, which dayjs would otherwise read as a year
 * ("1705314600000" parses to 1707). Coercion is attempted only when the string
 * is fully numeric, so an ISO string in a numeric column still parses as a date.
 */
export function interpretDateTimeCellValue(
  rowData: unknown,
  colType?: JSONSchema7Type,
): DateTimeCellValue {
  if (
    isNil(rowData) ||
    (typeof rowData === 'string' && rowData.trim() === '')
  ) {
    return { kind: 'empty' }
  }

  const unparseable = {
    kind: 'unparseable',
    text: castCellValueToString(rowData),
  } as const

  if (!isDateLike(rowData)) {
    return unparseable
  }

  const expectsEpochMillis = colType === 'number' || colType === 'integer'
  const epochMillis =
    expectsEpochMillis &&
    typeof rowData === 'string' &&
    Number.isFinite(Number(rowData))
      ? Number(rowData)
      : null

  const date = dayjs((epochMillis ?? rowData) as dayjs.ConfigType)
  return date.isValid() ? { kind: 'date', date } : unparseable
}

export function DateTimeCell({
  rowData,
  setRowData,
  disabled,
  colType,
  active,
}: DateTimeCellProps) {
  const cellValue = interpretDateTimeCellValue(rowData, colType)

  // The picker renders a value it can't parse as an empty field, which hides
  // imported data that fails schema validation. Show the raw value instead until
  // the user activates the cell, at which point the picker is the only way to
  // replace it. The value is left untouched unless the user commits a change.
  if (cellValue.kind === 'unparseable' && !active) {
    return (
      <Tooltip title={cellValue.text} placement="top-start" arrow>
        <Box sx={UNPARSEABLE_VALUE_SX}>{cellValue.text}</Box>
      </Tooltip>
    )
  }

  return (
    <DateTimePicker
      disabled={disabled}
      value={cellValue.kind === 'date' ? cellValue.date : null}
      onChange={(newValue: string | Dayjs | null) => {
        if (newValue == null) {
          setRowData(null)
        } else if (colType === 'number' || colType === 'integer') {
          // Assume unix millisecond timestamp
          setRowData(dayjs(newValue).valueOf())
        } else {
          // colType is 'string' or unspecified, use ISO string
          setRowData(dayjs(newValue).toISOString())
        }
      }}
      sx={{
        // When disabled, allow selecting the entire cell
        pointerEvents: disabled ? 'none' : undefined,
        width: '100%',
        height: '100%',
        '& .MuiInputBase-root': {
          height: '100%',
          backgroundColor: 'inherit',
        },
      }}
    />
  )
}

export type DateTimeColumnProps = {
  colType?: JSONSchema7Type
}

export function dateTimeColumn({
  colType,
}: DateTimeColumnProps): Partial<Column> {
  return {
    component: ((props: DateTimeCellProps) => (
      <DateTimeCell {...props} colType={colType} />
    )) as CellComponent,
    copyValue: ({ rowData }) => rowData,
    pasteValue: ({ value }) => value,
    disableKeys: true,
    keepFocus: true,
  }
}
