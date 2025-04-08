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
        helperText: 'The name of the entity',
        isRequired: true,
      },
      type: {
        componentType: Select,
        label: 'Entity Type',
        helperText: 'What kind of thing is this?',
        selections: {
          DataStandardOrTool: 'Data Standard or Tool',
          DataSubstrate: 'Data Substrate',
          DataTopic: 'Data Topic',
          Organization: 'Organization',
          UseCase: 'Use Case',
        },
        isRequired: true,
      },
      relatedTo: {
        componentType: TextField,
        label: 'Related To',
        helperText:
          '(Optional) Is this related to another entity? Please list identifiers on separate lines.',
        isRequired: false,
        additionalProperties: {
          multiline: true,
          rows: 3,
        },
      },
    },
    onSubmit: () => {
      return
    }, //no op
  },
}
