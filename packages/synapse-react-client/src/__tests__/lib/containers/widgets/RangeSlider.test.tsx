import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  RangeSlider,
  RangeSliderProps,
} from '../../../../lib/containers/widgets/RangeSlider'

const mockCallback = jest.fn(() => {})

function createTestProps(
  overrides?: Partial<RangeSliderProps>,
): RangeSliderProps {
  return {
    initialValues: { min: '1', max: '20' },
    domain: ['0', '35'],
    onChange: mockCallback,
    step: 1,
    doUpdateOnApply: true,
    ...overrides,
  }
}

function init(overrides?: Partial<RangeSliderProps>) {
  const props = createTestProps(overrides)
  return render(<RangeSlider {...props} />)
}

describe('RangeSlider', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render with correct properties', () => {
    const { container } = init()
    // The initial values should be reported to the screen
    within(container.querySelector('.RangeSlider__values')!).getByText('1 - 20')
    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(2)
    expect(sliders[0].getAttribute('aria-valuenow')).toBe('1')
    expect(sliders[0].getAttribute('aria-valuemin')).toBe('0')
    expect(sliders[0].getAttribute('aria-valuemax')).toBe('35')
    expect(sliders[1].getAttribute('aria-valuenow')).toBe('20')
    expect(sliders[1].getAttribute('aria-valuemin')).toBe('0')
    expect(sliders[1].getAttribute('aria-valuemax')).toBe('35')

    // Find min and max values
    screen.getByText('0')
    screen.getByText('35')
  })

  describe('callbacks', () => {
    it('should not call the callbackFn on change when doUpdateOnApply is true', async () => {
      init({ doUpdateOnApply: true })
      const sliders = screen.getAllByRole('slider')
      await userEvent.click(sliders[0])
      expect(mockCallback).not.toHaveBeenCalled()
    })

    /**
     * Hard to test updating values in JSDOM, so skipping this test.
     * It would be worth coming back to this if we use an interaction testing library that runs in a browser,
     * like Cypress or the storybook test runner.
     */
    it.todo(
      'should call the callbackFn on change when doUpdateOnApply is false',
    )

    it('should always call callbackFn on Apply', async () => {
      init({ doUpdateOnApply: true })
      const button = screen.getByRole('button', { name: 'Apply' })
      await userEvent.click(button)
      expect(mockCallback).toHaveBeenCalledWith({ min: 1, max: 20 })
    })
  })
})
