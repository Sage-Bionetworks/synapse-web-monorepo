import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { mockFormTemplates } from '@/mocks/accessRequirement/mockFormTemplates'
import { mockJsonSchemaAR1 } from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import { getMockJsonSchemaById } from '@/mocks/accessRequirement/mockJsonSchemas'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import { JsonSchemaAccessRequirementEditor } from './JsonSchemaAccessRequirementEditor'

const meta: Meta<typeof JsonSchemaAccessRequirementEditor> = {
  title: 'Governance/JSON Schema AR/Access Requirement Editor',
  component: JsonSchemaAccessRequirementEditor,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getFormTemplateHandlers(MOCK_REPO_ORIGIN)],
    },
  },
  args: {
    availableTemplates: mockFormTemplates,
    resolveJsonSchema: getMockJsonSchemaById,
    onSave: fn(),
    onCancel: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof JsonSchemaAccessRequirementEditor>

export default meta
type Story = StoryObj<typeof meta>

/** Create a new AR by picking a FormTemplate. */
export const CreateNew: Story = {}

/** Edit the Genomics Data Access AR. */
export const EditExistingAR: Story = {
  args: {
    initialAR: mockJsonSchemaAR1,
  },
}
