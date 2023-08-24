import { act, render, screen, waitFor, within } from '@testing-library/react'
import { cloneDeep } from 'lodash-es'
import React from 'react'
import {
  LockedColumn,
  QueryContextType,
  useQueryContext,
} from '../../src/components/QueryContext/QueryContext'
import {
  QueryWrapper,
  QueryWrapperProps,
} from '../../src/components/QueryWrapper/QueryWrapper'
import { SynapseConstants } from '../../src/utils'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import syn16787123Json from '../../src/mocks/query/syn16787123'
import { DEFAULT_PAGE_SIZE } from '../../src/utils/SynapseConstants'
import useTableRowSelection from '../../src/components/QueryWrapper/useTableRowSelection'
import SynapseClient from '../../src/synapse-client'
import { mockCompleteAsyncJob } from '../../src/mocks/mockFileViewQuery'
import userEvent from '@testing-library/user-event'
import { createWrapper } from '../../src/testutils/TestingLibraryUtils'

jest.mock('../../src/synapse-client', () => ({
  getQueryTableAsyncJobResults: jest.fn(),
  getEntity: jest.fn(),
}))

jest.mock('../../src/components/QueryWrapper/useTableRowSelection', () => ({
  __esModule: true,
  default: jest.fn(),
}))

const mockGetQueryTableAsyncJobResults = jest.mocked(
  SynapseClient.getQueryTableAsyncJobResults,
)
const mockUseTableRowSelection = jest.mocked(useTableRowSelection)

let providedContext: QueryContextType | undefined
const renderedTextConfirmation = 'QueryWrapper rendered!'

const QueryContextReceiver = jest.fn((props: any) => {
  // An error would be thrown if context was not provided by QueryWrapper
  const context = useQueryContext()
  providedContext = context
  return <>{renderedTextConfirmation}</>
})

// utility function
async function renderComponent(props: Partial<QueryWrapperProps>) {
  let renderResult
  await act(async () => {
    renderResult = render(
      <QueryWrapper {...props}>
        <QueryContextReceiver />
      </QueryWrapper>,
      { wrapper: createWrapper() },
    )
  })

  return renderResult
}

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

describe('QueryWrapper', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    window.history.pushState({}, 'Page Title', '/')

    providedContext = undefined
    mockGetQueryTableAsyncJobResults.mockImplementation(queryBundleRequest => {
      return Promise.resolve({
        ...mockCompleteAsyncJob,
        requestBody: queryBundleRequest,
        jobState: 'COMPLETE',
        responseBody: syn16787123Json as QueryResultBundle,
      })
    })

    mockUseTableRowSelection.mockReturnValue({
      isRowSelectionVisible: false,
      selectedRows: [],
      setSelectedRows: jest.fn(),
      hasSelectedRows: false,
    })
  })

  describe('basic functionality', () => {
    it('renders without crashing', async () => {
      await renderComponent({ initQueryRequest: initialQueryRequest })
      await screen.findByText(renderedTextConfirmation)
    })

    it('Context values are accurate', async () => {
      await renderComponent({ initQueryRequest: initialQueryRequest })
      await waitFor(() => providedContext?.isLoadingNewBundle === false)
      expect(providedContext).toEqual(
        expect.objectContaining({
          data: syn16787123Json,
        }),
      )
    })

    it('Executing a new query updates the last query request', async () => {
      await renderComponent({ initQueryRequest: initialQueryRequest })

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
      await act(async () => {
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
      await renderComponent({
        initQueryRequest: initialQueryRequest,
        shouldDeepLink: true,
      })

      const newSql = initialQueryRequest.query.sql + ' WHERE x = 1'

      await waitFor(() => expect(providedContext).toBeDefined())

      await act(async () => {
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
          new URLSearchParams(location.search).get('QueryWrapper0'),
        )
        expect(query.sql).toEqual(newSql)
        expect(mockGetQueryTableAsyncJobResults).toHaveBeenCalled()
      })
    })

    it('test onQueryChange and onQueryResultBundleChange', async () => {
      const mockOnQueryChange = jest.fn()
      const mockOnQueryResultBundleChange = jest.fn()
      await renderComponent({
        initQueryRequest: initialQueryRequest,
        shouldDeepLink: true,
        onQueryChange: mockOnQueryChange,
        onQueryResultBundleChange: mockOnQueryResultBundleChange,
      })

      await waitFor(() => expect(providedContext).toBeDefined())

      act(() => {
        providedContext!.executeQueryRequest(initialQueryRequest)
      })

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
      await renderComponent({ initQueryRequest: initialQueryRequest })
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
      await renderComponent({ initQueryRequest: initialQueryRequest })

      await waitFor(() =>
        expect(providedContext?.getCurrentQueryRequest()).toEqual(
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
      await renderComponent({ initQueryRequest: initialQueryRequest })
      await waitFor(() => {
        expect(providedContext).toBeDefined()
        const lastQuery = providedContext!.getCurrentQueryRequest()
        expect(lastQuery).not.toEqual(initialQueryRequest)
        expect(lastQuery.entityId).toBe('syn12345')
        expect(lastQuery.query.sql).toBe(lqr.query.sql)
      })
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
      await renderComponent({ initQueryRequest: initialQueryRequest })
      await waitFor(() => expect(providedContext).toBeDefined())

      const lastQuery = providedContext!.getCurrentQueryRequest()
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
      await renderComponent({
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
      await renderComponent({
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

  describe('query change when rows are selected', () => {
    it('requires confirmation to change the query when rows are selected', async () => {
      const mockSetSelectedRows = jest.fn()
      mockUseTableRowSelection.mockClear().mockReturnValue({
        isRowSelectionVisible: true,
        selectedRows: [
          {
            rowId: 123,
            values: [],
          },
        ],
        setSelectedRows: mockSetSelectedRows,
        hasSelectedRows: true,
      })
      const mockOnQueryChange = jest.fn()

      const newQuery = 'SELECT * FROM syn98765'

      await renderComponent({
        initQueryRequest: initialQueryRequest,
        onQueryChange: mockOnQueryChange,
      })

      expect(providedContext!.executeQueryRequest).toBeDefined()

      //  call under test - make a change that will trigger the confirmation dialog
      await act(async () => {
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
      expect(mockSetSelectedRows.mock.lastCall[0]).toEqual([])
    })

    it('handles canceling the change request when rows are selected', async () => {
      const mockSetSelectedRows = jest.fn()
      mockUseTableRowSelection.mockReturnValue({
        isRowSelectionVisible: true,
        selectedRows: [
          {
            rowId: 123,
            values: [],
          },
        ],
        setSelectedRows: mockSetSelectedRows,
        hasSelectedRows: true,
      })
      const mockOnQueryChange = jest.fn()

      const newQuery = 'SELECT * FROM syn98765'

      await renderComponent({
        initQueryRequest: initialQueryRequest,
        onQueryChange: mockOnQueryChange,
      })

      expect(providedContext!.executeQueryRequest).toBeDefined()

      // call under test - make a change that will trigger the confirmation dialog
      await act(async () => {
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
      expect(mockSetSelectedRows).not.toHaveBeenCalled()
    })
  })
})
