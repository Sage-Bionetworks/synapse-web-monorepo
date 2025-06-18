import { Meta, StoryObj } from '@storybook/react'
import SustainabilityScorecard from './SustainabilityScorecard'

const meta = {
  title: 'Components/SustainabilityScorecard',
  component: SustainabilityScorecard,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
