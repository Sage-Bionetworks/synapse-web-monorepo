import { EnumerationFacet } from './enumerationFacet'

/**
 * Formats a facet value's count for display:
 * - a rounded count (a facet with `binSize` > 1) shows as its bin's range, e.g. `1,200–1,204`
 * - a noised count (post-processed, not binned) shows as approximate, e.g. `≈ 1,202`
 * - an exact count, including one rounded to a bin size of 1, shows as-is
 *
 * @param count the facet value's count (the bin midpoint for a binned facet; see `getEnumerationFacet`)
 * @param facet the facet that the value belongs to
 * @param facetPostProcessingApplied the QueryResultBundle's `facetPostProcessingApplied`
 */
export function formatFacetValueCount(
  count: number,
  facet: Pick<EnumerationFacet, 'binSize'>,
  facetPostProcessingApplied: boolean | undefined,
): string {
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
