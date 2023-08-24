import {
  CellContext,
  createColumnHelper,
  HeaderContext,
} from '@tanstack/react-table'
import {
  ColumnTypeEnum,
  FacetColumnResult,
  FacetColumnResultValues,
  Row,
} from '@sage-bionetworks/synapse-types'
import { Checkbox } from '../widgets/Checkbox'
import { isEqual } from 'lodash-es'
import React from 'react'
import AddToDownloadListV2 from '../AddToDownloadListV2'
import { useGetEntityHeader } from '../../synapse-queries'
import HasAccessV2 from '../HasAccess'
import { EnumFacetFilter } from '../widgets/query-filter/EnumFacetFilter'
import { IconButton, Tooltip } from '@mui/material'
import IconSvg from '../IconSvg'
import EntityIDColumnCopyIcon from './EntityIDColumnCopyIcon'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import SynapseTableCell from './SynapseTableCell'
import { useSynapseTableContext } from './SynapseTableContext'
import { useQueryContext } from '../QueryContext'
import FileEntityDirectDownload from '../DirectDownload/FileEntityDirectDownload'

// Add a prefix to these column IDs so they don't collide with actual column names
const columnIdPrefix =
  'org.sagebionetworks.web.client.SynapseTablePredefinedColumn'

const columnHelper = createColumnHelper<Row>()

function RowSelectionCell(props: CellContext<Row, unknown>) {
  const { row } = props
  const { getIsRowSelected, selectedRows, setSelectedRows } = useQueryContext()

  return (
    <Checkbox
      label=""
      checked={getIsRowSelected(row.original)}
      onChange={(checked: boolean) => {
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
  )
}

export const rowSelectionColumn = columnHelper.display({
  id: `${columnIdPrefix}.RowSelectionColumn`,
  enableResizing: false,
  cell: RowSelectionCell,
  maxSize: 50,
})

function AddToDownloadListCell(props: CellContext<Row, unknown>) {
  const { row } = props
  const { data: entityHeader } = useGetEntityHeader(`syn${row.original.rowId!}`)
  return (
    <div
      className="SRC-centerAndJustifyContent"
      data-testid={'AddToDownloadListCell'}
    >
      {entityHeader?.type === 'org.sagebionetworks.repo.model.FileEntity' && (
        <AddToDownloadListV2
          entityId={row.original.rowId!.toString()}
          entityVersionNumber={parseInt(
            row.original.versionNumber!.toString()!,
          )}
        ></AddToDownloadListV2>
      )}
    </div>
  )
}

export const addToDownloadListColumn = columnHelper.display({
  id: `${columnIdPrefix}.AddToDownloadListColumn`,
  enableResizing: false,
  cell: AddToDownloadListCell,
  maxSize: 50,
})

function DirectDownloadCell(props: CellContext<Row, unknown>) {
  const { row } = props
  return (
    <div
      className="SRC-centerAndJustifyContent"
      data-testid={'DirectDownloadCell'}
    >
      <FileEntityDirectDownload
        entityId={row.original.rowId!.toString()}
        entityVersionNumber={row.original.versionNumber}
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
})

function AccessCell(props: CellContext<Row, unknown>) {
  const { row } = props
  return (
    <div className="SRC-centerAndJustifyContent" data-testid={'AccessCell'}>
      <HasAccessV2
        key={row.original.rowId!.toString()}
        entityId={row.original.rowId!.toString()}
        entityVersionNumber={row.original.versionNumber!.toString()}
      />
    </div>
  )
}

export const accessColumn = columnHelper.display({
  id: `${columnIdPrefix}.Access`,
  enableResizing: false,
  cell: AccessCell,
})

export function TableDataColumnHeader(
  props: HeaderContext<Row, string | null>,
) {
  const { column } = props
  const { lockedColumn, data } = useQueryContext()
  const columnModels = data?.columnModels ?? []
  const columnModel = columnModels.find(cm => cm.name === column.id)
  const facets = data?.facets ?? []
  const { getColumnDisplayName } = useQueryVisualizationContext()

  if (!columnModel) {
    return <>{column.id}</>
  }

  const displayColumnName = getColumnDisplayName(columnModel.name)
  // we have to figure out if the current column is a facet selection
  const facetIndex: number = facets.findIndex(
    (facetColumnResult: FacetColumnResult) => {
      return facetColumnResult.columnName === columnModel.name
    },
  )
  // the header must be included in the facets and it has to be enumerable for current rendering capabilities
  const isFacetSelection: boolean =
    facetIndex !== -1 && facets[facetIndex].facetType === 'enumeration'
  const facet = facets[facetIndex] as FacetColumnResultValues
  const isLockedColumn =
    columnModel.name.toLowerCase() === lockedColumn?.columnName?.toLowerCase() // used in details page to disable filter the column
  const isEntityIDColumn =
    columnModel &&
    columnModel.name == 'id' &&
    columnModel.columnType == ColumnTypeEnum.ENTITYID
  return (
    <div className="SRC-split">
      <div className="SRC-centerContent">
        <span
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {displayColumnName}
        </span>
      </div>
      <div className="SRC-centerContent" style={{ height: '22px' }}>
        {isFacetSelection && !isLockedColumn && (
          <span>
            <EnumFacetFilter
              containerAs="Dropdown"
              facetValues={facet.facetValues}
              columnModel={columnModel}
            />
          </span>
        )}
        {column.getCanSort() && (
          <Tooltip
            title={`Sort ${getColumnDisplayName(columnModel.name)}`}
            placement={'top'}
          >
            <IconButton
              role="button"
              aria-label="sort"
              size={'small'}
              tabIndex={0}
              onKeyPress={() => column.toggleSorting()}
              onClick={() => column.toggleSorting()}
            >
              <IconSvg
                icon={column.getIsSorted() === 'asc' ? 'sortUp' : 'sortDown'}
                wrap={false}
                sx={{
                  color: column.getIsSorted() ? 'primary.main' : 'grey.700',
                  backgroundColor: 'none',
                }}
              />
            </IconButton>
          </Tooltip>
        )}
        {isEntityIDColumn && <EntityIDColumnCopyIcon size={'small'} />}
      </div>
    </div>
  )
}

export function TableDataCell(props: CellContext<Row, string | null>) {
  const { cell } = props
  const { data } = useQueryContext()

  const selectColumns = data?.selectColumns ?? []
  const columnModels = data?.columnModels ?? []
  const columnModel = columnModels.find(cm => cm.name === cell.column.id)
  const { columnLinks } = useSynapseTableContext()
  if (columnModel) {
    const columnLinkConfig = (columnLinks ?? []).find(el => {
      return el.matchColumnName === columnModel.name
    })
    const columnType = columnModel.columnType
    const isBold = cell.column.getIsSorted() ? 'SRC-boldText' : ''
    return (
      <SynapseTableCell
        key={cell.id}
        columnType={columnType}
        columnValue={cell.getValue()}
        isBold={isBold}
        columnLinkConfig={columnLinkConfig}
        columnName={columnModel.name}
        rowData={cell.row.original.values}
        selectColumns={selectColumns}
        columnModels={columnModels}
        rowId={cell.row.original.rowId}
        rowVersionNumber={cell.row.original.versionNumber}
      />
    )
  } else return <td key={cell.id}></td>
}
