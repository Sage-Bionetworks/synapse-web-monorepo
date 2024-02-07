import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import React from 'react'
import { OAuthManagement } from './OAuthManagement'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { formatDate } from '../../utils/functions/DateFormatter'
import {
  useCreateOAuthClient,
  useDeleteOAuthClient,
  useGetOAuthClientInfinite,
  useUpdateOAuthClient,
} from '../../synapse-queries'
import { server } from '../../mocks/msw/server'
import { mockClientList1, mockClientList2 } from '../../mocks/oauth/MockClient'

jest.mock('../../../src/synapse-queries/oauth/useOAuthClient', () => {
  return {
    useGetOAuthClientInfinite: jest.fn(),
    useCreateOAuthClient: jest.fn(),
    useUpdateOAuthClient: jest.fn(),
    useDeleteOAuthClient: jest.fn(),
  }
})

const mockFetchNextPage = jest.fn()
const mockGetOAuthClientInfinite = useGetOAuthClientInfinite as jest.Mock
const mockUseCreateOAuthClient = useCreateOAuthClient as jest.Mock
const mockUseUpdateOAuthClient = useUpdateOAuthClient as jest.Mock
const mockUseDeleteOAuthClient = useDeleteOAuthClient as jest.Mock

const renderComponent = () => {
  render(<OAuthManagement />, {
    wrapper: createWrapper(),
  })
}

const mockReturnHooks = {
  data: {
    pages: [mockClientList1.results[0]],
  },
}

describe('oAuthManagement tests', () => {
  beforeAll(() => {
    server.listen()
    mockGetOAuthClientInfinite.mockReturnValue({
      data: {
        pages: [
          {
            results: mockClientList1.results,
            nextTokenPage: mockClientList1.nextPageToken,
          },
          {
            results: mockClientList2.results,
            nextTokenPage: mockClientList2.nextPageToken,
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true,
      isLoading: false,
      isSuccess: true,
    })
    mockUseCreateOAuthClient.mockReturnValue({ mockReturnHooks })
    mockUseUpdateOAuthClient.mockReturnValue({ mockReturnHooks })
    mockUseDeleteOAuthClient.mockReturnValue({ mockReturnHooks })
  })
  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all headers and a row of data', async () => {
    renderComponent()

    // Check column header
    await screen.findByText('Created')
    await screen.findByText('Modified')
    await screen.findByText('Client')
    await screen.findByText('Verified')
    await screen.findByText('App Secret')
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
    await screen.findAllByRole('button', { name: 'Edit' })
    await screen.findAllByRole('button', { name: 'Generate Secret' })
  })

  it('Handles pagination', async () => {
    renderComponent()

    const loadButton = screen.queryByRole('button', { name: 'Load more' })
    expect(
      screen.getByRole('button', { name: 'Load more' }),
    ).toBeInTheDocument()

    await userEvent.click(loadButton!)

    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockClientList1.results.length + mockClientList2.results.length + 1,
      ),
    )
  })
})
