import { Meta, StoryObj } from '@storybook/react-vite'
import { SynapseChatContextChip } from './SynapseChatContextChip'
import { AgentPromptSessionContext } from '@sage-bionetworks/synapse-client'

const meta = {
  title: 'Synapse/Chat/ContextChip',
  component: SynapseChatContextChip,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'compact'],
    },
    showLabel: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SynapseChatContextChip>

export default meta
type Story = StoryObj<typeof meta>

const entityContext: AgentPromptSessionContext = {
  concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
  entityId: 'syn123456',
}

const entityContextWithVersion: AgentPromptSessionContext = {
  concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
  entityId: 'syn789012',
  versionNumber: 5,
}

const tableRowContext: AgentPromptSessionContext = {
  concreteType: 'org.sagebionetworks.repo.model.agent.TableRowContext',
  sourceTableEntityId: 'syn345678',
}

const tableRowContextWithVersion: AgentPromptSessionContext = {
  concreteType: 'org.sagebionetworks.repo.model.agent.TableRowContext',
  sourceTableEntityId: 'syn901234',
  sourceTableEntityVersion: 3,
}

export const EntityContextChip: Story = {
  args: {
    context: entityContext,
    variant: 'default',
    showLabel: true,
  },
}

export const EntityContextWithVersion: Story = {
  args: {
    context: entityContextWithVersion,
    variant: 'default',
    showLabel: true,
  },
}

export const TableRowContextChip: Story = {
  args: {
    context: tableRowContext,
    variant: 'default',
    showLabel: true,
  },
}

export const TableRowContextWithVersion: Story = {
  args: {
    context: tableRowContextWithVersion,
    variant: 'default',
    showLabel: true,
  },
}

export const CompactVariant: Story = {
  args: {
    context: entityContext,
    variant: 'compact',
    showLabel: true,
  },
}

export const WithRemoveButton: Story = {
  args: {
    context: entityContext,
    variant: 'default',
    showLabel: true,
    onRemove: () => alert('Context removed'),
  },
}

export const CompactWithRemove: Story = {
  args: {
    context: tableRowContext,
    variant: 'compact',
    showLabel: true,
    onRemove: () => alert('Context removed'),
  },
}
