import * as React from 'react'
import {
  RadioGroup,
  RadioGroupProps,
} from '../../../../src/lib/containers/widgets/RadioGroup'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockCallback = jest.fn()

function createTestProps(overrides?: RadioGroupProps): RadioGroupProps {
  return {
    options: [
      { label: 'Label0', value: 'value0' },
      { label: 'Label1', value: 'value1' },
      { label: 'Label2', value: 'value2' },
    ],
    id: 'radioGroup1',
    className: 'radioGroupClass',
    value: 'value1',
    onChange: mockCallback,

    ...overrides,
  }
}

let props: RadioGroupProps

function init(overrides?: RadioGroupProps) {
  props = createTestProps(overrides)
  render(<RadioGroup {...props} />)
}

describe('basic function', () => {
  it('should render with correct properties', () => {
    init()
    const radioGroup = screen.getByRole<HTMLDivElement>('radiogroup')
    const radioOptions = screen.getAllByRole<HTMLInputElement>('radio')
    expect(radioOptions).toHaveLength(props.options.length)
    expect(radioGroup.className.includes('radioGroupClass')).toBe(true)
    screen.getByLabelText(props.options[0].label)

    expect(radioOptions[0]).not.toBeChecked()
    expect(radioOptions[1]).toBeChecked()
    expect(radioOptions[2]).not.toBeChecked()
  })

  it('should invoke callback when the user clicks an input', async () => {
    init()

    const radioOptions = screen.getAllByRole<HTMLInputElement>('radio')

    await userEvent.click(radioOptions[2])

    expect(mockCallback).toHaveBeenCalledTimes(1)
    expect(mockCallback).toHaveBeenCalledWith(props.options[2].value)
  })

  it('should not crash without value specified', () => {
    init({ ...props, value: undefined })
    screen.getByRole<HTMLDivElement>('radiogroup')
    const radioOptions = screen.getAllByRole<HTMLInputElement>('radio')
    expect(radioOptions).toHaveLength(props.options.length)

    expect(radioOptions[0]).not.toBeChecked()
    expect(radioOptions[1]).not.toBeChecked()
    expect(radioOptions[2]).not.toBeChecked()
  })
})
