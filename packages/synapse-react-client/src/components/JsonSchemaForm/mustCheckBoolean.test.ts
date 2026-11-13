import { RJSFSchema, RJSFValidationError } from '@rjsf/utils'
import {
  explainMustCheckErrors,
  isMustCheckBoolean,
  MUST_CHECK_ERROR_MESSAGE,
} from './mustCheckBoolean'

describe('isMustCheckBoolean', () => {
  it.each<[RJSFSchema | undefined, boolean]>([
    [{ type: 'boolean', const: true }, true],
    [{ type: 'boolean' }, false],
    [{ type: 'boolean', const: false }, false],
    [{ type: 'boolean', enum: [true] }, false],
    [{ type: 'string', const: 'yes' }, false],
    [undefined, false],
  ])('%j → %s', (schema, expected) => {
    expect(isMustCheckBoolean(schema)).toBe(expected)
  })
})

describe('explainMustCheckErrors', () => {
  const stepSchema: RJSFSchema = {
    type: 'object',
    properties: {
      agreeToTerms: { type: 'boolean', const: true },
      institution: { type: 'string' },
    },
    required: ['agreeToTerms', 'institution'],
  }

  function error(
    name: string,
    property: string | undefined,
  ): RJSFValidationError {
    return { name, property, message: 'raw', stack: 'raw' }
  }

  it.each([
    ['required', 'agreeToTerms'],
    ['const', '.agreeToTerms'],
  ])('explains a %s error on a must-be-true box', (name, property) => {
    expect(
      explainMustCheckErrors(stepSchema, [error(name, property)])[0].message,
    ).toBe(MUST_CHECK_ERROR_MESSAGE)
  })

  it.each([
    ['a required error on another field', error('required', 'institution')],
    ['another kind of error on the box', error('type', '.agreeToTerms')],
    ['an error naming no field', error('required', undefined)],
    ['an error on an unknown field', error('required', 'missing')],
  ])('keeps the message of %s', (_, raw) => {
    expect(explainMustCheckErrors(stepSchema, [raw])).toEqual([raw])
  })
})
