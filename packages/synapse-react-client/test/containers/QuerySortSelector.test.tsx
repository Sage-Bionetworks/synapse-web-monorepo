import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { SynapseConstants } from '../../src/utils'
import QuerySortSelector, {
  QuerySortSelectorProps,
} from '../../src/components/QuerySortSelector'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../src/components/QueryVisualizationWrapper'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../src/components/QueryContext'
import { createWrapper } from '../testutils/TestingLibraryUtils'
import {
  QueryBundleRequest,
  QueryResultBundle,
  SortItem,
} from '@sage-bionetworks/synapse-types'
import syn16787123Json from '../../mocks/query/syn16787123.json'
import selectEvent from 'react-select-event'
import { DEFAULT_PAGE_SIZE } from '../../src/utils/SynapseConstants'

const renderComponent = (
  props: QuerySortSelectorProps,
  queryContext: Partial<QueryContextType>,
  queryVisualizationContext: Partial<QueryVisualizationContextType>,
) => {
  return render(
    <QueryContextProvider queryContext={queryContext}>
      <QueryVisualizationContextProvider
        queryVisualizationContext={queryVisualizationContext}
      >
        <QuerySortSelector {...props} />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('QuerySortSelector tests', () => {
  const executeQueryRequest = jest.fn(() => {})
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
  const getLastQueryRequest = jest.fn(() => lastQueryRequest)

  // cast the data to ignore ts warning
  const data = syn16787123Json as QueryResultBundle
  const props: QuerySortSelectorProps = {
    sortConfig: {
      defaultColumn: 'authors',
      defaultDirection: 'ASC',
      sortableColumns: ['authors', 'title', 'createdOn', 'journal'],
    },
  }

  const queryContext: Partial<QueryContextType> = {
    data,
    hasNextPage: false,
    getLastQueryRequest: getLastQueryRequest,
    executeQueryRequest: executeQueryRequest,
  }

  const queryVisualizationContext: Partial<QueryVisualizationContextType> = {
    getColumnDisplayName: jest.fn(() => 'Open Access Journals'),
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
      () =>
        expect(executeQueryRequest).toHaveBeenCalledWith(
          expect.objectContaining({
            query: expect.objectContaining({
              sort: expect.arrayContaining([expectedSortItem]),
            }),
          }),
        ),
      {
        timeout: 15000,
      },
    )
  }

  it('Executes query request on sort', async () => {
    renderComponent(props, queryContext, queryVisualizationContext)
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
