import { removeTrailingUndefinedElements, hasDifference } from './ArrayUtils'

describe('ArrayUtils', () => {
  test.each([
    ['empty array', [], []],
    ['keeps undefined in middle', ['a', undefined, 'c'], ['a', undefined, 'c']],
    ['keeps empty object in middle', ['a', {}, 'c'], ['a', {}, 'c']],
    ['removes undefined at end', ['a', 'b', undefined], ['a', 'b']],
    ['removes empty object at end', ['a', 'b', {}], ['a', 'b']],
    [
      'removes trailing object with undefined values',
      [
        'a',
        'b',
        {
          c: undefined,
        },
      ],
      ['a', 'b'],
    ],
    [
      'removes multiple trailing undefined/empty',
      ['a', 'b', undefined, {}],
      ['a', 'b'],
    ],
  ])('removeTrailingUndefinedElements - %s', (caseName, arg, expected) => {
    expect(removeTrailingUndefinedElements(arg)).toEqual(expected)
  })

  test.each([
    [[], [], false],
    [[1, 2, 3], [1, 2, 3], false],
    [[1, 2, 3], [1, 2, 4], true],
    [[1, 2, 3], [1, 2], true],
  ])('hasDifference, %j and %j', (first, second, expected) => {
    expect(hasDifference(first, second)).toBe(expected)
    // verify it is commutative
    expect(hasDifference(second, first)).toBe(expected)
  })
})
