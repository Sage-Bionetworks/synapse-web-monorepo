import React, { useMemo, useState } from 'react'
import { useSynapseContext } from '../../utils'
import {
  ColumnTypeEnum,
  Row,
  RowSet,
  Table,
} from '@sage-bionetworks/synapse-types'
import { LabelLinkConfig } from '../CardContainerLogic'
import ModalDownload from '../ModalDownload/ModalDownload'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { useQueryContext } from '../QueryContext'
import {
  isEntityViewOrDataset,
  isFileViewOrDataset,
  isSortableColumn,
} from './SynapseTableUtils'
import {
  Cell,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
import { useTableSort } from './useTableSort'
import {
  accessColumn,
  addToDownloadListColumn,
  directDownloadColumn,
  rowSelectionColumn,
  TableDataCell,
  TableDataColumnHeader,
} from './SynapseTableRenderers'
import { SynapseTableContext } from './SynapseTableContext'
import { usePrefetchResourcesInTable } from './usePrefetchTableData'
import { useAtomValue } from 'jotai'
import { isRowSelectionVisibleAtom } from '../QueryWrapper/TableRowSelectionState'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import { useGetEntity } from '../../synapse-queries'

export type SynapseTableConfiguration = Pick<
  SynapseTableProps,
  | 'showAccessColumn'
  | 'showDownloadColumn'
  | 'hideDownload'
  | 'showDirectDownloadColumn'
  | 'hideAddToDownloadListColumn'
  | 'columnLinks'
>

export type SynapseTableProps = {
  /** The row data shown in the table. */
  rowSet: RowSet
  /** Whether a new page of data is being loaded */
  isLoadingNewPage: boolean

  /** If true and entity is a view or dataset, renders a column that represents if the caller has permission to download the entity represented by the row */
  showAccessColumn?: boolean
  /** @deprecated use showDirectDownloadColumn */
  showDownloadColumn?: boolean
  /** @deprecated use hideAddToDownloadListColumn */
  hideDownload?: boolean
  /** If true and entity is a file view or dataset, renders a column that allows the logged-in user to directly download the file, if they have permission */
  showDirectDownloadColumn?: boolean
  /** If true, the add to download list column will be hidden */
  hideAddToDownloadListColumn?: boolean
  /** Configuration to override cell renderers with e.g. a link to a portals detail page */
  columnLinks?: LabelLinkConfig
}

const columnHelper = createColumnHelper<Row>()

export function SynapseTable(props: SynapseTableProps) {
  const { showDownloadColumn, hideDownload } = props
  const {
    rowSet,
    isLoadingNewPage,
    showAccessColumn,
    showDirectDownloadColumn = showDownloadColumn,
    hideAddToDownloadListColumn = hideDownload,
    columnLinks,
  } = props
  const {
    entityId,
    versionNumber,
    getCurrentQueryRequest,
    fileIdColumnName,
    fileVersionColumnName,
  } = useQueryContext()
  const queryRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )

  const selectColumns = rowSet.headers

  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)

  const { columnsToShowInTable, NoContentPlaceholder } =
    useQueryVisualizationContext()
  const synapseTableContext = useMemo(() => ({ columnLinks }), [columnLinks])

  const isLoggedIn = !!useSynapseContext().accessToken

  const [isExportTableDownloadOpen, setIsExportTableDownloadOpen] =
    useState(false)

  const { sort, setSort } = useTableSort()
  const isRowSelectionVisible = useAtomValue(isRowSelectionVisibleAtom)

  const isShowingAccessColumn: boolean = Boolean(
    showAccessColumn &&
      entity &&
      ((isEntityViewOrDataset(entity) && allRowsHaveId(rowSet)) ||
        fileIdColumnName),
  )

  const rowsAreDownloadable =
    entity &&
    isLoggedIn &&
    ((isFileViewOrDataset(entity) && allRowsHaveId(rowSet)) || fileIdColumnName)

  const isShowingDirectDownloadColumn = Boolean(
    rowsAreDownloadable && showDirectDownloadColumn,
  )

  const isShowingAddToV2DownloadListColumn: boolean = Boolean(
    rowsAreDownloadable &&
      !hideAddToDownloadListColumn &&
      !isRowSelectionVisible,
  )
  const rowEntityIDColumnIndex = fileIdColumnName
    ? rowSet.headers.findIndex(col => col.name == fileIdColumnName)
    : undefined
  const rowEntityVersionColumnIndex = fileVersionColumnName
    ? rowSet.headers.findIndex(col => col.name == fileVersionColumnName)
    : undefined

  const columns = useMemo(
    () => [
      rowSelectionColumn,
      addToDownloadListColumn,
      directDownloadColumn,
      accessColumn,
      ...(selectColumns.map((selectColumn, index) => {
        return columnHelper.accessor(row => row.values[index], {
          id: selectColumn.name,
          enableSorting: isSortableColumn(selectColumn.columnType),
          enableResizing: true,
          header: TableDataColumnHeader,
          cell: TableDataCell,
        })
      }) ?? []),
    ],
    [selectColumns],
  )

  const prependColumnVisibility: VisibilityState = useMemo(
    () => ({
      [rowSelectionColumn.id as string]: isRowSelectionVisible,
      [addToDownloadListColumn.id as string]:
        isShowingAddToV2DownloadListColumn,
      [directDownloadColumn.id as string]: isShowingDirectDownloadColumn,
      [accessColumn.id as string]: isShowingAccessColumn,
    }),
    [
      isRowSelectionVisible,
      isShowingAccessColumn,
      isShowingAddToV2DownloadListColumn,
      isShowingDirectDownloadColumn,
    ],
  )

  // Transform our `columnsToShowInTable` to @tanstack/react-table's `VisibilityState`
  const columnVisibility: VisibilityState = useMemo(
    () =>
      selectColumns.reduce((prev: VisibilityState, curr) => {
        return {
          ...prev,
          [curr.name]: columnsToShowInTable.includes(curr.name),
        }
      }, prependColumnVisibility),
    [columnsToShowInTable, selectColumns, prependColumnVisibility],
  )

  const { dataHasBeenPrefetched } = usePrefetchResourcesInTable(rowSet)
  const renderTableDataPlaceholder = isLoadingNewPage || !dataHasBeenPrefetched

  const table = useReactTable({
    data: rowSet.rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    manualFiltering: true,
    onSortingChange: setSort,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    state: {
      sorting: sort,
      columnVisibility: columnVisibility,
    },
    meta: {
      rowSet,
      // make the rowEntityIDColumnIndex available to all cell renderers
      rowEntityIDColumnIndex,
      rowEntityVersionColumnIndex,
      renderPlaceholderData: renderTableDataPlaceholder,
      getWrapInExpandableTd: (cell: Cell<Row, unknown>) => {
        const selectColumn = selectColumns.find(
          cm => cm.name === cell.column.id,
        )
        return Boolean(
          selectColumn &&
            /* JSON handles its own overflow*/
            selectColumn.columnType !== ColumnTypeEnum.JSON,
        )
      },
    },
  })

  /**
   * Display the view
   */
  if (!rowSet) {
    return <></>
  }
  const hasResults = (rowSet.rows?.length ?? 0) > 0
  // Show the No Results UI if the current page has no rows, and this is the first page of data (offset === 0 or null/undefined).
  if (
    !hasResults &&
    (queryRequest.query.offset === 0 || queryRequest.query.offset == null)
  ) {
    return <NoContentPlaceholder />
  }

  return (
    <SynapseTableContext.Provider value={synapseTableContext}>
      <div>
        {isExportTableDownloadOpen && (
          <ModalDownload
            onClose={() => {
              setIsExportTableDownloadOpen(false)
            }}
            queryBundleRequest={queryRequest}
          />
        )}
        <StyledTanStackTable
          styledTableContainerProps={{
            className: 'SynapseTable',
            ['data-testid']: 'SynapseTable',
            density: 'default',
          }}
          table={table}
          fullWidth={false}
        />
      </div>
    </SynapseTableContext.Provider>
  )
}

/**
 * If this is a view/dataset and rows have an ID, then rows represent individual objects in Synapse.
 * Presence of row IDs also indicates that the query is also necessarily not summary data, e.g. the query does
 * not include an operation like GROUP BY, DISTINCT, etc., that would cause rows to not map 1:1 to Synapse Entities
 */
function allRowsHaveId(rowSet: RowSet): boolean {
  return Boolean(rowSet.rows?.every(row => !!row.rowId))
}
