import { test, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { act, render, screen } from '@testing-library/react'
import { AddRows } from './AddRows'

test('Has correct classes', () => {
  render(<AddRows addRows={() => null} />)
  const button = screen.getByRole('button')
  const input = screen.getByRole('spinbutton')

  expect(button).toHaveClass('dsg-add-row-btn')
  expect(input).toHaveClass('dsg-add-row-input')
})

test('Calls addRows', async () => {
  const addRows = vi.fn()
  render(<AddRows addRows={addRows} />)
  const button = screen.getByRole('button')
  const input = screen.getByRole('spinbutton')

  await userEvent.click(button)
  expect(addRows).toHaveBeenLastCalledWith(1)

  await userEvent.type(input, '{Control>}a{/Control}5')
  await userEvent.click(button)
  expect(addRows).toHaveBeenLastCalledWith(5)

  await userEvent.type(input, '{Control>}a{/Control}{Backspace}{Enter}')
  expect(addRows).toHaveBeenLastCalledWith(1)
})

test('Resets on blur when value is invalid', async () => {
  render(<AddRows addRows={() => null} />)
  const input = screen.getByRole('spinbutton') as HTMLInputElement

  // user-event drops non-numeric keystrokes on a type="number" input, so the
  // input has to be forced to "text" to get invalid values in front of the
  // component. React restores type="number" on re-render, hence re-applying it
  // before every interaction.
  const typeThenBlur = async (text: string) => {
    input.type = 'text'
    await userEvent.type(input, text)
    act(() => {
      input.blur()
    })
  }

  await typeThenBlur('{Control>}a{/Control}{Backspace}')
  expect(input.value).toBe('1')

  await typeThenBlur('{Control>}a{/Control}456xyz')
  expect(input.value).toBe('456')

  await typeThenBlur('{Control>}a{/Control}abc')
  expect(input.value).toBe('1')
})
