import { FacetColumnResultValues } from '@sage-bionetworks/synapse-types'

/**
 * Formats a facet value's count for display.
 * - A facet with `binSize` (counts rounded down by ROUNDING post-processing; see `normalizeBinnedFacets`) shows the
 *   range that contains the exact count, e.g. `10–14`.
 * - Other post-processed (NOISE) counts show as approximate, e.g. `≈ 12`.
 * - Exact counts show as-is.
 *
 * @param count the facet value's count (the bin minimum for a binned facet)
 * @param facet the facet that the value belongs to
 * @param facetPostProcessingApplied the QueryResultBundle's `facetPostProcessingApplied`
 */
export function formatFacetValueCount(
  count: number,
  facet: Pick<FacetColumnResultValues, 'binSize'>,
  facetPostProcessingApplied: boolean | undefined,
): string {
  const { binSize } = facet
  if (binSize !== undefined && binSize > 1) {
    // The server only returns values present in the matched rows, so a bin minimum of 0 still means at least 1.
    const binLow = Math.max(count, 1)
    const binHigh = count + binSize - 1
    return `${binLow.toLocaleString()}–${binHigh.toLocaleString()}`
  }
  if (facetPostProcessingApplied && binSize === undefined) {
    return `≈ ${count.toLocaleString()}`
  }
  return count.toLocaleString()
}
