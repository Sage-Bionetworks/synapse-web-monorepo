import { Meta, StoryObj } from '@storybook/react'
import Resources from '../src/components/Resources/Resources'

const meta = {
  title: 'Home Page/Resources',
  component: Resources,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn22311127',
  },
}
