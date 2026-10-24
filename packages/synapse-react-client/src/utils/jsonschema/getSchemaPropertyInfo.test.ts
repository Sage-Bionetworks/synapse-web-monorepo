import { JSONSchema7 } from 'json-schema'
import { getSchemaPropertiesInfo } from './getSchemaPropertyInfo'

const ENUM_VALUES = ['>= 90', 'Unknown']

const maskedAgeSchema: JSONSchema7 = {
  description: 'Age at enrollment',
  anyOf: [{ type: 'number' }, { type: 'string', enum: ENUM_VALUES }],
}

describe('getSchemaPropertiesInfo', () => {
  it('returns an empty map for a null schema', () => {
    expect(getSchemaPropertiesInfo(null)).toEqual({})
  })

  it('describes a number-or-enum union by its numeric type and allowed strings', () => {
    const result = getSchemaPropertiesInfo({
      type: 'object',
      properties: { age: maskedAgeSchema },
      required: ['age'],
    })

    expect(result.age).toEqual({
      type: { type: 'number', isArray: false },
      isRequired: true,
      enumeratedValues: ENUM_VALUES,
      description: 'Age at enrollment',
      numberOrEnum: { numericType: 'number', enumValues: ENUM_VALUES },
    })
  })

  it('keeps the read-only flag declared alongside a number-or-enum union', () => {
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

  it('resolves an enum branch from the root definitions', () => {
    const result = getSchemaPropertiesInfo({
      type: 'object',
      definitions: {
        AgeMask: { type: 'string', enum: ENUM_VALUES },
      },
      properties: {
        age: {
          anyOf: [{ type: 'integer' }, { $ref: '#/definitions/AgeMask' }],
        },
      },
    })

    expect(result.age.numberOrEnum).toEqual({
      numericType: 'integer',
      enumValues: ENUM_VALUES,
    })
  })

  it('does not log an enumeration error for a number-or-enum union', () => {
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

  it('leaves a number-or-open-string union as a plain string property', () => {
    // getEnumeratedValues logs when RJSF cannot read this anyOf as an enumeration
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const result = getSchemaPropertiesInfo({
      type: 'object',
      properties: {
        notes: { anyOf: [{ type: 'number' }, { type: 'string' }] },
      },
    })

    expect(result.notes).toEqual({
      type: { type: 'string', isArray: false },
      isRequired: false,
      enumeratedValues: null,
      description: undefined,
    })
    consoleErrorSpy.mockRestore()
  })
})
