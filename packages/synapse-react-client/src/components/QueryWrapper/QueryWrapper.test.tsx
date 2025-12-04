import React from 'react'
import mockQueryResponseData from '@/mocks/mockQueryResponseData'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ALL_QUERY_BUNDLE_PARTS,
  DEFAULT_PAGE_SIZE,
} from '@/utils/SynapseConstants'
import { QueryBundleRequest, Row } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SetStateAction, useAtomValue, useSetAtom } from 'jotai'
import { cloneDeep } from 'lodash-es'
import { QueryContextType, useQueryContext } from '../QueryContext'
import { QueryWrapper, QueryWrapperProps } from './QueryWrapper'
import { selectedRowsAtom } from './TableRowSelectionState'
import { Mock } from 'vitest'

const getQueryTableAsyncJobResultsSpy = vi.spyOn(
  SynapseClient,
  'getQueryTableAsyncJobResults',
)

let providedContext: QueryContextType | undefined
const renderedTextConfirmation = 'QueryWrapper rendered!'
let selectedRows: Row[] | undefined
let setSelectedRows: ((value: SetStateAction<Row[]>) => void) | undefined

const QueryContextReceiver = (): React.ReactNode => {
  // An error would be thrown if context was not provided by QueryWrapper
  const context = useQueryContext()
  selectedRows = useAtomValue(selectedRowsAtom)
  setSelectedRows = useSetAtom(selectedRowsAtom)
  providedContext = context
  return <>{renderedTextConfirmation}</>
}

// utility function
function renderComponent(props: QueryWrapperProps) {
  const mockOnQueryChange: Mock<
    NonNullable<QueryWrapperProps['onQueryChange']>
  > = vi.fn()
  const mockOnQueryResultBundleChange: Mock<
    NonNullable<QueryWrapperProps['onQueryResultBundleChange']>
  > = vi.fn()

  const component = render(
    <QueryWrapper
      onQueryChange={mockOnQueryChange}
      onQueryResultBundleChange={mockOnQueryResultBundleChange}
      {...props}
    >
      <QueryContextReceiver />
    </QueryWrapper>,
    { wrapper: createWrapper() },
  )

  return { component, mockOnQueryChange, mockOnQueryResultBundleChange }
}

const initialQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask: ALL_QUERY_BUNDLE_PARTS,
  entityId: 'syn16787123',
  query: {
    sql: 'SELECT * FROM syn16787123',
    limit: DEFAULT_PAGE_SIZE,
  },
}

describe('QueryWrapper', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    selectedRows = undefined
    setSelectedRows = undefined
    vi.clearAllMocks()
    window.history.pushState({}, 'Page Title', '/')

    providedContext = undefined

    registerTableQueryResult(initialQueryRequest.query, mockQueryResponseData)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('basic functionality', () => {
    it('renders without crashing', async () => {
      renderComponent({ initQueryRequest: initialQueryRequest })
      await screen.findByText(renderedTextConfirmation)
    })

    it('Executing a new query updates the last query request', async () => {
      const newSql = 'SELECT new_columns FROM syn16787123'
      registerTableQueryResult(
        { ...initialQueryRequest.query, sql: newSql },
        mockQueryResponseData,
      )

      renderComponent({ initQueryRequest: initialQueryRequest })

      // Wait for the children to render to ensure context is created
      await screen.findByText(renderedTextConfirmation)

      // Initial + last query should be the initial query
      expect(providedContext?.getInitQueryRequest()).toEqual(
        initialQueryRequest,
      )
      expect(providedContext?.getCurrentQueryRequest()).toEqual(
        initialQueryRequest,
      )

      // Update the query with new SQL
      const newQueryRequest = cloneDeep(initialQueryRequest)
      newQueryRequest.query.sql = 'SELECT new_columns FROM syn16787123'
      act(() => {
        providedContext?.executeQueryRequest(newQueryRequest)
      })

      // Last query should be the new query
      await waitFor(() =>
        expect(providedContext?.getCurrentQueryRequest()).toEqual(
          newQueryRequest,
        ),
      )
      // Initial query should not change
      expect(providedContext?.getInitQueryRequest()).toEqual(
        initialQueryRequest,
      )
    })

    it('executeQueryRequest updates url if param is set', async () => {
      renderComponent({
        initQueryRequest: initialQueryRequest,
        shouldDeepLink: true,
      })

      const newSql = initialQueryRequest.query.sql + ' WHERE x = 1'

      registerTableQueryResult(
        { ...initialQueryRequest.query, sql: newSql },
        mockQueryResponseData,
      )

      await waitFor(() => expect(providedContext).toBeDefined())

      // Call under test -- update the query
      act(() => {
        providedContext!.executeQueryRequest({
          ...initialQueryRequest,
          query: {
            ...initialQueryRequest.query,
            sql: newSql,
          },
        })
      })

      await waitFor(() => {
        expect(location.search).toContain('QueryWrapper0')
        const query = JSON.parse(
          new URLSearchParams(location.search).get('QueryWrapper0')!,
        )
        expect(query.sql).toEqual(newSql)
        expect(getQueryTableAsyncJobResultsSpy).toHaveBeenCalled()
      })
    })

    it('test onQueryChange and onQueryResultBundleChange', async () => {
      const { mockOnQueryChange, mockOnQueryResultBundleChange } =
        renderComponent({
          initQueryRequest: initialQueryRequest,
          shouldDeepLink: true,
        })

      await waitFor(() => {
        expect(providedContext).toBeDefined()

        // Note: onQueryResultBundleChange should include the entire (merged) QueryResultBundle
        expect(mockOnQueryResultBundleChange).toHaveBeenCalled()
        const lastCallPassedQueryResultBundle =
          mockOnQueryResultBundleChange.mock.lastCall![0]
        expect(JSON.parse(lastCallPassedQueryResultBundle)).toEqual(
          mockQueryResponseData,
        )
      })

      act(() => {
        providedContext!.executeQueryRequest({
          ...initialQueryRequest,
          query: {
            ...initialQueryRequest.query,
            offset: 10,
          },
        })
      })

      await waitFor(() => {
        expect(mockOnQueryChange).toHaveBeenLastCalledWith(
          expect.stringContaining(initialQueryRequest.query.sql),
        )

        // Because there is now an offset, the bundle passed to the callback should not include the first 10 rows
        const expectedBundle = cloneDeep(mockQueryResponseData)
        expectedBundle.queryResult.queryResults.rows =
          expectedBundle.queryResult.queryResults.rows.slice(10)

        // Note: onQueryResultBundleChange should include the entire (merged) QueryResultBundle
        expect(mockOnQueryResultBundleChange).toHaveBeenCalled()
        const lastCallPassedQueryResultBundle =
          mockOnQueryResultBundleChange.mock.lastCall![0]
        expect(JSON.parse(lastCallPassedQueryResultBundle)).toEqual(
          expectedBundle,
        )
      })
    })
  })

  describe('deep linking', () => {
    it('when there are no searchParams', async () => {
      window.history.pushState({}, 'Page Title', '/any/url/you/like')
      renderComponent({ initQueryRequest: initialQueryRequest })
      await waitFor(() =>
        expect(providedContext?.getCurrentQueryRequest()).toEqual(
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
        expect(providedContext?.getCurrentQueryRequest()).toEqual(
          initialQueryRequest,
        ),
      )
    })

    it('when there is a single param in the url', async () => {
      const lqr = cloneDeep(initialQueryRequest)
      lqr.query.sql = 'SELECT * FROM syn12345'

      registerTableQueryResult(lqr.query, mockQueryResponseData)

      window.history.pushState(
        {},
        'Page Title',
        '/any/url/you/like?QueryWrapper0=' +
          encodeURIComponent(JSON.stringify(lqr.query)),
      )
      renderComponent({
        initQueryRequest: initialQueryRequest,
        shouldDeepLink: true,
      })
      await waitFor(() => {
        expect(providedContext).toBeDefined()
        const lastQuery = providedContext!.getCurrentQueryRequest()
        expect(lastQuery).not.toEqual(initialQueryRequest)
        expect(lastQuery.entityId).toBe('syn12345')
        expect(lastQuery.query.sql).toBe(lqr.query.sql)
      })
    })
    it('does not change query when shouldDeepLink is false', async () => {
      const lqr = cloneDeep(initialQueryRequest)
      lqr.query.sql = 'SELECT * FROM syn12345'

      registerTableQueryResult(lqr.query, mockQueryResponseData)

      window.history.pushState(
        {},
        'Page Title',
        '/any/url/you/like?QueryWrapper0=' +
          encodeURIComponent(JSON.stringify(lqr.query)),
      )
      renderComponent({
        initQueryRequest: initialQueryRequest,
        shouldDeepLink: false,
      })
      await waitFor(() => {
        expect(providedContext).toBeDefined()
        const lastQuery = providedContext!.getCurrentQueryRequest()
        expect(lastQuery).toEqual(initialQueryRequest)
        expect(lastQuery.entityId).toBe('syn16787123')
        expect(lastQuery.query.sql).toBe(initialQueryRequest.query.sql)
      })
    })
    it('when there are multiple params in the url', async () => {
      const lqr = cloneDeep(initialQueryRequest)
      lqr.query.sql = 'SELECT * FROM syn12345'

      registerTableQueryResult(lqr.query, mockQueryResponseData)

      window.history.pushState(
        {},
        'Page Title',
        '/any/url/you/like?someotherParam=param&QueryWrapper0=' +
          encodeURIComponent(JSON.stringify(lqr.query)) +
          '&anotherPram=somethingElse',
      )
      renderComponent({
        initQueryRequest: initialQueryRequest,
        shouldDeepLink: true,
      })
      await waitFor(() => expect(providedContext).toBeDefined())

      const lastQuery = providedContext!.getCurrentQueryRequest()
      expect(lastQuery).not.toEqual(initialQueryRequest)
      expect(lastQuery.entityId).toBe('syn12345')
      expect(lastQuery.query.sql).toBe(lqr.query.sql)
    })
  })

  describe('query change when rows are selected', () => {
    it('requires confirmation to change the query when rows are selected', async () => {
      const mockOnQueryChange = vi.fn()

      const newQuery = 'SELECT * FROM syn98765'

      registerTableQueryResult({ sql: newQuery }, mockQueryResponseData)

      renderComponent({
        initQueryRequest: initialQueryRequest,
        onQueryChange: mockOnQueryChange,
        isRowSelectionVisible: true,
      })

      // Select a row
      await waitFor(() => {
        expect(providedContext).toBeDefined()
        expect(selectedRows).toBeDefined()
        expect(setSelectedRows).toBeDefined()
      })
      act(() => {
        setSelectedRows!([
          {
            rowId: 123,
            values: [],
          },
        ])
      })
      await waitFor(() => expect(selectedRows).toHaveLength(1))

      //  call under test - make a change that will trigger the confirmation dialog
      expect(providedContext!.executeQueryRequest).toBeDefined()
      act(() => {
        providedContext!.executeQueryRequest(old => ({
          ...old,
          query: {
            ...old.query,
            sql: newQuery,
          },
        }))
      })

      // assert that the dialog appears
      let confirmButton: HTMLButtonElement
      await waitFor(async () => {
        const confirmationDialog = await screen.findByRole('dialog')
        within(confirmationDialog).getByText(
          /Change Query and Clear Selection?/,
        )
        confirmButton = within(confirmationDialog).getByRole('button', {
          name: 'Clear Selection and Update Query',
        })
      })

      expect(mockOnQueryChange).not.toHaveBeenCalled()

      // click confirm
      await userEvent.click(confirmButton!)

      // verify that our change was applied to the query
      expect(providedContext!.getCurrentQueryRequest()).toEqual(
        expect.objectContaining({
          query: expect.objectContaining({ sql: newQuery }),
        }),
      )
      expect(mockOnQueryChange).toHaveBeenCalled()
      // Verify that the selection was cleared
      expect(selectedRows).toEqual([])
    })

    it('handles canceling the change request when rows are selected', async () => {
      const mockOnQueryChange = vi.fn()

      const newQuery = 'SELECT * FROM syn98765'

      registerTableQueryResult({ sql: newQuery }, mockQueryResponseData)

      renderComponent({
        initQueryRequest: initialQueryRequest,
        onQueryChange: mockOnQueryChange,
        isRowSelectionVisible: true,
      })

      await waitFor(() => {
        expect(providedContext).toBeDefined()
        expect(selectedRows).toBeDefined()
        expect(setSelectedRows).toBeDefined()
      })
      act(() => {
        setSelectedRows!([
          {
            rowId: 123,
            values: [],
          },
        ])
      })
      await waitFor(() => expect(selectedRows).toHaveLength(1))

      // call under test - make a change that will trigger the confirmation dialog
      expect(providedContext!.executeQueryRequest).toBeDefined()
      act(() => {
        providedContext!.executeQueryRequest(old => ({
          ...old,
          query: {
            ...old.query,
            sql: newQuery,
          },
        }))
      })

      // assert that the dialog appears
      let cancelButton: HTMLButtonElement
      await waitFor(async () => {
        const confirmationDialog = await screen.findByRole('dialog')
        within(confirmationDialog).getByText(
          /Change Query and Clear Selection?/,
        )
        cancelButton = within(confirmationDialog).getByRole('button', {
          name: 'Cancel',
        })
      })

      expect(mockOnQueryChange).not.toHaveBeenCalled()

      // call under test: click cancel
      await userEvent.click(cancelButton!)

      // verify that our change was applied to the query
      expect(providedContext!.getCurrentQueryRequest()).toEqual(
        initialQueryRequest,
      )
      expect(mockOnQueryChange).not.toHaveBeenCalled()
      // Selection was not changed
      expect(selectedRows).toHaveLength(1)
    })
  })
})
