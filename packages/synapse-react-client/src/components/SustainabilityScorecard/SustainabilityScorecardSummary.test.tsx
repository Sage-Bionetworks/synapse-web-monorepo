import { render, screen } from '@testing-library/react'
import SustainabilityScorecardSummary, {
  SustainabilityScorecardSummaryProps,
} from './SustainabilityScorecardSummary'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { getUseQueryMock } from '@/testutils/ReactQueryMockUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { MemoryRouter } from 'react-router'

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

  const mockProps: SustainabilityScorecardSummaryProps = {
    entityId: 'syn68349264',
    text: 'Some text for the sustainability scorecard summary.',
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
    render(
      <MemoryRouter>
        <SustainabilityScorecardSummary {...mockProps} />
      </MemoryRouter>,
    )
  }

  it('displays header', async () => {
    renderComponent()
    setGetQueryResultBundleSuccess(mockBundleSuccess)

    await waitForDataLoad()

    expect(screen.getByText('Sustainability Index')).toBeInTheDocument()
    expect(
      screen.getByText('Some text for the sustainability scorecard summary.'),
    ).toBeInTheDocument()
  })

  it('displays card', async () => {
    renderComponent()
    setGetQueryResultBundleSuccess(mockBundleSuccess)

    await waitForDataLoad()

    expect(screen.getByText('Dependencies')).toBeInTheDocument()
    expect(screen.getByText('Tests')).toBeInTheDocument()
    expect(screen.getByText('README')).toBeInTheDocument()
    expect(
      screen.getByText('Some text for presence of a repository'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Some text for presence of a readme file'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Some text for presence of dependencies'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Some text for presence of tests'),
    ).toBeInTheDocument()
  })

  it('renders the correct icons based on metric values', async () => {
    renderComponent()
    setGetQueryResultBundleSuccess(mockBundleSuccess)

    await waitForDataLoad()

    const checkIcons = screen.getAllByTestId('CheckCircleIcon')
    const cancelIcons = screen.getAllByTestId('CancelIcon')

    expect(checkIcons).toHaveLength(2)
    expect(cancelIcons).toHaveLength(2)
  })
})
