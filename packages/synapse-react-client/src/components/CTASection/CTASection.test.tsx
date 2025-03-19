import { render, screen } from '@testing-library/react'
import CTASection from './CTASection'
import '@testing-library/jest-dom'

const mockProps = {
  title: 'Test Title',
  subtitle: 'Test Subtitle',
  buttonText: 'Test Button',
  buttonLink: 'https://test-link.com',
}

describe('CTASections tests', () => {
  it('renders title and subtitle correctly', () => {
    render(<CTASection {...mockProps} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('renders button with external link', () => {
    render(<CTASection {...mockProps} />)
    const button = screen.getByRole('link')
    expect(button).toHaveAttribute('href', 'https://test-link.com')
    expect(button).toHaveAttribute('target', '_blank')
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('renders the correct icon inside the button', () => {
    render(<CTASection {...mockProps} />)
    const icon = screen.getByTestId('AddAlertTwoToneIcon')
    expect(icon).toBeInTheDocument()
  })
})
