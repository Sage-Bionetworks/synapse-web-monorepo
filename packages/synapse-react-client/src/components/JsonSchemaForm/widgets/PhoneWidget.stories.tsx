import { Meta, StoryObj } from '@storybook/react-vite'
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { PhoneWidget } from './PhoneWidget'

const SCHEMA: RJSFSchema = {
  type: 'object',
  required: ['phone'],
  properties: { phone: { type: 'string', title: 'Phone' } },
}
const UI_SCHEMA: UiSchema = { phone: { 'ui:widget': 'PhoneWidget' } }
const WIDGETS = { PhoneWidget }

function PhoneWidgetDemo() {
  return (
    <JsonSchemaForm<Record<string, unknown>>
      schema={SCHEMA}
      uiSchema={UI_SCHEMA}
      widgets={WIDGETS}
      showErrorList={false}
    >
      <></>
    </JsonSchemaForm>
  )
}

const meta = {
  title: 'Components/JsonSchemaForm/PhoneWidget',
  component: PhoneWidgetDemo,
} satisfies Meta<typeof PhoneWidgetDemo>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
