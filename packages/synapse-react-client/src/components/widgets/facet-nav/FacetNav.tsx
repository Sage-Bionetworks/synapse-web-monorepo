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
import { UiPlotState, PlotIdentifier } from '../../Plot/PlotsContainer'
/*
TODO: This component has a few bugs when its props are updated with new data, this should be handled
at some point. As of the moment the portal doesn't have a case when the props will update,
it will always mount this component.
*/

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

// type UiPlotState = {
//   plotId: UniqueFacetIdentifier
//   isHidden: boolean
//   plotType: PlotType
//   index?: number
// }

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

const FacetNav: React.FunctionComponent<FacetNavProps> = (
  props: FacetNavProps,
): JSX.Element => {
  const {
    facet,
    facetUiStateArray,
    setFacetUiStateArray,
    facetsToPlot,
    hidePlotInGrid,
    setPlotType,
    getPlotType,
    plotMatchesDefinition,
  } = props
  const { getCurrentQueryRequest, executeQueryRequest, error } =
    useQueryContext()
  const data = useAtomValue(tableQueryDataAtom)

  const lastQueryRequest = getCurrentQueryRequest()

  const facets = useMemo(
    () => getFacets(data, facetsToPlot),
    [data, facetsToPlot],
  )

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

  // hides facet graph
  // const hideFacetInGrid = (facet: UniqueFacetIdentifier) => {
  //   setUiPropertyForFacet(facet, 'isHidden', true)
  // }

  // const setPlotType = (facet: UniqueFacetIdentifier, plotType: PlotType) => {
  //   setUiPropertyForFacet(facet, 'plotType', plotType)
  // }

  // const getPlotType = (facet: UniqueFacetIdentifier): PlotType => {
  //   const plotType = facetUiStateArray.find(item =>
  //     facetObjectMatchesDefinition(facet, item.plotId),
  //   )?.plotType
  //   return plotType ?? 'PIE'
  // }

  // const setUiPropertyForFacet = (
  //   facet: UniqueFacetIdentifier,
  //   propName: keyof UiPlotState,
  //   value: boolean | PlotType, // 'the possible values of the above type' (currently can't be specified in TS using symbols)
  // ) => {
  //   setFacetUiStateArray(facetUiStateArray =>
  //     facetUiStateArray.map(item =>
  //       facetObjectMatchesDefinition(facet, item.plot)
  //         ? { ...item, [propName]: value }
  //         : item,
  //     ),
  //   )
  // }

  const colorTracker: { facet: UniqueFacetIdentifier; colorIndex: number }[] =
    getFacets(data, facetsToPlot).map((el, index) => {
      return {
        facet: { columnName: el.columnName, jsonPath: el.jsonPath },
        colorIndex: index,
      }
    })

  return (
    <FacetNavPanel
      // plot related
      index={
        colorTracker.find(el => plotMatchesDefinition(el.facet, facet))
          ?.colorIndex!
      }
      onHide={() => hidePlotInGrid(facet)}
      // plot related
      plotType={getPlotType(facet)}
      // plot related
      onSetPlotType={(plotType: PlotType) => setPlotType(facet, plotType)}
      // facet related
      facetToPlot={facet as FacetColumnResultValues}
      /*
        TODO: Simplify the nested functions below, all the logic should be contained
        in the EnumFacetFilter component.
      */
      // facet related
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
      // plot related
      isModalView={false}
    />
  )
}

export default FacetNav
