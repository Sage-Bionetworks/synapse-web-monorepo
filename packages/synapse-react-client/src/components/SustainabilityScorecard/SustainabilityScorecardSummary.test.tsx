import { act, render, screen } from '@testing-library/react'
import SustainabilityScorecardSummary, {
  SustainabilityScorecardSummaryProps,
} from './SustainabilityScorecardSummary'
import {
  ColumnSingleValueFilterOperator,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { getUseQueryMock } from '@/testutils/ReactQueryMockUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { SynapseConstants } from '@/utils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'

vi.mock('@/synapse-queries/entity/useGetQueryResultBundle')

const {
  mock: mockUseGetQueryResultBundleImpl,
  setSuccess: setGetQueryResultBundleSuccess,
} = getUseQueryMock<QueryResultBundle, SynapseClientError>()

const mockUseGetQueryResultBundle = vi.mocked(useGetQueryResultBundle)

async function waitForDataLoad() {
  await screen.findByText('Dependencies')
}

const mockBundleSuccess: QueryResultBundle = {
  queryResult: {
    queryResults: {
      headers: [
        { name: 'CloneRepository', columnType: 'BOOLEAN' },
        { name: 'CheckReadme', columnType: 'BOOLEAN' },
        { name: 'CheckDependencies', columnType: 'BOOLEAN' },
        { name: 'CheckTests', columnType: 'BOOLEAN' },
        { name: 'AlmanackScoreDescriptor', columnType: 'STRING' },
      ],

      rows: [
        {
          values: ['true', 'true', 'false', 'false', 'foundational'],
        },
      ],
      tableId: '',
      concreteType: '',
      etag: '',
    },
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
  },
  selectColumns: [
    { name: 'CloneRepository', columnType: 'BOOLEAN' },
    { name: 'CheckReadme', columnType: 'BOOLEAN' },
    { name: 'CheckDependencies', columnType: 'BOOLEAN' },
    { name: 'CheckTests', columnType: 'BOOLEAN' },
    { name: 'AlmanackScoreDescriptor', columnType: 'STRING' },
  ],
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
}

describe('SustainabilityScorecard Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    mockUseGetQueryResultBundle.mockImplementation(
      mockUseGetQueryResultBundleImpl,
    )
  })

  const mockQuery: QueryBundleRequest = {
    entityId: 'syn68561794',
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: 'SELECT * FROM syn68561794',
      additionalFilters: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
          columnName: 'toolName',
          operator: ColumnSingleValueFilterOperator.LIKE,
          values: ['%DrugCell%'],
        },
      ],
    },
  }

  const mockProps: SustainabilityScorecardSummaryProps = {
    queryRequest: mockQuery,
    description: 'Some text for the sustainability scorecard summary.',
    filterColumn: 'toolName',
    searchParamKey: 'toolName',
    scoreDescriptorColumnName: 'AlmanackScoreDescriptor',
    metricsConfig: [
      {
        key: 'CloneRepository',
        label: 'Repository',
        text: 'Some text for presence of a repository',
      },
      {
        key: 'CheckReadme',
        label: 'README',
        text: 'Some text for presence of a readme file',
      },
      {
        key: 'CheckDependencies',
        label: 'Dependencies',
        text: 'Some text for presence of dependencies',
      },
      {
        key: 'CheckTests',
        label: 'Tests',
        text: 'Some text for presence of tests',
      },
    ],
  }

  function renderComponent() {
    render(<SustainabilityScorecardSummary {...mockProps} />, {
      wrapper: createWrapper(),
    })
  }

  it('displays header', async () => {
    renderComponent()
    act(() => {
      setGetQueryResultBundleSuccess(mockBundleSuccess)
    })

    await waitForDataLoad()

    screen.getByText('Sustainability Index')
    screen.getByText('Some text for the sustainability scorecard summary.')
  })

  it('displays card', async () => {
    renderComponent()
    act(() => {
      setGetQueryResultBundleSuccess(mockBundleSuccess)
    })

    await waitForDataLoad()

    screen.getByText('Dependencies')
    screen.getByText('Tests')
    screen.getByText('README')
    screen.getByText('Some text for presence of a repository')
    screen.getByText('Some text for presence of a readme file')
    screen.getByText('Some text for presence of dependencies')
    screen.getByText('Some text for presence of tests')
  })

  it('renders the correct icons based on metric values', async () => {
    renderComponent()
    act(() => {
      setGetQueryResultBundleSuccess(mockBundleSuccess)
    })

    await waitForDataLoad()

    const checkIcons = screen.getAllByTestId('CheckCircleIcon')
    const cancelIcons = screen.getAllByTestId('CancelIcon')

    expect(checkIcons).toHaveLength(2)
    expect(cancelIcons).toHaveLength(2)
  })
})
