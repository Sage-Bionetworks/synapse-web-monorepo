import DateTimePicker from '@/components/DateTimePicker/DateTimePicker'
import { render } from '@testing-library/react'
import dayjs, { Dayjs } from 'dayjs'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { DateTimeCell, type DateTimeCellProps } from './DateTimeColumn'

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
  })
})
