import { formatFacetValueCount } from './facetCountUtils'

describe('formatFacetValueCount', () => {
  it.each([
    {
      case: 'a binned count as approximate',
      count: 1202,
      binSize: 5,
      facetPostProcessingApplied: true,
      expected: `≈ ${(1202).toLocaleString()}`,
    },
    {
      case: 'the midpoint of a bin that starts at 0 as approximate',
      count: 2,
      binSize: 5,
      facetPostProcessingApplied: true,
      expected: '≈ 2',
    },
    {
      case: 'the half-unit midpoint of an even-width bin as approximate',
      count: 4.5,
      binSize: 10,
      facetPostProcessingApplied: true,
      expected: `≈ ${(4.5).toLocaleString()}`,
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
