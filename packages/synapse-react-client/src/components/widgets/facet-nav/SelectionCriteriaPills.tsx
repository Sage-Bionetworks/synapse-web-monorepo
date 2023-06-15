import React from 'react'
import {
  QueryContextType,
  useQueryContext,
} from '../../QueryContext/QueryContext'
import {
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueQueryFilter,
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
    const text = `${getColumnDisplayName(
      queryFilter.columnName,
    )}: ${queryFilter.values.length.toLocaleString()} values selected`

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
  queryFilters: QueryFilter[],
  queryContext: QueryContextType,
  queryVisualizationContext: QueryVisualizationContextType,
): SelectionCriteriaPillProps[] {
  return queryFilters.flatMap(queryFilter => {
    if (
      isColumnSingleValueQueryFilter(queryFilter) ||
      isColumnMultiValueFunctionQueryFilter(queryFilter)
    ) {
      if (queryFilter.columnName === queryContext.lockedColumn?.columnName) {
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
      console.log('Unknown query filter type', queryFilter.concreteType)
      return []
    }
  })
}

function getPillPropsFromFacetFilters(
  selectedFacets: FacetColumnRequest[],
  queryContext: QueryContextType,
  queryVisualizationContext: QueryVisualizationContextType,
): SelectionCriteriaPillProps[] {
  return selectedFacets.flatMap(selectedFacet => {
    if (selectedFacet.columnName === queryContext.lockedColumn?.columnName) {
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
        const text = `${getColumnDisplayName(
          selectedFacet.columnName,
        )}: ${selectedFacet.facetValues.length.toLocaleString()} values selected`
        return [
          {
            key: `queryFilter-${selectedFacet.concreteType}-${selectedFacet.columnName}`,
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
  const { getLastQueryRequest } = queryContext
  const lastQueryRequest = getLastQueryRequest()

  const queryFilterPillProps = getPillPropsFromQueryFilters(
    lastQueryRequest.query?.additionalFilters ?? [],
    queryContext,
    queryVisualizationContext,
  )

  const facetPillProps = getPillPropsFromFacetFilters(
    lastQueryRequest.query.selectedFacets ?? [],
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
