import { normalizeNumericId } from '@/utils/functions/StringUtils'
import {
  RestrictionInformationResponse,
  RestrictionLevel,
} from '@sage-bionetworks/synapse-types'
import {
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
} from './accessRequirement/mockAccessRequirements'
import mockFileEntity, { MOCK_FILE_ENTITY_ID } from './entity/mockFileEntity'

export const mockUnmetControlledDataRestrictionInformationACT = {
  objectId: normalizeNumericId(MOCK_FILE_ENTITY_ID),
  restrictionDetails: [
    {
      accessRequirementId: mockManagedACTAccessRequirement.id,
      isMet: false,
      isExempt: false,
      isApproved: false,
    },
  ],
  restrictionLevel: RestrictionLevel.CONTROLLED_BY_ACT,
  hasUnmetAccessRequirement: true,
  userEntityPermissions: mockFileEntity.bundle.permissions,
} satisfies RestrictionInformationResponse

export const mockUnmetControlledDataRestrictionInformationRestricted = {
  objectId: normalizeNumericId(MOCK_FILE_ENTITY_ID),
  restrictionDetails: [
    {
      accessRequirementId: mockSelfSignAccessRequirement.id,
      isMet: false,
      isExempt: false,
      isApproved: false,
    },
  ],
  restrictionLevel: RestrictionLevel.RESTRICTED_BY_TERMS_OF_USE,
  hasUnmetAccessRequirement: true,
  userEntityPermissions: mockFileEntity.bundle.permissions,
} satisfies RestrictionInformationResponse

export const mockOpenRestrictionInformation = {
  objectId: normalizeNumericId(MOCK_FILE_ENTITY_ID),
  restrictionDetails: [],
  restrictionLevel: RestrictionLevel.OPEN,
  hasUnmetAccessRequirement: false,
  userEntityPermissions: mockFileEntity.bundle.permissions,
} satisfies RestrictionInformationResponse
