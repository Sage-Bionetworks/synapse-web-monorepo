import { useGetFullTableQueryResults } from '@/synapse-queries/entity/useGetQueryResultBundle'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { Typography } from '@mui/material'
import {
  QueryBundleRequest,
  QueryResultBundle,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { LabelLinkConfig } from '../CardContainerLogic'
import { ErrorBanner } from '../error/ErrorBanner'
import { SkeletonTable } from '../Skeleton/SkeletonTable'
import styles from './CategorizedRowDataTable.module.scss'
import { getDisplayedRowDataEntries, RowDataEntriesTable } from './RowDataTable'

export const COLUMN_CATEGORY_TABLE_COLUMN_NAME = 'columnName'
export const COLUMN_CATEGORY_TABLE_DISPLAY_COLUMN_NAME = 'columnDisplayName'
export const COLUMN_CATEGORY_TABLE_CATEGORY = 'category'
export const COLUMN_CATEGORY_TABLE_ORDER = 'order'

export type CategorizedRowDataTableProps = {
  /** Array of string values corresponding to the data for a row */
  rowData: Array<string | null>
  /** The headers for the columns in the row */
  headers: SelectColumn[]
  /**
   * Synapse ID of the table that defines which columns are displayed, their display names, and their categories.
   * The table must contain the columns `columnName` (String), `columnDisplayName` (String), `category` (String), and `order` (Integer).
   * Columns are displayed in ascending `order`; a new category section begins whenever `category` differs from the previous row,
   * so all rows of a category must have contiguous `order` values.
   */
  columnCategoryTableId: string
  /** Optional configuration for linking columns */
  columnLinks?: LabelLinkConfig
}

type ColumnCategorySection = {
  category: string | null
  columns: string[]
}

type ColumnCategoryConfig = {
  sections: ColumnCategorySection[]
  columnAliases: Record<string, string>
}

function parseColumnCategoryConfig(
  bundle: QueryResultBundle,
): ColumnCategoryConfig {
  const { headers, rows } = bundle.queryResult!.queryResults
  const getIndex = (name: string) =>
    headers.findIndex(header => header.name === name)
  const columnNameIndex = getIndex(COLUMN_CATEGORY_TABLE_COLUMN_NAME)
  const displayColumnNameIndex = getIndex(
    COLUMN_CATEGORY_TABLE_DISPLAY_COLUMN_NAME,
  )
  const categoryIndex = getIndex(COLUMN_CATEGORY_TABLE_CATEGORY)

  const sections: ColumnCategorySection[] = []
  const columnAliases: Record<string, string> = {}
  for (const { values } of rows) {
    const columnName = values[columnNameIndex]
    if (!columnName) {
      continue
    }
    const displayColumnName = values[displayColumnNameIndex]
    if (displayColumnName) {
      columnAliases[columnName] = displayColumnName
    }
    // Rows arrive sorted by order; a category change starts a new section, even if that category appeared earlier
    const category = values[categoryIndex] ?? null
    const currentSection = sections.at(-1)
    if (currentSection?.category === category) {
      currentSection.columns.push(columnName)
    } else {
      sections.push({ category, columns: [columnName] })
    }
  }
  return { sections, columnAliases }
}

/**
 * Displays a Synapse Table row as key/value pairs, grouped into titled category sections.
 * The displayed columns, their display names, order, and categories are read from a separate Synapse Table.
 * Categories without any values in the row are not shown.
 */
function CategorizedRowDataTable(props: CategorizedRowDataTableProps) {
  const { rowData, headers, columnCategoryTableId, columnLinks } = props

  const queryBundleRequest: QueryBundleRequest = useMemo(
    () => ({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      entityId: columnCategoryTableId,
      partMask: BUNDLE_MASK_QUERY_RESULTS,
      query: {
        sql: `SELECT * FROM ${columnCategoryTableId} ORDER BY "${COLUMN_CATEGORY_TABLE_ORDER}" ASC`,
      },
    }),
    [columnCategoryTableId],
  )

  const {
    data: config,
    isLoading,
    error,
  } = useGetFullTableQueryResults(queryBundleRequest, {
    select: parseColumnCategoryConfig,
  })

  if (isLoading) {
    return <SkeletonTable numRows={6} numCols={1} />
  }
  if (error) {
    return <ErrorBanner error={error} />
  }
  if (!config) {
    return null
  }

  return (
    <>
      {config.sections.map(({ category, columns }, index) => {
        const entries = getDisplayedRowDataEntries(columns, headers, rowData)
        if (entries.length === 0) {
          return null
        }
        return (
          <section key={`${index}-${category}`} className={styles.section}>
            {category && (
              <Typography variant="headline3" className={styles.categoryTitle}>
                {category}
              </Typography>
            )}
            <RowDataEntriesTable
              entries={entries}
              headers={headers}
              rowData={rowData}
              columnLinks={columnLinks}
              columnAliases={config.columnAliases}
            />
          </section>
        )
      })}
    </>
  )
}

export default CategorizedRowDataTable
