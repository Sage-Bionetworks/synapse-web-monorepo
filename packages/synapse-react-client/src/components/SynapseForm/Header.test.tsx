import Header, { HeaderProps } from './Header'
import { render, screen } from '@testing-library/react'

const renderComponent = (props: HeaderProps) => {
  render(<Header {...props} />)
}

const submittedText = 'Your information has been submitted'

describe('basic tests - not submitted', () => {
  const props: HeaderProps = {
    title: 'Some Header',
    isSubmitted: false,
    bodyText: 'Some bodyText<span class="testme"> html test </span>',
  }

  it('should display the correct bodyText as html', () => {
    renderComponent(props)
    screen.getByText('Some bodyText')
    screen.getByText('html test')
  })

  it('should not crash without bodyText param', () => {
    props.bodyText = undefined
    renderComponent(props)
    screen.getByRole('separator')
  })
})

describe('basic tests - submitted', () => {
  const props: HeaderProps = {
    title: 'Some Header',
    isSubmitted: false,
    bodyText: 'Some bodyText<span class="testme"> html test </span>',
  }

  it('should display that it has been submitted', () => {
    const _props = { ...props, ...{ isSubmitted: true } }
    renderComponent(_props)

    screen.getByText(submittedText)
  })

  it('should not crash without bodyText param', () => {
    const _props = { ...props, ...{ isSubmitted: true, bodyText: undefined } }
    renderComponent(_props)
    screen.getByText(submittedText)
  })
})
