import { DragDropProvider, DragEndEvent, DragOverlay } from '@dnd-kit/react'
import { isSortable } from '@dnd-kit/react/sortable'
import {
  FormTemplate,
  FormTemplateStep,
  SubmissionContext,
} from '@/utils/types/AccessRequirementFormTypes'
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
import { useCallback, useMemo, useState } from 'react'
import { FieldDefinitionDrawer } from './FieldDefinitionDrawer'
import { FieldLibrary } from './FieldLibrary'
import { FIELD_DRAG_TYPE } from './FieldLibraryRow'
import { FormStructurePanel } from './FormStructurePanel'
import { FormTemplatePreview } from './FormTemplatePreview'
import { JsonSchemaBodyEditor } from './JsonSchemaBodyEditor'
import {
  SLOT_GROUP_PREFIX,
  STEP_ID_PREFIX,
  STEP_SORTABLE_GROUP,
  STEP_SORTABLE_TYPE,
} from './StepCard'
import { SLOT_SORTABLE_TYPE } from './StepFieldRow'
import {
  detectFieldType,
  fieldTypeLabel,
  generatePropertyKey,
} from './schemaFieldUtils'

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
  const [editingPropertyKey, setEditingPropertyKey] = useState<string | null>(
    null,
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

  /* ------------------------------------------------------------------------ */
  /* JSON Schema property mutations                                           */
  /* ------------------------------------------------------------------------ */

  const writeProperties = useCallback(
    (nextProps: Record<string, RJSFSchema>, nextRequired?: string[]) => {
      setJsonSchema(prev => ({
        ...prev,
        properties: nextProps,
        required: nextRequired ?? prev.required ?? [],
      }))
    },
    [],
  )

  const handleCreateField = useCallback(() => {
    const properties = (jsonSchema.properties ?? {}) as Record<
      string,
      RJSFSchema
    >
    const existingKeys = new Set(Object.keys(properties))
    const title = 'New field'
    const key = generatePropertyKey(title, existingKeys)
    writeProperties({
      ...properties,
      [key]: { type: 'string', title, description: '' },
    })
    setEditingPropertyKey(key)
  }, [jsonSchema.properties, writeProperties])

  const handleUpdateProperty = useCallback(
    (key: string, patch: Partial<RJSFSchema>) => {
      setJsonSchema(prev => {
        const nextProps = {
          ...((prev.properties ?? {}) as Record<string, RJSFSchema>),
        }
        nextProps[key] = { ...(nextProps[key] ?? {}), ...patch }
        return { ...prev, properties: nextProps }
      })
    },
    [],
  )

  const handleReplaceProperty = useCallback((key: string, next: RJSFSchema) => {
    setJsonSchema(prev => {
      const nextProps = {
        ...((prev.properties ?? {}) as Record<string, RJSFSchema>),
      }
      nextProps[key] = next
      return { ...prev, properties: nextProps }
    })
  }, [])

  const handleChangeRequired = useCallback(
    (key: string, isRequired: boolean) => {
      setJsonSchema(prev => {
        const current = prev.required ?? []
        const next = current.filter(k => k !== key)
        if (isRequired) next.push(key)
        return { ...prev, required: next }
      })
    },
    [],
  )

  const handleRemoveProperty = useCallback((key: string) => {
    setJsonSchema(prev => {
      const nextProps = {
        ...((prev.properties ?? {}) as Record<string, RJSFSchema>),
      }
      delete nextProps[key]
      return {
        ...prev,
        properties: nextProps,
        required: (prev.required ?? []).filter(k => k !== key),
      }
    })
    // Unbind from any steps that reference this property.
    const path = `/${key}`
    setSteps(prev =>
      prev.map(s => ({
        ...s,
        fields: s.fields.filter(f => f.schemaPath !== path),
      })),
    )
    setEditingPropertyKey(prevKey => (prevKey === key ? null : prevKey))
  }, [])

  /* ------------------------------------------------------------------------ */
  /* Drag-and-drop                                                             */
  /* ------------------------------------------------------------------------ */

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    if (event.canceled) return
    const { source, target } = event.operation
    if (!source) return

    // Case 1: bind a field from the library to a step (target is a step
    // sortable that accepts type 'field').
    if (source.type === FIELD_DRAG_TYPE) {
      if (!target) return
      const targetId = String(target.id)
      if (!targetId.startsWith(STEP_ID_PREFIX)) return
      const propertyKey = String(
        (source.data as { propertyKey?: string } | undefined)?.propertyKey ??
          '',
      )
      const stepIdx = parseInt(targetId.slice(STEP_ID_PREFIX.length), 10)
      if (!propertyKey || !Number.isFinite(stepIdx)) return
      const path = `/${propertyKey}`
      setSteps(prev => {
        if (prev.some(s => s.fields.some(f => f.schemaPath === path))) {
          return prev
        }
        return prev.map((s, i) =>
          i === stepIdx
            ? {
                ...s,
                fields: [
                  ...s.fields,
                  {
                    schemaPath: path,
                    uiDefinition: {},
                    submissionContext: SubmissionContext.ALWAYS,
                  },
                ],
              }
            : s,
        )
      })
      return
    }

    // Case 2: reorder steps.
    if (source.type === STEP_SORTABLE_TYPE && isSortable(source)) {
      const { initialIndex, index, group } = source
      if (initialIndex === index) return
      if (group === STEP_SORTABLE_GROUP) {
        setSteps(prev => arrayMove(prev, initialIndex, index))
      }
      return
    }

    // Case 3: reorder slots within a step.
    if (source.type === SLOT_SORTABLE_TYPE && isSortable(source)) {
      const { initialIndex, index, group } = source
      if (initialIndex === index) return
      if (typeof group === 'string' && group.startsWith(SLOT_GROUP_PREFIX)) {
        const stepIdx = parseInt(group.slice(SLOT_GROUP_PREFIX.length), 10)
        if (!Number.isFinite(stepIdx)) return
        setSteps(prev =>
          prev.map((s, i) =>
            i === stepIdx
              ? { ...s, fields: arrayMove(s.fields, initialIndex, index) }
              : s,
          ),
        )
      }
    }
  }, [])

  /* ------------------------------------------------------------------------ */
  /* Save                                                                      */
  /* ------------------------------------------------------------------------ */

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

  /* ------------------------------------------------------------------------ */
  /* Render                                                                    */
  /* ------------------------------------------------------------------------ */

  const editingProperty: RJSFSchema | null =
    editingPropertyKey !== null
      ? (jsonSchema.properties as Record<string, RJSFSchema> | undefined)?.[
          editingPropertyKey
        ] ?? null
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

        <FieldDefinitionDrawer
          open={editingPropertyKey !== null}
          propertyKey={editingPropertyKey}
          property={editingProperty}
          isRequired={editingIsRequired}
          isUsedInSteps={editingIsUsedInSteps}
          onClose={() => setEditingPropertyKey(null)}
          onUpdate={patch => {
            if (editingPropertyKey)
              handleUpdateProperty(editingPropertyKey, patch)
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

/** Move an item from `fromIndex` to `toIndex`, returning a new array. */
function arrayMove<T>(arr: T[], fromIndex: number, toIndex: number): T[] {
  if (
    fromIndex < 0 ||
    fromIndex >= arr.length ||
    toIndex < 0 ||
    toIndex >= arr.length ||
    fromIndex === toIndex
  ) {
    return arr
  }
  const next = [...arr]
  const [item] = next.splice(fromIndex, 1)
  next.splice(toIndex, 0, item)
  return next
}
