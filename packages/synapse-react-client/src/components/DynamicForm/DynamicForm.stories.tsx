import { Meta, StoryObj } from '@storybook/react-vite'
import DynamicForm, { DynamicFormProps } from './DynamicForm'
import { fn } from 'storybook/test'

const meta = {
  title: 'UI/DynamicForm',
  component: DynamicForm,
} satisfies Meta<DynamicFormProps>
export default meta
type Story = StoryObj<typeof meta>

export const NFDataSubmissionForm: Story = {
  args: {
    schemaUrl:
      'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/main/NF-Tools-Schemas/SubmitObservationSchema.json',
    uiSchemaUrl:
      'https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/main/NF-Tools-Schemas/SubmitObservationUiSchema.json',
    postUrl: 'https://submit-form.com/KwZ46H4T',
    // Set mutateFormDataBeforePost if service expects the form data wrapped in some other data.  For example:
    // mutateFormDataBeforePost: formData => {
    //   return {
    //     event_type: 'submission',
    //     client_payload: {
    //       formData: formData,
    //     },
    //   }
    // },
    onCancel: fn(),
  },
}
