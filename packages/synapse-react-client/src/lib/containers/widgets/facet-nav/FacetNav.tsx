import React, { useEffect, useMemo, useState } from 'react'
import { isSingleNotSetValue } from '../../../utils/functions/queryUtils'
import {
  FacetColumnRequest,
  FacetColumnResult,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  QueryResultBundle,
} from '../../../utils/synapseTypes'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
  useQueryContext,
} from '../../QueryContext'
import { applyChangesToValuesColumn } from '../query-filter/FacetFilterControls'
import FacetNavPanel, { PlotType } from './FacetNavPanel'
import TotalQueryResults from '../../TotalQueryResults'
import WideButton from '../../../components/styled/WideButton'

/*
TODO: This component has a few bugs when its props are updated with new data, this should be handled
at some point. As of the moment the portal doesn't have a case when the props will update,
it will always mount this component.
*/

export type FacetNavProps = {
  facetsToPlot?: string[]
}

type UiFacetState = {
  name: string
  isHidden: boolean
  plotType: PlotType
  index?: number
}

const DEFAULT_VISIBLE_FACETS = 2

type ShowMoreState = 'MORE' | 'LESS' | 'NONE'

export function getFacets(
  data: QueryResultBundle | undefined,
  facetsToPlot?: string[],
): FacetColumnResult[] {
  const result =
    data?.facets?.filter(item => {
      const isFacetToPlot =
        item.facetType === 'enumeration' &&
        (!facetsToPlot?.length || facetsToPlot.indexOf(item.columnName) > -1)
      // PORTALS-1993: only plot if the facet has count data
      return (
        isFacetToPlot &&
        item.facetValues.length > 0 &&
        !isSingleNotSetValue(item)
      )
    }) ?? []
  return result
}

const FacetNav: React.FunctionComponent<FacetNavProps> = ({
  facetsToPlot,
}: FacetNavProps): JSX.Element => {
  const {
    data,
    getLastQueryRequest,
    isLoadingNewBundle,
    executeQueryRequest,
    error,
    asyncJobStatus,
  } = useQueryContext()

  const { topLevelControlsState } = useQueryVisualizationContext()
  const [facetUiStateArray, setFacetUiStateArray] = useState<UiFacetState[]>([])
  const [isFirstTime, setIsFirstTime] = useState(true)
  const { showFacetVisualization, showFacetFilter } = topLevelControlsState

  const lastQueryRequest = getLastQueryRequest()

  useEffect(() => {
    const result = getFacets(data, facetsToPlot)
    if (result.length === 0) {
      return
    }
    if (isFirstTime) {
      setFacetUiStateArray(
        result.map((item, index) => ({
          name: item.columnName,
          isHidden: index >= DEFAULT_VISIBLE_FACETS,
          plotType: 'PIE',
        })),
      )
      setIsFirstTime(false)
    }
  }, [data, isFirstTime, facetsToPlot])

  // when 'show more/less' is clicked
  const onShowMoreClick = (shouldShowMore: boolean) => {
    setFacetUiStateArray(facetUiStateArray => {
      return facetUiStateArray.map((item, index) => {
        if (shouldShowMore) {
          // show everything
          return { ...item, isHidden: false }
        }
        // otherwise hide everything except the first three items
        return { ...item, isHidden: index >= DEFAULT_VISIBLE_FACETS }
      })
    })
  }

  // what needs to happen after the filters are adjusted from the plot
  const applyChangesFromQueryFilter = (facets: FacetColumnRequest[]) => {
    lastQueryRequest.query.selectedFacets = facets
    lastQueryRequest.query.offset = 0
    executeQueryRequest(lastQueryRequest)
  }

  // don't show hidden facets
  const isFacetHiddenInGrid = (columnName: string) => {
    const itemHidden = facetUiStateArray.find(
      item => item.name === columnName && item.isHidden === true,
    )
    const result = itemHidden !== undefined
    return result
  }

  const showMoreButtonState = useMemo<ShowMoreState>(() => {
    if (
      // if at least one item is hidden
      facetUiStateArray.find(item => item.isHidden === true)
    ) {
      return 'MORE'
    } else if (facetUiStateArray.length <= DEFAULT_VISIBLE_FACETS) {
      return 'NONE'
    } else {
      return 'LESS'
    }
  }, [facetUiStateArray])

  // hides facet graph
  const hideFacetInGrid = (columnName: string) => {
    setUiPropertyForFacet(columnName, 'isHidden', true)
  }

  const setPlotType = (columnName: string, plotType: PlotType) => {
    setUiPropertyForFacet(columnName, 'plotType', plotType)
  }

  const getPlotType = (columnName: string): PlotType => {
    const plotType = facetUiStateArray.find(
      item => item.name === columnName,
    )?.plotType
    return plotType ?? 'PIE'
  }

  const setUiPropertyForFacet = (
    columnName: string,
    propName: keyof UiFacetState,
    value: boolean | PlotType, // 'the possible values of the above type' (currently can't be specified in TS using symbols)
  ) => {
    setFacetUiStateArray(facetUiStateArray =>
      facetUiStateArray.map(item =>
        item.name === columnName ? { ...item, [propName]: value } : item,
      ),
    )
  }

  const facets = getFacets(data, facetsToPlot)

  const colorTracker = getFacets(data, facetsToPlot).map((el, index) => {
    return {
      columnName: el.columnName,
      colorIndex: index,
    }
  })
  const hasFacetsOrFilters =
    (lastQueryRequest?.query.selectedFacets !== undefined &&
      lastQueryRequest.query.selectedFacets.length > 0) ||
    (lastQueryRequest?.query.additionalFilters !== undefined &&
      lastQueryRequest?.query.additionalFilters.length > 0)
  if (error) {
    return <></>
  } else if (!data && isLoadingNewBundle) {
    return (
      <div className="SRC-loadingContainer SRC-centerContentColumn">
        {asyncJobStatus?.progressMessage && (
          <div>
            <span className="spinner" />
            {asyncJobStatus.progressMessage}
          </div>
        )}
      </div>
    )
  } else {
    return (
      <>
        <TotalQueryResults
          frontText={''}
          endText={hasFacetsOrFilters ? 'filtered by' : ''}
          hideIfUnfiltered={true}
        />
        {facets.length > 0 && (
          <div
            className={`FacetNav ${showFacetVisualization ? '' : 'hidden'} ${
              showFacetFilter
                ? QUERY_FILTERS_EXPANDED_CSS
                : QUERY_FILTERS_COLLAPSED_CSS
            } ${showMoreButtonState === 'LESS' ? 'less' : ''}`}
          >
            <div className="FacetNav__row" role="list">
              {facets.map(facet => (
                <div
                  className="col-sm-12 col-md-4"
                  style={{
                    display: isFacetHiddenInGrid(facet.columnName)
                      ? 'none'
                      : 'block',
                  }}
                  key={facet.columnName}
                >
                  <FacetNavPanel
                    index={
                      colorTracker.find(
                        el => el.columnName === facet.columnName,
                      )?.colorIndex!
                    }
                    onHide={() => hideFacetInGrid(facet.columnName)}
                    plotType={getPlotType(facet.columnName)}
                    onSetPlotType={(plotType: PlotType) =>
                      setPlotType(facet.columnName, plotType)
                    }
                    facetToPlot={facet as FacetColumnResultValues}
                    /*
                      TODO: Simplify the nested functions below, all the logic should be contained
                      in the EnumFacetFilter component.
                    */
                    applyChangesToFacetFilter={applyChangesFromQueryFilter}
                    applyChangesToGraphSlice={(
                      facet: FacetColumnResultValues,
                      value: FacetColumnResultValueCount | undefined,
                      isSelected: boolean,
                    ) =>
                      applyChangesToValuesColumn(
                        lastQueryRequest,
                        facet,
                        applyChangesFromQueryFilter,
                        value?.value,
                        isSelected,
                      )
                    }
                    isModalView={false}
                  />
                </div>
              ))}
            </div>
            {showMoreButtonState !== 'NONE' && (
              <div className="FacetNav__showMoreContainer">
                <WideButton
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    onShowMoreClick(showMoreButtonState === 'MORE')
                  }
                  sx={{ width: '250px' }}
                >
                  {showMoreButtonState === 'LESS'
                    ? 'Hide Charts'
                    : 'View All Charts'}
                </WideButton>
              </div>
            )}
          </div>
        )}
      </>
    )
  }
}

export default FacetNav
