import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  GRID_PAGE_SESSION_ID_QUERY_PARAM,
  GRID_PAGE_TASK_ID_QUERY_PARAM,
} from '@/utils/SynapseConstants'

export function getLinkToEntityPage(
  entityId: string,
  versionNumber?: number,
): string {
  let url = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}Synapse:${entityId}`
  if (versionNumber != null) {
    url += `/version/${versionNumber}`
  }
  return url
}

export function getLinkToGridSession(
  sessionId: string,
  taskId?: number,
): string {
  let url = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}Grid:default?${GRID_PAGE_SESSION_ID_QUERY_PARAM}=${encodeURIComponent(
    sessionId,
  )}`
  if (taskId != null) {
    url += `&${GRID_PAGE_TASK_ID_QUERY_PARAM}=${taskId}`
  }
  return url
}
