import { Meta, StoryObj } from '@storybook/react-vite'
import RangeSlider, { RangeSliderProps } from './RangeSlider'
import { Paper } from '@mui/material'

const meta: Meta<RangeSliderProps> = {
  title: 'UI/RangeSlider',
  component: RangeSlider,
  decorators: [
    Story => (
      <Paper sx={{ p: 4 }}>
        <Story />
      </Paper>
    ),
  ],
}
export default meta
type Story = StoryObj<typeof meta>

export const RangeSliderDemo: Story = {
  args: {
    domain: ['-100', '100'],
    initialValues: { min: '20', max: '80' },
    step: 5,
  },
}
