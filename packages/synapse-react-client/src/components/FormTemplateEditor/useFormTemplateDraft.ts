/*
 * Editing state for the FormTemplateEditor: a thin React shell over the pure transitions in
 * `formTemplateDraftState`. Has no knowledge of persistence — callers read `jsonSchema`/`name`/
 * `steps` to save, and seed the initial values from an existing template when editing one.
 */
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { useCallback, useMemo, useState } from 'react'
import {
  ResolvedSchemaProperty,
  SchemaPropertyContext,
} from '@/utils/jsonschema/submissionContext'
import {
  bindField,
  boundSchemaPaths,
  changeContext,
  changeFieldType,
  changeRequired,
  createField,
  FormTemplateDraftState,
  listUnboundProperties,
  moveSlot,
  moveStep,
  removeProperty,
  renamePropertyKey,
  replaceJsonSchema,
  replaceSteps,
  schemaPropertyKeys,
  uiDefinitionsByPath,
  updateProperty,
} from './formTemplateDraftState'
import { SimpleFieldType } from './schemaFieldUtils'
import { createNewFormTemplateSchema } from './formTemplateSchema'
import {
  createEditableStep,
  EditableFormTemplateStep,
  toEditableSteps,
  toFormTemplateSteps,
} from './utils'

/** The editing state and mutations for an in-progress FormTemplate draft. */
export interface FormTemplateDraft {
  name: string
  setName: (name: string) => void
  jsonSchema: RJSFSchema
  setJsonSchema: (jsonSchema: RJSFSchema) => void
  steps: EditableFormTemplateStep[]
  setSteps: (steps: EditableFormTemplateStep[]) => void
  editingPropertyKey: string | null
  setEditingPropertyKey: (key: string | null) => void
  /** The `schemaPath` of every field bound to a step. */
  usedPaths: Set<string>
  existingPropertyKeys: Set<string>
  /** Schema properties that no step binds yet. */
  unboundProperties: ResolvedSchemaProperty[]
  /** Each property's slot `uiDefinition` by `schemaPath`, held in the draft while unbound. */
  uiDefinitions: Record<string, UiSchema>
  handleCreateField: () => void
  renamePropertyKey: (oldKey: string, newKey: string) => void
  handleUpdateProperty: (key: string, patch: Partial<RJSFSchema>) => void
  handleChangeFieldType: (key: string, type: SimpleFieldType) => void
  handleChangeRequired: (key: string, isRequired: boolean) => void
  handleChangeContext: (key: string, context: SchemaPropertyContext) => void
  handleRemoveProperty: (key: string) => void
  moveStep: (fromIndex: number, toIndex: number) => void
  moveSlot: (schemaPath: string, toStepKey: string, toIndex: number) => void
  bindField: (propertyKey: string, stepKey: string) => void
  previewTemplate: FormTemplate
}

export function useFormTemplateDraft(
  initialTemplate?: FormTemplate,
  initialJsonSchema?: RJSFSchema,
): FormTemplateDraft {
  const [name, setName] = useState(initialTemplate?.name ?? '')
  const [draft, setDraft] = useState<FormTemplateDraftState>(() => ({
    jsonSchema: initialJsonSchema ?? createNewFormTemplateSchema(),
    steps: initialTemplate
      ? toEditableSteps(initialTemplate.steps)
      : [createEditableStep()],
    editingPropertyKey: null,
    unboundUiDefinitions: {},
  }))
  const { jsonSchema, steps, editingPropertyKey } = draft
  const uiDefinitions = useMemo(() => uiDefinitionsByPath(draft), [draft])

  const setJsonSchema = useCallback(
    (next: RJSFSchema) => setDraft(prev => replaceJsonSchema(prev, next)),
    [],
  )
  const setSteps = useCallback(
    (next: EditableFormTemplateStep[]) =>
      setDraft(prev => replaceSteps(prev, next)),
    [],
  )
  const setEditingPropertyKey = useCallback(
    (key: string | null) =>
      setDraft(prev => ({ ...prev, editingPropertyKey: key })),
    [],
  )

  const usedPaths = useMemo(() => boundSchemaPaths(steps), [steps])
  const existingPropertyKeys = useMemo(
    () => schemaPropertyKeys(jsonSchema),
    [jsonSchema],
  )
  const unboundProperties = useMemo(
    () => listUnboundProperties(jsonSchema, steps),
    [jsonSchema, steps],
  )

  // Every transition reads the latest state through the updater, so several mutations batched in
  // one event compose instead of each seeing the same render-time snapshot.
  const handleCreateField = useCallback(() => setDraft(createField), [])
  const handleRenamePropertyKey = useCallback(
    (oldKey: string, newKey: string) =>
      setDraft(prev => renamePropertyKey(prev, oldKey, newKey)),
    [],
  )
  const handleUpdateProperty = useCallback(
    (key: string, patch: Partial<RJSFSchema>) =>
      setDraft(prev => updateProperty(prev, key, patch)),
    [],
  )
  const handleChangeFieldType = useCallback(
    (key: string, type: SimpleFieldType) =>
      setDraft(prev => changeFieldType(prev, key, type)),
    [],
  )
  const handleChangeRequired = useCallback(
    (key: string, isRequired: boolean) =>
      setDraft(prev => changeRequired(prev, key, isRequired)),
    [],
  )
  const handleChangeContext = useCallback(
    (key: string, context: SchemaPropertyContext) =>
      setDraft(prev => changeContext(prev, key, context)),
    [],
  )
  const handleRemoveProperty = useCallback(
    (key: string) => setDraft(prev => removeProperty(prev, key)),
    [],
  )
  const handleMoveStep = useCallback(
    (fromIndex: number, toIndex: number) =>
      setDraft(prev => moveStep(prev, fromIndex, toIndex)),
    [],
  )
  const handleMoveSlot = useCallback(
    (schemaPath: string, toStepKey: string, toIndex: number) =>
      setDraft(prev => moveSlot(prev, schemaPath, toStepKey, toIndex)),
    [],
  )
  const handleBindField = useCallback(
    (propertyKey: string, stepKey: string) =>
      setDraft(prev => bindField(prev, propertyKey, stepKey)),
    [],
  )

  const previewTemplate: FormTemplate = useMemo(
    () => ({
      ...initialTemplate,
      name,
      schema$id: (jsonSchema.$id as string) ?? '',
      steps: toFormTemplateSteps(steps),
    }),
    [initialTemplate, name, jsonSchema.$id, steps],
  )

  return {
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
    unboundProperties,
    uiDefinitions,
    handleCreateField,
    renamePropertyKey: handleRenamePropertyKey,
    handleUpdateProperty,
    handleChangeFieldType,
    handleChangeRequired,
    handleChangeContext,
    handleRemoveProperty,
    moveStep: handleMoveStep,
    moveSlot: handleMoveSlot,
    bindField: handleBindField,
    previewTemplate,
  }
}
