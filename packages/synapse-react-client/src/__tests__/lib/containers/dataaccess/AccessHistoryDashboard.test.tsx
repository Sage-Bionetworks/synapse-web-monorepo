import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import { UserHistoryDashboard } from '../../../../lib/containers/dataaccess/AccessHistoryDashboard'
import { createMemoryHistory, MemoryHistory } from 'history'
import { createWrapper } from '../../../../lib/testutils/TestingLibraryUtils'
import { Router } from 'react-router-dom'
import { rest, server } from '../../../../mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../lib/utils/functions/getEndpoint'
import {
  ACCESS_REQUIREMENT_SEARCH,
  ACCESS_REQUIREMENT_BY_ID,
} from '../../../../lib/utils/APIConstants'
import {
  mockManagedACTAccessRequirement as mockAccessRequirement,
  mockSearchResults,
} from '../../../../mocks/mockAccessRequirements'
import userEvent from '@testing-library/user-event'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
} from '../../../../mocks/user/mock_user_profile'
import selectEvent from 'react-select-event'
import { getOptionLabel } from '../../../../lib/containers/dataaccess/AccessRequirementSearchBox'

const APPROVAL_TABLE_TEST_ID = 'AccessApprovalTableTestId'
const SUBMISSION_TABLE_TEST_ID = 'AccessSubmissionTableTestId'

jest.mock('../../../../lib/containers/AccessApprovalsTable', () => ({
  AccessApprovalsTable: jest.fn().mockImplementation(() => {
    return <div data-testid={APPROVAL_TABLE_TEST_ID}></div>
  }),
}))

jest.mock('../../../../lib/containers/AccessRequestSubmissionTable', () => ({
  AccessRequestSubmissionTable: jest.fn().mockImplementation(() => {
    return <div data-testid={SUBMISSION_TABLE_TEST_ID}></div>
  }),
}))

const {
  AccessRequestSubmissionTable: mockAccessRequestSubmissionTable,
} = require('../../../../lib/containers/AccessRequestSubmissionTable')

const {
  AccessApprovalsTable: mockAccessApprovalsTable,
} = require('../../../../lib/containers/AccessApprovalsTable')

const onServiceRecievedRequest = jest.fn()

function renderComponent(modifyHistory?: (history: MemoryHistory) => void) {
  const history = createMemoryHistory()
  if (modifyHistory) {
    modifyHistory(history)
  }
  const renderResult = render(
    <Router history={history}>
      <UserHistoryDashboard />
    </Router>,
    {
      wrapper: createWrapper(),
    },
  )
  return { ...renderResult, history }
}

describe('AccessHistoryDashboard tests', () => {
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

  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders only the user/team name input when there is no input', async () => {
    renderComponent()

    expect(await screen.findAllByRole('combobox')).toHaveLength(1)
  })

  it('Renders table components and filter input for AR Name', async () => {
    renderComponent()

    const userInput = await screen.findByRole('combobox')
    await userEvent.type(userInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME))
    await act(async () => {
      await selectEvent.select(userInput, new RegExp('@' + MOCK_USER_NAME))
    })

    await screen.findByLabelText('Select a user to view their access history')
    await screen.findByLabelText('Filter by Access Requirement Name')

    await screen.findByTestId(SUBMISSION_TABLE_TEST_ID)
    expect(mockAccessRequestSubmissionTable).toHaveBeenCalledWith(
      expect.objectContaining({
        accessRequirementId: undefined,
        accessorId: '',
        showStatus: true,
        showSubmitter: true,
      }),
      expect.anything(),
    )

    await screen.findAllByTestId(APPROVAL_TABLE_TEST_ID)
    expect(mockAccessApprovalsTable).toHaveBeenCalledWith(
      expect.objectContaining({
        accessRequirementId: undefined,
        accessorId: '',
      }),
      expect.anything(),
    )
  })

  it('Updates the passed props and URLSearchParams when updating user/team name', async () => {
    const { history } = renderComponent()

    const userInput = await screen.findByRole('combobox')
    await userEvent.type(userInput, MOCK_USER_NAME.substring(0, 1))
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME))
    await act(async () => {
      await selectEvent.select(userInput, new RegExp('@' + MOCK_USER_NAME))
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
        showStatus: true,
        showSubmitter: true,
      }),
      expect.anything(),
    )

    expect(mockAccessApprovalsTable).toHaveBeenCalledWith(
      expect.objectContaining({
        accessRequirementId: undefined,
        accessorId: MOCK_USER_ID.toString(),
      }),
      expect.anything(),
    )
  })

  it('Filters the passed props and URLSearchParams when updating the AR Name', async () => {
    const { history } = renderComponent()
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

    await waitFor(() =>
      expect(
        new URLSearchParams(history.location.search).get('accessRequirementId'),
      ).toEqual(mockAccessRequirement.id.toString()),
    )

    expect(mockAccessRequestSubmissionTable).toHaveBeenLastCalledWith(
      expect.objectContaining({
        accessRequirementId: mockAccessRequirement.id.toString(),
        accessorId: MOCK_USER_ID.toString(),
        showStatus: true,
        showSubmitter: true,
      }),
      expect.anything(),
    )

    expect(mockAccessApprovalsTable).toHaveBeenCalledWith(
      expect.objectContaining({
        accessRequirementId: mockAccessRequirement.id.toString(),
        accessorId: MOCK_USER_ID.toString(),
      }),
      expect.anything(),
    )
  })

  it('Auto-fills the inputs with search parameter values', async () => {
    renderComponent(history => {
      const searchParams = new URLSearchParams('')
      searchParams.set(
        'accessRequirementId',
        mockAccessRequirement.id.toString(),
      )
      searchParams.set('accessorId', MOCK_USER_ID.toString())
      history.push('?' + searchParams.toString())
    })

    await waitFor(() =>
      expect(mockAccessRequestSubmissionTable).toHaveBeenCalledWith(
        expect.objectContaining({
          accessRequirementId: mockAccessRequirement.id.toString(),
          accessorId: MOCK_USER_ID.toString(),
          showStatus: true,
          showSubmitter: true,
        }),
        expect.anything(),
      ),
    )

    await waitFor(() =>
      expect(mockAccessApprovalsTable).toHaveBeenCalledWith(
        expect.objectContaining({
          accessRequirementId: mockAccessRequirement.id.toString(),
          accessorId: MOCK_USER_ID.toString(),
        }),
        expect.anything(),
      ),
    )
  })
})
