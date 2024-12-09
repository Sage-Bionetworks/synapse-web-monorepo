import { render, screen } from '@testing-library/react'
import { SynapseConstants } from '../utils'
import { QueryVisualizationWrapper } from './QueryVisualizationWrapper/QueryVisualizationWrapper'
import TotalQueryResults, { TotalQueryResultsProps } from './TotalQueryResults'
import { createWrapper } from '../testutils/TestingLibraryUtils'
import {
  ColumnTypeEnum,
  QueryBundleRequest,
  QueryResultBundle,
  RowSet,
} from '@sage-bionetworks/synapse-types'
import { server } from '../mocks/msw/server'
import QueryWrapper from './QueryWrapper'
import { mockTableEntity } from '../mocks/entity/mockTableEntity'
import { registerTableQueryResult } from '../mocks/msw/handlers/tableQueryService'

const mockQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: mockTableEntity.id,
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
    SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS,
  query: {
    sql: `SELECT * FROM ${mockTableEntity.id}`,
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

const displayText = 'Displaying'
const unitDescription = 'units'

function renderComponent(props: TotalQueryResultsProps) {
  render(
    <QueryWrapper initQueryRequest={mockQueryRequest}>
      <QueryVisualizationWrapper unitDescription={unitDescription}>
        <TotalQueryResults {...props} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('TotalQueryResults test', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    registerTableQueryResult(mockQueryRequest.query, mockQueryReturn)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  const props: TotalQueryResultsProps = {
    frontText: displayText,
  }

  it('Shows the display text, query count, and unit description', async () => {
    renderComponent(props)

    await screen.findByText(`Displaying ${mockQueryReturn.queryCount} units`)
  })
})
