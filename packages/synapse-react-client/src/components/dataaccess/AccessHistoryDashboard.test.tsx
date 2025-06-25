import {
  mockManagedACTAccessRequirement as mockAccessRequirement,
  mockSearchResultsPageOne as mockSearchResults,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID, MOCK_USER_NAME } from '@/mocks/user/mock_user_profile'
import { getLocationTracker } from '@/testutils/LocationTracker'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_SEARCH,
  USER_BUNDLE,
} from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { UserBundle } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createMemoryRouter, RouterProvider } from 'react-router'
import selectEvent from 'react-select-event'
import * as AccessApprovalsTableModule from './AccessApprovalsTable'
import { UserHistoryDashboard } from './AccessHistoryDashboard'
import * as AccessRequestSubmissionTableModule from './AccessRequestSubmissionTable'
import { getOptionLabel } from './AccessRequirementSearchBox/AccessRequirementSearchBox'

const APPROVAL_TABLE_TEST_ID = 'AccessApprovalTableTestId'
const SUBMISSION_TABLE_TEST_ID = 'AccessSubmissionTableTestId'

const mockAccessApprovalsTable = vi
  .spyOn(AccessApprovalsTableModule, 'AccessApprovalsTable')
  .mockImplementation(() => {
    return <div data-testid={APPROVAL_TABLE_TEST_ID}></div>
  })

const mockAccessRequestSubmissionTable = vi
  .spyOn(AccessRequestSubmissionTableModule, 'AccessRequestSubmissionTable')
  .mockImplementation(() => {
    return <div data-testid={SUBMISSION_TABLE_TEST_ID}></div>
  })

const onServiceReceivedRequest = vi.fn()

function getUserBundleHandler(isACTMember: boolean, isARReviewer: boolean) {
  return http.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
    () => {
      const response: UserBundle = {
        userId: MOCK_USER_ID.toString(),
        isACTMember: isACTMember,
        isARReviewer: isARReviewer,
      }
      return HttpResponse.json(response, { status: 200 })
    },
  )
}
const { getLocation, LocationTracker } = getLocationTracker()

function renderComponent(initialEntries: string[] = ['/']) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <>
            <LocationTracker />
            <UserHistoryDashboard />
          </>
        ),
      },
    ],
    {
      initialEntries: initialEntries,
    },
  )
  const renderResult = render(<RouterProvider router={router} />, {
    wrapper: createWrapper(),
  })
  return { ...renderResult }
}

describe('AccessHistoryDashboard tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()

    const isACTMember = true
    const isARReviewer = true

    server.use(
      getUserBundleHandler(isACTMember, isARReviewer),
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_SEARCH}`,

        async ({ request }) => {
          onServiceReceivedRequest(await request.json())
          return HttpResponse.json(mockSearchResults, { status: 200 })
        },
      ),

      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

        async ({ request }) => {
          onServiceReceivedRequest(await request.json())
          return HttpResponse.json(mockAccessRequirement, { status: 200 })
        },
      ),
    )
  })

  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders only the user/team name input when there is no input', async () => {
    renderComponent()

    expect(await screen.findAllByRole('combobox')).toHaveLength(1)

    expect(
      screen.queryByTestId(SUBMISSION_TABLE_TEST_ID),
    ).not.toBeInTheDocument()
    expect(mockAccessRequestSubmissionTable).not.toHaveBeenCalled()
    expect(screen.queryByTestId(APPROVAL_TABLE_TEST_ID)).not.toBeInTheDocument()
    expect(mockAccessApprovalsTable).not.toHaveBeenCalled()
  })

  it('Renders table components and filter input for AR Name', async () => {
    renderComponent()

    const userInput = await screen.findByRole('combobox')
    await userEvent.type(userInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp(`@${MOCK_USER_NAME}`))
    await act(async () => {
      await selectEvent.select(userInput, new RegExp(`@${MOCK_USER_NAME}`))
    })

    await screen.findByLabelText('Select a user to view their access history')
    await screen.findByLabelText('Filter by Access Requirement Name')

    await screen.findByTestId(SUBMISSION_TABLE_TEST_ID)
    expect(mockAccessRequestSubmissionTable).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        accessRequirementId: undefined,
        accessorId: '',
        showStatus: true,
        showSubmitter: true,
      }),
    )

    await screen.findByTestId(APPROVAL_TABLE_TEST_ID)
    expect(mockAccessApprovalsTable).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        accessRequirementId: undefined,
        accessorId: '',
      }),
    )
  })

  it('Renders only the submission table for non-ACT users', async () => {
    // Pre-configure to not be in ACT
    const isACTMember = false
    const isARReviewer = true
    server.use(getUserBundleHandler(isACTMember, isARReviewer))

    renderComponent()

    const userInput = await screen.findByRole('combobox')
    await userEvent.type(userInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp(`@${MOCK_USER_NAME}`))
    await act(async () => {
      await selectEvent.select(userInput, new RegExp(`@${MOCK_USER_NAME}`))
    })

    await screen.findByLabelText('Select a user to view their access history')
    await screen.findByLabelText('Filter by Access Requirement Name')

    await screen.findByTestId(SUBMISSION_TABLE_TEST_ID)
    expect(mockAccessRequestSubmissionTable).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        accessRequirementId: undefined,
        accessorId: '',
        showStatus: true,
        showSubmitter: true,
      }),
    )

    expect(screen.queryByTestId(APPROVAL_TABLE_TEST_ID)).not.toBeInTheDocument()
    expect(mockAccessApprovalsTable).not.toHaveBeenCalled()
  })

  it('Updates the passed props and URLSearchParams when updating user/team name', async () => {
    renderComponent()

    const userInput = await screen.findByRole('combobox')
    await userEvent.type(userInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME))
    await act(async () => {
      await selectEvent.select(userInput, new RegExp('@' + MOCK_USER_NAME))
    })

    await waitFor(() => {
      expect(
        new URLSearchParams(getLocation().search).get('accessorId'),
      ).toEqual(MOCK_USER_ID.toString())

      expect(mockAccessRequestSubmissionTable).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          accessRequirementId: undefined,
          accessorId: MOCK_USER_ID.toString(),
          showStatus: true,
          showSubmitter: true,
        }),
      )

      expect(mockAccessApprovalsTable).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          accessRequirementId: undefined,
          accessorId: MOCK_USER_ID.toString(),
        }),
      )
    })
  })

  it('Filters the passed props and URLSearchParams when updating the AR Name', async () => {
    renderComponent()
    const userInput = await screen.findByRole('combobox')
    await userEvent.type(userInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME))
    await act(async () => {
      await selectEvent.select(userInput, new RegExp('@' + MOCK_USER_NAME))
    })

    await screen.findByLabelText('Select a user to view their access history')
    const arNameInput = await screen.findByLabelText(
      'Filter by Access Requirement Name',
    )

    await userEvent.type(
      arNameInput,
      mockAccessRequirement.name.substring(0, 3),
    )
    await screen.findByText(
      getOptionLabel(mockAccessRequirement.id, mockAccessRequirement.name),
      undefined,
      { timeout: 15000 },
    )
    await act(async () => {
      await selectEvent.select(
        arNameInput,
        getOptionLabel(mockAccessRequirement.id, mockAccessRequirement.name),
      )
    })

    await waitFor(() => {
      expect(
        new URLSearchParams(getLocation().search).get('accessRequirementId'),
      ).toEqual(mockAccessRequirement.id.toString())

      expect(mockAccessRequestSubmissionTable).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({
          accessRequirementId: mockAccessRequirement.id.toString(),
          accessorId: MOCK_USER_ID.toString(),
          showStatus: true,
          showSubmitter: true,
        }),
      )

      expect(mockAccessApprovalsTable).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          accessRequirementId: mockAccessRequirement.id.toString(),
          accessorId: MOCK_USER_ID.toString(),
        }),
      )
    })
  })

  it('Auto-fills the inputs with search parameter values', async () => {
    const searchParams = new URLSearchParams('')
    searchParams.set('accessRequirementId', mockAccessRequirement.id.toString())
    searchParams.set('accessorId', MOCK_USER_ID.toString())
    const initialEntries = ['/', `/?${searchParams.toString()}`]
    renderComponent(initialEntries)

    await waitFor(() => {
      expect(mockAccessRequestSubmissionTable).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          accessRequirementId: mockAccessRequirement.id.toString(),
          accessorId: MOCK_USER_ID.toString(),
          showStatus: true,
          showSubmitter: true,
        }),
      )

      expect(mockAccessApprovalsTable).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          accessRequirementId: mockAccessRequirement.id.toString(),
          accessorId: MOCK_USER_ID.toString(),
        }),
      )
    })
  })
})
