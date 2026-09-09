import {
  COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  ColumnMultiValueFunction,
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  FacetColumnRangeRequest,
  FacetColumnValuesRequest,
  FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
  FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
  FILTER_GROUP_CONCRETE_TYPE_VALUE,
  FilterGroup,
} from '@sage-bionetworks/synapse-types'
import {
  apiFilterToQBNode,
  classifyLikePattern,
  escapeLike,
  isListColumn,
  qbNodeToApiFilter,
  selectedFacetsToQBGroup,
  unescapeLike,
} from './queryBuilderTranslation'
import { QBCondition, QBGroup } from './QueryBuilderTypes'

function condition(patch: Partial<QBCondition>): QBCondition {
  return {
    kind: 'condition',
    id: 'test-id',
    columnName: 'col',
    columnType: 'STRING',
    op: 'equal',
    values: [],
    rangeMin: null,
    rangeMax: null,
    text: null,
    ...patch,
  }
}

function group(patch: Partial<QBGroup>): QBGroup {
  return {
    kind: 'group',
    id: 'test-group',
    combinator: 'AND',
    not: false,
    children: [],
    ...patch,
  }
}

describe('isListColumn', () => {
  it.each([
    ['STRING_LIST', true],
    ['INTEGER_LIST', true],
    ['STRING', false],
    ['INTEGER', false],
    [null, false],
  ])('classifies %s as list=%s', (input, expected) => {
    expect(isListColumn(input)).toBe(expected)
  })
})

describe('escapeLike / unescapeLike', () => {
  it('round-trips text with %, _, and \\', () => {
    const originals = ['50%', 'a_b', 'raw text', '100% pure_junk\\', '%%__\\\\']
    for (const original of originals) {
      expect(unescapeLike(escapeLike(original))).toBe(original)
    }
  })

  it('escapes the wildcards so they are not interpreted', () => {
    expect(escapeLike('50%')).toBe('50\\%')
    expect(escapeLike('a_b')).toBe('a\\_b')
  })
})

describe('classifyLikePattern', () => {
  it('recognizes contains', () => {
    expect(classifyLikePattern('%foo%')).toEqual({
      op: 'contains',
      text: 'foo',
    })
  })
  it('recognizes starts_with', () => {
    expect(classifyLikePattern('foo%')).toEqual({
      op: 'starts_with',
      text: 'foo',
    })
  })
  it('recognizes ends_with', () => {
    expect(classifyLikePattern('%foo')).toEqual({
      op: 'ends_with',
      text: 'foo',
    })
  })
  it('recognizes is_exactly when no wildcards are present', () => {
    expect(classifyLikePattern('foo')).toEqual({
      op: 'is_exactly',
      text: 'foo',
    })
  })
  it('un-escapes literal wildcards inside the text', () => {
    expect(classifyLikePattern('%50\\%%')).toEqual({
      op: 'contains',
      text: '50%',
    })
  })
})

describe('qbNodeToApiFilter — conditions', () => {
  it('returns null for a condition with no columnName', () => {
    expect(qbNodeToApiFilter(condition({ columnName: null }))).toBeNull()
  })

  describe('is_any_of', () => {
    it('emits IN on ColumnSingleValueQueryFilter for non-list columns', () => {
      const result = qbNodeToApiFilter(
        condition({
          op: 'is_any_of',
          columnType: 'STRING',
          values: ['a', 'b'],
        }),
      )
      expect(result).toEqual<ColumnSingleValueQueryFilter>({
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        operator: ColumnSingleValueFilterOperator.IN,
        values: ['a', 'b'],
      })
    })

    it('emits HAS on ColumnMultiValueFunctionQueryFilter for _LIST columns', () => {
      const result = qbNodeToApiFilter(
        condition({
          op: 'is_any_of',
          columnType: 'STRING_LIST',
          values: ['a', 'b'],
        }),
      )
      expect(result).toEqual<ColumnMultiValueFunctionQueryFilter>({
        concreteType:
          COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        function: ColumnMultiValueFunction.HAS,
        _function: ColumnMultiValueFunction.HAS,
        values: ['a', 'b'],
      })
    })

    it('returns null when values is empty', () => {
      expect(
        qbNodeToApiFilter(condition({ op: 'is_any_of', values: [] })),
      ).toBeNull()
    })
  })

  describe('is_all_of', () => {
    it('emits HAS on ColumnMultiValueFunctionQueryFilter', () => {
      const result = qbNodeToApiFilter(
        condition({
          op: 'is_all_of',
          columnType: 'STRING_LIST',
          values: ['a', 'b'],
        }),
      )
      expect(result).toEqual<ColumnMultiValueFunctionQueryFilter>({
        concreteType:
          COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        function: ColumnMultiValueFunction.HAS,
        _function: ColumnMultiValueFunction.HAS,
        values: ['a', 'b'],
      })
    })

    it('returns null when values is empty', () => {
      expect(
        qbNodeToApiFilter(condition({ op: 'is_all_of', values: [] })),
      ).toBeNull()
    })
  })

  describe('range operators', () => {
    it('between emits BETWEEN with [min, max]', () => {
      expect(
        qbNodeToApiFilter(
          condition({
            op: 'between',
            rangeMin: '1',
            rangeMax: '10',
          }),
        ),
      ).toEqual<ColumnSingleValueQueryFilter>({
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        operator: ColumnSingleValueFilterOperator.BETWEEN,
        values: ['1', '10'],
      })
    })

    it.each([
      ['between', { rangeMin: null, rangeMax: '10' }],
      ['between', { rangeMin: '1', rangeMax: null }],
      ['between', { rangeMin: '', rangeMax: '10' }],
      ['gt', { rangeMin: null }],
      ['gte', { rangeMin: '' }],
      ['lt', { rangeMax: null }],
      ['lte', { rangeMax: '' }],
    ])('%s returns null when bounds are missing (%o)', (op, bounds) => {
      expect(
        qbNodeToApiFilter(
          condition({
            op: op as 'between' | 'gt' | 'gte' | 'lt' | 'lte',
            ...bounds,
          }),
        ),
      ).toBeNull()
    })

    it.each([
      ['gt', ColumnSingleValueFilterOperator.GREATER_THAN, 'rangeMin'],
      [
        'gte',
        ColumnSingleValueFilterOperator.GREATER_THAN_OR_EQUAL,
        'rangeMin',
      ],
      ['lt', ColumnSingleValueFilterOperator.LESS_THAN, 'rangeMax'],
      ['lte', ColumnSingleValueFilterOperator.LESS_THAN_OR_EQUAL, 'rangeMax'],
    ])('%s emits %s with the bound value', (op, expectedOp, boundField) => {
      const result = qbNodeToApiFilter(
        condition({
          op: op as 'gt' | 'gte' | 'lt' | 'lte',
          [boundField]: '5',
        } as Partial<QBCondition>),
      )
      expect(result).toEqual<ColumnSingleValueQueryFilter>({
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        operator: expectedOp,
        values: ['5'],
      })
    })
  })

  describe('equal / not_equal', () => {
    it('equal uses values[0]', () => {
      expect(
        qbNodeToApiFilter(
          condition({ op: 'equal', values: ['yes', 'ignored'] }),
        ),
      ).toEqual<ColumnSingleValueQueryFilter>({
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        operator: ColumnSingleValueFilterOperator.EQUAL,
        values: ['yes'],
      })
    })

    it('equal returns null with empty values', () => {
      expect(
        qbNodeToApiFilter(condition({ op: 'equal', values: [] })),
      ).toBeNull()
    })

    it('not_equal returns null with empty values', () => {
      expect(
        qbNodeToApiFilter(condition({ op: 'not_equal', values: [] })),
      ).toBeNull()
    })

    it('equal supports boolean stored as "true" / "false" in values[0]', () => {
      expect(
        qbNodeToApiFilter(
          condition({
            op: 'equal',
            columnType: 'BOOLEAN',
            values: ['true'],
          }),
        ),
      ).toEqual<ColumnSingleValueQueryFilter>({
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        operator: ColumnSingleValueFilterOperator.EQUAL,
        values: ['true'],
      })
    })
  })

  describe('presence operators', () => {
    it('has_value emits IS_NOT_NULL with empty values', () => {
      expect(
        qbNodeToApiFilter(condition({ op: 'has_value' })),
      ).toEqual<ColumnSingleValueQueryFilter>({
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        operator: ColumnSingleValueFilterOperator.IS_NOT_NULL,
        values: [],
      })
    })

    it('no_value emits IS_NULL with empty values', () => {
      expect(
        qbNodeToApiFilter(condition({ op: 'no_value' })),
      ).toEqual<ColumnSingleValueQueryFilter>({
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        operator: ColumnSingleValueFilterOperator.IS_NULL,
        values: [],
      })
    })
  })

  describe('text operators', () => {
    it.each([
      ['contains', 'foo', '%foo%'],
      ['starts_with', 'foo', 'foo%'],
      ['ends_with', 'foo', '%foo'],
    ])('%s emits LIKE with %j → %j', (op, text, expectedValue) => {
      expect(
        qbNodeToApiFilter(
          condition({
            op: op as 'contains' | 'starts_with' | 'ends_with',
            text,
          }),
        ),
      ).toEqual<ColumnSingleValueQueryFilter>({
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        operator: ColumnSingleValueFilterOperator.LIKE,
        values: [expectedValue],
      })
    })

    it('is_exactly emits EQUAL with the raw text', () => {
      expect(
        qbNodeToApiFilter(condition({ op: 'is_exactly', text: 'foo' })),
      ).toEqual<ColumnSingleValueQueryFilter>({
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        operator: ColumnSingleValueFilterOperator.EQUAL,
        values: ['foo'],
      })
    })

    it('contains escapes % and _ in user input', () => {
      const result = qbNodeToApiFilter(
        condition({ op: 'contains', text: '50%' }),
      ) as ColumnSingleValueQueryFilter
      expect(result.values).toEqual(['%50\\%%'])
    })

    it.each(['contains', 'starts_with', 'ends_with', 'is_exactly'])(
      '%s returns null when text is empty',
      op => {
        expect(
          qbNodeToApiFilter(
            condition({
              op: op as 'contains' | 'starts_with' | 'ends_with' | 'is_exactly',
              text: '',
            }),
          ),
        ).toBeNull()
        expect(
          qbNodeToApiFilter(
            condition({
              op: op as 'contains' | 'starts_with' | 'ends_with' | 'is_exactly',
              text: null,
            }),
          ),
        ).toBeNull()
      },
    )
  })
})

describe('qbNodeToApiFilter — groups', () => {
  it('returns null for an empty group', () => {
    expect(qbNodeToApiFilter(group({}))).toBeNull()
  })

  it('returns null for a group whose children are all incomplete', () => {
    expect(
      qbNodeToApiFilter(
        group({
          children: [
            condition({ op: 'equal', values: [] }),
            condition({ op: 'contains', text: '' }),
          ],
        }),
      ),
    ).toBeNull()
  })

  it('emits a FilterGroup with only the complete children', () => {
    const result = qbNodeToApiFilter(
      group({
        combinator: 'OR',
        children: [
          condition({ op: 'equal', values: ['a'] }),
          condition({ op: 'equal', values: [], columnName: 'skipped' }),
          condition({ op: 'is_any_of', values: ['x', 'y'] }),
        ],
      }),
    ) as FilterGroup
    expect(result.concreteType).toBe(FILTER_GROUP_CONCRETE_TYPE_VALUE)
    expect(result.operator).toBe('OR')
    expect(result.not).toBeUndefined()
    expect(result.children).toHaveLength(2)
  })

  it('includes not:true when the group is negated', () => {
    const result = qbNodeToApiFilter(
      group({
        not: true,
        children: [condition({ op: 'equal', values: ['a'] })],
      }),
    ) as FilterGroup
    expect(result.not).toBe(true)
  })

  it('recurses into nested groups', () => {
    const result = qbNodeToApiFilter(
      group({
        children: [
          group({
            combinator: 'OR',
            children: [
              condition({ op: 'equal', values: ['a'] }),
              condition({ op: 'equal', values: ['b'] }),
            ],
          }),
          condition({ op: 'has_value' }),
        ],
      }),
    ) as FilterGroup
    expect(result.children).toHaveLength(2)
    const [nested] = result.children!
    expect(nested).toMatchObject({
      concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
      operator: 'OR',
    })
  })
})

describe('apiFilterToQBNode', () => {
  it('round-trips a FilterGroup back through qbNodeToApiFilter', () => {
    const apiTree: FilterGroup = {
      concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
      operator: 'AND',
      children: [
        {
          concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
          columnName: 'age',
          operator: ColumnSingleValueFilterOperator.GREATER_THAN,
          values: ['65'],
        },
        {
          concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
          operator: 'OR',
          not: true,
          children: [
            {
              concreteType:
                COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
              columnName: 'diagnosis',
              operator: ColumnSingleValueFilterOperator.IN,
              values: ["Alzheimer's Disease"],
            },
          ],
        },
      ],
    }
    const qb = apiFilterToQBNode(apiTree)!
    const back = qbNodeToApiFilter(qb) as FilterGroup
    expect(back).toMatchObject({
      concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
      operator: 'AND',
    })
    expect(back.children).toHaveLength(2)
    expect(back.children![1]).toMatchObject({
      concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
      operator: 'OR',
      not: true,
    })
  })

  it.each([
    [
      ColumnSingleValueFilterOperator.EQUAL,
      ['x'],
      { op: 'equal', values: ['x'] },
    ],
    [
      ColumnSingleValueFilterOperator.NOT_EQUAL,
      ['x'],
      { op: 'not_equal', values: ['x'] },
    ],
    [
      ColumnSingleValueFilterOperator.IN,
      ['x', 'y'],
      { op: 'is_any_of', values: ['x', 'y'] },
    ],
    [
      ColumnSingleValueFilterOperator.GREATER_THAN,
      ['1'],
      { op: 'gt', rangeMin: '1' },
    ],
    [
      ColumnSingleValueFilterOperator.LESS_THAN_OR_EQUAL,
      ['9'],
      { op: 'lte', rangeMax: '9' },
    ],
    [
      ColumnSingleValueFilterOperator.BETWEEN,
      ['1', '9'],
      { op: 'between', rangeMin: '1', rangeMax: '9' },
    ],
    [ColumnSingleValueFilterOperator.IS_NULL, [], { op: 'no_value' }],
    [ColumnSingleValueFilterOperator.IS_NOT_NULL, [], { op: 'has_value' }],
  ])(
    'maps single-value operator %s back to the expected QBCondition',
    (operator, values, expectedPatch) => {
      const result = apiFilterToQBNode({
        concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'col',
        operator,
        values,
      }) as QBCondition
      expect(result).toMatchObject({
        kind: 'condition',
        columnName: 'col',
        ...expectedPatch,
      })
    },
  )

  it('classifies LIKE patterns back into contains/starts_with/ends_with', () => {
    const contains = apiFilterToQBNode({
      concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
      columnName: 'col',
      operator: ColumnSingleValueFilterOperator.LIKE,
      values: ['%50\\%%'],
    }) as QBCondition
    expect(contains).toMatchObject({ op: 'contains', text: '50%' })
  })

  it('maps HAS multi-value filter back to is_any_of (lossy)', () => {
    const result = apiFilterToQBNode({
      concreteType:
        COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
      columnName: 'col',
      function: ColumnMultiValueFunction.HAS,
      _function: ColumnMultiValueFunction.HAS,
      values: ['a', 'b'],
    }) as QBCondition
    expect(result).toMatchObject({
      op: 'is_any_of',
      values: ['a', 'b'],
    })
  })
})

describe('selectedFacetsToQBGroup', () => {
  it('produces an empty AND group when no facets are selected', () => {
    expect(selectedFacetsToQBGroup([])).toMatchObject({
      combinator: 'AND',
      not: false,
      children: [],
    })
  })

  it('translates value facets into is_any_of conditions', () => {
    const facet: FacetColumnValuesRequest = {
      concreteType: FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
      columnName: 'sex',
      facetValues: ['Female', 'Male'],
    }
    const result = selectedFacetsToQBGroup([facet])
    expect(result.children).toHaveLength(1)
    expect(result.children[0]).toMatchObject({
      kind: 'condition',
      columnName: 'sex',
      op: 'is_any_of',
      values: ['Female', 'Male'],
    })
  })

  it('skips value facets with no selected values', () => {
    const facet: FacetColumnValuesRequest = {
      concreteType: FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
      columnName: 'sex',
      facetValues: [],
    }
    expect(selectedFacetsToQBGroup([facet]).children).toHaveLength(0)
  })

  it('translates range facets with both bounds into between', () => {
    const facet: FacetColumnRangeRequest = {
      concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
      columnName: 'age',
      min: '18',
      max: '65',
    }
    expect(selectedFacetsToQBGroup([facet]).children[0]).toMatchObject({
      op: 'between',
      rangeMin: '18',
      rangeMax: '65',
    })
  })

  it('translates range facets with only min into gte', () => {
    const facet: FacetColumnRangeRequest = {
      concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
      columnName: 'age',
      min: '18',
    }
    expect(selectedFacetsToQBGroup([facet]).children[0]).toMatchObject({
      op: 'gte',
      rangeMin: '18',
    })
  })

  it('translates range facets with only max into lte', () => {
    const facet: FacetColumnRangeRequest = {
      concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
      columnName: 'age',
      max: '65',
    }
    expect(selectedFacetsToQBGroup([facet]).children[0]).toMatchObject({
      op: 'lte',
      rangeMax: '65',
    })
  })

  it('skips range facets with no bounds', () => {
    const facet: FacetColumnRangeRequest = {
      concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
      columnName: 'age',
    }
    expect(selectedFacetsToQBGroup([facet]).children).toHaveLength(0)
  })
})
