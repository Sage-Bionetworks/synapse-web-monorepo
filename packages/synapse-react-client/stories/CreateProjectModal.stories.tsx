import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { CreateProjectModal } from '../src/lib/containers/CreateProjectModal'

const meta = {
  title: 'Synapse/CreateProjectModal',
  component: CreateProjectModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    isShowingModal: true,
  },
}
