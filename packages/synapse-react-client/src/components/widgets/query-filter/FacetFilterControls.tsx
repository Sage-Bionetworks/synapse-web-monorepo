import React, { Suspense, useCallback, useMemo } from 'react'
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
import {
  EnumFacetFilter,
  FacetValueSortConfig,
} from './EnumFacetFilter/EnumFacetFilter'
import { FacetChip } from './FacetChip'
import { RangeFacetFilter } from './RangeFacetFilter'
import { groupBy, noop, sortBy } from 'lodash-es'
import { CombinedRangeFacetFilter } from './CombinedRangeFacetFilter'
import { FacetFilterHeader } from './FacetFilterHeader'
import JsonColumnFacetFilters from './JsonColumnFacetFilters'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { getDefaultShownFacetFilters } from './FacetFilterUtils'
import { useSuspenseQuery } from '@tanstack/react-query'
import { FacetFilterControlsSkeleton } from './FacetFilterSkeleton'

export type FacetFilterControlsProps = {
  /* The set of faceted column names that should be shown in the Facet controls. If undefined, all faceted columns with
    at least one non-null value will be shown. */
  availableFacets?: string[]
  facetValueSortConfigs?: FacetValueSortConfig[]
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

function FacetFilterControls(props: FacetFilterControlsProps) {
  const { availableFacets, facetValueSortConfigs } = props
  const {
    getCurrentQueryRequest,
    combineRangeFacetConfig,
    queryMetadataQueryOptions,
  } = useQueryContext()
  const { getColumnDisplayName } = useQueryVisualizationContext()
  const lastRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )
  const { data: queryMetadata } = useSuspenseQuery(queryMetadataQueryOptions)

  const facets = queryMetadata
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
    ? queryMetadata.facets!.filter(
        facet =>
          combineRangeFacetConfig.maxFacetColumn === facet.columnName ||
          combineRangeFacetConfig.minFacetColumn === facet.columnName,
      )
    : []

  // Group JSON facets by column name, so they can be grouped in the UI under their parent column name
  const jsonFacetsGroupedByColumn = groupBy(
    queryMetadata.facets!.filter(f => !!f.jsonPath),
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

  const columnModels = queryMetadata!.columnModels

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
        const sortConfig = facetValueSortConfigs?.find(
          config => config.columnName == facet.columnName,
        )
        return (
          <div className="FacetFilterControls__facet" key={facet.columnName}>
            {facet.facetType === 'enumeration' && columnModel && (
              <EnumFacetFilter
                containerAs="Collapsible"
                facet={facet}
                sortConfig={sortConfig}
              />
            )}
            {facet.facetType === 'range' && columnModel && (
              <RangeFacetFilter facetResult={facet} />
            )}
          </div>
        )
      })}
      {shownJsonFacetGroups.map(([columnName, facets]) => {
        const columnModel = queryMetadata?.columnModels?.find(
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

export default function FacetFilterControlsWithSuspense(
  props: FacetFilterControlsProps,
) {
  return (
    <Suspense fallback={<FacetFilterControlsSkeleton />}>
      <FacetFilterControls {...props} />
    </Suspense>
  )
}
