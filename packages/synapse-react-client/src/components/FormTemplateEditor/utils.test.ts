import {
  FormTemplateField,
  FormTemplateFieldSubmissionContextEnum,
} from '@sage-bionetworks/synapse-client'
import {
  createEditableStep,
  moveItem,
  toEditableSteps,
  toFormTemplateSteps,
} from './utils'

describe('utils', () => {
  describe('step identity (uiKey)', () => {
    it('assigns each step a distinct uiKey', () => {
      const a = createEditableStep()
      const b = createEditableStep()
      expect(a.uiKey).not.toEqual(b.uiKey)
    })

    it('assigns each loaded step a distinct uiKey', () => {
      const [a, b] = toEditableSteps([
        { title: 'A', fields: [] },
        { title: 'B', fields: [] },
      ])
      expect(a.uiKey).not.toEqual(b.uiKey)
    })

    it('keeps a step object identifiable by its own uiKey after being moved', () => {
      // Reordering (drag-and-drop or the up/down arrows) must move the
      // FormTemplateStep object itself, not clone it — otherwise the step's
      // React key and drag-and-drop sortable id (both derived from `uiKey`)
      // silently change on reorder, which is the root cause of the "Step #"
      // label not updating and the DnD position flipping back.
      const steps = [createEditableStep(), createEditableStep()]
      const [first, second] = steps
      const reordered = moveItem(steps, 0, 1)
      expect(reordered.find(s => s.uiKey === first.uiKey)).toBe(first)
      expect(reordered.find(s => s.uiKey === second.uiKey)).toBe(second)
    })

    it('strips uiKey before handing steps back to a caller', () => {
      const editable = toEditableSteps([{ title: 'A', fields: [] }])
      const plain = toFormTemplateSteps(editable)
      expect(plain).toEqual([{ title: 'A', fields: [] }])
      expect(plain[0]).not.toHaveProperty('uiKey')
    })
  })

  describe('moveItem', () => {
    const fields: FormTemplateField[] = [
      {
        schemaPath: '/a',
        uiDefinition: {},
        submissionContext: FormTemplateFieldSubmissionContextEnum.ALWAYS,
      },
      {
        schemaPath: '/b',
        uiDefinition: {},
        submissionContext: FormTemplateFieldSubmissionContextEnum.ALWAYS,
      },
      {
        schemaPath: '/c',
        uiDefinition: {},
        submissionContext: FormTemplateFieldSubmissionContextEnum.ALWAYS,
      },
    ]
    it('moves an item down by one position', () => {
      expect(moveItem(fields, 0, 1).map(f => f.schemaPath)).toEqual([
        '/b',
        '/a',
        '/c',
      ])
    })

    it('moves an item up by one position', () => {
      expect(moveItem(fields, 2, -1).map(f => f.schemaPath)).toEqual([
        '/a',
        '/c',
        '/b',
      ])
    })

    it('returns the same array reference when moving past either end', () => {
      expect(moveItem(fields, 0, -1)).toBe(fields)
      expect(moveItem(fields, fields.length - 1, 1)).toBe(fields)
    })
  })
})
