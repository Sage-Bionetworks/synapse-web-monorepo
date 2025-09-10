import { server } from '@/mocks/msw/server'
import { mockClientList1, mockClientList2 } from '@/mocks/oauth/MockClient'
import {
  useCreateOAuthClient,
  useDeleteOAuthClient,
  useGetOAuthClientInfinite,
  useUpdateOAuthClient,
} from '@/synapse-queries'
import {
  getUseInfiniteQueryMock,
  getUseMutationIdleMock,
} from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  OAuthClientList,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import { OAuthManagement } from './OAuthManagement'

vi.mock('@/synapse-queries/oauth/useOAuthClient', () => {
  return {
    useGetOAuthClientInfinite: vi.fn(),
    useCreateOAuthClient: vi.fn(),
    useUpdateOAuthClient: vi.fn(),
    useDeleteOAuthClient: vi.fn(),
  }
})

const mockGetOAuthClientInfinite = vi.mocked(useGetOAuthClientInfinite)
const mockUseCreateOAuthClient = vi.mocked(useCreateOAuthClient)
const mockUseUpdateOAuthClient = vi.mocked(useUpdateOAuthClient)
const mockUseDeleteOAuthClient = vi.mocked(useDeleteOAuthClient)

const renderComponent = () => {
  render(<OAuthManagement />, {
    wrapper: createWrapper(),
  })
}

describe('oAuthManagement tests', () => {
  let setGetOAuthClientInfiniteSuccess: ReturnType<
    typeof getUseInfiniteQueryMock<OAuthClientList, SynapseClientError>
  >['setSuccess']
  let mockFetchNextPage: ReturnType<
    typeof getUseInfiniteQueryMock<OAuthClientList, SynapseClientError>
  >['mockFetchNextPage']

  beforeAll(() => {
    server.listen()

    const {
      mock,
      setSuccess,
      mockFetchNextPage: _mockFetchNextPage,
    } = getUseInfiniteQueryMock<OAuthClientList, SynapseClientError>()
    mockGetOAuthClientInfinite.mockImplementation(mock)
    setGetOAuthClientInfiniteSuccess = setSuccess
    mockFetchNextPage = _mockFetchNextPage

    mockUseCreateOAuthClient.mockReturnValue(getUseMutationIdleMock())
    mockUseUpdateOAuthClient.mockReturnValue(getUseMutationIdleMock())
    mockUseDeleteOAuthClient.mockReturnValue(getUseMutationIdleMock())
  })
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all headers and a row of data', async () => {
    renderComponent()

    setGetOAuthClientInfiniteSuccess([mockClientList1, mockClientList2])

    // Check column header
    await screen.findByText('Created')
    await screen.findByText('Modified')
    await screen.findByText('Client')
    await screen.findByText('Verified')
    await screen.findByText('Actions')

    // Check first row of data
    screen.findAllByText(
      formatDate(dayjs(mockClientList1.results[0].createdOn)),
    )
    screen.findAllByText(
      formatDate(dayjs(mockClientList1.results[0].modifiedOn)),
    )
    screen.findByText(mockClientList1.results[0].client_name)
    await screen.findByText('Yes')
  })

  it('Handles pagination', async () => {
    renderComponent()
    setGetOAuthClientInfiniteSuccess([mockClientList1], true)

    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockClientList1.results.length + 1,
      ),
    )

    const loadMoreButton = await screen.findByRole('button', {
      name: 'Load more',
    })
    await userEvent.click(loadMoreButton)

    expect(mockFetchNextPage).toHaveBeenCalled()

    act(() => {
      setGetOAuthClientInfiniteSuccess(
        [mockClientList1, mockClientList2],
        false,
      )
    })

    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockClientList1.results.length + mockClientList2.results.length + 1,
      ),
    )
    expect(loadMoreButton).not.toBeInTheDocument()
  })
})
