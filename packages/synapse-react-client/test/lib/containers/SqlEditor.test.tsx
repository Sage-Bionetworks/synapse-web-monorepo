import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../src/lib/containers/QueryVisualizationWrapper'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../src/lib/containers/QueryContext'
import SqlEditor from '../../../src/lib/containers/SqlEditor'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

const renderComponent = (
  queryContext: Partial<QueryContextType>,
  queryVisualizationContext: Partial<QueryVisualizationContextType>,
) => {
  return render(
    <QueryContextProvider queryContext={queryContext}>
      <QueryVisualizationContextProvider
        queryVisualizationContext={queryVisualizationContext}
      >
        <SqlEditor />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

const mockExecuteQueryRequest = jest.fn()
const mockGetLastQueryRequest = jest.fn()

const defaultQueryContext: Partial<QueryContextType> = {
  executeQueryRequest: mockExecuteQueryRequest,
  getLastQueryRequest: mockGetLastQueryRequest,
}
const defaultQueryVisualizationContext: Partial<QueryVisualizationContextType> =
  {
    topLevelControlsState: {
      showSqlEditor: true,
      showFacetFilter: true,
    },
  }

describe('SqlEditor tests', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    mockGetLastQueryRequest.mockReturnValue({
      query: {},
    })
  })

  it('shows/hides the sql editor based on prop', () => {
    const component = renderComponent(
      defaultQueryContext,
      defaultQueryVisualizationContext,
    )
    component.container.querySelector('.MuiCollapse-entered')
    renderComponent(defaultQueryContext, {
      ...defaultQueryVisualizationContext,
      topLevelControlsState: {
        showSqlEditor: false, // call under test
        showFacetFilter: true,
      },
    })
    component.container.querySelector('.MuiCollapse-hidden')
  })

  it('edits the sql', async () => {
    renderComponent(defaultQueryContext, defaultQueryVisualizationContext)
    const box = screen.getByRole('textbox')
    const newSql = 'select study from syn456'
    await userEvent.type(box, newSql + '{enter}')
    expect(mockExecuteQueryRequest).toBeCalledWith(
      expect.objectContaining({
        query: expect.objectContaining({
          sql: newSql,
        }),
      }),
    )
  })
})
