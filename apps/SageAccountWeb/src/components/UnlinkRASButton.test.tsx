import { server } from '@/mocks/node'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import {
  BackendDestinationEnum,
  getEndpoint,
} from 'synapse-react-client/utils/functions/getEndpoint'
import TestWrapper from '../tests/TestWrapper'
import { UnlinkRASButton } from './UnlinkRASButton'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('UnlinkRASButton', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  function renderComponent(onUnlinkSuccess?: () => void) {
    const user = userEvent.setup()
    render(<UnlinkRASButton onUnlinkSuccess={onUnlinkSuccess} />, {
      wrapper: TestWrapper,
    })
    return { user }
  }

  async function openDialog(user: ReturnType<typeof userEvent.setup>) {
    await user.click(
      screen.getByRole('button', { name: 'Unlink your NIH account' }),
    )
    return screen.findByRole('dialog')
  }

  it('does not unlink until the user confirms', async () => {
    const onRequest = vi.fn()
    server.use(
      http.delete(`${backendOrigin}/auth/v1/oauth2/identity`, () => {
        onRequest()
        return new HttpResponse(null, { status: 200 })
      }),
    )

    const { user } = renderComponent()
    const dialog = await openDialog(user)

    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    await waitFor(() => expect(dialog).not.toBeVisible())
    expect(onRequest).not.toHaveBeenCalled()
  })

  it('unlinks NIH RAS and invokes the callback on confirmation', async () => {
    const onRequest = vi.fn()
    server.use(
      http.delete(`${backendOrigin}/auth/v1/oauth2/identity`, ({ request }) => {
        onRequest(new URL(request.url).searchParams.get('provider'))
        return new HttpResponse(null, { status: 200 })
      }),
    )
    const onUnlinkSuccess = vi.fn()

    const { user } = renderComponent(onUnlinkSuccess)
    await openDialog(user)

    await user.click(
      screen.getByRole('button', { name: 'Yes, unlink NIH account' }),
    )

    await waitFor(() => expect(onUnlinkSuccess).toHaveBeenCalled())
    expect(onRequest).toHaveBeenCalledWith('NIH_RESEARCHER_AUTH_SERVICE')
  })

  it('shows an error and keeps the dialog open when unlinking fails', async () => {
    server.use(
      http.delete(`${backendOrigin}/auth/v1/oauth2/identity`, () => {
        return HttpResponse.json(
          { reason: 'Something went wrong' },
          { status: 403 },
        )
      }),
    )
    const onUnlinkSuccess = vi.fn()

    const { user } = renderComponent(onUnlinkSuccess)
    const dialog = await openDialog(user)

    await user.click(
      screen.getByRole('button', { name: 'Yes, unlink NIH account' }),
    )

    await screen.findByText('Something went wrong')
    expect(onUnlinkSuccess).not.toHaveBeenCalled()
    expect(dialog).toBeVisible()
  })
})
