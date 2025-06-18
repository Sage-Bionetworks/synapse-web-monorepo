import { UniqueFacetIdentifier } from '@/utils'
import {
  facetObjectMatchesDefinition,
  getCorrespondingSelectedFacet,
} from '@/utils/functions/queryUtils'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import {
  FacetColumnResultValues,
  FacetColumnValuesRequest,
} from '@sage-bionetworks/synapse-types'
import { SyntheticEvent } from 'react'
import { useQueryContext } from '../QueryContext/QueryContext'
import { useGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'

export type FilterProps = {
  topLevelEnumeratedFacetToFilter: UniqueFacetIdentifier
}

function ColumnFilter(props: FilterProps) {
  const queryContext = useQueryContext()
  const {
    getCurrentQueryRequest,
    addValueToSelectedFacet,
    removeSelectedFacet,
  } = queryContext
  const { data: queryMetadata } = useGetQueryMetadata()
  const { topLevelEnumeratedFacetToFilter } = props

  const currentQuery = getCurrentQueryRequest()

  const activeFacet = (queryMetadata?.facets ?? []).find(facet =>
    facetObjectMatchesDefinition(facet, topLevelEnumeratedFacetToFilter),
  ) as FacetColumnResultValues | undefined

  // Map the facet values to format for MUI Autocomplete options
  const filterOptions = activeFacet?.facetValues.map(({ value }) => value) ?? []

  const selectedFacetFromQuery = getCorrespondingSelectedFacet(
    topLevelEnumeratedFacetToFilter,
    currentQuery.query.selectedFacets,
  ) as FacetColumnValuesRequest | undefined

  const selectedValues = selectedFacetFromQuery?.facetValues || []

  const onChange = (
    event: SyntheticEvent,
    values: string[], // New value for the selected options
  ) => {
    removeSelectedFacet(topLevelEnumeratedFacetToFilter)

    values.forEach(value =>
      addValueToSelectedFacet(topLevelEnumeratedFacetToFilter, value),
    )
  }

  return (
    <div>
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
    </div>
  )
}

export default ColumnFilter
