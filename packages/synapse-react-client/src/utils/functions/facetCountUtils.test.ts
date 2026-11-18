import { SUPPRESSED_FACET_VALUE_COUNT } from './enumerationFacet'
import {
  formatFacetValueCount,
  SUPPRESSED_FACET_VALUE_COUNT_TEXT,
} from './facetCountUtils'

describe('formatFacetValueCount', () => {
  it.each([
    {
      case: 'a binned count as its bin range',
      count: 1202,
      binSize: 5,
      facetPostProcessingApplied: true,
      expected: `${(1200).toLocaleString()}–${(1204).toLocaleString()}`,
    },
    {
      case: 'the bin that starts at 0 as its range',
      count: 2,
      binSize: 5,
      facetPostProcessingApplied: true,
      expected: '0–4',
    },
    {
      case: 'the half-unit midpoint of an even-width bin as its integer range',
      count: 4.5,
      binSize: 10,
      facetPostProcessingApplied: true,
      expected: '0–9',
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
    {
      case: 'a suppressed binned count as below k, not as a bin range',
      count: SUPPRESSED_FACET_VALUE_COUNT,
      binSize: 5,
      facetPostProcessingApplied: true,
      suppressionThreshold: 20,
      expected: '< 20',
    },
    {
      case: 'a suppressed noised count as below k, not as approximate',
      count: SUPPRESSED_FACET_VALUE_COUNT,
      binSize: undefined,
      facetPostProcessingApplied: true,
      suppressionThreshold: 20,
      expected: '< 20',
    },
    {
      case: 'a suppressed count without post-processing as below k',
      count: SUPPRESSED_FACET_VALUE_COUNT,
      binSize: undefined,
      facetPostProcessingApplied: false,
      suppressionThreshold: 20,
      expected: '< 20',
    },
    {
      case: 'a suppressed count without a suppression threshold as suppressed',
      count: SUPPRESSED_FACET_VALUE_COUNT,
      binSize: undefined,
      facetPostProcessingApplied: false,
      suppressionThreshold: undefined,
      expected: SUPPRESSED_FACET_VALUE_COUNT_TEXT,
    },
  ])(
    'formats $case',
    ({
      count,
      binSize,
      facetPostProcessingApplied,
      suppressionThreshold,
      expected,
    }) => {
      expect(
        formatFacetValueCount(
          count,
          { binSize },
          { facetPostProcessingApplied, suppressionThreshold },
        ),
      ).toBe(expected)
    },
  )
})
