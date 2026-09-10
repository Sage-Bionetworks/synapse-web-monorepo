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

const mockDateTimePicker = vi.mocked(DateTimePicker)

function getLastRenderedOnChange(): (value: Dayjs | string | null) => void {
  const lastCall = mockDateTimePicker.mock.calls.at(-1)!
  return lastCall[0].onChange as (value: Dayjs | string | null) => void
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

    it('reads epoch milliseconds stored as a string for a numeric colType', () => {
      // dayjs would otherwise read "1705314600000" as a year and silently
      // display a date in 1707.
      renderCell({ rowData: '1705314600000', colType: 'integer' })

      const { value } = mockDateTimePicker.mock.calls[0][0]
      expect((value as Dayjs).valueOf()).toBe(1705314600000)
    })
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
    ['null', null, undefined],
    ['undefined', undefined, undefined],
    ['an empty string', '', undefined],
    ['a whitespace-only string', '   ', undefined],
  ])('reports %s as empty', (_label, rowData, colType) => {
    expect(interpretDateTimeCellValue(rowData, colType)).toEqual({
      kind: 'empty',
    })
  })

  it.each([
    ['an ISO string', '2024-01-15T10:30:00.000Z', undefined, 1705314600000],
    ['epoch millis as a number', 1705314600000, 'integer', 1705314600000],
    ['epoch millis as a string', '1705314600000', 'number', 1705314600000],
    ['a Date', new Date(1705314600000), undefined, 1705314600000],
  ])('parses %s', (_label, rowData, colType, expected) => {
    const result = interpretDateTimeCellValue(rowData, colType)
    expect(result.kind).toBe('date')
    expect((result as { date: Dayjs }).date.valueOf()).toBe(expected)
  })

  it('parses an ISO string even when the schema type is numeric', () => {
    const result = interpretDateTimeCellValue(
      '2024-01-15T10:30:00.000Z',
      'integer',
    )
    expect(result.kind).toBe('date')
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
