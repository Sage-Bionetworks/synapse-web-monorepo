import React from 'react'
import { QueryContextType, useQueryContext } from '../../QueryContext'
import {
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueQueryFilter,
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  isTextMatchesQueryFilter,
  QueryFilter,
  TextMatchesQueryFilter,
} from '../../../utils/synapseTypes/Table/QueryFilter'
import SelectionCriteriaPill, {
  SelectionCriteriaPillProps,
} from './SelectionCriteriaPill'
import {
  FacetColumnRequest,
  isFacetColumnRangeRequest,
  isFacetColumnValuesRequest,
} from '../../../utils/synapseTypes'
import {
  QueryVisualizationContextType,
  useQueryVisualizationContext,
} from '../../QueryVisualizationWrapper'

function getPillPropsFromColumnQueryFilter(
  queryFilter:
    | ColumnSingleValueQueryFilter
    | ColumnMultiValueFunctionQueryFilter,
  queryContext: QueryContextType,
  queryVisualizationContext: QueryVisualizationContextType,
): SelectionCriteriaPillProps[] {
  // ColumnSingleValueQueryFilter and ColumnMultiValueQueryFilter both allow for a list of values
  // We want to render 1 pill per value, so we expand
  const columnModel = queryContext.getColumnModel(queryFilter.columnName)!
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
    const text = `${queryFilter.columnName}: ${filterValue}`
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

function getPillPropsFromQueryFilter(
  queryFilter: QueryFilter,
  queryContext: QueryContextType,
  queryVisualizationContext: QueryVisualizationContextType,
): SelectionCriteriaPillProps[] {
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
}

function getPillPropsFromFacet(
  selectedFacet: FacetColumnRequest,
  queryContext: QueryContextType,
  queryVisualizationContext: QueryVisualizationContextType,
): SelectionCriteriaPillProps[] {
  if (selectedFacet.columnName === queryContext.lockedColumn?.columnName) {
    return []
  }
  const columnModel = queryContext.getColumnModel(selectedFacet.columnName)!
  const { getColumnDisplayName, getDisplayValue } = queryVisualizationContext
  if (isFacetColumnValuesRequest(selectedFacet)) {
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
}

function SelectionCriteriaPills() {
  const queryContext = useQueryContext()
  const queryVisualizationContext = useQueryVisualizationContext()
  const { getLastQueryRequest } = queryContext
  const lastQueryRequest = getLastQueryRequest()

  const queryFilterPillProps = (
    lastQueryRequest.query?.additionalFilters ?? []
  ).flatMap(qf =>
    getPillPropsFromQueryFilter(qf, queryContext, queryVisualizationContext),
  )

  const facetPillProps = (lastQueryRequest.query.selectedFacets ?? []).flatMap(
    facet =>
      getPillPropsFromFacet(facet, queryContext, queryVisualizationContext),
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
