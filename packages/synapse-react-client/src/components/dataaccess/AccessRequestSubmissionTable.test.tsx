import { mockSubmissionSearchResponse } from '@/mocks/dataaccess/mockAccessRequest'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import { mockActTeam } from '@/mocks/team/mockTeam'
import {
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
} from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ACCESS_REQUEST_SUBMISSION_SEARCH } from '@/utils/APIConstants'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  AccessType,
  SubmissionReviewerFilterType,
  SubmissionSearchRequest,
  SubmissionSearchResponse,
  SubmissionState,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import { upperFirst } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import { createMemoryRouter, RouterProvider } from 'react-router'
import {
  AccessRequestSubmissionTable,
  AccessRequestSubmissionTableProps,
} from './AccessRequestSubmissionTable'

function renderComponent(props: AccessRequestSubmissionTableProps) {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <AccessRequestSubmissionTable {...props} />,
    },
  ])

  render(<RouterProvider router={router} />, {
    wrapper: createWrapper(),
  })
}

const searchAccessSubmissionSpy = vi.spyOn(
  SynapseClient,
  'searchAccessSubmission',
)

const nextPageToken = 'mock-npt'

const mockSubmissionSearchResponsePage2: SubmissionSearchResponse = {
  results: [
    {
      id: '9608424',
      createdOn: '2017-08-23T18:48:20.892Z',
      modifiedOn: '2022-05-20T22:26:44.406Z',
      accessRequirementName: 'Access Requirement on Page 2',
      accessRequirementVersion: '269',
      accessRequirementId: '123',
      submitterId: '456',
      state: SubmissionState.SUBMITTED,
      accessorChanges: [
        {
          userId: '456',
          type: AccessType.GAIN_ACCESS,
        },
      ],
      accessRequirementReviewerIds: ['12345'],
    },
  ],
}

describe('Access Request Submission Table tests', () => {
  beforeAll(() => {
    server.listen()

    // Configure MSW
    server.use(
      http.post<never, SubmissionSearchRequest>(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUEST_SUBMISSION_SEARCH}`,
        async ({ request }) => {
          let response
          if ((await request.json()).nextPageToken === nextPageToken) {
            response = mockSubmissionSearchResponsePage2
          } else {
            response = {
              ...mockSubmissionSearchResponse,
              nextPageToken: nextPageToken,
            }
          }
          return HttpResponse.json(response, { status: 200 })
        },
      ),
    )
  })

  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })

  afterAll(() => server.close())

  it('Passes along props to the search request', async () => {
    const accessorId = '456'
    const accessRequirementId = '1234321'
    const submissionState = SubmissionState.APPROVED
    const reviewerId = '12345'
    const reviewerFilterType = SubmissionReviewerFilterType.ALL

    const props = {
      showSubmitter: true,
      showStatus: true,
      showRequesters: true,
      accessorId: accessorId,
      accessRequirementId: accessRequirementId,
      submissionState: submissionState,
      reviewerId: reviewerId,
      reviewerFilterType: reviewerFilterType,
    }

    renderComponent(props)

    await waitFor(() => expect(searchAccessSubmissionSpy).toHaveBeenCalled())
  })

  it('Renders all headers and a row of data', async () => {
    renderComponent({
      showSubmitter: true,
      showStatus: true,
      showRequesters: true,
    })
    await screen.findByRole('table')
    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSubmissionSearchResponse.results.length + 1,
      ),
    )

    screen.getByRole('columnheader', { name: 'Request' })
    screen.getByRole('columnheader', { name: 'Access Requirement Name' })
    screen.getByRole('columnheader', { name: 'Submitter' })
    screen.getByRole('columnheader', { name: 'Status' })
    screen.getByRole('columnheader', { name: 'Requesters' })
    screen.getByRole('columnheader', { name: 'Reviewer(s)' })
    screen.getByRole('columnheader', { name: /^Created Date/ })

    screen.getByRole('cell', {
      name: mockSubmissionSearchResponse.results[0].id,
    })
    screen.getByRole('cell', {
      name: mockSubmissionSearchResponse.results[0].accessRequirementName,
    })
    await screen.findAllByText('@' + MOCK_USER_NAME)
    screen.getByRole('cell', {
      name: upperFirst(
        mockSubmissionSearchResponse.results[0].state.toLocaleLowerCase(),
      ),
    })
    await screen.findAllByText('@' + MOCK_USER_NAME_2)
    await screen.findByRole('cell', {
      name: mockActTeam.name,
    })
    await screen.findByRole('cell', {
      name: formatDate(
        dayjs(mockSubmissionSearchResponse.results[0].createdOn),
      ),
    })
  })

  it('Handles pagination', async () => {
    renderComponent({
      showSubmitter: true,
      showStatus: true,
      showRequesters: true,
    })
    await screen.findByRole('table')
    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSubmissionSearchResponse.results.length + 1, // +1 for the header row
      ),
    )

    // There is more than one page, so a button should be shown
    const showMoreButton = await screen.findByRole('button', {
      name: 'Show More',
    })

    // Clicking the button should make a request for the next page
    await userEvent.click(showMoreButton)
    await waitFor(() =>
      expect(searchAccessSubmissionSpy).toHaveBeenLastCalledWith(
        expect.objectContaining({ nextPageToken: nextPageToken }),
        MOCK_ACCESS_TOKEN,
      ),
    )

    // Second page of data should be shown
    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSubmissionSearchResponse.results.length +
          mockSubmissionSearchResponsePage2.results.length +
          1, // +1 for the header row
      ),
    )

    // No third page, so the next button should be gone
    expect(
      screen.queryByRole('button', {
        name: 'Show More',
      }),
    ).not.toBeInTheDocument()
  })

  it('Handles sorting', async () => {
    renderComponent({
      showSubmitter: true,
      showStatus: true,
      showRequesters: true,
    })

    await waitFor(() => expect(searchAccessSubmissionSpy).toHaveBeenCalled())

    // By default, should sort by created on, descending
    const defaultSort = [{ field: 'CREATED_ON', direction: 'DESC' }]
    expect(searchAccessSubmissionSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        sort: defaultSort,
      }),
      MOCK_ACCESS_TOKEN,
    )

    // clicking the current sort should reverse the direction
    const createdOnSortButton = screen.getByLabelText('Sort by Created Date')
    await userEvent.click(createdOnSortButton)

    // desc -> asc
    await waitFor(() =>
      expect(searchAccessSubmissionSpy).toHaveBeenLastCalledWith(
        expect.objectContaining({
          sort: [{ field: 'CREATED_ON', direction: 'ASC' }],
        }),
        MOCK_ACCESS_TOKEN,
      ),
    )
  })
})
