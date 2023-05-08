import { Meta, StoryObj } from '@storybook/react'
import { RangeSlider } from '../src/lib/containers/widgets/RangeSlider'
import { Paper } from '@mui/material'

const meta = {
  title: 'UI/RangeSlider',
  component: RangeSlider,
  render: args => (
    <Paper sx={{ p: 4 }}>
      <RangeSlider {...args} />
    </Paper>
  ),
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
