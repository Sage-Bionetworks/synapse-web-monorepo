import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RenderIfInView from './RenderIfInView'

export default {
  title: 'Components/RenderIfInView',
  component: RenderIfInView,
} as ComponentMeta<typeof RenderIfInView>

const Template: ComponentStory<typeof RenderIfInView> = args => (
  <RenderIfInView>
    <div
      style={{ backgroundColor: '#adedba', transition: 'background-color 1s' }}
    >
      RenderIfInView uses the IntersectionObserver API to allow conditional
      child rendering and callbacks based on viewport visibility. It will render
      children when it's scrolled into view.
    </div>
  </RenderIfInView>
)

export const Demo = Template.bind({})
