import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useQueryContext } from '../QueryContext/QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper/index'
import SqlEditor from './SqlEditor'

vi.mock('../QueryContext/QueryContext', () => ({
  useQueryContext: vi.fn(),
}))

vi.mock('../QueryVisualizationWrapper/QueryVisualizationContext', () => ({
  useQueryVisualizationContext: vi.fn(),
}))

const mockResetErrorBoundary = vi.fn()
const renderComponent = () => {
  return render(<SqlEditor resetErrorBoundary={mockResetErrorBoundary} />, {
    wrapper: createWrapper(),
  })
}

const mockExecuteQueryRequest = vi.fn()
const mockGetLastQueryRequest = vi.fn()
const mockUseQueryContext = vi.mocked(useQueryContext)
const mockUseQueryVisualizationContext = vi.mocked(useQueryVisualizationContext)

describe('SqlEditor tests', () => {
  beforeEach(() => {
    vi.resetAllMocks()
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
    const queryTransformFn = mockExecuteQueryRequest.mock.lastCall![0]
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
