/**
 * The status of the file handle as computed by the backend. This value cannot be changed, any file handle that is not AVAILABLE should not be used.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/FileHandleStatus.html
 */
export type FileHandleStatus =
  /** The default status of a file handle that is considered available and linked to at least on object (For the possible associations see FileHandleAssociateType). */
  | 'AVAILABLE'
  /** The file handle has been detected as not linked to any object (For the possible associations see FileHandleAssociateType), this file will eventually be archived. */
  | 'UNLINKED'
  /** The file handle has been archived after being UNLINKED for more than 30 days. The file handle can be restored by the creator using the dedicated API. When ARCHIVED the file might not be readily accessible and restoring might take a few hours. */
  | 'ARCHIVED'
