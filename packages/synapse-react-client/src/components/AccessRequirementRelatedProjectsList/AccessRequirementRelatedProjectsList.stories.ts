import { Meta, StoryObj } from '@storybook/react'
import { AccessRequirementRelatedProjectsList } from './AccessRequirementRelatedProjectsList'

const meta = {
  title: 'Governance/AccessRequirementRelatedProjects',
  component: AccessRequirementRelatedProjectsList,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const ManyProjects: Story = {
  args: {
    accessRequirementId: 9603055,
  },
}

export const OneProject: Story = {
  args: {
    accessRequirementId: 9605913,
  },
}
