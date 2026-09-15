/*
 * Editing UI for a FormTemplate draft: composes the pure `useFormTemplateDraft` state with save
 * orchestration (`useSaveFormTemplate`), client-side validation, and the first-class-field
 * collision warning. Receives already-resolved initial data — the caller (`FormTemplateEditor`)
 * owns fetching, so this component never renders a loading state.
 */
import { DragDropProvider, DragOverlay } from '@dnd-kit/react'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import { RJSFSchema } from '@rjsf/utils'
import { useMemo, useState } from 'react'
import { displayToast } from '@/components/ToastMessage'
import { FieldDefinitionDrawer } from './FieldDefinitionDrawer'
import { FieldLibrary } from './FieldLibrary'
import { FIELD_DRAG_TYPE } from './FieldLibraryRow'
import { FormStructurePanel } from './FormStructurePanel'
import { FormTemplatePreview } from './FormTemplatePreview'
import { JsonSchemaBodyEditor } from './JsonSchemaBodyEditor'
import { detectFieldType, fieldTypeLabel } from './schemaFieldUtils'
import { toFormTemplateSteps } from './utils'
import {
  isFirstClassFieldKeyCollision,
  validateFormTemplateFields,
} from './formTemplateValidation'
import { useFormTemplateDraft } from './useFormTemplateDraft'
import { useSaveFormTemplate } from './useSaveFormTemplate'

export type FormTemplateEditorFormProps = {
  /** Existing template to edit, or undefined for creating a new one. */
  initialTemplate?: FormTemplate
  /**
   * The JSON Schema body the template's `schema$id` resolves to. Required when editing an
   * existing template.
   */
  initialJsonSchema?: RJSFSchema
  onSaved?: (template: FormTemplate) => void
  onCancel?: () => void
}

export function FormTemplateEditorForm({
  initialTemplate,
  initialJsonSchema,
  onSaved,
  onCancel,
}: FormTemplateEditorFormProps) {
  const draft = useFormTemplateDraft(initialTemplate, initialJsonSchema)
  const {
    name,
    setName,
    jsonSchema,
    setJsonSchema,
    steps,
    setSteps,
    editingPropertyKey,
    setEditingPropertyKey,
    usedPaths,
    existingPropertyKeys,
    handleCreateField,
    renamePropertyKey,
    handleUpdateProperty,
    handleReplaceProperty,
    handleChangeRequired,
    handleRemoveProperty,
    handleDragEnd,
    previewTemplate,
  } = draft

  const { save, isSaving } = useSaveFormTemplate()
  const [saveError, setSaveError] = useState<string[] | null>(null)

  const validationErrors = useMemo(
    () => validateFormTemplateFields(toFormTemplateSteps(steps), jsonSchema),
    [steps, jsonSchema],
  )

  const firstClassCollisions = useMemo(
    () =>
      Object.keys((jsonSchema.properties ?? {}) as object).filter(
        isFirstClassFieldKeyCollision,
      ),
    [jsonSchema.properties],
  )

  const handleSave = async () => {
    setSaveError(null)
    try {
      const result = await save({
        initialTemplate,
        initialJsonSchema,
        name,
        jsonSchema,
        steps,
      })
      if (!result.ok) {
        setSaveError(result.validationErrors)
        return
      }
      displayToast(
        initialTemplate
          ? 'Your changes were saved as a new version.'
          : 'The form template was created.',
        'success',
        { title: 'Template saved' },
      )
      onSaved?.(result.template)
    } catch (error) {
      const clientError = error as SynapseClientError
      if (clientError.status === 412) {
        displayToast(
          'This template was changed by someone else since you opened it. Reload it to see the latest version, then reapply your changes.',
          'warning',
          { title: 'Template updated since you started editing' },
        )
      } else {
        displayToast(
          clientError.reason ?? 'An error occurred while saving.',
          'danger',
          { title: 'Could not save template' },
        )
      }
    }
  }

  const editingProperty: RJSFSchema | null =
    editingPropertyKey !== null
      ? ((jsonSchema.properties as Record<string, RJSFSchema> | undefined)?.[
          editingPropertyKey
        ] ?? null)
      : null
  const editingIsRequired =
    editingPropertyKey !== null &&
    (jsonSchema.required ?? []).includes(editingPropertyKey)
  const editingIsUsedInSteps =
    editingPropertyKey !== null && usedPaths.has(`/${editingPropertyKey}`)

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
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
          helperText="Used by ACT to identify and find this template. Not shown to requesters."
          sx={{ mb: 3 }}
        />

        {firstClassCollisions.length > 0 && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            These fields share a key with a first-class field that is always
            shown to the requester separately, so requesters may see the
            question twice: {firstClassCollisions.join(', ')}.
          </Alert>
        )}

        <Grid container spacing={2} alignItems="stretch">
          <Grid size={{ xs: 12, md: 4 }}>
            <FieldLibrary
              jsonSchema={jsonSchema}
              usedPaths={usedPaths}
              selectedPropertyKey={editingPropertyKey}
              onSelectField={setEditingPropertyKey}
              onCreateField={handleCreateField}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <FormStructurePanel
              steps={steps}
              jsonSchema={jsonSchema}
              formTemplateId={initialTemplate?.id}
              onStepsChange={setSteps}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'sticky', top: 16 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Live Preview
              </Typography>
              <FormTemplatePreview
                template={previewTemplate}
                jsonSchema={jsonSchema}
              />
            </Box>
          </Grid>
        </Grid>

        <Accordion
          sx={{ mt: 3 }}
          disableGutters
          elevation={0}
          variant="outlined"
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">
              Advanced: Edit raw JSON Schema
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Alert severity="info" variant="outlined" sx={{ mb: 2 }}>
              Direct access to the JSON Schema body. Most editing happens in the
              Fields panel above — use this view for features the simple editor
              doesn't support (nested objects, advanced validation, etc.).
            </Alert>
            <JsonSchemaBodyEditor value={jsonSchema} onChange={setJsonSchema} />
          </AccordionDetails>
        </Accordion>

        {validationErrors.length > 0 && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Fix the following before saving:
            <ul style={{ margin: 0, paddingLeft: '1.25em' }}>
              {validationErrors.map((e, i) => (
                <li key={i}>{e.message}</li>
              ))}
            </ul>
          </Alert>
        )}

        {saveError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            <ul style={{ margin: 0, paddingLeft: '1.25em' }}>
              {saveError.map((message, i) => (
                <li key={i}>{message}</li>
              ))}
            </ul>
          </Alert>
        )}

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          {onCancel && (
            <Button variant="outlined" onClick={onCancel} disabled={isSaving}>
              Cancel
            </Button>
          )}
          <Button
            variant="contained"
            onClick={() => void handleSave()}
            disabled={!name || isSaving || validationErrors.length > 0}
          >
            {isSaving
              ? 'Saving…'
              : initialTemplate
                ? 'Save Changes'
                : 'Create Template'}
          </Button>
        </Box>

        <FieldDefinitionDrawer
          open={editingPropertyKey !== null}
          propertyKey={editingPropertyKey}
          existingKeys={existingPropertyKeys}
          property={editingProperty}
          isRequired={editingIsRequired}
          isUsedInSteps={editingIsUsedInSteps}
          isFirstClassCollision={
            editingPropertyKey !== null &&
            isFirstClassFieldKeyCollision(editingPropertyKey)
          }
          onClose={() => setEditingPropertyKey(null)}
          onUpdate={patch => {
            if (editingPropertyKey)
              handleUpdateProperty(editingPropertyKey, patch)
          }}
          onRenameKey={newKey => {
            if (editingPropertyKey)
              renamePropertyKey(editingPropertyKey, newKey)
          }}
          onReplace={next => {
            if (editingPropertyKey)
              handleReplaceProperty(editingPropertyKey, next)
          }}
          onChangeRequired={isReq => {
            if (editingPropertyKey)
              handleChangeRequired(editingPropertyKey, isReq)
          }}
          onRemove={() => {
            if (editingPropertyKey) handleRemoveProperty(editingPropertyKey)
          }}
        />
      </Paper>

      <DragOverlay>
        {source => {
          if (source.type !== FIELD_DRAG_TYPE) return null
          const propertyKey = String(
            (source.data as { propertyKey?: string } | undefined)
              ?.propertyKey ?? '',
          )
          if (!propertyKey) return null
          const property = (
            jsonSchema.properties as Record<string, RJSFSchema> | undefined
          )?.[propertyKey]
          if (!property) return null
          return (
            <Paper
              elevation={6}
              sx={{ p: 1.25, cursor: 'grabbing', opacity: 0.95 }}
            >
              <Typography variant="body2" fontWeight={500}>
                {property.title || propertyKey}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {fieldTypeLabel(detectFieldType(property))}
              </Typography>
            </Paper>
          )
        }}
      </DragOverlay>
    </DragDropProvider>
  )
}
