import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { render, waitFor } from '@testing-library/react'
import MarkdownSynapse from '../MarkdownSynapse'

const tableQueryResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn123',
      etag: '2ac77a6e-193f-11ec-bc43-168179607a59',
      headers: [
        { name: 'x', columnType: 'INTEGER', id: '1102' },
        { name: 'y', columnType: 'DOUBLE', id: '56202' },
      ],
      rows: [
        { rowId: 0, versionNumber: 0, values: ['0', '0'] },
        { rowId: 1, versionNumber: 0, values: ['1', '3.2'] },
        { rowId: 2, versionNumber: 0, values: ['2', '7.7'] },
        { rowId: 3, versionNumber: 0, values: ['3', '13.1'] },
        { rowId: 4, versionNumber: 0, values: ['4', '19'] },
        { rowId: 5, versionNumber: 0, values: ['5', '25'] },
        { rowId: 6, versionNumber: 0, values: ['6', '30.7'] },
        { rowId: 7, versionNumber: 0, values: ['7', '35.6'] },
        { rowId: 8, versionNumber: 0, values: ['8', '39.3'] },
        { rowId: 9, versionNumber: 0, values: ['9', '41.4'] },
      ],
    },
  },
  maxRowsPerPage: 48770,
}

describe('SynapsePlot', () => {
  beforeAll(() => {
    server.listen()
    registerTableQueryResult(
      { sql: 'select "x", "y" from syn123' },
      tableQueryResult,
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('renders', async () => {
    const { container } = render(
      <MarkdownSynapse
        markdown={
          '${plot?query=select "x"%2C "y" from syn123&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'
        }
      />,
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() =>
      expect(container.querySelector('.plotly')).not.toBeNull(),
    )
  })
})
