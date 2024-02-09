import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { SynapseClient } from '../../../index'
import {
  AccessTokenCard,
  AccessTokenCardProps,
  EXPIRED_PAT_WARNING,
} from './AccessTokenCard'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import * as SynapseContext from '../../../utils/context/SynapseContext'
import {
  MOCK_ACCESS_TOKEN,
  MOCK_CONTEXT_VALUE,
} from '../../../mocks/MockSynapseContext'
import { MOCK_USER_ID } from '../../../mocks/user/mock_user_profile'

const mockOnDelete = jest.fn(() => null)

jest
  .spyOn(SynapseClient, 'deletePersonalAccessToken')
  .mockImplementation(() => Promise.resolve())

const activeTokenProps: AccessTokenCardProps = {
  accessToken: {
    id: '45',
    userId: String(MOCK_USER_ID),
    scopes: ['view', 'download'],
    name: 'My active access token',
    createdOn: '2020-08-23T14:59:19.073Z',
    lastUsed: '2020-10-25T14:59:19.073Z',
    state: 'ACTIVE',
  },
  onDelete: mockOnDelete,
}

const expiredTokenProps: AccessTokenCardProps = {
  accessToken: {
    id: '46',
    userId: String(MOCK_USER_ID),
    scopes: ['view', 'download'],
    name: 'My expired access token',
    createdOn: '2020-08-23T14:59:19.073Z',
    lastUsed: '2020-10-25T14:59:19.073Z',
    state: 'EXPIRED',
  },
  onDelete: mockOnDelete,
}

function renderComponent(props: AccessTokenCardProps) {
  const user = userEvent.setup()
  const component = render(<AccessTokenCard {...props} />, {
    wrapper: createWrapper(),
  })
  return { user, component }
}

describe('AccessTokenCard', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest
      .spyOn(SynapseContext, 'useSynapseContext')
      .mockImplementation(() => MOCK_CONTEXT_VALUE)
  })

  test('does not show a warning when active', () => {
    renderComponent(activeTokenProps)

    expect(
      screen.queryByRole('button', { name: EXPIRED_PAT_WARNING }),
    ).not.toBeInTheDocument()
  })
  test('shows a warning when expired', () => {
    renderComponent(expiredTokenProps)
    screen.getByRole('button', { name: EXPIRED_PAT_WARNING })
  })

  test('modal pops up and sends request on delete', async () => {
    const { user } = renderComponent(activeTokenProps)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    // Click delete button to open modal
    await user.click(screen.getByRole('button', { name: 'Delete Token' }))

    const dialog = screen.getByRole('dialog')

    // Click 'Delete'
    const deleteConfirmButton = within(dialog).getByRole('button', {
      name: 'Delete Token',
    })
    await user.click(deleteConfirmButton)

    expect(SynapseClient.deletePersonalAccessToken).toHaveBeenCalledWith(
      activeTokenProps.accessToken.id,
      MOCK_ACCESS_TOKEN,
    )
    await waitFor(() => {
      expect(mockOnDelete).toHaveBeenCalled()
    })
  })

  it('does not delete when modal is canceled', async () => {
    const { user } = renderComponent(activeTokenProps)

    // Click delete button to open modal
    await user.click(screen.getByRole('button', { name: 'Delete Token' }))

    const dialog = screen.getByRole('dialog')

    // Click 'Cancel'
    const cancelButton = within(dialog).getByRole('button', {
      name: 'Cancel',
    })
    await user.click(cancelButton)

    expect(SynapseClient.deletePersonalAccessToken).not.toHaveBeenCalled()
    expect(mockOnDelete).not.toHaveBeenCalled()
  })

  it('sends request on delete with no modal when expired', async () => {
    const { user } = renderComponent(expiredTokenProps)

    // Click delete button -- no modal should open, because the token has expired.
    await user.click(screen.getByRole('button', { name: 'Delete Token' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(SynapseClient.deletePersonalAccessToken).toHaveBeenCalledWith(
      expiredTokenProps.accessToken.id,
      MOCK_ACCESS_TOKEN,
    )
    await waitFor(() => {
      expect(mockOnDelete).toHaveBeenCalled()
    })
  })
})
