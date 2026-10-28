import { EnumerationFacet } from './enumerationFacet'

/**
 * Formats a facet value's count for display. Post-processed counts show as approximate, e.g. `≈ 1,200`: a rounded
 * count (a facet with `binSize`, whose counts are bin minimums; see `getEnumerationFacet`) or a noised count. Exact
 * counts, including counts rounded to a bin size of 1, show as-is.
 *
 * @param count the facet value's count (the bin minimum for a binned facet)
 * @param facet the facet that the value belongs to
 * @param facetPostProcessingApplied the QueryResultBundle's `facetPostProcessingApplied`
 */
export function formatFacetValueCount(
  count: number,
  facet: Pick<EnumerationFacet, 'binSize'>,
  facetPostProcessingApplied: boolean | undefined,
): string {
  const { binSize } = facet
  const isApproximate =
    binSize === undefined ? Boolean(facetPostProcessingApplied) : binSize > 1
  return isApproximate ? `≈ ${count.toLocaleString()}` : count.toLocaleString()
}
