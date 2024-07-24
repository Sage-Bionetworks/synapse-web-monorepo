import isEqualTreatArraysAsSets from './isEqualTreatArraysAsSets'

describe('isEqualTreatArraysAsSets', () => {
  test('arrays are compared without considering order', () => {
    expect(isEqualTreatArraysAsSets(['a', 'b'], ['b', 'a'])).toBe(true)
    expect(
      isEqualTreatArraysAsSets({ foo: ['a', 'b'] }, { foo: ['b', 'a'] }),
    ).toBe(true)
    expect(
      isEqualTreatArraysAsSets(
        [{ foo: ['a', 'b'] }, { foo: ['c', 'd'] }],
        [{ foo: ['d', 'c'] }, { foo: ['b', 'a'] }],
      ),
    ).toBe(true)

    expect(
      isEqualTreatArraysAsSets(
        [{ foo: ['a', 'b'] }, { foo: ['c', 'd'] }],
        [{ foo: ['a', 'c'] }, { foo: ['b', 'd'] }],
      ),
    ).toBe(false)

    expect(isEqualTreatArraysAsSets(['a', 'a', 'b'], ['b', 'a', 'a'])).toBe(
      true,
    )
    expect(isEqualTreatArraysAsSets(['a', 'a', 'b'], ['b', 'b', 'a'])).toBe(
      true,
    )
  })
})
