import { render, screen } from '@testing-library/react'
import { SessionInitializedGuard } from './SessionInitializedGuard'
import { useApplicationSessionContext } from './ApplicationSessionContext'
import { vi } from 'vitest'

vi.mock('./ApplicationSessionContext', () => ({
  useApplicationSessionContext: vi.fn(),
}))

const mockUseApplicationSessionContext = vi.mocked(useApplicationSessionContext)

describe('SessionInitializedGuard', () => {
  it('shows loading screen when session is not initialized', () => {
    mockUseApplicationSessionContext.mockReturnValue({
      hasInitializedSession: false,
    } as any)

    render(
      <SessionInitializedGuard>
        <div>Test Content</div>
      </SessionInitializedGuard>,
    )

    expect(screen.queryByText('Test Content')).not.toBeInTheDocument()
    // The BlockingLoader should be shown
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toBeInTheDocument()
  })

  it('shows loading screen with custom hint text when session is not initialized', () => {
    mockUseApplicationSessionContext.mockReturnValue({
      hasInitializedSession: false,
    } as any)

    render(
      <SessionInitializedGuard hintText="Custom loading message">
        <div>Test Content</div>
      </SessionInitializedGuard>,
    )

    expect(screen.queryByText('Test Content')).not.toBeInTheDocument()
    expect(screen.getByText('Custom loading message')).toBeInTheDocument()
  })

  it('renders children when session is initialized', () => {
    mockUseApplicationSessionContext.mockReturnValue({
      hasInitializedSession: true,
    } as any)

    render(
      <SessionInitializedGuard>
        <div>Test Content</div>
      </SessionInitializedGuard>,
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders children when session is initialized (with hint text prop)', () => {
    mockUseApplicationSessionContext.mockReturnValue({
      hasInitializedSession: true,
    } as any)

    render(
      <SessionInitializedGuard hintText="This should not be visible">
        <div>Test Content</div>
      </SessionInitializedGuard>,
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
    expect(
      screen.queryByText('This should not be visible'),
    ).not.toBeInTheDocument()
  })
})
