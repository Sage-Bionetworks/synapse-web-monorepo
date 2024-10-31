import React, { useEffect, useState } from 'react'
import { useQueryContext } from './QueryContext/QueryContext'
import Select, {
  components,
  ControlProps,
  GroupBase,
  MultiValue,
} from 'react-select'
import {
  ColumnMultiValueFunction,
  ColumnMultiValueFunctionQueryFilter,
  FacetColumnResultValues,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import { useQuery } from '@tanstack/react-query'

export type FilterProps = {
  filterColumnName?: string
}

export const Control = ({
  children,
  ...rest
}: ControlProps<any, boolean, GroupBase<any>>) => {
  return (
    <components.Control {...rest} className="form-control">
      {children}
    </components.Control>
  )
}

const ColumnFilter: React.FC<FilterProps> = props => {
  const queryContext = useQueryContext()
  const {
    executeQueryRequest,
    queryMetadataQueryOptions,
    getCurrentQueryRequest,
  } = queryContext
  const { data: queryMetadata } = useQuery(queryMetadataQueryOptions)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const { filterColumnName } = props

  const currentQuery = getCurrentQueryRequest()

  const facets = queryMetadata?.facets ?? []

  const selectedFacet = facets.find(
    facet =>
      facet.columnName === `${filterColumnName}` &&
      facet.concreteType ===
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
  ) as FacetColumnResultValues | undefined

  // Map the facet values to format for react-select options
  const filterOptions =
    selectedFacet?.facetValues.map(({ value }) => ({
      value,
      label: value,
    })) ?? []

  useEffect(() => {
    executeQueryRequest(request => {
      const currentFilters = currentQuery.query.additionalFilters || []

      request.query.additionalFilters = currentFilters

      return request
    })
  }, [])

  const onChange = (values: MultiValue<{ value: string; label: string }>) => {
    const selectedValues = values.map(option => option.value)

    // facet filter for selected values
    const newFilter: ColumnMultiValueFunctionQueryFilter | null =
      selectedValues.length > 0
        ? {
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
            columnName: filterColumnName ? filterColumnName : '',
            function: ColumnMultiValueFunction.HAS,
            values: selectedValues,
          }
        : null

    executeQueryRequest(request => {
      const currentFilters = currentQuery.query.additionalFilters || []

      const isColumnMultiValueFilter = (
        filter: QueryFilter,
      ): filter is ColumnMultiValueFunctionQueryFilter => 'columnName' in filter

      const updatedFilters = currentFilters.filter(
        filter =>
          !isColumnMultiValueFilter(filter) ||
          filter.columnName !== filterColumnName,
      )

      if (newFilter) {
        updatedFilters.push(newFilter)
      }

      request.query.additionalFilters = updatedFilters

      setSelectedTypes(selectedValues)
      return request
    })
  }

  return (
    <>
      {filterOptions.length ? (
        <div className="ColumnFilter bootstrap-4-backport">
          <Select
            className="react-select-container SRC-inlineBlock"
            value={filterOptions.filter(option =>
              selectedTypes.includes(option.value),
            )}
            options={filterOptions}
            isMulti
            onChange={onChange}
            components={{ Control }}
            placeholder="Select Filter(s)"
            styles={{
              control: provided => ({
                ...provided,
                marginLeft: '15px',
              }),
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default ColumnFilter
