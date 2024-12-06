import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import { Range, RangeProps } from './Range'

const mockCallback = jest.fn()

const defaultProps: RangeProps = {
  type: 'number',
  initialValues: { min: '2.3', max: '5' },
  className: 'rangeClass',
  onApplyClicked: mockCallback,
}

function renderComponent(overrides?: Partial<RangeProps>) {
  mockCallback.mockClear()
  return render(<Range {...defaultProps} {...overrides} />)
}

function getInput(label: string) {
  return screen.getByLabelText<HTMLInputElement>(label)
}

async function updateValue(min: number | string, max: number | string) {
  const minInput = getInput('min')
  await userEvent.clear(minInput)
  await userEvent.type(minInput, min.toString())

  const maxInput = getInput('max')
  await userEvent.clear(maxInput)
  await userEvent.type(maxInput, max.toString())

  await userEvent.click(screen.getByRole('button', { name: 'Apply' }))
}

describe('Range input test', () => {
  it('should render with correct properties', () => {
    const { container } = renderComponent()
    const minInput = getInput('min')
    expect(minInput.value).toBe(defaultProps.initialValues!.min)
    const maxInput = getInput('max')
    expect(maxInput.value).toBe(defaultProps.initialValues!.max)

    expect(container.querySelector('div.rangeClass')).toBeDefined()
  })

  it('should render without values specified', () => {
    renderComponent({ initialValues: undefined })
    const minInput = getInput('min')
    expect(minInput.value).toBe('')
    const maxInput = getInput('max')
    expect(maxInput.value).toBe('')
  })

  it('should call callbackFn correctly', async () => {
    renderComponent()
    await updateValue(2, 4.9)
    expect(mockCallback).toHaveBeenCalledWith({ min: '2', max: '4.9' })
  })

  it('should not trigger callback for min > max and should show error', async () => {
    renderComponent()
    await updateValue(4.9, 2)
    expect(mockCallback).not.toHaveBeenCalled()
    const errorMessage = screen.getByText(
      'Min value should be less than max value',
    )
    expect(errorMessage.classList.contains('SRC-danger-color')).toBe(true)
  })

  describe('date range', () => {
    const initialValues = {
      min: new Date(2019, 0, 4).toISOString(),
      max: new Date(2019, 9, 3).toISOString(),
    }
    const updatedValues = {
      min: dayjs(new Date(2019, 7, 1)).format('YYYY-MM-DD'),
      max: dayjs(new Date(2019, 7, 3)).format('YYYY-MM-DD'),
    }
    it('should render with correct checked state', () => {
      renderComponent({ type: 'date', initialValues: initialValues })
      expect(getInput('min').value).toBe('2019-01-04')
      expect(getInput('max').value).toBe('2019-10-03')
    })

    it('should render without values specified', () => {
      renderComponent({ type: 'date', initialValues: undefined })
      const minInput = getInput('min')
      expect(minInput.value).toBe('')
      const maxInput = getInput('max')
      expect(maxInput.value).toBe('')
    })

    it('should call callbackFn correctly', async () => {
      renderComponent({ type: 'date' })
      await updateValue(updatedValues.min, updatedValues.max)
      await waitFor(() =>
        expect(mockCallback).toHaveBeenCalledWith(updatedValues),
      )
    })

    it('should not trigger callback for min > max and should show error', async () => {
      renderComponent({ type: 'date' })

      await updateValue(updatedValues.max, updatedValues.min)
      expect(mockCallback).not.toHaveBeenCalled()
      const errorMessage = screen.getByText(
        'Min value should be less than max value',
      )
      expect(errorMessage.classList.contains('SRC-danger-color')).toBe(true)
    })
  })
})
