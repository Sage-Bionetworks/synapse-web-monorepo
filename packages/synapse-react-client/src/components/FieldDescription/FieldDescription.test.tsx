import { render, screen } from '@testing-library/react'
import FieldDescription from './FieldDescription'

describe('FieldDescription', () => {
  it('renders its children', () => {
    render(<FieldDescription>Helpful text</FieldDescription>)
    expect(screen.getByText('Helpful text')).toBeInTheDocument()
  })

  it('applies an additional className alongside its own', () => {
    render(<FieldDescription className="extra">Helpful text</FieldDescription>)
    expect(screen.getByText('Helpful text')).toHaveClass('extra')
  })
})
