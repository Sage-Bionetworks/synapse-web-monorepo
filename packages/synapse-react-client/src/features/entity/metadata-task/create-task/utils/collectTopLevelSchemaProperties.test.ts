import { JSONSchema7 } from 'json-schema'
import { collectTopLevelSchemaProperties } from './collectTopLevelSchemaProperties'

describe('collectTopLevelSchemaProperties', () => {
  it('returns an empty array for a missing schema', () => {
    expect(collectTopLevelSchemaProperties(undefined)).toEqual([])
    expect(collectTopLevelSchemaProperties(null)).toEqual([])
  })

  it('collects top-level property names in declaration order', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        age: { type: 'number' },
      },
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual([
      'firstName',
      'lastName',
      'age',
    ])
  })

  it('includes properties declared in allOf sub-schemas, appended after root properties', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      properties: {
        firstName: { type: 'string' },
      },
      allOf: [
        {
          properties: {
            middleName: { type: 'string' },
          },
        },
        {
          properties: {
            lastName: { type: 'string' },
          },
        },
      ],
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual([
      'firstName',
      'middleName',
      'lastName',
    ])
  })

  it('keeps the first occurrence of a duplicated property name (root wins over allOf)', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      properties: {
        firstName: { type: 'string' },
      },
      allOf: [
        {
          properties: {
            firstName: { type: 'number' },
            middleName: { type: 'string' },
          },
        },
      ],
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual([
      'firstName',
      'middleName',
    ])
  })

  it('includes properties declared in anyOf sub-schemas', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      anyOf: [
        {
          properties: {
            usPhoneNumber: { type: 'string' },
          },
        },
      ],
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual(['usPhoneNumber'])
  })

  it('includes properties declared in oneOf sub-schemas', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      oneOf: [
        {
          properties: {
            catId: { type: 'string' },
          },
        },
        {
          properties: {
            dogId: { type: 'string' },
          },
        },
      ],
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual(['catId', 'dogId'])
  })

  it('includes properties declared in if/then/else sub-schemas', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      properties: {
        country: { type: 'string' },
      },
      if: {
        properties: { country: { const: 'USA' } },
      },
      then: {
        properties: { state: { type: 'string' } },
      },
      else: {
        properties: { province: { type: 'string' } },
      },
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual([
      'country',
      'state',
      'province',
    ])
  })

  it('visits combination keywords in a fixed order: allOf, anyOf, oneOf, if, then, else', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      allOf: [{ properties: { a: { type: 'string' } } }],
      anyOf: [{ properties: { b: { type: 'string' } } }],
      oneOf: [{ properties: { c: { type: 'string' } } }],
      if: { properties: { d: { type: 'string' } } },
      then: { properties: { e: { type: 'string' } } },
      else: { properties: { f: { type: 'string' } } },
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ])
  })

  it('follows a $ref against root definitions', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      allOf: [{ $ref: '#/definitions/Address' }],
      definitions: {
        Address: {
          properties: {
            street: { type: 'string' },
            city: { type: 'string' },
          },
        },
      },
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual(['street', 'city'])
  })

  it('does not re-visit an already-visited $ref (cycle avoidance)', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      allOf: [{ $ref: '#/definitions/A' }, { $ref: '#/definitions/A' }],
      definitions: {
        A: {
          allOf: [{ $ref: '#/definitions/A' }],
          properties: {
            recursiveProp: { type: 'string' },
          },
        },
      },
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual(['recursiveProp'])
  })

  it('returns an empty array when a $ref cannot be resolved', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      allOf: [{ $ref: '#/definitions/Missing' }],
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual([])
  })

  it("does not descend into a property value's own nested properties", () => {
    const schema: JSONSchema7 = {
      type: 'object',
      properties: {
        address: {
          type: 'object',
          properties: {
            street: { type: 'string' },
          },
        },
      },
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual(['address'])
  })

  it('does not descend into items, contains, additionalProperties, or not', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      properties: {
        tags: {
          type: 'array',
          items: { type: 'object', properties: { leaked: { type: 'string' } } },
          contains: {
            type: 'object',
            properties: { alsoLeaked: { type: 'string' } },
          },
        },
      },
      additionalProperties: {
        type: 'object',
        properties: { additionalLeaked: { type: 'string' } },
      },
      not: {
        type: 'object',
        properties: { notLeaked: { type: 'string' } },
      },
    }

    expect(collectTopLevelSchemaProperties(schema)).toEqual(['tags'])
  })
})
