import { TextField } from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { useEffect, useState } from 'react'

type JsonSchemaBodyEditorProps = {
  value: RJSFSchema
  onChange: (next: RJSFSchema) => void
}

/**
 * Raw JSON Schema editor — a textarea with parse-error feedback. Surfaced
 * behind an "Advanced" disclosure for power users. Day-to-day field editing
 * happens in the FieldLibrary + FieldDefinitionDrawer.
 */
export function JsonSchemaBodyEditor({
  value,
  onChange,
}: JsonSchemaBodyEditorProps) {
  const [text, setText] = useState(() => JSON.stringify(value, null, 2))
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setText(JSON.stringify(value, null, 2))
  }, [value])

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
