import React, { useCallback, useMemo } from 'react'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import {
  facetObjectMatchesDefinition,
  getCorrespondingColumnForFacet,
  isSingleNotSetValue,
} from '../../../utils/functions/queryUtils'
import {
  FacetColumnRequest,
  FacetColumnResultRange,
  FacetColumnResultValues,
  FacetColumnValuesRequest,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { useQueryContext } from '../../QueryContext'
import { EnumFacetFilter } from './EnumFacetFilter/EnumFacetFilter'
import { FacetChip } from './FacetChip'
import { RangeFacetFilter } from './RangeFacetFilter'
import { Box, Skeleton, Stack } from '@mui/material'
import { groupBy, noop, sortBy } from 'lodash-es'
import { CombinedRangeFacetFilter } from './CombinedRangeFacetFilter'
import { useAtomValue } from 'jotai'
import {
  isLoadingNewBundleAtom,
  tableQueryDataAtom,
} from '../../QueryWrapper/QueryWrapper'
import { FacetFilterHeader } from './FacetFilterHeader'
import JsonColumnFacetFilters from './JsonColumnFacetFilters'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'

export type FacetFilterControlsProps = {
  /* The set of faceted column names that should be shown in the Facet controls. If undefined, all faceted columns with
    at least one non-null value will be shown. */
  availableFacets?: string[]
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

const patchRequestFacets = (
  changedFacet: FacetColumnRequest,
  selections: FacetColumnRequest[] = [],
): FacetColumnRequest[] => {
  const changedFacetIndex = selections.findIndex(facet =>
    facetObjectMatchesDefinition(facet, changedFacet),
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

/**
 * Determines which facet filters should be shown after loading a new bundle. The shown facets will be the first
 * three available facets, plus any other facets that have a filter applied.
 * @param facetColumns
 * @param selectedFacets
 * @returns the columnNames of the facets that should be shown.
 */
export function getDefaultShownFacetFilters(
  facetColumns: string[],
  selectedFacets?: FacetColumnRequest[],
): Set<string> {
  const columnsWithExistingFilters = (selectedFacets ?? []).map(
    fcr => fcr.columnName,
  )
  return new Set([...facetColumns.slice(0, 3), ...columnsWithExistingFilters])
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
  const { availableFacets } = props
  const { getCurrentQueryRequest, combineRangeFacetConfig } = useQueryContext()
  const { getColumnDisplayName } = useQueryVisualizationContext()
  const lastRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )
  const data = useAtomValue(tableQueryDataAtom)

  const facets = data!
    .facets!.filter(
      facet =>
        // If availableFacets is configured, remove those that don't match.
        availableFacets == null || availableFacets.includes(facet.columnName),
    )
    // Don't include json subcolumn facets, those will be handled separately
    .filter(facet => facet.jsonPath == null)
    .filter(
      facet =>
        // Don't show facets if included in the combine range facet config, handled separately
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
          combineRangeFacetConfig.minFacetColumn === facet.columnName,
      )
    : []

  // Group JSON facets by column name, so they can be grouped in the UI under their parent column name
  const jsonFacetsGroupedByColumn = groupBy(
    data!.facets!.filter(f => !!f.jsonPath),
    'columnName',
  )

  const allFacetColumns: string[] = useMemo(() => {
    const allFacetColumns: string[] = []
    facets.forEach(facet => allFacetColumns.push(facet.columnName))
    if (combineRangeFacetConfig) {
      allFacetColumns.push(combineRangeFacetConfig.label)
    }
    if (jsonFacetsGroupedByColumn) {
      Object.keys(jsonFacetsGroupedByColumn).forEach(jsonColumn =>
        allFacetColumns.push(jsonColumn),
      )
    }
    return allFacetColumns
  }, [combineRangeFacetConfig, facets, jsonFacetsGroupedByColumn])

  // Controls which facet columns are shown/hidden by clicking on chips. NOTE: One column may have multiple facets (e.g. JSON subcolumn facets)
  const [facetColumnsShown, setFacetColumnsShown] = React.useState<Set<string>>(
    getDefaultShownFacetFilters(
      allFacetColumns,
      lastRequest.query.selectedFacets,
    ),
  )

  /**
   * When the data facets change, reset the initially-selected chips
   */
  useDeepCompareEffectNoCheck(() => {
    // Select the first three facet columns, plus any columns where a facet is already filtered
    setFacetColumnsShown(
      getDefaultShownFacetFilters(
        allFacetColumns,
        lastRequest.query.selectedFacets,
      ),
    )
  }, [facets])

  const columnModels = data!.columnModels

  const toggleShowFacetFilter = useCallback(
    (facetColumnName: string) => {
      const newFacetColumnsShown = new Set(facetColumnsShown)
      if (newFacetColumnsShown.has(facetColumnName)) {
        newFacetColumnsShown.delete(facetColumnName)
      } else {
        newFacetColumnsShown.add(facetColumnName)
      }
      setFacetColumnsShown(newFacetColumnsShown)
    },
    [facetColumnsShown],
  )
  const combinedRangeFacetsColumnModelType = combineRangeFacetConfig
    ? columnModels!.find(
        model => model.name === combineRangeFacetConfig.minFacetColumn,
      )?.columnType
    : undefined

  const shownTopLevelFacets = useMemo(
    () =>
      (facets ?? []).filter(facet => facetColumnsShown.has(facet.columnName)),
    [facetColumnsShown, facets],
  )

  const shownJsonFacetGroups = useMemo(
    () =>
      Object.entries(jsonFacetsGroupedByColumn).filter(([columnName]) =>
        facetColumnsShown.has(columnName),
      ),
    [facetColumnsShown, jsonFacetsGroupedByColumn],
  )

  return (
    <div className={`FacetFilterControls`}>
      {combineRangeFacetConfig && (
        <CombinedRangeFacetFilter
          facetResults={combinedRangeFacets as FacetColumnResultRange[]}
          label={combineRangeFacetConfig.label}
          columnType={combinedRangeFacetsColumnModelType!}
        />
      )}
      {shownTopLevelFacets.map(facet => {
        const columnModel = getCorrespondingColumnForFacet(facet, columnModels!)
        return (
          <div className="FacetFilterControls__facet" key={facet.columnName}>
            {facet.facetType === 'enumeration' && columnModel && (
              <EnumFacetFilter containerAs="Collapsible" facet={facet} />
            )}
            {facet.facetType === 'range' && columnModel && (
              <RangeFacetFilter facetResult={facet} />
            )}
          </div>
        )
      })}
      {shownJsonFacetGroups.map(([columnName, facets]) => {
        const columnModel = data?.columnModels?.find(
          cm => cm.name === columnName,
        )
        return (
          columnModel && (
            <JsonColumnFacetFilters
              key={columnName}
              columnModel={columnModel}
              facets={facets}
            />
          )
        )
      })}
      <div>
        <FacetFilterHeader
          label={'Available Facets'}
          hideCollapsible
          isCollapsed={false}
          onClick={noop}
        />
        {sortBy(allFacetColumns).map(columnName => {
          return (
            <FacetChip
              key={columnName}
              onClick={() => toggleShowFacetFilter(columnName)}
              isChecked={facetColumnsShown.has(columnName)}
            >
              {getColumnDisplayName(columnName)}
            </FacetChip>
          )
        })}
      </div>
    </div>
  )
}

export default function FacetFilterControlsOrLoader(
  props: FacetFilterControlsProps,
) {
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)
  const data = useAtomValue(tableQueryDataAtom)

  if (isLoadingNewBundle) {
    return <FacetFilterControlsSkeleton />
  } else if (data == null || data.facets == null) {
    return <></>
  }
  return <FacetFilterControls {...props} />
}
