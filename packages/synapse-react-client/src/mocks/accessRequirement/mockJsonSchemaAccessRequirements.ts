import {
  JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  JsonSchemaAccessRequirement,
} from '@/utils/types/AccessRequirementFormTypes'

const now = new Date().toISOString()
const actUserId = '1234567'

/**
 * AR 1: "Genomics Data Access"
 * Fields: Institution, Project Lead, Intended Data Use, Agree to Terms
 */
export const mockJsonSchemaAR1: JsonSchemaAccessRequirement = {
  id: 9000,
  name: 'Genomics Data Access',
  etag: 'etag-ar-9000',
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
  concreteType: JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  formFields: [
    { fieldId: 'field-100', fieldVersionNumber: 1, required: true }, // Institution
    { fieldId: 'field-101', fieldVersionNumber: 1, required: true }, // Project Lead
    { fieldId: 'field-103', fieldVersionNumber: 1, required: true }, // Intended Data Use
    { fieldId: 'field-106', fieldVersionNumber: 1, required: true }, // Agree to Terms
  ],
  expirationPeriod: 31536000000, // 1 year
  isCertifiedUserRequired: true,
  isValidatedProfileRequired: false,
  isTwoFaRequired: false,
}

/**
 * AR 2: "Clinical Trial Data Access"
 * Fields: Institution (shared!), Project Title, Data Use Purpose, IRB Approval Number
 * Note: Institution (field-100) is shared with AR 1 to demonstrate deduplication.
 */
export const mockJsonSchemaAR2: JsonSchemaAccessRequirement = {
  id: 9001,
  name: 'Clinical Trial Data Access',
  etag: 'etag-ar-9001',
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
  concreteType: JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  formFields: [
    { fieldId: 'field-100', fieldVersionNumber: 1, required: true }, // Institution (shared)
    { fieldId: 'field-102', fieldVersionNumber: 1, required: true }, // Project Title
    { fieldId: 'field-104', fieldVersionNumber: 1, required: false }, // Data Use Purpose
    { fieldId: 'field-105', fieldVersionNumber: 1, required: false }, // IRB Approval Number
  ],
  expirationPeriod: 15768000000, // 6 months
  isCertifiedUserRequired: true,
  isValidatedProfileRequired: true,
  isTwoFaRequired: true,
}

export const mockJsonSchemaAccessRequirements: JsonSchemaAccessRequirement[] = [
  mockJsonSchemaAR1,
  mockJsonSchemaAR2,
]
