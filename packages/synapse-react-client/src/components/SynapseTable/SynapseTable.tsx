import React, { useMemo, useState } from 'react'
import { useSynapseContext } from '../../utils'
import {
  ColumnTypeEnum,
  QueryResultBundle,
  Row,
} from '@sage-bionetworks/synapse-types'
import { LabelLinkConfig } from '../CardContainerLogic'
import loadingScreen from '../LoadingScreen/LoadingScreen'
import ModalDownload from '../ModalDownload/ModalDownload'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { useQueryContext } from '../QueryContext'
import {
  isEntityViewOrDataset,
  isFileViewOrDataset,
  isSortableColumn,
} from './SynapseTableUtils'
import { TablePagination } from './TablePagination'
import ExpandableTableDataCell from './ExpandableTableDataCell'
import { Box, Skeleton } from '@mui/material'
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
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
import { usePrefetchTableData } from './usePrefetchTableData'
import { useAtomValue } from 'jotai'
import {
  isLoadingNewBundleAtom,
  tableQueryDataAtom,
  tableQueryEntityAtom,
} from '../QueryWrapper/QueryWrapper'
import { isRowSelectionVisibleAtom } from '../QueryWrapper/TableRowSelectionState'

export type SynapseTableProps = {
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
  /** If provided, will use the value in this column instead of the rowID for the access column, download column, etc */
  rowEntityIDColumnName?: string
  /** If provided, will use the value in this column instead of the row version number for the access column, download column, etc */
  rowEntityVersionColumnName?: string
}

const columnHelper = createColumnHelper<Row>()

export function SynapseTable(props: SynapseTableProps) {
  const { showDownloadColumn, hideDownload } = props
  const {
    showAccessColumn,
    showDirectDownloadColumn = showDownloadColumn,
    hideAddToDownloadListColumn = hideDownload,
    columnLinks,
    rowEntityIDColumnName,
    rowEntityVersionColumnName,
  } = props
  const { getCurrentQueryRequest } = useQueryContext()
  const queryRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )
  const data = useAtomValue(tableQueryDataAtom)
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)
  const entity = useAtomValue(tableQueryEntityAtom)
  const { columnsToShowInTable, NoContentPlaceholder } =
    useQueryVisualizationContext()
  const synapseTableContext = useMemo(() => ({ columnLinks }), [columnLinks])

  const { selectColumns = [] } = data ?? {}

  const isLoggedIn = !!useSynapseContext().accessToken

  const [isExportTableDownloadOpen, setIsExportTableDownloadOpen] =
    useState(false)

  const { sort, setSort } = useTableSort()
  const isRowSelectionVisible = useAtomValue(isRowSelectionVisibleAtom)

  const isShowingAccessColumn: boolean = Boolean(
    showAccessColumn &&
      entity &&
      ((isEntityViewOrDataset(entity) && allRowsHaveId(data)) ||
        rowEntityIDColumnName),
  )

  const rowsAreDownloadable =
    entity &&
    isLoggedIn &&
    ((isFileViewOrDataset(entity) && allRowsHaveId(data)) ||
      rowEntityIDColumnName)

  const isShowingDirectDownloadColumn = Boolean(
    rowsAreDownloadable && showDirectDownloadColumn,
  )

  const isShowingAddToV2DownloadListColumn: boolean = Boolean(
    rowsAreDownloadable &&
      !hideAddToDownloadListColumn &&
      !isRowSelectionVisible,
  )
  const rowEntityIDColumnIndex = rowEntityIDColumnName
    ? data?.queryResult?.queryResults.headers.findIndex(
        col => col.name == rowEntityIDColumnName,
      )
    : undefined
  const rowEntityVersionColumnIndex = rowEntityVersionColumnName
    ? data?.queryResult?.queryResults.headers.findIndex(
        col => col.name == rowEntityVersionColumnName,
      )
    : undefined

  const columns: ColumnDef<Row, string | null>[] = useMemo(
    () => [
      rowSelectionColumn,
      addToDownloadListColumn,
      directDownloadColumn,
      accessColumn,
      ...(data?.selectColumns?.map((selectColumn, index) => {
        return columnHelper.accessor(row => row.values[index], {
          id: selectColumn.name,
          enableSorting: isSortableColumn(selectColumn.columnType),
          enableResizing: true,
          header: TableDataColumnHeader,
          cell: TableDataCell,
        })
      }) ?? []),
    ],
    [data?.selectColumns],
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
      (data?.selectColumns ?? []).reduce((prev: VisibilityState, curr) => {
        return {
          ...prev,
          [curr.name]: columnsToShowInTable.includes(curr.name),
        }
      }, prependColumnVisibility),
    [columnsToShowInTable, data?.selectColumns, prependColumnVisibility],
  )

  const table = useReactTable({
    data: data?.queryResult?.queryResults.rows ?? [],
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
      // make the rowEntityIDColumnIndex available to all cell renderers
      rowEntityIDColumnIndex,
      rowEntityVersionColumnIndex,
    },
  })

  const { dataHasBeenPrefetched } = usePrefetchTableData()

  /**
   * Display the view
   */
  if (!data && isLoadingNewBundle) {
    return loadingScreen
  } else if (!data) {
    return <></>
  }
  const hasResults = (data.queryResult?.queryResults.rows.length ?? 0) > 0
  // Show the No Results UI if the current page has no rows, and this is the first page of data (offset === 0).
  if (!hasResults && queryRequest.query.offset === 0) {
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
        <div
          className="SynapseTable SRC-overflowAuto"
          data-testid="SynapseTable"
        >
          <table style={{ width: table.getTotalSize() }}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => {
                return (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{ width: header.getSize() }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                        {header.column.getCanResize() && (
                          <div
                            className={`resizer ${
                              header.column.getIsResizing() ? 'isResizing' : ''
                            }`}
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                          />
                        )}
                      </th>
                    ))}
                  </tr>
                )
              })}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    const selectColumn = selectColumns.find(
                      cm => cm.name === cell.column.id,
                    )

                    const shouldWrapInExpandable =
                      selectColumn &&
                      selectColumn.columnType !==
                        ColumnTypeEnum.JSON /* JSON handles its own overflow*/
                    const TableDataCellElement = shouldWrapInExpandable
                      ? ExpandableTableDataCell
                      : 'td'

                    const renderPlaceholder = !dataHasBeenPrefetched

                    return (
                      <TableDataCellElement
                        key={cell.id}
                        style={{
                          width: cell.column.getSize(),
                        }}
                        align={(cell.column.columnDef.meta as any)?.align}
                      >
                        {renderPlaceholder ? (
                          <p>
                            <Skeleton width={'80%'} height={'20px'} />
                          </p>
                        ) : (
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )
                        )}
                      </TableDataCellElement>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Box sx={{ mt: 2, textAlign: 'right' }}>
          <TablePagination />
        </Box>
      </div>
    </SynapseTableContext.Provider>
  )
}

/**
 * If this is a view/dataset and rows have an ID, then rows represent individual objects in Synapse.
 * Presence of row IDs also indicates that the query is also necessarily not summary data, e.g. the query does
 * not include an operation like GROUP BY, DISTINCT, etc., that would cause rows to not map 1:1 to Synapse Entities
 */
function allRowsHaveId(data?: QueryResultBundle): boolean {
  return Boolean(data?.queryResult?.queryResults.rows.every(row => !!row.rowId))
}

export default SynapseTable
