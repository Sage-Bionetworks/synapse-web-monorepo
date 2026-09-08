import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilteredByTaskIdsBanner from './FilteredByTaskIdsBanner'

function renderComponent(taskIds: number[] | undefined, onClear = vi.fn()) {
  render(<FilteredByTaskIdsBanner taskIds={taskIds} onClear={onClear} />, {
    wrapper: createWrapper(),
  })
  return { onClear }
}

describe('FilteredByTaskIdsBanner', () => {
  it('renders nothing when taskIds is undefined', () => {
    renderComponent(undefined)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('renders nothing when taskIds is an empty array', () => {
    renderComponent([])
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows the singular count when there is one task ID', () => {
    renderComponent([123])
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Showing 1 filtered task',
    )
  })

  it('shows the plural count when there are multiple task IDs', () => {
    renderComponent([123, 456])
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Showing 2 filtered tasks',
    )
  })

  it('calls onClear when the "Clear filter" button is clicked', async () => {
    const user = userEvent.setup()
    const { onClear } = renderComponent([123])

    await user.click(screen.getByRole('button', { name: /clear filter/i }))

    expect(onClear).toHaveBeenCalledTimes(1)
  })
})
