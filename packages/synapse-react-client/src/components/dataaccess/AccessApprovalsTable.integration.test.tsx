import React from 'react'
import { server } from '../../mocks/msw/server'
import { render, screen } from '@testing-library/react'
import { AccessApprovalSearchResult } from '@sage-bionetworks/synapse-types'
import {
  AccessApprovalsTable,
  AccessApprovalsTableProps,
} from './AccessApprovalsTable'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'
import {
  mockAccessApprovalSearchResult2,
  mockApprovalSearchResponse,
} from '../../mocks/MockAccessApprovals'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import * as UseAccessApprovalsModule from '../../synapse-queries/dataaccess/useAccessApprovals'
import userEvent from '@testing-library/user-event'

const mockSearchAccessApprovalsInfinite = jest.spyOn(
  UseAccessApprovalsModule,
  'useSearchAccessApprovalsInfinite',
)

const mockFetchNextPage = jest.fn()

const page2: AccessApprovalSearchResult[] = [mockAccessApprovalSearchResult2]

function renderComponent(props: AccessApprovalsTableProps) {
  render(<AccessApprovalsTable {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('AccessApprovalsTable tests', () => {
  beforeAll(() => {
    server.listen()
    mockSearchAccessApprovalsInfinite.mockReturnValue({
      data: {
        pages: [
          {
            results: mockApprovalSearchResponse.results,
            nextPageToken: mockApprovalSearchResponse.nextPageToken,
          },
          {
            results: page2,
            nextPageToken: undefined,
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true,
      isLoading: false,
      isSuccess: true,
      isError: false,
      isLoadingError: false,
      error: null,
      isIdle: false,
      isRefetchError: false,
      status: 'success',
      fetchPreviousPage: jest.fn(),
      isFetchingNextPage: false,
      isFetchingPreviousPage: false,
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: false,
      isPlaceholderData: false,
      isPreviousData: false,
      isRefetching: false,
      isStale: false,
      refetch: jest.fn(),
      remove: jest.fn(),
    })
  })
  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all fields', async () => {
    renderComponent({
      accessorId: MOCK_USER_ID.toString(),
    })

    await screen.findByText('AR ID')
    await screen.findByText('Access Requirement Name')
    await screen.findByText('Submitter')
    await screen.findByText('Status')
    await screen.findByText('Modified Date')
    await screen.findByText('Expires')
  })

  it('Renders all of the data', async () => {
    renderComponent({
      accessorId: MOCK_USER_ID.toString(),
    })
    mockAllIsIntersecting(true)
    expect(
      await screen.findAllByText(
        mockAccessApprovalSearchResult2.accessRequirementId,
      ),
    ).toHaveLength(51)
  })

  it('Renders show more button when it has a next page', async () => {
    mockAllIsIntersecting(true)
    renderComponent({
      accessorId: MOCK_USER_ID.toString(),
    })
    const moreButton = screen.queryByRole('button', { name: 'Show More' })
    expect(
      screen.queryByRole('button', { name: 'Show More' }),
    ).toBeInTheDocument()
    await userEvent.click(moreButton!)
    const item2 = await screen.findAllByText('Access Requirement2')
    expect(item2).toHaveLength(1)
  })
})
