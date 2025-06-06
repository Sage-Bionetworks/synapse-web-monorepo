import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseConstants } from '@/utils/index'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import { QueryBundleRequest, SortItem } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import selectEvent from 'react-select-event'
import { useQueryContext } from './QueryContext/QueryContext'
import QuerySortSelector, { QuerySortSelectorProps } from './QuerySortSelector'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper/index'

vi.mock('./QueryContext/QueryContext', () => ({
  useQueryContext: vi.fn(),
}))

vi.mock('./QueryVisualizationWrapper/QueryVisualizationContext', () => ({
  useQueryVisualizationContext: vi.fn(),
}))

const mockExecuteQueryRequest = vi.fn()
vi.mocked(useQueryContext)
  // @ts-expect-error - only mocking the function we need
  .mockReturnValue({
    executeQueryRequest: mockExecuteQueryRequest,
  })

// @ts-expect-error - only mocking the function we need
vi.mocked(useQueryVisualizationContext).mockReturnValue({
  getColumnDisplayName: vi
    .fn()
    .mockImplementation(() => 'Open Access Journals'),
})

const renderComponent = (props: QuerySortSelectorProps) => {
  return render(
    <QuerySortSelector {...props} />,

    {
      wrapper: createWrapper(),
    },
  )
}

describe('QuerySortSelector tests', () => {
  const sql = 'SELECT * FROM syn16787123'
  const lastQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: 'syn16787123',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    query: {
      sql,
      limit: DEFAULT_PAGE_SIZE,
      offset: 0,
    },
  }

  const props: QuerySortSelectorProps = {
    sortConfig: {
      defaultColumn: 'authors',
      defaultDirection: 'ASC',
      sortableColumns: ['authors', 'title', 'createdOn', 'journal'],
    },
  }

  const sortByOpenAccessJournals = async () => {
    const input = screen.getByRole('combobox')
    await userEvent.type(input, 'journal')
    await screen.findAllByText(new RegExp('Open Access Journals'))
    await act(async () => {
      await selectEvent.select(input, 'Open Access Journals')
    })
  }

  const verifyExpectedSortItem = async (expectedSortItem: SortItem) => {
    await waitFor(
      () => {
        expect(mockExecuteQueryRequest).toHaveBeenCalled()
        const queryTransformFn = mockExecuteQueryRequest.mock.lastCall![0]
        expect(typeof queryTransformFn).toBe('function')
        expect(queryTransformFn(lastQueryRequest)).toEqual(
          expect.objectContaining({
            query: expect.objectContaining({
              sort: expect.arrayContaining([expectedSortItem]),
            }),
          }),
        )
      },
      {
        timeout: 15000,
      },
    )
  }

  it('Executes query request on sort', async () => {
    renderComponent(props)
    await sortByOpenAccessJournals()

    const expectedSortItem: SortItem = {
      column: 'journal',
      direction: 'ASC',
    }
    await verifyExpectedSortItem(expectedSortItem)

    // Selecting the item again should flip the sort direction
    await sortByOpenAccessJournals()
    expectedSortItem.direction = 'DESC'
    await verifyExpectedSortItem(expectedSortItem)
  })
})
