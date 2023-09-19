import {
  EntityHeader,
  Evaluation,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  FacetColumnValuesRequest,
  QueryBundleRequest,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '../../../../utils'
import { isFacetColumnValuesRequest } from '../../../../utils/types/IsType'

export function valueToLabel(
  facet: FacetColumnResultValueCount,
  profiles: UserGroupHeader[] = [],
  entityHeaders: EntityHeader[] = [],
  evaluations: Evaluation[] = [],
): string {
  const { value } = facet
  let displayValue = value
  if (value === SynapseConstants.VALUE_NOT_SET) {
    return SynapseConstants.FRIENDLY_VALUE_NOT_SET
  }
  const profile = profiles.find(profile => profile.ownerId === value)
  if (profiles.length) {
    displayValue = profile ? profile.userName : `unknown (${value})`
  }

  const eh = entityHeaders.find(eh => eh.id === value)
  if (entityHeaders.length) {
    displayValue = eh ? eh.name : `unknown (${value})`
  }

  const evaluation = evaluations.find(evaluation => evaluation.id === value)
  if (evaluation?.name) {
    displayValue = evaluation.name
  }

  return displayValue
}

/**
 * Based on the uncommitted query, should the "All" checkbox be selected?
 * This only considers filters applied via selectedFacets. Filters applied via
 * sql or additionalFilters will be ignored.
 *
 * @returns true iff no values have been selected for this facet filter
 * @param nextQueryRequest
 * @param facet
 */
export function getAllIsSelected(
  nextQueryRequest: QueryBundleRequest,
  facet: FacetColumnResultValues,
) {
  const matchingSelectedFacet: FacetColumnValuesRequest | undefined =
    nextQueryRequest.query.selectedFacets?.find(
      (facetRequest): facetRequest is FacetColumnValuesRequest =>
        isFacetColumnValuesRequest(facetRequest) &&
        facetRequest.columnName === facet.columnName,
    )

  if (!matchingSelectedFacet) {
    return true
  }
  return matchingSelectedFacet.facetValues.length === 0
}
