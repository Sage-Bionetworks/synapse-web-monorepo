import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import selectEvent from 'react-select-event'
import { DataAccessSubmissionDashboard } from '../../../../src/lib/containers/dataaccess/AccessSubmissionDashboard'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { rest, server } from '../../../../mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
} from '../../../../mocks/user/mock_user_profile'
import {
  mockManagedACTAccessRequirement as mockAccessRequirement,
  mockSearchResults,
} from '../../../../mocks/mockAccessRequirements'
import { getOptionLabel } from '../../../../src/lib/containers/dataaccess/AccessRequirementSearchBox'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../src/lib/utils/functions/getEndpoint'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_SEARCH,
} from '../../../../src/lib/utils/APIConstants'
import * as AccessRequestSubmissionTableModule from '../../../../src/lib/containers/AccessRequestSubmissionTable'

const SUBMISSION_TABLE_TEST_ID = 'AccessSubmissionTableTestId'
const MOCK_AR_ID = '12321'

const mockAccessRequestSubmissionTable = jest
  .spyOn(AccessRequestSubmissionTableModule, 'AccessRequestSubmissionTable')
  .mockImplementation(() => {
    return <div data-testid={SUBMISSION_TABLE_TEST_ID}></div>
  })

const onServiceRecievedRequest = jest.fn()

function renderComponent(modifyHistory?: (history: MemoryHistory) => void) {
  const history = createMemoryHistory()
  if (modifyHistory) {
    modifyHistory(history)
  }
  const renderResult = render(
    <Router history={history}>
      <DataAccessSubmissionDashboard />
    </Router>,
    {
      wrapper: createWrapper(),
    },
  )
  return { ...renderResult, history }
}

describe('AccessSubmissionDashboard tests', () => {
  beforeAll(() => {
    server.listen()

    server.use(
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_SEARCH}`,

        async (req, res, ctx) => {
          onServiceRecievedRequest(req.body)
          return res(ctx.status(200), ctx.json(mockSearchResults))
        },
      ),
      // Return an access requirement specified by ID
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

        async (req, res, ctx) => {
          onServiceRecievedRequest(req.body)
          return res(ctx.status(200), ctx.json(mockAccessRequirement))
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
    expect(mockAccessRequestSubmissionTable).toHaveBeenCalledWith(
      expect.objectContaining({
        accessRequirementId: undefined,
        accessorId: undefined,
        reviewerId: undefined,
      }),
      expect.anything(),
    )
  })

  it.skip('Updates the passed props and URLSearchParams when updating arName', async () => {
    const { history } = renderComponent()
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

    await waitFor(() =>
      expect(
        new URLSearchParams(history.location.search).get('accessRequirementId'),
      ).toEqual(mockAccessRequirement.id.toString()),
    )

    await waitFor(() =>
      expect(mockAccessRequestSubmissionTable).toHaveBeenLastCalledWith(
        expect.objectContaining({
          accessRequirementId: mockAccessRequirement.id.toString(),
          accessorId: undefined,
          reviewerId: undefined,
        }),
        expect.anything(),
      ),
    )
  })

  it.skip('Updates the passed props and URLSearchParams when updating requesterId', async () => {
    const { history } = renderComponent()
    const requesterInput = await screen.findByLabelText('Filter by Requester')
    await userEvent.type(requesterInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME))
    await act(async () => {
      await selectEvent.select(requesterInput, new RegExp('@' + MOCK_USER_NAME))
    })

    await waitFor(() =>
      expect(
        new URLSearchParams(history.location.search).get('accessorId'),
      ).toEqual(MOCK_USER_ID.toString()),
    )
    expect(mockAccessRequestSubmissionTable).toHaveBeenCalledWith(
      expect.objectContaining({
        accessRequirementId: undefined,
        accessorId: MOCK_USER_ID.toString(),
        reviewerId: undefined,
      }),
      expect.anything(),
    )
  })

  //  TODO:  Error in Travis build.  Commenting out to release SRC.
  //  Example: https://app.travis-ci.com/github/Sage-Bionetworks/Synapse-React-Client/builds/258312595
  //  Expected: "999" (MOCK_USER_ID)
  //  Received: null
  it('Updates the passed props and URLSearchParams when updating reviewerId', async () => {
    const { history } = renderComponent()
    const reviewerInput = await screen.findByLabelText('Filter by Reviewer')
    await userEvent.type(reviewerInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME))
    await act(async () => {
      await selectEvent.select(reviewerInput, new RegExp('@' + MOCK_USER_NAME))
    })

    await waitFor(() =>
      expect(
        new URLSearchParams(history.location.search).get('reviewerId'),
      ).toEqual(MOCK_USER_ID.toString()),
    )
    expect(mockAccessRequestSubmissionTable).toHaveBeenCalledWith(
      expect.objectContaining({
        accessRequirementId: undefined,
        accessorId: undefined,
        reviewerId: MOCK_USER_ID.toString(),
      }),
      expect.anything(),
    )
  })

  it('Auto-fills the inputs with search parameter values', async () => {
    renderComponent(history => {
      const searchParams = new URLSearchParams('')
      searchParams.set('accessRequirementId', MOCK_AR_ID.toString())
      searchParams.set('accessorId', MOCK_USER_ID.toString())
      searchParams.set('reviewerId', MOCK_USER_ID.toString())
      history.push('?' + searchParams.toString())
    })

    await waitFor(() =>
      expect(mockAccessRequestSubmissionTable).toHaveBeenLastCalledWith(
        expect.objectContaining({
          accessRequirementId: MOCK_AR_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          reviewerId: MOCK_USER_ID.toString(),
        }),
        expect.anything(),
      ),
    )
  })
})
