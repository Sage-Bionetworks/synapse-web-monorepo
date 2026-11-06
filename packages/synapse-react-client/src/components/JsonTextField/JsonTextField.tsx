import { TextField, TextFieldProps } from '@mui/material'
import { ReactNode, useState } from 'react'

export type JsonTextFieldProps = {
  label: ReactNode
  /** Read only on mount; remount with a new `key` to load a different value. */
  value: unknown
  /** Called with the parsed value whenever the text is valid JSON (or `undefined` when empty and `allowEmpty`). */
  onChange: (next: unknown) => void
  /** Called whenever the text switches between valid and invalid, so a parent can block submission. */
  onValidityChange?: (isValid: boolean) => void
  /** If true, clearing the text is valid and reports `undefined`. */
  allowEmpty?: boolean
  helperText?: ReactNode
  rows?: number
} & Pick<TextFieldProps, 'required' | 'disabled' | 'placeholder'>

/**
 * Edits an arbitrary JSON value as raw, pretty-printed JSON text, showing the parse error while the text is invalid.
 */
export function JsonTextField({
  label,
  value,
  onChange,
  onValidityChange,
  allowEmpty = false,
  helperText = ' ',
  rows = 14,
  ...textFieldProps
}: JsonTextFieldProps) {
  const [text, setText] = useState(() =>
    value === undefined ? '' : JSON.stringify(value, null, 2),
  )
  const [error, setError] = useState<string | null>(null)

  const updateError = (nextError: string | null) => {
    setError(nextError)
    onValidityChange?.(nextError === null)
  }

  const handleChange = (next: string) => {
    setText(next)
    if (allowEmpty && next.trim() === '') {
      updateError(null)
      onChange(undefined)
      return
    }
    try {
      const parsed: unknown = JSON.parse(next)
      updateError(null)
      onChange(parsed)
    } catch (e) {
      updateError(e instanceof Error ? e.message : 'Invalid JSON')
    }
  }

  return (
    <TextField
      {...textFieldProps}
      label={label}
      value={text}
      onChange={e => handleChange(e.target.value)}
      error={!!error}
      helperText={error ?? helperText}
      multiline
      rows={rows}
      fullWidth
      slotProps={{
        input: {
          sx: { fontFamily: 'monospace', fontSize: '0.85rem' },
        },
      }}
    />
  )
}
