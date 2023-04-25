import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Paper } from '@mui/material'
import RequirementItem from '../../src/lib/containers/access_requirement_list/RequirementItem'
import { displayToast } from '../../src/lib/containers/ToastMessage'
import MarkdownSynapse from '../../src/lib/containers/markdown/MarkdownSynapse'
import { mockManagedACTAccessRequirementWikiPage } from '../../mocks/mockWiki'
import { RequirementItemState } from '../../src/lib/containers/access_requirement_list/AccessApprovalCheckMark'

const meta: Meta = {
  title: 'Governance/Data Access Request Flow/RequirementItem',
  component: RequirementItem,
  render: args => (
    <Paper sx={{ p: 5, margin: 'auto', maxWidth: '700px' }}>
      <RequirementItem {...args}>
        <MarkdownSynapse
          markdown={mockManagedACTAccessRequirementWikiPage.markdown}
        />
      </RequirementItem>
    </Paper>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Complete: Story = {
  args: {
    state: RequirementItemState.COMPLETE,
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
    state: RequirementItemState.PENDING,

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
    state: RequirementItemState.LOADING,
    actions: [],
  },
}

export const NoActions: Story = {
  args: {
    state: RequirementItemState.COMPLETE,
    actions: [],
  },
}

export const Locked: Story = {
  args: {
    state: RequirementItemState.LOCKED,
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
