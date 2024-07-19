import { Meta, StoryObj } from '@storybook/react'
import { AclEditor, AclEditorProps } from './AclEditor'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { fn } from '@storybook/test'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'
import { MOCK_TEAM_ID } from '../../mocks/team/mockTeam'

const meta: Meta<AclEditorProps> = {
  title: 'Synapse/ACL Editor',
  component: AclEditor,
  args: {
    availablePermissionLevels: [
      'CAN_REVIEW_SUBMISSIONS',
      'IS_EXEMPTION_ELIGIBLE',
    ],
    onAddPrincipalToAcl: fn(),
    updateResourceAccessItem: fn(),
    removeResourceAccessItem: fn(),
    isLoading: false,
    isInEditMode: true,
    emptyText: 'No permissions have been granted.',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    resourceAccessList: [
      {
        principalId: MOCK_USER_ID,
        accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
      },
      {
        principalId: MOCK_TEAM_ID,
        accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE],
      },
    ],
  },
  parameters: {
    stack: 'mock',
  },
}
