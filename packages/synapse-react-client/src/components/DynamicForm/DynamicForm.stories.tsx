import { Meta, StoryObj } from '@storybook/react'
import DynamicForm, { DynamicFormProps } from './DynamicForm'

const meta = {
  title: 'UI/DynamicForm',
  component: DynamicForm,
} satisfies Meta<DynamicFormProps>
export default meta
type Story = StoryObj<typeof meta>

export const NFDataSubmissionForm: Story = {
  args: {
    schemaUrl: '',
    uiSchemaUrl: '',
    postUrl:
      'https://invalidpost-address.fdsjklafjsdkljdklsaf.org/fdsklajfdklsa',
    //'https://api.github.com/repos/nf-osi/tap/dispatches'
    mutateFormDataBeforePost: formData => {
      return {
        event_type: 'submission',
        client_payload: {
          formData: formData,
        },
      }
    },
  },
}
