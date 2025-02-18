import { chunkItemsIntoEvenlyDistributedGroups } from './EvenlyDistributedWrappedContainer'

describe('EvenlyDistributedWrappedContainer', () => {
  test('chunkItemsIntoEvenlyDistributedGroups', () => {
    // 0 - 3 items
    expect(chunkItemsIntoEvenlyDistributedGroups<number>([])).toEqual([])
    expect(chunkItemsIntoEvenlyDistributedGroups([1])).toEqual([[1]])
    expect(chunkItemsIntoEvenlyDistributedGroups([1, 2])).toEqual([[1, 2]])
    expect(chunkItemsIntoEvenlyDistributedGroups([1, 2, 3])).toEqual([
      [1, 2, 3],
    ])

    // % 4 === 0 items (4, 8)
    expect(chunkItemsIntoEvenlyDistributedGroups([1, 2, 3, 4])).toEqual([
      [1, 2, 3, 4],
    ])
    expect(
      chunkItemsIntoEvenlyDistributedGroups([1, 2, 3, 4, 5, 6, 7, 8]),
    ).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ])

    // % 4 === 1 items (5, 9)
    expect(chunkItemsIntoEvenlyDistributedGroups([1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3],
      [4, 5],
    ])
    expect(
      chunkItemsIntoEvenlyDistributedGroups([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    ).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7],
      [8, 9],
    ])

    // % 4 === 2 items (6, 10)
    expect(chunkItemsIntoEvenlyDistributedGroups([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ])
    expect(
      chunkItemsIntoEvenlyDistributedGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    ).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7],
      [8, 9, 10],
    ])

    // % 4 === 3 items (7, 11)
    expect(
      chunkItemsIntoEvenlyDistributedGroups([1, 2, 3, 4, 5, 6, 7]),
    ).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7],
    ])
    expect(
      chunkItemsIntoEvenlyDistributedGroups([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      ]),
    ).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11],
    ])
  })
})
