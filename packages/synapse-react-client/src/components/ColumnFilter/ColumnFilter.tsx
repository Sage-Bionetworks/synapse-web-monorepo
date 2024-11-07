import React from 'react'
import { useQueryContext } from '../QueryContext/QueryContext'
import {
  FacetColumnResultValues,
  FacetColumnValuesRequest,
} from '@sage-bionetworks/synapse-types'
import { useQuery } from '@tanstack/react-query'
import { Autocomplete, TextField, Box } from '@mui/material'
import { getCorrespondingSelectedFacet } from '../../utils/functions/queryUtils'

export type FilterProps = {
  filterColumnName?: string
  addValueToSelectedFacet?: (
    facet: { columnName: string },
    value: string,
  ) => void
  removeSelectedFacet?: (facet: { columnName: string }) => void
}

function ColumnFilter(props: FilterProps) {
  const queryContext = useQueryContext()
  const {
    executeQueryRequest,
    queryMetadataQueryOptions,
    getCurrentQueryRequest,
  } = queryContext
  const { data: queryMetadata } = useQuery(queryMetadataQueryOptions)
  const { filterColumnName } = props

  const addValueToSelectedFacet = queryContext.addValueToSelectedFacet
  const removeSelectedFacet = queryContext.removeSelectedFacet

  const currentQuery = getCurrentQueryRequest()

  const activeFacet = (queryMetadata?.facets ?? []).find(
    facet => facet.columnName === `${filterColumnName}`,
  ) as FacetColumnResultValues | undefined

  // Map the facet values to format for MUI Autocomplete options
  const filterOptions = activeFacet?.facetValues.map(({ value }) => value) ?? []

  const selectedFacetFromQuery = getCorrespondingSelectedFacet(
    { columnName: filterColumnName || '' },
    currentQuery.query.selectedFacets,
  ) as FacetColumnValuesRequest | undefined

  const selectedValues = selectedFacetFromQuery?.facetValues || []

  const onChange = (
    event: React.SyntheticEvent,
    values: string[], // New value for the selected options
  ) => {
    const facetIdentifier = { columnName: filterColumnName || '' }

    removeSelectedFacet(facetIdentifier)

    values.forEach(value => addValueToSelectedFacet(facetIdentifier, value))

    executeQueryRequest(request => request)
  }

  return (
    <Box data-testid="column-filter">
      {filterOptions.length > 0 && (
        <Autocomplete
          multiple
          options={filterOptions}
          value={selectedValues}
          onChange={onChange}
          renderInput={params => (
            <TextField {...params} placeholder="Select Filter(s)" />
          )}
        />
      )}
    </Box>
  )
}

export default ColumnFilter
