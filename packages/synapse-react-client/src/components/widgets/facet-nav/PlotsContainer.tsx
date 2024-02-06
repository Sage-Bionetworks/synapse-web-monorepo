import { facetObjectMatchesDefinition } from '../../../utils/functions/queryUtils'
import { UniqueFacetIdentifier } from '../../../utils/types/UniqueFacetIdentifier'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import {
  tableQueryDataAtom,
  isLoadingNewBundleAtom,
} from '../../QueryWrapper/QueryWrapper'
import { QueryWrapperSynapsePlotProps } from '../../QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import React from 'react'
import { useState, useMemo, useEffect, useCallback } from 'react'
import { getFacets } from './useFacetPlots'
import FacetNavPanel, {
  FacetNavPanelProps,
  PlotType,
} from '../facet-nav/FacetNavPanel'
import { useAtomValue } from 'jotai'
import { Button, Box } from '@mui/material'
import QueryWrapperSynapsePlot from '../../QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import useFacetPlots from './useFacetPlots'
import { PlotType as PlotlyPlotType } from 'plotly.js-basic-dist'

const DEFAULT_VISIBLE_PLOTS = 2
type ShowMoreState = 'MORE' | 'LESS' | 'NONE'
export type FacetNavProps = {
  facet: UniqueFacetIdentifier
  facetsToPlot?: string[]
  facetUiStateArray: UiPlotState[]
  setFacetUiStateArray: React.Dispatch<React.SetStateAction<UiPlotState[]>>
  hidePlotInGrid: (plotId: PlotIdentifier) => void
  setPlotType: (plotId: PlotIdentifier, plotType: PlotType) => void
  getPlotType: (plotId: PlotIdentifier) => PlotType
  plotMatchesDefinition: (
    definition: PlotIdentifier,
    plotId: PlotIdentifier,
  ) => boolean
}
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

const DEFAULT_PLOT_TYPE: PlotType = 'PIE'

const DEFAULT_FACETS_TO_PLOT: string[] = []
const DEFAULT_CUSTOM_PLOTS: QueryWrapperSynapsePlotProps[] = []

export default function PlotsContainer(props: PlotsContainerProps) {
  const {
    facetsToPlot = DEFAULT_FACETS_TO_PLOT,
    customPlots = DEFAULT_CUSTOM_PLOTS,
  } = props
  const { error } = useQueryContext()
  const data = useAtomValue(tableQueryDataAtom)
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)
  const { showPlots: showPlotVisualization } = useQueryVisualizationContext()
  const [plotUiStateArray, setPlotUiStateArray] = useState<UiPlotState[]>([])
  const facetNavPanelPropsArray = useFacetPlots(facetsToPlot)

  const getPlotType = (plotId: PlotIdentifier): PlotType => {
    const plotType = plotUiStateArray.find(item =>
      plotMatchesDefinition(plotId, item.plotId),
    )?.plotType
    return plotType ?? 'PIE'
  }

  // Wrap in useCallback
  // switch to
  const isPlotInState = useCallback(
    (plotId: PlotIdentifier): boolean => {
      // plotUiStateArray.find...
      //return plotUiStateArray && plotUiStateArray.find(plotId)
      return !!plotUiStateArray.find(plot => {
        if ('__custom' in plot.plotId && '__custom' in plotId) {
          return plot.plotId.title === plotId.title
        } else if (!('__custom' in plotId) && !('__custom' in plot.plotId)) {
          return facetObjectMatchesDefinition(plot.plotId, plotId)
        } else {
          return false
        }
      })
    },
    [plotUiStateArray],
  )

  // Wrap in useCallback
  const getCombinedNewPlots = useCallback(
    (
      customPlots: QueryWrapperSynapsePlotProps[],
      facetNavPanelPropsArray: Pick<
        FacetNavPanelProps,
        'applyChangesToFacetFilter' | 'applyChangesToGraphSlice' | 'facetToPlot'
      >[],
    ): UiPlotState[] => [
      ...(customPlots ?? []).map((plotProps, index) => ({
        plotId: {
          __custom: true,
          title: plotProps.title ?? '',
        } satisfies CustomPlotIdentifier,
        isHidden: index >= DEFAULT_VISIBLE_PLOTS,
        plotType: convertPlotlyPlotTypeToFacetNavPlotType(plotProps.type),
      })),
      ...(facetNavPanelPropsArray ?? []).map((facetPlotProps, index) => ({
        plotId: facetPlotProps.facetToPlot,
        isHidden: index >= DEFAULT_VISIBLE_PLOTS,
        plotType: DEFAULT_PLOT_TYPE,
      })),
    ],
    [],
  )

  useEffect(() => {
    // const currentPlotIds = getCurrentPlotIds()
    const combinedNewPlots = getCombinedNewPlots(
      customPlots,
      facetNavPanelPropsArray,
    )

    // Filter to only include new plots
    const newPlots = combinedNewPlots.filter(plot => {
      return !isPlotInState(plot.plotId)
    })

    // Update the state with new plots
    setPlotUiStateArray(prevPlots => {
      // Remove plots that are no longer in props from prevPlots
      const isPlotStillPresent = (prevPlot: UiPlotState): boolean => {
        if ('__custom' in prevPlot.plotId && prevPlot.plotId.__custom) {
          const uniqueCustomPlot = prevPlot.plotId
          return customPlots.some(
            customPlot => customPlot.title === uniqueCustomPlot.title,
          )
        } else {
          return facetNavPanelPropsArray.some(facetPlot =>
            facetObjectMatchesDefinition(
              facetPlot.facetToPlot,
              prevPlot.plotId as UniqueFacetIdentifier,
            ),
          )
        }
      } // fn returns true iff the plot id is in customPlots or facetNavPanelPropsArray

      const updatedProps = prevPlots.filter(isPlotStillPresent)

      // Append new plots
      const combinedPlots = [...updatedProps, ...newPlots]

      // Remove duplicates
      const uniquePlots = combinedPlots.filter(
        (plot, index, self) =>
          index ===
          self.findIndex(p => {
            if ('__custom' in plot.plotId && '__custom' in p.plotId) {
              return plot.plotId.title === p.plotId.title
            } else if (
              !('__custom' in plot.plotId) &&
              !('__custom' in plot.plotId)
            ) {
              return facetObjectMatchesDefinition(
                plot.plotId,
                p.plotId as UniqueFacetIdentifier,
              )
            } else {
              return false
            }
          }),
      )
      return uniquePlots
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
    getFacets(data, facetsToPlot).map((el, index) => {
      return {
        facet: { columnName: el.columnName, jsonPath: el.jsonPath },
        colorIndex: index,
      }
    })

  if (error || (!data && isLoadingNewBundle)) {
    return <></>
  } else {
    return (
      <>
        {plotUiStateArray.length > 0 && (
          <div
            className={`PlotsContainer ${
              showPlotVisualization ? '' : 'hidden'
            } ${showMoreButtonState === 'LESS' ? 'less' : ''}`}
          >
            <div className="PlotNav__row" role="list">
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
