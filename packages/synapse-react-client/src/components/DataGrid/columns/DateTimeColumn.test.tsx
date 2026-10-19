import DatePicker from '@/components/DatePicker/DatePicker'
import DateTimePicker from '@/components/DateTimePicker/DateTimePicker'
import { render, screen } from '@testing-library/react'
import dayjs, { Dayjs } from 'dayjs'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  DateTimeCell,
  interpretDateTimeCellValue,
  type DateTimeCellProps,
} from './DateTimeColumn'

vi.mock('@/components/DateTimePicker/DateTimePicker', () => ({
  default: vi.fn(() => null),
}))

vi.mock('@/components/DatePicker/DatePicker', () => ({
  default: vi.fn(() => null),
}))

const mockDateTimePicker = vi.mocked(DateTimePicker)
const mockDatePicker = vi.mocked(DatePicker)

function getLastRenderedOnChange(
  picker:
    | typeof mockDateTimePicker
    | typeof mockDatePicker = mockDateTimePicker,
): (value: Dayjs | string | null) => void {
  const lastCall = picker.mock.calls.at(-1)!
  return lastCall[0].onChange as (value: Dayjs | string | null) => void
}

function getCalendarDate(value: unknown, format = 'date'): string {
  const result = interpretDateTimeCellValue(value, format)
  expect(result.kind).toBe('date')
  return (result as { date: Dayjs }).date.format('YYYY-MM-DD')
}

function renderCell(props: Partial<DateTimeCellProps>) {
  const defaults = { rowData: null, setRowData: vi.fn() }
  render(
    <DateTimeCell
      {...(defaults as unknown as DateTimeCellProps)}
      {...(props as DateTimeCellProps)}
    />,
  )
}

describe('DateTimeCell', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('onChange stores the value in the correct format for each colType', () => {
    const testDate = dayjs('2027-01-01T00:00:00.000Z')

    it('saves as a Unix millisecond timestamp (number) when colType is "integer"', () => {
      const setRowData = vi.fn()
      renderCell({ colType: 'integer', setRowData })

      getLastRenderedOnChange()(testDate)

      expect(setRowData).toHaveBeenCalledWith(testDate.valueOf())
      expect(typeof setRowData.mock.calls[0][0]).toBe('number')
    })

    it('saves as a Unix millisecond timestamp (number) when colType is "number"', () => {
      const setRowData = vi.fn()
      renderCell({ colType: 'number', setRowData })

      getLastRenderedOnChange()(testDate)

      expect(setRowData).toHaveBeenCalledWith(testDate.valueOf())
      expect(typeof setRowData.mock.calls[0][0]).toBe('number')
    })

    it('saves as an ISO string when colType is "string"', () => {
      const setRowData = vi.fn()
      renderCell({ colType: 'string', setRowData })

      getLastRenderedOnChange()(testDate)

      expect(setRowData).toHaveBeenCalledWith(testDate.toISOString())
      expect(typeof setRowData.mock.calls[0][0]).toBe('string')
    })

    it('saves as an ISO string when colType is not specified', () => {
      const setRowData = vi.fn()
      renderCell({ setRowData })

      getLastRenderedOnChange()(testDate)

      expect(setRowData).toHaveBeenCalledWith(testDate.toISOString())
    })

    it('calls setRowData(null) when the value is cleared', () => {
      const setRowData = vi.fn()
      renderCell({ colType: 'integer', setRowData })

      getLastRenderedOnChange()(null)

      expect(setRowData).toHaveBeenCalledWith(null)
    })
  })

  describe('a column whose schema format is "date"', () => {
    it('renders a date-only picker', () => {
      renderCell({ rowData: '2026-12-25', colType: 'string', format: 'date' })

      expect(mockDatePicker).toHaveBeenCalled()
      expect(mockDateTimePicker).not.toHaveBeenCalled()
    })

    it('saves an RFC 3339 full-date when colType is "string"', () => {
      const setRowData = vi.fn()
      renderCell({ colType: 'string', format: 'date', setRowData })

      getLastRenderedOnChange(mockDatePicker)(dayjs('2026-12-25'))

      expect(setRowData).toHaveBeenCalledWith('2026-12-25')
    })

    it('saves UTC midnight of the selected day when colType is "integer"', () => {
      const setRowData = vi.fn()
      renderCell({ colType: 'integer', format: 'date', setRowData })

      getLastRenderedOnChange(mockDatePicker)(dayjs('2026-12-25'))

      expect(setRowData).toHaveBeenCalledWith(Date.UTC(2026, 11, 25))
    })

    it('calls setRowData(null) when the value is cleared', () => {
      const setRowData = vi.fn()
      renderCell({ colType: 'string', format: 'date', setRowData })

      getLastRenderedOnChange(mockDatePicker)(null)

      expect(setRowData).toHaveBeenCalledWith(null)
    })
  })

  describe('value prop passed to DateTimePicker', () => {
    it('converts a numeric rowData to a Dayjs object for display', () => {
      const timestamp = 1798761600000
      renderCell({ rowData: timestamp })

      const { value } = mockDateTimePicker.mock.calls[0][0]
      expect(dayjs.isDayjs(value)).toBe(true)
      expect((value as Dayjs).valueOf()).toBe(timestamp)
    })

    it('passes null to DateTimePicker when rowData is null', () => {
      renderCell({ rowData: null })

      const { value } = mockDateTimePicker.mock.calls[0][0]
      expect(value).toBeNull()
    })

    // dayjs would otherwise read "1705314600000" as a year and silently display
    // a date in 1707. A string column is no less likely to hold millis than a
    // numeric one, since the schema type constrains neither import nor an agent.
    it.each(['integer', 'string'])(
      'reads epoch milliseconds stored as a string when colType is "%s"',
      colType => {
        renderCell({ rowData: '1705314600000', colType })

        const { value } = mockDateTimePicker.mock.calls[0][0]
        expect((value as Dayjs).valueOf()).toBe(1705314600000)
      },
    )
  })

  // Regression: an unparseable value rendered the picker's field as blank, so
  // data written by server-side CSV import was invisible in the grid even though
  // it was present in the model.
  describe('a value that is not a valid date', () => {
    it('renders the raw value as text instead of a blank picker', () => {
      renderCell({ rowData: 'not-a-date' })

      expect(screen.getByText('not-a-date')).toBeInTheDocument()
      expect(mockDateTimePicker).not.toHaveBeenCalled()
    })

    it('renders the picker once the cell is active so the value can be replaced', () => {
      renderCell({ rowData: 'not-a-date', active: true })

      expect(screen.queryByText('not-a-date')).not.toBeInTheDocument()
      expect(mockDateTimePicker.mock.calls[0][0].value).toBeNull()
    })

    it('does not modify the stored value on its own', () => {
      const setRowData = vi.fn()
      renderCell({ rowData: 'not-a-date', setRowData })

      expect(setRowData).not.toHaveBeenCalled()
    })
  })
})

describe('interpretDateTimeCellValue', () => {
  it.each([
    ['null', null],
    ['undefined', undefined],
    ['an empty string', ''],
    ['a whitespace-only string', '   '],
  ])('reports %s as empty', (_label, rowData) => {
    expect(interpretDateTimeCellValue(rowData)).toEqual({
      kind: 'empty',
    })
  })

  it.each([
    ['an ISO string', '2024-01-15T10:30:00.000Z', 1705314600000],
    ['epoch millis as a number', 1705314600000, 1705314600000],
    ['epoch millis as a string', '1705314600000', 1705314600000],
    ['a Date', new Date(1705314600000), 1705314600000],
  ])('parses %s', (_label, rowData, expected) => {
    const result = interpretDateTimeCellValue(rowData)
    expect(result.kind).toBe('date')
    expect((result as { date: Dayjs }).date.valueOf()).toBe(expected)
  })

  // Only a numeric string too long to be a date notation is read as a
  // timestamp, so shorter ones are still parsed as the dates they spell.
  it.each([
    ['a year', '2026', '2026-01-01'],
    ['a compact full-date', '20261225', '2026-12-25'],
  ])(
    'parses %s rather than reading it as epoch millis',
    (_label, rowData, expected) => {
      expect(getCalendarDate(rowData, 'date-time')).toBe(expected)
    },
  )

  // A `date` format column holds a calendar date rather than an instant, so the
  // day it names must survive being read in a browser timezone that is offset
  // from the one it was written in.
  describe('a format of "date"', () => {
    it('reads a full-date string as the day it names', () => {
      expect(getCalendarDate('2026-12-25')).toBe('2026-12-25')
    })

    it('does not shift the day of a UTC-designated ISO string', () => {
      expect(getCalendarDate('2026-12-25T00:00:00.000Z')).toBe('2026-12-25')
    })

    it('reads epoch millis as the UTC day', () => {
      expect(getCalendarDate(Date.UTC(2026, 11, 25))).toBe('2026-12-25')
    })

    it('reads epoch millis stored as a string as the UTC day', () => {
      expect(getCalendarDate(String(Date.UTC(2026, 11, 25)))).toBe('2026-12-25')
    })

    it('reads a locale date string as the day it names', () => {
      expect(getCalendarDate('12/25/2026')).toBe('2026-12-25')
    })

    it('still reports an unparseable value as unparseable', () => {
      expect(interpretDateTimeCellValue('not-a-date', 'date')).toEqual({
        kind: 'unparseable',
        text: 'not-a-date',
      })
    })
  })

  it.each([
    ['a non-date string', 'not-a-date', 'not-a-date'],
    ['a partially numeric string', '12abc', '12abc'],
    ['a boolean', true, 'true'],
  ])('reports %s as unparseable', (_label, rowData, expectedText) => {
    expect(interpretDateTimeCellValue(rowData)).toEqual({
      kind: 'unparseable',
      text: expectedText,
    })
  })
})
