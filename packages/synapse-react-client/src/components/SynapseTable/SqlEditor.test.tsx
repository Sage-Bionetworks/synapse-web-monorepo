import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useQueryContext } from '../QueryContext/QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper/index'
import SqlEditor from './SqlEditor'

jest.mock('../QueryContext/QueryContext', () => ({
  useQueryContext: jest.fn(),
}))

jest.mock('../QueryVisualizationWrapper/QueryVisualizationContext', () => ({
  useQueryVisualizationContext: jest.fn(),
}))

const mockResetErrorBoundary = jest.fn()
const renderComponent = () => {
  return render(<SqlEditor resetErrorBoundary={mockResetErrorBoundary} />, {
    wrapper: createWrapper(),
  })
}

const mockExecuteQueryRequest = jest.fn()
const mockGetLastQueryRequest = jest.fn()
const mockUseQueryContext = jest.mocked(useQueryContext)
const mockUseQueryVisualizationContext = jest.mocked(
  useQueryVisualizationContext,
)

describe('SqlEditor tests', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    mockGetLastQueryRequest.mockReturnValue({
      query: {},
    })
    // @ts-expect-error - only mocking the functions we need
    mockUseQueryContext.mockReturnValue({
      executeQueryRequest: mockExecuteQueryRequest,
      getCurrentQueryRequest: mockGetLastQueryRequest,
    })

    mockUseQueryVisualizationContext
      // @ts-expect-error - only mocking the property we need
      .mockReturnValue({ showSqlEditor: true })
  })

  it('shows the sql editor based on showSqlEditor', () => {
    const component = renderComponent()
    component.container.querySelector('.MuiCollapse-entered')
  })
  it('hides the sql editor based on showSqlEditor', () => {
    // @ts-expect-error - only mocking the property we need
    mockUseQueryVisualizationContext.mockReturnValue({ showSqlEditor: false })
    const component = renderComponent()
    component.container.querySelector('.MuiCollapse-hidden')
  })

  it('edits the sql', async () => {
    renderComponent()
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
