import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { FullTextSearch } from '../../src/components/FullTextSearch'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../src/components/QueryVisualizationWrapper'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../src/components/QueryContext/QueryContext'
import { createWrapper } from '../../src/testutils/TestingLibraryUtils'
import {
  ColumnModel,
  ColumnSingleValueFilterOperator,
  ColumnTypeEnum,
} from '@sage-bionetworks/synapse-types'

const renderComponent = (
  queryContext: Partial<QueryContextType>,
  queryVisualizationContext: Partial<QueryVisualizationContextType>,
) => {
  return render(
    <QueryContextProvider queryContext={queryContext}>
      <QueryVisualizationContextProvider
        queryVisualizationContext={queryVisualizationContext}
      >
        <FullTextSearch />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

const mockExecuteQueryRequest = jest.fn()
const mockGetLastQueryRequest = jest.fn()
const mockGetColumnModel = jest.fn()

const queryContext: Partial<QueryContextType> = {
  executeQueryRequest: mockExecuteQueryRequest,
  getCurrentQueryRequest: mockGetLastQueryRequest,
  getColumnModel: mockGetColumnModel,
}

const queryVisualizationContext: Partial<QueryVisualizationContextType> = {
  showSearchBar: true,
  showFacetFilter: true,
}

describe('FullTextSearch tests', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    mockGetLastQueryRequest.mockReturnValue({
      query: {},
    })
  })

  it('shows/hides the search bar based on prop', () => {
    const component = renderComponent(queryContext, queryVisualizationContext)

    component.container.querySelector('.MuiCollapse-entered')

    renderComponent(queryContext, {
      showSearchBar: false, // call under test
      showFacetFilter: true,
    })

    component.container.querySelector('.MuiCollapse-hidden')
  })

  it('adds the appropriate QueryFilter when searching', async () => {
    renderComponent(queryContext, queryVisualizationContext)

    const searchBox = screen.getByRole('textbox')

    const searchQuery = 'NF1'
    await userEvent.type(searchBox, searchQuery + '{enter}')

    expect(mockExecuteQueryRequest).toHaveBeenCalled()
    const queryTransformFn = mockExecuteQueryRequest.mock.lastCall[0]
    expect(typeof queryTransformFn).toBe('function')
    expect(queryTransformFn({ query: {} })).toEqual(
      expect.objectContaining({
        query: expect.objectContaining({
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
              searchExpression: searchQuery,
            },
          ],
        }),
      }),
    )
  })

  it('adds the appropriate QueryFilter when searching for Synapse ID', async () => {
    const idColModel: ColumnModel = {
      name: 'id',
      columnType: ColumnTypeEnum.ENTITYID,
      id: '1',
    }
    mockGetColumnModel.mockReturnValue(idColModel)
    renderComponent(queryContext, queryVisualizationContext)

    const searchBox = screen.getByRole('textbox')

    const searchQuery = 'syn123'
    await userEvent.type(searchBox, searchQuery + '{enter}')

    expect(mockExecuteQueryRequest).toHaveBeenCalled()
    const queryTransformFn = mockExecuteQueryRequest.mock.lastCall[0]
    expect(typeof queryTransformFn).toBe('function')
    expect(queryTransformFn({ query: {} })).toEqual(
      expect.objectContaining({
        query: expect.objectContaining({
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
              columnName: 'id',
              operator: ColumnSingleValueFilterOperator.IN,
              values: [searchQuery],
            },
          ],
        }),
      }),
    )
  })

  it('enforces a minimum character requirement', async () => {
    renderComponent(queryContext, queryVisualizationContext)

    const searchBox = screen.getByRole('textbox')

    const searchQuery = 'NF'
    await userEvent.type(searchBox, searchQuery + '{enter}')

    expect(mockExecuteQueryRequest).not.toBeCalled()
  })
})
