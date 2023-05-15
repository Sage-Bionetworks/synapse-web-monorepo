import { cloneDeep } from 'lodash-es'
import React, { useMemo } from 'react'
import { SQL_EDITOR } from '../../utils/SynapseConstants'
import { Query, QueryResultBundle } from '../../utils/synapseTypes'
import {
  TopLevelControlsState,
  useQueryVisualizationContext,
} from '../QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
  useQueryContext,
} from '../QueryContext'
import { ElementWithTooltip } from '../widgets/ElementWithTooltip'
import { DownloadOptions } from './table-top'
import { ColumnSelection } from './table-top/ColumnSelection'
import { Button, Typography } from '@mui/material'
import QueryCount from '../QueryCount'
import { Icon } from '../row_renderers/utils'
import MissingQueryResultsWarning from '../MissingQueryResultsWarning'
import { useExportToCavatica } from '../../utils/hooks/SynapseAPI/entity/useExportToCavatica'
import { Cavatica } from '../../assets/icons/Cavatica'

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
}

type Control = {
  key: keyof TopLevelControlsState
  icon: string
  tooltipText: string
}

type CustomControlCallbackData = {
  data: QueryResultBundle | undefined
  selectedRowIndices: number[] | undefined
  refresh: () => void
}

type CustomControl = {
  buttonText: string
  onClick: (event: CustomControlCallbackData) => void
  classNames?: string
  icon?: string
}

const controls: Control[] = [
  {
    icon: 'search',
    key: 'showSearchBar',
    tooltipText: 'Show / Hide Search Bar',
  },
  {
    icon: 'chart',
    key: 'showFacetVisualization',
    tooltipText: 'Show / Hide Visualizations',
  },
  {
    icon: 'download',
    key: 'showDownloadConfirmation',
    tooltipText: 'Show options for download',
  },
  {
    icon: SQL_EDITOR,
    key: 'showSqlEditor',
    tooltipText: 'Show / Hide the Advanced Query Editor',
  },
]

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
  } = props

  const {
    data,
    entity,
    executeQueryRequest,
    getLastQueryRequest,
    getInitQueryRequest,
    lockedColumn,
  } = useQueryContext()
  const exportToCavatica = useExportToCavatica(
    getLastQueryRequest(),
    data?.queryResult?.queryResults.headers,
  )

  const {
    topLevelControlsState,
    setTopLevelControlsState,
    columnsToShowInTable,
    selectedRowIndices,
    setColumnsToShowInTable,
  } = useQueryVisualizationContext()

  const setControlState = (control: keyof TopLevelControlsState) => {
    const updatedTopLevelControlsState: Partial<TopLevelControlsState> = {
      [control]: !topLevelControlsState[control],
    }
    if (control === 'showSearchBar') {
      updatedTopLevelControlsState.showDownloadConfirmation = false
    }
    if (control === 'showDownloadConfirmation') {
      updatedTopLevelControlsState.showSearchBar = false
    }
    setTopLevelControlsState(state => ({
      ...state,
      ...updatedTopLevelControlsState,
    }))
  }

  const refresh = () => {
    executeQueryRequest(getLastQueryRequest())
  }

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
  const showFacetFilter = topLevelControlsState?.showFacetFilter
  return (
    <div
      className={`TopLevelControls ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
      data-testid="TopLevelControls"
    >
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
              onClick={() => setControlState('showFacetFilter')}
              className="TopLevelControls__querycount__facetFilterLink SRC-no-underline-on-hover"
            >
              <Icon
                type={
                  topLevelControlsState.showFacetFilter ? 'close' : 'filter'
                }
              ></Icon>
              <span className="TopLevelControls__querycount__facetFilterLink__text">
                {topLevelControlsState.showFacetFilter ? 'Hide' : 'Show'}{' '}
                filters
              </span>
            </a>
          )}
        </div>
        <div className="TopLevelControls__actions">
          {customControls &&
            customControls.map(customControl => {
              return (
                <button
                  key={customControl.buttonText}
                  className={`btn SRC-roundBorder SRC-primary-background-color SRC-whiteText ${
                    customControl.classNames ?? ''
                  }`}
                  style={{ marginRight: '5px' }}
                  type="button"
                  onClick={() =>
                    customControl.onClick({ data, selectedRowIndices, refresh })
                  }
                >
                  {customControl.icon}&nbsp;
                  {customControl.buttonText}
                </button>
              )
            })}
          {showExportToCavatica && (
            <Button
              variant="text"
              onClick={() => {
                exportToCavatica()
              }}
            >
              <Cavatica sx={{ mr: 1 }} /> Send to Cavatica
            </Button>
          )}
          {controls.map(control => {
            const { key, icon, tooltipText } = control
            if (
              (key === 'showDownloadConfirmation' && hideDownload) ||
              (key === 'showFacetVisualization' && hideVisualizationsControl) ||
              (key === 'showSqlEditor' && hideSqlEditorControl)
            ) {
              // needs to be a file view in order for download to make sense
              return <React.Fragment key={key}></React.Fragment>
            } else if (key === 'showDownloadConfirmation') {
              return (
                <DownloadOptions
                  key={key}
                  darkTheme={true}
                  onDownloadFiles={() => setControlState(key)}
                />
              )
            }
            return (
              <ElementWithTooltip
                tooltipText={tooltipText}
                key={key}
                callbackFn={() => setControlState(key)}
                darkTheme={true}
                icon={icon}
              />
            )
          })}
          {showColumnSelection && (
            <ColumnSelection
              headers={data?.selectColumns}
              isColumnSelected={columnsToShowInTable}
              toggleColumnSelection={toggleColumnSelection}
              darkTheme={true}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TopLevelControls
