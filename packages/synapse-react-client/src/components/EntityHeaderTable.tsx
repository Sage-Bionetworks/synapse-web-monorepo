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
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  CellContext,
} from '@tanstack/react-table'
import { TextField, TextFieldProps, Autocomplete } from '@mui/material'
import { EntityHeader, ReferenceList } from '@sage-bionetworks/synapse-types'
import { getEntityTypeFromHeader } from '../utils/functions/EntityTypeUtils'
import { useGetEntityHeaders } from '../synapse-queries'
import IconSvg from './IconSvg'
import { EntityLink } from './EntityLink'
import { SkeletonTable } from './Skeleton'
import { useDebouncedEffect } from '../utils/hooks'

export type EntityHeaderTableProps = {
  references: ReferenceList
}

/**
 * Renders a Provenance Graph for a set of entities.
 * New Nodes are added to tempNodes, and new Edges are added to tempEdges.
 * On change, these are fed into the dagre js graph library to figure out the node positions,
 * and the output stored in 'nodes' and 'edges'. The 'nodes' and 'edges' arrays are used by the
 * ReactFlow component.
 */
export const EntityHeaderTable = (props: EntityHeaderTableProps) => {
  const { references } = props
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const columns = useMemo<ColumnDef<EntityHeader, any>[]>(
    () => [
      {
        accessorFn: row => row.name,
        id: 'name',
        cell: EntityHeaderNameCell,
        header: 'Name',
      },
      {
        accessorFn: row => row.id,
        id: 'id',
        cell: info => info.getValue(),
        header: 'SynID',
      },
      {
        accessorFn: row => getEntityTypeFromHeader(row).toUpperCase(),
        id: 'type',
        header: 'Type',
        cell: info => info.getValue(),
        filterFn: 'includesString',
      },
    ],
    [],
  )

  const {
    data: results,
    isSuccess,
    isLoading,
  } = useGetEntityHeaders(references, {
    useErrorBoundary: true,
  })
  const data = useMemo(() => {
    return results ? results?.results : []
  }, [results])
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
  }
  return (
    <div className="p-2">
      <table width={'100%'}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: header.getSize() }}
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
      {table.getPageCount() > 1 && (
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>
          <span>
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>
          </span>
          <span>
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }}
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      )}
      <div style={{ marginTop: '10px' }}>
        {table.getPrePaginationRowModel().rows.length} Rows
      </div>
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

  const columnFilterValue = column.getFilterValue()

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
      value={(columnFilterValue ?? '') as string}
      onChange={value => column.setFilterValue(value)}
      placeholder={`Filter by ${column.id}... (${
        column.getFacetedUniqueValues().size
      })`}
      className="w-36 border shadow rounded"
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
    [onChange, value],
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
  return <EntityLink key={original.id} entity={original} />
}
