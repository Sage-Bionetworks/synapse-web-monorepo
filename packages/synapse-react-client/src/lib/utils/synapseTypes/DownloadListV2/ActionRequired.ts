// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/ActionRequiredCount.html

export type Action = RequestDownload | MeetAccessRequirement | EnableTwoFa

export type ActionRequiredCount = {
  action: Action // An action that the user must take in order to download a file.
  count: number // The number of files that require this action.
}

//https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/ActionRequiredList.html
export type ActionRequiredList = {
  actions: Action[]
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/RequestDownload.html
// In order to download a one or more files, the user will need to be granted the 'DOWNLOAD' permission.
export type RequestDownload = {
  concreteType: 'org.sagebionetworks.repo.model.download.RequestDownload'
  benefactorId: number // The benefactor is the ID of the Entity with the ACL that controls access to one or more files.
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/download/MeetAccessRequirement.html
// In order to download a file the user will need to meet an access requirement associated with the file.
export type MeetAccessRequirement = {
  concreteType: 'org.sagebionetworks.repo.model.download.MeetAccessRequirement'
  accessRequirementId: number // The ID of the access requirement that the user needs to meet in order to download a file.
}

export type EnableTwoFa = {
  concreteType: 'org.sagebionetworks.repo.model.download.EnableTwoFa'
  /* The ID of the first access requirement that requires two-factor authentication. */
  accessRequirementId: number
}
