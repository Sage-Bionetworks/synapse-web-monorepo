import ColumnResizer from 'column-resizer'
import { cloneDeep } from 'lodash-es'
import React, { useEffect } from 'react'
import SynapseClient from '../../synapse-client'
import {
  hasFilesInView,
  isDataset,
  isDatasetCollection,
  isEntityView,
} from '../../utils/functions/EntityTypeUtils'
import { getUserProfileWithProfilePicAttached } from '../../utils/functions/getUserData'
import {
  SynapseContextType,
  useSynapseContext,
} from '../../utils/context/SynapseContext'
import {
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  FacetColumnRequest,
  FacetColumnResult,
  FacetColumnResultValues,
  QueryBundleRequest,
  ReferenceList,
  Row as SynapseRow,
  SelectColumn,
  SortItem,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import AddToDownloadListV2 from '../AddToDownloadListV2'
import { LabelLinkConfig } from '../CardContainerLogic'
import DirectDownload from '../DirectDownload'
import { HasAccessV2 } from '../HasAccess/HasAccessV2'
import loadingScreen from '../LoadingScreen'
import ModalDownload from '../ModalDownload/ModalDownload'
import {
  QueryVisualizationContextType,
  useQueryVisualizationContext,
} from '../QueryVisualizationWrapper'
import { QueryContextType, useQueryContext } from '../QueryContext/QueryContext'
import { Icon } from '../row_renderers/utils'
import { SynapseTableCell } from '../synapse_table_functions/SynapseTableCell'
import { EnumFacetFilter } from '../widgets/query-filter/EnumFacetFilter'
import {
  applyChangesToValuesColumn,
  applyMultipleChangesToValuesColumn,
} from '../widgets/query-filter/FacetFilterControls'
import { ICON_STATE } from './SynapseTableConstants'
import {
  findSelectionIndex,
  getColumnIndicesWithType,
  getUniqueEntities,
  isSortableColumn,
} from './SynapseTableUtils'
import { TablePagination } from './TablePagination'
import EntityIDColumnCopyIcon from './EntityIDColumnCopyIcon'
import ExpandableTableDataCell from './ExpandableTableDataCell'
import useTraceUpdate from '../../utils/hooks/useTraceUpdate'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtual } from 'react-virtual'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Box,
} from '@mui/material'
import { Checkbox } from '@mui/material'
import IconSvg from '../IconSvg'

type Direction = '' | 'ASC' | 'DESC'
export const SORT_STATE: Direction[] = ['', 'DESC', 'ASC']
export const DOWNLOAD_OPTIONS_CONTAINER_CLASS = 'SRC-download-options-container'
const RESIZER_OPTIONS: any = {
  resizeMode: 'overflow',
  partialRefresh: 'true',
  liveDrag: true,
  headerOnly: 'true',
}
type Info = {
  index: number
  name: string
}

export type SynapseTableProps = {
  synapseContext: SynapseContextType
  queryContext: QueryContextType
  queryVisualizationContext: QueryVisualizationContextType
  title?: string
  showAccessColumn?: boolean
  showDownloadColumn?: boolean
  columnLinks?: LabelLinkConfig
  hideDownload?: boolean
}

type FacetDropdownProps = {
  facetColumnResult: FacetColumnResultValues
  columnModel: ColumnModel
  lastQueryRequest: QueryBundleRequest
  applyChangesFromQueryFilter: (result: FacetColumnRequest[]) => void
}

/**
 * Show the dropdown menu for a column that has been faceted
 *
 * @param {number} index this is column index of the query table data
 * @param {string} columnName this is the name of the column
 * @param {FacetColumnResult[]} facetColumnResults
 * @param {number} facetIndex
 * @returns
 * @memberof SynapseTable
 */
function FacetDropdown(props: FacetDropdownProps) {
  const {
    facetColumnResult,
    columnModel,
    lastQueryRequest,
    applyChangesFromQueryFilter,
  } = props
  console.log(facetColumnResult)
  return (
    <EnumFacetFilter
      containerAs="Dropdown"
      facetValues={facetColumnResult.facetValues}
      columnModel={columnModel}
      onChange={facetNamesMap => {
        applyMultipleChangesToValuesColumn(
          lastQueryRequest,
          facetColumnResult,
          applyChangesFromQueryFilter,
          facetNamesMap,
        )
      }}
      onClear={() => {
        applyChangesToValuesColumn(
          lastQueryRequest,
          facetColumnResult,
          applyChangesFromQueryFilter,
        )
      }}
    />
  )
}

export function SynapseTable(props: SynapseTableProps) {
  useTraceUpdate(props)
  const [isExportTableDownloadOpen, setIsExportTableDownloadOpen] =
    React.useState(false)
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isColumnSelectionOpen, setIsColumnSelectionOpen] =
    React.useState(false)
  const [mapEntityIdToHeader, setMapEntityIdToHeader] = React.useState({})
  const [mapUserIdToHeader, setMapUserIdToHeader] = React.useState({})
  const [isFetchingEntityHeaders, setIsFetchingEntityHeaders] =
    React.useState(false)

  const synapseContext = useSynapseContext()
  const queryContext = useQueryContext()
  const { getLastQueryRequest, executeQueryRequest } = queryContext
  const queryVisualizationContext = useQueryVisualizationContext()
  const {
    isRowSelectionVisible,
    columnsToShowInTable,
    selectedRows,
    setSelectedRows,
  } = useQueryVisualizationContext()

  function applyChangesFromQueryFilter(facets: FacetColumnRequest[]) {
    const queryRequest: QueryBundleRequest = getLastQueryRequest()
    queryRequest.query.selectedFacets = facets
    queryRequest.query.offset = 0
    executeQueryRequest(queryRequest)
  }

  // async function getEntityHeadersInData(forceRefresh: boolean) {
  //   const { data, entity } = queryContext
  //   if (!data || !entity) {
  //     return
  //   } else if (isFetchingEntityHeaders && !forceRefresh) {
  //     return
  //   }
  //   const mapEntityIdToHeader = cloneDeep(mapEntityIdToHeader)
  //   const mapUserIdToHeader = cloneDeep(mapUserIdToHeader)
  //   const entityIdColumnIndicies = getColumnIndicesWithType(
  //     data,
  //     ColumnTypeEnum.ENTITYID,
  //   )
  //   const userIdColumnIndicies = getColumnIndicesWithType(
  //     data,
  //     ColumnTypeEnum.USERID,
  //   )
  //
  //   const distinctEntityIds = getUniqueEntities(
  //     data,
  //     mapEntityIdToHeader,
  //     entityIdColumnIndicies,
  //   )
  //   // also include row entity ids if this is a view (it's possible that the ID column was not selected)
  //   if (
  //     (isEntityViewOrDataset() || (entity && isDatasetCollection(entity))) &&
  //     allRowsHaveId()
  //   ) {
  //     const rows = data.queryResult?.queryResults?.rows ?? []
  //     rows.forEach((row: SynapseRow) => {
  //       const rowSynapseId = `syn${row.rowId}`
  //       distinctEntityIds.add(rowSynapseId)
  //     })
  //   }
  //   const distinctUserIds = getUniqueEntities(
  //     data,
  //     mapUserIdToHeader,
  //     userIdColumnIndicies,
  //   )
  //   if (distinctEntityIds.size === 0 && distinctUserIds.size === 0) {
  //     return
  //   }
  //   setIsFetchingEntityHeaders(true)
  //   // Make call to resolve entity ids
  //   if (distinctEntityIds.size > 0) {
  //     const referenceList: ReferenceList = Array.from(distinctEntityIds).map(
  //       id => {
  //         return { targetId: id }
  //       },
  //     )
  //     try {
  //       const data = await SynapseClient.getEntityHeaders(
  //         referenceList,
  //         synapseContext.accessToken,
  //       )
  //       const { results } = data
  //       results.forEach(el => {
  //         mapEntityIdToHeader[el.id] = el
  //       })
  //     } catch (err) {
  //       console.error('Error on retrieving entity header list , ', err)
  //     }
  //   }
  //   const userProfileIds: string[] = []
  //   if (distinctUserIds.size > 0) {
  //     // Make call to get group headers and user profiles
  //     const ids = Array.from(distinctUserIds)
  //     // TODO: Grab Team Badge
  //     try {
  //       const data = await SynapseClient.getGroupHeadersBatch(
  //         ids,
  //         synapseContext.accessToken,
  //       )
  //       data.children.forEach(el => {
  //         if (el.isIndividual) {
  //           userProfileIds.push(el.ownerId)
  //         } else {
  //           mapUserIdToHeader[el.ownerId] = el
  //         }
  //       })
  //     } catch (err) {
  //       console.error('Error on getGroupHeaders batch: ', err)
  //     }
  //   }
  //   if (userProfileIds.length > 0) {
  //     try {
  //       const data = await getUserProfileWithProfilePicAttached(userProfileIds)
  //       data.list.forEach((el: UserProfile) => {
  //         mapUserIdToHeader[el.ownerId] = el
  //       })
  //     } catch (err) {
  //       console.error('Error on getUserProfile : ', err)
  //     }
  //   }
  //   setMapEntityIdToHeader(mapEntityIdToHeader)
  //   setMapUserIdToHeader(mapUserIdToHeader)
  //   setIsFetchingEntityHeaders(false)
  // }

  // instance variables
  // let resizer: any
  // let tableElement: HTMLTableElement | null | undefined = undefined
  //
  // function enableResize() {
  //   if (!resizer) {
  //     // only create the resizer if the tableElement is in the DOM and there's more than one select column in the data.
  //     if (tableElement && getLengthOfPropsData() > 1) {
  //       resizer = new ColumnResizer(tableElement, RESIZER_OPTIONS)
  //     }
  //   } else {
  //     // TODO: use event driven solution instead of timeout.
  //     // We need to give SynapseTableCell time to render (which will change the column size).
  //     // Alternatively, we may be able to use SizeMe (or withSize() on Cell component) to respond to width change.
  //     setTimeout(() => {
  //       resizer.reset(RESIZER_OPTIONS)
  //     }, 1000)
  //   }
  // }
  //
  // function disableResize() {
  //   if (resizer) {
  //     resizer.reset({ disable: true })
  //   }
  // }
  //
  // useEffect(() => {
  //   getEntityHeadersInData(true)
  //   enableResize()
  //   return () => {
  //     disableResize()
  //   }
  // }, [])

  //
  // shouldComponentUpdate(
  //   nextProps: SynapseTableProps,
  //   nextState: Readonly<SynapseTableState>,
  // ): boolean {
  //   // ignore isFetching state variables when checking for change in state
  //   const {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     isFetchingEntityHeaders: oldIsFetchingEntityHeaders,
  //     ...oldState
  //   } = this.state
  //   const {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     isFetchingEntityHeaders: newIsFetchingEntityHeaders,
  //     ...newState
  //   } = nextState
  //   const isPropsChange = !eq(this.props, nextProps)
  //   const isStateChange = !eq(oldState, newState)
  //   const shouldComponentUpdate = isPropsChange || isStateChange
  //   if (shouldComponentUpdate) {
  //     this.disableResize()
  //   }
  //   return shouldComponentUpdate
  // }
  // componentDidUpdate(
  //   prevProps: SynapseTableProps,
  //   prevState: Readonly<SynapseTableState>,
  // ) {
  //   // PORTALS-2081: if the data changed, then get the new entity headers
  //   if (!eq(prevProps.queryContext.data, this.props.queryContext.data)) {
  //     this.getEntityHeadersInData(false)
  //   } else if (
  //     prevProps.queryContext.entity &&
  //     this.props.queryContext.entity &&
  //     !eq(
  //       isEntityView(prevProps.queryContext.entity),
  //       isEntityView(this.props.queryContext.entity),
  //     )
  //   ) {
  //     // if we determined that this is an entity view, force refresh the entity headers (for Views we need to get the rowIds!)
  //     this.getEntityHeadersInData(true)
  //   }
  //   this.enableResize()
  // }

  /**
   * Display the view
   */
  // if (!queryContext.data && queryContext.isLoadingNewBundle) {
  //   return loadingScreen
  // } else if (!queryContext.data) {
  //   return <></>
  // }
  // unpack all the data
  const { data } = queryContext
  const { NoContentPlaceholder } = queryVisualizationContext
  const queryRequest = queryContext.getLastQueryRequest()
  const hasResults = (data?.queryResult?.queryResults.rows.length ?? 0) > 0
  // Show the No Results UI if the current page has no rows, and this is the first page of data (offset === 0).
  // if (!hasResults && queryRequest.query.offset === 0) {
  //   return <NoContentPlaceholder />
  // }

  // const { rows, headers } = queryResult!.queryResults

  // const renderTable = (
  //   headers: SelectColumn[],
  //   columnModels: ColumnModel[],
  //   facets: FacetColumnResult[],
  //   rows: SynapseRow[],
  // ) => {
  //   const { entity } = queryContext
  //   const { isRowSelectionVisible } = queryVisualizationContext
  //   const lastQueryRequest = queryContext.getLastQueryRequest?.()!
  //   const { showAccessColumn, showDownloadColumn } = props
  //
  //   /**
  //    * i.e. the view may have FileEntities in it
  //    *
  //    * PORTALS-2010:  Enhance change made for PORTALS-1973.  File specific action will only be shown for rows that represent FileEntities.
  //    */
  //   const isFileViewOrDataset =
  //     entity &&
  //     ((isEntityView(entity) && hasFilesInView(entity)) || isDataset(entity))
  //
  //   const isShowingAccessColumn: boolean | undefined =
  //     showAccessColumn && entity && isEntityViewOrDataset() && allRowsHaveId()
  //   const isLoggedIn = !!synapseContext.accessToken
  //
  //   const rowsAreDownloadable =
  //     entity && isFileViewOrDataset && isLoggedIn && allRowsHaveId()
  //
  //   const isShowingAddToV2DownloadListColumn: boolean = !!(
  //     rowsAreDownloadable && !props.hideDownload
  //   )
  //
  //   const isShowingDirectDownloadColumn =
  //     rowsAreDownloadable && showDownloadColumn
  //
  //   /* min height ensure if no rows are selected that a dropdown menu is still accessible */
  //   return (
  //     <div className="SynapseTable SRC-overflowAuto" data-testid="SynapseTable">
  //       <table
  //         ref={node => (tableElement = node)}
  //         className="table table-striped table-condensed"
  //       >
  //         <thead className="SRC_bordered">
  //           <tr>
  //             {createTableHeader(
  //               headers,
  //               columnModels,
  //               facets,
  //               isShowingAccessColumn,
  //               isShowingDirectDownloadColumn,
  //               isShowingAddToV2DownloadListColumn,
  //               isRowSelectionVisible,
  //               lastQueryRequest,
  //             )}
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {createTableRows(
  //             rows,
  //             headers,
  //             isShowingAccessColumn,
  //             isShowingDirectDownloadColumn,
  //             isShowingAddToV2DownloadListColumn,
  //             isRowSelectionVisible,
  //           )}
  //         </tbody>
  //       </table>
  //       <div className="bootstrap-4-backport" style={{ textAlign: 'right' }}>
  //         <TablePagination />
  //       </div>
  //     </div>
  //   )
  // }

  // const table = <div>{renderTable(headers, columnModels, facets, rows)}</div>
  // const content = (
  //   <>
  //     <div className={className}>
  //       {isExportTableDownloadOpen && (
  //         <ModalDownload
  //           onClose={() => {
  //             setIsExportTableDownloadOpen(false)
  //           }}
  //           queryBundleRequest={queryRequest}
  //         />
  //       )}
  //       {/* FRAGILE, CHANGE WITH CAUTION, see - https://sagebionetworks.jira.com/browse/PORTALS-1539 */}
  //       <div>{table}</div>
  //     </div>
  //   </>
  // )

  /**
   * If this is a view/dataset and rows have an ID, then rows represent individual objects in Synapse.
   * Presence of row IDs also indicates that the query is also necessarily not summary data, e.g. the query does
   * not include an operation like GROUP BY, DISTINCT, etc., that would cause rows to not map 1:1 to Synapse Entities
   */
  // function allRowsHaveId(): boolean {
  //   const { data } = queryContext
  //   return (
  //     data?.queryResult?.queryResults.rows.every(row => !!row.rowId) ?? false
  //   )
  // }
  //
  // function isEntityViewOrDataset(): boolean {
  //   const { entity } = queryContext
  //   return (entity && (isEntityView(entity) || isDataset(entity))) ?? false
  // }
  //
  /**
   * Handle a column having been selected
   *
   * @memberof SynapseTable
   */
  const handleColumnSortPress = (columnName: string) => {
    const lastQueryRequest = queryContext.getLastQueryRequest()
    const newSortState: SortItem[] = [...(lastQueryRequest.query.sort ?? [])]
    const existingSortIndex = newSortState.findIndex(
      sortItem => sortItem.column === columnName,
    )
    let existingSort: SortItem | undefined = undefined
    if (existingSortIndex != -1) {
      existingSort = newSortState[existingSortIndex]
    }

    if (existingSort == undefined) {
      newSortState.push({ column: columnName, direction: 'DESC' })
    } else if (existingSort.direction === 'DESC') {
      // TODO: modify in place or move to end?
      newSortState[existingSortIndex] = {
        column: columnName,
        direction: 'ASC',
      }
    } else if (existingSort.direction === 'ASC') {
      // remove it
      newSortState.splice(existingSortIndex, 1)
    }

    queryContext.executeQueryRequest(queryRequest => {
      return {
        ...queryRequest,
        query: {
          ...queryRequest.query,
          sort: newSortState,
          offset: 0,
        },
      }
    })
  }
  //
  // function createTableRows(
  //   rows: Row[],
  //   headers: SelectColumn[],
  //   isShowingAccessColumn: boolean | undefined,
  //   isShowingDownloadColumn: boolean | undefined,
  //   isShowingAddToV2DownloadListColumn: boolean,
  // ) {
  //   const rowsFormatted: JSX.Element[] = []
  //   const { data } = queryContext
  //   const {
  //     columnsToShowInTable,
  //     selectedRows,
  //     setSelectedRows,
  //     isRowSelectionVisible,
  //   } = queryVisualizationContext
  //   const { columnLinks = [] } = props
  //   const { selectColumns = [], columnModels = [] } = data!
  //
  //   rows.forEach((row, rowIndex) => {
  //     const entityVersionNumber = row.versionNumber?.toString()
  //     const rowSynapseId = `syn${row.rowId}`
  //
  //     const rowContent = row.values.map(
  //       (columnValue: string | null, colIndex: number) => {
  //         const columnName = headers[colIndex].name
  //         const isColumnActive = columnsToShowInTable.includes(columnName)
  //         const columnLinkConfig = columnLinks.find(el => {
  //           return el.matchColumnName === columnName
  //         })
  //         const index = findSelectionIndex(sortedColumnSelection, columnName)
  //         const isBold = index === -1 ? '' : 'SRC-boldText'
  //         if (isColumnActive) {
  //           return (
  //             <ExpandableTableDataCell
  //               className="SRC_noBorderTop"
  //               key={`(${rowIndex}${columnValue}${colIndex})`}
  //             >
  //               <SynapseTableCell
  //                 columnType={headers[colIndex].columnType}
  //                 columnValue={columnValue}
  //                 isBold={isBold}
  //                 mapEntityIdToHeader={mapEntityIdToHeader}
  //                 mapUserIdToHeader={mapUserIdToHeader}
  //                 columnLinkConfig={columnLinkConfig}
  //                 columnName={columnName}
  //                 rowData={row.values}
  //                 selectColumns={selectColumns}
  //                 columnModels={columnModels}
  //                 rowId={row.rowId}
  //                 rowVersionNumber={row.versionNumber}
  //               />
  //             </ExpandableTableDataCell>
  //           )
  //         }
  //         return <td className="SRC-hidden" key={`(${rowIndex},${colIndex})`} />
  //       },
  //     )
  //
  //     // also push the access column value if we are showing user access for individual items (still shown if not logged in)
  //     if (isShowingAccessColumn) {
  //       rowContent.unshift(
  //         <td key={rowSynapseId} className="SRC_noBorderTop">
  //           <HasAccessV2
  //             key={rowSynapseId}
  //             entityId={rowSynapseId}
  //             entityVersionNumber={entityVersionNumber}
  //           />
  //         </td>,
  //       )
  //     }
  //     const isFileEntity: boolean =
  //       mapEntityIdToHeader[rowSynapseId]?.type ==
  //       'org.sagebionetworks.repo.model.FileEntity'
  //     if (isShowingDownloadColumn) {
  //       // SWC-5790: If this is a FileEntity, the download icon should just go to entity page
  //       rowContent.unshift(
  //         <td
  //           key={`direct-download-${rowSynapseId}`}
  //           className="SRC_noBorderTop direct-download"
  //         >
  //           {isFileEntity && (
  //             <DirectDownload
  //               associatedObjectId={rowSynapseId}
  //               entityVersionNumber={entityVersionNumber}
  //             ></DirectDownload>
  //           )}
  //         </td>,
  //       )
  //     }
  //     if (isShowingAddToV2DownloadListColumn) {
  //       rowContent.unshift(
  //         <td
  //           key={`add-to-download-list-v2-${rowSynapseId}`}
  //           className="SRC_noBorderTop add-to-download-list-v2"
  //         >
  //           {isFileEntity && (
  //             <AddToDownloadListV2
  //               entityId={rowSynapseId}
  //               entityVersionNumber={parseInt(entityVersionNumber!)}
  //             ></AddToDownloadListV2>
  //           )}
  //         </td>,
  //       )
  //     }
  //
  //     if (isRowSelectionVisible && selectedRows) {
  //       rowContent.unshift(
  //         <td key={`(${rowIndex},rowSelectColumn)`} className="SRC_noBorderTop">
  //           <Checkbox
  //             label=""
  //             checked={!!selectedRows[row.rowId]}
  //             onChange={(checked: boolean) => {
  //               const cloneSelectedRows = { ...selectedRows }
  //               if (checked) {
  //                 cloneSelectedRows[row.rowId] = row
  //               } else {
  //                 delete cloneSelectedRows[row.rowId]
  //               }
  //               // update context on change
  //               setSelectedRows(cloneSelectedRows)
  //             }}
  //           ></Checkbox>
  //         </td>,
  //       )
  //     }
  //
  //     const rowFormatted = <tr key={row.rowId ?? rowIndex}>{rowContent}</tr>
  //     rowsFormatted.push(rowFormatted)
  //   })
  //   return rowsFormatted
  // }
  //

  // function createTableHeader(
  //   headers: SelectColumn[],
  //   columnModels: ColumnModel[],
  //   facets: FacetColumnResult[],
  //   isShowingAccessColumn: boolean | undefined,
  //   isShowingDownloadColumn: boolean | undefined,
  //   isShowingAddToV2DownloadListColumn: boolean,
  //   lastQueryRequest: QueryBundleRequest,
  // ) {
  //   const { lockedColumn } = queryContext
  //   const {
  //     getColumnDisplayName,
  //     columnsToShowInTable,
  //     isRowSelectionVisible,
  //   } = queryVisualizationContext
  //
  //   const tableColumnHeaderElements: JSX.Element[] = headers.map(
  //     (column: SelectColumn, index: number) => {
  //       const isHeaderSelected = columnsToShowInTable.includes(column.name)
  //       if (isHeaderSelected) {
  //         // for background color
  //         const isSelected: boolean =
  //           findSelectionIndex(sortedColumnSelection, column.name) !== -1
  //         // for icon state
  //         const columnIndex: number =
  //           columnIconSortState[index] === undefined
  //             ? 0
  //             : columnIconSortState[index]
  //         // we have to figure out if the current column is a facet selection
  //         const facetIndex: number = facets.findIndex(
  //           (facetColumnResult: FacetColumnResult) => {
  //             return facetColumnResult.columnName === column.name
  //           },
  //         )
  //         // the header must be included in the facets and it has to be enumerable for current rendering capabilities
  //         const isFacetSelection: boolean =
  //           facetIndex !== -1 && facets[facetIndex].facetType === 'enumeration'
  //         const facet = facets[facetIndex] as FacetColumnResultValues
  //         const isSelectedSpanClass = isSelected
  //           ? 'SRC-primary-background-color SRC-anchor-light'
  //           : ''
  //         const isSelectedIconClass = isSelected
  //           ? 'SRC-selected-table-icon tool-icon'
  //           : 'SRC-primary-text-color tool-icon'
  //         const sortSpanBackgoundClass = `SRC-tableHead SRC-hand-cursor SRC-sortPadding SRC-primary-background-color-hover  ${isSelectedSpanClass}`
  //         const displayColumnName: string | undefined = getColumnDisplayName(
  //           column.name,
  //         )
  //         const columnModel = columnModels.find(el => el.name === column.name)!
  //         const isLockedColumn =
  //           column.name.toLowerCase() ===
  //           lockedColumn?.columnName?.toLowerCase() // used in details page to disable filter the column
  //         const isEntityIDColumn =
  //           columnModel &&
  //           columnModel.name == 'id' &&
  //           columnModel.columnType == ColumnTypeEnum.ENTITYID
  //         return (
  //           <th key={column.name}>
  //             <div className="SRC-split">
  //               <span style={{ whiteSpace: 'nowrap' }}>
  //                 {displayColumnName}
  //               </span>
  //               <div className="SRC-centerContent">
  //                 {isFacetSelection &&
  //                   !isLockedColumn &&
  //                   configureFacetDropdown(
  //                     facet,
  //                     columnModel,
  //                     lastQueryRequest,
  //                   )}
  //                 {isSortableColumn(column.columnType) && (
  //                   <span
  //                     role="button"
  //                     aria-label="sort"
  //                     tabIndex={0}
  //                     className={sortSpanBackgoundClass}
  //                     // onKeyPress={handleColumnSortPress({
  //                     //   index,
  //                     //   name: column.name,
  //                     // })}
  //                     // onClick={handleColumnSortPress({
  //                     //   index,
  //                     //   name: column.name,
  //                     // })}
  //                   >
  //                     <Icon
  //                       type={ICON_STATE[columnIndex]}
  //                       cssClass={isSelectedIconClass}
  //                     ></Icon>
  //                   </span>
  //                 )}
  //                 {isEntityIDColumn && <EntityIDColumnCopyIcon />}
  //               </div>
  //             </div>
  //           </th>
  //         )
  //       } else {
  //         return <th className="SRC-hidden" key={column.name} />
  //       }
  //     },
  //   )
  //   // also push the access column if we are showing user access for individual items (must be logged in)
  //   if (isShowingAccessColumn) {
  //     tableColumnHeaderElements.unshift(
  //       <th key="accessColumn">
  //         <div className="SRC-centerContent">
  //           <span style={{ whiteSpace: 'nowrap' }}>Access</span>
  //         </div>
  //       </th>,
  //     )
  //   }
  //   // add direct download column if logged in
  //   if (isShowingDownloadColumn) {
  //     tableColumnHeaderElements.unshift(
  //       <th key="downloadColumn">
  //         <div className="SRC-centerContent">&nbsp;</div>
  //       </th>,
  //     )
  //   }
  //   if (isShowingAddToV2DownloadListColumn) {
  //     tableColumnHeaderElements.unshift(
  //       <th
  //         data-testid="AddToDownloadListV2ColumnHeader"
  //         key="addToV2DownloadListColumn"
  //       >
  //         <div className="SRC-centerContent">&nbsp;</div>
  //       </th>,
  //     )
  //   }
  //   if (isRowSelectionVisible) {
  //     tableColumnHeaderElements.unshift(
  //       <th key="rowSelectionColumn">
  //         <div className="SRC-centerContent">{/* checkboxes column */}</div>
  //       </th>,
  //     )
  //   }
  //   return tableColumnHeaderElements
  // }

  //
  // function getLengthOfPropsData() {
  //   const { data } = queryContext
  //   return data?.queryResult?.queryResults.headers.length ?? 0
  // }

  // function applyChangesFromQueryFilter(facets: FacetColumnRequest[]) {
  //   const queryRequest: QueryBundleRequest = queryContext.getLastQueryRequest()
  //   queryRequest.query.selectedFacets = facets
  //   queryRequest.query.offset = 0
  //   queryContext.executeQueryRequest(queryRequest)
  // }

  const columns = React.useMemo<ColumnDef<any>[]>(() => {
    if (!data || !data.columnModels) {
      return []
    }
    const cols = data.columnModels.map((c, i) => ({
      accessorFn: row => row.values[i],
      columnModel: c,
      header: c.name,
      enableResizing: true,
      enableSorting: isSortableColumn(c.columnType),
      facet: data.facets?.find(f => f.columnName === c.name),
      isLockedColumn: false, // TODO
      cell: ({ column, row, getValue }) => (
        <SynapseTableCell
          columnType={c.columnType}
          columnValue={getValue()}
          className={column.getIsSorted() ? 'SRC-boldText' : ''}
          mapEntityIdToHeader={{}}
          mapUserIdToHeader={{}}
          columnName={c.name}
          rowData={row.original}
        />
      ),
    }))

    if (isRowSelectionVisible) {
      cols.unshift({
        id: 'select',
        header: '',
        cell: ({ row }) => {
          const rowId = String(row.original.rowId)
          return (
            <Checkbox
              size={'small'}
              checked={!!selectedRows[rowId]}
              onClick={event => {
                const shouldAdd = !selectedRows[rowId]
                const cloneSelectedRows = { ...selectedRows }
                if (shouldAdd) {
                  cloneSelectedRows[rowId] = row.original
                } else {
                  delete cloneSelectedRows[rowId]
                }
                // update context on change
                setSelectedRows(cloneSelectedRows)
              }}
            />
          )
        },
      })
    }
    return cols
  }, [data, isRowSelectionVisible, selectedRows, setSelectedRows])

  const tableData = React.useMemo<Row<any>[]>(() => {
    if (!data || !data.queryResult) {
      return []
    }
    return data.queryResult.queryResults.rows
  }, [data])

  const tableContainerRef = React.useRef<HTMLDivElement>(null)

  const table = useReactTable({
    data: tableData,
    columns,

    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableSortingRemoval: true,
    enableMultiSort: true,
    state: {
      columnVisibility: columns.reduce((acc, next) => {
        const columnName = next.columnModel.name
        if (columnsToShowInTable.includes(columnName)) {
          return {
            [columnName]: true,
            ...acc,
          }
        } else {
          return {
            [columnName]: false,
            ...acc,
          }
        }
      }, {}),
    },

    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    debugTable: true,
    manualSorting: true,
    manualFiltering: true,
    manualPagination: true,
  })

  const { rows } = table.getRowModel()
  // const rowVirtualizer = useVirtual({
  //   parentRef: tableContainerRef,
  //   size: rows.length,
  //   overscan: 10,
  // })
  // const { virtualItems: virtualRows, totalSize } = rowVirtualizer

  // const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0
  // const paddingBottom =
  //   virtualRows.length > 0
  //     ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
  //     : 0

  return (
    <div className="SynapseTableV2">
      <div className="h-2" />
      <TableContainer
        component={Paper}
        ref={tableContainerRef}
        className="container"
      >
        <Table>
          <TableHead>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow
                key={headerGroup.id}
                sx={{
                  // Required for column resizing to work
                  display: 'flex',
                }}
              >
                {headerGroup.headers.map(header => {
                  return (
                    <TableCell
                      component={'th'}
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize(), position: 'relative' }}
                    >
                      {header.isPlaceholder ? null : (
                        <Box
                          display="flex"
                          justifyContent={'space-between'}
                          alignItems="center"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          <div>
                            {header.column.columnDef.facet &&
                              header.column.columnDef.facet.facetType ===
                                'enumeration' &&
                              !header.column.columnDef.isLockedColumn && (
                                <FacetDropdown
                                  facetColumnResult={
                                    header.column.columnDef.facet
                                  }
                                  columnModel={
                                    header.column.columnDef.columnModel
                                  }
                                  lastQueryRequest={getLastQueryRequest()}
                                  applyChangesFromQueryFilter={
                                    applyChangesFromQueryFilter
                                  }
                                />
                              )}
                            {header.column.getCanSort() && (
                              <span
                                role="button"
                                aria-label="sort"
                                tabIndex={0}
                                onKeyPress={() => {
                                  handleColumnSortPress(
                                    header.column.columnDef.columnModel.name,
                                  )
                                }}
                                onClick={() => {
                                  handleColumnSortPress(
                                    header.column.columnDef.columnModel.name,
                                  )
                                }}
                                // className={sortSpanBackgoundClass}
                                // onKeyPress={this.handleColumnSortPress({
                                //     index,
                                //     name: column.name,
                                // })}
                              >
                                <IconSvg
                                  icon={
                                    getLastQueryRequest().query.sort?.find(
                                      sortItem =>
                                        sortItem.column ===
                                        header.column.columnDef.columnModel
                                          .name,
                                    )?.direction === 'ASC'
                                      ? 'sortAscending'
                                      : 'sortDescending'
                                  }
                                  sx={
                                    getLastQueryRequest().query.sort?.find(
                                      sortItem =>
                                        sortItem.column ===
                                        header.column.columnDef.columnModel
                                          .name,
                                    )
                                      ? {
                                          color: 'white',
                                          bgcolor: 'primary.500',
                                          p: 0.5,
                                        }
                                      : { color: 'primary', p: 0.5 }
                                  }
                                />
                              </span>
                            )}
                          </div>
                        </Box>
                      )}
                      {header.column.getCanResize() && (
                        <Box
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={`resizer ${
                            header.column.getIsResizing() ? 'isResizing' : ''
                          }`}
                        ></Box>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map(row => (
              <TableRow
                key={row.id}
                sx={{
                  // Required for column resizing to work
                  display: 'flex',
                }}
              >
                {row.getVisibleCells().map(cell => (
                  <ExpandableTableDataCell
                    key={cell.id}
                    style={{ width: cell.column.getSize() }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </ExpandableTableDataCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>{table.getRowModel().rows.length} Rows</div>
    </div>
  )
  //
  // return (
  //   <React.Fragment>
  //     {isExpanded && (
  //       <DialogBase
  //         open={true}
  //         onCancel={() => setIsExpanded(false)}
  //         content={content}
  //         title={undefined}
  //         maxWidth="xl"
  //         fullWidth
  //         sx={{
  //           '.MuiDialogTitle-root': {
  //             padding: 0,
  //           },
  //           '.MuiDialogContent-root': {
  //             border: 'transparent',
  //           },
  //         }}
  //       />
  //     )}
  //     {!isExpanded && content}
  //   </React.Fragment>
  // )
}

export default SynapseTable
