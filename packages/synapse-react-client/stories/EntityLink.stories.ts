import { Meta, StoryObj } from '@storybook/react'
import { EntityLink } from '../src/lib/containers/EntityLink'

const meta = {
  title: 'Components/EntityLink',
  component: EntityLink,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Private: Story = {
  args: {
    entity: 'syn32846102',
  },
}
