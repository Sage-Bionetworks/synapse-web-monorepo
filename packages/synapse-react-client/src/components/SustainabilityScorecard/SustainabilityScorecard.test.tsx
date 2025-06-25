import { render, screen } from '@testing-library/react'
import SustainabilityScorecard from './SustainabilityScorecard'
import { SustainabilityScorecardProps } from './SustainabilityScorecard'
import { getUseQueryMock } from '@/testutils/ReactQueryMockUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'

vi.mock('@/synapse-queries/entity/useGetQueryResultBundle')

const {
  mock: mockUseGetQueryResultBundleImpl,
  setSuccess: setGetQueryResultBundleSuccess,
} = getUseQueryMock<QueryResultBundle, SynapseClientError>()

const mockUseGetQueryResultBundle = vi.mocked(useGetQueryResultBundle)

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
const mockProps: SustainabilityScorecardProps = {
  entityId: 'syn68349264',
  sustainabilityReportLink: 'https://example.com/sustainability-report',
  metricsConfig: [
    {
      key: 'dependencyFiles',
      label: 'Dependency Files',
      text: 'Some tooltip text for dependency files',
    },
    {
      key: 'testFiles',
      label: 'Test Files',
      text: 'Some tooltip text for test files',
    },
    {
      key: 'readmeFiles',
      label: 'README Files',
      text: 'Some tooltip text for README files',
    },
  ],
}

async function waitForDataLoad() {
  await screen.findByText('Dependency Files')
}

async function renderWithSuccessMock() {
  render(<SustainabilityScorecard {...mockProps} />)
  setGetQueryResultBundleSuccess(mockBundleSuccess)
  await waitForDataLoad()
}

describe('SustainabilityScorecard tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    mockUseGetQueryResultBundle.mockImplementation(
      mockUseGetQueryResultBundleImpl,
    )
  })
  it('displays metrics', async () => {
    await renderWithSuccessMock()

    expect(screen.getByText('Dependency Files')).toBeInTheDocument()
    expect(screen.getByText('Test Files')).toBeInTheDocument()
    expect(screen.getByText('README Files')).toBeInTheDocument()
  })

  it('displays the tooltip text for each metric', async () => {
    await renderWithSuccessMock()

    expect(
      screen.getByLabelText('Some tooltip text for dependency files'),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Some tooltip text for test files'),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Some tooltip text for README files'),
    ).toBeInTheDocument()
  })

  it('renders the sustainability report link', async () => {
    await renderWithSuccessMock()

    const reportLink = screen.getByRole('link', {
      name: 'View this tool’s sustainability and reusability report',
    })
    expect(reportLink).toHaveAttribute(
      'href',
      mockProps.sustainabilityReportLink,
    )
  })
  it('renders the score descriptor', async () => {
    await renderWithSuccessMock()
    const descriptor = await screen.findByText('foundational')
    expect(descriptor).toBeInTheDocument()
  })
})
