/*
 * The drag-and-drop identity scheme shared by the editor's draggables and the draft state that
 * reorders them. Lives apart from the components so the state hook can resolve a drag event back
 * to a step or a field without importing the component tree.
 */
import { FormTemplateField } from '@sage-bionetworks/synapse-client'
import { EditableFormTemplateStep } from './utils'

/** Field library rows are plain draggables, not sortables: dropping one binds it to a step. */
export const FIELD_DRAG_TYPE = 'field'

export const STEP_SORTABLE_TYPE = 'step'
/** Every step shares one sortable group, so steps only ever reorder among themselves. */
export const STEP_SORTABLE_GROUP = 'steps'

export const SLOT_SORTABLE_TYPE = 'slot'

export function stepSortableId(step: EditableFormTemplateStep): string {
  return `step:${step.uiKey}`
}

/**
 * The sortable group shared by one step's slot rows. Doubles as the id of that step's slot-list
 * droppable, which is what lets `@dnd-kit/helpers`' `move` resolve a drop on an empty step's list
 * to the group it should insert into.
 */
export function slotGroupId(step: EditableFormTemplateStep): string {
  return `slots:${step.uiKey}`
}

export function slotSortableId(field: FormTemplateField): string {
  return `slot:${field.schemaPath}`
}
