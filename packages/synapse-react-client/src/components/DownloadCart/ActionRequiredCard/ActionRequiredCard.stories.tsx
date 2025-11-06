import { WideButton } from '@/components/styled/WideButton'
import { EASY_DIFFICULTY } from '@/utils/SynapseConstants'
import { Button, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { ActionRequiredCard } from './ActionRequiredCard'

const meta = {
  title: 'Download/ActionRequiredCard',
  component: ActionRequiredCard,
  tags: ['autodocs'],
  argTypes: {
    actionNode: {
      options: ['Button', 'Button with text (Sharing Settings)'],
      mapping: {
        Button: <WideButton variant={'contained'}>Start</WideButton>,
        'Button with text (Sharing Settings)': (
          <>
            <Typography variant="smallText1" sx={{ color: 'grey.700' }}>
              Contact an administrator to request download permission
            </Typography>
            <Button variant="outlined">View Sharing Settings</Button>
          </>
        ),
      },
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const Card: Story = {
  args: {
    isLoading: false,
    title: 'The title of the card',
    description: 'The description of the card',
    actionNode: 'Button',
    iconType: EASY_DIFFICULTY,
    count: 42,
  },
}
