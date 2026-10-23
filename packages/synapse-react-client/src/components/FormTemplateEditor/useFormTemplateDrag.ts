/*
 * Drag-and-drop for the FormTemplateEditor, as handlers for `DragDropProvider`. Translates dnd-kit
 * events into the draft's intent-level moves; the geometry of where a drag lands is left to
 * `@dnd-kit/helpers`' `move`, applied to id projections of the draft.
 */
import { move } from '@dnd-kit/helpers'
import { DragEndEvent, DragOverEvent } from '@dnd-kit/react'
import { useCallback, useMemo, useRef } from 'react'
import {
  FIELD_DRAG_TYPE,
  readFieldDragData,
  slotGroupId,
  SLOT_SORTABLE_TYPE,
  slotSortableId,
  stepSortableId,
  STEP_SORTABLE_TYPE,
} from './sortableIds'
import { FormTemplateDraft } from './useFormTemplateDraft'
import { EditableFormTemplateStep } from './utils'

export type FormTemplateDragHandlers = {
  onDragStart: () => void
  onDragOver: (event: DragOverEvent) => void
  onDragEnd: (event: DragEndEvent) => void
}

/**
 * The step a slot sortable ends up in after `move`, and its index there. `move` over the
 * `Record<slotGroupId, slotSortableId[]>` projection is what resolves a drag across steps,
 * including onto an empty step's slot list.
 */
function projectSlotMove(
  steps: EditableFormTemplateStep[],
  event: DragOverEvent,
  slotId: string,
): { stepKey: string; index: number } | null {
  const groups: Record<string, string[]> = Object.fromEntries(
    steps.map(step => [slotGroupId(step), step.fields.map(slotSortableId)]),
  )
  const moved = move(groups, event)
  if (moved === groups) return null
  for (const step of steps) {
    const index = moved[slotGroupId(step)]?.indexOf(slotId) ?? -1
    if (index !== -1) return { stepKey: step.uiKey, index }
  }
  return null
}

export function useFormTemplateDrag({
  steps,
  setSteps,
  moveStep,
  moveSlot,
  bindField,
}: Pick<
  FormTemplateDraft,
  'steps' | 'setSteps' | 'moveStep' | 'moveSlot' | 'bindField'
>): FormTemplateDragHandlers {
  // The steps as they stood before the in-flight drag. `onDragOver` rewrites the steps as the
  // pointer moves, so this snapshot is the only way back if the gesture is canceled — dnd-kit
  // reverts its own state, never ours.
  const stepsBeforeDrag = useRef<EditableFormTemplateStep[] | null>(null)

  const onDragStart = useCallback(() => {
    stepsBeforeDrag.current = steps
  }, [steps])

  // Reordering is applied while dragging rather than on drop. `useSortable` ships with
  // `OptimisticSortingPlugin`, which reorders the dragged element in the DOM behind React's back
  // unless the draft already reflects the new order by the time the drag-over render commits.
  // Letting it win moves a slot's element into another step's list while React still believes it
  // belongs to the old one, which strands the node and throws on the next removal.
  const onDragOver = useCallback(
    (event: DragOverEvent) => {
      const { source } = event.operation
      if (!source) return
      const sourceId = String(source.id)

      if (source.type === STEP_SORTABLE_TYPE) {
        const stepIds = steps.map(stepSortableId)
        const moved = move(stepIds, event)
        if (moved === stepIds) return
        moveStep(stepIds.indexOf(sourceId), moved.indexOf(sourceId))
        return
      }

      if (source.type === SLOT_SORTABLE_TYPE) {
        const field = steps
          .flatMap(step => step.fields)
          .find(f => slotSortableId(f) === sourceId)
        const destination = projectSlotMove(steps, event, sourceId)
        if (field && destination) {
          moveSlot(field.schemaPath, destination.stepKey, destination.index)
        }
      }
    },
    [steps, moveStep, moveSlot],
  )

  // Binding a library field to a step is the one drag that is not a reorder, so it has no
  // optimistic counterpart to keep in sync and only takes effect once the field is dropped.
  const onDragEnd = useCallback(
    (event: DragEndEvent) => {
      const snapshot = stepsBeforeDrag.current
      stepsBeforeDrag.current = null
      if (event.canceled) {
        if (snapshot) setSteps(snapshot)
        return
      }

      const { source, target } = event.operation
      if (
        source?.type !== FIELD_DRAG_TYPE ||
        target?.type !== STEP_SORTABLE_TYPE
      ) {
        return
      }
      const propertyKey = readFieldDragData(source.data)
      const step = steps.find(s => stepSortableId(s) === String(target.id))
      if (propertyKey && step) bindField(propertyKey, step.uiKey)
    },
    [steps, setSteps, bindField],
  )

  return useMemo(
    () => ({ onDragStart, onDragOver, onDragEnd }),
    [onDragStart, onDragOver, onDragEnd],
  )
}
