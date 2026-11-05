import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataGridRow } from '../DataGridTypes'
import { HiddenValidationAlert } from './HiddenValidationAlert'

function makeRow(
  status: DataGridRow['__validationStatus'],
  cellErrors: Record<string, string[]>,
): DataGridRow {
  return {
    __validationStatus: status,
    __cellValidationResults: new Map(Object.entries(cellErrors)),
  } as unknown as DataGridRow
}

describe('HiddenValidationAlert', () => {
  it('counts errors of invalid and pending rows, ignoring valid rows', () => {
    const rowValues = [
      makeRow('invalid', { platform: ['cannot be empty'], disease: ['bad'] }),
      makeRow('pending', { platform: ['cannot be empty'] }),
      makeRow('valid', { platform: ['stale error'] }),
    ]
    render(<HiddenValidationAlert rowValues={rowValues} onShow={vi.fn()} />)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('calls onShow when Show is clicked', async () => {
    const onShow = vi.fn()
    render(<HiddenValidationAlert rowValues={[]} onShow={onShow} />)

    await userEvent.click(
      screen.getByRole('button', { name: 'Show validation errors' }),
    )
    expect(onShow).toHaveBeenCalledOnce()
  })
})
