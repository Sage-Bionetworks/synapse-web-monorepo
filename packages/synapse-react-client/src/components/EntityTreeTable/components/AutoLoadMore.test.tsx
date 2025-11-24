import { render, screen } from '@testing-library/react'
import { AutoLoadMore } from './AutoLoadMore'

// Mock react-intersection-observer
vi.mock('react-intersection-observer', () => ({
  useInView: vi.fn(() => ({ ref: vi.fn(), inView: false, entry: undefined })),
}))

// Mock SynapseSpinner
vi.mock('@/components/LoadingScreen/LoadingScreen', () => ({
  SynapseSpinner: vi.fn(() => <div data-testid="synapse-spinner">Spinner</div>),
}))

const mockOnLoadMore = vi.fn()

describe('AutoLoadMore', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const defaultProps = {
    depth: 2,
    isLoading: false,
    onLoadMore: mockOnLoadMore,
  }

  it('should render loading spinner and text', () => {
    render(<AutoLoadMore {...defaultProps} />)

    expect(screen.getByTestId('synapse-spinner')).toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should apply correct indentation based on depth', () => {
    const { container } = render(<AutoLoadMore {...defaultProps} depth={3} />)

    const loadMoreDiv = container.firstChild as HTMLElement
    expect(loadMoreDiv).toHaveStyle({
      paddingLeft: '93px', // depth * 16 + 45 = 3 * 16 + 45 = 93
    })
  })

  it('should apply correct styling for minimum height and layout', () => {
    const { container } = render(<AutoLoadMore {...defaultProps} />)

    const loadMoreDiv = container.firstChild as HTMLElement
    expect(loadMoreDiv).toHaveStyle({
      minHeight: '40px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    })
  })

  it('should handle depth 0 correctly', () => {
    const { container } = render(<AutoLoadMore {...defaultProps} depth={0} />)

    const loadMoreDiv = container.firstChild as HTMLElement
    expect(loadMoreDiv).toHaveStyle({
      paddingLeft: '45px', // 0 * 16 + 45 = 45
    })
  })
})
