import { JSONSchema7, JSONSchema7Definition } from 'json-schema'
import { AGE_MASK_TITLE, getAgeMaskInfo } from './getAgeMaskInfo'

const SENTINELS = ['>= 90', 'Unknown']

const numberBranch: JSONSchema7 = { type: 'number' }
const maskBranch: JSONSchema7 = {
  type: 'string',
  title: AGE_MASK_TITLE,
  enum: SENTINELS,
}

describe('getAgeMaskInfo', () => {
  it.each<[string, JSONSchema7, JSONSchema7['definitions']?]>([
    ['number and mask branches', { anyOf: [numberBranch, maskBranch] }],
    ['branches in reverse order', { anyOf: [maskBranch, numberBranch] }],
    ['oneOf instead of anyOf', { oneOf: [numberBranch, maskBranch] }],
    [
      'an additional null branch',
      { anyOf: [numberBranch, { type: 'null' }, maskBranch] },
    ],
    [
      'bounds on the numeric branch',
      {
        anyOf: [
          { type: 'number', minimum: 0, exclusiveMaximum: 90 },
          maskBranch,
        ],
      },
    ],
    [
      'a mask branch referenced from definitions',
      { anyOf: [numberBranch, { $ref: '#/definitions/AgeMask' }] },
      { AgeMask: maskBranch },
    ],
  ])('detects a masked age with %s', (_, propertySchema, definitions) => {
    expect(getAgeMaskInfo(propertySchema, definitions)).toEqual({
      numericType: 'number',
      sentinels: SENTINELS,
    })
  })

  it('reports an integer numeric branch', () => {
    expect(
      getAgeMaskInfo({ anyOf: [{ type: 'integer' }, maskBranch] }),
    ).toEqual({ numericType: 'integer', sentinels: SENTINELS })
  })

  it('reads a single sentinel from const', () => {
    expect(
      getAgeMaskInfo({
        anyOf: [
          numberBranch,
          { type: 'string', title: AGE_MASK_TITLE, const: '>= 90' },
        ],
      }),
    ).toEqual({ numericType: 'number', sentinels: ['>= 90'] })
  })

  it.each<[string, JSONSchema7Definition | undefined]>([
    ['an undefined schema', undefined],
    ['a boolean schema', true],
    ['a plain number property', numberBranch],
    ['a plain enum property', maskBranch],
    [
      'a mask branch without the AgeMask title',
      { anyOf: [numberBranch, { type: 'string', enum: SENTINELS }] },
    ],
    [
      'a mask branch with a differently cased title',
      {
        anyOf: [
          numberBranch,
          { type: 'string', title: 'agemask', enum: SENTINELS },
        ],
      },
    ],
    [
      'a mask branch without a string type',
      { anyOf: [numberBranch, { title: AGE_MASK_TITLE, enum: SENTINELS }] },
    ],
    [
      'a mask branch without enum or const',
      { anyOf: [numberBranch, { type: 'string', title: AGE_MASK_TITLE }] },
    ],
    [
      'a mask branch with an empty enum',
      {
        anyOf: [
          numberBranch,
          { type: 'string', title: AGE_MASK_TITLE, enum: [] },
        ],
      },
    ],
    [
      'a mask branch with non-string enum values',
      {
        anyOf: [
          numberBranch,
          { type: 'string', title: AGE_MASK_TITLE, enum: ['>= 90', 90] },
        ],
      },
    ],
    [
      'a non-numeric second branch',
      { anyOf: [{ type: 'boolean' }, maskBranch] },
    ],
    ['two mask branches', { anyOf: [maskBranch, maskBranch] }],
    [
      'a third non-null branch',
      { anyOf: [numberBranch, maskBranch, { type: 'boolean' }] },
    ],
    ['only one branch', { anyOf: [maskBranch] }],
    [
      'an unresolvable reference',
      { anyOf: [numberBranch, { $ref: '#/definitions/Missing' }] },
    ],
    [
      'an array of masked ages',
      { type: 'array', items: { anyOf: [numberBranch, maskBranch] } },
    ],
  ])('does not detect %s', (_, propertySchema) => {
    expect(getAgeMaskInfo(propertySchema)).toBeNull()
  })
})
