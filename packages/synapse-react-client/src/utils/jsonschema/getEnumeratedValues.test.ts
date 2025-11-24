import getEnumeratedValues from '@/utils/jsonschema/getEnumeratedValues'

describe('getEnumeratedValues', () => {
  it('works with enum', () => {
    const result = getEnumeratedValues({
      type: 'string',
      enum: ['a', 'b', 'c'],
    })
    expect(result).toEqual([{ value: 'a' }, { value: 'b' }, { value: 'c' }])
  })

  it('works with oneOf -> enum', () => {
    const schema = {
      oneOf: [
        {
          enum: ['foo', 'bar', 'baz'],
        },
      ],
    }
    const expected = [{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]
    expect(expected).toEqual(getEnumeratedValues(schema))
  })
  it('works with oneOf -> enum with an extra schema for null type', () => {
    const schema = {
      oneOf: [
        {
          enum: ['foo', 'bar', 'baz'],
        },
        {
          type: 'null',
        },
      ],
    }
    const expected = [{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]
    expect(expected).toEqual(getEnumeratedValues(schema))
  })
  it('Handles an anyOf that does not include an enum schema', () => {
    // PORTALS-7507 - getEnumeratedValues should not throw an error
    const schema = {
      anyOf: [
        {
          type: 'number',
          maximum: 10000,
          minimum: 0,
        },
        {
          type: 'string',
          maxLength: 0,
        },
      ],
    }

    expect(getEnumeratedValues(schema)).toEqual([])
  })
  it('works with boolean', () => {
    const result = getEnumeratedValues({
      type: 'boolean',
    })
    expect(result).toEqual([{ value: true }, { value: false }])
  })
})
