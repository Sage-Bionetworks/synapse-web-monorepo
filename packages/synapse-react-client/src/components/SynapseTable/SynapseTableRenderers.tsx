import { useGetEntityHeader } from '@/synapse-queries'
import { Checkbox } from '@mui/material'
import {
  ColumnTypeEnum,
  FacetColumnResult,
  FacetColumnResultValues,
  Row,
} from '@sage-bionetworks/synapse-types'
import {
  CellContext,
  createColumnHelper,
  HeaderContext,
} from '@tanstack/react-table'
import { useAtom, useAtomValue } from 'jotai'
import { isEqual } from 'lodash-es'
import { useCallback } from 'react'
import AddToDownloadListV2 from '../AddToDownloadListV2'
import FileEntityDirectDownload from '../DirectDownload/FileEntityDirectDownload'
import HasAccessV2 from '../HasAccess'
import { useQueryContext } from '../QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import {
  isRowSelectedAtom,
  selectedRowsAtom,
} from '../QueryWrapper/TableRowSelectionState'
import { useGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import ColumnHeader from '../TanStackTable/ColumnHeader'
import { EnumFacetFilter } from '../widgets/query-filter/EnumFacetFilter/EnumFacetFilter'
import EntityIDColumnCopyIcon from './EntityIDColumnCopyIcon'
import SynapseTableCell from './SynapseTableCell'
import { useSynapseTableContext } from './SynapseTableContext'
import { useInView } from 'react-intersection-observer'

// Add a prefix to these column IDs so they don't collide with actual column names
const columnIdPrefix =
  'org.sagebionetworks.web.client.SynapseTablePredefinedColumn'

const columnHelper = createColumnHelper<Row>()

function RowSelectionCell(props: CellContext<Row, unknown>) {
  const { row, table } = props
  const rowSet = table.options.meta?.rowSet

  const isRowSelected = useAtomValue(isRowSelectedAtom)
  const [selectedRows, setSelectedRows] = useAtom(selectedRowsAtom)

  return (
    <div>
      <Checkbox
        inputProps={{ 'aria-label': 'Select row' }}
        checked={isRowSelected(row.original, rowSet!.headers)}
        onChange={(_event, checked) => {
          const cloneSelectedRows = [...selectedRows]
          if (checked) {
            cloneSelectedRows.push(row.original)
          } else {
            const index = cloneSelectedRows.findIndex(selectedRow =>
              isEqual(selectedRow, row.original),
            )
            if (index > -1) {
              cloneSelectedRows.splice(index, 1)
            }
          }
          // update context on change
          setSelectedRows(cloneSelectedRows)
        }}
      />
    </div>
  )
}

export const rowSelectionColumn = columnHelper.display({
  id: `${columnIdPrefix}.RowSelectionColumn`,
  enableResizing: false,
  cell: RowSelectionCell,
  maxSize: 36,
  meta: {
    textAlign: 'center',
  },
})

function AddToDownloadListCell(props: CellContext<Row, unknown>) {
  const entityId = getEntityOrRowId(props)!
  const versionNumberString = getEntityOrRowVersion(props)
  const versionNumber = versionNumberString
    ? parseInt(versionNumberString)
    : undefined
  const { data: entityHeader } = useGetEntityHeader(entityId)
  return (
    <div data-testid={'AddToDownloadListCell'}>
      {entityHeader?.type === 'org.sagebionetworks.repo.model.FileEntity' && (
        <AddToDownloadListV2
          entityId={entityId}
          entityVersionNumber={versionNumber}
        />
      )}
    </div>
  )
}

export const addToDownloadListColumn = columnHelper.display({
  id: `${columnIdPrefix}.AddToDownloadListColumn`,
  enableResizing: false,
  cell: AddToDownloadListCell,
  maxSize: 50,
  meta: {
    textAlign: 'center',
  },
})

function DirectDownloadCell(props: CellContext<Row, unknown>) {
  const entityId = getEntityOrRowId(props)!
  const versionNumber = getEntityOrRowVersion(props)

  return (
    <div data-testid={'DirectDownloadCell'}>
      <FileEntityDirectDownload
        entityId={entityId}
        entityVersionNumber={versionNumber}
        iconSvgPropOverrides={{ sx: { color: 'primary.main' } }}
      />
    </div>
  )
}

export const directDownloadColumn = columnHelper.display({
  id: `${columnIdPrefix}.DirectDownload`,
  enableResizing: false,
  cell: DirectDownloadCell,
  maxSize: 50,
  meta: {
    textAlign: 'center',
  },
})

/**
 * Given the (tanstack react) Table CellContext, return the rowId of the current Synapse Table Row.
 * If a rowEntityIDColumnName was provided in the table config, then instead return the entityID found in
 * that cell of the current Row.
 */
function getEntityOrRowId<TValue = unknown>(
  props: CellContext<Row, TValue>,
): string | undefined {
  const { row, table } = props
  const rowEntityIDColumnIndex = table.options.meta?.rowEntityIDColumnIndex
  const entityId =
    rowEntityIDColumnIndex !== undefined
      ? row.original.values[rowEntityIDColumnIndex]!
      : row.original.rowId?.toString()
  return entityId
}

/**
 * Given the (tanstack react) Table CellContext, return true if the table configuration defines a row entity version column name.
 * This will be used as the entity that represents the current Row.
 * @param props
 * @returns
 */
function isRowEntityColumn<TValue = unknown>(
  props: CellContext<Row, TValue>,
): boolean {
  const { table } = props
  return table.options.meta?.rowEntityVersionColumnIndex !== undefined
}

/**
 * Given the (tanstack react) Table CellContext, return the version of the current Synapse Table Row.
 * If a rowEntityVersionColumnName was provided in the table config, then instead return the version found in
 * that cell of the current Row.
 */
function getEntityOrRowVersion<TValue = unknown>(
  props: CellContext<Row, TValue>,
): string | undefined {
  const { row, table } = props
  const rowEntityVersionColumnIndex =
    table.options.meta?.rowEntityVersionColumnIndex
  const versionNumber =
    rowEntityVersionColumnIndex !== undefined
      ? row.original.values[rowEntityVersionColumnIndex]!
      : row.original.versionNumber?.toString()
  return versionNumber
}

function AccessCell(props: CellContext<Row, unknown>) {
  const { showExternalAccessIcon } = useSynapseTableContext()
  const { ref, inView } = useInView({ triggerOnce: true })
  const entityId = getEntityOrRowId(props)!

  // If showExternalAccessIcon is true, defer rendering until the cell is in view to limit simultaneous API calls
  const canRenderAccessIcon =
    !showExternalAccessIcon || (showExternalAccessIcon && inView)

  return (
    <div ref={ref} data-testid="AccessCell">
      {canRenderAccessIcon && (
        <HasAccessV2
          key={entityId}
          entityId={entityId}
          showButtonText={false}
          showExternalAccessIcon={showExternalAccessIcon}
        />
      )}
    </div>
  )
}

export const accessColumn = columnHelper.display({
  id: `${columnIdPrefix}.Access`,
  enableResizing: false,
  cell: AccessCell,
  maxSize: 50,
  meta: {
    textAlign: 'center',
  },
})

export function TableDataColumnHeader(
  props: HeaderContext<Row, string | null>,
) {
  const { column } = props
  const { lockedColumn } = useQueryContext()
  const { data: queryMetadata } = useGetQueryMetadata()
  const columnModels = queryMetadata?.columnModels ?? []
  const selectColumns = queryMetadata?.selectColumns ?? []
  const selectColumn = selectColumns.find(sc => sc.name === column.id)
  const columnModel = columnModels.find(cm => cm.name === column.id)
  const facets = queryMetadata?.facets ?? []
  const { getColumnDisplayName, getHelpText } = useQueryVisualizationContext()

  const displayColumnName = selectColumn
    ? getColumnDisplayName(selectColumn.name)
    : column.id
  const columnHelpText = selectColumn
    ? getHelpText(selectColumn.name)
    : undefined
  // we have to figure out if the current column is a facet selection
  const facetIndex: number = facets.findIndex(
    (facetColumnResult: FacetColumnResult) => {
      return (
        facetColumnResult.columnName === columnModel?.name &&
        // Exclude JSON subcolumn facets, since there may be more than one on a given column
        facetColumnResult.jsonPath == undefined
      )
    },
  )
  // the header must be included in the facets and it has to be enumerable for current rendering capabilities
  const isFacetSelection: boolean =
    facetIndex !== -1 && facets[facetIndex].facetType === 'enumeration'
  const facet = facets[facetIndex] as FacetColumnResultValues
  const isLockedColumn =
    selectColumn &&
    selectColumn.name.toLowerCase() === lockedColumn?.columnName?.toLowerCase() // used in details page to disable filter the column
  const isEntityIDColumn =
    selectColumn &&
    selectColumn.name == 'id' &&
    selectColumn.columnType == ColumnTypeEnum.ENTITYID

  // TODO: enableFiltering should be specified on the column, but for now it's easier to override `getCanFilter` here where we have the facet information
  props.column.getCanFilter = useCallback(
    () => Boolean(isFacetSelection && !isLockedColumn && columnModel),
    [isFacetSelection, isLockedColumn, columnModel],
  )

  return (
    <ColumnHeader
      {...props}
      title={displayColumnName}
      helpText={columnHelpText}
      filterControl={
        <span>
          <EnumFacetFilter
            containerAs="Dropdown"
            facet={facet}
            defaultShowAllValues={true}
          />
        </span>
      }
      additionalButtons={
        <>{isEntityIDColumn && <EntityIDColumnCopyIcon size={'small'} />}</>
      }
    />
  )
}

export function TableDataCell(props: CellContext<Row, string | null>) {
  const { cell, table } = props
  const { data: queryMetadata } = useGetQueryMetadata()
  const entityOrRowId = getEntityOrRowId(props)
  const entityOrRowVersion = getEntityOrRowVersion(props)
  const versionNumber =
    entityOrRowVersion !== undefined ? parseInt(entityOrRowVersion) : undefined
  const selectColumns = table.options.meta?.rowSet?.headers ?? []
  const selectColumn = selectColumns.find(cm => cm.name === cell.column.id)
  const columnModels = queryMetadata?.columnModels ?? []
  const { columnLinks } = useSynapseTableContext()
  if (selectColumn) {
    const columnLinkConfig = (columnLinks ?? []).find(el => {
      return el.matchColumnName === selectColumn.name
    })
    const columnType = selectColumn.columnType
    const isBold = cell.column.getIsSorted() ? 'SRC-boldText' : ''
    return (
      <SynapseTableCell
        key={cell.id}
        columnType={columnType}
        columnValue={cell.getValue()}
        isBold={isBold}
        columnLinkConfig={columnLinkConfig}
        columnName={selectColumn.name}
        rowData={cell.row.original.values}
        selectColumns={selectColumns}
        columnModels={columnModels}
        rowId={entityOrRowId}
        rowVersionNumber={versionNumber}
        isRowEntityColumn={isRowEntityColumn(props)}
      />
    )
  } else return <td key={cell.id}></td>
}
