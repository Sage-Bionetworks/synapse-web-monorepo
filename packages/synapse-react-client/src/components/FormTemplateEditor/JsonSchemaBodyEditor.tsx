import { TextField } from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { useState } from 'react'

type JsonSchemaBodyEditorProps = {
  value: RJSFSchema
  onChange: (next: RJSFSchema) => void
}

/**
 * Edits a JSON Schema as raw JSON. Calls `onChange` only when the text parses; otherwise shows
 * the parse error. `value` is read only on mount, so remount with a new `key` to load a
 * different schema.
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
