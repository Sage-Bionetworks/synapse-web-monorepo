import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { MOCK_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'
import { mockClinicalSchema, mockGenomicsSchema } from './mockJsonSchemas'

/**
 * Renders the a Data Access schema as a 2-step form:
 * Research Use → Agreements
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
        },
      ],
    },
  ],
  deprecated: false,
}

/**
 * Renders the Data Access schema as a 2-step form:
 * Project Details → Compliance.
 *
 * Demonstrates a file-upload field with a downloadable template, and a Renewal-only field
 * (`irbApprovalNumber`, gated in `mockClinicalSchema` via `x-synapse-submissionContext`).
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
          isPublic: true,
        },
        {
          schemaPath: '/dataUsePurpose',
          uiDefinition: {},
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
        },
        {
          schemaPath: '/signedDataUseAgreement',
          uiDefinition: {},
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
