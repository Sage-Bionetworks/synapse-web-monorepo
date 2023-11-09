import { act, render, waitFor } from '@testing-library/react'
import React from 'react'
import {
  PaginatedQueryContextType,
  usePaginatedQueryContext,
} from '../QueryContext/QueryContext'
import {
  QueryVisualizationContextType,
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
  useQueryVisualizationContext,
} from './QueryVisualizationWrapper'
import { QueryWrapper, QueryWrapperProps } from '../QueryWrapper'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseConstants } from '../../utils'
import {
  ColumnTypeEnum,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import queryResponse from '../../mocks/mockQueryResponseDataWithManyEnumFacets'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import { server } from '../../mocks/msw/server'
import { MOCK_TABLE_ENTITY_ID } from '../../mocks/entity/mockTableEntity'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { cloneDeep } from 'lodash-es'

const onQueryContextReceived = jest.fn<void, [PaginatedQueryContextType]>()
const onContextReceived = jest.fn<void, [QueryVisualizationContextType]>()

function QueryVizWrapperConsumer(props: { mockFn?: jest.Mock }) {
  const queryContext = usePaginatedQueryContext()
  onQueryContextReceived(queryContext)
  const context = useQueryVisualizationContext()
  const fn = props.mockFn ?? onContextReceived
  fn(context)
  return null
}

function TestComponent(props: {
  mockFn?: jest.Mock
  queryWrapperProps?: Partial<QueryWrapperProps>
  queryWrapperVisualizationProps?: Partial<QueryVisualizationWrapperProps>
}) {
  return (
    <QueryWrapper
      initQueryRequest={initialQueryRequest}
      {...props.queryWrapperProps}
    >
      <QueryVisualizationWrapper {...props.queryWrapperVisualizationProps}>
        <QueryVizWrapperConsumer mockFn={props.mockFn} />
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

const initialQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  entityId: MOCK_TABLE_ENTITY_ID,
  query: {
    sql: `SELECT * FROM ${MOCK_TABLE_ENTITY_ID}`,
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}

describe('QueryVisualizationWrapper', () => {
  beforeAll(() => server.listen())
  beforeEach(() => server.use(...getHandlersForTableQuery(queryResponse)))
  afterEach(() => {
    server.restoreHandlers()
    jest.resetAllMocks()
  })
  afterAll(() => server.close())

  test('Initialize selectColumns', async () => {
    render(<TestComponent />, { wrapper: createWrapper() })

    await waitFor(() =>
      expect(onContextReceived).toHaveBeenCalledWith(
        expect.objectContaining({
          columnsToShowInTable: queryResponse.selectColumns!.map(
            col => col.name,
          ),
        }),
      ),
    )
  })

  test('Reset column visibility on sql change', async () => {
    render(<TestComponent />, { wrapper: createWrapper() })

    let firstSetOfVisibleColumns
    await waitFor(() => {
      expect(onContextReceived).toHaveBeenLastCalledWith(
        expect.objectContaining({
          columnsToShowInTable: queryResponse.selectColumns!.map(
            col => col.name,
          ),
        }),
      )
      firstSetOfVisibleColumns =
        onContextReceived.mock.lastCall![0].columnsToShowInTable
    })

    server.use(
      ...getHandlersForTableQuery({
        ...queryResponse,
        selectColumns: [
          {
            id: '123',
            name: 'someOtherColumns',
            columnType: ColumnTypeEnum.STRING,
          },
        ],
      }),
    )

    act(() => {
      onQueryContextReceived.mock.calls[0][0].executeQueryRequest({
        ...initialQueryRequest,
        query: {
          ...initialQueryRequest.query,
          sql: 'SELECT some, other, sql, query FROM syn123',
        },
      })
    })

    let secondSetOfVisibleColumns
    await waitFor(() => {
      expect(onContextReceived).toHaveBeenLastCalledWith(
        expect.objectContaining({
          columnsToShowInTable: ['someOtherColumns'],
        }),
      )
      secondSetOfVisibleColumns =
        onContextReceived.mock.lastCall![0].columnsToShowInTable
    })

    // The select columns should have changed
    expect(firstSetOfVisibleColumns).not.toEqual(secondSetOfVisibleColumns)
  })

  test('Do not reset when selectColumns deep equals the previous value', async () => {
    render(<TestComponent />, { wrapper: createWrapper() })

    let firstSetOfVisibleColumns: string[] = []
    await waitFor(() => {
      expect(onContextReceived).toHaveBeenLastCalledWith(
        expect.objectContaining({
          columnsToShowInTable: queryResponse.selectColumns!.map(
            col => col.name,
          ),
        }),
      )
      firstSetOfVisibleColumns =
        onContextReceived.mock.lastCall![0].columnsToShowInTable
    })

    // The results are different (e.g. on another page of data), but the selectColumns do not change
    server.use(
      ...getHandlersForTableQuery({
        ...queryResponse,
        queryResult: {
          ...queryResponse.queryResult!,
          queryResults: {
            ...queryResponse.queryResult!.queryResults,
            rows: [
              {
                rowId: 5,
                values: [
                  '2018',
                  'Honda',
                  'CR-V',
                  'windows, doors, gps, car play',
                  '8799',
                  null,
                  '1575305363000',
                  '273978',
                  null,
                ],
                versionNumber: 1,
              },
            ],
          },
        },
      }),
    )

    // e.g. navigate to the next page of data:
    act(() => {
      onQueryContextReceived.mock.lastCall![0].goToPage(2)
    })

    let secondSetOfVisibleColumns

    // Wait for the data to update.
    await waitFor(() => {
      secondSetOfVisibleColumns =
        onContextReceived.mock.lastCall![0].columnsToShowInTable
      // The array of visible columns should not have changed, and should have referential equality
      expect(firstSetOfVisibleColumns).toBe(secondSetOfVisibleColumns)
    })
  })

  describe('getColumnDisplayName', () => {
    test('Returns the columnName as-is if force-display-original-column-names is true', async () => {
      localStorage.setItem('force-display-original-column-names', 'true')

      render(<TestComponent />, { wrapper: createWrapper() })

      await waitFor(() => {
        const getColumnDisplayName =
          onContextReceived.mock.lastCall![0].getColumnDisplayName
        expect(getColumnDisplayName).toBeDefined()
        expect(getColumnDisplayName('testColumnName')).toBe('testColumnName')
      })
    })

    test('Returns the columnName unCamelCased if force-display-original-column-names is not set', async () => {
      localStorage.setItem('force-display-original-column-names', '')
      render(<TestComponent />, { wrapper: createWrapper() })

      await waitFor(() => {
        const getColumnDisplayName =
          onContextReceived.mock.lastCall![0].getColumnDisplayName
        expect(getColumnDisplayName).toBeDefined()
        expect(getColumnDisplayName('testColumnName')).toBe('Test Column Name')
      })
    })

    test('Returns an alias if defined', async () => {
      render(
        <TestComponent
          queryWrapperVisualizationProps={{
            columnAliases: { testColumnName: 'test column alias' },
          }}
        />,
        { wrapper: createWrapper() },
      )

      await waitFor(() => {
        const getColumnDisplayName =
          onContextReceived.mock.lastCall![0].getColumnDisplayName
        expect(getColumnDisplayName).toBeDefined()
        expect(getColumnDisplayName('testColumnName')).toBe('test column alias')
      })
    })

    test('Returns the faceted jsonSubColumn name', async () => {
      const queryResponseWithJsonSubColumn = cloneDeep(queryResponse)
      queryResponseWithJsonSubColumn.columnModels = [
        {
          columnType: ColumnTypeEnum.JSON,
          name: 'someJsonColumn',
          id: '123',
          jsonSubColumns: [
            {
              name: 'Sub column name',
              columnType: ColumnTypeEnum.STRING,
              facetType: 'enumeration',
              jsonPath: '$.someJsonPath',
            },
          ],
        },
      ]
      server.use(...getHandlersForTableQuery(queryResponseWithJsonSubColumn))

      render(<TestComponent />, { wrapper: createWrapper() })

      await waitFor(() => {
        const getColumnDisplayName =
          onContextReceived.mock.lastCall![0].getColumnDisplayName
        expect(getColumnDisplayName).toBeDefined()
        expect(getColumnDisplayName('someJsonColumn', '$.someJsonPath')).toBe(
          'Sub column name',
        )
      })
    })

    test('Returns the faceted jsonSubColumn name if force-display-original-column-names is true', async () => {
      localStorage.setItem('force-display-original-column-names', 'true')
      const queryResponseWithJsonSubColumn = cloneDeep(queryResponse)
      queryResponseWithJsonSubColumn.columnModels = [
        {
          columnType: ColumnTypeEnum.JSON,
          name: 'someJsonColumn',
          id: '123',
          jsonSubColumns: [
            {
              name: 'Sub column name',
              columnType: ColumnTypeEnum.STRING,
              facetType: 'enumeration',
              jsonPath: '$.someJsonPath',
            },
          ],
        },
      ]
      server.use(...getHandlersForTableQuery(queryResponseWithJsonSubColumn))

      render(<TestComponent />, { wrapper: createWrapper() })

      await waitFor(() => {
        const getColumnDisplayName =
          onContextReceived.mock.lastCall![0].getColumnDisplayName
        expect(getColumnDisplayName).toBeDefined()
        expect(getColumnDisplayName('someJsonColumn', '$.someJsonPath')).toBe(
          'Sub column name',
        )
      })
    })
  })
})
