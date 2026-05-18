import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import {
  mockClinicalTemplate,
  mockGenomicsTemplate,
} from '@/mocks/accessRequirement/mockFormTemplates'
import { getMockJsonSchemaById } from '@/mocks/accessRequirement/mockJsonSchemas'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import { FormTemplateEditor } from './FormTemplateEditor'

const meta: Meta<typeof FormTemplateEditor> = {
  title: 'Governance/JSON Schema AR/Form Template Editor',
  component: FormTemplateEditor,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getFormTemplateHandlers(MOCK_REPO_ORIGIN)],
    },
  },
  args: {
    onSave: fn(),
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
    initialTemplate: mockGenomicsTemplate,
    initialJsonSchema: getMockJsonSchemaById(
      mockGenomicsTemplate.schemaRef.$id,
    ),
  },
}

/**
 * Edit the Clinical Trial DAR template — includes a file-upload field
 * (`synapse-filehandle-id`) with a downloadable template, and a
 * `RENEWAL_ONLY` field.
 */
export const EditClinicalTemplate: Story = {
  args: {
    initialTemplate: mockClinicalTemplate,
    initialJsonSchema: getMockJsonSchemaById(
      mockClinicalTemplate.schemaRef.$id,
    ),
  },
}
