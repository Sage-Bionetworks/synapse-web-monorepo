import React from 'react'
import { QueryContextType, useQueryContext } from '../../QueryContext'
import {
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueQueryFilter,
  FacetColumnRangeRequest,
  QueryFilter,
  TextMatchesQueryFilter,
} from '@sage-bionetworks/synapse-types'
import SelectionCriteriaPill, {
  SelectionCriteriaPillProps,
} from './SelectionCriteriaPill'
import { FacetColumnRequest } from '@sage-bionetworks/synapse-types'
import {
  QueryVisualizationContextType,
  useQueryVisualizationContext,
} from '../../QueryVisualizationWrapper'
import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  isFacetColumnValuesRequest,
  isFacetColumnRangeRequest,
  isTextMatchesQueryFilter,
} from '../../../utils/types/IsType'
import pluralize from 'pluralize'
import { ReadonlyDeep } from 'type-fest'

const MAX_VALUES_IN_FILTER_FOR_INDIVIDUAL_PILLS = 4

function getPillPropsFromColumnQueryFilter(
  queryFilter:
    | ColumnSingleValueQueryFilter
    | ColumnMultiValueFunctionQueryFilter,
  queryContext: QueryContextType,
  queryVisualizationContext: QueryVisualizationContextType,
): SelectionCriteriaPillProps[] {
  const { getColumnDisplayName } = queryVisualizationContext
  const columnModel = queryContext.getColumnModel(queryFilter.columnName)!
  // ColumnSingleValueQueryFilter and ColumnMultiValueQueryFilter both allow for a list of values
  // If there are more than _n_ values, consolidate to one pill
  if (queryFilter.values.length > MAX_VALUES_IN_FILTER_FOR_INDIVIDUAL_PILLS) {
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
  return {
    key: `queryFilter-${queryFilter.concreteType}-${queryFilter.searchExpression}`,
    innerText: queryFilter.searchExpression,
    tooltipText: `Text matches: "${queryFilter.searchExpression}"`,
    onRemoveFilter: () => {
      queryContext.removeQueryFilter(queryFilter)
    },
  }
}

function getPillPropsFromQueryFilters(
  queryFilters: ReadonlyDeep<QueryFilter[]>,
  queryContext: QueryContextType,
  queryVisualizationContext: QueryVisualizationContextType,
): SelectionCriteriaPillProps[] {
  return queryFilters.flatMap(queryFilter => {
    if (
      isColumnSingleValueQueryFilter(queryFilter) ||
      isColumnMultiValueFunctionQueryFilter(queryFilter)
    ) {
      if (
        queryFilter.columnName.toLowerCase() ===
        queryContext.lockedColumn?.columnName?.toLowerCase()
      ) {
        return []
      }
      return getPillPropsFromColumnQueryFilter(
        queryFilter,
        queryContext,
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

function getPillPropsFromFacetFilters(
  selectedFacets: ReadonlyDeep<FacetColumnRequest[]>,
  queryContext: QueryContextType,
  queryVisualizationContext: QueryVisualizationContextType,
): SelectionCriteriaPillProps[] {
  return selectedFacets.flatMap(selectedFacet => {
    if (
      selectedFacet.columnName.toLowerCase() ===
      queryContext.lockedColumn?.columnName?.toLowerCase()
    ) {
      return []
    }
    const columnModel = queryContext.getColumnModel(selectedFacet.columnName)!
    const { getColumnDisplayName, getDisplayValue } = queryVisualizationContext
    if (isFacetColumnValuesRequest(selectedFacet)) {
      // If there are more than _n_ values, consolidate to one pill
      if (
        selectedFacet.facetValues.length >
        MAX_VALUES_IN_FILTER_FOR_INDIVIDUAL_PILLS
      ) {
        const text = `${pluralize(
          getColumnDisplayName(selectedFacet.columnName),
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
          const innerText = `${maxFacet.min} - ${minFacet.max}`
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

      const innerText = `${selectedFacet.min} - ${selectedFacet.max}`
      return [
        {
          key: `facet-${selectedFacet.concreteType}-${selectedFacet.columnName}-${selectedFacet.min}-${selectedFacet.max}`,
          innerText: innerText,
          tooltipText: `${getColumnDisplayName(
            selectedFacet.columnName,
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
  const queryVisualizationContext = useQueryVisualizationContext()
  const { currentQueryRequest } = queryContext

  const queryFilterPillProps = getPillPropsFromQueryFilters(
    currentQueryRequest.query?.additionalFilters ?? [],
    queryContext,
    queryVisualizationContext,
  )

  const facetPillProps = getPillPropsFromFacetFilters(
    currentQueryRequest.query.selectedFacets ?? [],
    queryContext,
    queryVisualizationContext,
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
