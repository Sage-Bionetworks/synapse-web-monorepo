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

const queryContext: Partial<QueryContextType> = {
  executeQueryRequest: mockExecuteQueryRequest,
  getCurrentQueryRequest: mockGetLastQueryRequest,
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

  it('enforces a minimum character requirement', async () => {
    renderComponent(queryContext, queryVisualizationContext)

    const searchBox = screen.getByRole('textbox')

    const searchQuery = 'NF'
    await userEvent.type(searchBox, searchQuery + '{enter}')

    expect(mockExecuteQueryRequest).not.toBeCalled()
  })
})
