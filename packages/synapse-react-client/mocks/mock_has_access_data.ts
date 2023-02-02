import {
  RestrictionInformationResponse,
  RestrictionLevel,
} from '../src/lib/utils/synapseTypes/'

export const mockUnmetControlledDataRestrictionInformationACT: RestrictionInformationResponse =
  {
    restrictionLevel: RestrictionLevel.CONTROLLED_BY_ACT,
    hasUnmetAccessRequirement: true,
  }

export const mockUnmetControlledDataRestrictionInformationRestricted: RestrictionInformationResponse =
  {
    restrictionLevel: RestrictionLevel.RESTRICTED_BY_TERMS_OF_USE,
    hasUnmetAccessRequirement: true,
  }

export const mockOpenRestrictionInformation: RestrictionInformationResponse = {
  restrictionLevel: RestrictionLevel.OPEN,
  hasUnmetAccessRequirement: false,
}
