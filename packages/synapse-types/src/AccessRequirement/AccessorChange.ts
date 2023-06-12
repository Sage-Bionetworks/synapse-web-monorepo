/**
 * The type of access change for this user. Users can gain access, renew access, or have access revoked.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/AccessType.html
 */

export enum AccessType {
  GAIN_ACCESS = 'GAIN_ACCESS',
  RENEW_ACCESS = 'RENEW_ACCESS',
  REVOKE_ACCESS = 'REVOKE_ACCESS',
}

/**
 * Request for a single user change access to a resource.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/AccessorChange.html
 */

export type AccessorChange = {
  userId: string
  type: AccessType
}
