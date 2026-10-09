import { render, screen } from '@testing-library/react'
import SustainabilityScorecard from './SustainabilityScorecard'
import { SustainabilityScorecardProps } from './SustainabilityScorecard'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ColumnSingleValueFilterOperator,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '@/utils'
import { MemoryRouter } from 'react-router'

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

const mockProps: SustainabilityScorecardProps = {
  queryRequest: mockQuery,
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
  sustainabilityReportLink: 'some-path',
}

async function waitForDataLoad() {
  await screen.findByText('Dependencies')
}

async function renderWithSuccessMock() {
  render(
    <MemoryRouter>
      <SustainabilityScorecard {...mockProps} />
    </MemoryRouter>,
    { wrapper: createWrapper() },
  )

  await waitForDataLoad()
}

describe('SustainabilityScorecard tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    registerTableQueryResult(mockQuery.query, mockBundleSuccess)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

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
    const descriptor = await screen.findByText('Foundational')
    expect(descriptor).toBeInTheDocument()
  })

  it('renders link', async () => {
    await renderWithSuccessMock()
    screen.getByRole('link', {
      name: /View this tool’s sustainability and reusability report/i,
    })
  })
})
