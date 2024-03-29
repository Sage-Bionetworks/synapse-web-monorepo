/**
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/ACCESS_TYPE.html
 */
export enum ACCESS_TYPE {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  CHANGE_PERMISSIONS = 'CHANGE_PERMISSIONS',
  DOWNLOAD = 'DOWNLOAD',
  /**
   * @deprecated
   */
  UPLOAD = 'UPLOAD',
  PARTICIPATE = 'PARTICIPATE',
  SUBMIT = 'SUBMIT',
  READ_PRIVATE_SUBMISSION = 'READ_PRIVATE_SUBMISSION',
  UPDATE_SUBMISSION = 'UPDATE_SUBMISSION',
  DELETE_SUBMISSION = 'DELETE_SUBMISSION',
  TEAM_MEMBERSHIP_UPDATE = 'TEAM_MEMBERSHIP_UPDATE',
  SEND_MESSAGE = 'SEND_MESSAGE',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
  MODERATE = 'MODERATE',
  /** Allows to review a group of submissions (e.g. on ARs) for a given object */
  REVIEW_SUBMISSIONS = 'REVIEW_SUBMISSIONS',
  /** Eligible for exemption when granted this permission on the ACl of the AR */
  EXEMPTION_ELIGIBLE = 'EXEMPTION_ELIGIBLE',
}

export default ACCESS_TYPE
