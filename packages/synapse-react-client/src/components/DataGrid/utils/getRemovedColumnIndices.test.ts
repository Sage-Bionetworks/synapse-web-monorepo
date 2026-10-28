import { getRemovedColumnIndices } from './getRemovedColumnIndices'

describe('getRemovedColumnIndices', () => {
  it('returns named columns that are absent from the column order, in identity order', () => {
    expect(getRemovedColumnIndices(['a', 'b', 'c', 'd'], [2, 0])).toEqual([
      1, 3,
    ])
  })

  it('returns nothing when every named column is displayed', () => {
    expect(getRemovedColumnIndices(['a', 'b', 'c'], [2, 0, 1])).toEqual([])
  })

  it('does not treat unnamed columns as removed', () => {
    const columnNames = ['a', undefined, '', 'd'] as unknown as string[]

    expect(getRemovedColumnIndices(columnNames, [0])).toEqual([3])
  })
})
