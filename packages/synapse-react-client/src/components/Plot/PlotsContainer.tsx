import {
  FacetColumnRequest,
  FacetColumnResultValues,
  FacetColumnResultValueCount,
} from '@sage-bionetworks/synapse-types'
import { facetObjectMatchesDefinition } from '../../utils/functions/queryUtils'
import { UniqueFacetIdentifier } from '../../utils/types/UniqueFacetIdentifier'
import { useQueryContext } from '../QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import {
  tableQueryDataAtom,
  isLoadingNewBundleAtom,
} from '../QueryWrapper/QueryWrapper'
import { QueryWrapperSynapsePlotProps } from '../QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import React from 'react'
import { useState, useMemo, useEffect } from 'react'
import TotalQueryResults from '../TotalQueryResults'
import { getFacets } from '../widgets/facet-nav/FacetNav'
import FacetNavPanel, { PlotType } from '../widgets/facet-nav/FacetNavPanel'
import { applyChangesToValuesColumn } from '../widgets/query-filter/FacetFilterControls'
import { useAtomValue } from 'jotai'
import { Button, Box } from '@mui/material'
import FacetNav from '../widgets/facet-nav/FacetNav'
import QueryWrapperSynapsePlot from '../QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import useFacetPlots from '../widgets/facet-nav/useFacetPlots'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { PlotType as PlotlyPlotType } from 'plotly.js-basic-dist'

const DEFAULT_VISIBLE_PLOTS = 2
type ShowMoreState = 'MORE' | 'LESS' | 'NONE'

export type PlotsContainerProps = {
  facetsToPlot?: string[]
  customPlots?: QueryWrapperSynapsePlotProps[]
}
type CustomPlotIdentifier = {
  title: string
  __custom: true
}
export type PlotIdentifier = UniqueFacetIdentifier | CustomPlotIdentifier

export type UiPlotState = {
  plotId: PlotIdentifier
  isHidden: boolean
  plotType: PlotType
  index?: number
}
const plotMatchesDefinition = (
  definition: PlotIdentifier,
  plotId: PlotIdentifier,
) => {
  if ('__custom' in plotId && '__custom' in definition) {
    return definition.title == plotId.title
  } else if (!('__custom' in plotId) && !('__custom' in definition)) {
    return facetObjectMatchesDefinition(definition, plotId)
  } else {
    return false
  }
}

function convertFacetNavPlotTypeToPlotlyPlotType(
  facetNavPlotType: PlotType,
): PlotlyPlotType {
  if (facetNavPlotType === 'BAR') {
    return 'bar'
  } else if (facetNavPlotType === 'PIE') {
    return 'pie'
  }
  return 'pie'
}

function convertPlotlyPlotTypeToFacetNavPlotType(
  plotlyPlotType: PlotlyPlotType,
): PlotType {
  if (plotlyPlotType === 'bar') {
    return 'BAR'
  } else if (plotlyPlotType === 'pie') {
    return 'PIE'
  }
  return 'PIE'
}

const DEFAULT_PLOT_TYPE: PlotType = 'PIE'

const DEFAULT_FACETS_TO_PLOT: string[] = []
const DEFAULT_CUSTOM_PLOTS: QueryWrapperSynapsePlotProps[] = []

export default function PlotsContainer(props: PlotsContainerProps) {
  const {
    facetsToPlot = DEFAULT_FACETS_TO_PLOT,
    customPlots = DEFAULT_CUSTOM_PLOTS,
  } = props
  const { getCurrentQueryRequest, executeQueryRequest, error } =
    useQueryContext()
  const data = useAtomValue(tableQueryDataAtom)
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)
  const { showPlotVisualization } = useQueryVisualizationContext()
  const [plotUiStateArray, setPlotUiStateArray] = useState<UiPlotState[]>([])
  const facetNavPanelPropsArray = useFacetPlots(facetsToPlot)

  const getPlotType = (plotId: PlotIdentifier): PlotType => {
    const plotType = plotUiStateArray.find(item =>
      plotMatchesDefinition(plotId, item.plotId),
    )?.plotType
    return plotType ?? 'PIE'
  }

  useEffect(() => {
    console.log('effect reinitializePlotUiStateArray ran')
    const newPlotUiStateArray: UiPlotState[] = []
    if (customPlots && customPlots.length > 0) {
      newPlotUiStateArray.push(
        ...customPlots.map(
          (plotProps): UiPlotState => ({
            plotId: {
              __custom: true,
              title: plotProps.title ?? '',
            },
            isHidden: false,
            plotType: convertPlotlyPlotTypeToFacetNavPlotType(plotProps.type),
          }),
        ),
      )
    }

    if (facetNavPanelPropsArray && facetNavPanelPropsArray.length > 0) {
      newPlotUiStateArray.push(
        ...facetNavPanelPropsArray.map(facetPlotProps => ({
          plotId: facetPlotProps.facetToPlot,
          isHidden: false,
          plotType: DEFAULT_PLOT_TYPE,
        })),
      )
    }
    setPlotUiStateArray(newPlotUiStateArray)
  }, [customPlots, facetNavPanelPropsArray])

  const lastQueryRequest = getCurrentQueryRequest()

  // when 'show more/less' is clicked
  const onShowMoreClick = (shouldShowMore: boolean) => {
    setPlotUiStateArray(plotUiStateArray => {
      return plotUiStateArray.map((item, index) => {
        if (shouldShowMore) {
          // show everything
          return { ...item, isHidden: false }
        }
        // otherwise hide everything except the first three items
        return { ...item, isHidden: index >= DEFAULT_VISIBLE_PLOTS }
      })
    })
  }

  // don't show hidden plots
  const isPlotHiddenInGrid = (plotId: PlotIdentifier) => {
    const itemHidden = plotUiStateArray.find(
      item =>
        plotMatchesDefinition(plotId, item.plotId) && item.isHidden === true,
    )
    const result = itemHidden !== undefined
    return result
  }

  const showMoreButtonState = useMemo<ShowMoreState>(() => {
    if (
      // if at least one item is hidden
      plotUiStateArray.find(item => item.isHidden === true)
    ) {
      return 'MORE'
    } else if (plotUiStateArray.length <= DEFAULT_VISIBLE_PLOTS) {
      return 'NONE'
    } else {
      return 'LESS'
    }
  }, [plotUiStateArray])

  // hides facet graph
  const hidePlotInGrid = (plotId: PlotIdentifier) => {
    setUiPropertyForPlot(plotId, 'isHidden', true)
  }

  const setPlotType = (plotId: PlotIdentifier, plotType: PlotType) => {
    setUiPropertyForPlot(plotId, 'plotType', plotType)
  }

  const setUiPropertyForPlot = (
    plotId: PlotIdentifier,
    propName: keyof UiPlotState,
    value: boolean | PlotType, // 'the possible values of the above type' (currently can't be specified in TS using symbols)
  ) => {
    setPlotUiStateArray(plotUiStateArray =>
      plotUiStateArray.map(item =>
        plotMatchesDefinition(plotId, item.plotId)
          ? { ...item, [propName]: value }
          : item,
      ),
    )
  }

  const colorTracker: { facet: UniqueFacetIdentifier; colorIndex: number }[] =
    // Todo: fix to work with customPlots
    getFacets(data, facetsToPlot).map((el, index) => {
      return {
        facet: { columnName: el.columnName, jsonPath: el.jsonPath },
        colorIndex: index,
      }
    })

  const generatePlotKey = (plotUiState: UiPlotState) => {
    if ('__custom' in plotUiState.plotId) {
      // For custom plots
      return `custom-${plotUiState.plotId.title}`
    } else {
      // For facet plots
      return `facet-${plotUiState.plotId.columnName}-${plotUiState.plotId.jsonPath}`
    }
  }

  const hasFacetsOrFilters =
    (lastQueryRequest?.query.selectedFacets !== undefined &&
      lastQueryRequest.query.selectedFacets.length > 0) ||
    (lastQueryRequest?.query.additionalFilters !== undefined &&
      lastQueryRequest?.query.additionalFilters.length > 0)
  if (error || (!data && isLoadingNewBundle)) {
    return <></>
  } else {
    return (
      <>
        <TotalQueryResults
          frontText={''}
          endText={hasFacetsOrFilters ? 'filtered by' : ''}
          hideIfUnfiltered={true}
        />
        {plotUiStateArray.length > 0 && (
          <div
            className={`FacetNav ${showPlotVisualization ? '' : 'hidden'} ${
              showMoreButtonState === 'LESS' ? 'less' : ''
            }`}
          >
            <div className="FacetNav__row" role="list">
              {/* // split into customplots array and array of facet plots and render seperately */}
              {plotUiStateArray.map(plotUiState => {
                const isCustomPlot = '__custom' in plotUiState.plotId
                const customPlotProps = isCustomPlot
                  ? customPlots?.find(
                      customPlot =>
                        customPlot.title ===
                        (plotUiState.plotId as CustomPlotIdentifier).title,
                    )
                  : undefined

                const facetNavPanelProps = facetNavPanelPropsArray.find(props =>
                  plotMatchesDefinition(props.facetToPlot, plotUiState.plotId),
                )

                return (
                  <div
                    style={{
                      minWidth: '435px',
                      display: isPlotHiddenInGrid(plotUiState.plotId)
                        ? 'none'
                        : 'block',
                    }}
                    key={generatePlotKey(plotUiState)}
                  >
                    {isCustomPlot && customPlotProps && (
                      <QueryWrapperSynapsePlot
                        {...customPlotProps}
                        onHide={() => hidePlotInGrid(plotUiState.plotId)}
                      />
                    )}
                    {!isCustomPlot && facetNavPanelProps && (
                      <FacetNavPanel
                        index={
                          colorTracker.find(el =>
                            plotMatchesDefinition(el.facet, plotUiState.plotId),
                          )?.colorIndex!
                        }
                        onHide={() => hidePlotInGrid(plotUiState.plotId)}
                        plotType={getPlotType(plotUiState.plotId)}
                        onSetPlotType={(plotType: PlotType) =>
                          setPlotType(plotUiState.plotId, plotType)
                        }
                        isModalView={false}
                        {...facetNavPanelProps}
                      />
                    )}
                  </div>
                )
              })}
            </div>
            {showMoreButtonState !== 'NONE' && (
              <Box
                display="flex"
                justifyContent="center"
                sx={{
                  backgroundColor: 'grey.100',
                  p: 2,
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    onShowMoreClick(showMoreButtonState === 'MORE')
                  }
                  sx={{ width: '150px' }}
                >
                  {showMoreButtonState === 'LESS'
                    ? 'Hide Charts'
                    : 'View All Charts'}
                </Button>
              </Box>
            )}
          </div>
        )}
      </>
    )
  }
}

// PlotsContainer.whyDidYouRender = true
