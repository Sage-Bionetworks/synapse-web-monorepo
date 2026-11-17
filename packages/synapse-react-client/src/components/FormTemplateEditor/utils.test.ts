import { RJSFSchema } from '@rjsf/utils'
import { FormTemplateField } from '@sage-bionetworks/synapse-client'
import { SYNAPSE_FILE_HANDLE_ID_FORMAT } from '@/utils/jsonschema/schemaData'
import {
  createEditableStep,
  DEFAULT_FIELD_SETTINGS,
  FieldSettingsByPath,
  getFormTemplateAttachments,
  moveItem,
  toEditableSteps,
  toFormTemplateSteps,
} from './utils'

const fileFieldSchema: RJSFSchema = {
  type: 'object',
  properties: {
    a: { type: 'string', format: SYNAPSE_FILE_HANDLE_ID_FORMAT },
  },
}

describe('utils', () => {
  describe('step identity (uiKey)', () => {
    it('assigns each step a distinct uiKey', () => {
      const a = createEditableStep()
      const b = createEditableStep()
      expect(a.uiKey).not.toEqual(b.uiKey)
    })

    it('assigns each loaded step a distinct uiKey', () => {
      const {
        steps: [a, b],
      } = toEditableSteps([
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

    it('round-trips loaded steps, splitting each slot into its path and settings', () => {
      const steps = [
        {
          title: 'A',
          fields: [
            {
              schemaPath: '/a',
              uiDefinition: { 'ui:widget': 'textarea' },
              isPublic: true,
              templateFileHandleId: '123',
            },
          ],
        },
        { title: 'B', description: 'b', fields: [] },
      ]
      const editable = toEditableSteps(steps)

      expect(editable.steps.map(s => s.fieldPaths)).toEqual([['/a'], []])
      expect(editable.fieldSettings).toEqual({
        '/a': {
          uiDefinition: { 'ui:widget': 'textarea' },
          isPublic: true,
          templateFileHandleId: '123',
        },
      })
      const plain = toFormTemplateSteps(
        editable.steps,
        editable.fieldSettings,
        fileFieldSchema,
      )
      expect(plain).toEqual(steps)
      expect(plain[0]).not.toHaveProperty('uiKey')
    })

    it('gives a bound path without settings the default slot settings', () => {
      const step = { ...createEditableStep(), fieldPaths: ['/a'] }

      expect(
        toFormTemplateSteps([step], {}, fileFieldSchema)[0].fields,
      ).toEqual([{ schemaPath: '/a', ...DEFAULT_FIELD_SETTINGS }])
    })

    // Regression: only a file field's row shows its template document, so a document left in the
    // settings of a property that is no longer a file field was saved, and listed as one of the
    // template's attachments, where the author could neither see nor clear it.
    it('leaves out the template document of a bound property that is not a file field', () => {
      const step = { ...createEditableStep(), fieldPaths: ['/a', '/missing'] }
      const withDocument = {
        uiDefinition: {},
        isPublic: true,
        templateFileHandleId: '123',
      }
      const fieldSettings: FieldSettingsByPath = {
        '/a': withDocument,
        '/missing': withDocument,
      }
      const integerFieldSchema: RJSFSchema = {
        type: 'object',
        properties: { a: { type: 'integer' } },
      }

      const steps = toFormTemplateSteps(
        [step],
        fieldSettings,
        integerFieldSchema,
      )

      expect(steps[0].fields).toStrictEqual([
        { schemaPath: '/a', uiDefinition: {}, isPublic: true },
        { schemaPath: '/missing', uiDefinition: {}, isPublic: true },
      ])
      expect(getFormTemplateAttachments(steps)).toEqual([])
      expect(fieldSettings['/a']).toEqual(withDocument)
    })
  })

  describe('moveItem', () => {
    const fields: FormTemplateField[] = [
      {
        schemaPath: '/a',
        uiDefinition: {},
      },
      {
        schemaPath: '/b',
        uiDefinition: {},
      },
      {
        schemaPath: '/c',
        uiDefinition: {},
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
