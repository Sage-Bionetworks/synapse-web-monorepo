import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { ChoiceOptionsEditor } from './ChoiceOptionsEditor'

/** Mirrors how a real consumer holds the options: state updated by `onChange`. */
function Harness({ initialOptions }: { initialOptions: string[] }) {
  const [options, setOptions] = useState(initialOptions)
  return <ChoiceOptionsEditor options={options} onChange={setOptions} />
}

describe('ChoiceOptionsEditor', () => {
  it('renders a text field per option', () => {
    render(<Harness initialOptions={['Red', 'Blue']} />)
    expect(screen.getByDisplayValue('Red')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Blue')).toBeInTheDocument()
  })

  it('updates a single option in place', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <ChoiceOptionsEditor options={['Red', 'Blue']} onChange={onChange} />,
    )
    await user.type(screen.getByDisplayValue('Blue'), '!')
    expect(onChange).toHaveBeenLastCalledWith(['Red', 'Blue!'])
  })

  it('removes an option by index', async () => {
    const user = userEvent.setup()
    render(<Harness initialOptions={['Red', 'Blue', 'Green']} />)
    await user.click(
      screen.getAllByRole('button', { name: 'Delete choice' })[1],
    )
    expect(screen.queryByDisplayValue('Blue')).not.toBeInTheDocument()
    expect(screen.getByDisplayValue('Red')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Green')).toBeInTheDocument()
  })

  it('disables delete when only one option remains, so an empty enum is unreachable', () => {
    render(<Harness initialOptions={['Only']} />)
    expect(screen.getByRole('button', { name: 'Delete choice' })).toBeDisabled()
  })

  it('adds a new option with a label unique from the existing ones', async () => {
    const user = userEvent.setup()
    render(<Harness initialOptions={['Option 1']} />)
    await user.click(screen.getByRole('button', { name: 'Add choice' }))
    expect(screen.getByDisplayValue('Option 2')).toBeInTheDocument()
  })

  it('generates a unique added label even after a middle deletion leaves the naive next-index label taken', async () => {
    // Regression: naively appending `Option ${options.length + 1}` produces a duplicate once a
    // middle option has been deleted (e.g. after deleting "Option 2" from
    // [1, 2, 3], length + 1 = 3, which collides with the surviving "Option 3").
    const user = userEvent.setup()
    render(
      <Harness initialOptions={['Option 1', 'Option 3']} />, // simulates "Option 2" already removed
    )
    await user.click(screen.getByRole('button', { name: 'Add choice' }))
    const values = screen
      .getAllByRole('textbox')
      .map(el => (el as HTMLInputElement).value)
    expect(values).toEqual(['Option 1', 'Option 3', 'Option 4'])
    expect(new Set(values).size).toBe(values.length)
  })
})
