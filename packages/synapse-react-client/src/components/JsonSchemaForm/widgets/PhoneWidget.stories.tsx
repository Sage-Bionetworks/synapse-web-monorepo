import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { PhoneWidget } from './PhoneWidget'

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

const meta = {
  title: 'Components/JsonSchemaForm/PhoneWidget',
  component: PhoneWidgetDemo,
} satisfies Meta<typeof PhoneWidgetDemo>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
