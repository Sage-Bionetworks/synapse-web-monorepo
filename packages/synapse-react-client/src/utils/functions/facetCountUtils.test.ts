import { formatFacetValueCount } from './facetCountUtils'

describe('formatFacetValueCount', () => {
  it.each([
    {
      case: 'a binned count as the bin range',
      count: 10,
      binSize: 5,
      facetPostProcessingApplied: true,
      expected: '10–14',
    },
    {
      case: 'a bin minimum of 0 as starting at 1',
      count: 0,
      binSize: 5,
      facetPostProcessingApplied: true,
      expected: '1–4',
    },
    {
      case: 'a bin size of 1 as the exact count',
      count: 7,
      binSize: 1,
      facetPostProcessingApplied: true,
      expected: '7',
    },
    {
      case: 'a noised count (post-processed, not binned) as approximate',
      count: 12,
      binSize: undefined,
      facetPostProcessingApplied: true,
      expected: '≈ 12',
    },
    {
      case: 'a noised count of 0 as approximate',
      count: 0,
      binSize: undefined,
      facetPostProcessingApplied: true,
      expected: '≈ 0',
    },
    {
      case: 'an exact count as-is',
      count: 12,
      binSize: undefined,
      facetPostProcessingApplied: undefined,
      expected: '12',
    },
  ])(
    'formats $case',
    ({ count, binSize, facetPostProcessingApplied, expected }) => {
      expect(
        formatFacetValueCount(count, { binSize }, facetPostProcessingApplied),
      ).toBe(expected)
    },
  )

  it('localizes both ends of a bin range', () => {
    expect(formatFacetValueCount(1565, { binSize: 5 }, true)).toBe(
      `${(1565).toLocaleString()}–${(1569).toLocaleString()}`,
    )
  })
})
