import { ACTAccessRequirementInterface } from './ACTAccessRequirementInterface'

export interface ManagedACTAccessRequirement
  extends ACTAccessRequirementInterface {
  concreteType: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement' //Indicates which type of AccessRequirement this object represents. Provided by the system, the user may not set this field.
  isCertifiedUserRequired: boolean //If true, then accessor needs to be a Synapse Certified User to gain access.
  isValidatedProfileRequired: boolean //If true, then accessor needs to have their Synapse Profile validated to gain access.
  isDUCRequired: boolean //If true, then accessor needs to fill, sign, and submit a Data Use Certificate (DUC) to gain access to the data.
  ducTemplateFileHandleId: string //If the Data Use Certificate (DUC) is required, creator of this requirement needs to upload a Data Use Certificate (DUC) template. Users have to download this template, fill out, sign and submit it.
  isIRBApprovalRequired: boolean //If true, then accessor needs to submit an Institutional Review Board (IRB) Approval document to gain access to the data.
  areOtherAttachmentsRequired: boolean //If true, then accessor needs to upload attachment(s) other than Data Use Certificate (DUC) and Institutional Review Board (IRB) Approval document to gain access to the data.
  expirationPeriod: number //After an AccessApproval is granted for this AccessRequirement, it will be expired after expirationPeriod miliseconds. Set this value to 0 to indicate that AccessApproval will never be expired.
  isIDUPublic: boolean //If true, the Intended Data Use Statements submitted to gain access to the data will be presented to public.
  isIDURequired: boolean // If true (default), the Intended Data Use Statement for a research project is required.
}
