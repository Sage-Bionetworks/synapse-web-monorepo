import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { SynapseClient } from '../../../../src/lib'
import {
  AccessTokenCard,
  AccessTokenCardProps,
} from '../../../../src/lib/containers/personal_access_token/AccessTokenCard'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import * as SynapseContext from '../../../../src/lib/utils/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../../../mocks/MockSynapseContext'

const mockOnDelete = jest.fn(() => null)

jest
  .spyOn(SynapseClient, 'deletePersonalAccessToken')
  .mockImplementation(() => Promise.resolve())

const activeTokenProps: AccessTokenCardProps = {
  accessToken: {
    id: '45',
    userId: '3350396',
    scopes: ['view', 'download'],
    name: 'My access token',
    createdOn: '2020-08-23T14:59:19.073Z',
    lastUsed: '2020-10-25T14:59:19.073Z',
    state: 'ACTIVE',
  },
  onDelete: mockOnDelete,
}

const expiredTokenProps: AccessTokenCardProps = {
  accessToken: {
    id: '45',
    userId: '3350396',
    scopes: ['view', 'download'],
    name: 'My access token',
    createdOn: '2020-08-23T14:59:19.073Z',
    lastUsed: '2020-10-25T14:59:19.073Z',
    state: 'EXPIRED',
  },
  onDelete: mockOnDelete,
}

function renderComponent(props: AccessTokenCardProps) {
  return render(<AccessTokenCard {...props} />, { wrapper: createWrapper() })
}

describe('AccessTokenCard', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest
      .spyOn(SynapseContext, 'useSynapseContext')
      .mockImplementation(() => MOCK_CONTEXT_VALUE)
  })

  test('has the correct style when active', () => {
    const { container } = renderComponent(activeTokenProps)
    const card = container.querySelector('div.PersonalAccessTokenCard')!
    expect(card.classList.contains('bg-warning')).toBe(false)
  })
  test('has the correct style when expired', () => {
    const { container } = renderComponent(expiredTokenProps)
    const card = container.querySelector('div.PersonalAccessTokenCard')!
    expect(card.classList.contains('bg-warning')).toBe(true)
  })

  test('modal pops up and sends request on delete', async () => {
    renderComponent(activeTokenProps)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    // Click delete button to open modal
    await userEvent.click(screen.getByRole('button'))

    const dialog = screen.getByRole('dialog')

    // Click 'Delete'
    const deleteConfirmButton = within(dialog).getByRole('button', {
      name: 'Delete Token',
    })
    await userEvent.click(deleteConfirmButton)

    expect(SynapseClient.deletePersonalAccessToken).toHaveBeenCalled()
    await waitFor(() => {
      expect(mockOnDelete).toHaveBeenCalled()
    })
  })

  it('does not delete when modal is canceled', async () => {
    renderComponent(activeTokenProps)

    // Click delete button to open modal
    await userEvent.click(screen.getByRole('button'))

    const dialog = screen.getByRole('dialog')

    // Click 'Cancel'
    const cancelButton = within(dialog).getByRole('button', {
      name: 'Cancel',
    })
    await userEvent.click(cancelButton)

    expect(SynapseClient.deletePersonalAccessToken).not.toHaveBeenCalled()
    expect(mockOnDelete).not.toHaveBeenCalled()
  })

  it('sends request on delete with no modal when expired', async () => {
    renderComponent(expiredTokenProps)

    // Click delete button -- no modal should open, because the token has expired.
    await userEvent.click(screen.getByRole('button'))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(SynapseClient.deletePersonalAccessToken).toHaveBeenCalled()
    await waitFor(() => {
      expect(mockOnDelete).toHaveBeenCalled()
    })
  })
})
