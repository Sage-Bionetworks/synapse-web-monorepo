import { FormTemplateField } from '@sage-bionetworks/synapse-client'
import { RJSFSchema } from '@rjsf/utils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepFieldRow } from './StepFieldRow'

const textProperty: RJSFSchema = { type: 'string', title: 'Institution' }
const fileProperty: RJSFSchema = { format: 'synapse-filehandle-id' }

const baseField: FormTemplateField = {
  schemaPath: '/institution',
  uiDefinition: null,
}

function renderRow(
  overrides: Partial<Parameters<typeof StepFieldRow>[0]> = {},
) {
  const onChange = vi.fn()
  const onMoveUp = vi.fn()
  const onMoveDown = vi.fn()
  const onRemove = vi.fn()
  render(
    <StepFieldRow
      sortableId="slot:0:0"
      sortableIndex={0}
      sortableGroup="step:0"
      field={baseField}
      resolvedProperty={textProperty}
      context="ALWAYS"
      propertyKey="institution"
      isFirst={false}
      isLast={false}
      onChange={onChange}
      onMoveUp={onMoveUp}
      onMoveDown={onMoveDown}
      onRemove={onRemove}
      {...overrides}
    />,
  )
  return { onChange, onMoveUp, onMoveDown, onRemove }
}

describe('StepFieldRow', () => {
  it('shows the resolved property title and type', () => {
    renderRow()
    expect(screen.getByText('Institution')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
  })

  it('flags an unresolved slot with the schema path', () => {
    renderRow({ resolvedProperty: undefined })
    expect(screen.getByText('Missing field: /institution')).toBeInTheDocument()
  })

  it('appends the submission context when not ALWAYS, and Public when set', () => {
    renderRow({
      context: 'RENEWAL_ONLY',
      field: { ...baseField, isPublic: true },
    })
    expect(screen.getByText('Text · Renewal only · Public')).toBeInTheDocument()
  })

  it('omits the context segment for ALWAYS fields', () => {
    renderRow({ context: 'ALWAYS' })
    expect(screen.getByText('Text')).toBeInTheDocument()
  })

  it('toggles the expand/collapse label and reveals the file-handle field only for file fields', async () => {
    const user = userEvent.setup()
    renderRow({ resolvedProperty: fileProperty })
    expect(
      screen.queryByLabelText('Template file handle ID'),
    ).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Expand field' }))
    expect(screen.getByLabelText('Template file handle ID')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Collapse field' }),
    ).toBeInTheDocument()
  })

  it('does not render the file-handle field for non-file types', async () => {
    const user = userEvent.setup()
    renderRow()
    await user.click(screen.getByRole('button', { name: 'Expand field' }))
    expect(
      screen.queryByLabelText('Template file handle ID'),
    ).not.toBeInTheDocument()
  })

  it('coerces an empty file handle id to undefined instead of an empty string', async () => {
    const user = userEvent.setup()
    const { onChange } = renderRow({
      resolvedProperty: fileProperty,
      field: { ...baseField, templateFileHandleId: '123' },
    })
    await user.click(screen.getByRole('button', { name: 'Expand field' }))
    const input = screen.getByLabelText('Template file handle ID')
    await user.clear(input)
    expect(onChange).toHaveBeenCalledWith({ templateFileHandleId: undefined })
  })

  it('disables move-up on the first row and move-down on the last row', () => {
    renderRow({ isFirst: true, isLast: true })
    expect(screen.getByRole('button', { name: 'Move field up' })).toBeDisabled()
    expect(
      screen.getByRole('button', { name: 'Move field down' }),
    ).toBeDisabled()
  })

  it('invokes the move and remove callbacks', async () => {
    const user = userEvent.setup()
    const { onMoveUp, onMoveDown, onRemove } = renderRow()
    await user.click(screen.getByRole('button', { name: 'Move field up' }))
    await user.click(screen.getByRole('button', { name: 'Move field down' }))
    await user.click(
      screen.getByRole('button', { name: 'Remove field from step' }),
    )
    expect(onMoveUp).toHaveBeenCalledTimes(1)
    expect(onMoveDown).toHaveBeenCalledTimes(1)
    expect(onRemove).toHaveBeenCalledTimes(1)
  })

  it('exposes the drag handle to assistive technology as a focusable, labeled control', async () => {
    const user = userEvent.setup()
    renderRow()
    await user.tab()
    expect(
      screen.getByRole('button', { name: 'Drag to reorder field' }),
    ).toHaveFocus()
  })
})
