import {
  COLUMN_CATEGORY_TABLE_CATEGORY,
  COLUMN_CATEGORY_TABLE_COLUMN_NAME,
  COLUMN_CATEGORY_TABLE_DISPLAY_COLUMN_NAME,
  COLUMN_CATEGORY_TABLE_ORDER,
} from '@/components/RowDataTable/CategorizedRowDataTable'
import {
  ColumnTypeEnum,
  QueryResultBundle,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'

/** A row of a column category table: [columnName, columnDisplayName, category, order] */
export type MockColumnCategoryRow = [
  string,
  string | null,
  string | null,
  number,
]

export const MOCK_COLUMN_CATEGORY_TABLE_ID = 'syn12345678'

/**
 * Builds the QueryResultBundle returned when querying a column category table (used by CategorizedRowDataTable)
 */
export function createColumnCategoryTableQueryResultBundle(
  tableId: string,
  rows: MockColumnCategoryRow[],
): QueryResultBundle {
  const headers: SelectColumn[] = [
    {
      name: COLUMN_CATEGORY_TABLE_COLUMN_NAME,
      columnType: ColumnTypeEnum.STRING,
    },
    {
      name: COLUMN_CATEGORY_TABLE_DISPLAY_COLUMN_NAME,
      columnType: ColumnTypeEnum.STRING,
    },
    { name: COLUMN_CATEGORY_TABLE_CATEGORY, columnType: ColumnTypeEnum.STRING },
    { name: COLUMN_CATEGORY_TABLE_ORDER, columnType: ColumnTypeEnum.INTEGER },
  ]
  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryCount: rows.length,
    // Required by getFullQueryTableResults to detect the last page
    maxRowsPerPage: 1000,
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId,
        etag: 'DEFAULT',
        headers,
        rows: rows.map((values, index) => ({
          rowId: index + 1,
          values: values.map(value => (value == null ? null : String(value))),
        })),
      },
    },
    selectColumns: headers,
  }
}

/** Column categories modeled on the ELITE Portal model details page */
export const mockModelColumnCategoryRows: MockColumnCategoryRow[] = [
  ['model_id', 'Model ID', 'Overview', 1],
  ['target_platform', 'Target Platform', 'Overview', 2],
  ['base_model', 'Base Model', 'Overview', 3],
  ['shared_by', 'Shared By', 'Overview', 4],
  ['repo', 'Repository', 'Resources', 5],
  ['paper', 'Paper', 'Resources', 6],
  ['direct_use', 'Direct Use', 'Uses', 7],
  ['out_of_scope_use', 'Out of Scope Use', 'Uses', 8],
  ['training_data', 'Training Data', 'Training Details', 9],
  ['hardware_type', 'Hardware Type', 'Environmental Impact', 10],
  ['co2_emitted', 'CO₂ Emitted', 'Environmental Impact', 11],
  ['citation_apa', 'Citation (APA)', 'Citation', 12],
]

/** Headers of a model row; includes a column that has no category and a column with no value */
export const mockModelRowHeaders: SelectColumn[] = [
  { name: 'model_id', columnType: ColumnTypeEnum.STRING },
  { name: 'model_name', columnType: ColumnTypeEnum.STRING },
  { name: 'target_platform', columnType: ColumnTypeEnum.STRING },
  { name: 'base_model', columnType: ColumnTypeEnum.STRING },
  { name: 'shared_by', columnType: ColumnTypeEnum.STRING_LIST },
  { name: 'repo', columnType: ColumnTypeEnum.LINK },
  { name: 'paper', columnType: ColumnTypeEnum.LARGETEXT },
  { name: 'direct_use', columnType: ColumnTypeEnum.LARGETEXT },
  { name: 'out_of_scope_use', columnType: ColumnTypeEnum.LARGETEXT },
  { name: 'training_data', columnType: ColumnTypeEnum.LARGETEXT },
  { name: 'hardware_type', columnType: ColumnTypeEnum.STRING },
  { name: 'co2_emitted', columnType: ColumnTypeEnum.STRING },
  { name: 'citation_apa', columnType: ColumnTypeEnum.LARGETEXT },
]

export const mockModelRowData: Array<string | null> = [
  'syn76379950',
  'ESM-2 esm2_t6_8M_UR50D',
  null,
  'None; pretrained from scratch as part of the ESM-2 model family.',
  '["Meta", "Hugging Face", "Sage Bionetworks"]',
  'https://github.com/facebookresearch/esm',
  'Lin, Z., et al. (2023). Evolutionary-scale prediction of atomic-level protein structure with a language model. Science, 379(6637), 1123-1130.',
  'The model can be used directly to predict masked amino acids and to convert protein sequences into numerical representations (embeddings).',
  'Out-of-scope uses include clinical diagnosis, treatment or safety decisions, and direct protein structure prediction.',
  'The model was pretrained on protein sequences from the UniRef50/UR50D 2021_04 dataset.',
  'NVIDIA V100 GPUs',
  'Not reported',
  'Lin, Z., Akin, H., Rao, R., et al. (2023). Evolutionary-scale prediction of atomic-level protein structure with a language model. Science.',
]
