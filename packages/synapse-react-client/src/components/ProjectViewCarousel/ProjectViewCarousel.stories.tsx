import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ProjectViewCarousel from './ProjectViewCarousel'

const meta = {
  title: 'Home Page/ProjectViewCarousel',
  component: ProjectViewCarousel,
  decorators: [
    Story => (
      <div style={{ background: 'rgba(22, 75, 110, 0.05)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn23593547',
  },
}
