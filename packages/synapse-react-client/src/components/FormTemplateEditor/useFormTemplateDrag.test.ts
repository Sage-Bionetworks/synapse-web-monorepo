import { RJSFSchema } from '@rjsf/utils'
import { DragEndEvent, DragOverEvent } from '@dnd-kit/react'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { act, renderHook } from '@testing-library/react'
import {
  FIELD_DRAG_TYPE,
  fieldDragData,
  slotGroupId,
  SLOT_SORTABLE_TYPE,
  slotSortableId,
  stepSortableId,
  STEP_SORTABLE_TYPE,
} from './sortableIds'
import { useFormTemplateDraft } from './useFormTemplateDraft'
import { useFormTemplateDrag } from './useFormTemplateDrag'

const jsonSchema: RJSFSchema = {
  type: 'object',
  properties: {
    a: { type: 'string' },
    b: { type: 'string' },
    c: { type: 'string' },
  },
}

/** Step one binds `/a` and `/b`; step two is empty; `c` is unbound. */
const template: FormTemplate = {
  name: 'Template',
  schema$id: 'org.sage-template',
  steps: [
    {
      title: 'One',
      fields: ['/a', '/b'].map(schemaPath => ({
        schemaPath,
        uiDefinition: {},
        isPublic: false,
      })),
    },
    { title: 'Two', fields: [] },
  ],
}

type Draggable = {
  id: string
  type: string
  data?: unknown
  /** dnd-kit reads the pointer from here to place a drop on a group's own droppable. */
  manager?: unknown
}
type Droppable = { id: string; type?: string; shape?: unknown }

function dragEvent(
  source: Draggable,
  target: Droppable | null,
  canceled = false,
) {
  return {
    operation: { source, target, canceled },
    canceled,
    preventDefault: () => {},
  }
}

function renderDrag() {
  const { result } = renderHook(() => {
    const draft = useFormTemplateDraft(template, jsonSchema)
    return { draft, handlers: useFormTemplateDrag(draft) }
  })
  const steps = () => result.current.draft.steps
  return {
    steps,
    pathsByStep: () => steps().map(s => s.fields.map(f => f.schemaPath)),
    titles: () => steps().map(s => s.title),
    start: () => act(() => result.current.handlers.onDragStart()),
    over: (source: Draggable, target: Droppable) =>
      act(() =>
        result.current.handlers.onDragOver(
          dragEvent(source, target) as unknown as DragOverEvent,
        ),
      ),
    end: (source: Draggable, target: Droppable | null, canceled = false) =>
      act(() =>
        result.current.handlers.onDragEnd(
          dragEvent(source, target, canceled) as unknown as DragEndEvent,
        ),
      ),
  }
}

describe('useFormTemplateDrag', () => {
  it('reorders steps while a step is dragged over another', () => {
    const drag = renderDrag()
    const [one, two] = drag.steps()

    drag.start()
    drag.over(
      { id: stepSortableId(two), type: STEP_SORTABLE_TYPE },
      { id: stepSortableId(one), type: STEP_SORTABLE_TYPE },
    )

    expect(drag.titles()).toEqual(['Two', 'One'])
  })

  it('moves a slot into an empty step while dragged over that step’s slot list', () => {
    const drag = renderDrag()
    const [one, two] = drag.steps()
    const slotA = one.fields[0]

    drag.start()
    drag.over(
      {
        id: slotSortableId(slotA),
        type: SLOT_SORTABLE_TYPE,
        manager: { dragOperation: { position: { current: { x: 0, y: 0 } } } },
      },
      { id: slotGroupId(two), shape: { center: { x: 0, y: 10 } } },
    )

    expect(drag.pathsByStep()).toEqual([['/b'], ['/a']])
  })

  it('restores the steps from before the drag when it is canceled', () => {
    const drag = renderDrag()
    const [one, two] = drag.steps()
    const stepSource = { id: stepSortableId(two), type: STEP_SORTABLE_TYPE }

    drag.start()
    drag.over(stepSource, { id: stepSortableId(one), type: STEP_SORTABLE_TYPE })
    drag.end(stepSource, null, true)

    expect(drag.titles()).toEqual(['One', 'Two'])
  })

  it('binds a library field to the step it is dropped on', () => {
    const drag = renderDrag()
    const [, two] = drag.steps()

    drag.start()
    drag.end(
      { id: 'field:c', type: FIELD_DRAG_TYPE, data: fieldDragData('c') },
      { id: stepSortableId(two), type: STEP_SORTABLE_TYPE },
    )

    expect(drag.pathsByStep()).toEqual([['/a', '/b'], ['/c']])
  })

  it.each([
    ['nothing', null],
    ['a slot list', { id: 'slots:any', type: undefined }],
  ])('ignores a library field dropped on %s', (_label, target) => {
    const drag = renderDrag()

    drag.start()
    drag.end(
      { id: 'field:c', type: FIELD_DRAG_TYPE, data: fieldDragData('c') },
      target,
    )

    expect(drag.pathsByStep()).toEqual([['/a', '/b'], []])
  })
})
