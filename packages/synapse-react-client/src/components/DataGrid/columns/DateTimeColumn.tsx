import DateTimePicker from '@/components/DateTimePicker/DateTimePicker'
import { SxProps, Theme } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { JSONSchema7Type } from 'json-schema'
import { memo, useCallback, useLayoutEffect, useMemo, useRef } from 'react'
import {
  CellComponent,
  CellProps,
  Column,
} from '@sage-bionetworks/react-datasheet-grid'

export type DateTimeCellProps = CellProps & {
  colType?: JSONSchema7Type
}

const DATE_TIME_BASE_SX: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  '& .MuiInputBase-root': {
    height: '100%',
    backgroundColor: 'inherit',
  },
}

export function DateTimeCell({
  rowData,
  setRowData,
  disabled,
  colType,
}: DateTimeCellProps) {
  // Stable ref so memo(DateTimeCell) can use default shallow comparison —
  // react-datasheet-grid recreates setRowData on every render, but its behavior
  // is stable for a given cell position.
  const setRowDataRef = useRef(setRowData)
  useLayoutEffect(() => {
    setRowDataRef.current = setRowData
  })

  const handleChange = useCallback(
    (newValue: string | Dayjs | null) => {
      if (newValue == null) {
        setRowDataRef.current(null)
      } else if (colType === 'number') {
        // Assume unix millisecond timestamp
        setRowDataRef.current(dayjs(newValue).valueOf())
      } else {
        // colType is 'string' or unspecified, use ISO string
        setRowDataRef.current(dayjs(newValue).toISOString())
      }
    },
    [colType],
  )

  const sx = useMemo<SxProps<Theme>>(
    () => ({
      ...DATE_TIME_BASE_SX,
      // When disabled, allow selecting the entire cell
      pointerEvents: disabled ? 'none' : undefined,
    }),
    [disabled],
  )

  const value = useMemo(() => (rowData ? dayjs(rowData) : null), [rowData])

  return (
    <DateTimePicker
      disabled={disabled}
      value={value}
      onChange={handleChange}
      sx={sx}
    />
  )
}

// Memoize the cell component to prevent unnecessary re-renders.
// react-datasheet-grid provides a new setRowData function instance on each
// render, so we must ignore that callback identity here and only compare the
// props that affect rendering.
export function areDateTimeCellPropsEqual(
  prevProps: DateTimeCellProps,
  nextProps: DateTimeCellProps,
) {
  return (
    prevProps.rowData === nextProps.rowData &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.colType === nextProps.colType &&
    prevProps.focus === nextProps.focus &&
    prevProps.active === nextProps.active
  )
}

export const MemoizedDateTimeCell = memo(
  DateTimeCell,
  areDateTimeCellPropsEqual,
)

export type DateTimeColumnProps = {
  colType?: JSONSchema7Type
}

export function dateTimeColumn({
  colType,
}: DateTimeColumnProps): Partial<Column> {
  return {
    component: ((props: DateTimeCellProps) => (
      <MemoizedDateTimeCell {...props} colType={colType} />
    )) as CellComponent,
    copyValue: ({ rowData }) => rowData,
    pasteValue: ({ value }) => value,
    disableKeys: true,
    keepFocus: true,
  }
}
