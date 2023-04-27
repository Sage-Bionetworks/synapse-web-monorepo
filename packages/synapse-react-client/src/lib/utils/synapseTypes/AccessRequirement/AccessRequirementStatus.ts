// The status of a user meeting an AccessRequirement.
// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/AccessRequirementStatus.html

import { ManagedACTAccessRequirementStatus } from './ManagedACTAccessRequirementStatus'

export type AccessRequirementStatus =
  | BasicAccessRequirementStatus
  | ManagedACTAccessRequirementStatus

export type BasicAccessRequirementStatus = {
  /* The ID of the requested AccessRequirement. */
  accessRequirementId: string
  /* Indicates which implementation of AccessRequirementStatus this object represents. */
  concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus'
  /* True if there is an AccessApproval for the user for the given AccessRequirement. */
  isApproved: boolean
  /* The date that the user no longer have access to the data. */
  expiredOn?: string
}
