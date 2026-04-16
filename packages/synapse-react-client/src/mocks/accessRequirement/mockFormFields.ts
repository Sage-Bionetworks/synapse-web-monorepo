import {
  FormField,
  PreFillScope,
  SubmissionContext,
} from '@/utils/types/AccessRequirementFormTypes'

const now = new Date().toISOString()
const actUserId = '1234567'

export const mockInstitutionField: FormField = {
  id: 'field-100',
  name: 'institution',
  etag: 'etag-100',
  schemaDefinition: {
    type: 'string',
    title: 'Institution',
    description:
      'The name of the institution or organization you are affiliated with.',
  },
  uiDefinition: {},
  preFillScope: PreFillScope.USER,
  stepId: 'step-1',
  submissionContext: SubmissionContext.ALWAYS,
  orderWeight: 10,
  deprecated: false,
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
}

export const mockProjectLeadField: FormField = {
  id: 'field-101',
  name: 'projectLead',
  etag: 'etag-101',
  schemaDefinition: {
    type: 'string',
    title: 'Project Lead',
    description: 'The name of the principal investigator or project lead.',
  },
  uiDefinition: {},
  preFillScope: PreFillScope.RENEWAL,
  stepId: 'step-1',
  submissionContext: SubmissionContext.ALWAYS,
  orderWeight: 20,
  deprecated: false,
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
}

export const mockProjectTitleField: FormField = {
  id: 'field-102',
  name: 'projectTitle',
  etag: 'etag-102',
  schemaDefinition: {
    type: 'string',
    title: 'Project Title',
    description: 'The title of the research project.',
  },
  uiDefinition: {},
  preFillScope: PreFillScope.RENEWAL,
  stepId: 'step-2',
  submissionContext: SubmissionContext.ALWAYS,
  orderWeight: 25,
  deprecated: false,
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
}

export const mockIntendedDataUseField: FormField = {
  id: 'field-103',
  name: 'intendedDataUse',
  etag: 'etag-103',
  schemaDefinition: {
    type: 'string',
    title: 'Intended Data Use Statement',
    description: 'Describe in detail how you intend to use the requested data.',
  },
  uiDefinition: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 5,
    },
  },
  preFillScope: PreFillScope.RENEWAL,
  stepId: 'step-2',
  submissionContext: SubmissionContext.ALWAYS,
  orderWeight: 30,
  deprecated: false,
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
}

export const mockDataUsePurposeField: FormField = {
  id: 'field-104',
  name: 'dataUsePurpose',
  etag: 'etag-104',
  schemaDefinition: {
    type: 'string',
    title: 'Data Use Purpose',
    description: 'Select the primary purpose for your use of this data.',
    enum: ['Research', 'Commercial', 'Educational'],
  },
  uiDefinition: {},
  preFillScope: PreFillScope.RENEWAL,
  stepId: 'step-2',
  submissionContext: SubmissionContext.ALWAYS,
  orderWeight: 35,
  deprecated: false,
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
}

export const mockIRBApprovalNumberField: FormField = {
  id: 'field-105',
  name: 'irbApprovalNumber',
  etag: 'etag-105',
  schemaDefinition: {
    type: 'string',
    title: 'IRB Approval Number',
    description:
      'If your institution requires IRB approval, provide the approval number.',
  },
  uiDefinition: {},
  preFillScope: PreFillScope.NONE,
  stepId: 'step-3',
  submissionContext: SubmissionContext.RENEWAL_ONLY,
  orderWeight: 40,
  deprecated: false,
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
}

export const mockAgreeToTermsField: FormField = {
  id: 'field-106',
  name: 'agreeToTerms',
  etag: 'etag-106',
  schemaDefinition: {
    type: 'boolean',
    title: 'Terms and Conditions',
    description:
      'I agree to abide by all terms and conditions for accessing this data, including restrictions on redistribution and re-identification of participants.',
  },
  uiDefinition: {},
  preFillScope: PreFillScope.NONE,
  stepId: 'step-4',
  submissionContext: SubmissionContext.ALWAYS,
  orderWeight: 50,
  deprecated: false,
  versionNumber: 1,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
}

export const mockFormFields: FormField[] = [
  mockInstitutionField,
  mockProjectLeadField,
  mockProjectTitleField,
  mockIntendedDataUseField,
  mockDataUsePurposeField,
  mockIRBApprovalNumberField,
  mockAgreeToTermsField,
]
