import DatePicker from '@/components/DatePicker/DatePicker'
import DateTimePicker from '@/components/DateTimePicker/DateTimePicker'
import { Box, SxProps, Theme, Tooltip } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { JSONSchema7Type } from 'json-schema'
import isNil from 'lodash-es/isNil'
import {
  CellComponent,
  CellProps,
  Column,
} from '@sage-bionetworks/react-datasheet-grid'
import { castCellValueToString } from './AutocompleteColumn'

dayjs.extend(utc)

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

const PICKER_SX: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  '& .MuiInputBase-root': {
    height: '100%',
    backgroundColor: 'inherit',
  },
}

/** The JSON Schema `date` format: an RFC 3339 full-date, e.g. 2026-12-25. */
export const FULL_DATE_FORMAT_NAME = 'date'

const FULL_DATE_PATTERN = 'YYYY-MM-DD'
const LEADING_FULL_DATE = /^\d{4}-\d{2}-\d{2}/

// Epoch millis reaches 11 digits in 1973 — longer than any date notation dayjs
// accepts, whose longest form is an 8-digit YYYYMMDD — so a numeric string this
// long is a timestamp rather than a date to parse. dayjs would otherwise read
// "1705314600000" as the year 1707.
const EPOCH_MILLIS_STRING = /^-?\d{11,}$/

export type DateTimeCellProps = CellProps & {
  colType?: JSONSchema7Type
  /**
   * The column's JSON Schema `format`. `date` collects a calendar date only;
   * anything else collects a date and time of day.
   */
  format?: string
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
 * Read a value that carries epoch milliseconds as a string, or null if it does
 * not. A column of any schema type can hold one: server-side CSV import writes
 * cells without client-side parsing, and a value that has round-tripped through
 * a store that represents dates as timestamps comes back this way.
 */
function parseEpochMillisString(rowData: unknown): number | null {
  if (typeof rowData !== 'string') {
    return null
  }
  const trimmed = rowData.trim()
  return EPOCH_MILLIS_STRING.test(trimmed) ? Number(trimmed) : null
}

/**
 * Anchor a value to local midnight of the calendar date it denotes.
 *
 * The picker renders in the browser's timezone, so a value carrying an instant
 * has to be reduced to a day first or the rendered date can land on the
 * neighboring one. Epoch millis are read in UTC, matching what
 * serializeDateCellValue writes. An ISO-style string already names its day, so
 * that day is read off the leading YYYY-MM-DD rather than from the instant
 * dayjs derived from it. Any other string was parsed in local time, so its
 * local day is already the intended one.
 */
function toCalendarDate(
  rowData: unknown,
  epochMillis: number | null,
  parsed: Dayjs,
): Dayjs {
  const denotesInstant =
    epochMillis !== null ||
    typeof rowData === 'number' ||
    rowData instanceof Date
  if (denotesInstant) {
    return dayjs(parsed.utc().format(FULL_DATE_PATTERN))
  }
  if (typeof rowData === 'string' && LEADING_FULL_DATE.test(rowData.trim())) {
    return dayjs(rowData.trim().slice(0, FULL_DATE_PATTERN.length))
  }
  return dayjs(parsed.format(FULL_DATE_PATTERN))
}

/**
 * Classify a stored cell value as empty, a usable date, or something the picker
 * cannot represent.
 *
 * Epoch milliseconds stored as a string are read as a timestamp rather than
 * handed to dayjs, which would take them for a year — see EPOCH_MILLIS_STRING.
 *
 * A `date` format column carries no time of day, so its value is reduced to the
 * calendar date it names — see toCalendarDate.
 */
export function interpretDateTimeCellValue(
  rowData: unknown,
  format?: string,
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

  const epochMillis = parseEpochMillisString(rowData)
  const parsed = dayjs((epochMillis ?? rowData) as dayjs.ConfigType)
  if (!parsed.isValid()) {
    return unparseable
  }
  return {
    kind: 'date',
    date:
      format === FULL_DATE_FORMAT_NAME
        ? toCalendarDate(rowData, epochMillis, parsed)
        : parsed,
  }
}

/**
 * Render a committed picker value in the representation the column's schema
 * declares.
 *
 * A `date` format column stores an RFC 3339 full-date, or — where the schema
 * type cannot hold a string — the equivalent UTC-midnight epoch.
 */
function serializeDateCellValue(
  value: Dayjs,
  colType?: JSONSchema7Type,
  format?: string,
): string | number {
  const expectsEpochMillis = colType === 'number' || colType === 'integer'
  if (format === FULL_DATE_FORMAT_NAME) {
    const fullDate = value.format(FULL_DATE_PATTERN)
    return expectsEpochMillis ? dayjs.utc(fullDate).valueOf() : fullDate
  }
  return expectsEpochMillis ? value.valueOf() : value.toISOString()
}

export function DateTimeCell({
  rowData,
  setRowData,
  disabled,
  colType,
  format,
  active,
}: DateTimeCellProps) {
  const cellValue = interpretDateTimeCellValue(rowData, format)

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

  const pickerSx: SxProps<Theme> = {
    ...PICKER_SX,
    // When disabled, allow selecting the entire cell
    pointerEvents: disabled ? 'none' : undefined,
  }

  const pickerProps = {
    disabled,
    value: cellValue.kind === 'date' ? cellValue.date : null,
    onChange: (newValue: string | Dayjs | null) => {
      setRowData(
        newValue == null
          ? null
          : serializeDateCellValue(dayjs(newValue), colType, format),
      )
    },
    sx: pickerSx,
  }

  return format === FULL_DATE_FORMAT_NAME ? (
    <DatePicker {...pickerProps} />
  ) : (
    <DateTimePicker {...pickerProps} />
  )
}

export type DateTimeColumnProps = {
  colType?: JSONSchema7Type
  format?: string
}

export function dateTimeColumn({
  colType,
  format,
}: DateTimeColumnProps): Partial<Column> {
  return {
    component: ((props: DateTimeCellProps) => (
      <DateTimeCell {...props} colType={colType} format={format} />
    )) as CellComponent,
    copyValue: ({ rowData }) => rowData,
    pasteValue: ({ value }) => value,
    disableKeys: true,
    keepFocus: true,
  }
}
