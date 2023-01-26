/**
 * A request to create a Submission.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/CreateSubmissionRequest.html
 */

import { RestrictableObjectType } from '../RestrictionInformation'

export type CreateSubmissionRequest = {
  requestId: string
  requestEtag: string
  subjectId: string
  subjectType: RestrictableObjectType
}
