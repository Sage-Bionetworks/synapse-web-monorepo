import React from 'react'
import { render, screen } from '@testing-library/react'
import { TablePagination } from './TablePagination'
import {
  QueryContextProvider,
  QueryContextType,
} from '../QueryContext/QueryContext'
import userEvent from '@testing-library/user-event'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { mockQueryBundleRequest } from '../../mocks/mockFileViewQuery'
import { usePrefetchTableRows } from './usePrefetchTableData'

jest.mock('./usePrefetchTableData', () => {
  return {
    usePrefetchTableRows: jest.fn().mockReturnValue(jest.fn()),
  }
})

const mockUsePrefetchTableRows = jest.mocked(usePrefetchTableRows)

function renderComponent(options: {
  pageSize: number
  currentPage: number
  queryCount: number
  maxRowsPerPage: number
}) {
  const user = userEvent.setup()

  const queryStatsResult: QueryResultBundle = {
    queryCount: options.queryCount,
    maxRowsPerPage: options.maxRowsPerPage,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  }

  const queryMetadataQueryOptions: QueryContextType['queryMetadataQueryOptions'] =
    {
      queryKey: ['query-metadata'],
      queryFn: jest.fn().mockResolvedValue(queryStatsResult),
    }
  const mockGoToPage = jest.fn()
  const mockSetPageSize = jest.fn()

  const mockPrefetchPage = jest.fn()
  mockUsePrefetchTableRows.mockReturnValue(mockPrefetchPage)

  const passedQueryContext: Partial<QueryContextType> = {
    currentQueryRequest: mockQueryBundleRequest,
    queryMetadataQueryOptions,
    pageSize: options.pageSize,
    currentPage: options.currentPage,
    goToPage: mockGoToPage,
    setPageSize: mockSetPageSize,
  }

  const component = render(
    <QueryContextProvider queryContext={passedQueryContext as QueryContextType}>
      <TablePagination />
    </QueryContextProvider>,
    { wrapper: createWrapper() },
  )

  return { user, component, passedQueryContext, mockPrefetchPage }
}

describe('TablePagination component', () => {
  it('renders pagination and page size elements', async () => {
    renderComponent({
      pageSize: 10,
      currentPage: 1,
      queryCount: 100,
      maxRowsPerPage: 100,
    })

    // Check if Pagination and select elements are rendered
    await screen.findByRole('navigation') // Pagination
    await screen.findByRole('combobox') // Select for page size
  })

  it('triggers page change correctly', async () => {
    const {
      user,
      passedQueryContext: { goToPage: mockGoToPage },
    } = renderComponent({
      pageSize: 10,
      currentPage: 1,
      queryCount: 100,
      maxRowsPerPage: 100,
    })

    // Simulate changing the page
    await user.click(await screen.findByText('2')) // Click on page 2

    expect(mockGoToPage).toHaveBeenCalledTimes(1)
    expect(mockGoToPage).toHaveBeenCalledWith(2)
  })

  it('triggers page size change correctly', async () => {
    const {
      user,
      passedQueryContext: { setPageSize: mockSetPageSize },
    } = renderComponent({
      pageSize: 100,
      currentPage: 1,
      queryCount: 1000,
      maxRowsPerPage: 1000,
    })

    // Simulate changing the page size to 25
    const pageSizeOptions = await screen.findByRole('combobox')
    await user.click(pageSizeOptions)
    await user.click(await screen.findByRole('option', { name: '25 per page' }))

    expect(mockSetPageSize).toHaveBeenCalledTimes(1)
    expect(mockSetPageSize).toHaveBeenCalledWith(25)
  })

  it('hides pagination when on the first page and query count is 1', async () => {
    renderComponent({
      pageSize: 100,
      currentPage: 1,
      queryCount: 1,
      maxRowsPerPage: 1000,
    })

    // Verify pagination is not rendered when conditions are met
    await expect(
      screen.findByRole('navigation', undefined, { timeout: 100 }),
    ).rejects.toThrow()
  })

  it('small max rows per page with more than one page of results', async () => {
    const { user } = renderComponent({
      pageSize: 5,
      currentPage: 1,
      queryCount: 20,
      maxRowsPerPage: 5,
    })

    const comboBox = await screen.findByRole('combobox')
    await user.click(comboBox)
    const pageSizeOptions = await screen.findAllByRole('option')
    expect(pageSizeOptions).toHaveLength(1)
    expect(pageSizeOptions[0].textContent).toEqual('5 per page')
  })

  it('prefetches a page on hover', async () => {
    const {
      user,
      passedQueryContext: { goToPage: mockGoToPage },
      mockPrefetchPage,
    } = renderComponent({
      pageSize: 10,
      currentPage: 1,
      queryCount: 100,
      maxRowsPerPage: 100,
    })

    expect(mockPrefetchPage).not.toHaveBeenCalled()

    // Simulate hovering over the button to go to page 2
    await user.hover(await screen.findByText('2'))

    // Verify we prefetched page 2
    expect(mockPrefetchPage).toHaveBeenCalledWith(2)

    // Verify we did not go to a new page
    expect(mockGoToPage).not.toHaveBeenCalled()
  })
})
