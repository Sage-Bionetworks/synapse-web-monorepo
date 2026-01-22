import { mockQueryBundleRequest } from '@/mocks/mockFileViewQuery'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  QueryContextProvider,
  QueryContextType,
} from '../QueryContext/QueryContext'
import { TablePagination } from './TablePagination'
import { usePrefetchTableRows } from './usePrefetchTableData'

vi.mock('./usePrefetchTableData', () => {
  return {
    usePrefetchTableRows: vi.fn().mockReturnValue(vi.fn()),
  }
})

const mockUsePrefetchTableRows = vi.mocked(usePrefetchTableRows)

function renderComponent(options: {
  pageSize: number
  currentPage: number
  queryCount: number
  maxRowsPerPage?: number
  queryContextOverrides?: Partial<QueryContextType>
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
      queryFn: vi.fn().mockResolvedValue(queryStatsResult),
    }
  const mockGoToPage = vi.fn()
  const mockSetPageSize = vi.fn()

  const mockPrefetchPage = vi.fn()
  mockUsePrefetchTableRows.mockReturnValue(mockPrefetchPage)

  const passedQueryContext: Partial<QueryContextType> = {
    currentQueryRequest: mockQueryBundleRequest,
    queryMetadataQueryOptions,
    pageSize: options.pageSize,
    currentPage: options.currentPage,
    goToPage: mockGoToPage,
    setPageSize: mockSetPageSize,
    ...options.queryContextOverrides,
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

  it('hides pagination when maxRowsPerPage < 5', async () => {
    renderComponent({
      pageSize: 10,
      currentPage: 1,
      queryCount: 1,
      maxRowsPerPage: 4,
    })

    await expect(
      screen.findByRole('navigation', undefined, { timeout: 100 }),
    ).rejects.toThrow()
  })

  it('small max rows per page with more than one page of results', async () => {
    const { user } = renderComponent({
      pageSize: 5,
      currentPage: 1,
      queryCount: 20,
      maxRowsPerPage: 11,
    })

    const comboBox = await screen.findByRole('combobox')
    await user.click(comboBox)
    const pageSizeOptions = await screen.findAllByRole('option')
    expect(pageSizeOptions).toHaveLength(2)
    expect(pageSizeOptions[0].textContent).toEqual('5 per page')
    expect(pageSizeOptions[1].textContent).toEqual('10 per page')
  })

  it('no maxRowsPerPage value set', async () => {
    const { user } = renderComponent({
      pageSize: 3,
      currentPage: 1,
      queryCount: 3,
      maxRowsPerPage: undefined,
    })

    const comboBox = await screen.findByRole('combobox')
    await user.click(comboBox)
    const pageSizeOptions = await screen.findAllByRole('option')
    expect(pageSizeOptions).toHaveLength(1)
    expect(pageSizeOptions[0].textContent).toEqual('3 per page')
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

  it('query.limit value that is not a default page size option is added to the page size options', async () => {
    const addLimitOption = 7
    const { user } = renderComponent({
      pageSize: 7,
      currentPage: 1,
      queryCount: 100,
      maxRowsPerPage: 100,
      queryContextOverrides: {
        currentQueryRequest: {
          ...mockQueryBundleRequest,
          query: {
            ...mockQueryBundleRequest.query,
            limit: addLimitOption,
          },
        },
      },
    })

    // Verify that the current limit is displayed
    const pageSizeOptions = await screen.findByRole('combobox')
    await screen.findByText('7 per page')

    await user.click(pageSizeOptions)
    await user.click(await screen.findByRole('option', { name: '7 per page' }))
  })
})
