import { Stack, TextField, Typography } from '@mui/material'
import { RJSFSchema, UiSchema } from '@rjsf/utils'

type FormFieldJsonEditorProps = {
  jsonSchema: RJSFSchema
  uiSchema: UiSchema
  onJsonSchemaChange: (schema: RJSFSchema) => void
  onUiSchemaChange: (uiSchema: UiSchema) => void
  jsonSchemaError: string | null
  uiSchemaError: string | null
}

export function FormFieldJsonEditor({
  jsonSchema,
  uiSchema,
  onJsonSchemaChange,
  onUiSchemaChange,
  jsonSchemaError,
  uiSchemaError,
}: FormFieldJsonEditorProps) {
  const handleJsonSchemaChange = (value: string) => {
    try {
      const parsed = JSON.parse(value)
      onJsonSchemaChange(parsed)
    } catch {
      // Let the parent handle the error via the error prop
      // We still call the change handler with the raw text for display purposes
    }
  }

  const handleUiSchemaChange = (value: string) => {
    try {
      const parsed = JSON.parse(value)
      onUiSchemaChange(parsed)
    } catch {
      // Same as above
    }
  }

  return (
    <Stack spacing={2.5}>
      <Typography variant="subtitle2" color="text.secondary">
        Advanced JSON Editor
      </Typography>

      <TextField
        label="JSON Schema Definition"
        value={JSON.stringify(jsonSchema, null, 2)}
        onChange={e => handleJsonSchemaChange(e.target.value)}
        error={!!jsonSchemaError}
        helperText={
          jsonSchemaError ?? 'Define the field using JSON Schema syntax.'
        }
        multiline
        rows={10}
        fullWidth
        slotProps={{
          input: {
            sx: { fontFamily: 'monospace', fontSize: '0.85rem' },
          },
        }}
      />

      <TextField
        label="UI Schema Definition"
        value={JSON.stringify(uiSchema, null, 2)}
        onChange={e => handleUiSchemaChange(e.target.value)}
        error={!!uiSchemaError}
        helperText={
          uiSchemaError ??
          'Customize the appearance of this field using RJSF UI Schema.'
        }
        multiline
        rows={6}
        fullWidth
        slotProps={{
          input: {
            sx: { fontFamily: 'monospace', fontSize: '0.85rem' },
          },
        }}
      />
    </Stack>
  )
}
