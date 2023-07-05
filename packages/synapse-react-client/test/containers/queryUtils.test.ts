import { getNextPageOfData } from '../../src/utils/functions'
import { SynapseConstants } from '../../src/utils'
import syn16787123Json from '../../mocks/query/syn16787123.json'
import {
  COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  ColumnSingleValueFilterOperator,
  ColumnTypeEnum,
  ENTITY_VIEW_TYPE_MASK_FILE,
  ENTITY_VIEW_TYPE_MASK_FOLDER,
  FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
  FacetColumnResult,
  FacetColumnResultValues,
  Query,
  QueryResultBundle,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { cloneDeep } from 'lodash-es'
import {
  canTableQueryBeAddedToDownloadList,
  hasResettableFilters,
  isFacetAvailable,
  isSingleNotSetValue,
} from '../../src/utils/functions/queryUtils'
import { LockedColumn } from '../../src'
import { mockTableEntity } from '../../mocks/entity/mockTableEntity'
import { mockFileViewEntity } from '../../mocks/entity/mockEntity'
import mockDataset from '../../mocks/entity/mockDataset'

describe('get next page of data', () => {
  const sql = 'SELECT * FROM syn16787123'
  const getNextPageOfDataRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: 'syn16787123',
    query: {
      sql,
      limit: 25,
      offset: 25,
    },
  }
  const data = syn16787123Json as QueryResultBundle
  const SynapseClient = require('../../src/synapse-client/SynapseClient')
  SynapseClient.getQueryTableResults = jest.fn(() =>
    Promise.resolve(syn16787123Json),
  )

  it('works when there is PAGE_SIZE results coming back', () => {
    getNextPageOfData(getNextPageOfDataRequest, data, '').then(partialState => {
      const lengthOfNewData =
        partialState.data.queryResult.queryResults.rows.length
      const lengthOfOldData = data.queryResult.queryResults.rows.length
      expect(partialState.hasMoreData).toEqual(true)
      expect(lengthOfNewData).toEqual(lengthOfOldData * 2)
    })
  })

  it('works when there is less then PAGE_SIZE results coming back', () => {
    // setup test to return half the number of rows
    const emptyData = cloneDeep(syn16787123Json)
    emptyData.queryResult.queryResults.rows = []
    SynapseClient.getQueryTableResults = jest.fn(() =>
      Promise.resolve(emptyData),
    )

    getNextPageOfData(getNextPageOfDataRequest, data, '').then(partialState => {
      // hasMoreData should be false since there are less than PAGE_SIZE results
      expect(partialState.hasMoreData).toEqual(false)
    })
  })
})

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
    expect(isFacetAvailable(facetColumns, selectColumns)).toEqual(true)
  })

  it('Facets are not available - undefined facetColumns or select columns', () => {
    expect(isFacetAvailable(undefined, selectColumns)).toEqual(false)
    expect(isFacetAvailable(facetColumns, undefined)).toEqual(false)
  })

  it('Facets are not available - empty facetColumns or select columns', () => {
    expect(isFacetAvailable([], selectColumns)).toEqual(false)
    expect(isFacetAvailable(facetColumns, [])).toEqual(false)
  })

  it('Facets are not available - facetColumn has no corresponding selectColumn', () => {
    const differentSelectColumns: SelectColumn[] = [
      {
        // for example, `SELECT COUNT(study) as "studyCount" from syn123` would not have study as a selectColumn
        name: 'studyCount',
        columnType: ColumnTypeEnum.INTEGER,
      },
    ]
    expect(isFacetAvailable(facetColumns, differentSelectColumns)).toEqual(
      false,
    )
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
    expect(isFacetAvailable(notSetFacets, selectColumns)).toEqual(false)
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

    test('entity view that includes non-files cannot be added to download list', () => {
      expect(
        canTableQueryBeAddedToDownloadList({
          ...mockFileViewEntity,
          viewTypeMask:
            ENTITY_VIEW_TYPE_MASK_FILE & ENTITY_VIEW_TYPE_MASK_FOLDER,
        }),
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
  })
})
