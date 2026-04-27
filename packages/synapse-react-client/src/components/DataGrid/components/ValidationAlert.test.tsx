import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ValidationAlert } from './ValidationAlert'
import { DataGridRow } from '../DataGridTypes'

const defaultProps = {
  columnNames: ['patientId', 'platform', 'disease'],
  columnOrder: [0, 1, 2],
  onNavigateToCell: vi.fn(),
}

function makeInvalidRow(cellErrors: Record<string, string[]>): DataGridRow {
  return {
    __validationStatus: 'invalid',
    __cellValidationResults: new Map(Object.entries(cellErrors)),
  } as unknown as DataGridRow
}

describe('ValidationAlert', () => {
  it('returns null when there are no invalid rows', () => {
    const rowValues: DataGridRow[] = [
      { __validationStatus: 'valid' } as unknown as DataGridRow,
    ]
    const { container } = render(
      <ValidationAlert {...defaultProps} rowValues={rowValues} />,
    )
    expect(container.firstChild).toBeNull()
  })

  it('returns null when rowValues is empty', () => {
    const { container } = render(
      <ValidationAlert {...defaultProps} rowValues={[]} />,
    )
    expect(container.firstChild).toBeNull()
  })

  it('shows the correct error count badge', () => {
    const rowValues = [makeInvalidRow({ platform: ['cannot be empty'] })]
    render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)
    expect(screen.getByText('Validation errors')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('shows first error preview when collapsed', () => {
    const rowValues = [makeInvalidRow({ platform: ['cannot be empty'] })]
    render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)
    // Column name and message are rendered as separate spans
    expect(screen.getAllByText('platform')[0]).toBeInTheDocument()
    expect(screen.getAllByText('cannot be empty')[0]).toBeInTheDocument()
  })

  it('shows expand link when collapsed and collapse link when expanded', async () => {
    const rowValues = [makeInvalidRow({ platform: ['cannot be empty'] })]
    render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)

    expect(screen.getByText('Expand')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Expand'))
    expect(screen.getByText('Collapse')).toBeInTheDocument()
  })

  it('shows full error list when expanded', async () => {
    const rowValues = [
      makeInvalidRow({
        platform: ['cannot be empty'],
        disease: ['invalid value'],
      }),
    ]
    render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)

    await userEvent.click(screen.getByText('Expand'))
    expect(screen.getAllByText('platform').length).toBeGreaterThan(0)
    expect(screen.getAllByText('cannot be empty').length).toBeGreaterThan(0)
    expect(screen.getAllByText('disease').length).toBeGreaterThan(0)
    expect(screen.getAllByText('invalid value').length).toBeGreaterThan(0)
  })

  it('calls onNavigateToCell with correct rowIndex and colDisplayIndex when error is clicked', async () => {
    const onNavigateToCell = vi.fn()
    // columnOrder [0,1,2] means: col 0=patientId, col 1=platform, col 2=disease
    const rowValues = [makeInvalidRow({ platform: ['cannot be empty'] })]
    render(
      <ValidationAlert
        {...defaultProps}
        rowValues={rowValues}
        onNavigateToCell={onNavigateToCell}
      />,
    )

    await userEvent.click(screen.getByText('Expand'))
    // The error link button's accessible name contains both column name and message
    await userEvent.click(
      screen.getByRole('button', { name: /platform.*cannot be empty/i }),
    )
    // 'platform' is at columnOrder index 1 (columnNames[1] === 'platform')
    expect(onNavigateToCell).toHaveBeenCalledWith(0, 1)
  })

  it('navigates to col 0 for row-level (_row) errors', async () => {
    const onNavigateToCell = vi.fn()
    const rowValues = [
      makeInvalidRow({ _row: ['required key [platform] not found'] }),
    ]
    render(
      <ValidationAlert
        {...defaultProps}
        rowValues={rowValues}
        onNavigateToCell={onNavigateToCell}
      />,
    )

    await userEvent.click(screen.getByText('Expand'))
    await userEvent.click(
      screen.getByRole('button', {
        name: /required key \[platform\] not found/i,
      }),
    )
    expect(onNavigateToCell).toHaveBeenCalledWith(0, 0)
  })

  it('aggregates errors across multiple invalid rows', () => {
    const rowValues = [
      makeInvalidRow({ platform: ['cannot be empty'] }),
      makeInvalidRow({ disease: ['invalid value'], patientId: ['too long'] }),
    ]
    render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)
    // 1 + 2 = 3 total errors
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('ignores rows with valid or pending status', () => {
    const cellMap = new Map([['platform', ['cannot be empty']]])
    const rowValues: DataGridRow[] = [
      {
        __validationStatus: 'valid',
        __cellValidationResults: cellMap,
      } as unknown as DataGridRow,
      {
        __validationStatus: 'pending',
        __cellValidationResults: cellMap,
      } as unknown as DataGridRow,
    ]
    const { container } = render(
      <ValidationAlert {...defaultProps} rowValues={rowValues} />,
    )
    expect(container.firstChild).toBeNull()
  })
})
