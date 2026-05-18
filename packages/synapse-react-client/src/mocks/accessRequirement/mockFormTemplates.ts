import {
  FormTemplate,
  SubmissionContext,
} from '@/utils/types/AccessRequirementFormTypes'
import { mockClinicalSchema, mockGenomicsSchema } from './mockJsonSchemas'

const now = new Date().toISOString()
const actUserId = '1234567'

/**
 * Renders the Genomics Data Access schema as a 3-step form:
 * About You → Research Use → Agreements.
 */
export const mockGenomicsTemplate: FormTemplate = {
  id: 'template-1',
  name: 'Genomics DAR',
  etag: 'etag-template-1',
  versionNumber: 1,
  schemaRef: {
    $id: mockGenomicsSchema.$id as string,
    semanticVersion: '1.0.0',
  },
  steps: [
    {
      title: 'About You',
      description:
        'Please provide your personal and institutional information below.',
      fields: [
        {
          schemaPath: '/institution',
          uiDefinition: {},
          submissionContext: SubmissionContext.ALWAYS,
        },
        {
          schemaPath: '/projectLead',
          uiDefinition: {},
          submissionContext: SubmissionContext.ALWAYS,
        },
      ],
    },
    {
      title: 'Research Use',
      description:
        'Describe your research project and how you intend to use the data.',
      fields: [
        {
          schemaPath: '/intendedDataUse',
          uiDefinition: {
            'ui:widget': 'textarea',
            'ui:options': { rows: 5 },
          },
          submissionContext: SubmissionContext.ALWAYS,
        },
      ],
    },
    {
      title: 'Agreements',
      description:
        'Review and agree to the terms and conditions for accessing this data.',
      fields: [
        {
          schemaPath: '/agreeToTerms',
          uiDefinition: {},
          submissionContext: SubmissionContext.ALWAYS,
        },
      ],
    },
  ],
  deprecated: false,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
}

/**
 * Renders the Clinical Trial Data Access schema as a 4-step form. Demonstrates
 * a file-upload field with a downloadable template, and a RENEWAL_ONLY field.
 */
export const mockClinicalTemplate: FormTemplate = {
  id: 'template-2',
  name: 'Clinical Trial DAR',
  etag: 'etag-template-2',
  versionNumber: 1,
  schemaRef: {
    $id: mockClinicalSchema.$id as string,
    semanticVersion: '1.0.0',
  },
  steps: [
    {
      title: 'About You',
      description:
        'Please provide your personal and institutional information below.',
      fields: [
        {
          schemaPath: '/institution',
          uiDefinition: {},
          submissionContext: SubmissionContext.ALWAYS,
        },
      ],
    },
    {
      title: 'Project Details',
      fields: [
        {
          schemaPath: '/projectTitle',
          uiDefinition: {},
          submissionContext: SubmissionContext.ALWAYS,
        },
        {
          schemaPath: '/dataUsePurpose',
          uiDefinition: {},
          submissionContext: SubmissionContext.ALWAYS,
        },
      ],
    },
    {
      title: 'Compliance',
      description: 'Provide any required compliance documentation.',
      fields: [
        {
          schemaPath: '/irbApprovalNumber',
          uiDefinition: {},
          submissionContext: SubmissionContext.RENEWAL_ONLY,
        },
        {
          schemaPath: '/signedDataUseAgreement',
          uiDefinition: {},
          submissionContext: SubmissionContext.ALWAYS,
          templateFileHandleId: 9876543210,
        },
      ],
    },
  ],
  deprecated: false,
  createdOn: now,
  modifiedOn: now,
  createdBy: actUserId,
  modifiedBy: actUserId,
}

export const mockFormTemplates: FormTemplate[] = [
  mockGenomicsTemplate,
  mockClinicalTemplate,
]
