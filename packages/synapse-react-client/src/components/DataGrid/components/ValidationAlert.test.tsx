import { render, screen } from '@testing-library/react'
import { ValidationAlert } from './ValidationAlert'
import { DataGridRow } from './DataGridTypes'

describe('ValidationAlert', () => {
  it('returns null when selectedRowIndex is null', () => {
    const { container } = render(
      <ValidationAlert selectedRowIndex={null} rowValues={[]} />,
    )
    expect(container.firstChild).toBeNull()
  })

  it('returns null when selected row does not exist', () => {
    const { container } = render(
      <ValidationAlert selectedRowIndex={5} rowValues={[]} />,
    )
    expect(container.firstChild).toBeNull()
  })

  it('returns null when row has no validation messages', () => {
    const rowValues: DataGridRow[] = [
      { id: '1', col1: 'value1' } as DataGridRow,
    ]
    const { container } = render(
      <ValidationAlert selectedRowIndex={0} rowValues={rowValues} />,
    )
    expect(container.firstChild).toBeNull()
  })

  it('returns null when validation messages array is empty', () => {
    const rowValues: DataGridRow[] = [
      {
        id: '1',
        col1: 'value1',
        __validationResults: { allValidationMessages: [] },
      } as unknown as DataGridRow,
    ]
    const { container } = render(
      <ValidationAlert selectedRowIndex={0} rowValues={rowValues} />,
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders alert with validation messages', () => {
    const rowValues: DataGridRow[] = [
      {
        id: '1',
        col1: 'value1',
        __validationResults: {
          allValidationMessages: ['Error 1', 'Error 2'],
        },
      } as unknown as DataGridRow,
    ]
    render(<ValidationAlert selectedRowIndex={0} rowValues={rowValues} />)

    expect(
      screen.getByText('Validation Messages For Selected Row:'),
    ).toBeInTheDocument()
    expect(screen.getByText('Error 1')).toBeInTheDocument()
    expect(screen.getByText('Error 2')).toBeInTheDocument()
  })
})
