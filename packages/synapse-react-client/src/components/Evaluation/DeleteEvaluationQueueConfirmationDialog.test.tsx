import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DeleteEvaluationQueueConfirmationDialog } from './DeleteEvaluationQueueConfirmationDialog'

const mockOnConfirm = vi.fn()
const mockOnCancel = vi.fn()

function renderComponent(open = true) {
  return render(
    <DeleteEvaluationQueueConfirmationDialog
      open={open}
      onConfirm={mockOnConfirm}
      onCancel={mockOnCancel}
    />,
  )
}

describe('DeleteEvaluationQueueConfirmationDialog', () => {
  const user = userEvent.setup()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renders the dialog with warning text and checkbox when open', () => {
    renderComponent()
    const dialog = screen.getByRole('dialog')
    within(dialog).getByText('Delete Evaluation Queue')
    within(dialog).getByText(/permanently erase all associated submissions/)
    within(dialog).getByRole('checkbox')
  })

  test('Delete button is disabled when checkbox is unchecked', () => {
    renderComponent()
    expect(screen.getByRole('button', { name: 'Delete' })).toBeDisabled()
  })

  test('Delete button becomes enabled after checking the checkbox', async () => {
    renderComponent()
    const deleteButton = screen.getByRole('button', { name: 'Delete' })

    expect(deleteButton).toBeDisabled()
    await user.click(screen.getByRole('checkbox'))
    expect(deleteButton).toBeEnabled()
  })

  test('calls onConfirm when Delete is clicked after checking the checkbox', async () => {
    renderComponent()
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: 'Delete' }))
    expect(mockOnConfirm).toHaveBeenCalledTimes(1)
    expect(mockOnCancel).not.toHaveBeenCalled()
  })

  test('calls onCancel when Cancel is clicked', async () => {
    renderComponent()
    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(mockOnCancel).toHaveBeenCalledTimes(1)
    expect(mockOnConfirm).not.toHaveBeenCalled()
  })

  test('checkbox resets to unchecked when dialog is reopened', async () => {
    const { rerender } = renderComponent()

    // Check the checkbox
    await user.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).toBeChecked()

    // Close and reopen the dialog
    rerender(
      <DeleteEvaluationQueueConfirmationDialog
        open={false}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />,
    )
    rerender(
      <DeleteEvaluationQueueConfirmationDialog
        open={true}
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />,
    )

    expect(screen.getByRole('checkbox')).not.toBeChecked()
    expect(screen.getByRole('button', { name: 'Delete' })).toBeDisabled()
  })

  test('does not render the dialog when open is false', () => {
    renderComponent(false)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
