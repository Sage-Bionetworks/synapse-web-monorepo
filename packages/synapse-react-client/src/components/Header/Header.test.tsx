import { render, screen } from '@testing-library/react'
import Header, { HeaderProps } from './Header'

describe('Header Component', () => {
  const props: HeaderProps = {
    backgroundCss: 'https://test.com/img.png',
    title: 'Some title',
    buttonLink: 'Some link',
    subTitle: 'Some subtitle',
    description: 'Some description',
  }

  it('Renders text', () => {
    render(<Header {...props} />)
    expect(screen.getByText('Some title')).toBeInTheDocument()
    expect(screen.getByText('Some subtitle')).toBeInTheDocument()
    expect(screen.getByText('Some description')).toBeInTheDocument()
  })

  it('Renders background image', () => {
    render(<Header {...props} />)
    const container = screen.getByTestId('HeaderContainer')
    expect(container).toHaveStyle(`background: url${props.backgroundCss}`)
  })

  it('Renders button', () => {
    render(<Header {...props} />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('href', props.buttonLink)
  })
})
