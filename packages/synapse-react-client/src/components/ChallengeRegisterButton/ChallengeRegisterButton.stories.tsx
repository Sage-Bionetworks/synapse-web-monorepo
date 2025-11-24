import { Meta, StoryObj } from '@storybook/react-vite'
import ChallengeRegisterButton from './index'

const meta = {
  title: 'UI/ChallengeRegisterButton',
  component: ChallengeRegisterButton,
  parameters: {
    backgrounds: {
      default: 'Challenge Header',
      values: [{ name: 'Challenge Header', value: '#3E68AA' }],
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    projectId: 'syn51498253',
  },
}
