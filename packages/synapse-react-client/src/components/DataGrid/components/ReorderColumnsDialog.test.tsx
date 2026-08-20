import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JSONSchema7 } from 'json-schema'
import ReorderColumnsDialog from './ReorderColumnsDialog'

function getListItemNames() {
  return screen.getAllByRole('listitem').map(item => {
    const upButton = within(item).getByRole('button', {
      name: /^Move .+ up$/,
    })
    return upButton.getAttribute('aria-label')!.replace(/^Move (.+) up$/, '$1')
  })
}

describe('ReorderColumnsDialog', () => {
  // 'extra' is not defined in the schema below -- it's the only column removable by default
  const columnNames = ['b', 'a', 'c', 'extra']
  // Displays as b, a, c, extra (identity indices 0, 1, 2, 3)
  const columnOrder = [0, 1, 2, 3]
  const jsonSchema: JSONSchema7 = {
    properties: {
      a: { type: 'string' },
      b: { type: 'string' },
      c: { type: 'string' },
    },
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

    expect(getListItemNames()).toEqual(['b', 'a', 'c', 'extra'])
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
    expect(
      screen.getByRole('button', { name: 'Move extra down' }),
    ).toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'Move b down' }),
    ).not.toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'Move extra up' }),
    ).not.toBeDisabled()
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
    expect(getListItemNames()).toEqual(['a', 'b', 'c', 'extra'])

    await user.click(screen.getByRole('button', { name: 'Save' }))
    expect(onSave).toHaveBeenCalledWith([1, 0, 2, 3])
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

    expect(getListItemNames()).toEqual(['a', 'b', 'c', 'extra'])
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

    expect(getListItemNames()).toEqual(['c', 'a', 'b', 'extra'])
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
      screen.queryByRole('button', { name: 'Remove extra' }),
    ).not.toBeInTheDocument()
  })

  it('does not show a remove button for columns that are part of the schema', () => {
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

    expect(
      screen.queryByRole('button', { name: 'Remove a' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Remove b' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Remove c' }),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Remove extra' }),
    ).toBeInTheDocument()
  })

  it('marks a non-schema column removed without taking it out of the list, and saves without it', async () => {
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

    await user.click(screen.getByRole('button', { name: 'Remove extra' }))
    // The column stays in the list -- it's marked removed, not deleted from view
    expect(getListItemNames()).toEqual(['b', 'a', 'c', 'extra'])
    expect(
      screen.queryByRole('button', { name: 'Remove extra' }),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Restore extra' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Save' }))
    expect(onSave).toHaveBeenCalledWith([0, 1, 2])
  })

  it('disables the move buttons for a removed column', async () => {
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

    await user.click(screen.getByRole('button', { name: 'Remove extra' }))

    expect(screen.getByRole('button', { name: 'Move extra up' })).toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'Move extra down' }),
    ).toBeDisabled()
  })

  it('restores a removed column, saving with it included again', async () => {
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

    await user.click(screen.getByRole('button', { name: 'Remove extra' }))
    await user.click(screen.getByRole('button', { name: 'Restore extra' }))

    expect(
      screen.getByRole('button', { name: 'Remove extra' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Save' }))
    expect(onSave).toHaveBeenCalledWith([0, 1, 2, 3])
  })

  it('resetting to the default order also restores all removed columns', async () => {
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

    await user.click(screen.getByRole('button', { name: 'Remove extra' }))
    await user.click(
      screen.getByRole('button', { name: 'Reset to Default Order' }),
    )

    expect(
      screen.queryByRole('button', { name: 'Restore extra' }),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Remove extra' }),
    ).toBeInTheDocument()
  })

  describe('a column removed and saved in a previous session', () => {
    // 'a' (identity index 1) was removed and saved previously (before this restriction
    // existed), so it's already absent from columnOrder by the time the dialog is reopened.
    const columnOrderMissingA = [0, 2, 3]

    it('surfaces the previously removed column, greyed out with a Restore button', () => {
      render(
        <ReorderColumnsDialog
          open
          columnNames={columnNames}
          columnOrder={columnOrderMissingA}
          jsonSchema={jsonSchema}
          canRemoveColumns
          onSave={vi.fn()}
          onCancel={vi.fn()}
        />,
      )

      expect(getListItemNames()).toEqual(['b', 'c', 'extra', 'a'])
      expect(
        screen.getByRole('button', { name: 'Restore a' }),
      ).toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: 'Remove a' }),
      ).not.toBeInTheDocument()
    })

    it('restores it into the saved order when Restore is clicked', async () => {
      const user = userEvent.setup()
      const onSave = vi.fn()
      render(
        <ReorderColumnsDialog
          open
          columnNames={columnNames}
          columnOrder={columnOrderMissingA}
          jsonSchema={jsonSchema}
          canRemoveColumns
          onSave={onSave}
          onCancel={vi.fn()}
        />,
      )

      await user.click(screen.getByRole('button', { name: 'Restore a' }))
      await user.click(screen.getByRole('button', { name: 'Save' }))

      expect(onSave).toHaveBeenCalledWith([0, 2, 3, 1])
    })

    it('does not offer to remove it again after being restored, since it is a schema column', async () => {
      const user = userEvent.setup()
      render(
        <ReorderColumnsDialog
          open
          columnNames={columnNames}
          columnOrder={columnOrderMissingA}
          jsonSchema={jsonSchema}
          canRemoveColumns
          onSave={vi.fn()}
          onCancel={vi.fn()}
        />,
      )

      await user.click(screen.getByRole('button', { name: 'Restore a' }))

      expect(
        screen.queryByRole('button', { name: 'Remove a' }),
      ).not.toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Move a up' })).toBeEnabled()
    })

    it('does not surface it when canRemoveColumns is not set', () => {
      render(
        <ReorderColumnsDialog
          open
          columnNames={columnNames}
          columnOrder={columnOrderMissingA}
          jsonSchema={jsonSchema}
          onSave={vi.fn()}
          onCancel={vi.fn()}
        />,
      )

      expect(getListItemNames()).toEqual(['b', 'c', 'extra'])
    })
  })

  describe('when no columns are part of the schema', () => {
    const noSchemaColumnNames = ['x', 'y']
    const noSchemaColumnOrder = [0, 1]

    it('allows removing any column', () => {
      render(
        <ReorderColumnsDialog
          open
          columnNames={noSchemaColumnNames}
          columnOrder={noSchemaColumnOrder}
          jsonSchema={undefined}
          canRemoveColumns
          onSave={vi.fn()}
          onCancel={vi.fn()}
        />,
      )

      expect(
        screen.getByRole('button', { name: 'Remove x' }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: 'Remove y' }),
      ).toBeInTheDocument()
    })

    it('disables removing the last remaining active column', async () => {
      const user = userEvent.setup()
      render(
        <ReorderColumnsDialog
          open
          columnNames={noSchemaColumnNames}
          columnOrder={noSchemaColumnOrder}
          jsonSchema={undefined}
          canRemoveColumns
          onSave={vi.fn()}
          onCancel={vi.fn()}
        />,
      )

      await user.click(screen.getByRole('button', { name: 'Remove x' }))

      expect(screen.getByRole('button', { name: 'Remove y' })).toBeDisabled()
    })
  })
})
