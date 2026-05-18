import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import {
  mockClinicalTemplate,
  mockGenomicsTemplate,
} from '@/mocks/accessRequirement/mockFormTemplates'
import {
  mockJsonSchemaAR1,
  mockJsonSchemaAR2,
} from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import {
  mockClinicalSchema,
  mockGenomicsSchema,
} from '@/mocks/accessRequirement/mockJsonSchemas'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import { DataAccessRequestForm } from './DataAccessRequestForm'

const meta: Meta<typeof DataAccessRequestForm> = {
  title: 'Governance/JSON Schema AR/Data Access Request Form',
  component: DataAccessRequestForm,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getFormTemplateHandlers(MOCK_REPO_ORIGIN)],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataAccessRequestForm>

export default meta
type Story = StoryObj<typeof meta>

/** Multi-step form for the Genomics Data Access AR. */
export const GenomicsDataAccess: Story = {
  args: {
    accessRequirement: mockJsonSchemaAR1,
    formTemplate: mockGenomicsTemplate,
    jsonSchema: mockGenomicsSchema,
  },
}

/**
 * Clinical Trial Data Access AR. Includes a file-upload field
 * (`synapse-filehandle-id` schema format with a downloadable template) and a
 * `RENEWAL_ONLY` field that does NOT appear in this initial REQUEST.
 */
export const ClinicalTrialDataAccess: Story = {
  args: {
    accessRequirement: mockJsonSchemaAR2,
    formTemplate: mockClinicalTemplate,
    jsonSchema: mockClinicalSchema,
  },
}

/**
 * Renewal of the Clinical Trial AR. Demonstrates how the `RENEWAL_ONLY`
 * field (IRB Approval Number) appears for renewals but not initial requests.
 */
export const ClinicalTrialRenewal: Story = {
  args: {
    accessRequirement: mockJsonSchemaAR2,
    formTemplate: mockClinicalTemplate,
    jsonSchema: mockClinicalSchema,
    requestType: 'RENEWAL',
  },
}

/**
 * Genomics AR with pre-filled data, simulating a SchemaDataDraft loaded for
 * a returning user.
 */
export const WithDraftData: Story = {
  args: {
    accessRequirement: mockJsonSchemaAR1,
    formTemplate: mockGenomicsTemplate,
    jsonSchema: mockGenomicsSchema,
    initialSubmissionData: {
      institution: 'Sage Bionetworks',
      projectLead: 'Dr. Jane Smith',
    },
  },
}
