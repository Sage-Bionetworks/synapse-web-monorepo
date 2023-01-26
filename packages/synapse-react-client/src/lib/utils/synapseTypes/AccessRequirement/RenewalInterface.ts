/**
 * A Renewal contains information required by an AccessRequirement and additional information about renewing a request.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/Renewal.html
 */

import { AccessorChange } from './AccessorChange'

export interface RenewalInterface {
  id: string
  accessRequirementId: string
  researchProjectId: string
  createdOn: string
  modifiedOn: string
  createdBy: string
  modifiedBy: string
  ducFileHandleId: string
  irbFileHandleId: string
  attachments: string[]
  accessorChanges: AccessorChange[]
  etag: string
  concreteType: string
  publication: string
  summaryOfUse: string
}
