import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  DateTimeCell,
  DateTimeCellDisplay,
  type DateTimeCellProps,
  FULL_DATE_FORMAT_NAME,
  PICKER_DATE_PLACEHOLDER,
  PICKER_DATE_TIME_PLACEHOLDER,
} from './DateTimeColumn'

// The display stands in for the picker until the cell is reached, so these
// tests render the real pickers and check that the display shows the same text.

function renderPickerInput(
  rowData: unknown,
  { format, utcTime = false }: { format?: string; utcTime?: boolean } = {},
) {
  const props = { rowData, setRowData: vi.fn(), active: false, format }
  const { unmount } = render(
    <DateTimeCell {...(props as unknown as DateTimeCellProps)} />,
    { wrapper: createWrapper({ utcTime }) },
  )
  const input = screen.getByRole<HTMLInputElement>('textbox')
  const shown = { value: input.value, placeholder: input.placeholder }
  unmount()
  return shown
}

function renderDisplay(
  rowData: unknown,
  { format, utcTime = false }: { format?: string; utcTime?: boolean } = {},
) {
  return render(<DateTimeCellDisplay rowData={rowData} format={format} />, {
    wrapper: createWrapper({ utcTime }),
  })
}

describe('DateTimeCellDisplay', () => {
  const instant = '2024-01-06T21:30:00.000Z'

  it('shows a date-time value as the picker does', () => {
    const { value } = renderPickerInput(instant)
    expect(value).toMatch(/2024/)

    renderDisplay(instant)

    expect(screen.getByText(value)).toBeInTheDocument()
  })

  it('shows a date-time value in UTC as the picker does', () => {
    const { value } = renderPickerInput(instant, { utcTime: true })
    expect(value).toMatch(/09:30 PM/)

    renderDisplay(instant, { utcTime: true })

    expect(screen.getByText(value)).toBeInTheDocument()
    expect(screen.getByText('UTC')).toBeInTheDocument()
  })

  it("shows the date-time picker's placeholder when the cell is empty", () => {
    const { placeholder } = renderPickerInput(null)

    renderDisplay(null)

    expect(placeholder).toBe(PICKER_DATE_TIME_PLACEHOLDER)
    expect(screen.getByText(PICKER_DATE_TIME_PLACEHOLDER)).toBeInTheDocument()
  })

  it('shows a date value as the picker does', () => {
    const { value } = renderPickerInput('2026-12-25', {
      format: FULL_DATE_FORMAT_NAME,
    })
    expect(value).toMatch(/12.25.2026/)

    renderDisplay('2026-12-25', { format: FULL_DATE_FORMAT_NAME })

    expect(screen.getByText(value)).toBeInTheDocument()
  })

  it("shows the date picker's placeholder when the cell is empty", () => {
    const { placeholder } = renderPickerInput(null, {
      format: FULL_DATE_FORMAT_NAME,
    })

    renderDisplay(null, { format: FULL_DATE_FORMAT_NAME })

    expect(placeholder).toBe(PICKER_DATE_PLACEHOLDER)
    expect(screen.getByText(PICKER_DATE_PLACEHOLDER)).toBeInTheDocument()
  })

  it('shows a value that is not a date as text', () => {
    renderDisplay('next Tuesday')

    expect(screen.getByText('next Tuesday')).toBeInTheDocument()
  })
})
