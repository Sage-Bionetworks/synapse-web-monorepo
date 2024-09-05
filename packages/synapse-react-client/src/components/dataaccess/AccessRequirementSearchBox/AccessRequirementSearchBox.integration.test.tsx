import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import selectEvent from 'react-select-event'
import AccessRequirementSearchBox, {
  getOptionLabel,
} from './AccessRequirementSearchBox'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_SEARCH,
} from '../../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import {
  mockManagedACTAccessRequirement as mockAccessRequirement,
  mockSearchResultsPageOne as mockSearchResults,
} from '../../../mocks/accessRequirement/mockAccessRequirements'
import { rest, server } from '../../../mocks/msw/server'

const mockOnChange = jest.fn()
const onServiceRecievedRequest = jest.fn()

function renderComponent(initialId?: string | number) {
  render(
    <AccessRequirementSearchBox
      initialId={initialId}
      onChange={mockOnChange}
    />,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('Access Requirement Search Box tests', () => {
  beforeAll(() => {
    server.listen()

    // Configure MSW
    server.use(
      // Return mocked access requirement search results
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
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  describe('Test getOptionLabel', () => {
    it('Shows name and ID', () => {
      expect(getOptionLabel(123, 'abc')).toBe('abc (123)')
    })

    it("Doesn't show ID if name is equal to ID", () => {
      expect(getOptionLabel(123, '123')).toBe('123')
    })
  })

  it('Queries the service with the initial blank query', async () => {
    renderComponent()

    const input = screen.getByRole('combobox')

    await userEvent.click(input)

    // Should have sent a request with a blank input to populate the options
    await waitFor(() =>
      expect(onServiceRecievedRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          nameContains: '',
        }),
      ),
    )
  })

  it('Sends a new query upon typing an input string', async () => {
    renderComponent()

    const input = screen.getByRole('combobox')
    const inputQuery = 'test query'
    await userEvent.type(input, inputQuery)

    // Should have sent a new request with the input string
    await waitFor(() =>
      expect(onServiceRecievedRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          nameContains: inputQuery,
        }),
      ),
    )
  })

  it('Calls the passed prop upon making a selection', async () => {
    renderComponent()

    const input = screen.getByRole('combobox')

    await userEvent.click(input)

    // We haven't made a selection yet, so verify that we never called the passed prop
    expect(mockOnChange).not.toHaveBeenCalled()

    // Select the first access requirement (the label is $NAME ($ID))
    await selectEvent.select(
      input,
      getOptionLabel(mockAccessRequirement.id, mockAccessRequirement.name),
    )
    // The prop should have fired upon selecting this option
    await waitFor(() =>
      expect(mockOnChange).toHaveBeenCalledWith(
        mockSearchResults.results[0].id,
      ),
    )
  })

  it('Renders an initial AR specified by ID', async () => {
    renderComponent(mockAccessRequirement.id)

    const input = await screen.findByRole<HTMLInputElement>('combobox')

    await waitFor(() =>
      expect(input.value).toContain(mockAccessRequirement.name),
    )
  })

  it('Supports pasting/typing an AR ID', async () => {
    renderComponent()

    const input = await screen.findByRole<HTMLInputElement>('combobox')

    await userEvent.type(input, mockAccessRequirement.id.toString())
    await screen.findByText(
      getOptionLabel(mockAccessRequirement.id, mockAccessRequirement.name),
    )
    // If the AR specified by ID is fetched, then it should be selectable
    await selectEvent.select(
      input,
      getOptionLabel(mockAccessRequirement.id, mockAccessRequirement.name),
    )

    // The prop should have fired upon selecting this option
    await waitFor(() =>
      expect(mockOnChange).toHaveBeenCalledWith(
        mockAccessRequirement.id.toString(),
      ),
    )
  })
})
