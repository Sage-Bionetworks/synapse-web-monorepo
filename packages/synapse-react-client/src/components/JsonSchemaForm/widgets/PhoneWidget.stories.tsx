import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { PhoneWidget } from './PhoneWidget'

const meta = {
  title: 'Components/JsonSchemaForm/PhoneWidget',
  component: PhoneWidget,
} satisfies Meta<typeof PhoneWidget>
export default meta
type Story = StoryObj<typeof meta>

function PhoneWidgetDemo() {
  const [formData, setFormData] = useState<Record<string, unknown>>({})
  return (
    <JsonSchemaForm<Record<string, unknown>>
      schema={{
        type: 'object',
        required: ['phone'],
        properties: { phone: { type: 'string', title: 'Phone' } },
      }}
      uiSchema={{ phone: { 'ui:widget': 'PhoneWidget' } }}
      widgets={{ PhoneWidget }}
      formData={formData}
      onChange={({ formData: next }) => setFormData(next ?? {})}
      showErrorList={false}
    >
      <></>
    </JsonSchemaForm>
  )
}

export const Default: Story = {
  render: () => <PhoneWidgetDemo />,
}
