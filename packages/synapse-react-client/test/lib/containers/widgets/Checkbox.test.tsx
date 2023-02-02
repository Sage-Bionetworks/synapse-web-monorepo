import * as React from 'react'
import {
  Checkbox,
  CheckboxProps,
} from '../../../../src/lib/containers/widgets/Checkbox'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockCallback = jest.fn()

const props: CheckboxProps = {
  label: 'checkboxLabel',
  checked: true,
  className: 'checkboxClass',
  onChange: mockCallback,
}

describe('basic function', () => {
  it('should render with correct properties', () => {
    render(<Checkbox {...props} />)

    expect(screen.queryByRole('checkbox')).toBeInTheDocument()
    expect(screen.queryByLabelText(props.label)).toBeInTheDocument()
    expect(screen.getByRole<HTMLInputElement>('checkbox').checked).toBe(true)
    expect(
      screen
        .getByRole<HTMLInputElement>('checkbox')
        .id.startsWith('src-checkbox-'),
    ).toBe(true)
  })

  it('should render with correct checked state', () => {
    render(<Checkbox {...props} checked={false} />)
    expect(screen.getByRole<HTMLInputElement>('checkbox').checked).toBe(false)
  })

  it('should call callbackFn on change with correct params and change the value', async () => {
    render(<Checkbox {...props} checked={false} />)

    await userEvent.click(screen.getByRole('checkbox'))
    expect(mockCallback).toHaveBeenCalledWith(true)

    expect(screen.getByRole<HTMLInputElement>('checkbox').checked).toBe(true)
  })

  it('should be accessible via RTL', async () => {
    render(<Checkbox {...props} />)
    expect(() => screen.getByRole('checkbox')).not.toThrowError()

    await userEvent.click(screen.getByRole('checkbox'))
    expect(mockCallback).toHaveBeenCalledWith(true)
  })
})
