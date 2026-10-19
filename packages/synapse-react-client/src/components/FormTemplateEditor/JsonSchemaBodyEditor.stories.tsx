import { Meta, StoryObj } from '@storybook/react-vite'
import { JsonSchemaBodyEditor } from './JsonSchemaBodyEditor'

const meta = {
  title: 'Components/FormTemplateEditor/JsonSchemaBodyEditor',
  component: JsonSchemaBodyEditor,
  args: {
    value: {
      type: 'object',
      properties: {
        institution: { type: 'string', title: 'Institution' },
      },
      required: ['institution'],
    },
    onChange: (next: unknown) => console.log('onChange', next),
  },
} satisfies Meta<typeof JsonSchemaBodyEditor>
export default meta

type Story = StoryObj<typeof JsonSchemaBodyEditor>

export const Default: Story = {}
