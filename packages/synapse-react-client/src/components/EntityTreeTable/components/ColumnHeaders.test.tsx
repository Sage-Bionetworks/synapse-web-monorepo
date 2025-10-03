import { render } from '@testing-library/react'
import {
  NameColumnHeader,
  CreatedOnColumnHeader,
  ModifiedOnColumnHeader,
} from './ColumnHeaders'
import ColumnHeader from '../../TanStackTable/ColumnHeader'

// Mock ColumnHeader component
vi.mock('../../TanStackTable/ColumnHeader', () => ({
  default: vi.fn(({ title, ...props }) => (
    <div data-testid="column-header" data-title={title}>
      {title}
    </div>
  )),
}))

const MockColumnHeader = vi.mocked(ColumnHeader)

const mockHeaderContext = {
  table: {} as any,
  header: {} as any,
  column: {} as any,
}

describe('ColumnHeaders', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  it('should render NameColumnHeader with correct title', () => {
    render(<NameColumnHeader {...mockHeaderContext} />)

    expect(MockColumnHeader).toHaveBeenRenderedWithProps(
      expect.objectContaining({ title: 'Name' }),
      { testId: 'column-header' },
    )
  })

  it('should render CreatedOnColumnHeader with correct title', () => {
    render(<CreatedOnColumnHeader {...mockHeaderContext} />)

    expect(MockColumnHeader).toHaveBeenRenderedWithProps(
      expect.objectContaining({ title: 'Created On' }),
      { testId: 'column-header' },
    )
  })

  it('should render ModifiedOnColumnHeader with correct title', () => {
    render(<ModifiedOnColumnHeader {...mockHeaderContext} />)

    expect(MockColumnHeader).toHaveBeenRenderedWithProps(
      expect.objectContaining({ title: 'Modified On' }),
      { testId: 'column-header' },
    )
  })

  it('should pass through all props to ColumnHeader', () => {
    const extendedContext = {
      ...mockHeaderContext,
      extraProp: 'test-value',
    }

    render(<NameColumnHeader {...extendedContext} />)

    expect(MockColumnHeader).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        title: 'Name',
        extraProp: 'test-value',
      }),
      { testId: 'column-header' },
    )
  })
})
