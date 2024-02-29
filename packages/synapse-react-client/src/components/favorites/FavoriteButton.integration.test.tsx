import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import FavoriteButton from './FavoriteButton'
import { server } from '../../mocks/msw/server'
import mockFileEntityData from '../../mocks/entity/mockFileEntity'
import userEvent from '@testing-library/user-event'
import { SynapseContextType } from '../../utils/context/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import { DeferredPromise } from '@open-draft/deferred-promise'
import { setCurrentFavoritesOnServer } from '../../mocks/msw/handlers/favoritesHandlers'

function renderComponent(wrapperProps?: SynapseContextType) {
  return render(<FavoriteButton entityId={mockFileEntityData.id} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

const onAddFavoriteCalled = jest.fn()
const onDeleteFavoriteCalled = jest.fn()

describe('FavoriteButton tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    // Reset the server state before each test
    setCurrentFavoritesOnServer(new Set())
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Clicking the button adds/removes from favorites', async () => {
    renderComponent()

    await screen.findByLabelText('Add to Favorites')
    let button = await screen.findByRole('button')

    await userEvent.click(button)
    await waitFor(() => expect(onAddFavoriteCalled).toHaveBeenCalledTimes(1))

    await screen.findByLabelText('Remove from Favorites')
    button = await screen.findByRole('button')

    await userEvent.click(button)
    await waitFor(() => expect(onDeleteFavoriteCalled).toHaveBeenCalledTimes(1))

    await screen.findByLabelText('Add to Favorites')
  })

  it('Disables the button with a useful tooltip for an unauthenticated user', async () => {
    renderComponent({
      ...MOCK_CONTEXT_VALUE,
      accessToken: undefined,
    })

    await screen.findByLabelText('Sign in to add this to your favorites')
  })

  it('Disables the button while toggling the favorite', async () => {
    // Create a function that we'll use to delay the response from the mock server
    const deferResponse = new DeferredPromise<void>()

    renderComponent()

    // Click "Add to Favorites"
    const button = await screen.findByRole('button')
    await userEvent.click(button)

    // No response yet; the button should be disabled
    expect(button).toBeDisabled()

    // Allow the server to send the response
    deferResponse.resolve()

    // Once the client receives the response, the button should be enabled again
    await waitFor(() => expect(button).not.toBeDisabled())
  })
})
