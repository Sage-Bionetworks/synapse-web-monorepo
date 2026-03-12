import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CANCEL_BUTTON_TEXT } from '../ConfirmationDialog/ConfirmationDialog'
import {
  CONFIRM_BUTTON_TEXT,
  DEFAULT_CONTENT,
  SignInRequiredModal,
  SignInRequiredModalProps,
} from './SignInRequiredModal'

const mockOnHide = vi.fn()

function renderComponent(overrides?: Partial<SignInRequiredModalProps>) {
  return render(<SignInRequiredModal onHide={mockOnHide} {...overrides} />)
}

describe('SignInRequiredModal', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows the default content when no content prop is provided', () => {
    renderComponent()

    expect(screen.getByText(DEFAULT_CONTENT)).toBeInTheDocument()
  })

  it('shows custom content when content prop is provided', () => {
    renderComponent({ content: 'Custom sign in message.' })

    expect(screen.getByText('Custom sign in message.')).toBeInTheDocument()
  })

  it('calls onHide when cancel button is clicked', async () => {
    renderComponent()

    await userEvent.click(
      screen.getByRole('button', { name: CANCEL_BUTTON_TEXT }),
    )
    expect(mockOnHide).toHaveBeenCalledTimes(1)
  })

  it('has sign in button with SRC_SIGN_IN_CLASS and calls onHide when clicked', async () => {
    renderComponent()

    const signInButton = screen.getByRole('button', {
      name: CONFIRM_BUTTON_TEXT,
    })
    expect(signInButton.classList.contains(SRC_SIGN_IN_CLASS)).toBe(true)

    await userEvent.click(signInButton)
    expect(mockOnHide).toHaveBeenCalledTimes(1)
  })

  it('does not show cancel button when hasCancelButton is false', () => {
    renderComponent({ hasCancelButton: false })

    expect(
      screen.queryByRole('button', { name: CANCEL_BUTTON_TEXT }),
    ).not.toBeInTheDocument()
  })
})
