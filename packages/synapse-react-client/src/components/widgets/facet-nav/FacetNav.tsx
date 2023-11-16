import React, { useEffect, useMemo, useState } from 'react'
import {
  facetObjectMatchesDefinition,
  isSingleNotSetValue,
} from '../../../utils/functions/queryUtils'
import {
  FacetColumnRequest,
  FacetColumnResult,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { useQueryContext } from '../../QueryContext/QueryContext'
import { applyChangesToValuesColumn } from '../query-filter/FacetFilterControls'
import FacetNavPanel, { PlotType } from './FacetNavPanel'
import TotalQueryResults from '../../TotalQueryResults'
import { Box, Button } from '@mui/material'
import { useAtomValue } from 'jotai'
import {
  isLoadingNewBundleAtom,
  tableQueryDataAtom,
} from '../../QueryWrapper/QueryWrapper'
import { UniqueFacetIdentifier } from '../../../utils/types/UniqueFacetIdentifier'

/*
TODO: This component has a few bugs when its props are updated with new data, this should be handled
at some point. As of the moment the portal doesn't have a case when the props will update,
it will always mount this component.
*/

export type FacetNavProps = {
  facetsToPlot?: string[]
}

type UiFacetState = {
  facet: UniqueFacetIdentifier
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
  const { getCurrentQueryRequest, executeQueryRequest, error } =
    useQueryContext()
  const data = useAtomValue(tableQueryDataAtom)
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)
  const { showFacetVisualization } = useQueryVisualizationContext()
  const [facetUiStateArray, setFacetUiStateArray] = useState<UiFacetState[]>([])

  const lastQueryRequest = getCurrentQueryRequest()
  const facets = useMemo(
    () => getFacets(data, facetsToPlot),
    [data, facetsToPlot],
  )

  useEffect(() => {
    if (facets.length > 0 && facetUiStateArray.length === 0) {
      setFacetUiStateArray(
        facets.map((item, index) => ({
          facet: { columnName: item.columnName, jsonPath: item.jsonPath },
          isHidden: index >= DEFAULT_VISIBLE_FACETS,
          plotType: 'PIE',
        })),
      )
    }
  }, [facetUiStateArray.length, facets])

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
    executeQueryRequest(
      lastQueryRequest => {
        lastQueryRequest.query.selectedFacets = facets
        lastQueryRequest.query.offset = 0
        return lastQueryRequest
      },
      { debounce: true },
    )
  }

  // don't show hidden facets
  const isFacetHiddenInGrid = (facet: UniqueFacetIdentifier) => {
    const itemHidden = facetUiStateArray.find(
      item =>
        facetObjectMatchesDefinition(facet, item.facet) &&
        item.isHidden === true,
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
  const hideFacetInGrid = (facet: UniqueFacetIdentifier) => {
    setUiPropertyForFacet(facet, 'isHidden', true)
  }

  const setPlotType = (facet: UniqueFacetIdentifier, plotType: PlotType) => {
    setUiPropertyForFacet(facet, 'plotType', plotType)
  }

  const getPlotType = (facet: UniqueFacetIdentifier): PlotType => {
    const plotType = facetUiStateArray.find(item =>
      facetObjectMatchesDefinition(facet, item.facet),
    )?.plotType
    return plotType ?? 'PIE'
  }

  const setUiPropertyForFacet = (
    facet: UniqueFacetIdentifier,
    propName: keyof UiFacetState,
    value: boolean | PlotType, // 'the possible values of the above type' (currently can't be specified in TS using symbols)
  ) => {
    setFacetUiStateArray(facetUiStateArray =>
      facetUiStateArray.map(item =>
        facetObjectMatchesDefinition(facet, item.facet)
          ? { ...item, [propName]: value }
          : item,
      ),
    )
  }

  const colorTracker: { facet: UniqueFacetIdentifier; colorIndex: number }[] =
    getFacets(data, facetsToPlot).map((el, index) => {
      return {
        facet: { columnName: el.columnName, jsonPath: el.jsonPath },
        colorIndex: index,
      }
    })
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
        {facets.length > 0 && (
          <div
            className={`FacetNav ${showFacetVisualization ? '' : 'hidden'} ${
              showMoreButtonState === 'LESS' ? 'less' : ''
            }`}
          >
            <div className="FacetNav__row" role="list">
              {facets.map(facet => (
                <div
                  style={{
                    minWidth: '435px',
                    display: isFacetHiddenInGrid(facet) ? 'none' : 'block',
                  }}
                  key={`${facet.columnName}-${facet.jsonPath}`}
                >
                  <FacetNavPanel
                    index={
                      colorTracker.find(el =>
                        facetObjectMatchesDefinition(el.facet, facet),
                      )?.colorIndex!
                    }
                    onHide={() => hideFacetInGrid(facet)}
                    plotType={getPlotType(facet)}
                    onSetPlotType={(plotType: PlotType) =>
                      setPlotType(facet, plotType)
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

export default FacetNav
