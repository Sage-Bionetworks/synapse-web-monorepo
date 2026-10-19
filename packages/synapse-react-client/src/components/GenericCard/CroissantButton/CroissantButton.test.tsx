import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import { delay, http } from 'msw'
import { afterAll, afterEach, beforeAll, describe, it } from 'vitest'
import CroissantButton from './CroissantButton'

const CROISSANT_TABLE_SQL = 'SELECT * FROM syn65903895'

const selectColumns = [
  { name: 'dataset', columnType: ColumnTypeEnum.ENTITYID, id: '1' },
  { name: 'dataset_version', columnType: ColumnTypeEnum.INTEGER, id: '2' },
  {
    name: 'croissant_file_s3_object',
    columnType: ColumnTypeEnum.STRING,
    id: '3',
  },
]

function getCroissantTableResult(
  rows: Array<Array<string | null>>,
): QueryResultBundle {
  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn65903895',
        etag: 'DEFAULT',
        headers: selectColumns,
        rows: rows.map((values, index) => ({ rowId: index + 1, values })),
      },
    },
    selectColumns,
    // getFullQueryTableResults pages until a page has fewer rows than this; without it the loop never ends
    maxRowsPerPage: 100,
  }
}

function renderComponent() {
  return render(
    <CroissantButton datasetId={'syn123'} datasetVersionNumber={4} />,
    { wrapper: createWrapper() },
  )
}

describe('CroissantButton', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('Displays the button when croissantUrl is available', async () => {
    registerTableQueryResult(
      { sql: CROISSANT_TABLE_SQL },
      getCroissantTableResult([
        ['syn123', '3', 'other_url'],
        ['syn123', '4', 'some_url'],
      ]),
    )

    renderComponent()

    const croissantLink = await screen.findByRole('link')
    expect(croissantLink).toHaveAttribute('href', 'some_url')
    expect(croissantLink).toHaveTextContent('Croissant')
    expect(croissantLink).toHaveAttribute('target', '_blank')
  })

  it('Displays a skeleton when croissantUrl is loading', async () => {
    server.use(
      http.post('*/repo/v1/entity/:id/table/query/async/start', () =>
        delay('infinite'),
      ),
    )

    renderComponent()

    await screen.findByRole('progressbar')
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('Does not display the button when croissantUrl is null', async () => {
    registerTableQueryResult(
      { sql: CROISSANT_TABLE_SQL },
      getCroissantTableResult([['syn999', '4', 'some_url']]),
    )

    renderComponent()

    await waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(),
    )
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
