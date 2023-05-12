import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import RenderIfInView from '../src/components/RenderIfInView/RenderIfInView'

const meta = {
  title: 'Components/RenderIfInView',
  component: RenderIfInView,
  render: args => (
    <RenderIfInView>
      <div
        style={{
          backgroundColor: '#adedba',
          transition: 'background-color 1s',
        }}
      >
        RenderIfInView uses the IntersectionObserver API to allow conditional
        child rendering and callbacks based on viewport visibility. It will
        render children when it's scrolled into view.
      </div>
    </RenderIfInView>
  ),
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
