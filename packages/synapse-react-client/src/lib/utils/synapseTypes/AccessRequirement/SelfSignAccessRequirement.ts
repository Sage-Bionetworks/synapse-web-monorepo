import { SelfSignAccessRequirementInterface } from './SelfSignAccessRequirementInterface'

export interface SelfSignAccessRequirement
  extends SelfSignAccessRequirementInterface {
  concreteType: 'org.sagebionetworks.repo.model.SelfSignAccessRequirement'
  isCertifiedUserRequired: boolean // If true, then accessor needs to be a Synapse Certified User to gain access.
  isValidatedProfileRequired: boolean // If true, then accessor needs to have their Synapse Profile validated to gain access.
}
