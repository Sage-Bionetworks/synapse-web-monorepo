import {
  COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  ColumnSingleValueFilterOperator,
  FILTER_GROUP_CONCRETE_TYPE_VALUE,
  FilterGroup,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import {
  countQBLeafPredicates,
  findFilterLimitViolation,
  MAX_FILTER_GROUP_CHILDREN,
  MAX_FILTER_GROUP_DEPTH,
  MAX_FILTER_LEAF_PREDICATES,
} from './queryBuilderLimits'
import { newBlankCondition, newEmptyGroup } from './queryBuilderOperations'

const leaf: QueryFilter = {
  concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  columnName: 'study',
  operator: ColumnSingleValueFilterOperator.EQUAL,
  values: ['LLFS'],
}

function group(children: QueryFilter[]): FilterGroup {
  return {
    concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
    operator: 'AND',
    children,
  }
}

/** A chain of `depth` nested groups with a single leaf at the bottom. */
function nestedGroups(depth: number): QueryFilter {
  let filter: QueryFilter = leaf
  for (let level = 0; level < depth; level++) {
    filter = group([filter])
  }
  return filter
}

function leaves(count: number): QueryFilter[] {
  return Array.from({ length: count }, () => leaf)
}

describe('findFilterLimitViolation', () => {
  it('counts a group in additionalFilters as depth 1', () => {
    expect(
      findFilterLimitViolation([nestedGroups(MAX_FILTER_GROUP_DEPTH)]),
    ).toBeUndefined()
    expect(
      findFilterLimitViolation([nestedGroups(MAX_FILTER_GROUP_DEPTH + 1)]),
    ).toBe('depth')
  })

  it('limits the leaf predicates across all of additionalFilters', () => {
    const half = MAX_FILTER_LEAF_PREDICATES / 2
    expect(
      findFilterLimitViolation([group(leaves(half)), group(leaves(half))]),
    ).toBeUndefined()
    expect(
      findFilterLimitViolation([
        group(leaves(half)),
        group(leaves(half)),
        leaf,
      ]),
    ).toBe('leafPredicates')
  })

  it('limits the children of each group, and of additionalFilters itself', () => {
    expect(
      findFilterLimitViolation([group(leaves(MAX_FILTER_GROUP_CHILDREN))]),
    ).toBeUndefined()
    expect(
      findFilterLimitViolation([group(leaves(MAX_FILTER_GROUP_CHILDREN + 1))]),
    ).toBe('groupChildren')
    expect(
      findFilterLimitViolation(leaves(MAX_FILTER_GROUP_CHILDREN + 1)),
    ).toBe('groupChildren')
  })
})

describe('countQBLeafPredicates', () => {
  it('counts an is_all_of condition once per value, and any other condition (even incomplete) once', () => {
    const tree = {
      ...newEmptyGroup(),
      children: [
        {
          ...newBlankCondition('fileFormat', 'STRING_LIST'),
          op: 'is_all_of' as const,
          values: ['txt', 'csv', 'bam'],
        },
        newBlankCondition(null, null),
        {
          ...newEmptyGroup(),
          children: [newBlankCondition('study', 'STRING')],
        },
      ],
    }
    expect(countQBLeafPredicates(tree)).toBe(5)
  })
})
