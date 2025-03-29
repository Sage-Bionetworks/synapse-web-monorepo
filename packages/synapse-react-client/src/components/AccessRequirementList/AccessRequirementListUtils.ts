import { getAccessRequirementStatus } from '@/synapse-client/SynapseClient'
import { useMediaQuery, useTheme } from '@mui/material'
import { sortBy } from 'lodash-es'

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
 * Determines if we can show ManagedACTAccessRequirement wiki content alongside the forms using a media query.
 * See SWC-6432.
 */
export function useCanShowManagedACTWikiInWizard(): boolean {
  const theme = useTheme()
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.up('md'))
  return matchesBreakpoint
}
