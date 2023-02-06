import { Meta, StoryObj } from '@storybook/react'
import AccessRequirementSearchBox from '../src/lib/containers/dataaccess/AccessRequirementSearchBox'
import { displayToast } from '../src/lib/containers/ToastMessage'

const meta = {
  title: 'Governance/AccessRequirementSearchBox',
  component: AccessRequirementSearchBox,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const AccessRequirementSearchBoxDemo: Story = {
  args: {
    onChange: id => {
      displayToast('Selected id: ' + id, 'info')
    },
  },
}
