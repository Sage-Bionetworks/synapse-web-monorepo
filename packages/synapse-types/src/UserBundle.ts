import { VerificationSubmission } from './VerificationSubmission'
import { UserProfile } from './UserProfile'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/UserBundle.html
export type UserBundle = {
  userId: string // The ID of the user described by this bundle
  userProfile?: UserProfile // JSON schema for UserProfile POJO
  ORCID?: string // The ORCID ID for the user, if any
  verificationSubmission?: VerificationSubmission // User info submitted for verification by Synapse ACT
  isCertified?: boolean // true iff the user is Certified
  isVerified?: boolean // true iff the user is Verified
  isACTMember?: boolean // true iff the user is an ACT member
  isARReviewer?: boolean // true iff the user has permissions to review data access submissions on at least one access requirement (This is always true for an ACT member)
}
