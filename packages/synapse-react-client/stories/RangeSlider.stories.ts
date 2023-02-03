import { Meta, StoryObj } from '@storybook/react'
import { RangeSlider } from '../src/lib/containers/widgets/RangeSlider'

const meta = {
  title: 'UI/RangeSlider',
  component: RangeSlider,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const RangeSliderDemo: Story = {
  args: {
    domain: ['-100', '100'],
    initialValues: { min: '20', max: '80' },
    step: 5,
    doUpdateOnApply: false,
    maxTickCount: 15,
  },
}
