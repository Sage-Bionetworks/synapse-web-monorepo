import { mockFolderEntity } from '@/mocks/entity/mockEntity'
import mockProject from '@/mocks/entity/mockProject'
import { Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import EntityViewScopeEditor from './EntityViewScopeEditor'

const meta: Meta = {
  title: 'Synapse/EntityView/Scope Editor',
  component: EntityViewScopeEditor,
  decorators: [
    Story => (
      <Paper sx={{ mx: 'auto', p: 4, maxWidth: '720px' }}>
        <Story />
      </Paper>
    ),
  ],
  render: function Render(args) {
    const [ids, setIds] = useState<string[]>([])
    return <EntityViewScopeEditor {...args} scopeIds={ids} onChange={setIds} />
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {
    scopeIds: [],
  },
}

export const HasItems: Story = {
  args: {
    scopeIds: [mockProject.id, mockFolderEntity.id!],
  },
}
