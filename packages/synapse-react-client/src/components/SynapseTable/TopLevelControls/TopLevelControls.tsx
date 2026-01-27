import React from 'react'
import { useGetEntity } from '@/synapse-queries'
import { SQL_EDITOR } from '@/utils/SynapseConstants'
import { Button, Divider, Tooltip, Typography } from '@mui/material'
import {
  Query,
  QueryBundleRequest,
  QueryResultBundle,
  Row,
  Table,
} from '@sage-bionetworks/synapse-types'
import { useAtomValue } from 'jotai'
import { cloneDeep } from 'lodash-es'
import { ReactNode, useMemo, useState } from 'react'
import IconSvg from '../../IconSvg'
import MissingQueryResultsWarning from '../../MissingQueryResultsWarning/MissingQueryResultsWarning'
import { useQueryContext } from '../../QueryContext'
import QueryCount from '../../QueryCount/QueryCount'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import {
  isRowSelectionVisibleAtom,
  useHasSelectedRowsAtomValue,
  useSelectedRowsAtomValue,
} from '../../QueryWrapper/TableRowSelectionState'
import { useGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import { ElementWithTooltip } from '../../widgets/ElementWithTooltip'
import ExportToAnalysisPlatformDialog from '../export/ExportToAnalysisPlatformDialog'
import { RowSelectionControls } from '../RowSelection/RowSelectionControls'
import { ColumnSelection, DownloadOptions } from '../table-top'
import {
  getNumberOfResultsToInvokeAction,
  getNumberOfResultsToInvokeActionCopy,
} from './TopLevelControlsUtils'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'
import { CustomControlButton } from '../CustomControls/CustomControlButton'

const SEND_TO_ANALYSIS_PLATFORM_BUTTON_ID =
  'SendToAnalysisPlatformTopLevelControlButton'

export type TopLevelControlsProps = {
  name?: string
  hideDownload?: boolean
  hideVisualizationsControl?: boolean
  hideFacetFilterControl?: boolean
  hideQueryCount?: boolean
  hideSqlEditorControl?: boolean
  customControls?: CustomControl[]
  showColumnSelection?: boolean
  cavaticaConnectAccountURL?: string
  remount?: () => void
}

export type Control = {
  key: string
  icon: string
  tooltipText: string
}

export type CustomControlCallbackData = {
  tableId: string
  queryMetadata: Omit<QueryResultBundle, 'queryResult'> | undefined
  selectedRows: Row[] | undefined
  refresh: () => void
  request?: QueryBundleRequest
}

// note, all custom controls should check for selected rows in the event (to support row selection)
export type CustomControl = {
  buttonText: string
  onClick: (event: CustomControlCallbackData) => void
  classNames?: string
  icon?: ReactNode
  buttonID?: string // optionally set the ID property of the element
  title?: string // optionally set the title for the custom control
  description?: string // optionally set the description for the custom control
}

const TopLevelControls = (props: TopLevelControlsProps): React.ReactNode => {
  const {
    name,
    showColumnSelection = false,
    hideDownload = false,
    hideVisualizationsControl = false,
    hideFacetFilterControl = false,
    hideQueryCount = false,
    hideSqlEditorControl = true,
    customControls,
    cavaticaConnectAccountURL,
    remount,
  } = props

  const {
    entityId,
    versionNumber,
    getInitQueryRequest,
    getCurrentQueryRequest,
    hasResettableFilters,
  } = useQueryContext()
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useGetQueryMetadata()
  const { lockedColumn } = useQueryContext()
  const isRowSelectionVisible = useAtomValue(isRowSelectionVisibleAtom)
  const selectedRows = useSelectedRowsAtomValue()
  const hasSelectedRows = useHasSelectedRowsAtomValue()

  const {
    setShowSearchBar,
    columnsToShowInTable,
    setColumnsToShowInTable,
    enabledExternalAnalysisPlatforms,
    setIsShowingExportToAnalysisPlatformModal,
    unitDescription,
    setShowDownloadConfirmation,
    showCopyToClipboard,
    hideSearchBarControl,
    setShowPlots,
    setShowSqlEditor,
    showFacetFilter,
    setShowFacetFilter,
  } = useQueryVisualizationContext()

  const showExportToAnalysisPlatformButton =
    enabledExternalAnalysisPlatforms.length > 0

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

  const numberOfResultsToInvokeAction = getNumberOfResultsToInvokeAction(
    hasSelectedRows,
    selectedRows,
    queryMetadata?.queryCount,
  )
  const numberOfResultsToInvokeActionAsText =
    getNumberOfResultsToInvokeActionCopy(
      hasResettableFilters,
      hasSelectedRows,
      selectedRows,
      queryMetadata?.queryCount,
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
            <Button
              variant={'text'}
              onClick={() => setShowFacetFilter(value => !value)}
              startIcon={
                <IconSvg
                  icon={showFacetFilter ? 'close' : 'filter'}
                  wrap={false}
                />
              }
              sx={{
                ml: 2,
                fontWeight: 400,
                fontSize: '14px',
                textDecoration: 'none !important',
              }}
            >
              {showFacetFilter ? 'Hide' : 'Show'} filters
            </Button>
          )}
        </div>
        <div className="TopLevelControls__actions">
          {showExportToAnalysisPlatformButton && (
            <>
              <Tooltip
                title={
                  <>
                    This action will send a reference to{' '}
                    {hasSelectedRows
                      ? 'each selected file'
                      : 'every file in the current table'}{' '}
                    to a chosen external analysis platform.{' '}
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
                    setIsShowingExportToAnalysisPlatformModal(true)
                  }}
                  id={SEND_TO_ANALYSIS_PLATFORM_BUTTON_ID}
                >
                  Send {numberOfResultsToInvokeActionAsText} to Analysis
                  Platform
                </Button>
              </Tooltip>
              <Divider orientation="vertical" variant="middle" flexItem />
            </>
          )}
          {!hideSearchBarControl && (
            <ElementWithTooltip
              tooltipText={'Show / Hide Search Bar'}
              callbackFn={() => setShowSearchBar(value => !value)}
              darkTheme={true}
              icon={'search'}
            />
          )}
          {showCopyToClipboard && (
            <ElementWithTooltip
              tooltipText={
                hasRecentlyCopiedToClipboard
                  ? 'Copied to clipboard'
                  : 'Copy this search to the clipboard'
              }
              callbackFn={() => {
                copyStringToClipboard(window.location.href).then(() => {
                  setHasRecentlyCopiedToClipboard(true)
                  setTimeout(() => {
                    setHasRecentlyCopiedToClipboard(false)
                  }, 3000)
                })
              }}
              darkTheme={true}
              icon={'clipboard'}
            />
          )}
          {!hideVisualizationsControl && (
            <ElementWithTooltip
              tooltipText={'Show / Hide Visualizations'}
              callbackFn={() => setShowPlots(value => !value)}
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
              remount={remount}
            />
          )}
          {!isRowSelectionVisible &&
            customControls &&
            customControls.length > 0 && (
              <>
                {customControls.map(customControl => {
                  return (
                    <CustomControlButton
                      key={customControl.buttonText}
                      variant="text"
                      callbackData={{
                        tableId: entityId!,
                        queryMetadata: queryMetadata,
                        selectedRows,
                        refresh: () => {
                          if (remount) {
                            remount()
                          }
                        },
                        request: getCurrentQueryRequest(),
                      }}
                      control={customControl}
                      startIcon={customControl.icon}
                    />
                  )
                })}
              </>
            )}
          {showColumnSelection && (
            <ColumnSelection
              headers={queryMetadata?.selectColumns}
              isColumnSelected={columnsToShowInTable}
              toggleColumnSelection={toggleColumnSelection}
              darkTheme={true}
            />
          )}
          <ExportToAnalysisPlatformDialog
            platformInstructionProps={{
              cavaticaConnectAccountURL: cavaticaConnectAccountURL,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default TopLevelControls
