import {
  FormTemplate,
  FormTemplateFieldSubmissionContextEnum,
} from '@sage-bionetworks/synapse-client'
import { MOCK_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'
import { mockClinicalSchema, mockGenomicsSchema } from './mockJsonSchemas'

/**
 * Renders the Genomics Data Access schema as a 2-step form: Research Use →
 * Agreements. Institution and principal investigator are first-class
 * request fields, not schema-driven steps.
 */
export const mockGenomicsTemplate: FormTemplate = {
  id: 'template-1',
  name: 'Genomics DAR',
  etag: 'etag-template-1',
  versionNumber: 1,
  schema$id: mockGenomicsSchema.$id as string,
  steps: [
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
          submissionContext: FormTemplateFieldSubmissionContextEnum.ALWAYS,
          isPublic: true,
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
          submissionContext: FormTemplateFieldSubmissionContextEnum.ALWAYS,
        },
      ],
    },
  ],
  deprecated: false,
}

/**
 * Renders the Clinical Trial Data Access schema as a 2-step form: Project
 * Details → Compliance. Demonstrates a file-upload field with a downloadable
 * template, and a RENEWAL_ONLY field. Institution is a first-class request
 * field, not a schema-driven step.
 */
export const mockClinicalTemplate: FormTemplate = {
  id: 'template-2',
  name: 'Clinical Trial DAR',
  etag: 'etag-template-2',
  versionNumber: 1,
  schema$id: mockClinicalSchema.$id as string,
  steps: [
    {
      title: 'Project Details',
      fields: [
        {
          schemaPath: '/projectTitle',
          uiDefinition: {},
          submissionContext: FormTemplateFieldSubmissionContextEnum.ALWAYS,
          isPublic: true,
        },
        {
          schemaPath: '/dataUsePurpose',
          uiDefinition: {},
          submissionContext: FormTemplateFieldSubmissionContextEnum.ALWAYS,
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
          submissionContext:
            FormTemplateFieldSubmissionContextEnum.RENEWAL_ONLY,
        },
        {
          schemaPath: '/signedDataUseAgreement',
          uiDefinition: {},
          submissionContext: FormTemplateFieldSubmissionContextEnum.ALWAYS,
          templateFileHandleId: MOCK_FILE_HANDLE_ID,
        },
      ],
    },
  ],
  deprecated: false,
}

export const mockFormTemplates: FormTemplate[] = [
  mockGenomicsTemplate,
  mockClinicalTemplate,
]
