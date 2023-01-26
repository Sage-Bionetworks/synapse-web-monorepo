// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/FileHandleAssociateType.html
export enum FileHandleAssociateType {
  FileEntity = 'FileEntity',
  TableEntity = 'TableEntity',
  WikiAttachment = 'WikiAttachment',
  WikiMarkdown = 'WikiMarkdown',
  UserProfileAttachment = 'UserProfileAttachment',
  MessageAttachment = 'MessageAttachment',
  TeamAttachment = 'TeamAttachment',
  SubmissionAttachment = 'SubmissionAttachment',
  VerificationSubmission = 'VerificationSubmission',
  AccessRequirementAttachment = 'AccessRequirementAttachment',
  DataAccessRequestAttachment = 'DataAccessRequestAttachment',
  DataAccessSubmissionAttachment = 'DataAccessSubmissionAttachment',
}

export type FileHandleAssociation = {
  fileHandleId: string //	The ID of the FileHandle.
  associateObjectId: string //	The ID of the object associated with the file
  associateObjectType: FileHandleAssociateType //	Enumeration of all possible objects types that can be associated with a file.
}
