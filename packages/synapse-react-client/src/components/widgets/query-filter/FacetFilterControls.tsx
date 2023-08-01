import React, { useCallback } from 'react'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import { isSingleNotSetValue } from '../../../utils/functions/queryUtils'
import {
  FacetColumnRangeRequest,
  FacetColumnRequest,
  FacetColumnResult,
  FacetColumnResultRange,
  FacetColumnResultValues,
  FacetColumnValuesRequest,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { useQueryContext } from '../../QueryContext/QueryContext'
import { EnumFacetFilter } from './EnumFacetFilter'
import { FacetChip } from './FacetChip'
import { RangeFacetFilter } from './RangeFacetFilter'
import { Box, Skeleton, Stack } from '@mui/material'
import { sortBy } from 'lodash-es'
import { CombinedRangeFacetFilter } from './CombinedRangeFacetFilter'

export type FacetFilterControlsProps = {
  /* The set of faceted column names that should be shown in the Facet controls. If undefined, all faceted columns with at least one non-null value will be shown. */
  availableFacets?: string[]
  combineRangeFacetConfig?: CombineRangeFacetConfig
}

export type CombineRangeFacetConfig = {
  minFacetColumn: string
  maxFacetColumn: string
  label: string
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
  selections: FacetColumnRequest[] = [],
): FacetColumnRequest[] => {
  const changedFacetIndex = selections.findIndex(
    facet => facet.columnName === changedFacet.columnName,
  )
  const isEmptyValuesFacet =
    changedFacet.concreteType ===
      'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest' &&
    (!changedFacet.facetValues || !changedFacet.facetValues.length)
  const isEmptyRangesFacet =
    changedFacet.concreteType ===
      'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest' &&
    (!changedFacet.min || !changedFacet.max)

  if (changedFacetIndex > -1) {
    if (isEmptyValuesFacet || isEmptyRangesFacet) {
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
  const result = patchRequestFacets(
    changedFacet,
    lastRequest?.query?.selectedFacets,
  )
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
  const result = patchRequestFacets(
    changedFacet,
    lastRequest?.query?.selectedFacets,
  )
  onChangeFn(result)
}

export const applyCombinedChangesToRangeColumn = (
  lastRequest: QueryBundleRequest | undefined,
  combinedRangeFacets: FacetColumnResultRange[],
  onChangeFn: (result: FacetColumnRequest[]) => void,
  values: string[],
) => {
  combinedRangeFacets[0].columnMin = values[0]
  combinedRangeFacets[0].columnMax = values[1]
  combinedRangeFacets[1].columnMin = values[2]
  combinedRangeFacets[1].columnMax = values[3]
  const changedFacet0 = convertFacetColumnRangeRequest(combinedRangeFacets[0])
  const changedFacet1 = convertFacetColumnRangeRequest(combinedRangeFacets[1])
  let selections = lastRequest?.query?.selectedFacets ?? []
  selections = patchRequestFacets(changedFacet0, selections)
  selections = patchRequestFacets(changedFacet1, selections)
  onChangeFn(selections)
}

/**
 * Determines which facet filters should be shown after loading a new bundle. The shown facets will be the first
 * three available facets, plus any other facets that have a filter applied.
 * @param facets
 * @param selectedFacets
 * @returns the columnNames of the facets that should be shown.
 */
export function getDefaultShownFacetFilters(
  facets: FacetColumnResult[],
  selectedFacets?: FacetColumnRequest[],
): Set<string> {
  const columnsWithExistingFilters = (selectedFacets ?? []).map(
    fcr => fcr.columnName,
  )
  return new Set([
    ...facets.slice(0, 3).map(f => f.columnName),
    ...columnsWithExistingFilters,
  ])
}

function FacetFilterSkeleton() {
  const facetFilterFormRow = (
    <Stack direction={'row'} gap={'10px'} sx={{ my: 1 }}>
      <Skeleton width={'15px'} />
      <Skeleton width={'40%'} />
    </Stack>
  )
  return (
    <Box className={'FacetFilterControls__facet'}>
      <Box className={'FacetFilterHeader'}>
        <Skeleton width={'100%'} />
      </Box>
      <Box>
        {facetFilterFormRow}
        {facetFilterFormRow}
        {facetFilterFormRow}
      </Box>
    </Box>
  )
}

function FacetFilterControlsSkeleton() {
  return (
    <div className={`FacetFilterControls`}>
      <FacetFilterSkeleton />
      <FacetFilterSkeleton />
      <FacetFilterSkeleton />
      <FacetFilterSkeleton />
    </div>
  )
}

function FacetFilterControls(props: FacetFilterControlsProps) {
  const { availableFacets, combineRangeFacetConfig } = props
  const {
    data: data,
    getCurrentQueryRequest,
    executeQueryRequest,
  } = useQueryContext()
  const lastRequest = getCurrentQueryRequest()

  const facets = data!
    .facets!.filter(
      facet =>
        // If availableFacets is configured, remove those that don't match.
        availableFacets == null || availableFacets.includes(facet.columnName),
    )
    .filter(
      facet =>
        // Don't show facets if included in the combine range facet config
        combineRangeFacetConfig == null ||
        (combineRangeFacetConfig.maxFacetColumn !== facet.columnName &&
          combineRangeFacetConfig.minFacetColumn !== facet.columnName),
    )
    .filter(
      facet =>
        // Don't show facets where there are no values
        !isSingleNotSetValue(facet),
    )

  const combinedRangeFacets = combineRangeFacetConfig
    ? data!.facets!.filter(
        facet =>
          combineRangeFacetConfig.maxFacetColumn === facet.columnName ||
          combineRangeFacetConfig?.minFacetColumn === facet.columnName,
      )
    : []
  // Controls which facet filter sections are shown/hidden by clicking on chips
  const [facetFiltersShown, setFacetFiltersShown] = React.useState<Set<string>>(
    getDefaultShownFacetFilters(facets, lastRequest.query.selectedFacets),
  )

  /**
   * When the data facets change, reset the initially-selected chips
   */
  useDeepCompareEffectNoCheck(() => {
    // Select the first three facet columns, plus any columns where a facet is already filtered
    setFacetFiltersShown(
      getDefaultShownFacetFilters(facets, lastRequest.query.selectedFacets),
    )
  }, [facets])

  const columnModels = data!.selectColumns

  const applyChanges = useCallback(
    (facets: FacetColumnRequest[]) => {
      executeQueryRequest(
        queryRequest => {
          queryRequest.query.selectedFacets = facets
          queryRequest.query.offset = 0
          return queryRequest
        },
        { debounce: true },
      )
    },
    [executeQueryRequest],
  )

  const toggleShowFacetFilter = useCallback(
    (facet: FacetColumnResult) => {
      const newFacetFilterShown = new Set(facetFiltersShown)
      if (newFacetFilterShown.has(facet.columnName)) {
        newFacetFilterShown.delete(facet.columnName)
      } else {
        newFacetFilterShown.add(facet.columnName)
      }
      setFacetFiltersShown(newFacetFilterShown)
    },
    [facetFiltersShown],
  )
  const combinedRangeFacetsColumnModelType = combineRangeFacetConfig
    ? columnModels!.find(
        model => model.name === combineRangeFacetConfig.minFacetColumn,
      )?.columnType
    : undefined

  return (
    <div className={`FacetFilterControls`}>
      {combineRangeFacetConfig && (
        <CombinedRangeFacetFilter
          facetResults={combinedRangeFacets as FacetColumnResultRange[]}
          label={combineRangeFacetConfig.label}
          columnType={combinedRangeFacetsColumnModelType!}
          collapsed={false}
          onChange={(values: (string | number | undefined)[]) =>
            applyCombinedChangesToRangeColumn(
              lastRequest,
              combinedRangeFacets as FacetColumnResultRange[],
              applyChanges,
              values as string[],
            )
          }
        ></CombinedRangeFacetFilter>
      )}
      {(facets ?? [])
        .filter(facet => facetFiltersShown.has(facet.columnName))
        .map(facet => {
          const columnModel = columnModels!.find(
            model => model.name === facet.columnName,
          )
          return (
            <div className="FacetFilterControls__facet" key={facet.columnName}>
              {facet.facetType === 'enumeration' && columnModel && (
                <EnumFacetFilter
                  containerAs="Collapsible"
                  collapsed={false}
                  facetValues={facet.facetValues}
                  columnModel={columnModel}
                />
              )}
              {facet.facetType === 'range' && columnModel && (
                <RangeFacetFilter
                  facetResult={facet}
                  label={columnModel.name}
                  columnType={columnModel.columnType}
                  collapsed={false}
                  onChange={(values: (string | number | undefined)[]) =>
                    applyChangesToRangeColumn(
                      lastRequest,
                      facet,
                      applyChanges,
                      values as string[],
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
        {sortBy(facets, ['columnName']).map(facet => {
          return (
            <FacetChip
              key={facet.columnName}
              facet={facet}
              onClick={() => toggleShowFacetFilter(facet)}
              isChecked={facetFiltersShown.has(facet.columnName)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default function FacetFilterControlsOrLoader(
  props: FacetFilterControlsProps,
) {
  const { data, isLoadingNewBundle } = useQueryContext()
  if (isLoadingNewBundle) {
    return <FacetFilterControlsSkeleton />
  } else if (data == null || data.facets == null) {
    return <></>
  }
  return <FacetFilterControls {...props} />
}
