import React, { useEffect, useState, useMemo } from 'react'
import {
  Column,
  Table,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  CellContext,
  HeaderContext,
  RowSelectionState,
} from '@tanstack/react-table'
import {
  TextField,
  TextFieldProps,
  Autocomplete,
  Typography,
  Box,
  Checkbox,
  Button,
} from '@mui/material'
import { EntityHeader, ReferenceList } from '@sage-bionetworks/synapse-types'
import { getEntityTypeFromHeader } from '../utils/functions/EntityTypeUtils'
import { useGetEntityHeaders } from '../synapse-queries'
import IconSvg from './IconSvg'
import { EntityLink } from './EntityLink'
import { SkeletonTable } from './Skeleton'
import { useDebouncedEffect } from '../utils/hooks'
import { cloneDeep } from 'lodash-es'

export type EntityHeaderTableProps = {
  references: ReferenceList
  isEditable: boolean
  onUpdate: (updatedRefs: ReferenceList) => void // when the references are updated, EntityHeaderTable will call this function with the updated list
}

/**
 * Renders a Provenance Graph for a set of entities.
 * New Nodes are added to tempNodes, and new Edges are added to tempEdges.
 * On change, these are fed into the dagre js graph library to figure out the node positions,
 * and the output stored in 'nodes' and 'edges'. The 'nodes' and 'edges' arrays are used by the
 * ReactFlow component.
 */
export const EntityHeaderTable = (props: EntityHeaderTableProps) => {
  const { references, isEditable } = props
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [refsInState, setRefsInState] = useState<ReferenceList>(
    cloneDeep(references),
  )

  // TODO: Add "Mark for removal from AR" button in grid (to the right of the row/selection count)
  //  Click handler would go through rowSelection keys, somehow translate to entity headers, and
  //  update the refsInState (which would update the data and refresh the table).  Is there a tanstack example of responding to selection.
  // TODO: Add ability to Add synapse IDs (comma separated list) in a text field.
  //  Add entity finder, that would add a new entry to this list.
  //  Add button that would take the synapse IDs from the text box, and add them to the refsInState
  // TODO: On any update to refsInState, call onUpdate()

  const selectColumns: ColumnDef<EntityHeader, any>[] = useMemo(
    () => [
      {
        id: 'select',
        header: CheckBoxHeader,
        cell: CheckBoxCell,
      },
    ],
    [],
  )

  const entityHeaderColumns: ColumnDef<EntityHeader, any>[] = useMemo(
    () => [
      {
        accessorFn: (row: EntityHeader) => row.name,
        id: 'name',
        cell: EntityHeaderNameCell,
        header: 'Name',
      },
      {
        accessorFn: (row: EntityHeader) => row.id,
        id: 'id',
        cell: EntityHeaderIDCell,
        header: 'SynID',
      },
      {
        accessorFn: (row: EntityHeader) => getEntityTypeFromHeader(row),
        id: 'type',
        header: 'Type',
        cell: EntityHeaderTypeCell,
        filterFn: 'includesString',
      },
    ],
    [],
  )

  const columns = useMemo<ColumnDef<EntityHeader, any>[]>(
    () =>
      isEditable
        ? selectColumns.concat(entityHeaderColumns)
        : entityHeaderColumns,
    [entityHeaderColumns, isEditable, selectColumns],
  )
  const selectionCount = Object.keys(rowSelection).length
  const {
    data: results,
    isSuccess,
    isLoading,
  } = useGetEntityHeaders(refsInState, {
    useErrorBoundary: true,
  })
  const data = useMemo(() => {
    return results ? results?.results : []
  }, [results])
  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      columnFilters,
    },
    enableRowSelection: isEditable,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    // debugTable: true,
    // debugHeaders: true,
    // debugColumns: false,
    columnResizeMode: 'onChange',
  })

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'name') {
      if (table.getState().sorting[0]?.id !== 'name') {
        table.setSorting([{ id: 'name', desc: false }])
      }
    }
  }, [table.getState().columnFilters[0]?.id])

  if (isLoading) {
    return <SkeletonTable numCols={3} numRows={5} />
  } else if (!isSuccess) {
    return <></>
  }
  const isSelection = selectionCount > 0
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px 10px 10px 5px',
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          {table.getPrePaginationRowModel().rows.length} Entities
          {isSelection && <span>{` (${selectionCount} selected)`}</span>}
        </Typography>
        {isEditable && (
          <Button variant="contained" disabled={!isSelection}>
            Mark for Removal from AR
          </Button>
        )}
      </Box>
      <Box
        sx={{
          overflow: 'auto',
          height: '400px',
          paddingLeft: '2px',
          th: {
            backgroundColor: '#eee',
            zIndex: 100,
          },
        }}
      >
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  let columnSize: string = '5%'
                  switch (header.id) {
                    case 'name':
                      columnSize = '50%'
                      break
                    case 'id':
                      columnSize = '22%'
                      break
                    case 'type':
                      columnSize = '22%'
                      break
                    default:
                      break
                  }
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{
                        width: columnSize,
                        position: 'sticky',
                        top: '0px',
                        background: '#fff',
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? 'SRC-hand-cursor'
                                : '',
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                            {{
                              asc: (
                                <IconSvg
                                  icon={'sortUp'}
                                  wrap={false}
                                  sx={{
                                    color: 'primary.main',
                                    backgroundColor: 'none',
                                    float: 'right',
                                    marginRight: '5px',
                                  }}
                                />
                              ),
                              desc: (
                                <IconSvg
                                  icon={'sortDown'}
                                  wrap={false}
                                  sx={{
                                    color: 'primary.main',
                                    backgroundColor: 'none',
                                    float: 'right',
                                    marginRight: '5px',
                                  }}
                                />
                              ),
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </>
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
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => {
              return (
                <tr key={row.id} style={{ height: '30px' }}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td
                        key={cell.id}
                        style={{
                          width: cell.column.getSize(),
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </Box>
    </div>
  )
}

function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = (column.getFilterValue() as string) ?? ''

  const sortedUniqueValues: string[] = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()],
  )
  return (
    <DebouncedInput
      type="text"
      options={sortedUniqueValues}
      value={columnFilterValue}
      onChange={value => column.setFilterValue(value)}
      placeholder={`Filter by ${column.id}... (${
        column.getFacetedUniqueValues().size
      })`}
      list={column.id + 'list'}
    />
  )
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  options,
  ...props
}: {
  value: string
  onChange: (value: string) => void
  options: string[]
} & Pick<
  React.InputHTMLAttributes<TextFieldProps>,
  'type' | 'min' | 'max' | 'value' | 'placeholder' | 'className' | 'list'
>) {
  const [value, setValue] = useState(initialValue)
  useDebouncedEffect(
    () => {
      onChange(value)
    },
    [value],
    300,
  )

  return (
    <Autocomplete
      disablePortal
      isOptionEqualToValue={(option, value) =>
        value.length == 0 || option === value
      }
      options={options}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue ?? '')
      }}
      sx={{ marginRight: '10px' }}
      renderInput={params => (
        <TextField
          {...params}
          {...props}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      )}
    />
  )
}

function EntityHeaderNameCell(props: CellContext<EntityHeader, string | null>) {
  const { cell } = props
  const { row } = cell
  const { original } = row
  return <EntityLink entity={original} />
}

function EntityHeaderIDCell(props: CellContext<EntityHeader, string | null>) {
  const { cell } = props
  return <Typography variant="body1">{cell.getContext().getValue()}</Typography>
}

function EntityHeaderTypeCell(props: CellContext<EntityHeader, string | null>) {
  const { cell } = props
  return (
    <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
      {cell.getContext().getValue()}
    </Typography>
  )
}

function CheckBoxHeader(props: HeaderContext<EntityHeader, string | null>) {
  const { table } = props
  return (
    <Checkbox
      checked={table.getIsAllRowsSelected()}
      indeterminate={table.getIsSomeRowsSelected()}
      onClick={table.getToggleAllRowsSelectedHandler()}
    />
  )
}

function CheckBoxCell(props: CellContext<EntityHeader, string | null>) {
  const { row } = props
  return (
    <Checkbox
      checked={row.getIsSelected()}
      disabled={!row.getCanSelect()}
      indeterminate={row.getIsSomeSelected()}
      onClick={row.getToggleSelectedHandler()}
    />
  )
}
