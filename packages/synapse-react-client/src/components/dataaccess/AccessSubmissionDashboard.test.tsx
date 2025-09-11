import {
  mockManagedACTAccessRequirement as mockAccessRequirement,
  mockSearchResultsPageOne,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { server } from '@/mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
  mockUserBundle,
} from '@/mocks/user/mock_user_profile'
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
import { ACT_TEAM_ID } from '@/utils/SynapseConstants'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createMemoryRouter, RouterProvider } from 'react-router'
import selectEvent from 'react-select-event'
import * as AccessRequestSubmissionTableModule from './AccessRequestSubmissionTable'
import { getOptionLabel } from './AccessRequirementSearchBox/AccessRequirementSearchBox'
import {
  DataAccessSubmissionDashboard,
  getReviewerFilterID,
} from './AccessSubmissionDashboard'

const SUBMISSION_TABLE_TEST_ID = 'AccessSubmissionTableTestId'
const MOCK_AR_ID = '12321'

const mockAccessRequestSubmissionTable = vi
  .spyOn(AccessRequestSubmissionTableModule, 'AccessRequestSubmissionTable')
  .mockImplementation(() => {
    return <div data-testid={SUBMISSION_TABLE_TEST_ID}></div>
  })

const onServiceReceivedRequest = vi.fn()

const { getLocation, LocationTracker } = getLocationTracker()

function renderComponent(initialEntries: string[] = ['/']) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <>
            <LocationTracker />
            <DataAccessSubmissionDashboard />
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

describe('AccessSubmissionDashboard tests', () => {
  beforeAll(() => {
    server.listen()

    server.use(
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_SEARCH}`,

        async ({ request }) => {
          onServiceReceivedRequest(await request.json())
          return HttpResponse.json(mockSearchResultsPageOne, { status: 200 })
        },
      ),
      // Return an access requirement specified by ID
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

        async ({ request }) => {
          onServiceReceivedRequest(await request.json())
          return HttpResponse.json(mockAccessRequirement, { status: 200 })
        },
      ),
      // Current user is ACT member
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
        () => {
          return HttpResponse.json(
            { ...mockUserBundle, isACTMember: true },
            { status: 200 },
          )
        },
      ),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    window.history.pushState(null, document.title, '/')
  })
  afterAll(() => server.close())

  it('Renders inputFields and the table component', async () => {
    renderComponent()

    expect(await screen.findAllByRole('combobox')).toHaveLength(3)
    await screen.findByTestId(SUBMISSION_TABLE_TEST_ID)
    expect(mockAccessRequestSubmissionTable).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        accessRequirementId: undefined,
        accessorId: undefined,
        reviewerId: undefined,
      }),
    )
  })

  it('Updates the passed props and URLSearchParams when updating arName', async () => {
    renderComponent()
    const arNameInput = await screen.findByLabelText(
      'Filter by Access Requirement Name',
    )
    await userEvent.type(arNameInput, mockAccessRequirement.name)
    await screen.findByText(
      getOptionLabel(mockAccessRequirement.id, mockAccessRequirement.name),
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
          accessorId: undefined,
          reviewerId: undefined,
        }),
      )
    })
  })

  it('Updates the passed props and URLSearchParams when updating requesterId', async () => {
    renderComponent()
    const requesterInput = await screen.findByLabelText('Filter by Requester')
    await userEvent.type(requesterInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME))
    await act(async () => {
      await selectEvent.select(requesterInput, new RegExp('@' + MOCK_USER_NAME))
    })

    await waitFor(() => {
      expect(
        new URLSearchParams(getLocation().search).get('accessorId'),
      ).toEqual(MOCK_USER_ID.toString())

      expect(mockAccessRequestSubmissionTable).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({
          accessRequirementId: undefined,
          accessorId: MOCK_USER_ID.toString(),
          reviewerId: undefined,
        }),
      )
    })
  })

  it('Updates the passed props and URLSearchParams when updating reviewerId', async () => {
    renderComponent()
    const reviewerInput = await screen.findByLabelText('Filter by Reviewer')
    await userEvent.type(reviewerInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME))
    await act(async () => {
      await selectEvent.select(reviewerInput, new RegExp('@' + MOCK_USER_NAME))
    })

    await waitFor(() => {
      expect(
        new URLSearchParams(getLocation().search).get('reviewerId'),
      ).toEqual(MOCK_USER_ID.toString())

      expect(mockAccessRequestSubmissionTable).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({
          accessRequirementId: undefined,
          accessorId: undefined,
          reviewerId: MOCK_USER_ID.toString(),
        }),
      )
    })
  })

  it('Updates the passed props and URLSearchParams when updating reviewerFilterType', async () => {
    renderComponent()
    const reviewerFilterTypeCheckbox = await screen.findByLabelText(
      'Reviewed by ACT only',
    )
    await userEvent.click(reviewerFilterTypeCheckbox)

    await waitFor(() => {
      expect(
        new URLSearchParams(getLocation().search).get('reviewerFilterType'),
      ).toEqual('ACT_ONLY')

      expect(mockAccessRequestSubmissionTable).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({
          accessRequirementId: undefined,
          accessorId: undefined,
          reviewerId: undefined,
          reviewerFilterType: 'ACT_ONLY',
        }),
      )
    })
  })

  it('Auto-fills the inputs with search parameter values', async () => {
    const searchParams = new URLSearchParams('')
    searchParams.set('accessRequirementId', MOCK_AR_ID.toString())
    searchParams.set('accessorId', MOCK_USER_ID.toString())
    searchParams.set('reviewerId', MOCK_USER_ID.toString())
    searchParams.set('reviewerFilterType', 'ACT_ONLY')
    const initialEntries = ['/', `/?${searchParams.toString()}`]
    renderComponent(initialEntries)

    await waitFor(() =>
      expect(mockAccessRequestSubmissionTable).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({
          accessRequirementId: MOCK_AR_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          reviewerId: MOCK_USER_ID.toString(),
          reviewerFilterType: 'ACT_ONLY',
        }),
      ),
    )
  })

  it('hides the reviewerFilterType checkbox when the current user is not an ACT member', async () => {
    server.use(
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
        () => {
          return HttpResponse.json(
            { ...mockUserBundle, isACTMember: false },
            { status: 200 },
          )
        },
      ),
    )

    renderComponent()

    await expect(
      screen.findByLabelText('Reviewed by ACT only'),
    ).rejects.toThrow()
  })

  describe('getReviewerFilterID', () => {
    it('handle non-act reviewer', () => {
      const nonActReviewerID = MOCK_USER_ID.toString()
      const result = getReviewerFilterID(nonActReviewerID)
      expect(result).toBeDefined()
      expect(result).toBe(MOCK_USER_ID.toString())
    })
    it('handle act reviewer', () => {
      const actReviewerID = ACT_TEAM_ID.toString()
      const result = getReviewerFilterID(actReviewerID)
      expect(result).toBeUndefined()
    })
    it('handle passing undefined', () => {
      const result = getReviewerFilterID(null)
      expect(result).toBeUndefined()
    })
  })
})
