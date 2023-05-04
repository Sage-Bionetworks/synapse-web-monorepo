import { sortBy } from 'lodash-es'
import { getAccessRequirementStatus } from '../../utils/SynapseClient'

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
