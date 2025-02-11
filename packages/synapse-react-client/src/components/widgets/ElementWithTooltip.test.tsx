import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import _ from 'lodash-es'
import { ComponentProps } from 'react'
import Columns from '../../assets/icons/columns'
import { IconSvgProps } from '../IconSvg/IconSvg'
import { ElementWithTooltip } from './ElementWithTooltip'

const mockCallback = jest.fn()
type ElementWithTooltipProps = ComponentProps<typeof ElementWithTooltip>

afterEach(cleanup)

function createTestProps(
  overrides?: ElementWithTooltipProps,
): ElementWithTooltipProps {
  return {
    image: { icon: 'check' },
    callbackFn: mockCallback,
    tooltipText: 'my tooltip',
    ...overrides,
  }
}

let props: ElementWithTooltipProps
let container: HTMLElement
let imageButton: HTMLElement

function init(overrides?: ElementWithTooltipProps) {
  props = createTestProps(overrides)
  mockCallback.mockClear()
  container = render(<ElementWithTooltip {...props} />).container
  imageButton = container.getElementsByTagName('button').item(0)!
}

describe('ElementWithTooltip', () => {
  afterEach(() => {
    jest.useRealTimers()
  })
  it('should render with correct tooltip properties', async () => {
    init()
    jest.useFakeTimers()
    const user = userEvent.setup({ advanceTimers: jest.runAllTimers })
    await user.hover(imageButton)

    await screen.findByText(props.tooltipText)
    expect(imageButton.attributes.getNamedItem('aria-label')!.value).toBe(
      props.tooltipText,
    )
    expect(imageButton.classList.contains('dropdown-toggle')).toBe(false)
  })

  it('should render with correct properties for icon and custom image', () => {
    expect(
      imageButton
        .getElementsByClassName('styled-svg-wrapper')
        .item(0)!
        .attributes.getNamedItem('data-svg')!.value,
    ).toBe((props.image as IconSvgProps).icon)
    expect(imageButton.getElementsByTagName('img')).toHaveLength(0)

    const props_: ElementWithTooltipProps = {
      ...props,
      image: {
        svgImg: Columns,
        altText: 'test',
      },
    }
    init(props_)

    expect(imageButton.getElementsByTagName('svg')).toHaveLength(1)
  })

  it('should create dropdown toggle element without callbackFn passed in', () => {
    init({ ...props, callbackFn: undefined })
    screen.getByRole('button')
  })
  it('should call the callback Fn', async () => {
    init()
    await userEvent.click(imageButton)
    expect(mockCallback).toHaveBeenCalled()
  })
  it('should create correctly without image as a text tooltip', async () => {
    jest.useFakeTimers()
    const user = userEvent.setup({ advanceTimers: jest.runAllTimers })
    const child = <span className="my_class">hello world</span>
    init({
      ...props,
      callbackFn: _.noop,
      children: child,
      image: undefined,
    })
    const tooltipTrigger = container.getElementsByClassName('my_class').item(0)
    expect(tooltipTrigger!.classList.contains('my_class')).toBe(true)
    expect(tooltipTrigger!.innerHTML).toBe('hello world')

    await user.hover(tooltipTrigger!)

    act(() => {
      jest.runAllTimers()
    })
    await screen.findByText(props.tooltipText)
  })
})
