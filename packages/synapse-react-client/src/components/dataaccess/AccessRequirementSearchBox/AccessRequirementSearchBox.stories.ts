import { Meta, StoryObj } from '@storybook/react'
import { displayToast } from '../../ToastMessage/ToastMessage'
import AccessRequirementSearchBox from './AccessRequirementSearchBox'

const meta = {
  title: 'Governance/AccessRequirementSearchBox',
  component: AccessRequirementSearchBox,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const AccessRequirementSearchBoxDemo: Story = {
  args: {
    onChange: id => {
      displayToast('Selected id: ' + String(id), 'info')
    },
  },
}
