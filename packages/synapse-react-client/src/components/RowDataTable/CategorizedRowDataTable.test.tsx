import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import '@/mocks/msw/server'
import {
  createColumnCategoryTableQueryResultBundle,
  MockColumnCategoryRow,
} from '@/mocks/query/mockColumnCategoryTable'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ColumnTypeEnum, SelectColumn } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import CategorizedRowDataTable, {
  getColumnCategoryTableQuery,
} from './CategorizedRowDataTable'

const columnCategoryTableId = 'syn123'

const rowHeaders: SelectColumn[] = [
  { name: 'repo', columnType: ColumnTypeEnum.STRING },
  { name: 'model_id', columnType: ColumnTypeEnum.STRING },
  { name: 'base_model', columnType: ColumnTypeEnum.STRING },
  { name: 'training_data', columnType: ColumnTypeEnum.STRING },
  { name: 'hidden_column', columnType: ColumnTypeEnum.STRING },
  { name: 'software', columnType: ColumnTypeEnum.STRING_LIST },
]
const rowData = [
  'my-repo',
  'model-1',
  'llama',
  'training set',
  'should not be shown',
  '[]',
]

function registerColumnCategories(rows: MockColumnCategoryRow[]) {
  registerTableQueryResult(
    getColumnCategoryTableQuery(columnCategoryTableId),
    createColumnCategoryTableQueryResultBundle(columnCategoryTableId, rows),
  )
}

function renderComponent() {
  return render(
    <CategorizedRowDataTable
      rowData={rowData}
      headers={rowHeaders}
      columnCategoryTableId={columnCategoryTableId}
    />,
    { wrapper: createWrapper() },
  )
}

function getSections() {
  return screen
    .getAllByRole('heading', { level: 3 })
    .map(heading => heading.closest('section')!)
}

describe('CategorizedRowDataTable', () => {
  it('groups columns under category headings in the order of the category table', async () => {
    registerColumnCategories([
      ['model_id', 'Model ID', 'Overview', 1],
      ['repo', 'Repository', 'Overview', 2],
      ['training_data', 'Training Data', 'Training', 3],
    ])
    renderComponent()

    await screen.findByRole('heading', { name: 'Overview' })
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.map(h => h.textContent)).toEqual(['Overview', 'Training'])

    const [overview, training] = getSections()
    const overviewLabels = within(overview)
      .getAllByRole('row')
      .map(row => within(row).getAllByRole('cell')[0].textContent)
    expect(overviewLabels).toEqual(['Model ID', 'Repository'])
    expect(within(overview).getByText('my-repo')).toBeInTheDocument()
    expect(within(training).getByText('Training Data')).toBeInTheDocument()
    expect(within(training).getByText('training set')).toBeInTheDocument()
  })

  it('only displays columns listed in the category table', async () => {
    registerColumnCategories([['model_id', 'Model ID', 'Overview', 1]])
    renderComponent()

    await screen.findByText('Model ID')
    expect(screen.queryByText('should not be shown')).not.toBeInTheDocument()
    expect(screen.queryByText('hidden_column')).not.toBeInTheDocument()
  })

  it('starts a new section each time the category changes', async () => {
    registerColumnCategories([
      ['model_id', 'Model ID', 'Overview', 1],
      ['training_data', 'Training Data', 'Training', 2],
      ['repo', 'Repository', 'Overview', 3],
    ])
    renderComponent()

    await screen.findByText('Repository')
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.map(h => h.textContent)).toEqual([
      'Overview',
      'Training',
      'Overview',
    ])
  })

  it('omits categories that have no values for the row', async () => {
    registerColumnCategories([
      ['model_id', 'Model ID', 'Overview', 1],
      ['software', 'Software', 'Technical Specifications', 2],
      ['column_not_in_row', 'Not In Row', 'Technical Specifications', 3],
    ])
    renderComponent()

    await screen.findByText('Model ID')
    expect(
      screen.queryByRole('heading', { name: 'Technical Specifications' }),
    ).not.toBeInTheDocument()
  })

  it('falls back to the column name when no display name is provided', async () => {
    registerColumnCategories([['base_model', null, 'Overview', 1]])
    renderComponent()

    expect(await screen.findByText('base_model')).toBeInTheDocument()
    expect(screen.getByText('llama')).toBeInTheDocument()
  })
})
