import React from 'react'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ColumnFilter from './ColumnFilter'
import syn20337467Json from '../../../src/mocks/query/syn20337467.json'
import { useQuery } from '@tanstack/react-query'
import { useQueryContext } from '../QueryContext/QueryContext'

jest.mock('../QueryContext/QueryContext', () => ({
  useQueryContext: jest.fn(),
}))
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
  QueryClient: jest.fn().mockImplementation(() => ({
    queryCache: { clear: jest.fn() },
    setQueryData: jest.fn(),
    getQueryData: jest.fn(),
  })),
}))

const data = syn20337467Json as QueryResultBundle

describe('ColumnFilter tests', () => {
  const executeQueryRequest = jest.fn()
  const addValueToSelectedFacet = jest.fn()
  const removeSelectedFacet = jest.fn()

  beforeEach(() => {
    ;(useQueryContext as jest.Mock).mockReturnValue({
      executeQueryRequest,
      addValueToSelectedFacet,
      removeSelectedFacet,
      getCurrentQueryRequest: jest.fn().mockReturnValue({
        query: {
          selectedFacets: [{ columnName: 'program', facetValues: ['AMP-AD'] }],
        },
      }),
    })
    ;(useQuery as jest.Mock).mockReturnValue({
      data: data,
    })
  })

  const openDropdown = () => {
    const openIcon = screen.getByTitle('Open')
    fireEvent.click(openIcon)
  }

  const ColumnFilterComponent = (
    <ColumnFilter
      filterColumnName="program"
      removeSelectedFacet={removeSelectedFacet}
      addValueToSelectedFacet={addValueToSelectedFacet}
    />
  )

  it('renders the ColumnFilter component correctly', () => {
    render(ColumnFilterComponent)

    expect(screen.getByTestId('column-filter')).toBeInTheDocument()
  })

  it('displays the correct filter options based on query metadata', () => {
    render(ColumnFilterComponent)

    openDropdown()

    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(4)
    expect(options[1]).toHaveTextContent('CDCP')
  })

  it('calls addValueToSelectedFacet on filter value change', async () => {
    render(ColumnFilterComponent)

    openDropdown()

    await waitFor(() => {
      const option = screen.getByText('CDCP')
      fireEvent.click(option)
    })

    await waitFor(() => {
      expect(addValueToSelectedFacet).toHaveBeenCalledWith(
        { columnName: 'program' },
        'CDCP',
      )
    })
  })

  it('calls removeSelectedFacet when a selected option is deselected', async () => {
    render(ColumnFilterComponent)

    openDropdown()

    await waitFor(() => {
      const option = screen.getByText('CDCP')
      fireEvent.click(option)
    })

    expect(removeSelectedFacet).toHaveBeenCalledWith({
      columnName: 'program',
    })
  })

  it('no facets available', () => {
    ;(useQuery as jest.Mock).mockReturnValueOnce({
      data: { facets: [] },
    })

    render(<ColumnFilter filterColumnName="dataType" />)

    const columnFilterDiv = screen.getByTestId('column-filter')
    expect(columnFilterDiv).toBeInTheDocument()

    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
  })

  it('selected value is a chip', () => {
    render(ColumnFilterComponent)

    const chipLabel = screen.getByText('AMP-AD')
    expect(chipLabel).toHaveClass('MuiChip-label')
  })
})
