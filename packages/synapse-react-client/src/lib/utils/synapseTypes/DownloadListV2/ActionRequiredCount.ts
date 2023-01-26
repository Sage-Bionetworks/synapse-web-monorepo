// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/ActionRequiredCount.html

export type Action = RequestDownload | MeetAccessRequirement

export type ActionRequiredCount = {
  action: Action // An action that the user must take in order to download a file.
  count: number // The number of files that require this action.
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/RequestDownload.html
// In order to download a one or more files, the user will need to be granted the 'DOWNLOAD' permission.
export type RequestDownload = {
  concreteType: string
  benefactorId: number // The benefactor is the ID of the Entity with the ACL that controls access to one or more files.
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/MeetAccessRequirement.html
// In order to download a file the user will need to meet an access requirement associated with the file.
export type MeetAccessRequirement = {
  concreteType: string
  accessRequirementId: number // The ID of the access requirement that the user needs to meet in order to download a file.
}
