import { ACTAccessRequirementInterface } from './ACTAccessRequirementInterface'

//https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/ACTAccessRequirement.html
export interface ACTAccessRequirement extends ACTAccessRequirementInterface {
  concreteType: 'org.sagebionetworks.repo.model.ACTAccessRequirement'
  actContactInfo: string //Information on how to contact the Synapse ACT for access approval (external to Synapse). Required when creating or updating.
  openJiraIssue: boolean //If true, then in addition to following directions in the 'actContactInfo' the client should open a JIRA issue to notify the ACT. If omitted, default is 'true'.
}
