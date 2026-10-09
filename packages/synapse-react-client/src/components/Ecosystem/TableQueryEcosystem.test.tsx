import TableQueryEcosystem from '@/components/Ecosystem/TableQueryEcosystem'
import { ImageFileHandle } from '@/components/widgets/ImageFileHandle'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { Query, QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { Markdown } from '@/components/Markdown/MarkdownSynapse'

vi.mock('@/components/Markdown/MarkdownSynapse')
vi.mock('@/components/widgets/ImageFileHandle')

const mockMarkdownSynapse = vi
  .mocked(Markdown)
  .mockReturnValue(<span data-testid={'Markdown'} />)
const mockImageFileHandle = vi
  .mocked(ImageFileHandle)
  .mockReturnValue(<span>ImageFileHandle</span>)

const tableQueryResult = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  maxRowsPerPage: 100,
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      tableId: 'syn12345678',
      etag: 'etag123',
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      headers: [
        { name: 'resourcecategory', columnType: 'STRING' },
        { name: 'resourcename', columnType: 'STRING' },
        { name: 'resourcedescription', columnType: 'STRING' },
        { name: 'resourceurl', columnType: 'STRING' },
        { name: 'resourceiconimage', columnType: 'STRING' },
      ],
      rows: [
        {
          values: [
            'Data Repository',
            'Synapse',
            'A collaborative platform for scientific research.',
            'https://www.synapse.org',
            '123',
          ],
        },
        {
          values: [
            'Data Repository',
            'PubMed',
            'A free search engine accessing primarily the MEDLINE database of references and abstracts on life sciences and biomedical topics.',
            'https://pubmed.ncbi.nlm.nih.gov',
            '456',
          ],
        },
        {
          values: [
            'Data Visualization',
            'Tableau',
            'A powerful data visualization tool.',
            'https://www.tableau.com',
            null,
          ],
        },
      ],
    },
  },
} satisfies QueryResultBundle
const query: Query = {
  sql: 'SELECT * FROM syn12345678',
}

describe('TableQueryEcosystem', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    registerTableQueryResult(query, tableQueryResult)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('displays data from a table', async () => {
    render(<TableQueryEcosystem query={query} />, { wrapper: createWrapper() })

    await screen.findByText('Data Repository')
    screen.getByText('Data Visualization')
    let sectionTitle = screen.getByText('Synapse')
    expect(sectionTitle).toHaveAttribute('href', 'https://www.synapse.org')
    sectionTitle = screen.getByText('PubMed')
    expect(sectionTitle).toHaveAttribute(
      'href',
      'https://pubmed.ncbi.nlm.nih.gov',
    )

    // 3rd title is not actually visible, but is rendered
    sectionTitle = screen.getByText('Tableau')
    expect(sectionTitle).toHaveAttribute('href', 'https://www.tableau.com')

    expect(screen.getAllByTestId('Markdown')).toHaveLength(3)
    expect(mockMarkdownSynapse).toHaveBeenRenderedWithProps({
      markdown: tableQueryResult.queryResult.queryResults.rows[0].values[2],
    })
    expect(mockMarkdownSynapse).toHaveBeenRenderedWithProps({
      markdown: tableQueryResult.queryResult.queryResults.rows[1].values[2],
    })
    expect(mockMarkdownSynapse).toHaveBeenRenderedWithProps({
      markdown: tableQueryResult.queryResult.queryResults.rows[2].values[2],
    })

    expect(mockImageFileHandle).toHaveBeenRenderedWithProps({
      fileHandleAssociation: {
        fileHandleId: '123',
        associateObjectId: 'syn12345678',
        associateObjectType: 'TableEntity',
      },
    })
    expect(mockImageFileHandle).toHaveBeenRenderedWithProps({
      fileHandleAssociation: {
        fileHandleId: '456',
        associateObjectId: 'syn12345678',
        associateObjectType: 'TableEntity',
      },
    })
  })
})
