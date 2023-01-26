// The status of a user meeting an AccessRequirement.
// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/AccessRequirementStatus.html

export interface AccessRequirementStatus {
  accessRequirementId: string // The ID of the requested AccessRequirement.
  concreteType: string // Indicates which implementation of AccessRequirementStatus this object represents.
  isApproved: boolean // True if there is an AccessApproval for the user for the given AccessRequirement.
  expiredOn: string // The date that the user no longer have access to the data.
}
