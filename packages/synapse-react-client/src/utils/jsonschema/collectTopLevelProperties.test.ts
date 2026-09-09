import { JSONSchema7 } from 'json-schema'
import { collectTopLevelProperties } from './collectTopLevelProperties'

/**
 * These cases mirror the backend's JsonSchemaPropertiesTest, which covers the canonical definition of
 * a schema's top-level properties. Keep the two in sync.
 */
describe('collectTopLevelProperties', () => {
  it('collects flat properties', () => {
    const a: JSONSchema7 = { type: 'integer' }
    const b: JSONSchema7 = { type: 'boolean' }

    expect(collectTopLevelProperties({ properties: { a, b } })).toEqual({
      a,
      b,
    })
  })

  it('follows a top-level $ref', () => {
    const a: JSONSchema7 = { type: 'integer' }
    const schema: JSONSchema7 = {
      $ref: '#/definitions/X',
      definitions: { X: { properties: { a } } },
    }

    expect(collectTopLevelProperties(schema)).toEqual({ a })
  })

  it('collects from allOf, anyOf, and oneOf, in a deterministic order after the schema’s own properties', () => {
    const own: JSONSchema7 = { type: 'string' }
    const fromAllOf: JSONSchema7 = { type: 'integer' }
    const fromAnyOf: JSONSchema7 = { type: 'boolean' }
    const fromOneOf: JSONSchema7 = { type: 'number' }
    const schema: JSONSchema7 = {
      properties: { own },
      definitions: { X: { properties: { fromAllOf } } },
      allOf: [{ $ref: '#/definitions/X' }],
      anyOf: [{ properties: { fromAnyOf } }],
      oneOf: [{ properties: { fromOneOf } }],
    }

    const result = collectTopLevelProperties(schema)

    expect(result).toEqual({ own, fromAllOf, fromAnyOf, fromOneOf })
    expect(Object.keys(result)).toEqual([
      'own',
      'fromAllOf',
      'fromAnyOf',
      'fromOneOf',
    ])
  })

  it('collects from if, then, and else', () => {
    const fromIf: JSONSchema7 = { type: 'string' }
    const fromThen: JSONSchema7 = { type: 'integer' }
    const fromElse: JSONSchema7 = { type: 'boolean' }
    const schema: JSONSchema7 = {
      if: { properties: { fromIf } },
      then: { properties: { fromThen } },
      else: { properties: { fromElse } },
    }

    expect(collectTopLevelProperties(schema)).toEqual({
      fromIf,
      fromThen,
      fromElse,
    })
  })

  it('does not expand the properties of a nested object', () => {
    const obj: JSONSchema7 = {
      type: 'object',
      properties: { nested: { type: 'string' } },
    }

    expect(collectTopLevelProperties({ properties: { obj } })).toEqual({ obj })
  })

  it('does not expand array items', () => {
    const arr: JSONSchema7 = {
      type: 'array',
      items: { type: 'object', properties: { itemField: { type: 'string' } } },
    }

    expect(collectTopLevelProperties({ properties: { arr } })).toEqual({ arr })
  })

  it('does not expand the properties of a definition that is only used as array items', () => {
    const myItems: JSONSchema7 = {
      type: 'array',
      items: { $ref: '#/definitions/MyItemDefinition' },
    }
    const schema: JSONSchema7 = {
      definitions: {
        MyItemDefinition: {
          type: 'object',
          properties: { ignoreMe: { type: 'string' } },
        },
      },
      properties: { myItems },
    }

    expect(collectTopLevelProperties(schema)).toEqual({ myItems })
  })

  it('resolves a property value that is a $ref', () => {
    const resolvedTarget: JSONSchema7 = {
      type: 'array',
      items: { type: 'string' },
    }
    const schema: JSONSchema7 = {
      properties: { foo: { $ref: '#/definitions/Y' } },
      definitions: { Y: resolvedTarget },
    }

    expect(collectTopLevelProperties(schema)).toEqual({ foo: resolvedTarget })
  })

  it('keeps a dangling property value $ref so the property name is preserved', () => {
    const dangling: JSONSchema7 = { $ref: '#/definitions/Missing' }
    const schema: JSONSchema7 = {
      properties: { bar: dangling },
      definitions: {},
    }

    expect(collectTopLevelProperties(schema)).toEqual({ bar: dangling })
  })

  it('excludes properties under not, contains, and additionalProperties', () => {
    const keep: JSONSchema7 = { type: 'integer' }
    const schema: JSONSchema7 = {
      properties: { keep },
      not: { properties: { fromNot: { type: 'string' } } },
      contains: { properties: { fromContains: { type: 'string' } } },
      additionalProperties: {
        properties: { fromAdditional: { type: 'string' } },
      },
    }

    expect(collectTopLevelProperties(schema)).toEqual({ keep })
  })

  it('lets the first occurrence of a name win, so the schema’s own property beats a composed one', () => {
    const rootDup: JSONSchema7 = { type: 'integer' }
    const schema: JSONSchema7 = {
      properties: { dup: rootDup },
      allOf: [{ properties: { dup: { type: 'string' } } }],
    }

    expect(collectTopLevelProperties(schema)).toEqual({ dup: rootDup })
  })

  it('terminates on a definition cycle', () => {
    const x: JSONSchema7 = { type: 'integer' }
    const y: JSONSchema7 = { type: 'string' }
    const schema: JSONSchema7 = {
      $ref: '#/definitions/X',
      definitions: {
        X: { properties: { x }, allOf: [{ $ref: '#/definitions/Y' }] },
        Y: { properties: { y }, allOf: [{ $ref: '#/definitions/X' }] },
      },
    }

    expect(collectTopLevelProperties(schema)).toEqual({ x, y })
  })

  it('returns an empty object when there is no schema', () => {
    expect(collectTopLevelProperties(undefined)).toEqual({})
  })

  it('returns an empty object when the schema has no properties', () => {
    expect(collectTopLevelProperties({})).toEqual({})
  })

  it('returns an empty object for a $ref with no definitions to resolve against', () => {
    expect(collectTopLevelProperties({ $ref: '#/definitions/X' })).toEqual({})
  })

  it('resolves a $ref given as a bare definition key', () => {
    const a: JSONSchema7 = { type: 'integer' }
    const schema: JSONSchema7 = {
      $ref: 'Z',
      definitions: { Z: { properties: { a } } },
    }

    expect(collectTopLevelProperties(schema)).toEqual({ a })
  })
})
