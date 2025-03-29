import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { rest, server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { FAVORITES } from '@/utils/APIConstants'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { DeferredPromise } from '@open-draft/deferred-promise'
import { EntityHeader, PaginatedResults } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FavoriteButton from './FavoriteButton'

function renderComponent(wrapperProps?: SynapseContextType) {
  return render(<FavoriteButton entityId={mockFileEntityData.id} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

const onAddFavoriteCalled = jest.fn()
const onDeleteFavoriteCalled = jest.fn()

function useIsInFavorites() {
  server.use(
    rest.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}`,

      async (req, res, ctx) => {
        const response: PaginatedResults<EntityHeader> = {
          results: [mockFileEntityData.entityHeader],
        }

        return res(ctx.status(200), ctx.json(response))
      },
    ),
  )
}
function useIsNotInFavorites() {
  server.use(
    rest.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}`,

      async (req, res, ctx) => {
        const response: PaginatedResults<EntityHeader> = {
          results: [],
        }

        return res(ctx.status(200), ctx.json(response))
      },
    ),
  )
}

server.use(
  rest.post(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}/:id`,
    async (req, res, ctx) => {
      onAddFavoriteCalled(req.params.id)
      useIsInFavorites()
      return res(ctx.status(201), ctx.json(mockFileEntityData.entityHeader))
    },
  ),
  rest.delete(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}/:id`,
    async (req, res, ctx) => {
      onDeleteFavoriteCalled(req.params.id)
      useIsNotInFavorites()
      return res(ctx.status(200))
    },
  ),
)

describe('FavoriteButton tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Clicking the button adds/removes from favorites', async () => {
    useIsNotInFavorites()

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
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}/:id`,
        async (req, res, ctx) => {
          onAddFavoriteCalled(req.params.id)
          useIsInFavorites()
          await deferResponse
          return res(ctx.status(201), ctx.json(mockFileEntityData.entityHeader))
        },
      ),
    )

    // Start with the button not in favorites
    useIsNotInFavorites()

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
