import { BlockingLoader, BlockingLoaderProps } from './LoadingScreen'
import { render, screen } from '@testing-library/react'

const mockCallback = jest.fn()

const defaultProps: BlockingLoaderProps = {
  show: true,
  onCancel: undefined,
  currentProgress: undefined,
  totalProgress: undefined,
}

describe('basic functionality', () => {
  it('shows cancel button when loading can be cancelled', () => {
    render(<BlockingLoader {...defaultProps} onCancel={mockCallback} />)
    expect(screen.getByRole('button')).toHaveTextContent('Cancel')
  })

  it('should not show cancel button when loading cannot be cancelled', () => {
    render(<BlockingLoader {...defaultProps} />)
    const cancelButton = screen.queryByText('Cancel')
    expect(cancelButton).toBeNull()
  })

  it('should show a progess bar loader if total number of entities are known', () => {
    render(
      <BlockingLoader
        {...defaultProps}
        onCancel={mockCallback}
        totalProgress={3}
      />,
    )
    expect(screen.getByTestId('progress-bar')).toBeDefined()
  })

  it('should show the passed hintText loading when known', () => {
    render(<BlockingLoader {...defaultProps} hintText={'Fetching 4'} />)
    expect(screen.getByTestId('spinner-hint-text')).toHaveTextContent(
      'Fetching 4',
    )
  })
})
