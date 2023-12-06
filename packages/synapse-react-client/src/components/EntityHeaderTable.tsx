import React, {
  useEffect,
  useState,
  useMemo,
  MouseEventHandler,
  useCallback,
} from 'react'
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
  Link,
  InputLabel,
  Alert,
  AlertTitle,
} from '@mui/material'
import { EntityHeader, ReferenceList } from '@sage-bionetworks/synapse-types'
import { getEntityTypeFromHeader } from '../utils/functions/EntityTypeUtils'
import { useGetEntityHeaders } from '../synapse-queries'
import IconSvg from './IconSvg'
import { EntityLink } from './EntityLink'
import { SkeletonTable } from './Skeleton'
import { useDebouncedEffect } from '../utils/hooks'
import { cloneDeep } from 'lodash-es'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { AddCircleTwoTone } from '@mui/icons-material'
import { ParseError, parse } from 'papaparse'
import { SYNAPSE_ENTITY_ID_REGEX } from '../utils/functions/RegularExpressions'

export type EntityHeaderTableProps = {
  references: ReferenceList
  isEditable: boolean
  onUpdate?: (updatedRefs: ReferenceList) => void // when the references are updated, EntityHeaderTable will call this function with the updated list
  removeSelectedRowsButtonText?: string
}

// extend EntityHeader to create dummy EntityHeader rows for those that the current user cannot view
type EntityHeaderOrDummy = EntityHeader & { isDummy?: boolean }

/**
 * Renders a sortable/filterable table for a set of entity references.  If editable, onUpdate will be called back
 * on any entity added/removed.
 */
export const EntityHeaderTable = (props: EntityHeaderTableProps) => {
  const {
    references,
    isEditable,
    onUpdate,
    removeSelectedRowsButtonText = 'Remove Selected Rows',
  } = props
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  //ReferenceList of EntityHeaders shown in the table.  setRefsInState() should not be called, use updateRefsInState() instead.
  const [refsInState, setRefsInState] = useState<ReferenceList>(
    cloneDeep(references),
  )
  const [newEntityIDs, setNewEntityIDs] = useState<string>('')
  const [parseErrors, setParseErrors] = useState<ParseError[]>([])

  const updateRefsInState = useCallback((refs: ReferenceList) => {
    setRowSelection({})
    setRefsInState(refs)
    if (onUpdate) {
      onUpdate(refs)
    }
    setParseErrors([])
    setNewEntityIDs('')
  }, [])

  const setInvalidEntityIDError = useCallback((invalidEntityIDs: string[]) => {
    setParseErrors([
      {
        type: 'FieldMismatch',
        code: 'TooFewFields',
        message: `Unrecognized entity IDs: ${JSON.stringify(invalidEntityIDs)}`,
        row: 1,
      },
    ])
  }, [])

  const addRefsFromEntityIDs = useCallback(
    (entityIDs: string[]) => {
      const newReferences: ReferenceList = entityIDs.map(id => {
        return {
          targetId: id.trim(),
        }
      })
      updateRefsInState([...refsInState, ...newReferences])
    },
    [refsInState],
  )

  const addPastedValuesToArray = useCallback(() => {
    if (newEntityIDs) {
      if (newEntityIDs.includes(',')) {
        parse<string[]>(newEntityIDs, {
          complete: result => {
            if (result.errors.length > 0) {
              setParseErrors(result.errors)
            } else {
              const newParsedEntityIDs = result.data[0]
              const invalidEntityIDs = newParsedEntityIDs.filter(
                id => !id.trim().match(SYNAPSE_ENTITY_ID_REGEX),
              )
              if (invalidEntityIDs.length > 0) {
                setInvalidEntityIDError(invalidEntityIDs)
              } else {
                addRefsFromEntityIDs(newParsedEntityIDs)
              }
            }
          },
        })
      } else {
        // single item
        if (!newEntityIDs.trim().match(SYNAPSE_ENTITY_ID_REGEX)) {
          setInvalidEntityIDError([newEntityIDs])
        } else {
          addRefsFromEntityIDs([newEntityIDs])
        }
      }
    } else {
      setParseErrors([])
      setNewEntityIDs('')
    }
  }, [newEntityIDs])

  const selectColumns: ColumnDef<EntityHeaderOrDummy, any>[] = useMemo(
    () => [
      {
        id: 'select',
        header: CheckBoxHeader,
        cell: CheckBoxCell,
      },
    ],
    [],
  )

  const entityHeaderColumns: ColumnDef<EntityHeaderOrDummy, any>[] = useMemo(
    () => [
      {
        accessorFn: (row: EntityHeaderOrDummy) => row.name,
        id: 'name',
        cell: EntityHeaderNameCell,
        header: 'Name',
      },
      {
        accessorFn: (row: EntityHeaderOrDummy) => row.id,
        id: 'id',
        cell: EntityHeaderIDCell,
        header: 'SynID',
      },
      {
        accessorFn: (row: EntityHeaderOrDummy) =>
          row.isDummy ? '-' : getEntityTypeFromHeader(row),
        id: 'type',
        header: 'Type',
        cell: EntityHeaderTypeCell,
        filterFn: 'includesString',
      },
    ],
    [],
  )

  const columns = useMemo<ColumnDef<EntityHeaderOrDummy, any>[]>(
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
    //create dummy entries for values that were not returned by the getEntityHeaders call!
    const newData = results ? results?.results : []
    const newDataEntityIds = new Set()
    newData.map(entityHeader => newDataEntityIds.add(entityHeader.id))
    const missingRefs = refsInState.filter(
      ref => !newDataEntityIds.has(ref.targetId),
    )
    const dummyEntityHeaders: EntityHeaderOrDummy[] = missingRefs.map(ref => {
      return {
        id: ref.targetId,
        name: ref.targetId,
        benefactorId: -1,
        type: 'org.sagebionetworks.repo.model.Project',
        createdOn: '',
        modifiedOn: '',
        createdBy: '',
        modifiedBy: '',
        isLatestVersion: true,
        isDummy: true,
      }
    })
    return newData.concat(dummyEntityHeaders)
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
  const onRemoveFromAR: MouseEventHandler<HTMLButtonElement> = e => {
    // rowSelection looks like {3: true. 5: true} where the key is the row index.
    // Create a new ReferenceList based on the entityHeaders in the current table.
    const updatedData = data.filter(
      (_value, index) => !(rowSelection[index] === true),
    )
    const newRowRefs: ReferenceList = updatedData.map(entityHeader => {
      return {
        targetId: entityHeader.id,
      }
    })
    updateRefsInState(newRowRefs)
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
          <Button
            variant="contained"
            disabled={!isSelection}
            onClick={onRemoveFromAR}
          >
            {removeSelectedRowsButtonText}
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
      {isEditable && (
        <Box sx={{ marginTop: '10px' }}>
          <InputLabel htmlFor="synIDs">Add Synapse IDs</InputLabel>

          <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 50px 150px' }}>
            <TextField
              id="synIDs"
              name="synIDs"
              fullWidth
              onChange={e => setNewEntityIDs(e.target.value)}
              value={newEntityIDs}
              placeholder="Enter a list of Synapse IDs (i.e. 'syn123, syn456')"
            />
            <Box>
              {/* Entity finder button.  On select, append the selected entity ID to the newSynIDs list */}
            </Box>
            <Button
              variant="outlined"
              onClick={addPastedValuesToArray}
              disabled={isLoading || newEntityIDs.trim().length == 0}
            >
              <AddCircleTwoTone />
              &nbsp;Add Entities
            </Button>
          </Box>
          {parseErrors && parseErrors.length > 0 && (
            <Alert severity={'error'} sx={{ my: 2 }}>
              <AlertTitle>Parsing errors encountered:</AlertTitle>
              <ul>
                {parseErrors.map((error, index) => {
                  return (
                    <Typography
                      component={'li'}
                      lineHeight={1.5}
                      key={index}
                      variant={'smallText1'}
                    >
                      {/* {error.row ? `At ${error.row}: ` : ''} */}
                      {error.message}
                    </Typography>
                  )
                })}
              </ul>
            </Alert>
          )}
        </Box>
      )}
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

function EntityHeaderNameCell(
  props: CellContext<EntityHeaderOrDummy, string | null>,
) {
  const { cell } = props
  const { row } = cell
  const { original } = row
  const { id, isDummy } = original
  return isDummy ? (
    <Link href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${id}`}>
      {id}
    </Link>
  ) : (
    <EntityLink entity={original} />
  )
}

function EntityHeaderIDCell(
  props: CellContext<EntityHeaderOrDummy, string | null>,
) {
  const { cell } = props
  return <Typography variant="body1">{cell.getContext().getValue()}</Typography>
}

function EntityHeaderTypeCell(
  props: CellContext<EntityHeaderOrDummy, string | null>,
) {
  const { cell } = props
  return (
    <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
      {cell.getContext().getValue()}
    </Typography>
  )
}

function CheckBoxHeader(
  props: HeaderContext<EntityHeaderOrDummy, string | null>,
) {
  const { table } = props
  return (
    <Checkbox
      checked={table.getIsAllRowsSelected()}
      indeterminate={table.getIsSomeRowsSelected()}
      onClick={table.getToggleAllRowsSelectedHandler()}
    />
  )
}

function CheckBoxCell(props: CellContext<EntityHeaderOrDummy, string | null>) {
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
