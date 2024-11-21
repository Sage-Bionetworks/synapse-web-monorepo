import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import selectEvent from 'react-select-event'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import { server } from '../../mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
} from '../../mocks/user/mock_user_profile'
import SynapseClient from '../../synapse-client'
import { getLocationTracker } from '../../testutils/LocationTracker'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  AccessRequirementDashboard,
  AccessRequirementDashboardProps,
  AR_NAME_OR_ID_SEARCH_PARAM_KEY,
  AR_TYPE_SEARCH_PARAM_KEY,
  RELATED_PROJECT_ID_SEARCH_PARAM_KEY,
  REVIEWER_ID_SEARCH_PARAM_KEY,
} from './AccessRequirementDashboard'

const NAME_CONTAINS_PREFIX = 'abc'
const RELATED_PROJECT_ID = 'syn123'

const searchAccessRequirementsSpy = jest.spyOn(
  SynapseClient,
  'searchAccessRequirements',
)

const { getLocation, LocationTracker } = getLocationTracker()

function renderComponent(
  props?: AccessRequirementDashboardProps,
  initialEntries: string[] = ['/'],
) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <>
            <LocationTracker />
            <AccessRequirementDashboard {...props} />
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

describe('AccessRequirementDashboard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders input fields and the table component', async () => {
    const mockOnCreateNewAR = jest.fn()
    renderComponent({ onCreateNewAccessRequirementClicked: mockOnCreateNewAR })

    expect(await screen.findAllByRole('combobox')).toHaveLength(1)
    expect(await screen.findAllByRole('textbox')).toHaveLength(2)
    await screen.findByRole('table')
    await waitFor(() =>
      expect(searchAccessRequirementsSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          nameContains: '',
          relatedProjectId: undefined,
          reviewerId: undefined,
        }),
      ),
    )
  })

  it('Updates the passed props and URLSearchParams when updating nameOrID', async () => {
    renderComponent()
    const nameOrIDInput = await screen.findByLabelText(
      'Filter by Access Requirement Name or ID',
    )
    await userEvent.type(nameOrIDInput, NAME_CONTAINS_PREFIX)

    await waitFor(() => {
      expect(new URLSearchParams(getLocation().search).get('nameOrID')).toEqual(
        NAME_CONTAINS_PREFIX,
      )

      expect(searchAccessRequirementsSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          nameContains: NAME_CONTAINS_PREFIX,
          relatedProjectId: undefined,
          reviewerId: undefined,
        }),
      )
    })
  })

  it('Updates the URL search parameters when updating relatedProjectId', async () => {
    renderComponent()
    const relatedProjectInput = await screen.findByLabelText(
      'Filter by Project',
    )
    await userEvent.type(relatedProjectInput, RELATED_PROJECT_ID)

    await waitFor(() =>
      expect(
        new URLSearchParams(getLocation().search).get('relatedProjectId'),
      ).toEqual(RELATED_PROJECT_ID),
    )
    expect(searchAccessRequirementsSpy).toHaveBeenLastCalledWith(
      MOCK_ACCESS_TOKEN,
      expect.objectContaining({
        nameContains: '',
        relatedProjectId: RELATED_PROJECT_ID,
        reviewerId: undefined,
      }),
    )
  })

  it('Updates the URL search parameters when updating reviewerId', async () => {
    renderComponent()
    const reviewerInput = await screen.findByLabelText('Filter by Reviewer')
    await userEvent.click(reviewerInput)
    await userEvent.type(reviewerInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME))
    await selectEvent.select(reviewerInput, new RegExp('@' + MOCK_USER_NAME))

    await waitFor(() =>
      expect(
        new URLSearchParams(getLocation().search).get('reviewerId'),
      ).toEqual(MOCK_USER_ID.toString()),
    )
    await waitFor(() =>
      expect(searchAccessRequirementsSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          nameContains: '',
          relatedProjectId: undefined,
          reviewerId: MOCK_USER_ID.toString(),
        }),
      ),
    )
  })

  it('Auto-fills the inputs with search parameter values', async () => {
    const searchParams = new URLSearchParams('')
    searchParams.set(AR_NAME_OR_ID_SEARCH_PARAM_KEY, NAME_CONTAINS_PREFIX)
    searchParams.set(RELATED_PROJECT_ID_SEARCH_PARAM_KEY, RELATED_PROJECT_ID)
    searchParams.set(REVIEWER_ID_SEARCH_PARAM_KEY, MOCK_USER_ID.toString())
    searchParams.set(
      AR_TYPE_SEARCH_PARAM_KEY,
      'org.sagebionetworks.repo.model.LockAccessRequirement',
    )
    const initialEntries = ['/', `/?${searchParams.toString()}`]

    renderComponent(undefined, initialEntries)

    await waitFor(
      () =>
        expect(searchAccessRequirementsSpy).toHaveBeenLastCalledWith(
          MOCK_ACCESS_TOKEN,
          expect.objectContaining({
            nameContains: NAME_CONTAINS_PREFIX,
            relatedProjectId: RELATED_PROJECT_ID,
            reviewerId: MOCK_USER_ID.toString(),
            type: 'org.sagebionetworks.repo.model.LockAccessRequirement',
          }),
        ),
      { timeout: 10_000 },
    )
  })
})
