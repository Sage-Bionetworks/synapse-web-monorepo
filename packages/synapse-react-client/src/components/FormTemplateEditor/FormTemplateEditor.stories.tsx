import { Meta, StoryObj } from '@storybook/react-vite'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { fn } from 'storybook/test'
import {
  mockClinicalTemplate,
  mockGenomicsTemplate,
} from '@/mocks/accessRequirement/mockFormTemplates'
import {
  mockClinicalSchema,
  mockGenomicsSchema,
} from '@/mocks/accessRequirement/mockJsonSchemas'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import { getCreateSchemaHandlers } from '@/mocks/msw/handlers/createSchemaHandlers'
import { getValidationSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { FormTemplateEditor } from './FormTemplateEditor'

const meta: Meta<typeof FormTemplateEditor> = {
  title: 'Governance/JSON Schema AR/Form Template Editor',
  component: FormTemplateEditor,
  parameters: {
    stack: 'mock',
    msw: {
      // A named-group object (not a flat array) merges by key with the global default handlers
      // set in .storybook/preview.tsx, so unlisted groups (auth, realm, etc.) still apply. A flat
      // array would replace the entire default set instead of merging, dropping those handlers
      // and sending their requests to the real network.
      handlers: {
        formTemplate: getFormTemplateHandlers(MOCK_REPO_ORIGIN),
        createSchema: getCreateSchemaHandlers(MOCK_REPO_ORIGIN),
        validationSchema: getValidationSchemaHandlers(MOCK_REPO_ORIGIN, [
          mockGenomicsSchema,
          mockClinicalSchema,
        ]),
      },
    },
  },
  args: {
    onSaved: fn(),
    onCancel: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormTemplateEditor>

export default meta
type Story = StoryObj<typeof meta>

/** Create a brand new FormTemplate from scratch. */
export const CreateNewTemplate: Story = {}

/** Edit the Genomics DAR template (3 steps, all required). */
export const EditGenomicsTemplate: Story = {
  args: {
    templateId: mockGenomicsTemplate.id,
  },
}

/**
 * Edit the Clinical Trial DAR template — includes a file-upload field
 * (`synapse-filehandle-id`) with a downloadable template, and a
 * `RENEWAL_ONLY` field.
 */
export const EditClinicalTemplate: Story = {
  args: {
    templateId: mockClinicalTemplate.id,
  },
}
