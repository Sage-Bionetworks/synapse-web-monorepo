import { FormTemplateStep } from '@sage-bionetworks/synapse-client'

export { moveItem } from '@/utils/functions/ArrayUtils'

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
