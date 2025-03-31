import { SynapseConstants } from '@/utils'
import { getCorrespondingSelectedFacet } from '@/utils/functions/queryUtils'
import { isFacetColumnValuesRequest } from '@/utils/types/IsType'
import {
  EntityHeader,
  Evaluation,
  FacetColumnRequest,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  QueryBundleRequest,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'

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
  const matchingSelectedFacet: FacetColumnRequest | undefined =
    getCorrespondingSelectedFacet(facet, nextQueryRequest.query.selectedFacets)
  if (!matchingSelectedFacet) {
    return true
  }

  if (!isFacetColumnValuesRequest(matchingSelectedFacet)) {
    console.error(
      'getAllIsSelected: matchingSelectedFacet is not a FacetColumnValuesRequest',
      matchingSelectedFacet,
    )
    return true
  }

  return matchingSelectedFacet.facetValues.length === 0
}
