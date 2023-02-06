import { render, screen } from '@testing-library/react'
import * as React from 'react'
import { SynapseConstants } from '../../../src/lib/utils'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../src/lib/containers/QueryVisualizationWrapper'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../src/lib/containers/QueryContext'
import TotalQueryResults, {
  TotalQueryResultsProps,
} from '../../../src/lib/containers/TotalQueryResults'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  ColumnTypeEnum,
  QueryBundleRequest,
  QueryResultBundle,
  RowSet,
} from '../../../src/lib/utils/synapseTypes/'

function renderComponent(
  props: TotalQueryResultsProps,
  queryContextProps: Partial<QueryContextType>,
  queryVisualizationContext: Partial<QueryVisualizationContextType>,
) {
  render(
    <QueryContextProvider queryContext={queryContextProps}>
      <QueryVisualizationContextProvider
        queryVisualizationContext={queryVisualizationContext}
      >
        <TotalQueryResults {...props} />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('TotalQueryResults test', () => {
  const mockQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: '',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS,
    query: {
      sql: '',
    },
  }
  const mockQueryReturn: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryCount: 98,
    columnModels: [
      {
        id: '111488',
        name: 'studyStatus',
        columnType: ColumnTypeEnum.STRING,
        maximumSize: 50,
        facetType: 'enumeration',
      },
      {
        id: '111489',
        name: 'dataStatus',
        columnType: ColumnTypeEnum.STRING,
        maximumSize: 20,
        facetType: 'enumeration',
      },
    ],
    facets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
        columnName: 'studyStatus',
        facetType: 'enumeration',
        // @ts-ignore
        facetValues: [
          { value: 'Active', count: 55, isSelected: false },
          { value: 'Completed', count: 28, isSelected: true },
        ],
      },
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
        columnName: 'dataStatus',
        facetType: 'enumeration',
        // @ts-ignore
        facetValues: [
          { value: 'Published', count: 11, isSelected: false },
          { value: 'None', count: 9, isSelected: false },
          { value: 'Under Embargo', count: 6, isSelected: false },
          { value: 'Partially Released', count: 2, isSelected: false },
        ],
      },
    ],
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {} as RowSet,
    },
  }

  const queryContext: Partial<QueryContextType> = {
    data: mockQueryReturn,
    getLastQueryRequest: () => mockQueryRequest,
    isLoadingNewBundle: false,
  }

  const displayText = 'Displaying'
  const unitDescription = 'units'
  const props: TotalQueryResultsProps = {
    frontText: displayText,
  }

  const queryVisualizationContext: Partial<QueryVisualizationContextType> = {
    unitDescription,
    getColumnDisplayName: jest.fn(col => col),
  }

  it('Shows the display text, query count, and unit description', async () => {
    renderComponent(props, queryContext, queryVisualizationContext)

    await screen.findByText(`Displaying ${mockQueryReturn.queryCount} units`)
  })
})
