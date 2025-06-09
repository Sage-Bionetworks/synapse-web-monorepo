import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import ColumnFilter from './ColumnFilter'
import syn20337467Json from '@/mocks/query/syn20337467.json'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { QueryContextType, useQueryContext } from '../QueryContext/QueryContext'

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}))

vi.mock('../QueryContext/QueryContext', () => ({
  useQueryContext: vi.fn(),
}))

const mockUseQueryContext = vi.mocked(useQueryContext)
const mockUseQuery = vi.mocked(useQuery)

const data = syn20337467Json as QueryResultBundle

describe('ColumnFilter tests', () => {
  const executeQueryRequest = vi.fn()
  const addValueToSelectedFacet = vi.fn()
  const removeSelectedFacet = vi.fn()

  beforeEach(() => {
    mockUseQueryContext.mockReturnValue({
      executeQueryRequest,
      addValueToSelectedFacet,
      removeSelectedFacet,
      queryMetadataQueryOptions: {
        queryKey: ['queryMetadataQueryOptions'],
        queryFn: vi.fn().mockResolvedValue(data),
      },
      getCurrentQueryRequest: vi.fn().mockReturnValue({
        query: {
          selectedFacets: [{ columnName: 'program', facetValues: ['AMP-AD'] }],
        },
      }),
    } as unknown as QueryContextType)

    mockUseQuery.mockReturnValue({
      data: data,
    } as UseQueryResult<QueryResultBundle>)
  })

  const openDropdown = () => {
    const openIcon = screen.getByTitle('Open')
    fireEvent.click(openIcon)
  }

  const props = {
    topLevelEnumeratedFacetToFilter: { columnName: 'program' },
    removeSelectedFacet: removeSelectedFacet,
    addValueToSelectedFacet: addValueToSelectedFacet,
  }

  it('displays the correct filter options based on query metadata', () => {
    render(<ColumnFilter {...props} />)
    expect(mockUseQuery).toHaveBeenCalledWith({
      queryKey: ['queryMetadataQueryOptions'],
      queryFn: expect.any(Function),
    })

    openDropdown()

    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(4)
    expect(options[1]).toHaveTextContent('CDCP')
  })

  it('calls addValueToSelectedFacet on filter value change', async () => {
    render(<ColumnFilter {...props} />)

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
    render(<ColumnFilter {...props} />)

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
    mockUseQuery.mockReturnValueOnce({
      data: { facets: [] },
    } as UseQueryResult<unknown, unknown>)

    render(<ColumnFilter {...props} />)

    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
  })

  it('selected value is a chip', () => {
    render(<ColumnFilter {...props} />)

    const chipLabel = screen.getByText('AMP-AD')
    expect(chipLabel).toHaveClass('MuiChip-label')
  })
})
