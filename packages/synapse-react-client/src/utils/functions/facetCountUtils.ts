import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import {
  EnumerationFacet,
  isSuppressedFacetValueCount,
} from './enumerationFacet'
import { formatApproximateCount } from './queryCountUtils'

/**
 * Shown for a suppressed facet value count when the QueryResultBundle has no `suppressionThreshold` to show it as
 * below.
 */
export const SUPPRESSED_FACET_VALUE_COUNT_TEXT = 'Suppressed'

/** The QueryResultBundle fields that determine how its facet value counts are displayed. */
export type FacetCountDisplayOptions = Pick<
  QueryResultBundle,
  'facetPostProcessingApplied' | 'suppressionThreshold'
>

/**
 * Formats a facet value's count for display:
 * - a suppressed count (non-zero and below the suppression threshold k) shows as below k, e.g. `< 20`, or as
 *   {@link SUPPRESSED_FACET_VALUE_COUNT_TEXT} when the bundle has no `suppressionThreshold`
 * - a rounded count (a facet with `binSize` > 1) shows as its bin's range, e.g. `1,200–1,204`
 * - a noised count (post-processed, not binned) shows as approximate, e.g. `≈ 1,202`
 * - an exact count, including one rounded to a bin size of 1, shows as-is
 *
 * @param count the facet value's count (the bin midpoint for a binned facet; see `getEnumerationFacet`)
 * @param facet the facet that the value belongs to
 * @param options the QueryResultBundle that the facet belongs to
 */
export function formatFacetValueCount(
  count: number,
  facet: Pick<EnumerationFacet, 'binSize'>,
  options: FacetCountDisplayOptions,
): string {
  const { facetPostProcessingApplied, suppressionThreshold } = options
  if (isSuppressedFacetValueCount(count)) {
    return suppressionThreshold === undefined
      ? SUPPRESSED_FACET_VALUE_COUNT_TEXT
      : `< ${suppressionThreshold.toLocaleString()}`
  }
  const { binSize } = facet
  if (binSize !== undefined && binSize > 1) {
    const binMin = count - (binSize - 1) / 2
    const binMax = binMin + binSize - 1
    return `${binMin.toLocaleString()}–${binMax.toLocaleString()}`
  }
  if (binSize === undefined && facetPostProcessingApplied) {
    return formatApproximateCount(count)
  }
  return count.toLocaleString()
}
