import {
  FormField,
  FormStep,
  PreFillScope,
  SubmissionContext,
} from '@/utils/types/AccessRequirementFormTypes'
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import { useCallback, useState } from 'react'
import { FormFieldJsonEditor } from './FormFieldJsonEditor'
import { FormFieldPreview } from './FormFieldPreview'
import { FormFieldVisualBuilder } from './FormFieldVisualBuilder'
import {
  VisualFieldConfig,
  fieldConfigToJsonSchema,
  fieldConfigToUiSchema,
  getDefaultVisualConfig,
  jsonSchemaToFieldConfig,
} from './formFieldEditorUtils'

export type FormFieldEditorProps = {
  /** Existing field to edit, or undefined for creating a new field. */
  initialField?: FormField
  /** Available form steps. */
  formSteps: FormStep[]
  /** Called when the user saves the field. */
  onSave: (field: Partial<FormField>) => void
  /** Called when the user cancels editing. */
  onCancel?: () => void
}

type EditorMode = 'visual' | 'json'

export function FormFieldEditor({
  initialField,
  formSteps,
  onSave,
  onCancel,
}: FormFieldEditorProps) {
  const [mode, setMode] = useState<EditorMode>('visual')

  // JSON Schema and uiSchema are the source of truth
  const [jsonSchema, setJsonSchema] = useState<RJSFSchema>(
    initialField?.schemaDefinition ?? {},
  )
  const [uiSchema, setUiSchema] = useState<UiSchema>(
    initialField?.uiDefinition ?? {},
  )
  const [jsonSchemaError, setJsonSchemaError] = useState<string | null>(null)
  const [uiSchemaError, setUiSchemaError] = useState<string | null>(null)

  // Visual builder config (derived from schema, updated when visual mode changes)
  const [visualConfig, setVisualConfig] = useState<VisualFieldConfig>(() =>
    initialField
      ? jsonSchemaToFieldConfig(
          initialField.schemaDefinition,
          initialField.uiDefinition,
        )
      : getDefaultVisualConfig(),
  )

  // Metadata fields (stored on FormField, not on the schema)
  const [metadata, setMetadata] = useState({
    name: initialField?.name ?? '',
    stepId: initialField?.stepId ?? null,
    orderWeight: initialField?.orderWeight ?? 10,
    preFillScope: initialField?.preFillScope ?? PreFillScope.RENEWAL,
    submissionContext:
      initialField?.submissionContext ?? SubmissionContext.ALWAYS,
  })

  // When visual config changes, update the JSON Schema and uiSchema
  const handleVisualConfigChange = useCallback((config: VisualFieldConfig) => {
    setVisualConfig(config)
    setJsonSchema(fieldConfigToJsonSchema(config))
    setUiSchema(fieldConfigToUiSchema(config))
    setJsonSchemaError(null)
    setUiSchemaError(null)
  }, [])

  // When JSON Schema changes directly (advanced mode)
  const handleJsonSchemaChange = useCallback((schema: RJSFSchema) => {
    setJsonSchema(schema)
    setJsonSchemaError(null)
    // Sync visual config from the new schema
    setVisualConfig(prev => {
      try {
        return jsonSchemaToFieldConfig(schema, uiSchema)
      } catch {
        return prev
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUiSchemaChange = useCallback((newUiSchema: UiSchema) => {
    setUiSchema(newUiSchema)
    setUiSchemaError(null)
  }, [])

  const handleModeChange = (
    _: React.MouseEvent<HTMLElement>,
    newMode: EditorMode | null,
  ) => {
    if (newMode) {
      setMode(newMode)
    }
  }

  const handleSave = () => {
    onSave({
      ...initialField,
      name: metadata.name,
      schemaDefinition: jsonSchema,
      uiDefinition: uiSchema,
      stepId: metadata.stepId,
      orderWeight: metadata.orderWeight,
      preFillScope: metadata.preFillScope,
      submissionContext: metadata.submissionContext,
    })
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="h6">
          {initialField ? 'Edit Form Field' : 'Create New Form Field'}
        </Typography>
        <ToggleButtonGroup
          value={mode}
          exclusive
          onChange={handleModeChange}
          size="small"
        >
          <ToggleButton value="visual">Visual</ToggleButton>
          <ToggleButton value="json">Advanced</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={3}>
        {/* Editor panel */}
        <Grid size={{ xs: 12, md: 7 }}>
          {mode === 'visual' ? (
            <FormFieldVisualBuilder
              config={visualConfig}
              onChange={handleVisualConfigChange}
              formSteps={formSteps}
              metadata={metadata}
              onMetadataChange={setMetadata}
            />
          ) : (
            <FormFieldJsonEditor
              jsonSchema={jsonSchema}
              uiSchema={uiSchema}
              onJsonSchemaChange={handleJsonSchemaChange}
              onUiSchemaChange={handleUiSchemaChange}
              jsonSchemaError={jsonSchemaError}
              uiSchemaError={uiSchemaError}
            />
          )}
        </Grid>

        {/* Preview panel */}
        <Grid size={{ xs: 12, md: 5 }}>
          <FormFieldPreview jsonSchema={jsonSchema} uiSchema={uiSchema} />
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        {onCancel && (
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!metadata.name}
        >
          {initialField ? 'Save Changes' : 'Create Field'}
        </Button>
      </Box>
    </Paper>
  )
}
