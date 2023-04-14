import { renderHook, act } from '@testing-library/react-hooks'
import { cloneDeep } from 'lodash-es'
import useImmutableTableQuery, {
  UseImmutableTableQueryOptions,
} from '../../../../src/lib/containers/useImmutableTableQuery'
import * as DeepLinkingUtils from '../../../../src/lib/utils/functions/deepLinkingUtils'

const options: UseImmutableTableQueryOptions = {
  initQueryRequest: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: 'syn123',
    partMask: 1,
    query: {
      sql: 'SELECT * FROM syn123.3 WHERE "foo"=\'bar\'',
    },
  },
}

describe('useImmutableTableQuery tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Returns the entity ID and version in the passed query', () => {
    const { result } = renderHook(() => useImmutableTableQuery(options))
    expect(result.current.entityId).toEqual('syn123')
    expect(result.current.versionNumber).toEqual(3)
  })

  it('Updates the query using a new query object', () => {
    const { result } = renderHook(() => useImmutableTableQuery(options))
    expect(result.current.getLastQueryRequest()).toEqual(
      options.initQueryRequest,
    )

    const newQuery = cloneDeep(options.initQueryRequest)
    newQuery.query.sql = 'SELECT * FROM syn123.3 WHERE "foo"=\'baz\''

    // Call under test
    act(() => {
      result.current.setQuery(newQuery)
    })
    expect(result.current.getLastQueryRequest()).toEqual(newQuery)
  })

  it('Updates the query using a transformer function', () => {
    const { result } = renderHook(() => useImmutableTableQuery(options))
    expect(result.current.getLastQueryRequest()).toEqual(
      options.initQueryRequest,
    )

    const newQuery = cloneDeep(options.initQueryRequest)
    newQuery.query.sql = 'SELECT * FROM syn123.3 WHERE "foo"=\'baz\''

    // Call under test
    act(() => {
      result.current.setQuery(currentQuery => {
        currentQuery.query.sql = newQuery.query.sql
        return currentQuery
      })
    })
    expect(result.current.getLastQueryRequest()).toEqual(newQuery)
  })

  it('Returns a deep clone of the initial request', () => {
    const { result } = renderHook(() => useImmutableTableQuery(options))
    expect(result.current.getInitQueryRequest()).toEqual(
      options.initQueryRequest,
    )
    expect(result.current.getInitQueryRequest()).not.toBe(
      options.initQueryRequest,
    )
  })

  it('Returns a deep clone of the most recent request', () => {
    const { result } = renderHook(() => useImmutableTableQuery(options))
    expect(result.current.getLastQueryRequest()).toEqual(
      options.initQueryRequest,
    )
    expect(result.current.getLastQueryRequest()).not.toBe(
      options.initQueryRequest,
    )
  })

  it('Updates the page size', () => {
    const { result } = renderHook(() => useImmutableTableQuery(options))
    expect(result.current.pageSize).toEqual(25)

    // Call under test
    act(() => {
      result.current.setPageSize(50)
    })

    expect(result.current.pageSize).toEqual(50)
    expect(result.current.getLastQueryRequest().query.limit).toEqual(50)
  })

  it('Updates the page number', () => {
    const { result } = renderHook(() => useImmutableTableQuery(options))
    const pageSize = result.current.pageSize
    expect(result.current.currentPage).toEqual(1)

    // Call under test
    act(() => {
      result.current.goToPage(2)
    })

    expect(result.current.currentPage).toEqual(2)
    expect(result.current.getLastQueryRequest().query.offset).toEqual(pageSize)
  })

  it('Calls onQueryChange when the query is modified', () => {
    const onQueryChange = jest.fn()
    const { result } = renderHook(() =>
      useImmutableTableQuery({
        ...options,
        onQueryChange,
      }),
    )

    expect(onQueryChange).not.toHaveBeenCalled()

    const newQuery = cloneDeep(options.initQueryRequest)
    newQuery.query.sql = 'SELECT * FROM syn123.3 WHERE "foo"=\'baz\''

    // Call under test - change the query
    act(() => {
      result.current.setQuery(newQuery)
    })
    expect(onQueryChange).toHaveBeenCalledWith(JSON.stringify(newQuery.query))
  })

  it('Updates the query if initQueryRequest changes', () => {
    const onQueryChange = jest.fn()
    const { result, rerender } = renderHook(
      props => useImmutableTableQuery(props),
      { initialProps: { ...options, onQueryChange } },
    )

    expect(onQueryChange).not.toHaveBeenCalled()

    const newQuery = cloneDeep(options.initQueryRequest)
    newQuery.query.sql = 'SELECT * FROM syn123.3 WHERE "foo"=\'baz\''

    // Call under test - change the initQueryRequest
    rerender({
      ...options,
      onQueryChange,
      initQueryRequest: newQuery,
    })

    expect(onQueryChange).toHaveBeenCalledWith(JSON.stringify(newQuery.query))
  })

  it('Updates the URL if shouldDeepLink is true', () => {
    const mockUpdateUrl = jest
      .spyOn(DeepLinkingUtils, 'updateUrlWithNewSearchParam')
      .mockImplementation(() => {})
    const { result } = renderHook(() =>
      useImmutableTableQuery({
        ...options,
        shouldDeepLink: true,
        componentIndex: 4,
      }),
    )

    expect(mockUpdateUrl).not.toHaveBeenCalled()

    const newQuery = cloneDeep(options.initQueryRequest)
    newQuery.query.sql = 'SELECT * FROM syn123.3 WHERE "foo"=\'baz\''

    // Call under test - change the query
    act(() => {
      result.current.setQuery(newQuery)
    })
    expect(mockUpdateUrl).toHaveBeenCalledWith(
      'QueryWrapper',
      4,
      encodeURIComponent(JSON.stringify(newQuery.query)),
    )
  })

  it('Updates the query on mount one is found in the URL', () => {
    const sqlInURL = 'SELECT * FROM syn123.3 WHERE "foo"=\'baz\''
    const mockUpdateUrl = jest
      .spyOn(DeepLinkingUtils, 'getQueryRequestFromLink')
      .mockImplementation(() => {
        return {
          ...options.initQueryRequest,
          query: {
            sql: sqlInURL,
          },
        }
      })
    const { result } = renderHook(() =>
      useImmutableTableQuery({
        ...options,
        shouldDeepLink: true,
        componentIndex: 4,
      }),
    )

    expect(mockUpdateUrl).toHaveBeenCalledTimes(1)

    expect(result.current.getLastQueryRequest().query.sql).toEqual(sqlInURL)
  })
})
