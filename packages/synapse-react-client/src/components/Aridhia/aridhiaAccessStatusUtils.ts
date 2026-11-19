import { RestrictionUiType } from '../HasAccess/AccessIcon'
import type { AridhiaError } from '@/aridhia-queries'
import {
  RequestListItem,
  RequestWorkspaceStatus,
} from '@sage-bionetworks/aridhia-client/generated/models'

export type RequestStatus = NonNullable<RequestListItem['status']>

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
 * @returns The matching requests, most recently updated first; requests whose `updated_at` is
 *   missing or unparseable sort last
 */
export function findRequestsForDataset(
  requests: readonly RequestListItem[],
  datasetCode: string,
): RequestListItem[] {
  return requests
    .filter(request =>
      request.datasets?.some(dataset => dataset.code === datasetCode),
    )
    .toSorted((a, b) => {
      const aMillis = updatedAtMillis(a)
      const bMillis = updatedAtMillis(b)
      return aMillis === bMillis ? 0 : bMillis - aMillis
    })
}

/** Undated and unparseable timestamps map to -Infinity so they sort after every real date. */
function updatedAtMillis(request: RequestListItem): number {
  const millis = Date.parse(request.updated_at ?? '')
  return Number.isNaN(millis) ? -Infinity : millis
}

/** What one request's row offers as its route to the data, derived from its workspace query. */
export type RequestDataAccess =
  /** Not approved: the row reports status only. */
  | { kind: 'none' }
  /** Approved, but RDCA-DAP hasn't transferred the data yet. */
  | { kind: 'transferPending' }
  /** Transferred; the workspace status is still loading. */
  | { kind: 'checkingWorkspace' }
  /** Transferred; the workspace isn't found (404) or has no inbox URL yet. */
  | { kind: 'workspacePreparing' }
  /** Transferred; the workspace status couldn't be loaded. */
  | { kind: 'workspaceError' }
  /** Transferred to a workspace whose inbox can be opened. */
  | { kind: 'workspaceAvailable'; inboxUrl: string; workspaceName?: string }

/** The parts of the request-workspace query that `getRequestDataAccess` reads. */
export type RequestWorkspaceQueryState = {
  data?: RequestWorkspaceStatus
  error: AridhiaError | null
  isPending: boolean
}

/** Whether a request's row needs its workspace status: only transferred requests link a workspace. */
export function needsWorkspace(request: RequestListItem): boolean {
  return (
    request.status === 'approved' &&
    !!request.transfer?.transferred_at &&
    !!request.code
  )
}

/**
 * Decides a request's route to its data, mirroring RDCA-DAP's own request pages: the workspace
 * counts as available only once `workspace_inbox_url` is set (a `workspace_url` alone is not
 * enough), and a 404 means the workspace doesn't exist yet rather than a failure.
 */
export function getRequestDataAccess(
  request: RequestListItem,
  workspaceQuery: RequestWorkspaceQueryState,
): RequestDataAccess {
  if (request.status !== 'approved') {
    return { kind: 'none' }
  }
  if (!request.transfer?.transferred_at) {
    return { kind: 'transferPending' }
  }
  if (!needsWorkspace(request)) {
    // Without a request code there's no workspace to look up.
    return { kind: 'workspaceError' }
  }
  // A failed refetch keeps the last good data; a known link outranks the error.
  const inboxUrl = workspaceQuery.data?.workspace_inbox_url
  if (inboxUrl) {
    return {
      kind: 'workspaceAvailable',
      inboxUrl,
      workspaceName: workspaceQuery.data?.workspace_name,
    }
  }
  if (workspaceQuery.error) {
    return workspaceQuery.error.httpStatus === 404
      ? { kind: 'workspacePreparing' }
      : { kind: 'workspaceError' }
  }
  if (workspaceQuery.isPending) {
    return { kind: 'checkingWorkspace' }
  }
  return { kind: 'workspacePreparing' }
}
