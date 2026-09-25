/*
 * Pure editing state for the FormTemplateEditor: the in-progress JSON Schema body, the step
 * structure, and every mutation that keeps them in sync (renaming a property key updates every
 * step field that references it, removing a property unbinds it from every step, etc). Has no
 * knowledge of persistence — callers read `jsonSchema`/`name`/`steps` to save, and seed the
 * initial values from an existing template when editing one.
 */
import { RJSFSchema } from '@rjsf/utils'
import {
  FormTemplate,
  FormTemplateField,
} from '@sage-bionetworks/synapse-client'
import { DragEndEvent, DragOverEvent } from '@dnd-kit/react'
import { move } from '@dnd-kit/helpers'
import { useCallback, useMemo, useRef, useState } from 'react'
import {
  FIELD_DRAG_TYPE,
  slotGroupId,
  SLOT_SORTABLE_TYPE,
  slotSortableId,
  stepSortableId,
  STEP_SORTABLE_TYPE,
} from './sortableIds'
import {
  createEditableStep,
  EditableFormTemplateStep,
  toEditableSteps,
  toFormTemplateSteps,
} from './utils'
import { generatePropertyKey } from './schemaFieldUtils'
import {
  listResolvedSchemaProperties,
  removeSchemaProperty,
  renameSchemaProperty,
  resolveSchemaPropertyAtPointer,
  SchemaPropertyContext,
  setSchemaProperty,
  setSchemaPropertyContext,
  setSchemaPropertyRequired,
  SUBMISSION_CONTEXT_PROPERTY,
} from '@/utils/jsonschema/submissionContext'

export const EMPTY_SCHEMA: RJSFSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    [SUBMISSION_CONTEXT_PROPERTY]: {
      type: 'string',
      enum: ['REQUEST', 'RENEWAL'],
    },
  },
  required: [SUBMISSION_CONTEXT_PROPERTY],
}

/**
 * Reorder the steps to match a list of step sortable ids. Falls back to the current order if the
 * list does not account for every step, so a malformed drag can never drop a step.
 */
function stepsFromSortableIds(
  steps: EditableFormTemplateStep[],
  orderedIds: string[],
): EditableFormTemplateStep[] {
  const stepsById = new Map(
    steps.map(step => [stepSortableId(step), step] as const),
  )
  const next = orderedIds
    .map(id => stepsById.get(id))
    .filter((step): step is EditableFormTemplateStep => step !== undefined)
  return next.length === steps.length ? next : steps
}

/**
 * The `Record<sortableGroup, sortableId[]>` projection of every step's slot rows. This is the shape
 * `@dnd-kit/helpers`' `move` understands, and the only one that lets it splice a slot out of one
 * step and into another.
 */
type SlotGroups = Record<string, string[]>

/**
 * Rebuild the steps from a moved slot-group projection. Falls back to the current steps if the
 * projection does not account for every field, so a malformed drag can never drop one.
 */
function stepsFromSlotGroups(
  steps: EditableFormTemplateStep[],
  groups: SlotGroups,
): EditableFormTemplateStep[] {
  const fieldsById = new Map(
    steps.flatMap(step =>
      step.fields.map(field => [slotSortableId(field), field] as const),
    ),
  )
  const next = steps.map(step => ({
    ...step,
    fields: (groups[slotGroupId(step)] ?? [])
      .map(id => fieldsById.get(id))
      .filter((field): field is FormTemplateField => field !== undefined),
  }))
  const movedFieldCount = next.reduce(
    (total, step) => total + step.fields.length,
    0,
  )
  return movedFieldCount === fieldsById.size ? next : steps
}

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
  usedPaths: Set<string>
  existingPropertyKeys: Set<string>
  handleCreateField: () => void
  renamePropertyKey: (oldKey: string, newKey: string) => void
  handleUpdateProperty: (key: string, patch: Partial<RJSFSchema>) => void
  handleReplaceProperty: (key: string, next: RJSFSchema) => void
  handleChangeRequired: (key: string, isRequired: boolean) => void
  handleChangeContext: (key: string, context: SchemaPropertyContext) => void
  handleRemoveProperty: (key: string) => void
  handleDragStart: () => void
  handleDragOver: (event: DragOverEvent) => void
  handleDragEnd: (event: DragEndEvent) => void
  previewTemplate: FormTemplate
}

export function useFormTemplateDraft(
  initialTemplate?: FormTemplate,
  initialJsonSchema?: RJSFSchema,
): FormTemplateDraft {
  const [name, setName] = useState(initialTemplate?.name ?? '')
  const [jsonSchema, setJsonSchema] = useState<RJSFSchema>(
    initialJsonSchema ?? { ...EMPTY_SCHEMA },
  )
  const [steps, setSteps] = useState<EditableFormTemplateStep[]>(() =>
    initialTemplate
      ? toEditableSteps(initialTemplate.steps)
      : [createEditableStep()],
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

  const existingPropertyKeys = useMemo(
    () =>
      new Set(listResolvedSchemaProperties(jsonSchema).map(p => p.propertyKey)),
    [jsonSchema],
  )

  /* ------------------------------------------------------------------------ */
  /* JSON Schema property mutations                                           */
  /* ------------------------------------------------------------------------ */

  const handleCreateField = useCallback(() => {
    const existingKeys = new Set(
      listResolvedSchemaProperties(jsonSchema).map(p => p.propertyKey),
    )
    const title = 'New field'
    const key = generatePropertyKey(title, existingKeys)
    setJsonSchema(prev =>
      setSchemaProperty(
        prev,
        key,
        { type: 'string', title, description: '' },
        'ALWAYS',
      ),
    )
    setEditingPropertyKey(key)
  }, [jsonSchema])

  /**
   * Rename a property's key, keeping it in sync everywhere it's referenced:
   * the schema (top-level or an `allOf` branch), any step field bound to it
   * (whose `schemaPath` embeds the key), and the drawer currently editing it.
   */
  const renamePropertyKey = useCallback(
    (oldKey: string, newKey: string) => {
      const existingKeys = new Set(
        listResolvedSchemaProperties(jsonSchema).map(p => p.propertyKey),
      )
      if (
        newKey === oldKey ||
        !existingKeys.has(oldKey) ||
        existingKeys.has(newKey)
      ) {
        return
      }
      setJsonSchema(prev => renameSchemaProperty(prev, oldKey, newKey))
      setSteps(prev =>
        prev.map(s => ({
          ...s,
          fields: s.fields.map(f =>
            f.schemaPath === `/${oldKey}`
              ? { ...f, schemaPath: `/${newKey}` }
              : f,
          ),
        })),
      )
      setEditingPropertyKey(prevKey => (prevKey === oldKey ? newKey : prevKey))
    },
    [jsonSchema],
  )

  const handleUpdateProperty = useCallback(
    (key: string, patch: Partial<RJSFSchema>) => {
      const resolved = resolveSchemaPropertyAtPointer(jsonSchema, `/${key}`)
      if (!resolved) return
      const merged = { ...resolved.subSchema, ...patch }
      setJsonSchema(prev =>
        setSchemaProperty(prev, key, merged, resolved.context),
      )

      // Keep the property key following the title — like a slug — for as
      // long as it hasn't diverged from what the title would generate (i.e.
      // until the editor manually overrides the key).
      if (typeof patch.title === 'string') {
        const otherKeys = new Set(
          listResolvedSchemaProperties(jsonSchema)
            .map(p => p.propertyKey)
            .filter(k => k !== key),
        )
        const currentTitle = resolved.subSchema.title ?? ''
        if (generatePropertyKey(currentTitle, otherKeys) === key) {
          renamePropertyKey(key, generatePropertyKey(patch.title, otherKeys))
        }
      }
    },
    [jsonSchema, renamePropertyKey],
  )

  const handleReplaceProperty = useCallback((key: string, next: RJSFSchema) => {
    setJsonSchema(prev => {
      const context =
        resolveSchemaPropertyAtPointer(prev, `/${key}`)?.context ?? 'ALWAYS'
      return setSchemaProperty(prev, key, next, context)
    })
  }, [])

  const handleChangeRequired = useCallback(
    (key: string, isRequired: boolean) => {
      setJsonSchema(prev => {
        const context =
          resolveSchemaPropertyAtPointer(prev, `/${key}`)?.context ?? 'ALWAYS'
        return setSchemaPropertyRequired(prev, key, context, isRequired)
      })
    },
    [],
  )

  const handleChangeContext = useCallback(
    (key: string, context: SchemaPropertyContext) => {
      setJsonSchema(prev => setSchemaPropertyContext(prev, key, context))
    },
    [],
  )

  const handleRemoveProperty = useCallback((key: string) => {
    setJsonSchema(prev => removeSchemaProperty(prev, key))
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

  // Reordering is applied while dragging rather than on drop. `useSortable` ships with
  // `OptimisticSortingPlugin`, which reorders the dragged element in the DOM behind React's back
  // unless the draft state already reflects the new order by the time the drag-over render
  // commits. Letting it win moves a slot's element into another step's list while React still
  // believes it belongs to the old one, which strands the node and throws on the next removal.
  const preDragSteps = useRef<EditableFormTemplateStep[] | null>(null)

  const handleDragStart = useCallback(() => {
    preDragSteps.current = steps
  }, [steps])

  const handleDragOver = useCallback(
    (event: DragOverEvent) => {
      const { source } = event.operation

      if (source?.type === STEP_SORTABLE_TYPE) {
        const stepIds = steps.map(stepSortableId)
        const movedStepIds = move(stepIds, event)
        if (movedStepIds === stepIds) return
        setSteps(stepsFromSortableIds(steps, movedStepIds))
        return
      }

      if (source?.type === SLOT_SORTABLE_TYPE) {
        const slotGroups: SlotGroups = Object.fromEntries(
          steps.map(step => [
            slotGroupId(step),
            step.fields.map(slotSortableId),
          ]),
        )
        const movedSlotGroups = move(slotGroups, event)
        if (movedSlotGroups === slotGroups) return
        setSteps(stepsFromSlotGroups(steps, movedSlotGroups))
      }
    },
    [steps],
  )

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const stepsBeforeDrag = preDragSteps.current
    preDragSteps.current = null

    if (event.canceled) {
      if (stepsBeforeDrag) setSteps(stepsBeforeDrag)
      return
    }

    // Binding a library field to a step is the one drag that is not a reorder, so it has no
    // optimistic counterpart to keep in sync and only takes effect once the field is dropped.
    const { source, target } = event.operation
    if (source?.type !== FIELD_DRAG_TYPE) return
    if (target?.type !== STEP_SORTABLE_TYPE) return

    const propertyKey = String(
      (source.data as { propertyKey?: string } | undefined)?.propertyKey ?? '',
    )
    const stepIdx = (target.data as { stepIndex?: number } | undefined)
      ?.stepIndex
    if (!propertyKey || typeof stepIdx !== 'number') return

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
                { schemaPath: path, uiDefinition: {}, isPublic: false },
              ],
            }
          : s,
      )
    })
  }, [])

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
    handleCreateField,
    renamePropertyKey,
    handleUpdateProperty,
    handleReplaceProperty,
    handleChangeRequired,
    handleChangeContext,
    handleRemoveProperty,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    previewTemplate,
  }
}
