import { Meta, StoryObj } from '@storybook/react'
import AddConditionsForUseButton from '../src/lib/containers/access_requirements/AddConditionsForUseButton'

const meta = {
  title: 'Components/AddConditionsForUseButton',
  component: AddConditionsForUseButton,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn45328519',
  },
}
