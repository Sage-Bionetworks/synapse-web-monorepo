import { UserAccessRequestHistoryPage } from '@/components/dataaccess/UserAccessRequestHistory/UserAccessRequestHistoryPage'
import UserOrTeamBadge from '@/components/UserOrTeamBadge/UserOrTeamBadge'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_ID_3,
} from '@/mocks/user/mock_user_profile'
import { useSearchAccessSubmissionUserRequestsInfinite } from '@/synapse-queries/dataaccess/useDataAccessSubmission'
import { formatDate } from '@/utils/functions/DateFormatter'
import { UserSubmissionSearchResult } from '@sage-bionetworks/synapse-client'
import { SubmissionState } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'

jest.mock('@/utils/functions/DateFormatter')
jest.mock('@/synapse-queries/dataaccess/useDataAccessSubmission')
jest.mock('@/components/UserOrTeamBadge/UserOrTeamBadge')

jest.mocked(formatDate).mockReturnValue('mock formatted date')
jest
  .mocked(UserOrTeamBadge)
  .mockImplementation(() => <span data-testid={'UserOrTeamBadge'} />)
const mockUseSearchAccessSubmissionUserRequestsInfinite = jest.mocked(
  useSearchAccessSubmissionUserRequestsInfinite,
)

const futureDate = new Date()
futureDate.setFullYear(futureDate.getFullYear() + 5)

const pastDate = new Date()
pastDate.setFullYear(pastDate.getFullYear() - 5)

const data: UserSubmissionSearchResult[] = [
  {
    id: '1',
    accessRequirementName: 'Requirement A',
    state: SubmissionState.APPROVED,
    createdOn: pastDate.toISOString(),
    submitterId: MOCK_USER_ID.toString(),
    userAccessApproval: {
      expiredOn: futureDate.toISOString(),
    },
  },
  {
    id: '2',
    accessRequirementName: 'Requirement A',
    state: SubmissionState.APPROVED,
    createdOn: pastDate.toISOString(),
    submitterId: MOCK_USER_ID_2.toString(),
    userAccessApproval: {
      expiredOn: pastDate.toISOString(),
    },
  },
  {
    id: '3',
    accessRequirementName: 'Requirement B',
    state: SubmissionState.REJECTED,
    createdOn: '2025-03-15T12:00:00Z',
    submitterId: MOCK_USER_ID_3.toString(),
    userAccessApproval: undefined,
  },
  {
    id: '4',
    accessRequirementName: 'Requirement C',
    state: SubmissionState.SUBMITTED,
    createdOn: '2025-04-05T12:00:00Z',
    submitterId: MOCK_USER_ID_3.toString(),
    userAccessApproval: undefined,
  },
]

mockUseSearchAccessSubmissionUserRequestsInfinite.mockReturnValue(
  getUseInfiniteQuerySuccessMock([
    {
      results: data,
    },
  ]),
)

describe('UserAccessRequestHistoryTable', () => {
  it('Displays table of data', async () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <UserAccessRequestHistoryPage />,
      },
    ])
    render(<RouterProvider router={router} />)

    screen.getByText('History of your access requests')

    const table = await screen.findByRole('table')
    const columnHeaders = within(table).getAllByRole('columnheader')
    expect(columnHeaders.length).toBe(6)
    expect(columnHeaders[0]).toHaveTextContent('Access Requirement Name')
    expect(columnHeaders[1]).toHaveTextContent('Status')
    expect(columnHeaders[2]).toHaveTextContent('Date Submitted')
    expect(columnHeaders[3]).toHaveTextContent('Expires')
    expect(columnHeaders[4]).toHaveTextContent('Submitter')
    expect(columnHeaders[5]).toHaveTextContent('')

    const rows = within(table).getAllByRole('row')
    expect(rows.length).toBe(5) // 4 data rows + 1 header row
    const row1Cells = within(rows[1]).getAllByRole('cell')
    expect(row1Cells[0]).toHaveTextContent('Requirement A')
    expect(row1Cells[1]).toHaveTextContent('Approved')
    expect(row1Cells[2]).toHaveTextContent('mock formatted date')
    expect(row1Cells[3]).toHaveTextContent('mock formatted date')
    within(row1Cells[4]).getByTestId('UserOrTeamBadge')
    const link = within(row1Cells[5]).getByRole('link', {
      name: 'View Request',
    })
    expect(link).toHaveAttribute('href', '/submissions/1')

    // Check that row 2 is expired, row 3 is rejected, row 4 is submitted
    expect(within(rows[2]).getAllByRole('cell')[1]).toHaveTextContent('Expired')
    expect(within(rows[3]).getAllByRole('cell')[1]).toHaveTextContent(
      'Rejected',
    )
    expect(within(rows[4]).getAllByRole('cell')[1]).toHaveTextContent(
      'Submitted',
    )
  })

  it('Handles pagination', async () => {
    const hasNextPage = true
    mockUseSearchAccessSubmissionUserRequestsInfinite.mockReturnValue(
      getUseInfiniteQuerySuccessMock(
        [
          {
            results: data,
            nextPageToken: 'nextPageToken',
          },
        ],
        hasNextPage,
      ),
    )
    const router = createMemoryRouter([
      {
        path: '/',
        element: <UserAccessRequestHistoryPage />,
      },
    ])
    render(<RouterProvider router={router} />)

    screen.getByText('History of your access requests')
    const button = await screen.findByRole('button', { name: 'Load More' })

    const mockDataHookResults =
      mockUseSearchAccessSubmissionUserRequestsInfinite.mock.results
    const lastDataHookResult =
      mockDataHookResults[mockDataHookResults.length - 1]
    const mockFetchNextPage = jest.mocked(
      lastDataHookResult.value.fetchNextPage,
    )

    await userEvent.click(button)
    expect(mockFetchNextPage).toHaveBeenCalled()
  })
})
