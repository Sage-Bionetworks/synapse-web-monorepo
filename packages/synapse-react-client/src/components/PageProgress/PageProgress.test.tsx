import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PageProgress, { PageProgressProps } from './PageProgress'

const buttonLabels = {
  back: 'Go back',
  forward: 'Go forward',
}

function setUp(props: PageProgressProps) {
  const user = userEvent.setup()
  const component = render(<PageProgress {...props} />)
  const buttons = {
    back: screen.getByRole('button', { name: buttonLabels.back }),
    forward: screen.getByRole('button', { name: buttonLabels.forward }),
  }
  const progressbar = screen.getByRole('progressbar')
  return { user, component, buttons, progressbar }
}

describe('Page Progress: basic functionality', () => {
  const onBackButtonClicked = vi.fn()
  const onNextButtonClicked = vi.fn()
  const props: PageProgressProps = {
    barColor: '',
    barPercent: 30,
    backBtnLabel: buttonLabels.back,
    backBtnCallback: onBackButtonClicked,
    forwardBtnLabel: buttonLabels.forward,
    forwardBtnCallback: onNextButtonClicked,
    forwardBtnActive: false,
  }
  const canGoNextProps: PageProgressProps = { ...props }
  canGoNextProps.forwardBtnActive = true

  it('render component without crashing', () => {
    const { component } = setUp(props)
    expect(component).toBeDefined()
  })

  it('should render progress bar with correct percentage', () => {
    const { progressbar } = setUp(props)
    expect(progressbar).toHaveAttribute('aria-valuenow', '30')
  })

  it('should render buttons with correct labels', () => {
    const { buttons } = setUp(props)
    expect(buttons.back).toBeInTheDocument()
    expect(buttons.forward).toBeInTheDocument()
  })

  it('should disable forward button when cannot advance', () => {
    const { buttons } = setUp(props)
    expect(buttons.forward).toBeDisabled()
  })

  it('should not disable forward button when can advance', () => {
    const { buttons } = setUp(canGoNextProps)
    expect(buttons.forward).not.toBeDisabled()
  })

  it('should call back button callback when clicked', async () => {
    const { user, buttons } = setUp(props)
    expect(buttons.back).not.toBeDisabled()
    await user.click(buttons.back)
    expect(onBackButtonClicked).toHaveBeenCalledTimes(1)
  })

  it('should call forward button callback when it is active', async () => {
    const { user, buttons } = setUp(canGoNextProps)
    expect(buttons.forward).not.toBeDisabled()
    await user.click(buttons.forward)
    expect(onNextButtonClicked).toHaveBeenCalledTimes(1)
  })
})
