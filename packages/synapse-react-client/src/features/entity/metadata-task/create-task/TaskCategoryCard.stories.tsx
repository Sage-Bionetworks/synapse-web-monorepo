import { Chip, Stack } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import TaskCategoryCard from './TaskCategoryCard'
import { ReactComponent as CurateDataIllustration } from '@/assets/illustrations/curate_data_illustration.svg'

const meta = {
  title: 'Synapse/Entity/MetadataTask/TaskCategoryCard',
  component: TaskCategoryCard,
  decorators: [
    Story => (
      <Stack direction="row" gap={3}>
        <Story />
      </Stack>
    ),
  ],
} satisfies Meta<typeof TaskCategoryCard>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Compute Data',
    onClick: () => alert('Selected Compute Data'),
  },
}

export const WithIllustration: Story = {
  args: {
    title: 'Curate Data',
    Illustration: CurateDataIllustration,
    onClick: () => alert('Selected Curate Data'),
  },
}

export const Disabled: Story = {
  args: {
    title: 'Curate Data',
    disabled: true,
    badge: <Chip size="small" label="Coming soon" />,
  },
}
