import { getNamedColumnIndices } from './getNamedColumnIndices'

describe('getNamedColumnIndices', () => {
  it('keeps every index, in the given order, when all of them resolve to a name', () => {
    expect(getNamedColumnIndices(['a', 'b', 'c'], [2, 0, 1])).toEqual([2, 0, 1])
  })

  it('drops indices past the end of columnNames', () => {
    expect(getNamedColumnIndices(['a'], [0, 1, 2])).toEqual([0])
  })

  it('drops indices whose name slot is unset', () => {
    const columnNames = ['a', undefined, 'c'] as unknown as string[]

    expect(getNamedColumnIndices(columnNames, [0, 1, 2])).toEqual([0, 2])
  })

  it('drops indices whose name is empty, matching how rows are keyed by column name', () => {
    expect(getNamedColumnIndices(['a', '', 'c'], [0, 1, 2])).toEqual([0, 2])
  })

  it('returns nothing when no columns are named yet', () => {
    expect(getNamedColumnIndices([], [0, 1])).toEqual([])
  })
})
