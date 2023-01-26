import { SubmissionContributor } from './SubmissionContributor'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/evaluation/model/Submission.html

export type Submission = {
  id?: string
  userId: string
  submitterAlias?: string
  evaluationId: string
  entityId: string
  entityBundleJSON?: string
  versionNumber: number
  dockerRepositoryName?: string
  dockerDigest?: string
  name?: string
  createdOn?: string
  teamId?: string
  contributors?: SubmissionContributor
}
