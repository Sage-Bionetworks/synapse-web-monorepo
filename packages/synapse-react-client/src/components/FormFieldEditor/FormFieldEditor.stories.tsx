import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { mockFormSteps } from '@/mocks/accessRequirement/mockFormSteps'
import {
  mockDataUsePurposeField,
  mockInstitutionField,
} from '@/mocks/accessRequirement/mockFormFields'
import { getFormFieldHandlers } from '@/mocks/msw/handlers/formFieldHandlers'
import { getFormStepHandlers } from '@/mocks/msw/handlers/formStepHandlers'
import { FormFieldEditor } from './FormFieldEditor'

const meta: Meta<typeof FormFieldEditor> = {
  title: 'Governance/JSON Schema AR/Form Field Editor',
  component: FormFieldEditor,
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
    onSave: fn(),
    onCancel: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormFieldEditor>

export default meta
type Story = StoryObj<typeof meta>

/** Create a brand new form field from scratch. */
export const CreateNewField: Story = {}

/** Edit an existing text field (Institution). */
export const EditExistingField: Story = {
  args: {
    initialField: mockInstitutionField,
  },
}

/** Edit a field with enum/dropdown options (Data Use Purpose). */
export const SelectFieldWithEnumOptions: Story = {
  args: {
    initialField: mockDataUsePurposeField,
  },
}
