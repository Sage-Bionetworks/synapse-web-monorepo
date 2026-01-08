import { createWrapper } from '@/testutils/TestingLibraryUtils'
import TemporaryBanner, { TemporaryBannerProps } from './TemporaryBanner'
import { render, screen } from '@testing-library/react'

describe('TemporaryBanner', () => {
  function renderComponent(props: TemporaryBannerProps) {
    render(<TemporaryBanner {...props} />, {
      wrapper: createWrapper(),
    })
  }

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders when before the deadline', () => {
    vi.setSystemTime(new Date('2024-06-01T12:00:00Z'))

    renderComponent({
      deadline: '2024-06-30',
    })

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('does not render when after the deadline', () => {
    vi.setSystemTime(new Date('2024-07-01T00:00:00Z'))
    renderComponent({
      deadline: '2024-06-30T23:59:59.999Z',
    })

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('treats YYYY-MM-DD deadlines as end-of-day local time', () => {
    vi.setSystemTime(new Date('2024-06-30T10:00:00'))

    renderComponent({
      deadline: '2024-06-30',
    })

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('returns null for invalid deadline', () => {
    renderComponent({
      deadline: 'not-a-date',
    })

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('renders custom content when provided', () => {
    vi.setSystemTime(new Date('2024-06-01T12:00:00Z'))

    renderComponent({
      deadline: '2024-06-30',
      content: <div data-testid="custom">Hello!</div>,
    })

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByTestId('custom')).toBeInTheDocument()
  })

  it('does not render custom content after the deadline', () => {
    vi.setSystemTime(new Date('2024-07-01T00:00:00Z'))

    renderComponent({
      deadline: '2024-06-29',
      content: <div data-testid="custom">Hello!</div>,
    })

    expect(screen.queryByTestId('custom')).not.toBeInTheDocument()
  })
})
