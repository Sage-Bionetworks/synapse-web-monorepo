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
      type: {
        componentType: Select,
        label: 'Entity Type',
        helperText: 'What kind of thing is this?',
        placeholder: 'Select a Category',
        isRequired: true,
        selections: {
          DataStandardOrTool: 'Data Standard or Tool',
          DataSubstrate: 'Data Substrate',
          DataTopic: 'Data Topic',
          Organization: 'Organization',
          UseCase: 'Use Case',
        },
      },
      relatedTo: {
        componentType: TextField,
        label: 'Related To',
        helperText:
          '(Optional) Is this related to another entity? Please list identifiers on separate lines.',
        placeholder: 'e.g., "B2AI_TOPIC:5',
        isRequired: false,
        additionalProperties: {
          multiline: true,
          rows: 3,
        },
      },
    },
    onSubmit: () => {
      return true
    }, //no op
  },
}
