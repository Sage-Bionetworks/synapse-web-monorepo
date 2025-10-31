import { Meta, StoryObj } from '@storybook/react-vite'
import AddConditionsForUseButton from './AddConditionsForUseButton'
import { fn } from 'storybook/test'
const meta = {
  title: 'Components/AddConditionsForUseButton',
  component: AddConditionsForUseButton,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn45328519',
    onACTMemberClick: fn(),
  },
}
