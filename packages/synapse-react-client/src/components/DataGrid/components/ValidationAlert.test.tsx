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

function makePendingRow(cellErrors: Record<string, string[]>): DataGridRow {
  return {
    __validationStatus: 'pending',
    __cellValidationResults: new Map(Object.entries(cellErrors)),
  } as unknown as DataGridRow
}

describe('ValidationAlert', () => {
  it('shows a no-errors message when there are no invalid rows', () => {
    const rowValues: DataGridRow[] = [
      { __validationStatus: 'valid' } as unknown as DataGridRow,
    ]
    render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)
    expect(screen.getByText('No validation errors')).toBeInTheDocument()
  })

  it('shows a no-errors message when rowValues is empty', () => {
    render(<ValidationAlert {...defaultProps} rowValues={[]} />)
    expect(screen.getByText('No validation errors')).toBeInTheDocument()
  })

  it('shows syncing message when isLoading is true', () => {
    const rowValues = [makeInvalidRow({ platform: ['cannot be empty'] })]
    render(
      <ValidationAlert {...defaultProps} rowValues={rowValues} isLoading />,
    )
    expect(screen.getByText('Loading validation errors…')).toBeInTheDocument()
    expect(screen.queryByText('Validation errors')).not.toBeInTheDocument()
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
    // Column name is a standalone span; message is combined with separator and row suffix
    expect(screen.getAllByText('platform')[0]).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /cannot be empty/i }),
    ).toBeInTheDocument()
  })

  it('shows expand link when collapsed and collapse link when expanded', async () => {
    const rowValues = [makeInvalidRow({ platform: ['cannot be empty'] })]
    render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)

    expect(screen.getByText('Expand')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Expand'))
    expect(screen.getByText('Collapse')).toBeInTheDocument()
  })

  it('renders three tabs when expanded', async () => {
    const rowValues = [makeInvalidRow({ platform: ['cannot be empty'] })]
    render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)

    await userEvent.click(screen.getByText('Expand'))
    expect(screen.getByRole('tab', { name: 'By row' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'By column' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'By message' })).toBeInTheDocument()
  })

  describe('By row tab (default)', () => {
    it('shows a flat list of all errors', async () => {
      const rowValues = [
        makeInvalidRow({
          platform: ['cannot be empty'],
          disease: ['invalid value'],
        }),
      ]
      render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)

      await userEvent.click(screen.getByText('Expand'))
      expect(screen.getAllByText('platform').length).toBeGreaterThan(0)
      expect(
        screen.getByRole('button', { name: /cannot be empty/i }),
      ).toBeInTheDocument()
      expect(screen.getAllByText('disease').length).toBeGreaterThan(0)
      expect(
        screen.getByRole('button', { name: /invalid value/i }),
      ).toBeInTheDocument()
    })

    it('calls onNavigateToCell with correct rowIndex and colDisplayIndex', async () => {
      const onNavigateToCell = vi.fn()
      const rowValues = [makeInvalidRow({ platform: ['cannot be empty'] })]
      render(
        <ValidationAlert
          {...defaultProps}
          rowValues={rowValues}
          onNavigateToCell={onNavigateToCell}
        />,
      )

      await userEvent.click(screen.getByText('Expand'))
      // The error link's accessible name contains both column name and message
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
  })

  describe('By column tab', () => {
    it('groups errors under column section headers with counts', async () => {
      // 2 platform errors, 1 disease error
      const rowValues = [
        makeInvalidRow({ platform: ['cannot be empty'] }),
        makeInvalidRow({ platform: ['cannot be empty'] }),
        makeInvalidRow({ disease: ['invalid value'] }),
      ]
      render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)

      await userEvent.click(screen.getByText('Expand'))
      await userEvent.click(screen.getByRole('tab', { name: 'By column' }))

      expect(screen.getAllByText('platform').length).toBeGreaterThan(0)
      expect(screen.getAllByText('disease').length).toBeGreaterThan(0)
      // platform section chip shows count 2
      expect(screen.getAllByText('2').length).toBeGreaterThan(0)
    })

    it('shows message text and row number links within each column section', async () => {
      const rowValues = [
        makeInvalidRow({ platform: ['cannot be empty'] }),
        makeInvalidRow({ platform: ['cannot be empty'] }),
      ]
      render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)

      await userEvent.click(screen.getByText('Expand'))
      await userEvent.click(screen.getByRole('tab', { name: 'By column' }))

      expect(screen.getAllByText('cannot be empty').length).toBeGreaterThan(0)
      // First row shows "Row 1"; subsequent rows in the same group show just the number
      expect(screen.getByRole('button', { name: 'Row 1' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument()
    })

    it('calls onNavigateToCell when a row number link is clicked', async () => {
      const onNavigateToCell = vi.fn()
      const rowValues = [makeInvalidRow({ platform: ['cannot be empty'] })]
      render(
        <ValidationAlert
          {...defaultProps}
          rowValues={rowValues}
          onNavigateToCell={onNavigateToCell}
        />,
      )

      await userEvent.click(screen.getByText('Expand'))
      await userEvent.click(screen.getByRole('tab', { name: 'By column' }))
      await userEvent.click(screen.getByRole('button', { name: 'Row 1' }))

      expect(onNavigateToCell).toHaveBeenCalledWith(0, 1)
    })

    it('shows row-level errors under "Row-level" section header', async () => {
      const rowValues = [
        makeInvalidRow({ _row: ['required key [x] not found'] }),
      ]
      render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)

      await userEvent.click(screen.getByText('Expand'))
      await userEvent.click(screen.getByRole('tab', { name: 'By column' }))

      expect(screen.getByText('Row-level')).toBeInTheDocument()
    })
  })

  describe('By message tab', () => {
    it('groups errors under message section headers with counts', async () => {
      const rowValues = [
        makeInvalidRow({ platform: ['cannot be empty'] }),
        makeInvalidRow({ disease: ['cannot be empty'] }),
        makeInvalidRow({ patientId: ['too long'] }),
      ]
      render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)

      await userEvent.click(screen.getByText('Expand'))
      await userEvent.click(screen.getByRole('tab', { name: 'By message' }))

      // 'cannot be empty' applies to 2 errors — count badge shows 2
      expect(screen.getAllByText('cannot be empty').length).toBeGreaterThan(0)
      expect(screen.getAllByText('2').length).toBeGreaterThan(0)
    })

    it('shows column names and row number links within each message section', async () => {
      const rowValues = [
        makeInvalidRow({ platform: ['cannot be empty'] }),
        makeInvalidRow({ disease: ['cannot be empty'] }),
      ]
      render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)

      await userEvent.click(screen.getByText('Expand'))
      await userEvent.click(screen.getByRole('tab', { name: 'By message' }))

      expect(screen.getAllByText('platform').length).toBeGreaterThan(0)
      expect(screen.getAllByText('disease').length).toBeGreaterThan(0)
      expect(screen.getByRole('button', { name: 'Row 1' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Row 2' })).toBeInTheDocument()
    })

    it('calls onNavigateToCell when a row number link is clicked', async () => {
      const onNavigateToCell = vi.fn()
      const rowValues = [makeInvalidRow({ disease: ['invalid value'] })]
      render(
        <ValidationAlert
          {...defaultProps}
          rowValues={rowValues}
          onNavigateToCell={onNavigateToCell}
        />,
      )

      await userEvent.click(screen.getByText('Expand'))
      await userEvent.click(screen.getByRole('tab', { name: 'By message' }))
      await userEvent.click(screen.getByRole('button', { name: 'Row 1' }))

      // 'disease' is at columnOrder index 2
      expect(onNavigateToCell).toHaveBeenCalledWith(0, 2)
    })
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

  it('ignores rows with valid status', () => {
    const rowValues: DataGridRow[] = [
      {
        __validationStatus: 'valid',
        __cellValidationResults: new Map([['platform', ['cannot be empty']]]),
      } as unknown as DataGridRow,
    ]
    render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)
    expect(screen.getByText('No validation errors')).toBeInTheDocument()
  })

  describe('pending rows', () => {
    it('includes pending rows with prior errors in the error list', () => {
      const rowValues = [makePendingRow({ platform: ['cannot be empty'] })]
      render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)
      expect(screen.getByText('Validation errors')).toBeInTheDocument()
      expect(screen.getByText('1')).toBeInTheDocument()
    })

    it('shows no-errors message for pending rows without prior errors', () => {
      const rowValues: DataGridRow[] = [
        { __validationStatus: 'pending' } as unknown as DataGridRow,
      ]
      render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)
      expect(screen.getByText('No validation errors')).toBeInTheDocument()
    })

    it('counts both confirmed and pending errors in the total badge', () => {
      const rowValues = [
        makeInvalidRow({ platform: ['cannot be empty'] }),
        makePendingRow({ disease: ['invalid value'] }),
      ]
      render(<ValidationAlert {...defaultProps} rowValues={rowValues} />)
      expect(screen.getByText('2')).toBeInTheDocument()
    })
  })
})
