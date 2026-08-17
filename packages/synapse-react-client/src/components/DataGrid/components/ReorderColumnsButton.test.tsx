import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JSONSchema7 } from 'json-schema'
import ReorderColumnsButton from './ReorderColumnsButton'

describe('ReorderColumnsButton', () => {
  const columnNames = ['a', 'b']
  const columnOrder = [0, 1]
  const jsonSchema: JSONSchema7 = {
    properties: {
      a: { type: 'string' },
      b: { type: 'string' },
    },
  }

  it('does not show the dialog initially', () => {
    render(
      <ReorderColumnsButton
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onReorder={vi.fn()}
      />,
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the dialog when the button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <ReorderColumnsButton
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onReorder={vi.fn()}
      />,
    )

    await user.click(screen.getByRole('button', { name: /reorder columns/i }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('calls onReorder and closes the dialog when Save is clicked', async () => {
    const user = userEvent.setup()
    const onReorder = vi.fn()
    render(
      <ReorderColumnsButton
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onReorder={onReorder}
      />,
    )

    await user.click(screen.getByRole('button', { name: /reorder columns/i }))
    await user.click(screen.getByRole('button', { name: 'Move a down' }))
    await user.click(screen.getByRole('button', { name: 'Save' }))

    expect(onReorder).toHaveBeenCalledWith([1, 0])
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the dialog without calling onReorder when Cancel is clicked', async () => {
    const user = userEvent.setup()
    const onReorder = vi.fn()
    render(
      <ReorderColumnsButton
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onReorder={onReorder}
      />,
    )

    await user.click(screen.getByRole('button', { name: /reorder columns/i }))
    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(onReorder).not.toHaveBeenCalled()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('disables the button when there are fewer than 2 columns', () => {
    render(
      <ReorderColumnsButton
        columnNames={['a']}
        columnOrder={[0]}
        jsonSchema={jsonSchema}
        onReorder={vi.fn()}
      />,
    )

    expect(
      screen.getByRole('button', { name: /reorder columns/i }),
    ).toBeDisabled()
  })

  it('does not show remove buttons when canRemoveColumns is not set', async () => {
    const user = userEvent.setup()
    render(
      <ReorderColumnsButton
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        onReorder={vi.fn()}
      />,
    )

    await user.click(screen.getByRole('button', { name: /reorder columns/i }))

    expect(
      screen.queryByRole('button', { name: 'Remove a' }),
    ).not.toBeInTheDocument()
  })

  it('shows remove buttons and removes a column when canRemoveColumns is true', async () => {
    const user = userEvent.setup()
    const onReorder = vi.fn()
    render(
      <ReorderColumnsButton
        columnNames={columnNames}
        columnOrder={columnOrder}
        jsonSchema={jsonSchema}
        canRemoveColumns
        onReorder={onReorder}
      />,
    )

    await user.click(screen.getByRole('button', { name: /reorder columns/i }))
    await user.click(screen.getByRole('button', { name: 'Remove a' }))
    await user.click(screen.getByRole('button', { name: 'Save' }))

    expect(onReorder).toHaveBeenCalledWith([1])
  })
})
