import { RJSFSchema } from '@rjsf/utils'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useState } from 'react'
import { JsonSchemaBodyEditor } from './JsonSchemaBodyEditor'

/** Mirrors how a real consumer holds the schema: state updated by `onChange`. */
function Harness({ initialValue }: { initialValue: RJSFSchema }) {
  const [value, setValue] = useState<RJSFSchema>(initialValue)
  return <JsonSchemaBodyEditor value={value} onChange={setValue} />
}

describe('JsonSchemaBodyEditor', () => {
  it('renders the initial value as pretty-printed JSON', () => {
    render(<Harness initialValue={{ type: 'object' }} />)
    const textarea = screen.getByLabelText(
      'Raw JSON Schema',
    ) as HTMLTextAreaElement
    expect(textarea.value).toBe(JSON.stringify({ type: 'object' }, null, 2))
  })

  it('calls onChange with the parsed value when the text is valid JSON', () => {
    const onChange = vi.fn()
    render(
      <JsonSchemaBodyEditor value={{ type: 'object' }} onChange={onChange} />,
    )
    const textarea = screen.getByLabelText('Raw JSON Schema')
    fireEvent.change(textarea, {
      target: { value: '{"type": "string"}' },
    })
    expect(onChange).toHaveBeenCalledWith({ type: 'string' })
  })

  it('shows a parse error and does not call onChange for invalid JSON', () => {
    const onChange = vi.fn()
    render(
      <JsonSchemaBodyEditor value={{ type: 'object' }} onChange={onChange} />,
    )
    const textarea = screen.getByLabelText('Raw JSON Schema')
    fireEvent.change(textarea, { target: { value: '{ not json' } })
    expect(onChange).not.toHaveBeenCalled()
    expect(screen.getByLabelText('Raw JSON Schema')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
  })

  it('keeps the exact text the user typed after a keystroke round-trips through onChange, instead of re-stringifying it', () => {
    // Regression: an earlier version resynced `text` from `value` on every prop change, so the
    // parent committing `onChange`'s parsed result (a fresh object) clobbered in-progress
    // whitespace/newlines and would move the caret.
    render(<Harness initialValue={{ type: 'object' }} />)
    const textarea = screen.getByLabelText(
      'Raw JSON Schema',
    ) as HTMLTextAreaElement
    const typedWithTrailingWhitespace = `${JSON.stringify({ type: 'object' }, null, 2)}\n\n`
    fireEvent.change(textarea, {
      target: { value: typedWithTrailingWhitespace },
    })
    expect(textarea.value).toBe(typedWithTrailingWhitespace)
  })

  it('recovers from an error once the text becomes valid JSON again', async () => {
    const onChange = vi.fn()
    render(
      <JsonSchemaBodyEditor value={{ type: 'object' }} onChange={onChange} />,
    )
    const textarea = screen.getByLabelText('Raw JSON Schema')
    fireEvent.change(textarea, { target: { value: '{ not json' } })
    expect(screen.getByLabelText('Raw JSON Schema')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
    fireEvent.change(textarea, { target: { value: '{"type": "boolean"}' } })
    await waitFor(() =>
      expect(screen.getByLabelText('Raw JSON Schema')).toHaveAttribute(
        'aria-invalid',
        'false',
      ),
    )
    expect(onChange).toHaveBeenCalledWith({ type: 'boolean' })
  })
})
