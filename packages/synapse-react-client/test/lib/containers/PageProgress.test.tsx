import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import PageProgress, {
  PageProgressProps,
} from '../../../src/lib/containers/PageProgress'

describe('Page Progress: basic functionality', () => {
  const onBackButtonClicked = jest.fn()
  const onNextButtonClicked = jest.fn()
  const props: PageProgressProps = {
    barColor: '',
    barPercent: 30,
    backBtnLabel: 'Go back',
    backBtnCallback: onBackButtonClicked,
    forwardBtnLabel: 'Go forward',
    forwardBtnCallback: onNextButtonClicked,
    forwardBtnActive: false,
  }
  const canGoNextProps: PageProgressProps = { ...props }
  canGoNextProps.forwardBtnActive = true

  it('render component without crashing', () => {
    const { container } = render(<PageProgress {...props} />)
    expect(container).toBeDefined()
  })

  it('should render progress bar with correct width', () => {
    const { container } = render(<PageProgress {...props} />)
    expect(
      container.querySelector('.page-progress-percent')?.getAttribute('style'),
    ).toBe('width: 30%;')
  })

  it('should render button with correct labels', () => {
    render(<PageProgress {...props} />)

    expect(
      screen
        .getByRole('button', { name: 'Go back' })
        .classList.contains('btn-progress-back'),
    ).toBe(true)
    expect(
      screen
        .getByRole('button', { name: 'Go forward' })
        .classList.contains('btn-progress-next'),
    ).toBe(true)
  })

  it('should have correct css class for forward button', () => {
    render(<PageProgress {...canGoNextProps} />)
    expect(
      screen
        .getByRole('button', { name: 'Go forward' })
        .classList.contains('btn-progress-next-active'),
    ).toBe(true)
  })

  it('should call back button callback when clicked', async () => {
    render(<PageProgress {...props} />)
    await userEvent.click(screen.getByRole('button', { name: 'Go back' }))
    expect(onBackButtonClicked).toHaveBeenCalledTimes(1)
  })

  it('should not call forward button callback when it is not active', async () => {
    render(<PageProgress {...props} />)
    await userEvent.click(screen.getByRole('button', { name: 'Go forward' }))
    expect(onNextButtonClicked).toHaveBeenCalledTimes(0)
  })

  it('should call forward button callback when it is active', async () => {
    render(<PageProgress {...canGoNextProps} />)
    await userEvent.click(screen.getByRole('button', { name: 'Go forward' }))
    expect(onNextButtonClicked).toHaveBeenCalledTimes(1)
  })
})
