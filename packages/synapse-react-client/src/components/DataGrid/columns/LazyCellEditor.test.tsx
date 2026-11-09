import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LazyCellEditor } from './LazyCellEditor'

function renderCell(active: boolean) {
  const cell = (isActive: boolean) => (
    <LazyCellEditor
      active={isActive}
      display="Display value"
      renderEditor={() => <input aria-label="Editor" />}
    />
  )
  const { rerender } = render(cell(active))
  return { setActive: (isActive: boolean) => rerender(cell(isActive)) }
}

describe('LazyCellEditor', () => {
  it('shows the display until the user reaches the cell', () => {
    renderCell(false)

    expect(screen.getByText('Display value')).toBeInTheDocument()
    expect(
      screen.queryByRole('textbox', { name: 'Editor' }),
    ).not.toBeInTheDocument()
  })

  it('mounts the editor when the pointer moves over the cell', () => {
    renderCell(false)

    fireEvent.pointerMove(screen.getByText('Display value'))

    expect(screen.getByRole('textbox', { name: 'Editor' })).toBeInTheDocument()
    expect(screen.queryByText('Display value')).not.toBeInTheDocument()
  })

  it('does not mount the editor when the cell scrolls under a stationary pointer', () => {
    // Scrolling fires pointerover and pointerenter, but not pointermove
    renderCell(false)

    fireEvent.pointerOver(screen.getByText('Display value'))
    fireEvent.pointerEnter(screen.getByText('Display value'))

    expect(
      screen.queryByRole('textbox', { name: 'Editor' }),
    ).not.toBeInTheDocument()
  })

  it('mounts the editor when the cell is activated', () => {
    const { setActive } = renderCell(false)

    setActive(true)

    expect(screen.getByRole('textbox', { name: 'Editor' })).toBeInTheDocument()
  })

  it('renders the editor for a cell that is active when it mounts', () => {
    renderCell(true)

    expect(screen.getByRole('textbox', { name: 'Editor' })).toBeInTheDocument()
  })

  it('keeps the editor after the cell is deactivated', () => {
    // The editor commits typed text when the cell is deactivated
    const { setActive } = renderCell(true)
    const editor = screen.getByRole('textbox', { name: 'Editor' })

    setActive(false)

    expect(screen.getByRole('textbox', { name: 'Editor' })).toBe(editor)
  })
})
