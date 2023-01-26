import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProjectViewCarousel from './ProjectViewCarousel'

export default {
  title: 'Home Page/ProjectViewCarousel',
  component: ProjectViewCarousel,
} as ComponentMeta<typeof ProjectViewCarousel>

const Template: ComponentStory<typeof ProjectViewCarousel> = args => (
  <div style={{ background: 'rgba(22, 75, 110, 0.05)' }}>
    <ProjectViewCarousel {...args} />
  </div>
)

export const Demo = Template.bind({})

Demo.args = {
  entityId: 'syn23593547',
}
