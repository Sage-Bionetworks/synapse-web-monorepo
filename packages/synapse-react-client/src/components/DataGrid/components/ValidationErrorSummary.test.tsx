import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import createValidationTestRow from '../utils/createValidationTestRow'
import {
  SHOW_VALIDATION_ERRORS_LABEL,
  ValidationErrorSummary,
} from './ValidationErrorSummary'

describe('ValidationErrorSummary', () => {
  it('shows the error count, formatted with the locale', () => {
    // Over 1,000, so the count includes a locale group separator
    const errorCount = 1_234
    const rowValues = [
      createValidationTestRow('invalid', {
        platform: Array.from({ length: errorCount }, () => 'cannot be empty'),
      }),
    ]
    render(<ValidationErrorSummary rowValues={rowValues} onShow={vi.fn()} />)

    expect(screen.getByText(errorCount.toLocaleString())).toBeInTheDocument()
  })

  it('shows a count of 0 when there are no errors', () => {
    render(<ValidationErrorSummary rowValues={[]} onShow={vi.fn()} />)

    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('calls onShow when Show is clicked', async () => {
    const onShow = vi.fn()
    render(<ValidationErrorSummary rowValues={[]} onShow={onShow} />)

    await userEvent.click(
      screen.getByRole('button', { name: SHOW_VALIDATION_ERRORS_LABEL }),
    )
    expect(onShow).toHaveBeenCalledOnce()
  })
})
