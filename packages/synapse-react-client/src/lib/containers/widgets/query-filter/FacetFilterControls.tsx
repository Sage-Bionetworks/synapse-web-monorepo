import React from 'react'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import { isSingleNotSetValue } from '../../../utils/functions/queryUtils'
import {
  QueryBundleRequest,
  FacetColumnRangeRequest,
  FacetColumnRequest,
  FacetColumnValuesRequest,
  FacetColumnResult,
  FacetColumnResultRange,
  FacetColumnResultValues,
} from '../../../utils/synapseTypes'
import { useQueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from '../../QueryWrapper'
import { EnumFacetFilter } from './EnumFacetFilter'
import { FacetChip } from './FacetChip'
import { RangeFacetFilter } from './RangeFacetFilter'

export type FacetFilterControlsProps = {
  facetsToFilter?: string[]
}

const convertFacetToFacetColumnValuesRequest = (
  facet: FacetColumnResultValues,
): FacetColumnValuesRequest => ({
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
  columnName: facet.columnName,
  facetValues: facet.facetValues
    .filter(facet => facet.isSelected)
    .map(facet => facet.value),
})

const convertFacetColumnRangeRequest = (
  facet: FacetColumnResultRange,
): FacetColumnRangeRequest => {
  let result: FacetColumnRangeRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
    columnName: facet.columnName, // The name of the faceted column
  }

  if (facet.columnMin) {
    result = { ...result, min: facet.columnMin, max: facet.columnMax }
  }
  return result
}

const patchRequestFacets = (
  changedFacet: FacetColumnRequest,
  lastRequest?: QueryBundleRequest,
): FacetColumnRequest[] => {
  const selections = lastRequest?.query?.selectedFacets ?? []
  const changedFacetIndex = selections.findIndex(
    facet => facet.columnName === changedFacet.columnName,
  )

  const isEmptyValuesFacet =
    changedFacet.concreteType ===
      'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest' &&
    (!changedFacet.facetValues || !changedFacet.facetValues.length)
  if (changedFacetIndex > -1) {
    if (isEmptyValuesFacet) {
      selections.splice(changedFacetIndex, 1)
    } else {
      selections[changedFacetIndex] = changedFacet
    }
  } else {
    selections.push(changedFacet)
  }
  return selections
}

export function applyChangesToValuesColumn(
  lastRequest: QueryBundleRequest | undefined,
  facet: FacetColumnResultValues,
  onChangeFn: (result: FacetColumnRequest[]) => void,
  facetName?: string,
  checked: boolean = false,
) {
  if (facetName) {
    facet.facetValues.forEach(facetValue => {
      if (facetValue.value === facetName) {
        facetValue.isSelected = checked
      }
    })
  } else {
    // else clear all
    facet.facetValues.forEach(facet => {
      facet.isSelected = false
    })
  }

  const changedFacet = convertFacetToFacetColumnValuesRequest(facet)
  const result = patchRequestFacets(changedFacet, lastRequest)
  onChangeFn(result)
}

// This handles multiple checkbox selection with delay refresh
export const applyMultipleChangesToValuesColumn = (
  lastRequest: QueryBundleRequest | undefined,
  facet: FacetColumnResultValues,
  onChangeFn: (result: FacetColumnRequest[]) => void,
  facetNameMap?: Record<string, string>,
) => {
  const facetNames = (facetNameMap && Object.keys(facetNameMap)) || []
  if (facetNames.length) {
    facet.facetValues.forEach(facetValue => {
      if (facetNames.includes(facetValue.value)) {
        facetValue.isSelected = facetNameMap
          ? !!facetNameMap[facetValue.value]
          : false
      }
    })
  }
  const changedFacet = convertFacetToFacetColumnValuesRequest(facet)
  const result = patchRequestFacets(changedFacet, lastRequest)
  onChangeFn(result)
}

//rangeChanges
export const applyChangesToRangeColumn = (
  lastRequest: QueryBundleRequest | undefined,
  facet: FacetColumnResultRange,
  onChangeFn: (result: FacetColumnRequest[]) => void,
  values: string[],
) => {
  facet.columnMin = values[0]
  facet.columnMax = values[1]
  const changedFacet = convertFacetColumnRangeRequest(facet)
  const result = patchRequestFacets(changedFacet, lastRequest)
  onChangeFn(result)
}

export function FacetFilterControls(props: FacetFilterControlsProps) {
  const { facetsToFilter: facetFiltersToShow } = props
  const { data, isLoadingNewBundle, getLastQueryRequest, executeQueryRequest } =
    useQueryContext()

  const facets = data?.facets?.filter(
    facet =>
      // Don't show facets where there are no values
      !isSingleNotSetValue(facet),
  )

  let shownChips: string[]
  if (facetFiltersToShow == null) {
    shownChips = facets?.map(facet => facet.columnName) ?? []
  } else {
    // The facets to show have been explicitly specified
    shownChips = facetFiltersToShow
  }
  const [facetFiltersShown, setFacetFiltersShown] = React.useState<string[]>([])
  const { topLevelControlsState } = useQueryVisualizationContext()
  const { showFacetFilter } = topLevelControlsState

  /**
   * When the data facets change, reset the initially-selected chips
   */
  useDeepCompareEffectNoCheck(() => {
    setFacetFiltersShown(shownChips.slice(0, 3))
  }, [data?.facets])

  if (!data) {
    return <></>
  }
  const columnModels = data.selectColumns
  const lastRequest = getLastQueryRequest()

  const applyChanges = (facets: FacetColumnRequest[]) => {
    const queryRequest: QueryBundleRequest = getLastQueryRequest()
    queryRequest.query.selectedFacets = facets
    queryRequest.query.offset = 0
    executeQueryRequest(queryRequest)
  }

  const onClick = (facet: FacetColumnResult) => {
    let newFacetFilterShown = [...(facetFiltersShown ?? ['']), facet.columnName]
    if (facetFiltersShown.includes(facet.columnName)) {
      newFacetFilterShown = newFacetFilterShown.filter(
        col => col != facet.columnName,
      )
    }
    setFacetFiltersShown(newFacetFilterShown)
  }

  return (
    <div
      className={`FacetFilterControls ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
    >
      {isLoadingNewBundle && <div>Loading...</div>}
      {!isLoadingNewBundle &&
        (facets ?? [])
          .filter(facet => facetFiltersShown.includes(facet.columnName))
          .map((facet, index) => {
            const columnModel = columnModels!.find(
              model => model.name === facet.columnName,
            )
            return (
              <div
                className="FacetFilterControls__facet"
                key={facet.columnName}
              >
                {facet.facetType === 'enumeration' && columnModel && (
                  <EnumFacetFilter
                    containerAs="Collapsible"
                    collapsed={false}
                    facetValues={facet.facetValues}
                    columnModel={columnModel}
                    onChange={(facetNamesMap: Record<string, string>) =>
                      applyMultipleChangesToValuesColumn(
                        lastRequest,
                        facet,
                        applyChanges,
                        facetNamesMap,
                      )
                    }
                    onClear={() =>
                      applyChangesToValuesColumn(
                        lastRequest,
                        facet,
                        applyChanges,
                      )
                    }
                  ></EnumFacetFilter>
                )}
                {facet.facetType === 'range' && columnModel && (
                  <RangeFacetFilter
                    facetResult={facet}
                    columnModel={columnModel}
                    collapsed={false}
                    onChange={(values: string[]) =>
                      applyChangesToRangeColumn(
                        lastRequest,
                        facet,
                        applyChanges,
                        values,
                      )
                    }
                  ></RangeFacetFilter>
                )}
              </div>
            )
          })}
      <div>
        <div className="AvailableFacet">
          <label className="AvailableFacet__label">Available Facets</label>
        </div>
        {(facets ?? [])
          .filter(facet => shownChips.includes(facet.columnName))
          .map(facet => {
            return (
              <FacetChip
                key={facet.columnName}
                facet={facet}
                onClick={() => onClick(facet)}
                isChecked={facetFiltersShown.includes(facet.columnName)}
              />
            )
          })}
      </div>
    </div>
  )
}
