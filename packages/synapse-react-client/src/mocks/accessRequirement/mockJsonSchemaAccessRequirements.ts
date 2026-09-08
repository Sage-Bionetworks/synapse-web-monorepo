import {
  JsonSchemaAccessRequirement,
  JsonSchemaAccessRequirementConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { MOCK_DUC_TEMPLATE_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'

const now = new Date().toISOString()
const actUserId = '1234567'

/** AR 1: Genomics Data Access — references the Genomics FormTemplate. No DUC required. */
export const mockJsonSchemaAR1: JsonSchemaAccessRequirement = {
  id: 9000,
  name: 'Genomics Data Access',
  etag: 'etag-ar-9000',
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
  concreteType:
    JsonSchemaAccessRequirementConcreteTypeEnum.org_sagebionetworks_repo_model_JsonSchemaAccessRequirement,
  formTemplateRef: { templateId: 'template-1', templateVersionNumber: 1 },
  expirationPeriod: 31536000000, // 1 year
  isCertifiedUserRequired: true,
  isValidatedProfileRequired: false,
  isTwoFaRequired: false,
  isDUCRequired: false,
}

/** AR 2: Clinical Trial Data Access — references the Clinical Trial FormTemplate. Requires an uploaded DUC. */
export const mockJsonSchemaAR2: JsonSchemaAccessRequirement = {
  id: 9001,
  name: 'Clinical Trial Data Access',
  etag: 'etag-ar-9001',
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
  concreteType:
    JsonSchemaAccessRequirementConcreteTypeEnum.org_sagebionetworks_repo_model_JsonSchemaAccessRequirement,
  formTemplateRef: { templateId: 'template-2', templateVersionNumber: 1 },
  expirationPeriod: 15768000000, // 6 months
  isCertifiedUserRequired: true,
  isValidatedProfileRequired: true,
  isTwoFaRequired: true,
  isDUCRequired: true,
  ducTemplateFileHandleId: MOCK_DUC_TEMPLATE_FILE_HANDLE_ID,
}

export const mockJsonSchemaAccessRequirements: JsonSchemaAccessRequirement[] = [
  mockJsonSchemaAR1,
  mockJsonSchemaAR2,
]
