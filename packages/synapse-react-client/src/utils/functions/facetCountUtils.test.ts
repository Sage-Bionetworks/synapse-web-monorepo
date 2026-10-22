import { formatFacetValueCount } from './facetCountUtils'

describe('formatFacetValueCount', () => {
  it.each([
    {
      case: 'a binned count as approximate',
      count: 1200,
      binSize: 5,
      facetPostProcessingApplied: true,
      expected: `≈ ${(1200).toLocaleString()}`,
    },
    {
      case: 'a bin minimum of 0 as approximate',
      count: 0,
      binSize: 5,
      facetPostProcessingApplied: true,
      expected: '≈ 0',
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
})
