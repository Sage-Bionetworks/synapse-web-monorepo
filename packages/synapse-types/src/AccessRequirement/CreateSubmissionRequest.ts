import { RestrictableObjectType } from '../RestrictionInformation'

/**
 * A request to create a Submission.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/CreateSubmissionRequest.html
 */
export type CreateSubmissionRequest = {
  /* The ID of a Request to create the Submission from. */
  requestId: string
  /* The current etag of the request. */
  requestEtag: string
  /* The ID of the subject user interested in. This information will be used to help user navigate back to where they were to continue their work. */
  subjectId: string
  /* JSON enum for the types of objects which can be restricted by an AccessRequirement. */
  subjectType: RestrictableObjectType
}
