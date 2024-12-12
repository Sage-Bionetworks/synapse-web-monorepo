import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import IconSvg, { IconSvgProps } from './IconSvg'

describe('IconSvg: basic functionality', () => {
  const iconOptions: IconSvgProps = {
    icon: 'data',
    sx: {
      color: '#000000',
    },
  }

  it('should render an image', () => {
    render(<IconSvg {...iconOptions} />)
    screen.getByRole('img')
  })

  it('should render tooltip when label is set', async () => {
    const iconOptionsWithLabel: IconSvgProps = {
      icon: 'data',
      label: 'abc',
      sx: { color: '#000000' },
    }
    render(<IconSvg {...iconOptionsWithLabel} />)
    const iconContainer = screen.getByRole('img')
    await userEvent.hover(iconContainer)
    await screen.findByText(iconOptionsWithLabel.label!)
  })
})
