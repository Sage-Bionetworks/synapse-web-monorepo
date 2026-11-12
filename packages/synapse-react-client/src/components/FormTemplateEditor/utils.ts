import {
  FormTemplate,
  FormTemplateStep,
} from '@sage-bionetworks/synapse-client'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'

export { moveItem } from '@/utils/functions/ArrayUtils'

/** Label for the per-step control that binds an unbound field into that step. */
export const BIND_FIELD_LABEL = 'Bind field'

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

/**
 * The `attachments` of a FormTemplate version with these steps: the template document of every field, each once.
 * Synapse requires every `templateFileHandleId` to be listed, and the list is replaced on each save, so a removed or
 * replaced document is no longer listed.
 */
export function getFormTemplateAttachments(
  steps: FormTemplateStep[],
): string[] {
  const fileHandleIds = steps.flatMap(step =>
    step.fields.flatMap(field =>
      field.templateFileHandleId ? [field.templateFileHandleId] : [],
    ),
  )
  return [...new Set(fileHandleIds)]
}

/**
 * The association that downloads a template document through the saved template, or undefined if no saved version of
 * the template lists it yet (e.g. it was uploaded since the last save), in which case only the user who uploaded it
 * can download it.
 */
export function getTemplateDocumentAssociation(
  savedTemplate: FormTemplate | undefined,
  fileHandleId: string,
): FileHandleAssociation | undefined {
  return savedTemplate?.id && savedTemplate.attachments?.includes(fileHandleId)
    ? {
        fileHandleId,
        associateObjectType: FileHandleAssociateType.FormTemplateAttachment,
        associateObjectId: savedTemplate.id,
      }
    : undefined
}
