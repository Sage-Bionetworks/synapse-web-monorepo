import { RestrictionUiType } from '../HasAccess/AccessIcon'
import { RequestListItem } from '@sage-bionetworks/aridhia-client/generated/models'

type RequestStatus = NonNullable<RequestListItem['status']>

/**
 * A user may hold several DARs for one dataset (e.g. different tables, or a resubmission after
 * a denial). The icon reflects the most favorable one: any approval grants access to some of
 * the data, and any pending request means a decision is still outstanding.
 */
const STATUS_PRECEDENCE: readonly RequestStatus[] = [
  'approved',
  'pending',
  'denied',
  'error',
]

const RESTRICTION_UI_TYPE_BY_STATUS: Record<RequestStatus, RestrictionUiType> =
  {
    approved: RestrictionUiType.AccessibleOnRDCADAP,
    pending:
      RestrictionUiType.AccessBlockedByRestrictionWithPendingRDCADAPRequest,
    denied:
      RestrictionUiType.AccessBlockedByRestrictionWithRejectedRDCADAPRequest,
    error: RestrictionUiType.AccessBlockedByACL,
  }

/**
 * Maps a user's Aridhia requests for one dataset to the RestrictionUiType for display.
 *
 * @param requests - Every request the user holds for the dataset (may be empty)
 * @returns The RestrictionUiType of the highest-precedence status present, or
 *   `AccessBlockedByRestriction` when no request has a recognized status
 */
export function getRestrictionUiTypeFromAridhiaRequests(
  requests: readonly RequestListItem[],
): RestrictionUiType {
  const statuses = new Set(requests.map(request => request.status))
  const status = STATUS_PRECEDENCE.find(candidate => statuses.has(candidate))
  return status
    ? RESTRICTION_UI_TYPE_BY_STATUS[status]
    : RestrictionUiType.AccessBlockedByRestriction
}

/**
 * Finds every Aridhia request that includes a specific dataset.
 *
 * @param requests - Array of Aridhia requests
 * @param datasetCode - The dataset code to search for (case-sensitive)
 * @returns The matching requests, most recently updated first; requests without `updated_at`
 *   sort last
 */
export function findRequestsForDataset(
  requests: readonly RequestListItem[],
  datasetCode: string,
): RequestListItem[] {
  return requests
    .filter(request =>
      request.datasets?.some(dataset => dataset.code === datasetCode),
    )
    .sort((a, b) => (b.updated_at ?? '').localeCompare(a.updated_at ?? ''))
}
