import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import {
  CreateAccessTokenModal,
  CreateAccessTokenModalProps,
} from '../../../../lib/containers/personal_access_token/CreateAccessTokenModal'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import * as SynapseContext from '../../../../lib/utils/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../../../mocks/MockSynapseContext'

const EXAMPLE_PAT = 'abcdefghiklmnop'
const SynapseClient = require('../../../../lib/utils/SynapseClient')

const mockOnClose = jest.fn(() => null)
const mockOnCreate = jest.fn(() => null)

SynapseClient.createPersonalAccessToken = jest.fn().mockResolvedValue({
  token: EXAMPLE_PAT,
})

function renderComponent(props: CreateAccessTokenModalProps) {
  return render(<CreateAccessTokenModal {...props} />, {
    wrapper: createWrapper(),
  })
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
    renderComponent(props)

    // Fill out the form
    await userEvent.type(screen.getByRole('textbox'), tokenName)
    await userEvent.click(screen.getByRole('checkbox', { name: 'View' }))
    await userEvent.click(screen.getByRole('checkbox', { name: 'Modify' }))
    await userEvent.click(screen.getByRole('checkbox', { name: 'Download' }))

    await userEvent.click(screen.getByRole('button', { name: 'Create Token' }))

    await waitFor(() => expect(mockOnCreate).toHaveBeenCalled())
    expect(SynapseClient.createPersonalAccessToken).toHaveBeenCalled()

    expect((await screen.findByRole('textbox')).getAttribute('value')).toBe(
      EXAMPLE_PAT,
    )

    // Close the modal using the 'Close' button
    await userEvent.click(
      (
        await screen.findAllByRole('button', { name: 'Close' })
      )[1],
    )

    await waitFor(() => expect(mockOnClose).toHaveBeenCalled())
  })

  it('requires a token name and at least one permission before dispatching the request', async () => {
    renderComponent(props)
    expect(screen.queryByTestId('ErrorBanner')).not.toBeInTheDocument()

    // Try to create with no name or permissions
    await userEvent.click(screen.getByRole('button', { name: 'Create Token' }))
    await userEvent.click(screen.getByRole('checkbox', { name: 'View' }))

    await screen.findByTestId('ErrorBanner')
    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()

    // Add a name
    await userEvent.type(screen.getByRole('textbox'), 'some name')
    await userEvent.click(screen.getByRole('button', { name: 'Create Token' }))
    await screen.findByTestId('ErrorBanner')
    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()

    // Remove name, add a permission
    await userEvent.clear(screen.getByRole('textbox'))
    await userEvent.click(screen.getByRole('checkbox', { name: 'View' }))

    // Submit and verify that an error is shown
    await userEvent.click(screen.getByRole('button', { name: 'Create Token' }))
    await screen.findByTestId('ErrorBanner')
    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
  })

  it('handles an error from the backend', async () => {
    renderComponent(props)

    const errorReason = 'Malformed input'
    SynapseClient.createPersonalAccessToken = jest.fn().mockRejectedValue({
      error: 400,
      reason: errorReason,
    })

    // Fill out the form and send the request
    await userEvent.type(screen.getByRole('textbox'), 'some name')
    await userEvent.click(screen.getByRole('button', { name: 'Create Token' }))

    await screen.findByTestId('ErrorBanner')
    screen.getByText(errorReason)
  })

  it('calls onClose when closing via Modal prop', async () => {
    renderComponent(props)

    // Close the modal using the prop
    await userEvent.click(
      await screen.findByRole('button', { name: 'Close', exact: false }),
    )

    expect(mockOnClose).toHaveBeenCalled()

    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
  })

  it('calls onClose when closing via cancel button', async () => {
    renderComponent(props)

    // Close the modal using the prop
    await userEvent.click(await screen.findByRole('button', { name: 'Cancel' }))

    expect(mockOnClose).toHaveBeenCalled()

    expect(mockOnCreate).not.toHaveBeenCalled()
    expect(SynapseClient.createPersonalAccessToken).not.toHaveBeenCalled()
  })
})
