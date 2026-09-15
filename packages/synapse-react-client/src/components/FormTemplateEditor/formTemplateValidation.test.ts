import {
  FormTemplateFieldSubmissionContextEnum,
  FormTemplateStep,
} from '@sage-bionetworks/synapse-client'
import { RJSFSchema } from '@rjsf/utils'
import {
  isFirstClassFieldKeyCollision,
  isLeafSchemaProperty,
  isUiHintCompatible,
  resolveSchemaProperty,
  validateFormTemplateFields,
} from './formTemplateValidation'

function field(schemaPath: string, uiDefinition: unknown = {}) {
  return {
    schemaPath,
    uiDefinition,
    submissionContext: FormTemplateFieldSubmissionContextEnum.ALWAYS,
    isPublic: false,
  }
}

describe('isFirstClassFieldKeyCollision', () => {
  it('flags every reserved first-class key', () => {
    expect(isFirstClassFieldKeyCollision('institution')).toBe(true)
    expect(isFirstClassFieldKeyCollision('principalInvestigator')).toBe(true)
    expect(isFirstClassFieldKeyCollision('signingOfficial')).toBe(true)
    expect(isFirstClassFieldKeyCollision('accessorChanges')).toBe(true)
    expect(isFirstClassFieldKeyCollision('ducFileHandleId')).toBe(true)
  })

  it('does not flag an unrelated key', () => {
    expect(isFirstClassFieldKeyCollision('favoriteColor')).toBe(false)
  })
})

describe('resolveSchemaProperty', () => {
  const schema: RJSFSchema = {
    type: 'object',
    properties: { name: { type: 'string' } },
  }

  it('resolves a single-segment pointer to its property', () => {
    expect(resolveSchemaProperty(schema, '/name')).toEqual({ type: 'string' })
  })

  it('returns undefined for a pointer that does not resolve', () => {
    expect(resolveSchemaProperty(schema, '/missing')).toBeUndefined()
  })

  it('returns undefined for a multi-segment pointer', () => {
    expect(resolveSchemaProperty(schema, '/a/b')).toBeUndefined()
  })
})

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

  it('flags an incompatible ui hint', () => {
    const steps: FormTemplateStep[] = [
      { title: 'Step 1', fields: [field('/a', { 'ui:widget': 'checkbox' })] },
    ]
    const errors = validateFormTemplateFields(steps, jsonSchema)
    expect(errors).toHaveLength(1)
    expect(errors[0].schemaPath).toBe('/a')
  })
})
