import { cloneDeep } from 'lodash-es'
import React, { useMemo, useState } from 'react'
import { SQL_EDITOR } from '../../../utils/SynapseConstants'
import { Query, QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { useQueryContext } from '../../QueryContext'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import { ColumnSelection, DownloadOptions } from '../table-top'
import { Button, Divider, Tooltip, Typography } from '@mui/material'
import QueryCount from '../../QueryCount/QueryCount'
import { Icon } from '../../row_renderers/utils'
import MissingQueryResultsWarning from '../../MissingQueryResultsWarning'
import { Cavatica } from '../../../assets/icons/Cavatica'
import { RowSelectionControls } from '../RowSelection/RowSelectionControls'
import SendToCavaticaConfirmationDialog from '../SendToCavaticaConfirmationDialog'
import {
  getNumberOfResultsToInvokeAction,
  getNumberOfResultsToInvokeActionCopy,
} from './TopLevelControlsUtils'

export type TopLevelControlsProps = {
  name?: string
  hideDownload?: boolean
  hideVisualizationsControl?: boolean
  hideFacetFilterControl?: boolean
  hideQueryCount?: boolean
  hideSqlEditorControl?: boolean
  showColumnSelection?: boolean
  customControls?: CustomControl[]
  showExportToCavatica?: boolean
  cavaticaHelpURL?: string
}

export type Control = {
  key: string
  icon: string
  tooltipText: string
}

export type CustomControlCallbackData = {
  data: QueryResultBundle | undefined
  selectedRows: Row[] | undefined
  refresh: () => void
}

export type CustomControl = {
  buttonText: string
  onClick: (event: CustomControlCallbackData) => void
  classNames?: string
  icon?: React.ReactNode
}

const TopLevelControls = (props: TopLevelControlsProps) => {
  const {
    name,
    showColumnSelection = false,
    hideDownload = false,
    hideVisualizationsControl = false,
    hideFacetFilterControl = false,
    hideQueryCount = false,
    hideSqlEditorControl = true,
    customControls,
    showExportToCavatica = false,
    cavaticaHelpURL,
  } = props

  const {
    data,
    entity,
    getInitQueryRequest,
    lockedColumn,
    hasResettableFilters,
  } = useQueryContext()

  const {
    setShowSearchBar,
    columnsToShowInTable,
    isRowSelectionVisible,
    selectedRows,
    setColumnsToShowInTable,
    setIsShowingExportToCavaticaModal,
    unitDescription,
    setShowDownloadConfirmation,
    showCopyToClipboard,
    setShowFacetVisualization,
    setShowSqlEditor,
    showFacetFilter,
    setShowFacetFilter,
  } = useQueryVisualizationContext()

  const [hasRecentlyCopiedToClipboard, setHasRecentlyCopiedToClipboard] =
    useState(false)

  /**
   * We show the total number of results that would be shown if the user removed their filters.
   * To do this, we have to create a query that captures those results.
   */
  const unfilteredResultsQuery: Query = useMemo(() => {
    const initQueryRequest = getInitQueryRequest()
    return {
      sql: initQueryRequest.query.sql,
      selectedFacets: (initQueryRequest.query.selectedFacets ?? []).filter(
        facet => facet.columnName === lockedColumn?.columnName,
      ),
      additionalFilters: (
        initQueryRequest.query.additionalFilters ?? []
      ).filter(qf =>
        'columnName' in qf
          ? qf['columnName'] === lockedColumn?.columnName
          : true,
      ),
    }
  }, [getInitQueryRequest, lockedColumn?.columnName])

  /**
   * Handles the toggle of a column select, this will cause the table to
   * either show the column or hide depending on the prior state of the column
   *
   * @memberof SynapseTable
   */
  const toggleColumnSelection = (columnName: string) => {
    let columnsToShowInTableCopy = cloneDeep(columnsToShowInTable)
    if (columnsToShowInTableCopy.includes(columnName)) {
      columnsToShowInTableCopy = columnsToShowInTableCopy.filter(
        el => el !== columnName,
      )
    } else {
      columnsToShowInTableCopy.push(columnName)
    }
    setColumnsToShowInTable(columnsToShowInTableCopy)
  }
  const hasSelectedRows = isRowSelectionVisible && selectedRows.length > 0
  const numberOfResultsToInvokeAction = getNumberOfResultsToInvokeAction(
    isRowSelectionVisible,
    selectedRows,
    data,
  )
  const numberOfResultsToInvokeActionAsText =
    getNumberOfResultsToInvokeActionCopy(
      hasResettableFilters,
      isRowSelectionVisible,
      selectedRows,
      data,
      unitDescription,
    )
  return (
    <div className={`TopLevelControls`} data-testid="TopLevelControls">
      <div>
        <div className="TopLevelControls__querycount">
          {name && (
            <>
              <Typography variant="sectionTitle" role="heading">
                {name}{' '}
                {!hideQueryCount && (
                  <QueryCount query={unfilteredResultsQuery} parens={true} />
                )}
              </Typography>
              {!hideQueryCount && entity && (
                <MissingQueryResultsWarning entity={entity} />
              )}
            </>
          )}
          {!hideFacetFilterControl && (
            <a
              onClick={() => setShowFacetFilter(value => !value)}
              className="TopLevelControls__querycount__facetFilterLink SRC-no-underline-on-hover"
            >
              <Icon type={showFacetFilter ? 'close' : 'filter'}></Icon>
              <span className="TopLevelControls__querycount__facetFilterLink__text">
                {showFacetFilter ? 'Hide' : 'Show'} filters
              </span>
            </a>
          )}
        </div>
        <div className="TopLevelControls__actions">
          {showExportToCavatica && (
            <>
              <Tooltip
                title={
                  <>
                    This action will send a reference to{' '}
                    {hasSelectedRows
                      ? 'each selected file'
                      : 'every file in the current table'}{' '}
                    to CAVATICA.{' '}
                    {!hasSelectedRows && showFacetFilter && (
                      <>
                        You can change what is sent by applying filters using
                        the controls in the sidebar.
                      </>
                    )}
                    {hasSelectedRows && (
                      <>
                        You can change what is sent by selecting a different set
                        of files.
                      </>
                    )}
                  </>
                }
              >
                <Button
                  variant="text"
                  disabled={!numberOfResultsToInvokeAction}
                  onClick={() => {
                    setIsShowingExportToCavaticaModal(true)
                  }}
                  startIcon={<Cavatica />}
                >
                  Send {numberOfResultsToInvokeActionAsText} to CAVATICA
                </Button>
              </Tooltip>
              <Divider orientation="vertical" variant="middle" flexItem />
            </>
          )}
          <ElementWithTooltip
            tooltipText={'Show / Hide Search Bar'}
            callbackFn={() => setShowSearchBar(value => !value)}
            darkTheme={true}
            icon={'search'}
          />
          {showCopyToClipboard && (
            <ElementWithTooltip
              tooltipText={
                hasRecentlyCopiedToClipboard
                  ? 'Copied to clipboard'
                  : 'Copy this search to the clipboard'
              }
              callbackFn={() => {
                navigator.clipboard.writeText(window.location.href)
                setHasRecentlyCopiedToClipboard(true)
                setTimeout(() => {
                  setHasRecentlyCopiedToClipboard(false)
                }, 3000)
              }}
              darkTheme={true}
              icon={'clipboard'}
            />
          )}
          {!hideVisualizationsControl && (
            <ElementWithTooltip
              tooltipText={'Show / Hide Visualizations'}
              callbackFn={() => setShowFacetVisualization(value => !value)}
              darkTheme={true}
              icon={'chart'}
            />
          )}
          {!hideDownload && (
            <DownloadOptions
              darkTheme={true}
              onDownloadFiles={() => setShowDownloadConfirmation(true)}
            />
          )}

          {!hideSqlEditorControl && (
            <ElementWithTooltip
              tooltipText={'Show / Hide the Advanced Query Editor'}
              callbackFn={() => setShowSqlEditor(value => !value)}
              darkTheme={true}
              icon={SQL_EDITOR}
            />
          )}

          {isRowSelectionVisible && (
            <RowSelectionControls
              customControls={customControls}
              showExportToCavatica={showExportToCavatica}
            />
          )}
          {showColumnSelection && (
            <ColumnSelection
              headers={data?.selectColumns}
              isColumnSelected={columnsToShowInTable}
              toggleColumnSelection={toggleColumnSelection}
              darkTheme={true}
            />
          )}
          <SendToCavaticaConfirmationDialog cavaticaHelpURL={cavaticaHelpURL} />
        </div>
      </div>
    </div>
  )
}

export default TopLevelControls
