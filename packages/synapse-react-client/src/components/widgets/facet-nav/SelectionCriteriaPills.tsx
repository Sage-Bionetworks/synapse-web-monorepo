import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  isFacetColumnRangeRequest,
  isFacetColumnValuesRequest,
  isTextMatchesQueryFilter,
  LockedColumn,
} from '@/utils'
import { FRIENDLY_VALUE_NOT_SET, VALUE_NOT_SET } from '@/utils/SynapseConstants'
import {
  ColumnModel,
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueQueryFilter,
  FacetColumnRangeRequest,
  FacetColumnRequest,
  QueryFilter,
  TextMatchesQueryFilter,
} from '@sage-bionetworks/synapse-types'
import pluralize from 'pluralize'
import { ReadonlyDeep } from 'type-fest'
import { QueryContextType, useQueryContext } from '../../QueryContext'
import {
  QueryVisualizationContextType,
  useQueryVisualizationContext,
} from '../../QueryVisualizationWrapper'
import { useGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import SelectionCriteriaPill, {
  SelectionCriteriaPillProps,
} from './SelectionCriteriaPill'
import { getSearchTextFromBooleanModeSearchExpression } from '@/components/FullTextSearch/FullTextSearchUtils'

const MAX_VALUES_IN_FILTER_FOR_INDIVIDUAL_PILLS = 4

function getPillPropsFromColumnQueryFilter(
  queryFilter:
    | ColumnSingleValueQueryFilter
    | ColumnMultiValueFunctionQueryFilter,
  queryContext: QueryContextType,
  columnModel: ColumnModel | undefined,
  queryVisualizationContext: QueryVisualizationContextType,
): SelectionCriteriaPillProps[] {
  const { getColumnDisplayName } = queryVisualizationContext
  // ColumnSingleValueQueryFilter and ColumnMultiValueQueryFilter both allow for a list of values
  // If there are more than _n_ values, consolidate to one pill
  if (
    queryFilter.values.length > MAX_VALUES_IN_FILTER_FOR_INDIVIDUAL_PILLS ||
    !columnModel
  ) {
    const text = `${pluralize(
      getColumnDisplayName(queryFilter.columnName),
    )} (${queryFilter.values.length.toLocaleString()})`

    return [
      {
        key: `queryFilter-${queryFilter.concreteType}-${queryFilter.columnName}`,
        innerText: text,
        tooltipText: text,
        onRemoveFilter: () => {
          queryContext.removeQueryFilter(queryFilter)
        },
      },
    ]
  }

  // otherwise render one pill per value
  return queryFilter.values.map(value => {
    let filterValue = value

    if (value?.startsWith('%') && value?.endsWith('%')) {
      // strip '%' wildcard character when using a LIKE condition
      filterValue = filterValue.substring(1, filterValue.length - 1)
    }
    filterValue = queryVisualizationContext.getDisplayValue(
      filterValue,
      columnModel.columnType,
    )
    const text = `${getColumnDisplayName(
      queryFilter.columnName,
    )}: ${filterValue}`
    return {
      key: `queryFilter-${queryFilter.concreteType}-${queryFilter.columnName}-${value}`,
      innerText: text,
      tooltipText: text,
      onRemoveFilter: () => {
        queryContext.removeValueFromQueryFilter(queryFilter, value)
      },
    }
  })
}

function getPillPropsFromTextMatchesQueryFilter(
  queryFilter: TextMatchesQueryFilter,
  queryContext: QueryContextType,
): SelectionCriteriaPillProps {
  const innerText =
    queryFilter.searchMode == 'NATURAL_LANGUAGE'
      ? queryFilter.searchExpression
      : getSearchTextFromBooleanModeSearchExpression(
          queryFilter.searchExpression,
        )
  return {
    key: `queryFilter-${queryFilter.concreteType}-${queryFilter.searchExpression}`,
    innerText,
    tooltipText: `Text matches: "${innerText}"`,
    onRemoveFilter: () => {
      queryContext.removeQueryFilter(queryFilter)
    },
  }
}

function getPillPropsFromQueryFilters(
  queryFilters: ReadonlyDeep<QueryFilter[]>,
  queryContext: QueryContextType,
  columnModels: ColumnModel[],
  queryVisualizationContext: QueryVisualizationContextType,
  lockedColumn?: LockedColumn,
): SelectionCriteriaPillProps[] {
  return queryFilters.flatMap(queryFilter => {
    if (
      isColumnSingleValueQueryFilter(queryFilter) ||
      isColumnMultiValueFunctionQueryFilter(queryFilter)
    ) {
      const columnModel = columnModels.find(
        cm => cm.name === queryFilter.columnName,
      )
      if (
        queryFilter.columnName.toLowerCase() ===
        lockedColumn?.columnName?.toLowerCase()
      ) {
        return []
      }
      return getPillPropsFromColumnQueryFilter(
        queryFilter,
        queryContext,
        columnModel,
        queryVisualizationContext,
      )
    } else if (isTextMatchesQueryFilter(queryFilter)) {
      return [getPillPropsFromTextMatchesQueryFilter(queryFilter, queryContext)]
    } else {
      console.log('Unknown query filter type', queryFilter)
      return []
    }
  })
}

function getRangeFacetInnerText(min?: string, max?: string) {
  if (min == undefined && max == undefined) {
    return 'Any value'
  } else if (min == undefined) {
    return `Up to ${max}`
  } else if (max == undefined) {
    return `${min} or greater`
  } else if (min === VALUE_NOT_SET && max === VALUE_NOT_SET) {
    return FRIENDLY_VALUE_NOT_SET
  } else {
    return `${min} - ${max}`
  }
}

function getPillPropsFromFacetFilters(
  selectedFacets: ReadonlyDeep<FacetColumnRequest[]>,
  queryContext: QueryContextType,
  columnModels: ColumnModel[],
  queryVisualizationContext: QueryVisualizationContextType,
  lockedColumn?: LockedColumn,
): SelectionCriteriaPillProps[] {
  return selectedFacets.flatMap(selectedFacet => {
    if (
      selectedFacet.columnName.toLowerCase() ===
      lockedColumn?.columnName?.toLowerCase()
    ) {
      return []
    }
    const columnModel = columnModels.find(
      cm => cm.name === selectedFacet.columnName,
    )
    const { getColumnDisplayName, getDisplayValue } = queryVisualizationContext
    if (isFacetColumnValuesRequest(selectedFacet)) {
      // If there are more than _n_ values, consolidate to one pill
      if (
        selectedFacet.facetValues.length >
          MAX_VALUES_IN_FILTER_FOR_INDIVIDUAL_PILLS ||
        !columnModel
      ) {
        const text = `${pluralize(
          getColumnDisplayName(
            selectedFacet.columnName,
            selectedFacet.jsonPath,
          ),
        )} (${selectedFacet.facetValues.length.toLocaleString()})`
        return [
          {
            key: `facet-${selectedFacet.concreteType}-${selectedFacet.columnName}`,
            innerText: text,
            tooltipText: text,
            onRemoveFilter: () => {
              queryContext.removeSelectedFacet(selectedFacet)
            },
          },
        ]
      }

      // otherwise render one pill per value

      return selectedFacet.facetValues.map(facetValue => {
        const innerText = getDisplayValue(facetValue, columnModel.columnType)
        return {
          key: `facet-${selectedFacet.concreteType}-${selectedFacet.columnName}-${facetValue}`,
          innerText: innerText,
          tooltipText: `${getColumnDisplayName(
            selectedFacet.columnName,
            selectedFacet.jsonPath,
          )}: ${innerText}`,
          onRemoveFilter: () => {
            queryContext.removeValueFromSelectedFacet(selectedFacet, facetValue)
          },
        }
      })
    } else if (isFacetColumnRangeRequest(selectedFacet)) {
      // Include a single pill for both facet filters if a combined range facet filter config is defined
      const { combineRangeFacetConfig } = queryContext
      if (
        combineRangeFacetConfig &&
        (selectedFacet.columnName == combineRangeFacetConfig.minFacetColumn ||
          selectedFacet.columnName == combineRangeFacetConfig.maxFacetColumn)
      ) {
        if (
          selectedFacet.columnName == combineRangeFacetConfig.minFacetColumn
        ) {
          return []
        } else {
          // find the min facet also
          const maxFacet = selectedFacet
          const minFacet = selectedFacets.find(
            v => v.columnName == combineRangeFacetConfig.minFacetColumn,
          ) as FacetColumnRangeRequest
          const innerText = getRangeFacetInnerText(maxFacet.min, minFacet.max)
          return [
            {
              key: `facet-${selectedFacet.concreteType}-${selectedFacet.columnName}-${innerText}`,
              innerText: innerText,
              tooltipText: `${combineRangeFacetConfig.label}: ${innerText}`,
              onRemoveFilter: () => {
                // Remove both facets on pill click
                queryContext.removeSelectedFacet([minFacet, maxFacet])
              },
            },
          ]
        }
      }

      const innerText = getRangeFacetInnerText(
        selectedFacet.min,
        selectedFacet.max,
      )

      return [
        {
          key: `facet-${selectedFacet.concreteType}-${selectedFacet.columnName}-${selectedFacet.min}-${selectedFacet.max}`,
          innerText: innerText,
          tooltipText: `${getColumnDisplayName(
            selectedFacet.columnName,
            selectedFacet.jsonPath,
          )}: ${innerText}`,
          onRemoveFilter: () => {
            queryContext.removeSelectedFacet(selectedFacet)
          },
        },
      ]
    } else {
      console.log(
        'Unknown facet type',
        (selectedFacet as unknown as FacetColumnRequest).concreteType,
      )
      return []
    }
  })
}

function SelectionCriteriaPills() {
  const queryContext = useQueryContext()
  const lockedColumn = queryContext.lockedColumn
  const queryVisualizationContext = useQueryVisualizationContext()
  const { currentQueryRequest } = queryContext
  const { data: queryMetadata } = useGetQueryMetadata()

  const queryFilterPillProps = getPillPropsFromQueryFilters(
    currentQueryRequest.query?.additionalFilters ?? [],
    queryContext,
    queryMetadata?.columnModels || [],
    queryVisualizationContext,
    lockedColumn,
  )

  const facetPillProps = getPillPropsFromFacetFilters(
    currentQueryRequest.query.selectedFacets ?? [],
    queryContext,
    queryMetadata?.columnModels || [],
    queryVisualizationContext,
    lockedColumn,
  )

  const allPills = [...queryFilterPillProps, ...facetPillProps]

  return (
    <>
      {allPills.map(pillProps => {
        // Encode the key because the facet may include an illegal character
        const key = encodeURIComponent(pillProps.key)
        return <SelectionCriteriaPill {...pillProps} key={key} />
      })}
    </>
  )
}

export default SelectionCriteriaPills
