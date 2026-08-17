import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JSONSchema7 } from 'json-schema'
import ReorderColumnsDialog from './ReorderColumnsDialog'

describe('ReorderColumnsDialog', () => {
  const columnNames = ['b', 'a', 'c']
  // Displays as b, a, c (identity indices 0, 1, 2)
  const columnOrder = [0, 1, 2]
  const jsonSchema: JSONSchema7 = {
    properties: {
      a: { type: 'string' },
      b: { type: 'string' },
      c: { type: 'string' },
    },
  }

  function getListItemNames() {
    return screen
      .getAllByRole('listitem')
      .map(item => within(item).getByText(/^[abc]$/).textContent)
  }

  it('renders columns in the given display order', () => {
    render(
      <ReorderColumnsDialog
        open
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onSave={vi.fn()}
        onCancel={vi.fn()}
      />,
    )

    expect(getListItemNames()).toEqual(['b', 'a', 'c'])
  })

  it('disables the first row up button and the last row down button', () => {
    render(
      <ReorderColumnsDialog
        open
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onSave={vi.fn()}
        onCancel={vi.fn()}
      />,
    )

    expect(screen.getByRole('button', { name: 'Move b up' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Move c down' })).toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'Move b down' }),
    ).not.toBeDisabled()
    expect(screen.getByRole('button', { name: 'Move c up' })).not.toBeDisabled()
  })

  it('moves a column down and saves the new order', async () => {
    const user = userEvent.setup()
    const onSave = vi.fn()
    render(
      <ReorderColumnsDialog
        open
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onSave={onSave}
        onCancel={vi.fn()}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Move b down' }))
    expect(getListItemNames()).toEqual(['a', 'b', 'c'])

    await user.click(screen.getByRole('button', { name: 'Save' }))
    expect(onSave).toHaveBeenCalledWith([1, 0, 2])
  })

  it('calls onCancel when Cancel is clicked, without calling onSave', async () => {
    const user = userEvent.setup()
    const onCancel = vi.fn()
    const onSave = vi.fn()
    render(
      <ReorderColumnsDialog
        open
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onSave={onSave}
        onCancel={onCancel}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onSave).not.toHaveBeenCalled()
  })

  it('resets to the schema-defined default order and disables itself once matched', async () => {
    const user = userEvent.setup()
    render(
      <ReorderColumnsDialog
        open
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onSave={vi.fn()}
        onCancel={vi.fn()}
      />,
    )

    const resetButton = screen.getByRole('button', {
      name: 'Reset to Default Order',
    })
    expect(resetButton).not.toBeDisabled()

    await user.click(resetButton)

    expect(getListItemNames()).toEqual(['a', 'b', 'c'])
    expect(resetButton).toBeDisabled()
  })

  it('moves upsert key columns to the front when reset to the default order', async () => {
    const user = userEvent.setup()
    render(
      <ReorderColumnsDialog
        open
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        upsertKey={['c']}
        onSave={vi.fn()}
        onCancel={vi.fn()}
      />,
    )

    await user.click(
      screen.getByRole('button', { name: 'Reset to Default Order' }),
    )

    expect(getListItemNames()).toEqual(['c', 'a', 'b'])
  })

  it('does not show remove buttons when canRemoveColumns is not set', () => {
    render(
      <ReorderColumnsDialog
        open
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onSave={vi.fn()}
        onCancel={vi.fn()}
      />,
    )

    expect(
      screen.queryByRole('button', { name: 'Remove b' }),
    ).not.toBeInTheDocument()
  })

  it('removes a column from the working order and saves without it', async () => {
    const user = userEvent.setup()
    const onSave = vi.fn()
    render(
      <ReorderColumnsDialog
        open
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        canRemoveColumns
        onSave={onSave}
        onCancel={vi.fn()}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Remove a' }))
    expect(getListItemNames()).toEqual(['b', 'c'])

    await user.click(screen.getByRole('button', { name: 'Save' }))
    expect(onSave).toHaveBeenCalledWith([0, 2])
  })

  it('disables removing the last remaining column', async () => {
    const user = userEvent.setup()
    render(
      <ReorderColumnsDialog
        open
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        canRemoveColumns
        onSave={vi.fn()}
        onCancel={vi.fn()}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Remove b' }))
    await user.click(screen.getByRole('button', { name: 'Remove a' }))

    expect(screen.getByRole('button', { name: 'Remove c' })).toBeDisabled()
  })
})
