import { Meta, StoryObj } from '@storybook/react-vite'
import TextFieldWithWordLimit from './TextFieldWithWordLimit'

const meta = {
  title: 'UI/SDS/TextFieldWithWordLimit',
  component: TextFieldWithWordLimit,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/design/jaE5E1p8qv4lZ46iqVdh7y/AD-Knowledge-Portal?node-id=2727-943&m=dev',
      },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const WithMax: Story = {
  args: {
    label: 'Label',
    placeholder: 'my placeholder',
    fullWidth: true,
    required: true,
    maxWords: 10,
  },
}
export const WithMin: Story = {
  args: {
    label: 'Label',
    placeholder: 'my placeholder',
    fullWidth: true,
    required: true,
    minWords: 5,
  },
}
export const WithMaxAndMin: Story = {
  args: {
    label: 'Label',
    placeholder: 'my placeholder',
    fullWidth: true,
    required: true,
    minWords: 5,
    maxWords: 10,
  },
}
