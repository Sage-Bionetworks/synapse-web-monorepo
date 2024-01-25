import { isEqualTreatUndefinedAsMissing } from './IsEqualTreatUndefinedAsMissing'

describe('IsEqualTreatUndefinedAsMissing', () => {
  test('undefined and missing object values are considered equal', () => {
    expect(isEqualTreatUndefinedAsMissing({}, {})).toBe(true)
    expect(isEqualTreatUndefinedAsMissing({ foo: true }, {})).toBe(false)
    expect(
      isEqualTreatUndefinedAsMissing({ foo: true }, { foo: undefined }),
    ).toBe(false)

    expect(
      isEqualTreatUndefinedAsMissing(
        { foo: true, bar: undefined },
        { foo: true },
      ),
    ).toBe(true)

    expect(
      isEqualTreatUndefinedAsMissing({ foo: true, bar: null }, { foo: true }),
    ).toBe(false)

    expect(
      isEqualTreatUndefinedAsMissing(
        { foo: true, bar: { baz: undefined } },
        { foo: true, bar: {} },
      ),
    ).toBe(true)

    expect(isEqualTreatUndefinedAsMissing(undefined, null)).toBe(false)
    expect(isEqualTreatUndefinedAsMissing('', undefined)).toBe(false)
  })
})
