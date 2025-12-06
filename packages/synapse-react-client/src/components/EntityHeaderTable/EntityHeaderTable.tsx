import React from 'react'
import AddAd from '@/assets/icons/AddAd'
import { StyledTableContainer } from '@/components/styled/StyledTableContainer'
import { useGetEntityHeaders } from '@/synapse-queries/entity/useGetEntityHeaders'
import {
  entityTypeToFriendlyName,
  getEntityTypeFromHeader,
  normalizeSynPrefix,
} from '@/utils/functions/EntityTypeUtils'
import { SYNAPSE_ENTITY_ID_REGEX } from '@/utils/functions/RegularExpressions'
import { AddCircleTwoTone } from '@mui/icons-material'
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  IconButton,
  InputLabel,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { EntityHeader, ReferenceList } from '@sage-bionetworks/synapse-types'
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { noop, upperFirst } from 'lodash-es'
import { parse } from 'papaparse'
import pluralize from 'pluralize'
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import {
  EntityFinderModal,
  EntityFinderModalProps,
} from '../EntityFinder/EntityFinderModal'
import { FinderScope } from '../EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import IconSvg from '../IconSvg'
import { SkeletonTable } from '../Skeleton'
import {
  CheckBoxCell,
  CheckBoxHeader,
  EntityHeaderIDCell,
  EntityHeaderNameCell,
  EntityHeaderTypeCell,
} from './EntityHeaderTableCellRenderers'
import { Filter } from './Filter'
import { useEntityHeaderTableState } from './useEntityHeaderTableState'

const DEFAULT_FINDER_CONFIG: EntityFinderModalProps['configuration'] = {
  selectMultiple: true,
  versionSelection: VersionSelectionType.DISALLOWED,
  initialScope: FinderScope.ALL_PROJECTS,
  initialContainer: 'root',
}

export type EntityHeaderTableProps = {
  references: ReferenceList
  isEditable: boolean
  disabled?: boolean
  onUpdate?: (updatedRefs: ReferenceList) => void // when the references are updated, EntityHeaderTable will call this function with the updated list
  removeSelectedRowsButtonText?: string
  onUpdateEntityIDsTextbox?: (value: string) => void // when the entity IDs text box is updated, this is called
  /* The word used to describe the items in the table. Default 'entity' */
  objectNameCopy?: string
  // If true, the text field where IDs are pasted is hidden, and confirming the entity finder will immediately call `onUpdate`
  hideTextFieldToPasteValue?: boolean
  entityFinderConfiguration?: EntityFinderModalProps['configuration']
}

const UNMANAGEABLE_SUBJECT_COUNT = 10

// extend EntityHeader to create dummy EntityHeader rows for those that the current user cannot view
export type EntityHeaderOrDummy = EntityHeader & { isDummy?: boolean }

/**
 * Renders a sortable/filterable table for a set of entity references.  If editable, onUpdate will be called back
 * on any entity added/removed.
 */
export const EntityHeaderTable = (
  props: EntityHeaderTableProps,
): React.ReactNode => {
  const {
    references,
    isEditable,
    disabled,
    onUpdate = noop,
    removeSelectedRowsButtonText = 'Remove Selected Rows',
    onUpdateEntityIDsTextbox,
    objectNameCopy = 'entity',
    hideTextFieldToPasteValue = false,
    entityFinderConfiguration = DEFAULT_FINDER_CONFIG,
  } = props
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [showEntityFinder, setShowEntityFinder] = useState<boolean>(false)

  const {
    rowSelection,
    setRowSelection,
    refsInState,
    setRefsInState,
    newEntityIDs,
    setNewEntityIDs,
    parseErrors,
    setParseErrors,
  } = useEntityHeaderTableState(references, onUpdateEntityIDsTextbox, onUpdate)

  const setInvalidEntityIDError = useCallback(
    (invalidEntityIDs: string[]) => {
      setParseErrors([`Invalid Synapse ID(s): ${invalidEntityIDs.join(',')}`])
    },
    [setParseErrors],
  )

  const addRefsFromEntityIDs = useCallback(
    (entityIDs: string[]) => {
      const newReferences: ReferenceList = entityIDs.map(id => {
        return {
          targetId: id.trim(),
        }
      })
      setRefsInState([...refsInState, ...newReferences])
    },
    [refsInState, setRefsInState],
  )

  const addPastedValuesToArray = useCallback(() => {
    if (newEntityIDs) {
      if (newEntityIDs.includes(',')) {
        parse<string[]>(newEntityIDs, {
          complete: result => {
            if (result.errors.length > 0) {
              const newParseErrors = result.errors.map(
                parseError => parseError.message,
              )
              setParseErrors(newParseErrors)
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
  }, [
    addRefsFromEntityIDs,
    newEntityIDs,
    setInvalidEntityIDError,
    setNewEntityIDs,
    setParseErrors,
  ])

  const pluralObjectName = upperFirst(pluralize(objectNameCopy))

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
          row.isDummy
            ? '-'
            : entityTypeToFriendlyName(getEntityTypeFromHeader(row)),
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
    throwOnError: true,
  })

  const data = useMemo(() => {
    //create dummy entries for values that were not returned by the getEntityHeaders call!
    const newData = results ? results?.results : []
    const newDataEntityIds = new Set()
    newData.forEach(entityHeader =>
      newDataEntityIds.add(normalizeSynPrefix(entityHeader.id)),
    )
    const missingRefs = refsInState.filter(
      ref => !newDataEntityIds.has(normalizeSynPrefix(ref.targetId)),
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
  }, [refsInState, results])
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

  const onRemove = useCallback(() => {
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
    setRefsInState(newRowRefs)
  }, [data, rowSelection, setRefsInState])

  const isSelection = selectionCount > 0
  const totalRowCount = data.length
  const filteredRowCount = table.getPrePaginationRowModel().rows.length
  const showFilterControls = totalRowCount > UNMANAGEABLE_SUBJECT_COUNT

  /**
   * Reset the column filters when the filter controls are hidden.
   * This handles the following edge case:
   *      1. List contains 100 items of type "A" and 1 of type "B"
   *      2. User filters to show just "A" items
   *      3. User removes all "A" items
   *      4. Only the single "B" item remains, but the filter is still present on type "A".
   *         The filter controls are hidden, so the user cannot see the "B" item.
   *
   * This effect will clear the filters when the filter controls are hidden, preventing this scenario.
   */
  useEffect(
    function resetFiltersWhenFilterControlsAreHidden() {
      if (!showFilterControls) {
        table.setColumnFilters([])
      }
    },
    [table, showFilterControls],
  )

  if (isLoading) {
    return (
      <SkeletonTable numCols={3} numRows={Math.min(10, refsInState.length)} />
    )
  } else if (!isSuccess) {
    return <></>
  }
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: '12px 10px 10px 5px',
        }}
      >
        {showFilterControls && (
          <Typography variant="body1" sx={{ marginBottom: '10px' }}>
            {totalRowCount} {pluralObjectName}{' '}
            {filteredRowCount < totalRowCount
              ? `(${filteredRowCount} visible)`
              : ''}
            {isSelection && <span>{` (${selectionCount} selected)`}</span>}
          </Typography>
        )}
        {isEditable && refsInState.length > 0 && (
          <Button
            variant="contained"
            disabled={!isSelection || disabled}
            onClick={onRemove}
          >
            {removeSelectedRowsButtonText}
          </Button>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          pb: 2,
        }}
      >
        {table.getHeaderGroups().map(headerGroup =>
          headerGroup.headers.map(header => {
            return header.isPlaceholder ? null : (
              <Fragment key={header.column.id}>
                {header.column.getCanFilter() && showFilterControls ? (
                  <Box sx={{ flexGrow: 1 }}>
                    <Filter column={header.column} table={table} />
                  </Box>
                ) : null}
              </Fragment>
            )
          }),
        )}
      </Box>
      {totalRowCount > 0 && (
        <StyledTableContainer
          sx={{
            th: {
              zIndex: 100,
              maxHeight: '250px',
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
                        }}
                      >
                        {header.isPlaceholder ? null : (
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                            <Box
                              sx={{
                                mx: 'auto',
                              }}
                            />
                            {header.column.getCanSort() && (
                              <IconButton
                                onClick={header.column.getToggleSortingHandler()}
                                size={'small'}
                                sx={{
                                  marginLeft: 'auto',
                                  marginRight: '16px',
                                }}
                              >
                                <IconSvg
                                  icon={
                                    header.column.getIsSorted() === 'asc'
                                      ? 'sortUp'
                                      : 'sortDown'
                                  }
                                  wrap={false}
                                  fontSize={'inherit'}
                                  sx={{
                                    color: header.column.getIsSorted()
                                      ? 'primary.main'
                                      : 'grey.700',
                                    backgroundColor: 'none',
                                  }}
                                />
                              </IconButton>
                            )}
                          </Box>
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
        </StyledTableContainer>
      )}
      <EntityFinderModal
        configuration={entityFinderConfiguration}
        promptCopy={`Select ${pluralObjectName} to add to the Synapse ID list`}
        show={showEntityFinder}
        title={`Select ${pluralObjectName}`}
        confirmButtonCopy={`Add ${pluralObjectName}`}
        onConfirm={items => {
          if (hideTextFieldToPasteValue) {
            const newRefs = [...refsInState, ...items]
            setRefsInState(newRefs)
            onUpdate(newRefs)
          } else {
            const newEntityIDsArray = items.map(ref => ref.targetId)
            const newEntityIDsString =
              newEntityIDs.trim().length > 0
                ? newEntityIDs.concat(',')
                : newEntityIDs
            const newValue = newEntityIDsString.concat(
              newEntityIDsArray.join(','),
            )
            setNewEntityIDs(newValue)
          }
          setShowEntityFinder(false)
        }}
        onCancel={() => setShowEntityFinder(false)}
      />
      {isEditable && (
        <Box sx={{ marginTop: '10px' }}>
          {hideTextFieldToPasteValue && (
            <Button
              variant="outlined"
              onClick={() => {
                setShowEntityFinder(true)
              }}
              startIcon={<AddAd />}
              disabled={disabled}
            >
              Add {pluralObjectName}
            </Button>
          )}
          {!hideTextFieldToPasteValue && (
            <>
              <InputLabel htmlFor="synIDs">Add Synapse IDs</InputLabel>
              <Box
                sx={{ display: 'grid', gridTemplateColumns: 'auto 50px 150px' }}
              >
                <TextField
                  id="synIDs"
                  name="synIDs"
                  fullWidth
                  onChange={e => {
                    setNewEntityIDs(e.target.value)
                  }}
                  value={newEntityIDs}
                  placeholder="Enter a list of Synapse IDs (i.e. 'syn123, syn456')"
                  disabled={disabled}
                />
                <Box sx={{ padding: '5px 0px 0px 5px' }}>
                  {/* Entity finder button.  On select, append the selected entity ID to the newSynIDs list */}
                  <Tooltip title="Add a Synapse ID to the list via the Entity Finder">
                    <IconButton
                      disabled={disabled}
                      onClick={() => {
                        setShowEntityFinder(true)
                      }}
                    >
                      <AddAd />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Button
                  variant="outlined"
                  onClick={addPastedValuesToArray}
                  disabled={
                    isLoading || newEntityIDs.trim().length == 0 || disabled
                  }
                  startIcon={<AddCircleTwoTone />}
                >
                  Add {pluralObjectName}
                </Button>
              </Box>
            </>
          )}
          {parseErrors && parseErrors.length > 0 && (
            <Alert severity={'error'} sx={{ my: 2 }}>
              <AlertTitle>Parsing errors encountered:</AlertTitle>
              <ul>
                {parseErrors.map((error, index) => {
                  return (
                    <Typography
                      component={parseErrors.length > 1 ? 'li' : 'span'}
                      key={index}
                      variant={'smallText1'}
                      sx={{
                        lineHeight: 1.5,
                      }}
                    >
                      {error}
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
