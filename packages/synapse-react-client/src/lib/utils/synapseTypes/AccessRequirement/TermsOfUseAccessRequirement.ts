import { SelfSignAccessRequirementInterface } from './SelfSignAccessRequirementInterface'

export interface TermsOfUseAccessRequirement
  extends SelfSignAccessRequirementInterface {
  concreteType: 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement'
  termsOfUse: string //	Terms Of Use for Access, stored directly in the document (versus in a referenced Location) Required when creating or updating.
}
