import { Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID,
  MOCK_MANAGED_ACCESS_REQUIREMENT_ACL,
} from '../../mocks/mockAccessRequirementAcls'
import { getAccessRequirementAclHandler } from '../../mocks/msw/handlers/accessRequirementHandlers'
import { getUserProfileHandlers } from '../../mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { AccessRequirementAclEditor } from './AccessRequirementAclEditor'

const meta: Meta = {
  title: 'Governance/AccessRequirementAclEditor',
  component: AccessRequirementAclEditor,
  decorators: [
    Story => (
      <Paper sx={{ mx: 'auto', p: '44px', maxWidth: '750px' }}>
        <Story />
      </Paper>
    ),
  ],
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        getAccessRequirementAclHandler(MOCK_REPO_ORIGIN),
      ],
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ExistingAcl: Story = {
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id,
  },
}

export const NoExistingAcl: Story = {
  args: {
    accessRequirementId: MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID,
  },
}
