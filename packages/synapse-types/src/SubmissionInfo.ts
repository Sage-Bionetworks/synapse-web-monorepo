import { AccessorChange } from './AccessRequirement'

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/SubmissionInfoPageRequest.html
export interface SubmissionInfoPageRequest {
  accessRequirementId: string
  nextPageToken?: string
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/SubmissionInfoPage.html
export interface SubmissionInfoPage {
  results: SubmissionInfo[]
  nextPageToken?: string
}

//http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/SubmissionInfo.html
export interface SubmissionInfo {
  institution: string
  projectLead: string
  intendedDataUseStatement: string
  modifiedOn: string
  submittedBy: string
  accessorChanges?: AccessorChange[]
}
