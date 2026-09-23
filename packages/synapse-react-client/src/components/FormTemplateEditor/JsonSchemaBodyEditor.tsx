import { TextField } from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { useState } from 'react'

type JsonSchemaBodyEditorProps = {
  value: RJSFSchema
  onChange: (next: RJSFSchema) => void
}

/**
 * Raw JSON Schema editor -- a textarea with parse-error feedback. Surfaced behind an "Advanced"
 * disclosure for power users. Day-to-day field editing happens in the FieldLibrary +
 * FieldDefinitionDrawer.
 *
 * Local `text` is the source of truth while mounted -- it is never resynced from `value`, so a
 * round-tripped `onChange` (parent re-stringifies, or reformats) can't clobber in-progress
 * whitespace/newlines or move the caret. A consumer switching to a genuinely different schema
 * should remount with a stable `key` (e.g. the field's property key).
 */
export function JsonSchemaBodyEditor({
  value,
  onChange,
}: JsonSchemaBodyEditorProps) {
  const [text, setText] = useState(() => JSON.stringify(value, null, 2))
  const [error, setError] = useState<string | null>(null)

  const handleChange = (next: string) => {
    setText(next)
    try {
      const parsed = JSON.parse(next)
      setError(null)
      onChange(parsed)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid JSON')
    }
  }

  return (
    <TextField
      label="Raw JSON Schema"
      value={text}
      onChange={e => handleChange(e.target.value)}
      error={!!error}
      helperText={error ?? ' '}
      multiline
      rows={14}
      fullWidth
      slotProps={{
        input: {
          sx: { fontFamily: 'monospace', fontSize: '0.85rem' },
        },
      }}
    />
  )
}
