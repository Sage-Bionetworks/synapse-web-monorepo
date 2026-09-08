import { FormTemplateStep } from '@/utils/types/AccessRequirementFormTypes'
import { RJSFSchema } from '@rjsf/utils'

/** Move an item in an array by `direction`. Returns a new array. */
export function moveItem<T>(arr: T[], idx: number, direction: -1 | 1): T[] {
  const newIdx = idx + direction
  if (newIdx < 0 || newIdx >= arr.length) return arr
  const next = [...arr]
  const [item] = next.splice(idx, 1)
  next.splice(newIdx, 0, item)
  return next
}

let nextUiKeySeq = 0

/**
 * A `FormTemplateStep` with a client-only stable identity, used as a React
 * key and drag-and-drop sortable id. Steps have no natural unique field
 * (unlike fields, whose identity is their `schemaPath`), so the editor
 * tracks one here. `uiKey` never leaves this component tree — strip it with
 * `toFormTemplateSteps` before handing steps back to a caller.
 */
export type EditableFormTemplateStep = FormTemplateStep & { uiKey: string }

/** Create a new empty step with a fresh identity. */
export function createEditableStep(): EditableFormTemplateStep {
  return {
    title: 'New Step',
    description: '',
    fields: [],
    uiKey: `step-${nextUiKeySeq++}`,
  }
}

/** Attach a fresh identity to each step loaded from outside the editor. */
export function toEditableSteps(
  steps: FormTemplateStep[],
): EditableFormTemplateStep[] {
  return steps.map(step => ({ ...step, uiKey: `step-${nextUiKeySeq++}` }))
}

/** Strip the client-only identity before handing steps back to a caller. */
export function toFormTemplateSteps(
  steps: EditableFormTemplateStep[],
): FormTemplateStep[] {
  return steps.map(({ uiKey: _uiKey, ...rest }) => rest)
}

/** Normalize a JSON pointer (ensure leading slash). */
export function normalizePointer(p: string): string {
  if (!p) return p
  return p.startsWith('/') ? p : `/${p}`
}

export type SchemaPropertyOption = {
  propertyName: string
  title?: string
  type?: string
  format?: string
}

/**
 * List the leaf properties of an object JSON Schema in a form suitable for
 * binding to a FormTemplateField. Only inspects top-level properties — nested
 * objects are out of scope per the design's non-goals.
 */
export function listSchemaProperties(
  schema: RJSFSchema,
): SchemaPropertyOption[] {
  const props = schema.properties ?? {}
  return Object.entries(props).map(([propertyName, raw]) => {
    const sub = (typeof raw === 'object' ? (raw as RJSFSchema) : {}) ?? {}
    return {
      propertyName,
      title: sub.title,
      type: sub.type as string | undefined,
      format: sub.format,
    }
  })
}
