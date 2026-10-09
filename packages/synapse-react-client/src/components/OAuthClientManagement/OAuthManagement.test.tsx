import { SHOW_MORE_BUTTON_TEXT } from '@/components/layout/InfiniteTableLayout'
import { server } from '@/mocks/msw/server'
import { mockClientList1, mockClientList2 } from '@/mocks/oauth/MockClient'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { formatDate } from '@/utils/functions/DateFormatter'
import { AUTH } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { http, HttpResponse } from 'msw'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import { OAuthManagement } from './OAuthManagement'

const OAUTH_CLIENT_LIST_URL = `${getEndpoint(
  BackendDestinationEnum.REPO_ENDPOINT,
)}${AUTH}/oauth2/client`

const renderComponent = () => {
  render(<OAuthManagement />, {
    wrapper: createWrapper(),
  })
}

describe('oAuthManagement tests', () => {
  // Serves page 1 by default, and page 2 when the first page's token is requested
  const mockClientListHandler = (
    onRequest?: (pageToken: string | null) => void,
  ) =>
    http.get(OAUTH_CLIENT_LIST_URL, ({ request }) => {
      const pageToken = new URL(request.url).searchParams.get('nextPageToken')
      onRequest?.(pageToken)
      return HttpResponse.json(
        pageToken === mockClientList1.nextPageToken
          ? mockClientList2
          : mockClientList1,
      )
    })

  beforeAll(() => server.listen())
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all headers and a row of data', async () => {
    server.use(mockClientListHandler())
    renderComponent()

    // Check column header
    await screen.findByText('Created')
    await screen.findByText('Modified')
    await screen.findByText('Client')
    await screen.findByText('Verified')
    await screen.findByText('Actions')

    // Check first row of data
    await screen.findAllByText(
      formatDate(dayjs(mockClientList1.results[0].createdOn)),
    )
    await screen.findAllByText(
      formatDate(dayjs(mockClientList1.results[0].modifiedOn)),
    )
    await screen.findByText(mockClientList1.results[0].client_name)
    await screen.findByText('Yes')
  })

  it('Handles pagination', async () => {
    const onRequest = vi.fn()
    server.use(mockClientListHandler(onRequest))
    renderComponent()

    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockClientList1.results.length + 1,
      ),
    )

    const loadMoreButton = await screen.findByRole('button', {
      name: SHOW_MORE_BUTTON_TEXT,
    })
    await userEvent.click(loadMoreButton)

    await waitFor(() =>
      expect(onRequest).toHaveBeenCalledWith(mockClientList1.nextPageToken),
    )

    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockClientList1.results.length + mockClientList2.results.length + 1,
      ),
    )
    expect(loadMoreButton).not.toBeInTheDocument()
  })
})
