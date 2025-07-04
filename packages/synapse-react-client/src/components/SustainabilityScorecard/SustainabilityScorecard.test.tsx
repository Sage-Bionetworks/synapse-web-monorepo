import { render, screen } from '@testing-library/react'
import SustainabilityScorecard from './SustainabilityScorecard'
import { SustainabilityScorecardProps } from './SustainabilityScorecard'
import { getUseQueryMock } from '@/testutils/ReactQueryMockUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { MemoryRouter } from 'react-router'

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
const mockProps: SustainabilityScorecardProps = {
  entityId: 'syn68561794',
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

async function waitForDataLoad() {
  await screen.findByText('Dependencies')
}

async function renderWithSuccessMock() {
  render(
    <MemoryRouter>
      <SustainabilityScorecard {...mockProps} />
    </MemoryRouter>,
  )

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

    expect(screen.getByText('Repository')).toBeInTheDocument()
    expect(screen.getByText('Dependencies')).toBeInTheDocument()
    expect(screen.getByText('Tests')).toBeInTheDocument()
    expect(screen.getByText('README')).toBeInTheDocument()
  })

  it('displays the tooltip text for each metric', async () => {
    await renderWithSuccessMock()

    expect(
      screen.getByLabelText('Some text for presence of a repository'),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Some text for presence of a readme file'),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Some text for presence of dependencies'),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Some text for presence of tests'),
    ).toBeInTheDocument()
  })

  it('renders the score descriptor', async () => {
    await renderWithSuccessMock()
    const descriptor = await screen.findByText('foundational')
    expect(descriptor).toBeInTheDocument()
  })
})
