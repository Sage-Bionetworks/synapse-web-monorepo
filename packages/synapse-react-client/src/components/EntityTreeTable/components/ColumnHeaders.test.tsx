import { render, screen } from '@testing-library/react'
import {
  NameColumnHeader,
  CreatedOnColumnHeader,
  ModifiedOnColumnHeader,
} from './ColumnHeaders'

// Mock ColumnHeader component
vi.mock('../../TanStackTable/ColumnHeader', () => ({
  default: vi.fn(({ title, ...props }) => (
    <div data-testid="column-header" data-title={title}>
      {title}
    </div>
  )),
}))

const mockHeaderContext = {
  table: {} as any,
  header: {} as any,
  column: {} as any,
}

describe('ColumnHeaders', () => {
  it('should render NameColumnHeader with correct title', () => {
    render(<NameColumnHeader {...mockHeaderContext} />)

    const header = screen.getByTestId('column-header')
    expect(header).toHaveAttribute('data-title', 'Name')
    expect(screen.getByText('Name')).toBeInTheDocument()
  })

  it('should render CreatedOnColumnHeader with correct title', () => {
    render(<CreatedOnColumnHeader {...mockHeaderContext} />)

    const header = screen.getByTestId('column-header')
    expect(header).toHaveAttribute('data-title', 'Created On')
    expect(screen.getByText('Created On')).toBeInTheDocument()
  })

  it('should render ModifiedOnColumnHeader with correct title', () => {
    render(<ModifiedOnColumnHeader {...mockHeaderContext} />)

    const header = screen.getByTestId('column-header')
    expect(header).toHaveAttribute('data-title', 'Modified On')
    expect(screen.getByText('Modified On')).toBeInTheDocument()
  })

  it('should pass through all props to ColumnHeader', () => {
    const extendedContext = {
      ...mockHeaderContext,
      extraProp: 'test-value',
    }

    render(<NameColumnHeader {...extendedContext} />)

    expect(screen.getByTestId('column-header')).toBeInTheDocument()
  })
})
