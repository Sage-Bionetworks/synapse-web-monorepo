import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { Box, Paper, Typography } from '@mui/material'
import { RJSFSchema, UiSchema } from '@rjsf/utils'

type FormFieldPreviewProps = {
  jsonSchema: RJSFSchema
  uiSchema: UiSchema
}

export function FormFieldPreview({
  jsonSchema,
  uiSchema,
}: FormFieldPreviewProps) {
  const hasProperties =
    jsonSchema.type || jsonSchema.title || jsonSchema.description

  return (
    <Paper
      className="JsonSchemaFormContainer"
      variant="outlined"
      sx={{ p: 2, height: '100%' }}
    >
      <Typography variant="subtitle2" gutterBottom color="text.secondary">
        Live Preview
      </Typography>
      {hasProperties ? (
        <JsonSchemaForm
          schema={{
            type: 'object',
            properties: {
              preview: jsonSchema,
            },
          }}
          uiSchema={{
            preview: uiSchema,
          }}
          formContext={{ descriptionVariant: 'inline' }}
          // Disable submit button and form actions
          children={<></>}
          liveValidate={false}
        />
      ) : (
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Configure a field to see a preview
          </Typography>
        </Box>
      )}
    </Paper>
  )
}
