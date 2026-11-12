import { QueryResultBundle } from '@sage-bionetworks/synapse-types'

/** Formats a count that post-processing (rounding or noise) obscured, e.g. `≈ 1,202`. */
export function formatApproximateCount(count: number): string {
  return `≈ ${count.toLocaleString()}`
}

/**
 * Formats a QueryResultBundle's `queryCount` for display. A count obscured for an aggregate-only query
 * (`queryCountPostProcessingApplied`) shows as approximate, e.g. `≈ 1,200`; an exact count shows as-is.
 *
 * @returns the formatted count, or undefined when the bundle has no `queryCount`
 */
export function formatQueryCount(
  bundle: Pick<
    QueryResultBundle,
    'queryCount' | 'queryCountPostProcessingApplied'
  >,
): string | undefined {
  const { queryCount, queryCountPostProcessingApplied } = bundle
  if (queryCount === undefined) {
    return undefined
  }
  return queryCountPostProcessingApplied
    ? formatApproximateCount(queryCount)
    : queryCount.toLocaleString()
}
