import mockDataset from '@/mocks/entity/mockDataset'
import mockDatasetCollection from '@/mocks/entity/mockDatasetCollection'
import { mockFileViewEntity } from '@/mocks/entity/mockFileView'
import { mockTableEntity } from '@/mocks/entity/mockTableEntity'
import mockQueryResponseData from '@/mocks/mockQueryResponseData'
import syn16787123Json from '@/mocks/query/syn16787123'
import { LockedColumn, UniqueFacetIdentifier } from '@/utils/types'
import {
  COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  ColumnModel,
  ColumnSingleValueFilterOperator,
  ColumnTypeEnum,
  ENTITY_VIEW_TYPE_MASK_FILE,
  ENTITY_VIEW_TYPE_MASK_FOLDER,
  FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
  FacetColumnRequest,
  FacetColumnResult,
  FacetColumnResultValues,
  JsonSubColumnModel,
  Query,
  QueryResultBundle,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { cloneDeep } from 'lodash-es'
import * as SynapseConstants from '../SynapseConstants'
import {
  canTableQueryBeAddedToDownloadList,
  facetObjectMatchesDefinition,
  getCorrespondingColumnForFacet,
  getCorrespondingSelectedFacet,
  getHeaderIndex,
  hasFacetedSelectColumn,
  hasResettableFilters,
  isSingleNotSetValue,
  queryRequestsHaveSameTotalResults,
  removeEmptyQueryParams,
  removeLockedColumnFromFacetData,
} from './queryUtils'

describe('facet support', () => {
  const facetColumns: FacetColumnResult[] = [
    {
      columnName: 'study',
      facetType: 'enumeration',
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      facetValues: [],
    },
  ]

  const selectColumns: SelectColumn[] = [
    {
      name: 'study',
      columnType: ColumnTypeEnum.STRING,
    },
  ]

  it('Facets are available', () => {
    expect(hasFacetedSelectColumn(facetColumns, selectColumns)).toEqual(true)
  })

  it('Facets are not available - undefined facetColumns or select columns', () => {
    expect(hasFacetedSelectColumn(undefined, selectColumns)).toEqual(false)
    expect(hasFacetedSelectColumn(facetColumns, undefined)).toEqual(false)
  })

  it('Facets are not available - empty facetColumns or select columns', () => {
    expect(hasFacetedSelectColumn([], selectColumns)).toEqual(false)
    expect(hasFacetedSelectColumn(facetColumns, [])).toEqual(false)
  })

  it('Facets are not available - facetColumn has no corresponding selectColumn', () => {
    const differentSelectColumns: SelectColumn[] = [
      {
        // for example, `SELECT COUNT(study) as "studyCount" from syn123` would not have study as a selectColumn
        name: 'studyCount',
        columnType: ColumnTypeEnum.INTEGER,
      },
    ]
    expect(
      hasFacetedSelectColumn(facetColumns, differentSelectColumns),
    ).toEqual(false)
  })

  it('Facets are not available - all facets are single NOT_SET value', () => {
    const notSetFacets: FacetColumnResult[] = [
      {
        columnName: 'study',
        facetType: 'enumeration',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
        facetValues: [
          {
            value: SynapseConstants.VALUE_NOT_SET,
            count: 10,
            isSelected: false,
          },
        ],
      },
    ]
    expect(hasFacetedSelectColumn(notSetFacets, selectColumns)).toEqual(false)
  })

  it('facet has single NOT_SET value tests', () => {
    const facet: FacetColumnResultValues = {
      columnName: 'study',
      facetType: 'enumeration',
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      facetValues: [],
    }
    facet.facetValues = []
    expect(isSingleNotSetValue(facet)).toEqual(false)
    facet.facetValues = [{ value: 'real value', count: 10, isSelected: false }]
    expect(isSingleNotSetValue(facet)).toEqual(false)
    facet.facetValues = [
      { value: SynapseConstants.VALUE_NOT_SET, count: 0, isSelected: false },
    ]
    expect(isSingleNotSetValue(facet)).toEqual(true)
    facet.facetValues.push({
      value: 'second value',
      count: 1,
      isSelected: false,
    })
    expect(isSingleNotSetValue(facet)).toEqual(false)
  })

  describe('hasResettableFilters', function () {
    it('does not have facet filters', () => {
      const query: Query = {
        sql: 'select * from syn123',
        selectedFacets: undefined,
      }
      expect(hasResettableFilters(query)).toEqual(false)
    })

    it('only selectedFacet is a locked column', () => {
      const query: Query = {
        sql: 'select * from syn123',
        selectedFacets: [
          {
            columnName: 'study',
            concreteType: FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
            facetValues: ['abc', 'def'],
          },
        ],
      }
      const lockedColumn: LockedColumn = {
        columnName: 'study',
        value: 'abc',
      }
      expect(hasResettableFilters(query, lockedColumn)).toEqual(false)
    })

    it('has a selectedFacet which is not locked', () => {
      const query: Query = {
        sql: 'select * from syn123',
        selectedFacets: [
          {
            columnName: 'study',
            concreteType: FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
            facetValues: ['abc', 'def'],
          },
          {
            columnName: 'category',
            concreteType: FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
            facetValues: ['abc', 'def'],
          },
        ],
      }
      const lockedColumn: LockedColumn = {
        columnName: 'study',
        value: 'abc',
      }
      expect(hasResettableFilters(query, lockedColumn)).toEqual(true)
    })

    it('only additionalFilter is locked', () => {
      const query: Query = {
        sql: 'select * from syn123',
        additionalFilters: [
          {
            columnName: 'study',
            operator: ColumnSingleValueFilterOperator.EQUAL,
            values: ['abc'],
            concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
          },
        ],
      }
      const lockedColumn: LockedColumn = {
        columnName: 'study',
        value: 'abc',
      }
      expect(hasResettableFilters(query, lockedColumn)).toEqual(false)
    })

    it('has an additionalFilter which is not locked', () => {
      const query: Query = {
        sql: 'select * from syn123',
        additionalFilters: [
          {
            columnName: 'study',
            operator: ColumnSingleValueFilterOperator.EQUAL,
            values: ['abc'],
            concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
          },
          {
            columnName: 'category',
            operator: ColumnSingleValueFilterOperator.EQUAL,
            values: ['def'],
            concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
          },
        ],
      }
      const lockedColumn: LockedColumn = {
        columnName: 'study',
        value: 'abc',
      }
      expect(hasResettableFilters(query, lockedColumn)).toEqual(true)
    })
  })

  // it('facets are unavailable, but would be relevant to the resultset schema', () => {
  //   expect(isFacetCountInSyncWithRowData('select * from syn123')).toEqual(true)
  //   expect(isFacetCountInSyncWithRowData('select * from syn123 where a=\'b\'')).toEqual(true)
  //   expect(isFacetCountInSyncWithRowData('select count(id) from syn123 group by study')).toEqual(false)
  // })

  describe('canTableQueryBeAddedToDownloadList', () => {
    test('undefined entity', () => {
      expect(canTableQueryBeAddedToDownloadList(undefined)).toEqual(false)
    })

    test('table entity query cannot be added to download list', () => {
      expect(canTableQueryBeAddedToDownloadList(mockTableEntity)).toEqual(false)
    })

    test('table entity query can be added to download list with provided column ID', () => {
      expect(
        canTableQueryBeAddedToDownloadList(mockTableEntity, '123'),
      ).toEqual(true)
    })

    test('entity view that includes non-files cannot be added to download list', () => {
      expect(
        canTableQueryBeAddedToDownloadList({
          ...mockFileViewEntity,
          viewTypeMask:
            ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_FOLDER,
        }),
      ).toEqual(false)
    })

    test('entity view that includes non-files can be added to download list if a column ID is included', () => {
      expect(
        canTableQueryBeAddedToDownloadList(
          {
            ...mockFileViewEntity,
            viewTypeMask:
              ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_FOLDER,
          },
          '123',
        ),
      ).toEqual(true)
    })

    test('entity view that never includes files not be added to download list', () => {
      expect(
        canTableQueryBeAddedToDownloadList({
          ...mockFileViewEntity,
          viewTypeMask: ENTITY_VIEW_TYPE_MASK_FOLDER,
        }),
      ).toEqual(false)
    })

    test('entity view that never includes files not be added to download list even if a column ID is included', () => {
      expect(
        canTableQueryBeAddedToDownloadList(
          {
            ...mockFileViewEntity,
            viewTypeMask: ENTITY_VIEW_TYPE_MASK_FOLDER,
          },
          '123',
        ),
      ).toEqual(false)
    })

    test('file-only view can be added to download list', () => {
      expect(
        canTableQueryBeAddedToDownloadList({
          ...mockFileViewEntity,
          viewTypeMask: ENTITY_VIEW_TYPE_MASK_FILE,
        }),
      ).toEqual(true)
    })

    test('dataset can be added to download list', () => {
      expect(canTableQueryBeAddedToDownloadList(mockDataset.entity)).toEqual(
        true,
      )
    })
    test('dataset collection cannot be added to download list (SWC-6927)', () => {
      expect(
        canTableQueryBeAddedToDownloadList(mockDatasetCollection.entity),
      ).toEqual(false)
    })
    test('dataset collection cannot be added to download list even with column ID', () => {
      expect(
        canTableQueryBeAddedToDownloadList(mockDatasetCollection.entity, '123'),
      ).toEqual(false)
    })

    test('materializedview can be added to download list if a column ID is included', () => {
      expect(
        canTableQueryBeAddedToDownloadList(
          {
            ...mockFileViewEntity,
            concreteType:
              'org.sagebionetworks.repo.model.table.MaterializedView',
          },
          '123',
        ),
      ).toEqual(true)
    })
  })

  describe('queryRequestsHaveDifferentTotalResults', () => {
    const query: Query = {
      sql: 'select * from syn123',
      selectedFacets: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'foo',
          facetValues: ['bar'],
        },
      ],
      additionalFilters: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
          columnName: 'baz',
          operator: ColumnSingleValueFilterOperator.EQUAL,
          values: ['qux'],
        },
      ],
      sort: [
        {
          column: 'foo',
          direction: 'ASC',
        },
      ],
      limit: 10,
      offset: 10,
    }

    it('returns false when sql is changed', () => {
      const newQuery = cloneDeep(query)
      newQuery.sql = "select * from syn123 where foo = 'abc'"
      expect(queryRequestsHaveSameTotalResults(query, newQuery)).toEqual(false)
    })

    it('returns false when selectedFacets is changed', () => {
      const newQuery = cloneDeep(query)
      newQuery.selectedFacets = [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'foo',
          facetValues: ['abc'],
        },
      ]
      expect(queryRequestsHaveSameTotalResults(query, newQuery)).toEqual(false)
    })

    it('returns false when additionalFilters is changed', () => {
      const newQuery = cloneDeep(query)
      newQuery.additionalFilters = [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
          columnName: 'baz',
          operator: ColumnSingleValueFilterOperator.EQUAL,
          values: ['abc'],
        },
      ]
      expect(queryRequestsHaveSameTotalResults(query, newQuery)).toEqual(false)
    })

    it('returns true when limit is changed', () => {
      const newQuery = cloneDeep(query)
      newQuery.limit = 20
      expect(queryRequestsHaveSameTotalResults(query, newQuery)).toEqual(true)
    })

    it('returns true when offset is changed', () => {
      const newQuery = cloneDeep(query)
      newQuery.offset = 20
      expect(queryRequestsHaveSameTotalResults(query, newQuery)).toEqual(true)
    })

    it('returns true when sort is changed', () => {
      const newQuery = cloneDeep(query)
      newQuery.sort = [
        {
          column: 'foo',
          direction: 'DESC',
        },
      ]
      expect(queryRequestsHaveSameTotalResults(query, newQuery)).toEqual(true)
    })
  })
})

describe('removeEmptyQueryParams', () => {
  it('removes empty arrays', () => {
    const query: Query = {
      sql: 'select * from syn123',
      selectedFacets: [],
      additionalFilters: [],
      sort: [],
      limit: 10,
      offset: 20,
    }

    const expected = {
      sql: 'select * from syn123',
      limit: 10,
      offset: 20,
    }

    const actual = removeEmptyQueryParams(query)
    expect(actual).toEqual(expected)
  })

  it('removes null values', () => {
    const query: Query = {
      sql: 'select * from syn123',
      // @ts-expect-error - null is not allowed
      selectedFacets: null,
      // @ts-expect-error - null is not allowed
      additionalFilters: null,
      // @ts-expect-error - null is not allowed
      sort: null,
      // @ts-expect-error - null is not allowed
      limit: null,
      // @ts-expect-error - null is not allowed
      offset: null,
    }

    const expected = {
      sql: 'select * from syn123',
    }

    const actual = removeEmptyQueryParams(query)
    expect(actual).toEqual(expected)
  })

  it('removes undefined values', () => {
    const query: Query = {
      sql: 'select * from syn123',
      selectedFacets: undefined,
      additionalFilters: undefined,
      sort: undefined,
      limit: undefined,
      offset: undefined,
    }

    const expected = {
      sql: 'select * from syn123',
    }

    const actual = removeEmptyQueryParams(query)
    expect(actual).toEqual(expected)
  })

  it('removes 0 offset', () => {
    const query: Query = {
      sql: 'select * from syn123',
      offset: 0,
    }

    const expected = {
      sql: 'select * from syn123',
    }

    const actual = removeEmptyQueryParams(query)
    expect(actual).toEqual(expected)
  })
})

describe('getCorrespondingColumnForFacet', () => {
  it('gets a ColumnModel', () => {
    const facet: FacetColumnResult = {
      columnName: 'foo',
      facetValues: [],
      facetType: 'enumeration',
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
    }

    const columnModels: ColumnModel[] = [
      {
        id: '1',
        name: 'foo',
        columnType: ColumnTypeEnum.STRING,
      },
    ]
    const expected = columnModels[0]
    const actual = getCorrespondingColumnForFacet(facet, columnModels)
    expect(actual).toEqual(expected)
  })

  it('gets a JSON subcolumn', () => {
    const facet: FacetColumnResult = {
      columnName: 'foo',
      jsonPath: '$.bar',
      facetValues: [],
      facetType: 'enumeration',
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
    }

    const jsonSubColumn: JsonSubColumnModel = {
      name: 'Bar',
      jsonPath: '$.bar',
      columnType: ColumnTypeEnum.STRING,
      facetType: 'enumeration',
    }

    const columnModels: ColumnModel[] = [
      {
        id: '1',
        name: 'foo',
        jsonSubColumns: [jsonSubColumn],
        facetType: 'enumeration',
        columnType: ColumnTypeEnum.STRING,
      },
    ]
    const actual = getCorrespondingColumnForFacet(facet, columnModels)
    expect(actual).toEqual(jsonSubColumn)
  })

  it('returns undefined if the column model cannot be found', () => {
    const facet: FacetColumnResult = {
      columnName: 'foo',
      facetValues: [],
      facetType: 'enumeration',
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
    }

    const columnModels: ColumnModel[] = []
    const actual = getCorrespondingColumnForFacet(facet, columnModels)
    expect(actual).toEqual(undefined)
  })
})

describe('getCorrespondingSelectedFacet', () => {
  it('gets a match on the column name', () => {
    const facet: UniqueFacetIdentifier = {
      columnName: 'foo',
    }

    const selectedFacets: FacetColumnRequest[] = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: 'foo',
        facetValues: ['bar'],
      },
    ]
    const expected = selectedFacets[0]
    const actual = getCorrespondingSelectedFacet(facet, selectedFacets)
    expect(actual).toEqual(expected)
  })

  it('gets a match on JSON subcolumn', () => {
    const facet: UniqueFacetIdentifier = {
      columnName: 'foo',
      jsonPath: "$.bar['baz']",
    }

    const selectedFacets: FacetColumnRequest[] = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: 'foo',
        jsonPath: "$.bar['baz']",
        facetValues: ['bar'],
      },
    ]
    const expected = selectedFacets[0]
    const actual = getCorrespondingSelectedFacet(facet, selectedFacets)
    expect(actual).toEqual(expected)
  })

  it('returns undefined if the facet cannot be found', () => {
    const facet: UniqueFacetIdentifier = {
      columnName: 'notFoo',
    }

    const selectedFacets: FacetColumnRequest[] = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: 'foo',
        facetValues: ['bar'],
      },
    ]
    const actual = getCorrespondingSelectedFacet(facet, selectedFacets)
    expect(actual).toBe(undefined)
  })

  describe('getHeaderIndex', () => {
    it('gets a match on the column name', () => {
      const actual = getHeaderIndex(
        'studyId',
        syn16787123Json as QueryResultBundle,
      )
      expect(actual).toEqual(1)
    })
    it('verify case insensitive search', () => {
      const actual = getHeaderIndex(
        'STUDYNAME',
        syn16787123Json as QueryResultBundle,
      )
      expect(actual).toEqual(0)
    })
    it('verify not found', () => {
      const actual = getHeaderIndex(
        'foobarbaz',
        syn16787123Json as QueryResultBundle,
      )
      expect(actual).toEqual(-1)
    })
  })

  test('facetObjectMatchesDefinition', () => {
    expect(
      facetObjectMatchesDefinition(
        { columnName: 'foo' },
        { columnName: 'foo' },
      ),
    ).toBe(true)
    expect(
      facetObjectMatchesDefinition(
        { columnName: 'foo', jsonPath: undefined },
        { columnName: 'foo' },
      ),
    ).toBe(true)
    expect(
      facetObjectMatchesDefinition(
        { columnName: 'foo', jsonPath: '$.bar' },
        { columnName: 'foo', jsonPath: '$.bar' },
      ),
    ).toBe(true)

    expect(
      facetObjectMatchesDefinition(
        { columnName: 'foo' },
        { columnName: 'baz' },
      ),
    ).toBe(false)
    expect(
      facetObjectMatchesDefinition(
        { columnName: 'foo', jsonPath: '$.bar' },
        { columnName: 'foo' },
      ),
    ).toBe(false)
    expect(
      facetObjectMatchesDefinition(
        { columnName: 'foo', jsonPath: '$.bar' },
        { columnName: 'baz', jsonPath: '$.bar' },
      ),
    ).toBe(false)
    expect(
      facetObjectMatchesDefinition(
        { columnName: 'foo', jsonPath: '$.bar' },
        { columnName: 'foo', jsonPath: '$.baz' },
      ),
    ).toBe(false)
  })

  describe('removeLockedColumnFromFacetData', () => {
    it('should remove locked facet data', () => {
      const lockedColumn: LockedColumn = {
        columnName: 'Make',
        value: 'Ford',
      }

      // call under test
      const result = removeLockedColumnFromFacetData(
        mockQueryResponseData,
        lockedColumn,
      )

      // One facet should be removed
      expect(result!.facets!.length).toEqual(
        mockQueryResponseData.facets.length - 1,
      )
      // The removed facet should match the locked facet name
      expect(
        result!.facets!.find(facet => facet.columnName === 'Make'),
      ).not.toBeDefined()
    })

    it('should not remove any data if locked facet value is not set', () => {
      const noLockedColumn: LockedColumn = {}

      // call under test
      const result = removeLockedColumnFromFacetData(
        mockQueryResponseData,
        noLockedColumn,
      )
      expect(result!.facets!.length).toEqual(
        mockQueryResponseData.facets.length,
      )

      expect(
        result!.facets!.find(facet => facet.columnName === 'Make'),
      ).toBeDefined()
    })
  })
})
