import { render, screen } from '@testing-library/react'
import SustainabilityScorecardSummary, {
  SustainabilityScorecardSummaryProps,
} from './SustainabilityScorecardSummary'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { getUseQueryMock } from '@/testutils/ReactQueryMockUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'

vi.mock('@/synapse-queries/entity/useGetQueryResultBundle')

const {
  mock: mockUseGetQueryResultBundleImpl,
  setSuccess: setGetQueryResultBundleSuccess,
} = getUseQueryMock<QueryResultBundle, SynapseClientError>()

const mockUseGetQueryResultBundle = vi.mocked(useGetQueryResultBundle)

async function waitForDataLoad() {
  await screen.findByText('Dependency Files')
}

const mockBundleSuccess: QueryResultBundle = {
  queryResult: {
    queryResults: {
      headers: [
        { name: 'dependencyFiles', columnType: 'BOOLEAN' },
        { name: 'testFiles', columnType: 'BOOLEAN' },
        { name: 'readmeFiles', columnType: 'BOOLEAN' },
        { name: 'scoreDescriptor', columnType: 'STRING' },
      ],

      rows: [
        {
          values: ['true', 'true', 'false', 'foundational'],
        },
      ],
      tableId: '',
      concreteType: '',
      etag: '',
    },
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
  },
  selectColumns: [
    { name: 'dependencyFiles', columnType: 'BOOLEAN' },
    { name: 'testFiles', columnType: 'BOOLEAN' },
    { name: 'readmeFiles', columnType: 'BOOLEAN' },
    { name: 'scoreDescriptor', columnType: 'STRING' },
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
    metricsConfig: [
      {
        key: 'dependencyFiles',
        label: 'Dependency Files',
        text: 'Some text for dependency files',
      },
      {
        key: 'testFiles',
        label: 'Test Files',
        text: 'Some text for test files',
      },
      {
        key: 'readmeFiles',
        label: 'README Files',
        text: 'Some text for README files',
      },
    ],
  }

  it('displays header', async () => {
    render(<SustainabilityScorecardSummary {...mockProps} />)
    setGetQueryResultBundleSuccess(mockBundleSuccess)

    await waitForDataLoad()

    expect(screen.getByText('Sustainability Index')).toBeInTheDocument()
    expect(
      screen.getByText('Some text for the sustainability scorecard summary.'),
    ).toBeInTheDocument()
  })

  it('displays card', async () => {
    render(<SustainabilityScorecardSummary {...mockProps} />)
    setGetQueryResultBundleSuccess(mockBundleSuccess)

    await waitForDataLoad()

    expect(screen.getByText('Dependency Files')).toBeInTheDocument()
    expect(screen.getByText('Test Files')).toBeInTheDocument()
    expect(screen.getByText('README Files')).toBeInTheDocument()
    expect(
      screen.getByText('Some text for dependency files'),
    ).toBeInTheDocument()
    expect(screen.getByText('Some text for test files')).toBeInTheDocument()
    expect(screen.getByText('Some text for README files')).toBeInTheDocument()
  })

  it('renders the correct icons based on metric values', async () => {
    render(<SustainabilityScorecardSummary {...mockProps} />)
    setGetQueryResultBundleSuccess(mockBundleSuccess)

    await waitForDataLoad()

    const checkIcons = screen.getAllByTestId('CheckCircleIcon')
    const cancelIcons = screen.getAllByTestId('CancelIcon')

    expect(checkIcons).toHaveLength(2)
    expect(cancelIcons).toHaveLength(1)
  })
})
