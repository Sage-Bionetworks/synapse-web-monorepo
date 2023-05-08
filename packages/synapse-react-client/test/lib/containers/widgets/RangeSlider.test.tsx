import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  RangeSlider,
  RangeSliderProps,
} from '../../../../src/lib/containers/widgets/RangeSlider'
import { Slider } from '@mui/material'

const mockCallback = jest.fn()
const MUI_SLIDER_TEST_ID = 'Mock MUI Slider'
jest.mock('@mui/material', () => {
  const muiActual = jest.requireActual('@mui/material')
  return {
    ...muiActual,
    Slider: jest.fn(() => <span data-testid={MUI_SLIDER_TEST_ID}></span>),
  }
})

const mockSlider = jest.mocked(Slider)

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
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render with correct properties', () => {
    init()
    // The initial values should be reported to the screen
    screen.getByText('1 - 20')
    screen.getByTestId(MUI_SLIDER_TEST_ID)
  })

  describe('callbacks', () => {
    it('should not call the callbackFn on change when doUpdateOnApply is true', async () => {
      init({ doUpdateOnApply: true })
      screen.getByTestId(MUI_SLIDER_TEST_ID)
      await waitFor(() => expect(mockSlider).toHaveBeenCalled())
      act(() => {
        mockSlider.mock.calls[0][0].onChange({}, [1, 20], 0)
      })
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
      screen.getByTestId(MUI_SLIDER_TEST_ID)
      const button = screen.getByRole('button', { name: 'Apply' })
      await userEvent.click(button)
      expect(mockCallback).toHaveBeenCalledWith({ min: 1, max: 20 })
    })
  })
})
