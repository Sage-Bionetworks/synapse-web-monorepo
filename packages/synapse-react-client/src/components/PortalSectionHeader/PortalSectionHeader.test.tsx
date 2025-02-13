import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router'
import PortalSectionHeader, {
  PortalSectionHeaderProps,
} from './PortalSectionHeader'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

describe('PortalSectionHeader tests', () => {
  const mockProps: PortalSectionHeaderProps = {
    title: 'Some Title',
    buttonText: 'Some button text',
    summaryText: 'Some summary text',
    link: '/some-link',
  }

  const renderWithRouter = (mockProps: PortalSectionHeaderProps) => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <PortalSectionHeader {...mockProps} />,
      },
    ])
    return render(<RouterProvider router={router} />, {
      wrapper: createWrapper(),
    })
  }

  it('renders title', () => {
    renderWithRouter(mockProps)
    expect(screen.getByText('Some Title')).toBeInTheDocument()
  })

  it('renders button when buttonText is provided', () => {
    renderWithRouter(mockProps)
    expect(screen.getByText('Some button text')).toBeInTheDocument()
  })

  it('renders summary text when provided', () => {
    renderWithRouter(mockProps)
    expect(screen.getByText('Some summary text')).toBeInTheDocument()
  })

  it('button links to the correct URL', () => {
    renderWithRouter(mockProps)

    const button = screen.getByRole('link', { name: 'Some button text' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', mockProps.link)
  })

  test('reverses the order of button and summary text when reverseButtonAndText is true', () => {
    const { container } = renderWithRouter({
      ...mockProps,
      reverseButtonAndText: true,
    })

    const nestedStack = container.querySelectorAll('div')[2]
    expect(nestedStack).toHaveStyle('flex-direction: column-reverse')
    const button = nestedStack?.querySelector('a')
    const summary = nestedStack?.querySelector('p')

    expect(button).toBeInTheDocument()
    expect(summary).toBeInTheDocument()

    expect(button?.textContent).toBe('Some button text')
    expect(summary?.textContent).toBe('Some summary text')
  })

  it('applies centered styles when centered prop is true', () => {
    const { container } = renderWithRouter({
      ...mockProps,
      centered: true,
    })

    expect(container.firstChild).toHaveStyle('width: 100%')
  })
})
