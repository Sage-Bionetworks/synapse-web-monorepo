import { Meta, StoryObj } from '@storybook/react-vite'
import AccessRequirementSearchBox from './AccessRequirementSearchBox'
import { displayToast } from '../../ToastMessage/ToastMessage'

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
