/**
 * Builds a link to a dataset's page on the RDCA-DAP FAIR portal's browsable UI.
 */
export function getAridhiaFairPortalDatasetUrl(
  fairPortalUrl: string,
  datasetCode: string,
): string {
  return `${fairPortalUrl}/#/data/datasets/${datasetCode}`
}

/**
 * Builds a link to a specific data access request's page on the RDCA-DAP FAIR portal's
 * browsable UI.
 */
export function getAridhiaFairPortalRequestUrl(
  fairPortalUrl: string,
  requestCode: string,
): string {
  return `${fairPortalUrl}/#/data/requests/${requestCode}`
}
