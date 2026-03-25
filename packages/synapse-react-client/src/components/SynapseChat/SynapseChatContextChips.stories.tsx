import { Meta, StoryObj } from '@storybook/react-vite'
import { SynapseChatContextChips } from './SynapseChatContextChips'
import { AgentPromptSessionContext } from '@sage-bionetworks/synapse-client'

const meta = {
  title: 'Synapse/Chat/ContextChips',
  component: SynapseChatContextChips,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'compact'],
    },
    maxVisible: {
      control: 'number',
    },
  },
} satisfies Meta<typeof SynapseChatContextChips>

export default meta
type Story = StoryObj<typeof meta>

const singleEntityContext: AgentPromptSessionContext[] = [
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
    entityId: 'syn123456',
  },
]

const singleTableRowContext: AgentPromptSessionContext[] = [
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.TableRowContext',
    sourceTableEntityId: 'syn345678',
  },
]

const mixedContexts: AgentPromptSessionContext[] = [
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
    entityId: 'syn123456',
  },
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.TableRowContext',
    sourceTableEntityId: 'syn345678',
  },
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
    entityId: 'syn789012',
    versionNumber: 5,
  },
]

const manyContexts: AgentPromptSessionContext[] = [
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
    entityId: 'syn111111',
  },
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
    entityId: 'syn222222',
  },
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.TableRowContext',
    sourceTableEntityId: 'syn333333',
  },
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
    entityId: 'syn444444',
    versionNumber: 2,
  },
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.TableRowContext',
    sourceTableEntityId: 'syn555555',
    sourceTableEntityVersion: 3,
  },
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
    entityId: 'syn666666',
  },
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
    entityId: 'syn777777',
  },
  {
    concreteType: 'org.sagebionetworks.repo.model.agent.TableRowContext',
    sourceTableEntityId: 'syn888888',
  },
]

export const SingleEntity: Story = {
  args: {
    contexts: singleEntityContext,
    variant: 'default',
  },
}

export const SingleTableRow: Story = {
  args: {
    contexts: singleTableRowContext,
    variant: 'default',
  },
}

export const MixedContextTypes: Story = {
  args: {
    contexts: mixedContexts,
    variant: 'default',
  },
}

export const ManyContexts: Story = {
  args: {
    contexts: manyContexts,
    variant: 'default',
  },
}

export const WithMaxVisible: Story = {
  args: {
    contexts: manyContexts,
    variant: 'default',
    maxVisible: 3,
  },
}

export const CompactVariant: Story = {
  args: {
    contexts: mixedContexts,
    variant: 'compact',
  },
}

export const CompactWithMaxVisible: Story = {
  args: {
    contexts: manyContexts,
    variant: 'compact',
    maxVisible: 4,
  },
}

export const WithRemoveButton: Story = {
  args: {
    contexts: mixedContexts,
    variant: 'default',
    onRemove: () => alert('Context removed'),
  },
}

export const EmptyContexts: Story = {
  args: {
    contexts: [],
    variant: 'default',
  },
}
