import { render, screen, waitFor } from '@testing-library/react'
import { cloneDeep } from 'lodash-es'
import * as React from 'react'
import { act } from '@testing-library/react'
import {
  LockedColumn,
  QueryContextType,
  useQueryContext,
} from '../../../src/lib/containers/QueryContext'
import {
  QueryWrapper,
  QueryWrapperProps,
} from '../../../src/lib/containers/QueryWrapper'
import { SynapseConstants } from '../../../src/lib/utils/'
import { SynapseContextProvider } from '../../../src/lib/utils/SynapseContext'
import { QueryBundleRequest } from '../../../src/lib/utils/synapseTypes/'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'
import syn16787123Json from '../../../mocks/query/syn16787123'
import { DEFAULT_PAGE_SIZE } from '../../../src/lib/utils/SynapseConstants'
import FullContextProvider from '../../../src/lib/utils/FullContextProvider'

let providedContext: QueryContextType | undefined
const renderedTextConfirmation = 'QueryWrapper rendered!'

const QueryContextReciever = jest.fn((props: any) => {
  // An error would be thrown if context was not provided by QueryWrapper
  const context = useQueryContext()
  providedContext = context
  return <>{renderedTextConfirmation}</>
})

// utility function
const renderComponent = (props: Partial<QueryWrapperProps>) => {
  render(
    <FullContextProvider synapseContext={MOCK_CONTEXT_VALUE}>
      <QueryWrapper {...props}>
        <QueryContextReciever></QueryContextReciever>
      </QueryWrapper>
    </FullContextProvider>,
  )
}

// Test setup
const SynapseClient = require('../../../src/lib/utils/SynapseClient')
SynapseClient.getQueryTableAsyncJobResults = jest.fn(queryBundleRequest => {
  return Promise.resolve({
    requestBody: queryBundleRequest,
    jobState: 'COMPLETE',
    responseBody: syn16787123Json,
  })
})

const initialQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  entityId: 'syn16787123',
  query: {
    sql: 'SELECT * FROM syn16787123',
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}

describe('basic functionality', () => {
  it('renders without crashing', async () => {
    renderComponent({ initQueryRequest: initialQueryRequest })
    await screen.findByText(renderedTextConfirmation)
  })

  it('Context values are accurate', async () => {
    renderComponent({ initQueryRequest: initialQueryRequest })
    await waitFor(() => providedContext?.isLoadingNewBundle === false)
    expect(providedContext).toEqual(
      expect.objectContaining({
        data: syn16787123Json,
      }),
    )
  })

  it('Executing a new query updates the last query request', async () => {
    renderComponent({ initQueryRequest: initialQueryRequest })

    // Wait for the children to render to ensure context is created
    await screen.findByText(renderedTextConfirmation)

    // Initial + last query should be the initial query
    expect(providedContext?.getInitQueryRequest()).toEqual(initialQueryRequest)
    expect(providedContext?.getLastQueryRequest()).toEqual(initialQueryRequest)

    // Update the query with new SQL
    const newQueryRequest = cloneDeep(initialQueryRequest)
    newQueryRequest.query.sql = 'SELECT new_columns FROM syn16787123'
    act(() => {
      providedContext?.executeQueryRequest(newQueryRequest)
    })

    // Last query should be the new query
    await waitFor(() =>
      expect(providedContext?.getLastQueryRequest()).toEqual(newQueryRequest),
    )
    // Initial query should not change
    expect(providedContext?.getInitQueryRequest()).toEqual(initialQueryRequest)
  })

  it('executeQueryRequest updates url if param is set', async () => {
    renderComponent({
      initQueryRequest: initialQueryRequest,
      shouldDeepLink: true,
    })

    await waitFor(() => expect(providedContext).toBeDefined())
    providedContext!.executeQueryRequest(initialQueryRequest)
    const location = window.location
    expect(location.search).toContain('QueryWrapper0')
    const query = JSON.parse(
      decodeURIComponent(location.search.split('QueryWrapper0=')[1]),
    )
    expect(query.sql).toEqual(initialQueryRequest.query.sql)
    expect(SynapseClient.getQueryTableAsyncJobResults).toHaveBeenCalled()
  })

  it('test onQueryChange and onQueryResultBundleChange', async () => {
    const mockOnQueryChange = jest.fn()
    const mockOnQueryResultBundleChange = jest.fn()
    renderComponent({
      initQueryRequest: initialQueryRequest,
      shouldDeepLink: true,
      onQueryChange: mockOnQueryChange,
      onQueryResultBundleChange: mockOnQueryResultBundleChange,
    })

    await waitFor(() => expect(providedContext).toBeDefined())
    providedContext!.executeQueryRequest(initialQueryRequest)

    await waitFor(() => {
      expect(mockOnQueryChange).toBeCalledWith(
        expect.stringContaining(initialQueryRequest.query.sql),
      )

      expect(mockOnQueryResultBundleChange).toHaveBeenLastCalledWith(
        expect.stringContaining(JSON.stringify(syn16787123Json)),
      )
    })
  })
})

describe('deep linking', () => {
  it('when there are no searchParams', async () => {
    window.history.pushState({}, 'Page Title', '/any/url/you/like')
    renderComponent({ initQueryRequest: initialQueryRequest })
    await waitFor(() =>
      expect(providedContext?.getLastQueryRequest()).toEqual(
        initialQueryRequest,
      ),
    )
  })
  it('when there are no applicable search params', async () => {
    window.history.pushState(
      {},
      'Page Title',
      '/any/url/you/like?someparam=someValue',
    )
    renderComponent({ initQueryRequest: initialQueryRequest })

    await waitFor(() =>
      expect(providedContext?.getLastQueryRequest()).toEqual(
        initialQueryRequest,
      ),
    )
  })

  it('when there is a single param in the url', async () => {
    const lqr = cloneDeep(initialQueryRequest)
    lqr.query.sql = 'SELECT * FROM syn12345'
    window.history.pushState(
      {},
      'Page Title',
      '/any/url/you/like?QueryWrapper0=' +
        encodeURIComponent(JSON.stringify(lqr.query)),
    )
    renderComponent({ initQueryRequest: initialQueryRequest })
    await waitFor(() => expect(providedContext).toBeDefined())
    const lastQuery = providedContext!.getLastQueryRequest()
    // expect(lastQuery).not.toEqual(lastQueryRequest)
    expect(lastQuery.entityId).toBe('syn12345')
    expect(lastQuery.query.sql).toBe(lqr.query.sql)
  })
  it('when there are multiple params in the url', async () => {
    const lqr = cloneDeep(initialQueryRequest)
    lqr.query.sql = 'SELECT * FROM syn12345'
    window.history.pushState(
      {},
      'Page Title',
      '/any/url/you/like?someotherParam=param&QueryWrapper0=' +
        encodeURIComponent(JSON.stringify(lqr.query)),
    ) + '&anotherPram=somethingElse'
    renderComponent({ initQueryRequest: initialQueryRequest })
    await waitFor(() => expect(providedContext).toBeDefined())

    const lastQuery = providedContext!.getLastQueryRequest()
    expect(lastQuery).not.toEqual(initialQueryRequest)
    expect(lastQuery.entityId).toBe('syn12345')
    expect(lastQuery.query.sql).toBe(lqr.query.sql)
  })
})

describe('locked facet', () => {
  const lockedColumn: LockedColumn = {
    columnName: 'tumorType',
    value: 'Cutaneous Neurofibroma',
  }
  const noLockedColumn: LockedColumn = {}

  it('removeLockedColumnData should remove locked facet data', async () => {
    renderComponent({
      initQueryRequest: initialQueryRequest,
      lockedColumn: lockedColumn,
    })

    await waitFor(() => expect(providedContext).toBeDefined())

    // One facet should be removed
    expect(providedContext!.data!.facets!.length).toEqual(
      syn16787123Json.facets!.length - 1,
    )
    // The removed facet should match the locked facet name
    expect(
      providedContext!.data!.facets!.find(
        facet => facet.columnName === 'tumorType',
      ),
    ).not.toBeDefined()
  })

  it('removeLockedColumnData should not remove any data if locked facet value is not set', async () => {
    renderComponent({
      initQueryRequest: initialQueryRequest,
      lockedColumn: noLockedColumn,
    })
    await waitFor(() => expect(providedContext).toBeDefined())

    expect(providedContext!.data!.facets!.length).toEqual(
      syn16787123Json.facets!.length,
    )

    expect(
      providedContext!.data!.facets!.find(
        facet => facet.columnName === 'tumorType',
      ),
    ).toBeDefined()
  })
})
