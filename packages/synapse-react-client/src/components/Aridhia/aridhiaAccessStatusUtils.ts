import { RestrictionUiType } from '../HasAccess/AccessIcon'
import { Request } from '@sage-bionetworks/aridhia-client/generated/models'

/**
 * Maps an Aridhia request status to the appropriate RestrictionUiType for display.
 *
 * @param request - The Aridhia request object, or undefined if no request exists
 * @returns The appropriate RestrictionUiType based on the request status
 */
export function getRestrictionUiTypeFromAridhiaRequest(
  request: Request | undefined,
): RestrictionUiType {
  if (!request) {
    // No request found - user needs to request access
    return RestrictionUiType.AccessBlockedByRestriction
  }

  switch (request.status) {
    case 'approved':
      return RestrictionUiType.Accessible
    case 'pending':
      return RestrictionUiType.AccessBlockedByRestrictionWithPendingRDCADAPRequest
    case 'denied':
    case 'error':
      return RestrictionUiType.AccessBlockedByACL
    default:
      return RestrictionUiType.AccessBlockedByRestriction
  }
}

/**
 * Finds the Aridhia request for a specific dataset from a list of requests.
 *
 * @param requests - Array of Aridhia requests
 * @param datasetCode - The dataset code to search for
 * @returns The request that contains the specified dataset, or undefined if not found
 */
export function findRequestForDataset(
  requests: Request[],
  datasetCode: string,
): Request | undefined {
  return requests.find(request =>
    request.datasets?.some(dataset => dataset.code === datasetCode),
  )
}
