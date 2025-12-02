import { mockManagedACTAccessRequirementWikiPage } from '@/mocks/mockWiki'
import { Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import MarkdownSynapse from '../../Markdown/MarkdownSynapse/MarkdownSynapse'
import { displayToast } from '../../ToastMessage/ToastMessage'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'
import RequirementItem from './RequirementItem'

const meta = {
  title: 'Governance/Data Access Request Flow/Requirements/RequirementItem',
  component: RequirementItem,
  argTypes: {
    status: {
      control: 'select',
      options: [...new Set(Object.values(RequirementItemStatus))],
    },
  },
  tags: ['autodocs'],
  render: args => (
    <Paper sx={{ p: 5, margin: 'auto', maxWidth: '700px' }}>
      <RequirementItem {...args}>
        <MarkdownSynapse
          markdown={mockManagedACTAccessRequirementWikiPage.markdown}
        />
      </RequirementItem>
    </Paper>
  ),
} satisfies Meta<typeof RequirementItem>

export default meta

type Story = StoryObj<typeof meta>

export const Complete: Story = {
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [
      {
        variant: 'outlined',
        children: 'Learn More',
        onClick: () => {
          displayToast('Learn More clicked')
        },
      },
    ],
  },
}
export const Pending: Story = {
  args: {
    status: RequirementItemStatus.PENDING,

    actions: [
      {
        variant: 'outlined',
        children: 'Learn More',
        onClick: () => {
          displayToast('Learn More clicked')
        },
      },
    ],
  },
}

export const Loading: Story = {
  args: {
    status: RequirementItemStatus.LOADING,
    actions: [],
  },
}

export const NoActions: Story = {
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [],
  },
}

export const Locked: Story = {
  args: {
    status: RequirementItemStatus.LOCKED,
    actions: [
      {
        variant: 'outlined',
        children: 'Accept terms',
        onClick: () => {
          displayToast('Accept terms clicked')
        },
      },
    ],
  },
}
