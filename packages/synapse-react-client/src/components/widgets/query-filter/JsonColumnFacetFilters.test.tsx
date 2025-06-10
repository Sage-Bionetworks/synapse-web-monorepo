import { MOCK_TABLE_ENTITY_ID } from '@/mocks/entity/mockTableEntity'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import {
  ColumnModel,
  ColumnTypeEnum,
  FacetColumnResult,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper'
import QueryWrapper from '../../QueryWrapper'
import JsonColumnFacetFilters, {
  JsonColumnFacetFiltersProps,
} from './JsonColumnFacetFilters'

const queryRequest: QueryBundleRequest = {
  partMask: 255,
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: MOCK_TABLE_ENTITY_ID,
  query: {
    sql: `SELECT * FROM ${MOCK_TABLE_ENTITY_ID}`,
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}

const appearanceJsonColumnModel: ColumnModel = {
  id: '123',
  name: 'Appearance',
  columnType: ColumnTypeEnum.JSON,
  jsonSubColumns: [
    {
      name: 'Color',
      columnType: ColumnTypeEnum.STRING,
      jsonPath: '$.color',
      facetType: 'enumeration',
    },
    {
      name: 'Transparency',
      columnType: ColumnTypeEnum.INTEGER,
      jsonPath: '$.transparency',
      facetType: 'range',
    },
  ],
}

const appearanceJsonSubcolumnFacets: FacetColumnResult[] = [
  {
    concreteType:
      'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
    columnName: 'Appearance',
    jsonPath: '$.color',
    facetType: 'enumeration',
    facetValues: [
      { value: 'red', count: 4, isSelected: false },
      { value: 'blue', count: 2, isSelected: false },
      { value: 'green', count: 1, isSelected: false },
    ],
  },
  {
    concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
    columnName: 'Appearance',
    jsonPath: '$.transparency',
    facetType: 'range',
    columnMin: '0',
    columnMax: '100',
  },
]

const queryResponseDataWithJsonFacet = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  columnModels: [
    appearanceJsonColumnModel,
    {
      id: '124',
      name: 'Behavior',
      columnType: ColumnTypeEnum.JSON,
      jsonSubColumns: [
        {
          name: 'Animation',
          columnType: ColumnTypeEnum.STRING,
          jsonPath: '$.animation',
          facetType: 'enumeration',
        },
      ],
    },
  ],
  facets: [
    ...appearanceJsonSubcolumnFacets,
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'Behavior',
      jsonPath: '$.animation',
      facetType: 'enumeration',
      facetValues: [
        { value: 'collapse', count: 4, isSelected: false },
        { value: 'fade', count: 2, isSelected: false },
        { value: 'slide', count: 1, isSelected: false },
      ],
    },
  ],
} satisfies QueryResultBundle

function renderComponent(props: JsonColumnFacetFiltersProps) {
  return render(
    <QueryWrapper initQueryRequest={queryRequest}>
      <QueryVisualizationWrapper>
        <JsonColumnFacetFilters {...props} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('FacetFilterControls tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()
    registerTableQueryResult(queryRequest.query, queryResponseDataWithJsonFacet)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('renders a single group of JSON Subcolumn facets', async () => {
    renderComponent({
      columnModel: appearanceJsonColumnModel,
      facets: appearanceJsonSubcolumnFacets,
    })

    await screen.findByText('Appearance')
    await screen.findByText('Color')
    await screen.findByText('Transparency')

    // The other JSON column and its facets should NOT be rendered.
    expect(screen.queryByText('Behavior')).not.toBeInTheDocument()
    expect(screen.queryByText('Animation')).not.toBeInTheDocument()
  })
})
