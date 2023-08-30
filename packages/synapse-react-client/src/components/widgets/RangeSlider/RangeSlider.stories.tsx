import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Paper } from '@mui/material'
import { RangeSlider } from './RangeSlider'

const meta = {
  title: 'UI/RangeSlider',
  component: RangeSlider,
  decorators: [
    Story => (
      <Paper sx={{ p: 4 }}>
        <Story />
      </Paper>
    ),
  ],
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const RangeSliderDemo: Story = {
  args: {
    domain: ['-100', '100'],
    initialValues: { min: '20', max: '80' },
    step: 5,
    doUpdateOnApply: false,
  },
}
