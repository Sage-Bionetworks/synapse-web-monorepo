import {
  FormTemplate,
  FormTemplateField,
  FormTemplateStep,
  SubmissionContext,
} from '@/utils/types/AccessRequirementFormTypes'
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  ArrowDownward as DownIcon,
  ArrowUpward as UpIcon,
} from '@mui/icons-material'
import { RJSFSchema } from '@rjsf/utils'
import { useCallback, useMemo, useState } from 'react'
import { FormTemplatePreview } from './FormTemplatePreview'
import { JsonSchemaBodyEditor } from './JsonSchemaBodyEditor'
import { listSchemaProperties, moveItem, normalizePointer } from './utils'

/**
 * The new design treats the JSON Schema and the FormTemplate as separate API
 * objects, but ACT edits both in a single UI. This editor surfaces both so
 * the caller can persist the schema (to the schema registry) and the template
 * (to the form template service) in one save action.
 */
export type FormTemplateEditorSaveValue = {
  template: Partial<FormTemplate>
  /** The current JSON Schema body that the template's `schemaRef` resolves to. */
  jsonSchema: RJSFSchema
}

export type FormTemplateEditorProps = {
  /** Existing template to edit, or undefined for creating a new one. */
  initialTemplate?: FormTemplate
  /**
   * The JSON Schema body the template's `schemaRef` resolves to. Required
   * when editing an existing template.
   */
  initialJsonSchema?: RJSFSchema
  onSave: (value: FormTemplateEditorSaveValue) => void
  onCancel?: () => void
}

const EMPTY_SCHEMA: RJSFSchema = {
  $id: '',
  type: 'object',
  properties: {},
  required: [],
}

const EMPTY_STEP: FormTemplateStep = {
  title: 'New Step',
  description: '',
  fields: [],
}

export function FormTemplateEditor({
  initialTemplate,
  initialJsonSchema,
  onSave,
  onCancel,
}: FormTemplateEditorProps) {
  const [name, setName] = useState(initialTemplate?.name ?? '')
  const [jsonSchema, setJsonSchema] = useState<RJSFSchema>(
    initialJsonSchema ?? { ...EMPTY_SCHEMA },
  )
  const [steps, setSteps] = useState<FormTemplateStep[]>(
    initialTemplate?.steps ?? [{ ...EMPTY_STEP, fields: [] }],
  )

  const propertyOptions = useMemo(
    () => listSchemaProperties(jsonSchema),
    [jsonSchema],
  )

  const usedPaths = useMemo(() => {
    const paths = new Set<string>()
    for (const step of steps) {
      for (const f of step.fields) {
        if (f.schemaPath) paths.add(f.schemaPath)
      }
    }
    return paths
  }, [steps])

  const unboundProperties = useMemo(
    () => propertyOptions.filter(p => !usedPaths.has(`/${p.propertyName}`)),
    [propertyOptions, usedPaths],
  )

  const handleStepChange = useCallback(
    (idx: number, patch: Partial<FormTemplateStep>) => {
      setSteps(prev => prev.map((s, i) => (i === idx ? { ...s, ...patch } : s)))
    },
    [],
  )

  const handleAddStep = () => {
    setSteps(prev => [...prev, { ...EMPTY_STEP, fields: [] }])
  }

  const handleRemoveStep = (idx: number) => {
    setSteps(prev => prev.filter((_, i) => i !== idx))
  }

  const handleMoveStep = (idx: number, direction: -1 | 1) => {
    setSteps(prev => moveItem(prev, idx, direction))
  }

  const handleAddField = (stepIdx: number, schemaPath: string) => {
    const path = normalizePointer(schemaPath)
    const newField: FormTemplateField = {
      schemaPath: path,
      uiDefinition: {},
      submissionContext: SubmissionContext.ALWAYS,
    }
    setSteps(prev =>
      prev.map((s, i) =>
        i === stepIdx ? { ...s, fields: [...s.fields, newField] } : s,
      ),
    )
  }

  const handleFieldChange = (
    stepIdx: number,
    fieldIdx: number,
    patch: Partial<FormTemplateField>,
  ) => {
    setSteps(prev =>
      prev.map((s, i) => {
        if (i !== stepIdx) return s
        return {
          ...s,
          fields: s.fields.map((f, j) =>
            j === fieldIdx ? { ...f, ...patch } : f,
          ),
        }
      }),
    )
  }

  const handleRemoveField = (stepIdx: number, fieldIdx: number) => {
    setSteps(prev =>
      prev.map((s, i) =>
        i === stepIdx
          ? { ...s, fields: s.fields.filter((_, j) => j !== fieldIdx) }
          : s,
      ),
    )
  }

  const handleMoveField = (
    stepIdx: number,
    fieldIdx: number,
    direction: -1 | 1,
  ) => {
    setSteps(prev =>
      prev.map((s, i) =>
        i === stepIdx
          ? { ...s, fields: moveItem(s.fields, fieldIdx, direction) }
          : s,
      ),
    )
  }

  const handleSave = () => {
    onSave({
      template: {
        ...initialTemplate,
        name,
        schemaRef: {
          $id: (jsonSchema.$id as string) ?? '',
          semanticVersion:
            initialTemplate?.schemaRef.semanticVersion ?? '1.0.0',
        },
        steps,
      },
      jsonSchema,
    })
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {initialTemplate ? 'Edit Form Template' : 'Create Form Template'}
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <TextField
        label="Internal Name"
        value={name}
        onChange={e => setName(e.target.value)}
        size="small"
        fullWidth
        helperText="Used by ACT to identify and find this template."
        sx={{ mb: 3 }}
      />

      <Grid container spacing={3}>
        {/* Left column: schema body + steps */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            JSON Schema (data contract)
          </Typography>
          <JsonSchemaBodyEditor value={jsonSchema} onChange={setJsonSchema} />

          <Divider sx={{ my: 3 }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Steps
            </Typography>
            <Button
              size="small"
              startIcon={<AddIcon />}
              onClick={handleAddStep}
            >
              Add Step
            </Button>
          </Box>

          {unboundProperties.length > 0 && (
            <Alert severity="warning" sx={{ mb: 2 }}>
              {unboundProperties.length} schema{' '}
              {unboundProperties.length === 1 ? 'property' : 'properties'} not
              yet bound to a step:{' '}
              {unboundProperties.map(p => p.propertyName).join(', ')}
            </Alert>
          )}

          <Stack spacing={2}>
            {steps.map((step, stepIdx) => (
              <Paper key={stepIdx} variant="outlined" sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    Step {stepIdx + 1}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <IconButton
                    size="small"
                    disabled={stepIdx === 0}
                    onClick={() => handleMoveStep(stepIdx, -1)}
                  >
                    <UpIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    disabled={stepIdx === steps.length - 1}
                    onClick={() => handleMoveStep(stepIdx, 1)}
                  >
                    <DownIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveStep(stepIdx)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>

                <TextField
                  label="Title"
                  value={step.title}
                  onChange={e =>
                    handleStepChange(stepIdx, { title: e.target.value })
                  }
                  size="small"
                  fullWidth
                  sx={{ mb: 1 }}
                />
                <TextField
                  label="Description"
                  value={step.description ?? ''}
                  onChange={e =>
                    handleStepChange(stepIdx, { description: e.target.value })
                  }
                  size="small"
                  multiline
                  rows={2}
                  fullWidth
                  sx={{ mb: 2 }}
                />

                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', mb: 0.5 }}
                >
                  Fields
                </Typography>

                <Stack spacing={1}>
                  {step.fields.map((field, fieldIdx) => (
                    <Paper
                      key={fieldIdx}
                      variant="outlined"
                      sx={{ p: 1.5, backgroundColor: 'action.hover' }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontFamily: 'monospace' }}
                        >
                          {field.schemaPath || '(unbound)'}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton
                          size="small"
                          disabled={fieldIdx === 0}
                          onClick={() => handleMoveField(stepIdx, fieldIdx, -1)}
                        >
                          <UpIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          disabled={fieldIdx === step.fields.length - 1}
                          onClick={() => handleMoveField(stepIdx, fieldIdx, 1)}
                        >
                          <DownIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleRemoveField(stepIdx, fieldIdx)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      <Stack direction="row" spacing={1}>
                        <TextField
                          select
                          label="Submission Context"
                          value={field.submissionContext}
                          onChange={e =>
                            handleFieldChange(stepIdx, fieldIdx, {
                              submissionContext: e.target
                                .value as SubmissionContext,
                            })
                          }
                          size="small"
                          fullWidth
                        >
                          <MenuItem value={SubmissionContext.ALWAYS}>
                            Always
                          </MenuItem>
                          <MenuItem value={SubmissionContext.REQUEST_ONLY}>
                            Request Only
                          </MenuItem>
                          <MenuItem value={SubmissionContext.RENEWAL_ONLY}>
                            Renewal Only
                          </MenuItem>
                        </TextField>
                        <TextField
                          label="Template File Handle ID"
                          type="number"
                          value={field.templateFileHandleId ?? ''}
                          onChange={e =>
                            handleFieldChange(stepIdx, fieldIdx, {
                              templateFileHandleId: e.target.value
                                ? parseInt(e.target.value)
                                : undefined,
                            })
                          }
                          size="small"
                          helperText="Optional. For file fields."
                          fullWidth
                        />
                      </Stack>
                    </Paper>
                  ))}

                  {/* Bind a new property to this step */}
                  <TextField
                    select
                    size="small"
                    label="Add field"
                    value=""
                    onChange={e => {
                      if (e.target.value) {
                        handleAddField(stepIdx, e.target.value)
                      }
                    }}
                    helperText="Bind a schema property to this step."
                    disabled={unboundProperties.length === 0}
                  >
                    {unboundProperties.length === 0 ? (
                      <MenuItem value="" disabled>
                        All properties bound
                      </MenuItem>
                    ) : (
                      unboundProperties.map(p => (
                        <MenuItem
                          key={p.propertyName}
                          value={`/${p.propertyName}`}
                        >
                          /{p.propertyName} — {p.title ?? p.propertyName}
                        </MenuItem>
                      ))
                    )}
                  </TextField>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Grid>

        {/* Right column: live preview */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Live Preview
          </Typography>
          <FormTemplatePreview
            template={{
              id: initialTemplate?.id ?? 'preview',
              name,
              etag: initialTemplate?.etag ?? '',
              versionNumber: initialTemplate?.versionNumber ?? 1,
              schemaRef: {
                $id: (jsonSchema.$id as string) ?? '',
                semanticVersion:
                  initialTemplate?.schemaRef.semanticVersion ?? '1.0.0',
              },
              steps,
              deprecated: false,
              createdOn: '',
              modifiedOn: '',
              createdBy: '',
              modifiedBy: '',
            }}
            jsonSchema={jsonSchema}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        {onCancel && (
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button variant="contained" onClick={handleSave} disabled={!name}>
          {initialTemplate ? 'Save Changes' : 'Create Template'}
        </Button>
      </Box>
    </Paper>
  )
}
