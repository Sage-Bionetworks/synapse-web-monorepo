import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CsvTableDescriptorForm from './CsvTableDescriptorForm'
import { CsvTableDescriptor } from '@sage-bionetworks/synapse-client'
import { useState } from 'react'

describe('CsvTableDescriptorForm', () => {
  test('changing the separator to another option', async () => {
    const onChange = vi.fn()
    render(<CsvTableDescriptorForm onChange={onChange} />)
    // Find the radio for Tab separator and click it
    const tabRadio = screen.getByLabelText('Tab')
    await userEvent.click(tabRadio)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ separator: '\t' }),
    )
  })

  test('changing the separator to a custom value', async () => {
    const onChange = vi.fn()
    render(<CsvTableDescriptorForm onChange={onChange} />)
    // Select 'Other' for separator
    const otherRadio = screen.getAllByLabelText('Other')[0] // first 'Other' is for separator
    await userEvent.click(otherRadio)
    // Find the textbox for custom separator and type '|'
    const customInput = screen.getAllByLabelText('Other Value')[0]
    expect(customInput).not.toBeDisabled()
    await userEvent.clear(customInput)
    await userEvent.type(customInput, '|')
    // onChange should be called with separator: '|'
    expect(onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ separator: '|' }),
    )
  })

  test('changing the escape character to another option', async () => {
    const onChange = vi.fn()
    render(<CsvTableDescriptorForm onChange={onChange} />)
    // Only one option: Backslash, so simulate changing to it (should already be selected)
    const backslashRadio = screen.getByLabelText('Backslash')
    await userEvent.click(backslashRadio)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ escapeCharacter: '\\' }),
    )
  })

  test('changing the escape character to a custom value', async () => {
    const onChange = vi.fn()
    render(<CsvTableDescriptorForm onChange={onChange} />)
    // Select 'Other' for escape character
    const otherRadio = screen.getAllByLabelText('Other')[1] // second 'Other' is for escape character
    await userEvent.click(otherRadio)
    // Find the textbox for custom escape character and type '^'
    const customInput = screen.getAllByLabelText('Other Value')[1]
    expect(customInput).not.toBeDisabled()
    await userEvent.clear(customInput)
    await userEvent.type(customInput, '^')
    // onChange should be called with escapeCharacter: '^'
    expect(onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ escapeCharacter: '^' }),
    )
  })

  test('changing isFirstLineHeader', async () => {
    const onChange = vi.fn()
    render(<CsvTableDescriptorForm onChange={onChange} />)
    const checkbox = screen.getByLabelText('First line is the header')
    // Uncheck it
    await userEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ isFirstLineHeader: false }),
    )
    // Check it again
    await userEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ isFirstLineHeader: true }),
    )
  })

  it('works as an uncontrolled component', async () => {
    // Provide a defaultValue and verify initial state
    const defaultValue = {
      separator: ';',
      quoteCharacter: '"',
      escapeCharacter: '\\',
      lineEnd: '\n',
      isFirstLineHeader: false,
    }
    render(<CsvTableDescriptorForm defaultValue={defaultValue} />)
    // Initial state should reflect defaultValue
    const semicolonRadio = screen.getByLabelText('Semicolon')
    const backslashRadio = screen.getByLabelText('Backslash')
    const checkbox = screen.getByLabelText('First line is the header')
    expect((semicolonRadio as HTMLInputElement).checked).toBe(true)
    expect((backslashRadio as HTMLInputElement).checked).toBe(true)
    expect((checkbox as HTMLInputElement).checked).toBe(false)

    // Change separator to Tab
    const tabRadio = screen.getByLabelText('Tab')
    await userEvent.click(tabRadio)
    expect((tabRadio as HTMLInputElement).checked).toBe(true)

    // Change escape character (only one option, click it)
    await userEvent.click(backslashRadio)
    expect((backslashRadio as HTMLInputElement).checked).toBe(true)

    // Check header
    await userEvent.click(checkbox)
    expect((checkbox as HTMLInputElement).checked).toBe(true)
  })

  it('works as a controlled component', async () => {
    const onChange = vi.fn()
    const value: CsvTableDescriptor = {
      separator: ',',
      quoteCharacter: '"',
      escapeCharacter: '\\',
      lineEnd: '\n',
      isFirstLineHeader: true,
    }
    function Wrapper() {
      const [state, setState] = useState(value)
      return (
        <CsvTableDescriptorForm
          value={state}
          onChange={d => {
            setState(d)
            onChange(d)
          }}
        />
      )
    }
    render(<Wrapper />)
    // Change separator to Tab
    const tabRadio = screen.getByLabelText('Tab')
    await userEvent.click(tabRadio)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ separator: '\t' }),
    )
    // Uncheck header
    const checkbox = screen.getByLabelText('First line is the header')
    await userEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ isFirstLineHeader: false }),
    )
  })
})
