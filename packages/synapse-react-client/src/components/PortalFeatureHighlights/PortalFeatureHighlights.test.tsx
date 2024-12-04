import React from 'react'
import PortalFeatureHighlights, {
  PortalFeatureHighlightsProps,
} from './PortalFeatureHighlights'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

describe('PortalFeatureHighlights component', () => {
  const props: PortalFeatureHighlightsProps = {
    title: 'Test Title',
    image: 'test-image.jpg',
    buttonText: 'Click me',
    summaryText: 'This is a test summary',
    link: '/test-link',
    reverseOrder: false,
  }

  const renderComponent = (props: PortalFeatureHighlightsProps) => {
    return render(
      <MemoryRouter>
        <PortalFeatureHighlights {...props} />
      </MemoryRouter>,
    )
  }

  it('renders the title', () => {
    renderComponent(props)
    expect(screen.getByText('Test Title'))
  })

  it('renders image with correct src', () => {
    renderComponent(props)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'test-image.jpg')
  })

  it('renders the button with the correcf text and link', () => {
    renderComponent(props)
    const button = screen.getByRole('link', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/test-link')
  })
})
