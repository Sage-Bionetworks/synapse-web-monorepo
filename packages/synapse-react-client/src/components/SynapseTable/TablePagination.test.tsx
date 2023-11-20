import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { TablePagination } from './TablePagination'
import {
  PaginatedQueryContextType,
  QueryContextProvider,
  QueryContextType,
} from '../QueryContext/QueryContext'
import { tableQueryDataAtom } from '../QueryWrapper/QueryWrapper'
import { Provider, SetStateAction, useSetAtom } from 'jotai'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import userEvent from '@testing-library/user-event'

const renderedTextConfirmation = 'TablePagination rendered!'

type SetAtom<Args extends any[], Result> = (...args: Args) => Result
let setTableData: SetAtom<[SetStateAction<QueryResultBundle | undefined>], void>

let mockSetPageSize: (pageSize: number) => void
let mockGoToPage: (pageNum: number) => void

const Receiver = () => {
  // An error would be thrown if context was not provided by QueryWrapper
  setTableData = useSetAtom(tableQueryDataAtom)
  return <>{renderedTextConfirmation}</>
}

const Wrapper: React.FC<Partial<PaginatedQueryContextType>> = queryContext => {
  return (
    <Provider>
      <QueryContextProvider queryContext={queryContext as QueryContextType}>
        <Receiver />
        <TablePagination />
      </QueryContextProvider>
    </Provider>
  )
}

describe('TablePagination component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockSetPageSize = jest.fn()
    mockGoToPage = jest.fn()
  })

  it('renders pagination and page size elements', async () => {
    render(
      <Wrapper
        goToPage={mockGoToPage}
        setPageSize={mockSetPageSize}
        pageSize={10}
        currentPage={1}
      />,
    )
    await screen.findByText(renderedTextConfirmation)
    act(() => {
      setTableData({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: 100,
        maxRowsPerPage: 100,
      })
    })

    // Check if Pagination and select elements are rendered
    expect(screen.getByRole('navigation')).toBeInTheDocument() // Pagination
    expect(screen.getByRole('combobox')).toBeInTheDocument() // Select for page size
  })

  it('triggers page change correctly', async () => {
    render(
      <Wrapper
        goToPage={mockGoToPage}
        setPageSize={mockSetPageSize}
        pageSize={10}
        currentPage={1}
      />,
    )

    await screen.findByText(renderedTextConfirmation)

    act(() => {
      setTableData({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: 100,
        maxRowsPerPage: 100,
      })
    })

    // Simulate changing the page
    await userEvent.click(screen.getByText('2')) // Click on page 2

    expect(mockGoToPage).toHaveBeenCalledTimes(1)
    expect(mockGoToPage).toHaveBeenCalledWith(2)
  })

  it('triggers page size change correctly', async () => {
    render(
      <Wrapper
        goToPage={mockGoToPage}
        setPageSize={mockSetPageSize}
        pageSize={100}
        currentPage={1}
      />,
    )
    await screen.findByText(renderedTextConfirmation)
    act(() => {
      setTableData({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: 1000,
        maxRowsPerPage: 1000,
      })
    })

    // Simulate changing the page size to 25
    await userEvent.selectOptions(screen.getByRole('combobox'), '25')

    expect(mockSetPageSize).toHaveBeenCalledTimes(1)
    expect(mockSetPageSize).toHaveBeenCalledWith('25')
  })

  it('hides pagination when on the first page and query count is 1', async () => {
    render(
      <Wrapper
        goToPage={mockGoToPage}
        setPageSize={mockSetPageSize}
        pageSize={100}
        currentPage={1}
      />,
    )
    await screen.findByText(renderedTextConfirmation)
    act(() => {
      setTableData({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: 1,
        maxRowsPerPage: 1000,
      })
    })

    // Check if pagination is not rendered when conditions are met
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('small max rows per page with more than one page of results', async () => {
    render(
      <Wrapper
        goToPage={mockGoToPage}
        setPageSize={mockSetPageSize}
        pageSize={5}
        currentPage={1}
      />,
    )
    await screen.findByText(renderedTextConfirmation)
    act(() => {
      setTableData({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: 20,
        maxRowsPerPage: 5,
      })
    })
    const comboBox = screen.getByRole('combobox')
    expect(comboBox.childElementCount).toEqual(1)
    expect(comboBox.children.item(0)?.textContent).toEqual('5 per page')
  })
})
