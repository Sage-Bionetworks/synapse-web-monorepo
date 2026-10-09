import { UserAccessRequestHistoryPage } from '@/components/dataaccess/UserAccessRequestHistory/UserAccessRequestHistoryPage'
import { SHOW_MORE_BUTTON_TEXT } from '@/components/layout/InfiniteTableLayout'
import UserOrTeamBadge from '@/components/UserOrTeamBadge/UserOrTeamBadge'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_ID_3,
} from '@/mocks/user/mock_user_profile'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { REPO } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  UserSubmissionSearchRequest,
  UserSubmissionSearchResult,
} from '@sage-bionetworks/synapse-client'
import { SubmissionState } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createMemoryRouter, RouterProvider } from 'react-router'

vi.mock('@/utils/functions/DateFormatter')
vi.mock('@/components/UserOrTeamBadge/UserOrTeamBadge')
vi.mock(
  '@/components/dataaccess/UserAccessRequestHistory/InFlightEDucSignaturesTable',
  () => ({
    InFlightEDucSignaturesTable: () => null,
  }),
)

vi.mocked(formatDate).mockReturnValue('mock formatted date')
vi.mocked(UserOrTeamBadge).mockImplementation(() => (
  <span data-testid={'UserOrTeamBadge'} />
))
const USER_REQUESTS_URL = `${getEndpoint(
  BackendDestinationEnum.REPO_ENDPOINT,
)}${REPO}/dataAccessSubmission/userRequests`

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

function renderPage() {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <UserAccessRequestHistoryPage />,
    },
  ])
  render(<RouterProvider router={router} />, { wrapper: createWrapper() })
}

describe('UserAccessRequestHistoryTable', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('Displays table of data', async () => {
    server.use(
      http.post(USER_REQUESTS_URL, () => HttpResponse.json({ results: data })),
    )

    renderPage()

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

    // 4 data rows + 1 header row
    await waitFor(() =>
      expect(within(table).getAllByRole('row')).toHaveLength(5),
    )
    const rows = within(table).getAllByRole('row')
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
    const requestBodies: UserSubmissionSearchRequest[] = []
    server.use(
      http.post(USER_REQUESTS_URL, async ({ request }) => {
        const body = (await request.json()) as UserSubmissionSearchRequest
        requestBodies.push(body)
        return HttpResponse.json(
          body.nextPageToken
            ? { results: [] }
            : { results: data, nextPageToken: 'nextPageToken' },
        )
      }),
    )

    renderPage()

    screen.getByText('History of your access requests')
    const button = await screen.findByRole('button', {
      name: SHOW_MORE_BUTTON_TEXT,
    })

    await userEvent.click(button)
    await waitFor(() =>
      expect(requestBodies).toEqual([
        expect.not.objectContaining({ nextPageToken: expect.anything() }),
        expect.objectContaining({ nextPageToken: 'nextPageToken' }),
      ]),
    )
  })
})
