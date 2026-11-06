import { FormTemplateStep } from '@sage-bionetworks/synapse-client'
import { RJSFSchema } from '@rjsf/utils'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import {
  isLeafSchemaProperty,
  isUiHintCompatible,
  validateFormTemplateFields,
} from './formTemplateValidation'

function field(schemaPath: string, uiDefinition: unknown = {}) {
  return {
    schemaPath,
    uiDefinition,
    isPublic: false,
  }
}

describe('isLeafSchemaProperty', () => {
  it('treats a scalar property as a leaf', () => {
    expect(isLeafSchemaProperty({ type: 'string' })).toBe(true)
  })

  it('treats a nested object with properties as not a leaf', () => {
    expect(
      isLeafSchemaProperty({ type: 'object', properties: { a: {} } }),
    ).toBe(false)
  })
})

describe('isUiHintCompatible', () => {
  it('is always compatible with no declared widget', () => {
    expect(isUiHintCompatible({ type: 'boolean' }, {})).toBe(true)
  })

  it('rejects a checkbox widget on a non-boolean property', () => {
    expect(
      isUiHintCompatible({ type: 'string' }, { 'ui:widget': 'checkbox' }),
    ).toBe(false)
  })

  it('accepts a checkbox widget on a boolean property', () => {
    expect(
      isUiHintCompatible({ type: 'boolean' }, { 'ui:widget': 'checkbox' }),
    ).toBe(true)
  })

  it('rejects a select widget on a property without enum options', () => {
    expect(
      isUiHintCompatible({ type: 'string' }, { 'ui:widget': 'select' }),
    ).toBe(false)
  })
})

describe('validateFormTemplateFields', () => {
  const jsonSchema: RJSFSchema = {
    type: 'object',
    properties: {
      a: { type: 'string' },
      b: { type: 'number' },
    },
  }

  it('returns no errors for a well-formed template', () => {
    const steps: FormTemplateStep[] = [
      { title: 'Step 1', fields: [field('/a'), field('/b')] },
    ]
    expect(validateFormTemplateFields(steps, jsonSchema)).toEqual([])
  })

  it('flags a schemaPath that does not resolve to a property', () => {
    const steps: FormTemplateStep[] = [
      { title: 'Step 1', fields: [field('/missing')] },
    ]
    const errors = validateFormTemplateFields(steps, jsonSchema)
    expect(errors).toHaveLength(1)
    expect(errors[0]).toMatchObject({
      stepIndex: 0,
      fieldIndex: 0,
      schemaPath: '/missing',
    })
  })

  it('flags a schemaPath duplicated across steps', () => {
    const steps: FormTemplateStep[] = [
      { title: 'Step', fields: [field('/a')] },
      { title: 'Step', fields: [field('/a')] },
    ]
    const errors = validateFormTemplateFields(steps, jsonSchema)
    expect(errors).toHaveLength(1)
    expect(errors[0]).toMatchObject({ stepIndex: 1, fieldIndex: 0 })
  })

  it('flags an incompatible ui hint with a message naming the field', () => {
    const steps: FormTemplateStep[] = [
      { title: 'Step 1', fields: [field('/a', { 'ui:widget': 'checkbox' })] },
    ]
    const errors = validateFormTemplateFields(steps, jsonSchema)
    expect(errors).toHaveLength(1)
    expect(errors[0]).toMatchObject({
      schemaPath: '/a',
      message: expect.stringContaining('"/a"'),
    })
  })

  it('flags a schemaPath that resolves to a nested object rather than a leaf', () => {
    const nestedSchema: RJSFSchema = {
      type: 'object',
      properties: {
        address: {
          type: 'object',
          properties: { street: { type: 'string' } },
        },
      },
    }
    const steps: FormTemplateStep[] = [
      { title: 'Step 1', fields: [field('/address')] },
    ]
    const errors = validateFormTemplateFields(steps, nestedSchema)
    expect(errors).toHaveLength(1)
    expect(errors[0]).toMatchObject({
      schemaPath: '/address',
      message: expect.stringContaining('nested object'),
    })
  })

  it('flags a required schema property that no field binds to', () => {
    const schemaWithUnboundRequired: RJSFSchema = {
      type: 'object',
      properties: {
        a: { type: 'string' },
        b: { type: 'number' },
      },
      required: ['a', 'b'],
    }
    const steps: FormTemplateStep[] = [
      { title: 'Step 1', fields: [field('/a')] },
    ]
    const errors = validateFormTemplateFields(steps, schemaWithUnboundRequired)
    expect(errors).toHaveLength(1)
    expect(errors[0].schemaPath).toBe('/b')
    expect(errors[0].stepIndex).toBeUndefined()
    expect(errors[0].fieldIndex).toBeUndefined()
  })

  it('flags an empty first step by its number and title', () => {
    const steps: FormTemplateStep[] = [
      { title: 'Intro', fields: [] },
      { title: 'Details', fields: [field('/a')] },
    ]
    expect(validateFormTemplateFields(steps, jsonSchema)).toEqual([
      { stepIndex: 0, message: 'Step 1 "Intro" has no fields.' },
    ])
  })

  it('flags an empty later step, naming it by number when untitled', () => {
    const steps: FormTemplateStep[] = [
      { title: 'Intro', fields: [field('/a')] },
      { title: 'Data Use Certificate', fields: [] },
      { title: '', fields: [] },
    ]
    expect(validateFormTemplateFields(steps, jsonSchema)).toEqual([
      {
        stepIndex: 1,
        message: 'Step 2 "Data Use Certificate" has no fields.',
      },
      { stepIndex: 2, message: 'Step 3 has no fields.' },
    ])
  })

  it('does not flag a required property that is bound, or one that is not required', () => {
    const steps: FormTemplateStep[] = [
      { title: 'Step 1', fields: [field('/a')] },
    ]
    expect(
      validateFormTemplateFields(steps, {
        ...jsonSchema,
        required: ['a'],
      }),
    ).toEqual([])
  })

  it('does not require the submission context to be bound, since it is set on submission', () => {
    const steps: FormTemplateStep[] = [
      { title: 'Step 1', fields: [field('/a')] },
    ]
    expect(
      validateFormTemplateFields(steps, {
        type: 'object',
        properties: {
          a: { type: 'string' },
          [SUBMISSION_CONTEXT_PROPERTY]: { type: 'string' },
        },
        required: ['a', SUBMISSION_CONTEXT_PROPERTY],
      }),
    ).toEqual([])
  })

  it.each<[string, RJSFSchema]>([
    ['single', { type: 'string', enum: ['Red', ''] }],
    [
      'multiple',
      {
        type: 'array',
        uniqueItems: true,
        items: { type: 'string', enum: ['Red', ' '] },
      },
    ],
  ])('flags a %s-choice property with an empty choice', (_, color) => {
    const steps: FormTemplateStep[] = [
      { title: 'Step 1', fields: [field('/color')] },
    ]
    expect(
      validateFormTemplateFields(steps, {
        type: 'object',
        properties: { color },
      }),
    ).toEqual([
      { schemaPath: '/color', message: '"color" has an empty choice.' },
    ])
  })

  it('flags a choice property with duplicated choices', () => {
    const steps: FormTemplateStep[] = [
      { title: 'Step 1', fields: [field('/color')] },
    ]
    expect(
      validateFormTemplateFields(steps, {
        type: 'object',
        properties: {
          color: { type: 'string', enum: ['Red', 'Blue', 'Red'] },
        },
      }),
    ).toEqual([
      { schemaPath: '/color', message: '"color" has duplicate choices.' },
    ])
  })

  it('reports both an empty and a duplicated choice, even on a property no field binds', () => {
    expect(
      validateFormTemplateFields([{ title: 'Step 1', fields: [field('/a')] }], {
        type: 'object',
        properties: {
          a: { type: 'string' },
          color: { type: 'string', enum: ['Red', 'Red', ''] },
        },
      }),
    ).toEqual([
      { schemaPath: '/color', message: '"color" has an empty choice.' },
      { schemaPath: '/color', message: '"color" has duplicate choices.' },
    ])
  })

  it('leaves an enum with non-string values to the advanced editor rather than checking its choices', () => {
    expect(
      validateFormTemplateFields(
        [{ title: 'Step 1', fields: [field('/count')] }],
        {
          type: 'object',
          properties: { count: { type: 'string', enum: ['one', 2, null] } },
        },
      ),
    ).toEqual([])
  })
})
