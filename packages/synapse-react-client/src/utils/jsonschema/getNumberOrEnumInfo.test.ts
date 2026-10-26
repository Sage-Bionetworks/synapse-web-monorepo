import { JSONSchema7, JSONSchema7Definition } from 'json-schema'
import { getNumberOrEnumInfo } from './getNumberOrEnumInfo'

const ENUM_VALUES = ['>= 90', 'Unknown']

const numberBranch: JSONSchema7 = { type: 'number' }
const enumBranch: JSONSchema7 = { type: 'string', enum: ENUM_VALUES }

describe('getNumberOrEnumInfo', () => {
  it.each<[string, JSONSchema7, JSONSchema7['definitions']?]>([
    ['number and enum branches', { anyOf: [numberBranch, enumBranch] }],
    ['branches in reverse order', { anyOf: [enumBranch, numberBranch] }],
    ['oneOf instead of anyOf', { oneOf: [numberBranch, enumBranch] }],
    [
      'an additional null branch',
      { anyOf: [numberBranch, { type: 'null' }, enumBranch] },
    ],
    [
      'bounds on the numeric branch',
      {
        anyOf: [
          { type: 'number', minimum: 0, exclusiveMaximum: 90 },
          enumBranch,
        ],
      },
    ],
    [
      'a title on the enum branch',
      { anyOf: [numberBranch, { ...enumBranch, title: 'AgeMask' }] },
    ],
    [
      'an enum branch without a declared type',
      { anyOf: [numberBranch, { enum: ENUM_VALUES }] },
    ],
    [
      'one const branch per string',
      {
        oneOf: [
          numberBranch,
          { const: '>= 90', title: 'Masked' },
          { const: 'Unknown', title: 'Not recorded' },
        ],
      },
    ],
    [
      'enum and const branches together',
      {
        anyOf: [
          numberBranch,
          { type: 'string', enum: ['>= 90'] },
          { type: 'string', const: 'Unknown' },
        ],
      },
    ],
    [
      'a string repeated across branches',
      {
        anyOf: [numberBranch, enumBranch, { type: 'string', const: '>= 90' }],
      },
    ],
    [
      'an enum branch referenced from definitions',
      { anyOf: [numberBranch, { $ref: '#/definitions/AgeMask' }] },
      { AgeMask: enumBranch },
    ],
  ])('detects %s', (_, propertySchema, definitions) => {
    expect(getNumberOrEnumInfo(propertySchema, definitions)).toEqual({
      numericType: 'number',
      enumValues: ENUM_VALUES,
    })
  })

  it('reports an integer numeric branch', () => {
    expect(
      getNumberOrEnumInfo({ anyOf: [{ type: 'integer' }, enumBranch] }),
    ).toEqual({ numericType: 'integer', enumValues: ENUM_VALUES })
  })

  it.each<[string, JSONSchema7Definition | undefined]>([
    ['an undefined schema', undefined],
    ['a boolean schema', true],
    ['a plain number property', numberBranch],
    ['a plain enum property', enumBranch],
    ['an open string branch', { anyOf: [numberBranch, { type: 'string' }] }],
    [
      'an enum branch with an empty enum',
      { anyOf: [numberBranch, { type: 'string', enum: [] }] },
    ],
    [
      'an enum branch with non-string values',
      { anyOf: [numberBranch, { enum: ['>= 90', 90] }] },
    ],
    [
      'an enum branch with a non-string type',
      { anyOf: [numberBranch, { type: 'boolean', enum: ['>= 90'] }] },
    ],
    [
      'a non-numeric, non-enum branch',
      { anyOf: [{ type: 'boolean' }, enumBranch] },
    ],
    ['no numeric branch', { anyOf: [enumBranch, enumBranch] }],
    [
      'two numeric branches',
      { anyOf: [numberBranch, { type: 'integer' }, enumBranch] },
    ],
    [
      'an additional non-enum branch',
      { anyOf: [numberBranch, enumBranch, { type: 'boolean' }] },
    ],
    ['only a numeric branch', { oneOf: [numberBranch, { type: 'null' }] }],
    [
      'an unresolvable reference',
      { anyOf: [numberBranch, { $ref: '#/definitions/Missing' }] },
    ],
    [
      'an array of number-or-enum values',
      { type: 'array', items: { anyOf: [numberBranch, enumBranch] } },
    ],
  ])('does not detect %s', (_, propertySchema) => {
    expect(getNumberOrEnumInfo(propertySchema)).toBeNull()
  })
})
