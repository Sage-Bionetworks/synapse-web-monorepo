import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RadioGroupWithOtherString from './RadioGroupWithOtherString'

const OPTIONS = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
]

describe('RadioGroupWithOtherString', () => {
  it('initializes with a predefined option selected', () => {
    const onChange = vi.fn()
    render(
      <RadioGroupWithOtherString
        value="a"
        onChange={onChange}
        options={OPTIONS}
      />,
    )
    const optionA = screen.getByLabelText('Option A')
    const optionB = screen.getByLabelText('Option B')
    const otherRadio = screen.getByLabelText('Other')
    const otherInput = screen.getByLabelText('Other Value')
    expect((optionA as HTMLInputElement).checked).toBe(true)
    expect((optionB as HTMLInputElement).checked).toBe(false)
    expect((otherRadio as HTMLInputElement).checked).toBe(false)
    expect(otherInput).toBeDisabled()
  })

  it("initializes with 'Other' selected and custom value", () => {
    const onChange = vi.fn()
    render(
      <RadioGroupWithOtherString
        value="custom"
        onChange={onChange}
        options={OPTIONS}
      />,
    )
    const optionA = screen.getByLabelText('Option A')
    const optionB = screen.getByLabelText('Option B')
    const otherRadio = screen.getByLabelText('Other')
    const otherInput = screen.getByLabelText('Other Value')
    expect((optionA as HTMLInputElement).checked).toBe(false)
    expect((optionB as HTMLInputElement).checked).toBe(false)
    expect((otherRadio as HTMLInputElement).checked).toBe(true)
    expect(otherInput).not.toBeDisabled()
    expect((otherInput as HTMLInputElement).value).toBe('custom')
  })

  it('allows changing to a predefined option', async () => {
    const onChange = vi.fn()
    render(
      <RadioGroupWithOtherString
        value="custom"
        onChange={onChange}
        options={OPTIONS}
      />,
    )
    const optionA = screen.getByLabelText('Option A')
    await userEvent.click(optionA)
    expect(onChange).toHaveBeenCalledWith('a')
    expect((optionA as HTMLInputElement).checked).toBe(true)
  })

  it("allows changing to 'Other' and entering a custom value", async () => {
    const onChange = vi.fn()
    render(
      <RadioGroupWithOtherString
        value="a"
        onChange={onChange}
        options={OPTIONS}
      />,
    )
    const otherRadio = screen.getByLabelText('Other')
    await userEvent.click(otherRadio)
    const otherInput = screen.getByLabelText('Other Value')
    expect(otherInput).not.toBeDisabled()
    await userEvent.clear(otherInput)
    await userEvent.type(otherInput, 'xyz')
    expect(onChange).toHaveBeenLastCalledWith('xyz')
    expect((otherInput as HTMLInputElement).value).toBe('xyz')
  })
})
