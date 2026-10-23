import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { act, renderHook } from '@testing-library/react'
import { resolveSchemaPropertyAtPointer } from '@/utils/jsonschema/submissionContext'
import { ACCESS_REQUIREMENT_BASE_SCHEMA_ID } from './formTemplateSchema'
import { useFormTemplateDraft } from './useFormTemplateDraft'

describe('useFormTemplateDraft', () => {
  it('starts a new template with one empty step and a schema that only extends the base schema', () => {
    const { result } = renderHook(() => useFormTemplateDraft())

    expect(result.current.steps).toHaveLength(1)
    expect(result.current.steps[0].fields).toEqual([])
    expect(result.current.existingPropertyKeys.size).toBe(0)
    expect(result.current.jsonSchema.allOf).toEqual([
      { $ref: ACCESS_REQUIREMENT_BASE_SCHEMA_ID },
    ])
  })

  // Regression: each mutation used to read the schema captured at render time, so a mutation
  // batched after another in the same event acted on a stale schema and silently did nothing.
  it('composes mutations batched in one event', () => {
    const { result } = renderHook(() => useFormTemplateDraft())

    act(() => {
      result.current.handleCreateField()
      result.current.handleUpdateProperty('newField', { title: 'Age' })
      result.current.bindField('age', result.current.steps[0].uiKey)
    })

    expect(
      resolveSchemaPropertyAtPointer(result.current.jsonSchema, '/newField'),
    ).toBeUndefined()
    expect(
      resolveSchemaPropertyAtPointer(result.current.jsonSchema, '/age'),
    ).toMatchObject({ subSchema: { title: 'Age' } })
    expect(result.current.editingPropertyKey).toBe('age')
    expect(result.current.steps[0].fields.map(f => f.schemaPath)).toEqual([
      '/age',
    ])
    expect(result.current.unboundProperties).toEqual([])
  })

  it('previews the edited template, keeping the identity of the one being edited', () => {
    const initialTemplate: FormTemplate = {
      id: '42',
      etag: 'etag-1',
      name: 'Original',
      schema$id: 'org.sage-template',
      steps: [
        {
          title: 'Step',
          fields: [{ schemaPath: '/a', uiDefinition: {}, isPublic: false }],
        },
      ],
    }
    const { result } = renderHook(() =>
      useFormTemplateDraft(initialTemplate, {
        $id: 'org.sage-template',
        type: 'object',
        properties: { a: { type: 'string' } },
      }),
    )

    act(() => result.current.setName('Renamed'))

    expect(result.current.previewTemplate).toEqual({
      ...initialTemplate,
      name: 'Renamed',
    })
  })
})
