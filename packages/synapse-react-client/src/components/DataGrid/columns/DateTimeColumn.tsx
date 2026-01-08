import DateTimePicker from '@/components/DateTimePicker/DateTimePicker'
import dayjs, { Dayjs } from 'dayjs'
import { JSONSchema7Type } from 'json-schema'
import { CellComponent, CellProps, Column } from 'react-datasheet-grid'

export type DateTimeCellProps = CellProps & {
  colType?: JSONSchema7Type
}

export function DateTimeCell({
  rowData,
  setRowData,
  disabled,
  colType,
}: DateTimeCellProps) {
  return (
    <DateTimePicker
      disabled={disabled}
      value={rowData ? dayjs(rowData) : null}
      onChange={(newValue: string | Dayjs | null) => {
        if (newValue == null) {
          setRowData(null)
        } else if (colType === 'number') {
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
