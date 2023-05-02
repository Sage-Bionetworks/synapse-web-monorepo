import React, { Meta, StoryObj } from '@storybook/react'

import ExperimentalMode from '../src/lib/containers/ExperimentalMode'

const meta = {
  title: 'Authentication/ExperimentalMode',
  component: ExperimentalMode,
  render: () => {
    return (
      <div style={{ marginTop: '150px' }}>
        <ExperimentalMode />
      </div>
    )
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
