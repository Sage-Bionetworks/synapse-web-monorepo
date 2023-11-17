import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { TablePagination } from './TablePagination'
import {
  PaginatedQueryContextType,
  QueryContextProvider,
  QueryContextType,
} from '../QueryContext/QueryContext'
import { tableQueryDataAtom } from '../QueryWrapper/QueryWrapper'
import { Provider, SetStateAction, useSetAtom } from 'jotai'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'

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

function Wrapper(queryContext: Partial<PaginatedQueryContextType>) {
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

  it('renders pagination and page size elements', () => {
    render(
      Wrapper({
        goToPage: mockGoToPage,
        setPageSize: mockSetPageSize,
        pageSize: 10,
        currentPage: 1,
      }),
    )
    act(() => {
      screen.findByText(renderedTextConfirmation)
    })
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

  it('triggers page change correctly', () => {
    render(
      Wrapper({
        goToPage: mockGoToPage,
        setPageSize: mockSetPageSize,
        pageSize: 10,
        currentPage: 1,
      }),
    )
    act(() => {
      screen.findByText(renderedTextConfirmation)
    })
    act(() => {
      setTableData({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: 100,
        maxRowsPerPage: 100,
      })
    })

    // Simulate changing the page
    act(() => {
      fireEvent.click(screen.getByText('2')) // Click on page 2
    })

    expect(mockGoToPage).toHaveBeenCalledTimes(1)
    expect(mockGoToPage).toHaveBeenCalledWith(2)
  })

  it('triggers page size change correctly', () => {
    render(
      Wrapper({
        goToPage: mockGoToPage,
        setPageSize: mockSetPageSize,
        pageSize: 100,
        currentPage: 1,
      }),
    )
    act(() => {
      screen.findByText(renderedTextConfirmation)
    })
    act(() => {
      setTableData({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: 1000,
        maxRowsPerPage: 1000,
      })
    })

    // Simulate changing the page size
    act(() => {
      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: '25' },
      }) // Change page size to 25
    })

    expect(mockSetPageSize).toHaveBeenCalledTimes(1)
    expect(mockSetPageSize).toHaveBeenCalledWith('25')
  })

  it('hides pagination when on the first page and query count is less than 10', () => {
    render(
      Wrapper({
        goToPage: mockGoToPage,
        setPageSize: mockSetPageSize,
        pageSize: 100,
        currentPage: 1,
      }),
    )
    act(() => {
      screen.findByText(renderedTextConfirmation)
    })
    act(() => {
      setTableData({
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: 5,
        maxRowsPerPage: 1000,
      })
    })

    // Check if pagination is not rendered when conditions are met
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })
})
