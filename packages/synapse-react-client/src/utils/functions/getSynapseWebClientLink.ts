import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'

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

export function getLinkToGridSession(sessionId: string) {
  return `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}Grid:${sessionId}`
}
