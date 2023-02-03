import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ProjectViewCarousel from '../src/lib/containers/home_page/project_view_carousel/ProjectViewCarousel'

const meta = {
  title: 'Home Page/ProjectViewCarousel',
  component: ProjectViewCarousel,
  render: args => (
    <div style={{ background: 'rgba(22, 75, 110, 0.05)' }}>
      <ProjectViewCarousel {...args} />
    </div>
  ),
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn23593547',
  },
}
