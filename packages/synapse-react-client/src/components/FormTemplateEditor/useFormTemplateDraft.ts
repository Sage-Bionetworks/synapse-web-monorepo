/*
 * Pure editing state for the FormTemplateEditor: the in-progress JSON Schema body, the step
 * structure, and every mutation that keeps them in sync (renaming a property key updates every
 * step field that references it, removing a property unbinds it from every step, etc). Has no
 * knowledge of persistence — callers read `jsonSchema`/`name`/`steps` to save, and seed the
 * initial values from an existing template when editing one.
 */
import { RJSFSchema } from '@rjsf/utils'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { DragEndEvent } from '@dnd-kit/react'
import { isSortable } from '@dnd-kit/react/sortable'
import { useCallback, useMemo, useState } from 'react'
import { FIELD_DRAG_TYPE } from './FieldLibraryRow'
import {
  SLOT_GROUP_PREFIX,
  STEP_SORTABLE_GROUP,
  STEP_SORTABLE_TYPE,
} from './StepCard'
import { SLOT_SORTABLE_TYPE } from './StepFieldRow'
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

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    if (event.canceled) return
    const { source, target } = event.operation
    if (!source) return

    // Case 1: bind a field from the library to a step (target is a step
    // sortable that accepts type 'field').
    if (source.type === FIELD_DRAG_TYPE) {
      if (!target || target.type !== STEP_SORTABLE_TYPE) return
      const propertyKey = String(
        (source.data as { propertyKey?: string } | undefined)?.propertyKey ??
          '',
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
                  {
                    schemaPath: path,
                    uiDefinition: {},
                    isPublic: false,
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
    handleDragEnd,
    previewTemplate,
  }
}
