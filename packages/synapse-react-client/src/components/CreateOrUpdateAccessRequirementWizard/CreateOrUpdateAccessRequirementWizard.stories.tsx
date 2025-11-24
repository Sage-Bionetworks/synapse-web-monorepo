import {
  mockACTAccessRequirement,
  mockToUAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import CreateOrUpdateAccessRequirementWizard from './CreateOrUpdateAccessRequirementWizard'

const meta = {
  title: 'Governance/CreateOrUpdateAccessRequirementWizard',
  component: CreateOrUpdateAccessRequirementWizard,
  parameters: {
    stack: 'development',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const CreateTeamAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    subject: {
      id: '3429759',
      type: RestrictableObjectType.TEAM,
    },
  },
}

export const CreateEntityAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    subject: {
      id: 'syn12714410',
      type: RestrictableObjectType.ENTITY,
    },
  },
}

export const EditManagedAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: '9602671',
  },
}

export const EditSelfSignAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: '9602700',
  },
}

/* For Mock Stories, updates to Wiki Instructions will not be visible until MarkdownSynapse is updated to use react-query. */
export const MockTermsOfUseAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: mockToUAccessRequirement.id.toString(),
  },
  parameters: {
    stack: 'mock',
  },
}

export const MockActAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: mockACTAccessRequirement.id.toString(),
  },
  parameters: {
    stack: 'mock',
  },
}
