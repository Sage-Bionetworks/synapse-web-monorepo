import { Meta, StoryObj } from '@storybook/react-vite'
import { TextField } from './MuiTextField'

const meta = {
  title: 'UI/MUI/TextField',
  component: TextField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?type=design&node-id=540-19147',
    },
  },
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'Text Field',
  args: {
    label: 'My Label Text Here',
    placeholder: 'Placeholder text',
    error: true,
  },
}
