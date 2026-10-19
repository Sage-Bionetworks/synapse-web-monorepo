import { QueryFilter } from '@sage-bionetworks/synapse-types'
import { isFilterGroup } from '../../utils/types/IsType'
import { isQBGroup, QBNode } from './QueryBuilderTypes'

/*
 * Server-side bounds on a query's additionalFilters tree (design doc §7.5; PLFM-9755). A FilterGroup placed directly
 * in additionalFilters is at depth 1, and the additionalFilters list itself counts as a group for the children limit.
 * The server rejects a query that exceeds any of them with HTTP 400.
 */
export const MAX_FILTER_GROUP_DEPTH = 5
export const MAX_FILTER_LEAF_PREDICATES = 50
export const MAX_FILTER_GROUP_CHILDREN = 25

export type FilterLimitViolation = 'depth' | 'leafPredicates' | 'groupChildren'

export const FILTER_LIMIT_VIOLATION_MESSAGES: Record<
  FilterLimitViolation,
  string
> = {
  depth: `Groups can be nested at most ${MAX_FILTER_GROUP_DEPTH} levels deep.`,
  leafPredicates: `A query can contain at most ${MAX_FILTER_LEAF_PREDICATES} conditions.`,
  groupChildren: `A group can contain at most ${MAX_FILTER_GROUP_CHILDREN} conditions or groups.`,
}

/**
 * Returns the first limit that the given additionalFilters exceed, using the same rules as the server, or undefined
 * if the filters are within all limits.
 */
export function findFilterLimitViolation(
  additionalFilters: readonly QueryFilter[],
): FilterLimitViolation | undefined {
  if (additionalFilters.length > MAX_FILTER_GROUP_CHILDREN) {
    return 'groupChildren'
  }
  let leafPredicateCount = 0
  for (const filter of additionalFilters) {
    const result = measureFilter(filter, 1)
    if (typeof result === 'string') {
      return result
    }
    leafPredicateCount += result
  }
  return leafPredicateCount > MAX_FILTER_LEAF_PREDICATES
    ? 'leafPredicates'
    : undefined
}

/** Returns the filter's leaf predicate count, or the first depth / children limit it exceeds. */
function measureFilter(
  filter: QueryFilter,
  depth: number,
): number | FilterLimitViolation {
  if (!isFilterGroup(filter)) {
    return 1
  }
  if (depth > MAX_FILTER_GROUP_DEPTH) {
    return 'depth'
  }
  const children = filter.children ?? []
  if (children.length > MAX_FILTER_GROUP_CHILDREN) {
    return 'groupChildren'
  }
  let leafPredicateCount = 0
  for (const child of children) {
    const result = measureFilter(child, depth + 1)
    if (typeof result === 'string') {
      return result
    }
    leafPredicateCount += result
  }
  return leafPredicateCount
}

/**
 * Number of leaf predicates a Query Builder tree sends once every condition is complete: an `is_all_of` condition
 * sends one predicate per value, and every other condition (including an incomplete one) sends one.
 */
export function countQBLeafPredicates(node: QBNode): number {
  if (isQBGroup(node)) {
    return node.children.reduce(
      (count, child) => count + countQBLeafPredicates(child),
      0,
    )
  }
  return node.op === 'is_all_of' ? Math.max(node.values.length, 1) : 1
}
