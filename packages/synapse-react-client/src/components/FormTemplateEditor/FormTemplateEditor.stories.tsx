import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
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
import { getValidationSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { FormTemplateEditor } from './FormTemplateEditor'

const meta: Meta<typeof FormTemplateEditor> = {
  title: 'Governance/JSON Schema AR/Form Template Editor',
  component: FormTemplateEditor,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getFormTemplateHandlers(MOCK_REPO_ORIGIN),
        ...getValidationSchemaHandlers(MOCK_REPO_ORIGIN, [
          mockGenomicsSchema,
          mockClinicalSchema,
        ]),
      ],
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
