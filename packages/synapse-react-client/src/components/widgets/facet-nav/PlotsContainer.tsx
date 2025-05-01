import { UniqueFacetIdentifier } from '@/utils'
import { facetObjectMatchesDefinition } from '@/utils/functions/queryUtils'
import { Box, Button } from '@mui/material'
import type { PlotType as PlotlyPlotType } from 'plotly.js-basic-dist'
import { Suspense, useEffect, useMemo, useState } from 'react'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { useSuspenseGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import QueryWrapperSynapsePlot, {
  QueryWrapperSynapsePlotProps,
} from '../../QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import FacetNavPanel, {
  FacetNavPanelProps,
  PlotType,
} from '../facet-nav/FacetNavPanel'
import { PlotsContainerSkeleton } from './PlotsContainerSkeleton'
import useFacetPlots, { getFacets } from './useFacetPlots'

const DEFAULT_VISIBLE_PLOTS = 2
type ShowMoreState = 'MORE' | 'LESS' | 'NONE'
export type PlotsContainerProps = {
  facetsToPlot?: string[]
  customPlots?: QueryWrapperSynapsePlotProps[]
  initialPlotType?: PlotType
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

const generatePlotKey = (plotUiState: UiPlotState) => {
  if ('__custom' in plotUiState.plotId) {
    // For custom plots
    return `custom-${plotUiState.plotId.title}`
  } else {
    // For facet plots
    return `facet-${plotUiState.plotId.columnName}-${plotUiState.plotId.jsonPath}`
  }
}

const isPlotInState = (
  plotId: PlotIdentifier,
  plotUiStateArray: UiPlotState[],
): boolean => {
  return !!plotUiStateArray.find(plot => {
    return plotMatchesDefinition(plot.plotId, plotId)
  })
}

const getCustomPlotIdentifier = (
  customPlot: QueryWrapperSynapsePlotProps,
): PlotIdentifier => {
  return { __custom: true, title: customPlot.title ?? '' }
}

const getCombinedNewPlots = (
  customPlots: QueryWrapperSynapsePlotProps[] = [],
  facetNavPanelPropsArray: Pick<
    FacetNavPanelProps,
    'applyChangesToFacetFilter' | 'applyChangesToGraphSlice' | 'facetToPlot'
  >[] = [],
  initialPlotType: PlotType = DEFAULT_PLOT_TYPE,
): UiPlotState[] => [
  ...customPlots.map((plotProps, index) => ({
    plotId: getCustomPlotIdentifier(plotProps),
    isHidden: index >= DEFAULT_VISIBLE_PLOTS,
    plotType: convertPlotlyPlotTypeToFacetNavPlotType(plotProps.type),
  })),
  ...facetNavPanelPropsArray.map((facetPlotProps, index) => ({
    plotId: facetPlotProps.facetToPlot,
    isHidden: index + customPlots.length >= DEFAULT_VISIBLE_PLOTS,
    plotType: initialPlotType,
  })),
]

// Remove plots that are no longer in props from prevPlots
const isPlotStillPresent = (
  prevPlot: UiPlotState,
  customPlots: QueryWrapperSynapsePlotProps[],
  facetNavPanelProps: Pick<
    FacetNavPanelProps,
    'applyChangesToFacetFilter' | 'applyChangesToGraphSlice' | 'facetToPlot'
  >[],
): boolean => {
  return (
    customPlots.some(customPlot =>
      plotMatchesDefinition(
        getCustomPlotIdentifier(customPlot),
        prevPlot.plotId,
      ),
    ) ||
    facetNavPanelProps.some(facetPlot =>
      plotMatchesDefinition(facetPlot.facetToPlot, prevPlot.plotId),
    )
  )
} // fn returns true iff the plot id is in customPlots or facetNavPanelPropsArray

const DEFAULT_PLOT_TYPE: PlotType = 'PIE'

const DEFAULT_FACETS_TO_PLOT: string[] = []
const DEFAULT_CUSTOM_PLOTS: QueryWrapperSynapsePlotProps[] = []

function PlotsContainer(props: PlotsContainerProps) {
  const {
    facetsToPlot = DEFAULT_FACETS_TO_PLOT,
    customPlots = DEFAULT_CUSTOM_PLOTS,
    initialPlotType = DEFAULT_PLOT_TYPE,
  } = props
  const { data: queryMetadata } = useSuspenseGetQueryMetadata()
  const { showPlots: showPlotVisualization } = useQueryVisualizationContext()
  const [plotUiStateArray, setPlotUiStateArray] = useState<UiPlotState[]>([])
  const facetNavPanelPropsArray = useFacetPlots(facetsToPlot)

  const getPlotType = (plotId: PlotIdentifier): PlotType => {
    const plotType = plotUiStateArray.find(item =>
      plotMatchesDefinition(plotId, item.plotId),
    )?.plotType
    return plotType ?? DEFAULT_PLOT_TYPE
  }

  useEffect(() => {
    const combinedNewPlots = getCombinedNewPlots(
      customPlots,
      facetNavPanelPropsArray,
      initialPlotType,
    )

    // Update the state with new plots
    setPlotUiStateArray(prevPlots => {
      // Filter to only include new plots
      const newPlots = combinedNewPlots.filter(plot => {
        const inState = isPlotInState(plot.plotId, prevPlots)
        return !inState
      })

      const updatedPlots = prevPlots.filter(prevPlot =>
        isPlotStillPresent(prevPlot, customPlots, facetNavPanelPropsArray),
      )

      // Append new plots
      const combinedPlots = [...updatedPlots, ...newPlots]
      return combinedPlots
    })
  }, [customPlots, facetNavPanelPropsArray])

  // when 'show more/less' is clicked
  const onShowMoreClick = (shouldShowMore: boolean) => {
    setPlotUiStateArray(plotUiStateArray => {
      return plotUiStateArray.map((item, index) => {
        if (shouldShowMore) {
          // show everything
          return { ...item, isHidden: false }
        }
        // otherwise hide everything except the first few items
        return { ...item, isHidden: index >= DEFAULT_VISIBLE_PLOTS }
      })
    })
  }

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

  // hides plot graph
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

  const colorTracker: { facet: PlotIdentifier; colorIndex: number }[] =
    // TODO: customPlots should use the color index
    // additionally, it is unclear why this object is created
    // We can probably just pass the index from `plotUiStateArray.map)
    getFacets(queryMetadata, facetsToPlot).map((el, index) => {
      return {
        facet: { columnName: el.columnName, jsonPath: el.jsonPath },
        colorIndex: index,
      }
    })

  return (
    <>
      {plotUiStateArray.length > 0 && (
        <div
          className={`PlotsContainer ${showPlotVisualization ? '' : 'hidden'} ${
            showMoreButtonState === 'LESS' ? 'less' : ''
          }`}
        >
          <div className="PlotsContainer__row" role="list">
            {plotUiStateArray.map(plotUiState => {
              const isCustomPlot = '__custom' in plotUiState.plotId
              const customPlotProps = customPlots.find(customPlot =>
                plotMatchesDefinition(
                  getCustomPlotIdentifier(customPlot),
                  plotUiState.plotId,
                ),
              )
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
                onClick={() => onShowMoreClick(showMoreButtonState === 'MORE')}
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

export default function PlotsContainerWithSuspense(props: PlotsContainerProps) {
  const { showPlots } = useQueryVisualizationContext()
  return (
    <Suspense fallback={showPlots ? <PlotsContainerSkeleton /> : null}>
      <PlotsContainer {...props} />
    </Suspense>
  )
}
