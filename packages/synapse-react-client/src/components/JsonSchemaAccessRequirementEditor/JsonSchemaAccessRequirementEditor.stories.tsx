import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { mockFormFields } from '@/mocks/accessRequirement/mockFormFields'
import { mockFormSteps } from '@/mocks/accessRequirement/mockFormSteps'
import { mockJsonSchemaAR1 } from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import { getFormFieldHandlers } from '@/mocks/msw/handlers/formFieldHandlers'
import { getFormStepHandlers } from '@/mocks/msw/handlers/formStepHandlers'
import { JsonSchemaAccessRequirementEditor } from './JsonSchemaAccessRequirementEditor'

const meta: Meta<typeof JsonSchemaAccessRequirementEditor> = {
  title: 'Governance/JSON Schema AR/Access Requirement Editor',
  component: JsonSchemaAccessRequirementEditor,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getFormFieldHandlers(MOCK_REPO_ORIGIN),
        ...getFormStepHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    availableFields: mockFormFields,
    formSteps: mockFormSteps,
    onSave: fn(),
    onCancel: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof JsonSchemaAccessRequirementEditor>

export default meta
type Story = StoryObj<typeof meta>

/** Create a new Access Requirement by selecting fields. */
export const CreateNew: Story = {}

/** Edit an existing AR (Genomics Data Access) with pre-selected fields. */
export const EditExistingAR: Story = {
  args: {
    initialAR: mockJsonSchemaAR1,
  },
}
