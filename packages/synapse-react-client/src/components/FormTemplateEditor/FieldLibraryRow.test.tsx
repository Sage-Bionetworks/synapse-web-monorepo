import { RJSFSchema } from '@rjsf/utils'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FieldLibraryRow } from './FieldLibraryRow'

const textProperty: RJSFSchema = { type: 'string', title: 'Institution' }

function renderRow(
  overrides: Partial<Parameters<typeof FieldLibraryRow>[0]> = {},
) {
  const onClick = vi.fn()
  render(
    <FieldLibraryRow
      propertyKey="institution"
      property={textProperty}
      isRequired={false}
      context="ALWAYS"
      isUsedInSteps={false}
      onClick={onClick}
      {...overrides}
    />,
  )
  return { onClick }
}

describe('FieldLibraryRow', () => {
  it('shows the display label, type, and required/context badges', () => {
    renderRow({ isRequired: true, context: 'REQUEST_ONLY' })
    expect(screen.getByText('Institution')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
    expect(screen.getByText('Required')).toBeInTheDocument()
    expect(screen.getByText('Request only')).toBeInTheDocument()
  })

  it('omits the context caption for ALWAYS fields', () => {
    renderRow({ context: 'ALWAYS' })
    expect(screen.queryByText('Request only')).not.toBeInTheDocument()
  })

  it('shows the bound/unbound chip', () => {
    renderRow({ isUsedInSteps: true })
    expect(screen.getByText('In step')).toBeInTheDocument()
    expect(screen.queryByText('Unbound')).not.toBeInTheDocument()
  })

  it('is reachable and activatable via keyboard as the only affordance for opening the drawer', async () => {
    const user = userEvent.setup()
    const { onClick } = renderRow()
    const row = screen.getByRole('button', { name: 'Edit Institution' })
    row.focus()
    await user.keyboard('{Enter}')
    expect(onClick).toHaveBeenCalledTimes(1)
    await user.keyboard(' ')
    expect(onClick).toHaveBeenCalledTimes(2)
  })

  it('invokes onClick on a plain click', () => {
    const { onClick } = renderRow()
    fireEvent.click(screen.getByRole('button', { name: 'Edit Institution' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('places the drag handle first in the tab order when unbound', async () => {
    const user = userEvent.setup()
    renderRow({ isUsedInSteps: false })
    await user.tab()
    expect(
      screen.getByRole('button', { name: 'Drag to bind to a step' }),
    ).toHaveFocus()
  })

  it('skips the drag handle in the tab order and relabels it once bound to a step', async () => {
    const user = userEvent.setup()
    renderRow({ isUsedInSteps: true })
    await user.tab()
    // Direct .focus() would succeed regardless of tabIndex -- Tab is what actually exercises
    // exclusion from the sequential focus order.
    expect(
      screen.getByRole('button', { name: 'Already bound to a step' }),
    ).not.toHaveFocus()
  })

  it('stops a drag-handle click from also opening the drawer', () => {
    const { onClick } = renderRow()
    fireEvent.click(
      screen.getByRole('button', { name: 'Drag to bind to a step' }),
    )
    expect(onClick).not.toHaveBeenCalled()
  })
})
