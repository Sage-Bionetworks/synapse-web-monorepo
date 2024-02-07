import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  CreateAccessTokenModal,
  CreateAccessTokenModalProps,
} from './CreateAccessTokenModal'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import * as SynapseContext from '../../utils/context/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import { CLOSE_BUTTON_LABEL } from '../DialogBase'
import { CANCEL_BUTTON_TEXT } from '../ConfirmationDialog/ConfirmationDialog'
import SynapseClient from '../../synapse-client'

const EXAMPLE_PAT = 'abcdefghiklmnop'
jest.mock('../../synapse-client', () => ({
  createPersonalAccessToken: jest.fn(),
}))

const mockOnClose = jest.fn(() => null)
const mockOnCreate = jest.fn(() => null)

const mockCreatePersonalAccessToken = jest.mocked(
  SynapseClient.createPersonalAccessToken,
)

mockCreatePersonalAccessToken.mockResolvedValue({
  token: EXAMPLE_PAT,
})

function renderComponent(props: CreateAccessTokenModalProps) {
  return render(<CreateAccessTokenModal {...props} />, {
    wrapper: createWrapper(),
  })
}

function setUp(props: CreateAccessTokenModalProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)
  const tokenInput = screen.getByRole('textbox')
  const checkboxes = {
    view: screen.getByRole<HTMLInputElement>('checkbox', { name: 'View' }),
    modify: screen.getByRole<HTMLInputElement>('checkbox', { name: 'Modify' }),
    download: screen.getByRole<HTMLInputElement>('checkbox', {
      name: 'Download',
    }),
  }
  const initialButtons = {
    close: screen.getByRole('button', { name: CLOSE_BUTTON_LABEL }),
    cancel: screen.getByRole('button', { name: CANCEL_BUTTON_TEXT }),
    create: screen.getByRole('button', { name: /create token/i }),
  }
  return { component, user, tokenInput, checkboxes, initialButtons }
}

describe('CreateAccessTokenModal tests', () => {
  const props: CreateAccessTokenModalProps = {
    onClose: mockOnClose,
    onCreate: mockOnCreate,
  }

  beforeEach(() => {
    jest.clearAllMocks()
    jest
      .spyOn(SynapseContext, 'useSynapseContext')
      .mockImplementation(() => MOCK_CONTEXT_VALUE)
  })

  it('displays the token after successful creation', async () => {
    const tokenName = 'Token Name'
    const { user, tokenInput, checkboxes, initialButtons } = setUp(props)

    // Fill out the form
    await user.type(tokenInput, tokenName)
    await user.click(checkboxes.modify)
    await user.click(checkboxes.view)
    await user.click(checkboxes.download)

    await userEvent.click(initialButtons.create)

    await waitFor(() => expect(mockOnCreate).toHaveBeenCalled())
    expect(SynapseClient.createPersonalAccessToken).toHaveBeenCalled()

    expect((await screen.findByRole('textbox')).getAttribute('value')).toBe(
      EXAMPLE_PAT,
    )

    // Close the modal using the 'Close' button
    await user.click(screen.getByRole('button', { name: 'Close' }))

    await waitFor(() => expect(mockOnClose).toHaveBeenCalled())
  })

  it('does not dispatch request when there is no token name or permission', async () => {
    const { user, checkboxes, initialButtons } = setUp(props)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    // Try to create with no name or permissions
    await user.click(checkboxes.view)
    expect(checkboxes.view.checked).toBe(false)
    expect(checkboxes.modify.checked).toBe(false)
    expect(checkboxes.download.checked).toBe(false)
    await user.click(initialButtons.create)

    await screen.findByRole('alert')
    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
  })

  it('does not dispatch request when there is a token name, but no permissions', async () => {
    const { user, tokenInput, checkboxes, initialButtons } = setUp(props)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    // Try to create with name, but no permissions
    await user.click(checkboxes.view)
    expect(checkboxes.view.checked).toBe(false)

    // Add a name
    await user.type(tokenInput, 'some name')

    await user.click(initialButtons.create)
    await screen.findByRole('alert')
    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
  })

  it('does not dispatch request when there is a permission, but no token name', async () => {
    const { user, tokenInput, checkboxes, initialButtons } = setUp(props)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    // Try to create with permissions, but no name
    expect(tokenInput).toHaveTextContent('')
    expect(checkboxes.view.checked).toBe(true)

    // Submit and verify that an error is shown
    await user.click(initialButtons.create)
    await screen.findByRole('alert')
    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
  })

  it('handles an error from the backend', async () => {
    const { user, tokenInput, initialButtons } = setUp(props)

    const errorReason = 'Malformed input'
    mockCreatePersonalAccessToken.mockRejectedValue({
      error: 400,
      reason: errorReason,
    })

    // Fill out the form and send the request
    await user.type(tokenInput, 'some name')
    await user.click(initialButtons.create)

    await screen.findByRole('alert')
    screen.getByText(errorReason)
  })

  it('calls onClose when closing via Modal prop', async () => {
    const { user, initialButtons } = setUp(props)

    // Close the modal using the prop
    await user.click(initialButtons.close)

    expect(mockOnClose).toHaveBeenCalled()

    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
  })

  it('calls onClose when closing via cancel button', async () => {
    const { user, initialButtons } = setUp(props)

    // Close the modal using the prop
    await user.click(initialButtons.cancel)

    expect(mockOnClose).toHaveBeenCalled()

    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
  })
})
