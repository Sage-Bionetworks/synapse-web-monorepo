import { Box } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import ExperimentalFeaturesButton from './ExperimentalFeaturesButton'

const meta = {
  title: 'Synapse/ExperimentalFeaturesButton',
  component: ExperimentalFeaturesButton,
  args: {
    isActive: false,
    count: 0,
    onClick: fn(),
  },
  decorators: [
    Story => (
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', p: 3 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ExperimentalFeaturesButton>
export default meta

type Story = StoryObj<typeof meta>

export const NoneEnabled: Story = {}

export const SomeEnabled: Story = {
  args: { isActive: true, count: 2 },
}

export const ManyEnabled: Story = {
  args: { isActive: true, count: 12 },
}

export const EnableAllWithNoFeatures: Story = {
  args: { isActive: true, count: 0 },
}
