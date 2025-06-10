import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import {
  getUseQueryLoadingMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import {
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import RowDataTableWithQuery, {
  RowDataTableWithQueryProps,
} from './RowDataTableWithQuery'

vi.mock('../../synapse-queries/entity/useGetQueryResultBundle')
const mockUseGetQueryResultBundle = vi.mocked(useGetQueryResultBundle)

describe('RowDataTableWithQuery tests', () => {
  const dataColumnAliases = {
    name: 'Name',
    grantDOI: 'DOI',
    dataType: 'Data Type(s)',
  }
  const mockProps: RowDataTableWithQueryProps = {
    query: {
      sql: 'SELECT * FROM syn52694652',
    },
    displayedColumns: ['name', 'dataType', 'grantDOI'],
    columnAliases: dataColumnAliases,
    columnLinks: [
      {
        isMarkdown: false,
        matchColumnName: 'Grant DOI',
        linkColumnName: 'Grant DOI',
      },
    ],
  }

  const mockQueryResult: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn52694652',
        etag: 'DEFAULT',
        headers: [
          {
            name: 'name',
            columnType: ColumnTypeEnum.STRING,
          },
          {
            name: 'dataType',
            columnType: ColumnTypeEnum.STRING_LIST,
          },
          {
            name: 'grantDOI',
            columnType: ColumnTypeEnum.STRING_LIST,
          },
        ],
        rows: [
          {
            rowId: 1,
            values: [
              'Synodos NF2',
              '["Analysis, drugScreen, geneExpression, genomicVariants, immunoassay, kinomics, volume"]',
              '["https://doi.org/10.48105/pc.gr.88541, https://doi.org/10.48105/pc.gr.88552, https://doi.org/10.48105/pc.gr.88580, https://doi.org/10.48105/pc.gr.88495, https://doi.org/10.48105/pc.gr.88438, https://doi.org/10.48105/pc.gr.88461, https://doi.org/10.48105/pc.gr.88567, https://doi.org/10.48105/pc.gr.88682, https://doi.org/10.48105/pc.gr.88823"]',
            ],
          },
        ],
      },
    },
    selectColumns: [
      {
        name: 'name',
        columnType: ColumnTypeEnum.STRING,
      },
      {
        name: 'dataType',
        columnType: ColumnTypeEnum.STRING_LIST,
      },
      {
        name: 'grantDOI',
        columnType: ColumnTypeEnum.STRING_LIST,
      },
    ],
  }

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseGetQueryResultBundle.mockReturnValue(
      getUseQuerySuccessMock(mockQueryResult),
    )
  })

  it('renders correct labels', () => {
    render(<RowDataTableWithQuery {...mockProps} />)
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Synodos NF2')).toBeInTheDocument()
    expect(screen.getByText('Data Type(s)')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Analysis, drugScreen, geneExpression, genomicVariants, immunoassay, kinomics, volume',
      ),
    ).toBeInTheDocument()
    expect(screen.getByText('DOI')).toBeInTheDocument()
  })

  it('renders links correctly', () => {
    render(<RowDataTableWithQuery {...mockProps} />)
    const linkName = 'https://doi.org/10.48105/pc.gr.88541'
    const linkElement = screen.getByRole('link', { name: linkName })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute(
      'href',
      'https://doi.org/10.48105/pc.gr.88541',
    )
  })

  it('Shows loading state', () => {
    mockUseGetQueryResultBundle.mockReturnValue(getUseQueryLoadingMock())
    render(<RowDataTableWithQuery {...mockProps} />)
    const skeleton = document.querySelector('.MuiSkeleton-root')
    expect(skeleton).toBeInTheDocument()
  })
})
