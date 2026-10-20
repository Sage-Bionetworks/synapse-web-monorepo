import { JSONSchema7 } from 'json-schema'
import { AGE_MASK_TITLE } from './getAgeMaskInfo'
import { getSchemaPropertiesInfo } from './getSchemaPropertyInfo'

const SENTINELS = ['>= 90', 'Unknown']

const maskedAgeSchema: JSONSchema7 = {
  description: 'Age at enrollment',
  anyOf: [
    { type: 'number' },
    { type: 'string', title: AGE_MASK_TITLE, enum: SENTINELS },
  ],
}

describe('getSchemaPropertiesInfo', () => {
  it('returns an empty map for a null schema', () => {
    expect(getSchemaPropertiesInfo(null)).toEqual({})
  })

  it('describes a masked age by its numeric type and sentinels', () => {
    const result = getSchemaPropertiesInfo({
      type: 'object',
      properties: { age: maskedAgeSchema },
      required: ['age'],
    })

    expect(result.age).toEqual({
      type: { type: 'number', isArray: false },
      isRequired: true,
      enumeratedValues: SENTINELS,
      description: 'Age at enrollment',
      ageMask: { numericType: 'number', sentinels: SENTINELS },
    })
  })

  it('keeps the read-only flag declared alongside a masked age', () => {
    const result = getSchemaPropertiesInfo({
      type: 'object',
      properties: { age: { ...maskedAgeSchema, readOnly: true } },
    })

    expect(result.age.type).toEqual({
      type: 'number',
      isArray: false,
      readOnly: true,
    })
  })

  it('resolves a mask branch from the root definitions', () => {
    const result = getSchemaPropertiesInfo({
      type: 'object',
      definitions: {
        AgeMask: { type: 'string', title: AGE_MASK_TITLE, enum: SENTINELS },
      },
      properties: {
        age: {
          anyOf: [{ type: 'integer' }, { $ref: '#/definitions/AgeMask' }],
        },
      },
    })

    expect(result.age.ageMask).toEqual({
      numericType: 'integer',
      sentinels: SENTINELS,
    })
  })

  it('does not log an enumeration error for a masked age', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    getSchemaPropertiesInfo({
      type: 'object',
      properties: { age: maskedAgeSchema },
    })

    expect(consoleErrorSpy).not.toHaveBeenCalled()
    consoleErrorSpy.mockRestore()
  })

  it('leaves an anyOf without the AgeMask title as a plain string property', () => {
    // getEnumeratedValues logs when RJSF cannot read this anyOf as an enumeration
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const result = getSchemaPropertiesInfo({
      type: 'object',
      properties: {
        score: {
          anyOf: [{ type: 'number' }, { type: 'string', enum: ['N/A'] }],
        },
      },
    })

    expect(result.score).toEqual({
      type: { type: 'string', isArray: false },
      isRequired: false,
      enumeratedValues: null,
      description: undefined,
    })
    consoleErrorSpy.mockRestore()
  })
})
