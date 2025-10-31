import { Meta, StoryObj } from '@storybook/react-vite'
import Goals from './GoalsV2'

const meta = {
  title: 'Home Page/GoalsV2',
  component: Goals,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn22315959',
    dataLink: 'https://eliteportal.synapse.org/Explore/Data',
  },
}
