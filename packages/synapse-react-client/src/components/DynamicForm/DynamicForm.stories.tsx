import { Meta, StoryObj } from '@storybook/react'
import DynamicForm, { DynamicFormProps } from './DynamicForm'
import { fn } from '@storybook/test'

const meta = {
  title: 'UI/DynamicForm',
  component: DynamicForm,
} satisfies Meta<DynamicFormProps>
export default meta
type Story = StoryObj<typeof meta>

export const NFDataSubmissionForm: Story = {
  args: {
    schemaUrl:
      'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/cconrad8-patch-1/NF-Tools-Schemas/SubmitObservationSchema.json',
    uiSchemaUrl:
      'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/cconrad8-patch-1/NF-Tools-Schemas/SubmitObservationUiSchema.json',
    postUrl: 'https://api.github.com/repos/nf-osi/tap/dispatches',
    mutateFormDataBeforePost: formData => {
      return {
        event_type: 'submission',
        client_payload: {
          formData: formData,
        },
      }
    },
    onCancel: fn(),
  },
}
