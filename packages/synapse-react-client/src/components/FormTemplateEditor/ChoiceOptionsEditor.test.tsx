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

  it('adds an empty, focused choice whose placeholder suggests its label', async () => {
    const user = userEvent.setup()
    render(<Harness initialOptions={['Red', 'Blue']} />)
    await user.click(screen.getByRole('button', { name: 'Add choice' }))
    const added = screen.getByRole('textbox', { name: 'Choice 3' })
    expect(added).toHaveValue('')
    expect(added).toHaveAttribute('placeholder', 'Option 3')
    expect(added).toHaveFocus()

    // Typing goes straight into the new choice, with no prefilled text to clear first.
    await user.keyboard('Green')
    expect(added).toHaveValue('Green')
  })

  it('flags an empty choice on its input until it is filled in', async () => {
    const user = userEvent.setup()
    render(<Harness initialOptions={['Red']} />)
    await user.click(screen.getByRole('button', { name: 'Add choice' }))
    const added = screen.getByRole('textbox', { name: 'Choice 2' })
    expect(added).toHaveAttribute('aria-invalid', 'true')
    expect(added).toHaveAccessibleDescription('Required')
    expect(screen.getByRole('textbox', { name: 'Choice 1' })).toHaveAttribute(
      'aria-invalid',
      'false',
    )

    await user.type(added, 'Blue')
    expect(added).toHaveAttribute('aria-invalid', 'false')
    expect(added).not.toHaveAccessibleDescription()
  })

  it('treats a choice of only spaces as empty', () => {
    render(<Harness initialOptions={['Red', '  ']} />)
    expect(
      screen.getByRole('textbox', { name: 'Choice 2' }),
    ).toHaveAccessibleDescription('Required')
  })

  it('flags each copy of a duplicated choice until they differ', async () => {
    const user = userEvent.setup()
    render(<Harness initialOptions={['Red', 'Blue', 'Red']} />)
    const first = screen.getByRole('textbox', { name: 'Choice 1' })
    const third = screen.getByRole('textbox', { name: 'Choice 3' })
    for (const input of [first, third]) {
      expect(input).toHaveAttribute('aria-invalid', 'true')
      expect(input).toHaveAccessibleDescription(
        'Already used by another choice',
      )
    }
    expect(screen.getByRole('textbox', { name: 'Choice 2' })).toHaveAttribute(
      'aria-invalid',
      'false',
    )

    await user.type(third, 'dish')
    expect(first).toHaveAttribute('aria-invalid', 'false')
    expect(third).toHaveAttribute('aria-invalid', 'false')
  })
})
