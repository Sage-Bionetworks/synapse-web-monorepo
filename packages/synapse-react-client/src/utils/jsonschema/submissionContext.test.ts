import { RJSFSchema } from '@rjsf/utils'
import { DataAccessRequestType } from '@sage-bionetworks/synapse-client'
import {
  contextAppliesForRequestType,
  listResolvedSchemaProperties,
  pointerToPropertyKey,
  propertyKeyToPointer,
  removeSchemaProperty,
  renameSchemaProperty,
  resolveSchemaPropertyAtPointer,
  setSchemaProperty,
  setSchemaPropertyContext,
  setSchemaPropertyRequired,
  submissionContextLabel,
  SUBMISSION_CONTEXT_PROPERTY,
} from './submissionContext'

const withRenewalOnlyField: RJSFSchema = {
  type: 'object',
  properties: {
    institution: { type: 'string' },
    [SUBMISSION_CONTEXT_PROPERTY]: { type: 'string' },
  },
  required: ['institution', SUBMISSION_CONTEXT_PROPERTY],
  allOf: [
    {
      if: {
        properties: {
          [SUBMISSION_CONTEXT_PROPERTY]: {
            const: DataAccessRequestType.RENEWAL,
          },
        },
      },
      then: {
        properties: { summaryOfUse: { type: 'string' } },
        required: ['summaryOfUse'],
      },
    },
  ],
}

describe('listResolvedSchemaProperties', () => {
  it('lists an unconditional property as ALWAYS', () => {
    const result = listResolvedSchemaProperties(withRenewalOnlyField)
    expect(result).toContainEqual({
      propertyKey: 'institution',
      subSchema: { type: 'string' },
      isRequired: true,
      context: 'ALWAYS',
    })
  })

  it('lists a property gated behind a RENEWAL allOf branch as RENEWAL_ONLY', () => {
    const result = listResolvedSchemaProperties(withRenewalOnlyField)
    expect(result).toContainEqual({
      propertyKey: 'summaryOfUse',
      subSchema: { type: 'string' },
      isRequired: true,
      context: 'RENEWAL_ONLY',
    })
  })

  it('never includes the reserved x-synapse-submissionContext property itself', () => {
    const result = listResolvedSchemaProperties(withRenewalOnlyField)
    expect(result.map(p => p.propertyKey)).not.toContain(
      SUBMISSION_CONTEXT_PROPERTY,
    )
  })

  it('lets an unconditional definition win over a same-keyed conditional one', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { a: { type: 'string', title: 'top-level' } },
      allOf: [
        {
          if: {
            properties: {
              [SUBMISSION_CONTEXT_PROPERTY]: {
                const: DataAccessRequestType.RENEWAL,
              },
            },
          },
          then: { properties: { a: { type: 'string', title: 'shadowed' } } },
        },
      ],
    }
    const result = listResolvedSchemaProperties(schema)
    expect(result).toHaveLength(1)
    expect(result[0]).toMatchObject({
      propertyKey: 'a',
      context: 'ALWAYS',
      subSchema: { title: 'top-level' },
    })
  })

  it('ignores an allOf entry that does not follow the submission-context if/then convention', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { a: { type: 'string' } },
      allOf: [
        {
          if: { properties: { a: { const: 'x' } } },
          then: { properties: { b: { type: 'string' } } },
        },
      ],
    }
    expect(listResolvedSchemaProperties(schema)).toEqual([
      {
        propertyKey: 'a',
        subSchema: { type: 'string' },
        isRequired: false,
        context: 'ALWAYS',
      },
    ])
  })

  it('returns an empty list for a schema with no properties', () => {
    expect(listResolvedSchemaProperties({ type: 'object' })).toEqual([])
  })
})

describe('pointerToPropertyKey / propertyKeyToPointer', () => {
  it('round-trips a plain property key', () => {
    expect(pointerToPropertyKey(propertyKeyToPointer('institution'))).toBe(
      'institution',
    )
  })

  it('round-trips a property key containing a slash and a tilde', () => {
    const key = 'a/b~c'
    expect(pointerToPropertyKey(propertyKeyToPointer(key))).toBe(key)
  })

  it('returns null for a pointer missing the leading slash', () => {
    expect(pointerToPropertyKey('institution')).toBeNull()
  })

  it('returns null for a multi-segment pointer', () => {
    expect(pointerToPropertyKey('/a/b')).toBeNull()
  })

  it('returns null for an empty pointer', () => {
    expect(pointerToPropertyKey('/')).toBeNull()
  })
})

describe('resolveSchemaPropertyAtPointer', () => {
  it('resolves an unconditional property', () => {
    expect(
      resolveSchemaPropertyAtPointer(withRenewalOnlyField, '/institution'),
    ).toMatchObject({ context: 'ALWAYS' })
  })

  it('resolves a property gated behind an allOf branch', () => {
    expect(
      resolveSchemaPropertyAtPointer(withRenewalOnlyField, '/summaryOfUse'),
    ).toMatchObject({ context: 'RENEWAL_ONLY' })
  })

  it('returns undefined for a pointer that does not resolve', () => {
    expect(
      resolveSchemaPropertyAtPointer(withRenewalOnlyField, '/missing'),
    ).toBeUndefined()
  })
})

describe('contextAppliesForRequestType', () => {
  it('ALWAYS applies to both request types', () => {
    expect(
      contextAppliesForRequestType('ALWAYS', DataAccessRequestType.REQUEST),
    ).toBe(true)
    expect(
      contextAppliesForRequestType('ALWAYS', DataAccessRequestType.RENEWAL),
    ).toBe(true)
  })

  it('RENEWAL_ONLY applies only to a RENEWAL request', () => {
    expect(
      contextAppliesForRequestType(
        'RENEWAL_ONLY',
        DataAccessRequestType.RENEWAL,
      ),
    ).toBe(true)
    expect(
      contextAppliesForRequestType(
        'RENEWAL_ONLY',
        DataAccessRequestType.REQUEST,
      ),
    ).toBe(false)
  })

  it('REQUEST_ONLY applies only to a REQUEST request', () => {
    expect(
      contextAppliesForRequestType(
        'REQUEST_ONLY',
        DataAccessRequestType.REQUEST,
      ),
    ).toBe(true)
    expect(
      contextAppliesForRequestType(
        'REQUEST_ONLY',
        DataAccessRequestType.RENEWAL,
      ),
    ).toBe(false)
  })
})

describe('submissionContextLabel', () => {
  it('labels every context value', () => {
    expect(submissionContextLabel('ALWAYS')).toBe('Always')
    expect(submissionContextLabel('REQUEST_ONLY')).toBe('Request only')
    expect(submissionContextLabel('RENEWAL_ONLY')).toBe('Renewal only')
  })
})

describe('setSchemaProperty', () => {
  it('inserts a new ALWAYS property at the top level', () => {
    const schema: RJSFSchema = { type: 'object', properties: {} }
    const next = setSchemaProperty(
      schema,
      'institution',
      { type: 'string' },
      'ALWAYS',
    )
    expect(next.properties).toEqual({ institution: { type: 'string' } })
    expect(next.allOf).toBeUndefined()
  })

  it('inserts a new RENEWAL_ONLY property into a fresh allOf branch', () => {
    const schema: RJSFSchema = { type: 'object', properties: {} }
    const next = setSchemaProperty(
      schema,
      'summaryOfUse',
      { type: 'string' },
      'RENEWAL_ONLY',
    )
    expect(next.properties).toMatchObject({
      [SUBMISSION_CONTEXT_PROPERTY]: expect.anything(),
    })
    expect(next.required).toContain(SUBMISSION_CONTEXT_PROPERTY)
    expect(resolveSchemaPropertyAtPointer(next, '/summaryOfUse')).toMatchObject(
      { context: 'RENEWAL_ONLY', subSchema: { type: 'string' } },
    )
  })

  it('adds a second property to an existing RENEWAL_ONLY branch instead of creating a new one', () => {
    const withOne = setSchemaProperty(
      { type: 'object', properties: {} },
      'summaryOfUse',
      { type: 'string' },
      'RENEWAL_ONLY',
    )
    const withTwo = setSchemaProperty(
      withOne,
      'irbNumber',
      { type: 'string' },
      'RENEWAL_ONLY',
    )
    expect(withTwo.allOf).toHaveLength(1)
    expect(resolveSchemaPropertyAtPointer(withTwo, '/irbNumber')).toMatchObject(
      { context: 'RENEWAL_ONLY' },
    )
    expect(
      resolveSchemaPropertyAtPointer(withTwo, '/summaryOfUse'),
    ).toMatchObject({ context: 'RENEWAL_ONLY' })
  })

  it('relocates a property from ALWAYS to RENEWAL_ONLY', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { summaryOfUse: { type: 'string' } },
    }
    const next = setSchemaProperty(
      schema,
      'summaryOfUse',
      { type: 'string' },
      'RENEWAL_ONLY',
    )
    expect(next.properties).not.toHaveProperty('summaryOfUse')
    expect(resolveSchemaPropertyAtPointer(next, '/summaryOfUse')).toMatchObject(
      { context: 'RENEWAL_ONLY' },
    )
  })
})

describe('setSchemaPropertyRequired', () => {
  it('marks an ALWAYS property required', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { a: { type: 'string' } },
    }
    const next = setSchemaPropertyRequired(schema, 'a', 'ALWAYS', true)
    expect(next.required).toEqual(['a'])
  })

  it('is a no-op when the property is not actually defined at ALWAYS', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { a: { type: 'string' } },
    }
    const next = setSchemaPropertyRequired(schema, 'notDefined', 'ALWAYS', true)
    expect(next).toBe(schema)
    expect(next.required ?? []).not.toContain('notDefined')
  })

  it('marks a RENEWAL_ONLY property required within its branch', () => {
    const withField = setSchemaProperty(
      { type: 'object', properties: {} },
      'summaryOfUse',
      { type: 'string' },
      'RENEWAL_ONLY',
    )
    const next = setSchemaPropertyRequired(
      withField,
      'summaryOfUse',
      'RENEWAL_ONLY',
      true,
    )
    expect(resolveSchemaPropertyAtPointer(next, '/summaryOfUse')).toMatchObject(
      { isRequired: true },
    )
  })

  it('is a no-op when the branch exists but the property is not defined in it', () => {
    const withField = setSchemaProperty(
      { type: 'object', properties: {} },
      'summaryOfUse',
      { type: 'string' },
      'RENEWAL_ONLY',
    )
    const next = setSchemaPropertyRequired(
      withField,
      'notDefined',
      'RENEWAL_ONLY',
      true,
    )
    expect(next).toBe(withField)
  })

  it('is a no-op when no branch exists for the requested context', () => {
    const schema: RJSFSchema = { type: 'object', properties: {} }
    const next = setSchemaPropertyRequired(
      schema,
      'summaryOfUse',
      'RENEWAL_ONLY',
      true,
    )
    expect(next).toBe(schema)
  })

  it('unmarks a required property', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { a: { type: 'string' } },
      required: ['a'],
    }
    const next = setSchemaPropertyRequired(schema, 'a', 'ALWAYS', false)
    expect(next.required).toEqual([])
  })
})

describe('setSchemaPropertyContext', () => {
  it('moves a required property from ALWAYS to RENEWAL_ONLY, preserving required-ness', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { summaryOfUse: { type: 'string' } },
      required: ['summaryOfUse'],
    }
    const next = setSchemaPropertyContext(
      schema,
      'summaryOfUse',
      'RENEWAL_ONLY',
    )
    expect(resolveSchemaPropertyAtPointer(next, '/summaryOfUse')).toMatchObject(
      { context: 'RENEWAL_ONLY', isRequired: true },
    )
  })

  it('is a no-op when the property is already at the requested context', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { a: { type: 'string' } },
    }
    expect(setSchemaPropertyContext(schema, 'a', 'ALWAYS')).toBe(schema)
  })

  it('is a no-op when the property does not resolve', () => {
    const schema: RJSFSchema = { type: 'object', properties: {} }
    expect(setSchemaPropertyContext(schema, 'missing', 'RENEWAL_ONLY')).toBe(
      schema,
    )
  })
})

describe('removeSchemaProperty', () => {
  it('removes a top-level property', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { a: { type: 'string' }, b: { type: 'number' } },
      required: ['a'],
    }
    const next = removeSchemaProperty(schema, 'a')
    expect(next.properties).toEqual({ b: { type: 'number' } })
    expect(next.required).toEqual([])
  })

  it('removes a property from an allOf branch and drops the now-empty branch and allOf array', () => {
    const withField = setSchemaProperty(
      { type: 'object', properties: {} },
      'summaryOfUse',
      { type: 'string' },
      'RENEWAL_ONLY',
    )
    const next = removeSchemaProperty(withField, 'summaryOfUse')
    expect(next.allOf).toBeUndefined()
    expect(
      resolveSchemaPropertyAtPointer(next, '/summaryOfUse'),
    ).toBeUndefined()
  })

  it('is a no-op when the property does not exist anywhere', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { a: { type: 'string' } },
    }
    expect(removeSchemaProperty(schema, 'missing')).toBe(schema)
  })
})

describe('renameSchemaProperty', () => {
  it('renames a top-level property, preserving its definition and required-ness', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: { a: { type: 'string', title: 'A' } },
      required: ['a'],
    }
    const next = renameSchemaProperty(schema, 'a', 'z')
    expect(next.properties).not.toHaveProperty('a')
    expect(resolveSchemaPropertyAtPointer(next, '/z')).toMatchObject({
      subSchema: { type: 'string', title: 'A' },
      isRequired: true,
      context: 'ALWAYS',
    })
  })

  it('renames a property inside an allOf branch, preserving its context', () => {
    const withField = setSchemaProperty(
      { type: 'object', properties: {} },
      'summaryOfUse',
      { type: 'string' },
      'RENEWAL_ONLY',
    )
    const next = renameSchemaProperty(
      withField,
      'summaryOfUse',
      'renewalSummary',
    )
    expect(
      resolveSchemaPropertyAtPointer(next, '/summaryOfUse'),
    ).toBeUndefined()
    expect(
      resolveSchemaPropertyAtPointer(next, '/renewalSummary'),
    ).toMatchObject({ context: 'RENEWAL_ONLY' })
  })

  it('is a no-op when the old key does not resolve', () => {
    const schema: RJSFSchema = { type: 'object', properties: {} }
    expect(renameSchemaProperty(schema, 'missing', 'z')).toBe(schema)
  })
})
