import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RangeSlider, { RangeSliderProps } from './RangeSlider'
import { Slider } from '@mui/material'

const mockOnChange = vi.fn()
const mockOnApplyClicked = vi.fn()
const MUI_SLIDER_TEST_ID = 'Mock MUI Slider'
vi.mock(import('@mui/material'), async importOriginal => {
  const original = await importOriginal()
  return {
    ...original,
    Slider: vi.fn(() => <span data-testid={MUI_SLIDER_TEST_ID}></span>),
  }
})

const mockSlider = vi.mocked(Slider)

function createTestProps(
  overrides?: Partial<RangeSliderProps>,
): RangeSliderProps {
  return {
    initialValues: { min: '1', max: '20' },
    domain: ['0', '35'],
    onChange: mockOnChange,
    onApplyClicked: mockOnApplyClicked,
    step: 1,
    ...overrides,
  }
}

function init(overrides?: Partial<RangeSliderProps>) {
  const props = createTestProps(overrides)
  return render(<RangeSlider {...props} />)
}

describe('RangeSlider', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render with correct properties', () => {
    init()
    // The initial values should be reported to the screen
    screen.getByText('1 - 20')
    screen.getByTestId(MUI_SLIDER_TEST_ID)
  })

  describe('callbacks', () => {
    it('should not call onApplyClicked on change', async () => {
      init()
      screen.getByTestId(MUI_SLIDER_TEST_ID)
      await waitFor(() => expect(mockSlider).toHaveBeenCalled())
      act(() => {
        mockSlider.mock.lastCall![0].onChange!(new Event('click'), [1, 20], 0)
      })
      expect(mockOnApplyClicked).not.toHaveBeenCalled()
      expect(mockOnChange).toHaveBeenCalledWith({ min: 1, max: 20 })
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
      init()
      screen.getByTestId(MUI_SLIDER_TEST_ID)
      const button = screen.getByRole('button', { name: 'Apply' })
      await userEvent.click(button)
      expect(mockOnApplyClicked).toHaveBeenCalledWith({ min: 1, max: 20 })
    })
  })
})
