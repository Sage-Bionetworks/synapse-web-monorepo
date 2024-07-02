import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import React from 'react'
import { QueryClient } from '@tanstack/react-query'
import {
  AccessRequirementTable,
  AccessRequirementTableProps,
} from './AccessRequirementTable'
import { createWrapperAndQueryClient } from '../../testutils/TestingLibraryUtils'
import { formatDate } from '../../utils/functions/DateFormatter'
import {
  ACCESS_TYPE,
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
} from '@sage-bionetworks/synapse-types'
import mockProjectData from '../../mocks/entity/mockProject'
import {
  mockACTAccessRequirement,
  mockLockAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSearchResultsPageOne,
  mockSearchResultsPageTwo,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '../../mocks/accessRequirement/mockAccessRequirements'
import { server } from '../../mocks/msw/server'
import { MOCK_USER_NAME } from '../../mocks/user/mock_user_profile'
import { accessRequirementConcreteTypeValueToDisplayValue } from './UseAccessRequirementTable'
import SynapseClient from '../../synapse-client'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'

const MOCK_PROJECT_NAME = mockProjectData.name

const mockOnCreateNewAR = jest.fn()
let queryClient: QueryClient
const searchAccessRequirementsSpy = jest.spyOn(
  SynapseClient,
  'searchAccessRequirements',
)

function renderComponent(props: AccessRequirementTableProps) {
  const { wrapperFn, queryClient: wrapperQueryClient } =
    createWrapperAndQueryClient()
  queryClient = wrapperQueryClient
  render(
    <AccessRequirementTable
      {...props}
      onCreateNewAccessRequirementClicked={mockOnCreateNewAR}
    />,
    {
      wrapper: wrapperFn,
    },
  )
}

describe('Access Requirement Table tests', () => {
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })

  afterAll(() => server.close())

  it('Passes along props to the search request', async () => {
    const nameOrID = 'a 1234567'
    const relatedProject = 'syn123'
    const reviewerId = '123'
    const accessType = ACCESS_TYPE.REVIEW_SUBMISSIONS

    const props = {
      nameOrID: nameOrID,
      relatedProjectId: relatedProject,
      reviewerId: reviewerId,
      accessType: accessType,
    }

    const defaultSort = [{ field: 'CREATED_ON', direction: 'DESC' }]

    renderComponent(props)

    const resultTable = await screen.findByRole('table')
    await waitFor(() => {
      const tableRows = within(resultTable).getAllByRole('row')
      expect(tableRows).toHaveLength(
        1 + mockSearchResultsPageOne.results.length, // +1 for the header row
      )
    })

    expect(searchAccessRequirementsSpy).toHaveBeenCalledWith(
      MOCK_ACCESS_TOKEN,
      expect.objectContaining({
        nameContains: nameOrID,
        relatedProjectId: relatedProject,
        reviewerId,
        accessType,
        sort: defaultSort,
      }),
    )
  })

  it('Test recognition of an AR ID', async () => {
    const accessRequirementID = 1234567
    const nameOrID = ` ${accessRequirementID}`
    const relatedProject = 'syn123'
    const reviewerId = '123'
    const accessType = ACCESS_TYPE.REVIEW_SUBMISSIONS

    const props = {
      nameOrID: nameOrID,
      relatedProjectId: relatedProject,
      reviewerId: reviewerId,
      accessType: accessType,
    }

    const defaultSort = [{ field: 'CREATED_ON', direction: 'DESC' }]

    renderComponent(props)

    await waitFor(() =>
      expect(searchAccessRequirementsSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          ids: [accessRequirementID],
          relatedProjectId: relatedProject,
          reviewerId,
          accessType,
          sort: defaultSort,
        }),
      ),
    )
  })

  it('Renders all headers and a row of data', async () => {
    renderComponent({})
    await screen.findByRole('table')
    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSearchResultsPageOne.results.length + 1, // +1 for the header row
      ),
    )

    // Check each column header -- the sortable columns use a regex because the sort button label appears in the name
    screen.getByRole('columnheader', { name: 'AR ID' })
    screen.getByRole('columnheader', {
      name: /^Access Requirement Name/,
    })
    screen.getByRole('columnheader', { name: 'Type' })
    screen.getByRole('columnheader', { name: 'Related to Projects' })
    screen.getByRole('columnheader', { name: 'Reviewer' })
    screen.getByRole('columnheader', { name: 'Last Modified' })
    screen.getByRole('columnheader', { name: /^Created On/ })

    // check the first row of data
    const row = screen.getAllByRole('row')[1]
    within(row).getByRole('cell', {
      name: mockSearchResultsPageOne.results[0].id,
    })
    within(row).getByRole('cell', {
      name: mockSearchResultsPageOne.results[0].name,
    })
    within(row).getByRole('cell', {
      name: accessRequirementConcreteTypeValueToDisplayValue(
        mockSearchResultsPageOne.results[0].type,
      ),
    })
    // The related project and reviewer ID both get rendered
    await within(row).findByText(MOCK_PROJECT_NAME)
    await within(row).findByText('@' + MOCK_USER_NAME)
    within(row).getByRole('cell', {
      name: formatDate(dayjs(mockSearchResultsPageOne.results[0].modifiedOn)),
    })
    within(row).getByRole('cell', {
      name: formatDate(dayjs(mockSearchResultsPageOne.results[0].createdOn)),
    })
  })

  it('Shows button to create an access requirement', async () => {
    renderComponent({})

    const button = await screen.findByRole('button', {
      name: 'New Access Requirement',
    })

    await userEvent.click(button)

    expect(mockOnCreateNewAR).toHaveBeenCalled()
  })

  it('Handles pagination', async () => {
    renderComponent({})
    await screen.findByRole('table')
    await waitFor(() =>
      expect(screen.getAllByRole('row')).toHaveLength(
        mockSearchResultsPageOne.results.length + 1, // +1 for the header row
      ),
    )

    // There is more than one page, so a button should be shown
    const showMoreButton = await screen.findByRole('button', {
      name: 'Show More',
    })

    // Clicking the button should make a request for the next page
    await userEvent.click(showMoreButton)
    await waitFor(() =>
      expect(searchAccessRequirementsSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          nextPageToken: mockSearchResultsPageOne.nextPageToken,
        }),
      ),
    )

    // First and second pages of data should be shown
    const resultTable = await screen.findByRole('table')
    await waitFor(() => {
      const tableRows = within(resultTable).getAllByRole('row')
      expect(tableRows).toHaveLength(
        1 + // +1 for the header row
          mockSearchResultsPageOne.results.length +
          mockSearchResultsPageTwo.results.length,
      )
    })

    // No third page, so the next button should be gone
    expect(
      screen.queryByRole('button', {
        name: 'Show More',
      }),
    ).not.toBeInTheDocument()
  })

  it('Handles sorting', async () => {
    renderComponent({})

    // By default, should sort by created on, descending
    const defaultSort = [{ field: 'CREATED_ON', direction: 'DESC' }]
    await waitFor(() =>
      expect(searchAccessRequirementsSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          sort: defaultSort,
        }),
      ),
    )

    // clicking the current sort should reverse the direction
    const createdOnSortButton = screen.getByRole('button', {
      name: 'Sort by Created On',
    })
    await userEvent.click(createdOnSortButton)

    // desc -> asc
    await waitFor(() =>
      expect(searchAccessRequirementsSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          sort: [{ field: 'CREATED_ON', direction: 'ASC' }],
        }),
      ),
    )

    // asc -> desc
    // Clear the query client to verify the requested data changes (otherwise we get a cache hit)
    queryClient.clear()
    await userEvent.click(createdOnSortButton)
    await waitFor(() =>
      expect(searchAccessRequirementsSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          sort: [{ field: 'CREATED_ON', direction: 'DESC' }],
        }),
      ),
    )

    // clicking a different column (name) should sort by that column, ascending
    const nameSortButton = screen.getByLabelText(
      'Sort by Access Requirement Name',
    )
    await userEvent.click(nameSortButton)
    await waitFor(() =>
      expect(searchAccessRequirementsSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          sort: [{ field: 'NAME', direction: 'ASC' }],
        }),
      ),
    )
  })

  it('correctly maps AR concrete type to display type', () => {
    expect(
      accessRequirementConcreteTypeValueToDisplayValue(
        mockManagedACTAccessRequirement.concreteType,
      ),
    ).toEqual(MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE)
    expect(
      accessRequirementConcreteTypeValueToDisplayValue(
        mockACTAccessRequirement.concreteType,
      ),
    ).toEqual(ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE)
    expect(
      accessRequirementConcreteTypeValueToDisplayValue(
        mockLockAccessRequirement.concreteType,
      ),
    ).toEqual(LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE)
    expect(
      accessRequirementConcreteTypeValueToDisplayValue(
        mockToUAccessRequirement.concreteType,
      ),
    ).toEqual(TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE)
    expect(
      accessRequirementConcreteTypeValueToDisplayValue(
        mockSelfSignAccessRequirement.concreteType,
      ),
    ).toEqual(SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE)
  })
})
