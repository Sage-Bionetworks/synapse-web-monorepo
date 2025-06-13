import { render, screen } from '@testing-library/react'
import SpinnerButton, { SpinnerButtonProps } from './SpinnerButton'

const defaultProps: SpinnerButtonProps = {
  children: 'Submit',
  showSpinner: false,
}

function renderComponent(showSpinner: boolean = false) {
  render(
    <SpinnerButton showSpinner={showSpinner}>
      {defaultProps.children}
    </SpinnerButton>,
  )
}

describe('SpinnerButton tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('Renders as a button with correct properties', () => {
    renderComponent()

    const btn = screen.getByTestId('SpinnerButton')
    expect(btn).toHaveTextContent(defaultProps.children as string)
    expect(btn).not.toHaveAttribute('disabled')
  })

  it('Button does not have spinner span when ShowSpinner is false', () => {
    renderComponent(false)
    const spinner = () => {
      screen.getByTestId('SpinnerButton-spinner')
    }
    expect(spinner).toThrow(Error)
  })

  it('Button is disabled when ShowSpinner is true', () => {
    renderComponent(true)

    const btn = screen.getByRole<HTMLButtonElement>('button')
    expect(btn).toHaveAttribute('disabled')
  })

  it('Button has spinner span when ShowSpinner is true', () => {
    renderComponent(true)
    const spinner = screen.getByTestId('SpinnerButton-spinner')
    expect(spinner).toHaveAttribute('class', 'spinner')
  })
})
