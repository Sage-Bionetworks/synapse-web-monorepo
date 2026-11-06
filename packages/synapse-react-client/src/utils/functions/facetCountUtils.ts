import {
  EnumerationFacet,
  isSuppressedFacetValueCount,
} from './enumerationFacet'

/** Shown for a facet value whose count is below the suppression threshold, which the server does not reveal. */
export const SUPPRESSED_FACET_VALUE_COUNT_TEXT = 'Suppressed'

/**
 * Formats a facet value's count for display:
 * - a suppressed count (below the suppression threshold) shows as {@link SUPPRESSED_FACET_VALUE_COUNT_TEXT}
 * - a rounded count (a facet with `binSize` > 1) shows as its bin's range, e.g. `1,200–1,204`
 * - a noised count (post-processed, not binned) shows as approximate, e.g. `≈ 1,202`
 * - an exact count, including one rounded to a bin size of 1, shows as-is
 * @param count the facet value's count (the bin midpoint for a binned facet; see `getEnumerationFacet`)
 * @param facet the facet that the value belongs to
 * @param facetPostProcessingApplied the QueryResultBundle's `facetPostProcessingApplied`
 */
export function formatFacetValueCount(
  count: number,
  facet: Pick<EnumerationFacet, 'binSize'>,
  facetPostProcessingApplied: boolean | undefined,
): string {
  if (isSuppressedFacetValueCount(count)) {
    return SUPPRESSED_FACET_VALUE_COUNT_TEXT
  }
  const { binSize } = facet
  if (binSize !== undefined && binSize > 1) {
    const binMin = count - (binSize - 1) / 2
    const binMax = binMin + binSize - 1
    return `${binMin.toLocaleString()}–${binMax.toLocaleString()}`
  }
  if (binSize === undefined && facetPostProcessingApplied) {
    return `≈ ${count.toLocaleString()}`
  }
  return count.toLocaleString()
}
