import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../src/components/QueryVisualizationWrapper'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../src/components/QueryContext/QueryContext'
import SqlEditor from '../../src/components/SynapseTable/SqlEditor'
import { createWrapper } from '../../src/testutils/TestingLibraryUtils'

const mockResetErrorBoundary = jest.fn()
const renderComponent = (
  queryContext: Partial<QueryContextType>,
  queryVisualizationContext: Partial<QueryVisualizationContextType>,
) => {
  return render(
    <QueryContextProvider queryContext={queryContext}>
      <QueryVisualizationContextProvider
        queryVisualizationContext={queryVisualizationContext}
      >
        <SqlEditor resetErrorBoundary={mockResetErrorBoundary} />
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
  getCurrentQueryRequest: mockGetLastQueryRequest,
}
const defaultQueryVisualizationContext: Partial<QueryVisualizationContextType> =
  {
    showSqlEditor: true,
    showFacetFilter: true,
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
      showSqlEditor: false, // call under test
      showFacetFilter: true,
    })
    component.container.querySelector('.MuiCollapse-hidden')
  })

  it('edits the sql', async () => {
    renderComponent(defaultQueryContext, defaultQueryVisualizationContext)
    const box = screen.getByRole('textbox')
    const newSql = 'select study from syn456'
    await userEvent.type(box, newSql + '{enter}')

    expect(mockExecuteQueryRequest).toHaveBeenCalled()
    const queryTransformFn = mockExecuteQueryRequest.mock.lastCall[0]
    expect(typeof queryTransformFn).toBe('function')
    expect(mockResetErrorBoundary).toHaveBeenCalled()
    expect(
      queryTransformFn({
        query: {},
      }),
    ).toEqual(
      expect.objectContaining({
        query: expect.objectContaining({
          sql: newSql,
        }),
      }),
    )
  })
})
