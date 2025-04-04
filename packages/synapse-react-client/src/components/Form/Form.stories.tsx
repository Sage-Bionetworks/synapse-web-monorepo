import type { Meta, StoryObj } from '@storybook/react'
import { TextField, Select } from '@mui/material'
import Form, { FormProps } from './Form'

const meta = {
  component: Form,
  title: 'Form',
} satisfies Meta<FormProps>
export default meta
type Story = StoryObj<typeof meta>

export const BasicForm: Story = {
  args: {
    fields: {
      title: {
        componentType: TextField,
        label: 'Entity Title',
        isRequired: true,
      },
      type: {
        componentType: Select,
        label: 'Entity Type',
        options: {
          DataStandardOrTool: 'Data Standard or Tool',
          DataSubstrate: 'Data Substrate',
          DataTopic: 'Data Topic',
          Organization: 'Organization',
          UseCase: 'Use Case',
        },
        isRequired: true,
      },
    },
    onSubmit: () => {
      return
    }, //no op
  },
}
