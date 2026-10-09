import { getAccessRequirementStatus } from '@/synapse-client/SynapseClient'
import { useMediaQuery, useTheme } from '@mui/material'
import { sortBy } from 'lodash-es'
import {
  AccessRequirement,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'

/**
 * Given an array of access requirement IDs, return the IDs sorted by the user's status, where
 * completed access requirements are shown first.
 * @param accessToken
 * @param requirementIds
 */
export const sortAccessRequirementsByCompletion = async (
  accessToken: string | undefined,
  requirementIds: string[],
): Promise<string[]> => {
  const statuses = requirementIds.map(id => {
    return getAccessRequirementStatus(accessToken, id)
  })
  const accessRequirementStatuses = await Promise.all(statuses)

  return sortBy(requirementIds, id => {
    // if its true then it should come first, which means that it should be higher in the list
    // which is sorted ascendingly
    return (
      -1 *
      Number(
        accessRequirementStatuses.find(
          status => id === status.accessRequirementId,
        )!.isApproved,
      )
    )
  })
}

/**
 * Determines if the wiki of the access requirement in the request wizard is shown alongside the forms. Only a
 * ManagedACTAccessRequirement's wiki is shown, and only on screens wide enough to fit it (SWC-6432).
 */
export function useShowAccessRequirementWikiInWizard(
  accessRequirement: Pick<AccessRequirement, 'concreteType'> | undefined,
): boolean {
  const theme = useTheme()
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.up('md'))
  // A JsonSchemaAccessRequirement's form describes what it asks, so its wiki is not shown beside the form
  return (
    accessRequirement?.concreteType ===
      MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE && matchesBreakpoint
  )
}
