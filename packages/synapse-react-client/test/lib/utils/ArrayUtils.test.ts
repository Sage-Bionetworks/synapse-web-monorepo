import { removeTrailingUndefinedElements } from '../../../src/lib/utils/functions/ArrayUtils'

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
})
