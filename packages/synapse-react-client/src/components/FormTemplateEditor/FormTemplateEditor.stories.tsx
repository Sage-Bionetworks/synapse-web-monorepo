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
import { getJsonSchemaListingHandlers } from '@/mocks/msw/handlers/jsonSchemaListingHandlers'
import {
  getCreateSchemaHandlers,
  getRegisteredSchemaHandlers,
} from '@/mocks/msw/handlers/schemaHandlers'
import { JSONSchema7 } from 'json-schema'
import { FormTemplateEditor } from './FormTemplateEditor'

// Shared by the create and fetch handlers so a schema version registered on save can be loaded.
const registeredSchemas: JSONSchema7[] = [
  mockGenomicsSchema,
  mockClinicalSchema,
]

const meta: Meta<typeof FormTemplateEditor> = {
  title: 'Governance/JSON Schema AR/Form Template Editor',
  component: FormTemplateEditor,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: {
        formTemplate: getFormTemplateHandlers(MOCK_REPO_ORIGIN),
        createSchema: getCreateSchemaHandlers(
          MOCK_REPO_ORIGIN,
          registeredSchemas,
        ),
        registeredSchema: getRegisteredSchemaHandlers(
          MOCK_REPO_ORIGIN,
          registeredSchemas,
        ),
        schemaVersions: getJsonSchemaListingHandlers(MOCK_REPO_ORIGIN).versions,
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
