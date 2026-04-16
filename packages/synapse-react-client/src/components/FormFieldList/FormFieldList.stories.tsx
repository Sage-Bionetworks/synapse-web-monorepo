import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { mockFormFields } from '@/mocks/accessRequirement/mockFormFields'
import { mockFormSteps } from '@/mocks/accessRequirement/mockFormSteps'
import { getFormFieldHandlers } from '@/mocks/msw/handlers/formFieldHandlers'
import { getFormStepHandlers } from '@/mocks/msw/handlers/formStepHandlers'
import { FormFieldList } from './FormFieldList'

const meta: Meta<typeof FormFieldList> = {
  title: 'Governance/JSON Schema AR/Form Field List',
  component: FormFieldList,
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
    formSteps: mockFormSteps,
    onEdit: fn(),
    onAddNew: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormFieldList>

export default meta
type Story = StoryObj<typeof meta>

/** List with seed data showing all available form fields. */
export const WithSeedData: Story = {
  args: {
    fields: mockFormFields,
  },
}

/** Empty state with no fields created yet. */
export const Empty: Story = {
  args: {
    fields: [],
  },
}
